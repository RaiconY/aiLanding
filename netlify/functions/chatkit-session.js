// Netlify Function to create ChatKit session
// Environment variables are automatically available in Netlify Functions

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
      console.error("Missing environment variables:", {
        hasApiKey: !!apiKey,
        hasWorkflowId: !!workflowId
      });
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          error: "Server configuration error. Please contact support.",
        }),
      };
    }

    const requestBody = event.body ? JSON.parse(event.body) : {};
    const userId = requestBody?.user?.id || "visitor-" + Date.now();

    console.log("Creating ChatKit session for user:", userId);

    // Call ChatKit Sessions API directly
    const response = await fetch("https://api.openai.com/v1/chatkit/sessions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "OpenAI-Beta": "chatkit_beta=v1",
      },
      body: JSON.stringify({
        workflow: { id: workflowId },
        user: userId,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("ChatKit API error:", {
        status: response.status,
        statusText: response.statusText,
        data
      });
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify({
          error: data.error?.message || "Failed to create ChatKit session",
        }),
      };
    }

    console.log("ChatKit session created successfully");

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
