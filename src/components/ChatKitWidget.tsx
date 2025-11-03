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

  useEffect(() => {
    let cancelled = false;

    const handleError = () => {
      if (!cancelled) {
        setError("Не удалось загрузить ChatKit. Пожалуйста, попробуйте позже.");
      }
    };

    const handleLoad = () => {
      if (cancelled || !window.ChatKit || !containerRef.current) {
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
      } catch (err) {
        if (!cancelled) {
          setError("Не удалось инициализировать чат. Попробуйте обновить страницу.");
          console.error("ChatKit mount error", err);
        }
      }
    };

    const script = loadChatKitScript(handleLoad, handleError);

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
    </div>
  );
}
