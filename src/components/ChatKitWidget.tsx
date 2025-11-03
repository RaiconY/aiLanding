import { useEffect, useRef, useState } from "react";

const CHATKIT_SCRIPT_ID = "openai-chatkit-script";

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

function loadChatKitScript(
  onLoad: () => void,
  onError: (error: ErrorEvent) => void,
  options: { forceReload?: boolean } = {}
) {
  const { forceReload = false } = options;
  let existingScript = document.getElementById(CHATKIT_SCRIPT_ID) as HTMLScriptElement | null;

  if (existingScript) {
    if (forceReload) {
      existingScript.remove();
      existingScript = null;
      window.ChatKit = undefined;
    } else {
      if (window.ChatKit) {
        onLoad();
      } else {
        existingScript.addEventListener("load", onLoad, { once: true });
        existingScript.addEventListener("error", onError, { once: true });
      }
      return existingScript;
    }
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
  const [isLoading, setIsLoading] = useState(true);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let cancelled = false;

    setIsLoading(true);
    setError(null);

    const handleError = () => {
      if (!cancelled) {
        setIsLoading(false);
        setError(
          "Не удалось загрузить ChatKit. Проверьте подключение к интернету и попробуйте снова."
        );
      }
    };

    const handleLoad = () => {
      if (cancelled || !window.ChatKit || !containerRef.current) {
        if (!cancelled) {
          setIsLoading(false);
          setError("Не удалось инициализировать чат. Попробуйте обновить страницу.");
        }
        return;
      }

      try {
        window.ChatKit.mount(containerRef.current, {
          async getSession() {
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
              throw new Error(message || "Failed to obtain ChatKit session");
            }

            return response.json();
          },
          theme: "auto",
          title: "AI Assistant",
          welcome: "Привет! Как я могу помочь?",
          position: "bottom-right",
        });
        if (!cancelled) {
          setIsLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          setIsLoading(false);
          setError("Не удалось инициализировать чат. Попробуйте обновить страницу.");
          console.error("ChatKit mount error", err);
        }
      }
    };

    const script = loadChatKitScript(handleLoad, handleError, {
      forceReload: attempt > 0,
    });

    return () => {
      cancelled = true;
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
  }, [attempt]);

  return (
    <div className="mx-auto mt-16 flex max-w-5xl flex-col items-center gap-4 px-4 text-center">
      <h2 className="text-3xl font-semibold text-gray-900">Поболтайте с ассистентом</h2>
      <p className="max-w-2xl text-gray-600">
        Задайте вопросы о продукте и получите мгновенные ответы от нашего AI-ассистента.
      </p>
      {isLoading && (
        <div className="w-full rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-600 shadow-sm">
          Загружаем ассистента...
        </div>
      )}
      {error && (
        <div className="flex w-full flex-col gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-left text-sm text-red-700">
          <span>{error}</span>
          <div className="flex flex-wrap items-center gap-2 text-xs text-red-600">
            <button
              type="button"
              onClick={() => setAttempt((value) => value + 1)}
              className="rounded-md bg-red-600 px-3 py-1.5 font-medium text-white transition hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
            >
              Попробовать снова
            </button>
            <span>
              Если проблема повторяется, напишите нам в
              <a
                className="ml-1 underline"
                href="https://t.me/Ilya_Plv"
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram @Ilya_Plv
              </a>
              .
            </span>
          </div>
        </div>
      )}
      <div ref={containerRef} className={`w-full ${error ? "hidden" : ""}`} />
    </div>
  );
}
