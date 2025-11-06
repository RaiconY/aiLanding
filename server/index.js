import "dotenv/config";
import http from "node:http";

const port = Number(process.env.PORT) || 3000;

const server = http.createServer(async (req, res) => {
  if (req.method === "POST" && req.url === "/api/chatkit/session") {
    let rawBody = "";

    req.on("data", (chunk) => {
      rawBody += chunk;
    });

    req.on("end", async () => {
      try {
        const apiKey = process.env.OPENAI_API_KEY;
        const workflowId = process.env.OPENAI_WORKFLOW_ID;

        if (!apiKey || !workflowId) {
          res.writeHead(500, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({
              error:
                "ChatKit server is not configured. Please set OPENAI_API_KEY and OPENAI_WORKFLOW_ID environment variables.",
            })
          );
          return;
        }

        const requestBody = rawBody ? JSON.parse(rawBody) : {};

        const response = await fetch("https://api.openai.com/v1/chatkit/sessions", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            workflow_id: workflowId,
            user: requestBody?.user ?? null,
          }),
        });

        const data = await response.json();
        const status = response.status;

        res.writeHead(status, { "Content-Type": "application/json" });
        res.end(JSON.stringify(data));
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
