import { useEffect, useRef, useState } from "react";

const CHATKIT_SCRIPT_ID = "openai-chatkit-script";

type StepKey = "script" | "mount" | "session";
type StepStatus = "pending" | "success" | "error";

type StepInfo = {
  status: StepStatus;
  detail?: string;
};

declare global {
  interface Window {
    ChatKit?: {
      mount: (
        target: Element | string,
        options: {
          getSession: () => Promise<unknown>;
          theme?: "light" | "dark" | "auto";
          title?: string;
          welcome?: string;
          position?: "bottom-right" | "bottom-left" | "embedded";
        }
      ) => void;
      unmount?: (target: Element | string) => void;
    };
  }
}

function loadChatKitScript(onLoad: () => void, onError: (error: ErrorEvent) => void) {
  const existingScript = document.getElementById(CHATKIT_SCRIPT_ID) as HTMLScriptElement | null;

  if (existingScript) {
    if (window.ChatKit) {
      onLoad();
    } else {
      existingScript.addEventListener("load", onLoad, { once: true });
      existingScript.addEventListener("error", onError, { once: true });
    }
    return existingScript;
  }

  const script = document.createElement("script");
  script.id = CHATKIT_SCRIPT_ID;
  script.src = "https://cdn.openai.com/chatkit/chatkit.js";
  script.async = true;
  script.addEventListener("load", onLoad, { once: true });
  script.addEventListener("error", onError, { once: true });
  document.body.appendChild(script);
  return script;
}

export default function ChatKitWidget() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<
    "loading-script" | "mounting" | "requesting-session" | "ready"
  >("loading-script");
  const [steps, setSteps] = useState<Record<StepKey, StepInfo>>({
    script: { status: "pending" },
    mount: { status: "pending" },
    session: { status: "pending" },
  });

  const updateStep = (key: StepKey, stepStatus: StepStatus, detail?: string) => {
    setSteps((prev) => {
      const prevStep = prev[key];
      if (prevStep.status === stepStatus && prevStep.detail === detail) {
        return prev;
      }

      return {
        ...prev,
        [key]: { status: stepStatus, detail },
      };
    });
  };

  useEffect(() => {
    let cancelled = false;
    let mountVerificationTimeout: ReturnType<typeof setTimeout> | null = null;
    let mountVerificationAttempts = 0;

    const verifyMount = () => {
      if (cancelled) {
        return;
      }

      const host = containerRef.current;
      const chatElement = host?.querySelector("openai-chatkit");

      if (chatElement) {
        updateStep("mount", "success");
        return;
      }

      if (mountVerificationAttempts >= 5) {
        updateStep(
          "mount",
          "error",
          "Web-компонент ChatKit не появился в DOM. Проверьте консоль браузера на ошибки выполнения."
        );
        setError((prev) =>
          prev ??
          "ChatKit не смог смонтироваться в DOM. Откройте DevTools → Console, чтобы увидеть подробности, и проверьте, не блокирует ли CSP загрузку скрипта."
        );
        setStatus("loading-script");
        return;
      }

      mountVerificationAttempts += 1;
      mountVerificationTimeout = setTimeout(verifyMount, 400);
    };

    const handleError = () => {
      if (!cancelled) {
        setError(
          "Не удалось загрузить ChatKit. Проверьте подключение к CDN и попробуйте позже."
        );
        setStatus("loading-script");
        updateStep(
          "script",
          "error",
          "Скрипт chatkit.js не загрузился. Проверьте сеть, блокировку CDN или CSP."
        );
      }
    };

    const handleLoad = () => {
      if (cancelled || !containerRef.current) {
        return;
      }

      if (!window.ChatKit) {
        updateStep(
          "script",
          "error",
          "Скрипт chatkit.js загрузился, но window.ChatKit недоступен. Убедитесь, что запрос не был заблокирован и URL актуален."
        );
        setError(
          "ChatKit не инициализирован в браузере. Проверьте, что https://cdn.openai.com/chatkit/chatkit.js доступен."
        );
        setStatus("loading-script");
        return;
      }

      try {
        setStatus("mounting");
        updateStep("script", "success");
        updateStep("mount", "pending", "Инициализируем web-компонент ChatKit.");
        mountVerificationAttempts = 0;
        verifyMount();

        window.ChatKit.mount(containerRef.current, {
          async getSession() {
            if (!cancelled) {
              setStatus("requesting-session");
              updateStep(
                "session",
                "pending",
                "Запрашиваем /api/chatkit/session на вашем сервере."
              );
            }

            const response = await fetch("/api/chatkit/session", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                user: {
                  id: "visitor-" + crypto.randomUUID(),
                },
              }),
            });

            if (!response.ok) {
              const message = await response.text();
              updateStep(
                "session",
                "error",
                "Сервер вернул ошибку при обмене сессии. Проверьте OPENAI_API_KEY, OPENAI_CHATKIT_CLIENT_SECRET и OPENAI_WORKFLOW_ID."
              );
              throw new Error(
                message ||
                  "Failed to obtain ChatKit session. Ensure the server has valid OPENAI_API_KEY, OPENAI_CHATKIT_CLIENT_SECRET and OPENAI_WORKFLOW_ID values."
              );
            }

            const session = await response.json();

            if (
              !session ||
              typeof session !== "object" ||
              !("client_secret" in session) ||
              !("id" in session)
            ) {
              updateStep(
                "session",
                "error",
                "Ответ /api/chatkit/session не содержит client_secret. Проверьте, что сервер проксирует ответ OpenAI без изменений."
              );
              throw new Error(
                "Unexpected ChatKit session payload. The response must include client_secret and id."
              );
            }

            if (!cancelled) {
              setStatus("ready");
              updateStep("session", "success");
            }

            return session;
          },
          theme: "auto",
          title: "AI Assistant",
          welcome: "Привет! Как я могу помочь?",
          position: "bottom-right",
        });
      } catch (err) {
        if (!cancelled) {
          const details = err instanceof Error ? err.message : String(err);
          setError(
            "Не удалось инициализировать чат. Проверьте конфигурацию сервера (OPENAI_API_KEY, OPENAI_CHATKIT_CLIENT_SECRET, OPENAI_WORKFLOW_ID) и обновите страницу."
          );
          console.error("ChatKit mount error", details);
          setStatus("loading-script");
          setSteps((prev) => ({
            ...prev,
            mount:
              prev.mount.status === "success"
                ? prev.mount
                : {
                    status: "error",
                    detail:
                      "Web-компонент ChatKit не смонтировался. Проверьте консоль браузера на наличие ошибок исполнения.",
                  },
          }));
        }
      }
    };

    const script = loadChatKitScript(handleLoad, handleError);

    return () => {
      cancelled = true;
      if (mountVerificationTimeout) {
        clearTimeout(mountVerificationTimeout);
      }
      if (script) {
        script.removeEventListener("load", handleLoad);
        script.removeEventListener("error", handleError);
      }

      if (window.ChatKit && containerRef.current) {
        try {
          window.ChatKit.unmount?.(containerRef.current);
        } catch (err) {
          console.warn("Failed to unmount ChatKit", err);
        }
      }
    };
  }, []);

  return (
    <div className="mx-auto mt-16 flex max-w-5xl flex-col items-center gap-4 px-4 text-center">
      <h2 className="text-3xl font-semibold text-gray-900">Поболтайте с ассистентом</h2>
      <p className="max-w-2xl text-gray-600">
        Задайте вопросы о продукте и получите мгновенные ответы от нашего AI-ассистента.
      </p>
      {error ? (
        <div className="w-full rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {error}
        </div>
      ) : (
        <div ref={containerRef} className="w-full" />
      )}
      <div className="w-full rounded-lg bg-gray-50 p-4 text-left text-sm text-gray-700">
        <h3 className="font-medium text-gray-900">Диагностика загрузки</h3>
        <p className="mt-2 text-gray-600">
          {status === "loading-script" && "Загружаем клиент ChatKit и ждём инициализации веб-компонента."}
          {status === "mounting" && "Монтируем веб-компонент ChatKit на страницу."}
          {status === "requesting-session" &&
            "Запрашиваем короткоживущую сессию у сервера для подключения ассистента."}
          {status === "ready" &&
            "Ассистент готов. Сеанс ChatKit активирован, можно начинать диалог."}
        </p>
        <ol className="mt-3 list-decimal space-y-3 pl-5 text-gray-600">
          <li>
            <strong>Загрузка скрипта:</strong> {steps.script.status === "success" && "✅"}
            {steps.script.status === "pending" && "⏳"}
            {steps.script.status === "error" && "❌"} {steps.script.detail || "Ожидаем chatkit.js из CDN."}
          </li>
          <li>
            <strong>Монтирование компонента:</strong> {steps.mount.status === "success" && "✅"}
            {steps.mount.status === "pending" && "⏳"}
            {steps.mount.status === "error" && "❌"} {steps.mount.detail || "Инициализируем web-компонент ChatKit."}
          </li>
          <li>
            <strong>Обмен на сессию:</strong> {steps.session.status === "success" && "✅"}
            {steps.session.status === "pending" && "⏳"}
            {steps.session.status === "error" && "❌"} {steps.session.detail || "Ожидаем ответ от /api/chatkit/session."}
          </li>
        </ol>
      </div>
    </div>
  );
}
