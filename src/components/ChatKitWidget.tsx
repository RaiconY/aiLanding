import { useState } from "react";
import { ChatKit, useChatKit } from "@openai/chatkit-react";

export default function ChatKitWidget() {
  const [error, setError] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);

  const { control } = useChatKit({
    api: {
      async getClientSecret(existing) {
        // If we have an existing session and need to refresh
        if (existing) {
          // Session refresh logic (optional - can be implemented later)
          console.log("Refreshing existing session");
        }

        try {
          const response = await fetch("/api/chatkit/session", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
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

          const { client_secret } = await response.json();
          setError(null);
          return client_secret;
        } catch (err) {
          const errorMessage = err instanceof Error ? err.message : "Unknown error";
          console.error("ChatKit session error:", errorMessage);
          setError(
            "Не удалось подключиться к чату. Проверьте подключение к интернету и попробуйте снова."
          );
          throw err;
        }
      },
    },
  });

  const handleRetry = () => {
    setAttempt((value) => value + 1);
    setError(null);
    // Force re-mount by changing key
  };

  return (
    <div className="mx-auto mt-16 flex max-w-5xl flex-col items-center gap-4 px-4 text-center">
      <h2 className="text-3xl font-semibold text-gray-900">Поболтайте с ассистентом</h2>
      <p className="max-w-2xl text-gray-600">
        Задайте вопросы о продукте и получите мгновенные ответы от нашего AI-ассистента.
      </p>
      {error && (
        <div className="flex w-full flex-col gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-left text-sm text-red-700">
          <span>{error}</span>
          <div className="flex flex-wrap items-center gap-2 text-xs text-red-600">
            <button
              type="button"
              onClick={handleRetry}
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
      <div key={attempt} className="w-full max-w-2xl">
        <ChatKit control={control} className="h-[600px] w-full rounded-lg shadow-lg" />
      </div>
    </div>
  );
}
