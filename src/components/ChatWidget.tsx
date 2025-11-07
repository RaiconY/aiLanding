import { ChatKit, useChatKit } from '@openai/chatkit-react';

function ChatWidget() {
  const { control } = useChatKit({
    api: {
      async getClientSecret(existing?: string) {
        if (existing) {
          return existing;
        }

        const response = await fetch('/api/chatkit/session', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({}),
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch ChatKit client secret: ${response.status}`);
        }

        const { client_secret: clientSecret } = await response.json();
        return clientSecret;
      },
    },
  });

  return <ChatKit control={control} className="h-[600px] w-[320px]" />;
}

export default ChatWidget;
