import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  // Handle preflight request
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const workflowId = process.env.OPENAI_WORKFLOW_ID;

    if (!workflowId) {
      return res.status(500).json({
        error: "ChatKit server is not configured. Please set OPENAI_WORKFLOW_ID environment variable.",
      });
    }

    const requestBody = req.body || {};

    // Create ChatKit session using OpenAI SDK
    const session = await openai.chatkit.sessions.create({
      workflow_id: workflowId,
      user: requestBody?.user ?? null,
    });

    // Return the client_secret as per documentation
    return res.status(200).json({ client_secret: session.client_secret });
  } catch (error) {
    console.error("ChatKit session error:", error);
    return res.status(500).json({
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
