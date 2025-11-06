import "dotenv/config";
import http from "node:http";
import OpenAI from "openai";

const port = Number(process.env.PORT) || 3000;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const server = http.createServer(async (req, res) => {
  if (req.method === "POST" && req.url === "/api/chatkit/session") {
    let rawBody = "";

    req.on("data", (chunk) => {
      rawBody += chunk;
    });

    req.on("end", async () => {
      try {
        const workflowId = process.env.OPENAI_WORKFLOW_ID;

        if (!workflowId) {
          res.writeHead(500, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({
              error:
                "ChatKit server is not configured. Please set OPENAI_WORKFLOW_ID environment variable.",
            })
          );
          return;
        }

        const requestBody = rawBody ? JSON.parse(rawBody) : {};

        // Create ChatKit session using OpenAI SDK
        const session = await openai.chatkit.sessions.create({
          workflow_id: workflowId,
          user: requestBody?.user ?? null,
        });

        // Return the client_secret as per documentation
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ client_secret: session.client_secret }));
      } catch (error) {
        console.error("ChatKit session error:", error);
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
