import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function handler(event, context) {
  // Handle CORS
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };

  // Handle preflight request
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: "",
    };
  }

  // Only allow POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const workflowId = process.env.OPENAI_WORKFLOW_ID;

    if (!workflowId) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          error: "ChatKit server is not configured. Please set OPENAI_WORKFLOW_ID environment variable.",
        }),
      };
    }

    const requestBody = event.body ? JSON.parse(event.body) : {};

    // Create ChatKit session using OpenAI SDK
    const session = await openai.chatkit.sessions.create({
      workflow_id: workflowId,
      user: requestBody?.user ?? null,
    });

    // Return the client_secret as per documentation
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ client_secret: session.client_secret }),
    };
  } catch (error) {
    console.error("ChatKit session error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: error instanceof Error ? error.message : "Unknown error",
      }),
    };
  }
}
