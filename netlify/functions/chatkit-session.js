// In Netlify Functions, environment variables are automatically loaded
// No need for dotenv or .env.production file
// ChatKit Sessions API is called directly via fetch

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
    const apiKey = process.env.OPENAI_API_KEY;
    const workflowId = process.env.OPENAI_WORKFLOW_ID;

    if (!apiKey || !workflowId) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          error: "ChatKit server is not configured. Please set OPENAI_API_KEY and OPENAI_WORKFLOW_ID environment variables.",
        }),
      };
    }

    const requestBody = event.body ? JSON.parse(event.body) : {};

    // Call ChatKit Sessions API directly
    const response = await fetch("https://api.openai.com/v1/chatkit/sessions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        workflow_id: workflowId,
        user: requestBody?.user ?? null,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("ChatKit API error:", data);
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify(data),
      };
    }

    // Return the client_secret as per documentation
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ client_secret: data.client_secret }),
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
