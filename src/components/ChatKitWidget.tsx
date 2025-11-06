import { useState } from "react";
import { ChatKit, useChatKit } from "@openai/chatkit-react";
import "@openai/chatkit-react/styles.css";

export default function ChatKitWidget() {
  const [error, setError] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const { control } = useChatKit({
    api: {
      async getClientSecret(existing) {
        console.log("ChatKit: Requesting session...", { existing });

        // If we have an existing session and need to refresh
        if (existing) {
          console.log("ChatKit: Refreshing existing session");
        }

        try {
          setIsLoading(true);
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

          console.log("ChatKit: Response status:", response.status);

          if (!response.ok) {
            const message = await response.text();
            throw new Error(message || "Failed to obtain ChatKit session");
          }

          const { client_secret } = await response.json();
          console.log("ChatKit: Session obtained successfully");
          setError(null);
          setIsLoading(false);
          return client_secret;
        } catch (err) {
          const errorMessage = err instanceof Error ? err.message : "Unknown error";
          console.error("ChatKit session error:", errorMessage);
          setIsLoading(false);
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
    setIsLoading(true);
  };

  return (
    <div className="mx-auto mt-16 flex max-w-5xl flex-col items-center gap-4 px-4 text-center">
      <h2 className="text-3xl font-semibold text-gray-900">Поболтайте с ассистентом</h2>
      <p className="max-w-2xl text-gray-600">
        Задайте вопросы о продукте и получите мгновенные ответы от нашего AI-ассистента.
      </p>
      {isLoading && !error && (
        <div className="w-full rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm text-blue-700">
          <div className="flex items-center justify-center gap-2">
            <svg
              className="animate-spin h-5 w-5 text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span>Загружаем чат...</span>
          </div>
        </div>
      )}
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
