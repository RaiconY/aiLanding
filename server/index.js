import http from "node:http";

function readRequiredEnv(name) {
  const value = process.env[name];
  if (!value || !value.trim()) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value.trim();
}

function validateEnvironment() {
  try {
    const apiKey = readRequiredEnv("OPENAI_API_KEY");
    const clientSecret = readRequiredEnv("OPENAI_CHATKIT_CLIENT_SECRET");
    const workflowId = readRequiredEnv("OPENAI_WORKFLOW_ID");

    if (clientSecret.startsWith("sk-")) {
      console.warn(
        "[chatkit] OPENAI_CHATKIT_CLIENT_SECRET looks like an API key. Double-check that you are using the ChatKit client secret."
      );
    }

    if (!workflowId.startsWith("wf_")) {
      console.warn(
        "[chatkit] OPENAI_WORKFLOW_ID usually starts with 'wf_'. Ensure you're using the Workflow ID from the ChatKit workflow page."
      );
    }

    return { apiKey, clientSecret, workflowId };
  } catch (error) {
    console.error("[chatkit]", error instanceof Error ? error.message : error);
    console.error(
      "[chatkit] Set OPENAI_API_KEY, OPENAI_CHATKIT_CLIENT_SECRET, and OPENAI_WORKFLOW_ID before starting the relay server."
    );
    process.exit(1);
  }
}

const port = Number(process.env.PORT) || 3000;
const cachedConfig = validateEnvironment();

const server = http.createServer(async (req, res) => {
  if (req.method === "POST" && req.url === "/api/chatkit/session") {
    let rawBody = "";

    req.on("data", (chunk) => {
      rawBody += chunk;
    });

    req.on("end", async () => {
      try {
        const apiKey = cachedConfig.apiKey;
        const clientSecret = cachedConfig.clientSecret;
        const workflowId = cachedConfig.workflowId;

        const requestBody = rawBody ? JSON.parse(rawBody) : {};

        const response = await fetch("https://api.openai.com/v1/chatkit/sessions", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            client_secret: clientSecret,
            workflow_id: workflowId,
            user: requestBody?.user ?? null,
          }),
        });

        const text = await response.text();
        const status = response.status;

        if (!response.ok) {
          console.error(
            `[chatkit] Session exchange failed with status ${status}. Verify OPENAI_API_KEY, OPENAI_CHATKIT_CLIENT_SECRET, and OPENAI_WORKFLOW_ID. Response: ${text}`
          );
        }

        res.writeHead(status, { "Content-Type": "application/json" });
        res.end(text);
      } catch (error) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" })
        );
      }
    });

    req.on("error", (error) => {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: error instanceof Error ? error.message : String(error) }));
    });

    return;
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Not found" }));
});

server.listen(port, () => {
  console.log(`ChatKit relay server listening on port ${port}`);
});
