// api/subscribe.js
export default async function handler(request, response) {
  if (request.method !== "POST") {
    return response.status(405).json({ error: "Method not allowed" });
  }

  const { email } = request.body;

  if (!email || !email.includes("@")) {
    return response.status(400).json({ error: "Invalid email address" });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (!resendApiKey) {
    // If running in production on Vercel, this is a setup error
    if (process.env.VERCEL === "1") {
      return response.status(500).json({ error: "RESEND_API_KEY is not configured in your Vercel project settings." });
    }
    // Simulated success for local testing
    console.warn("RESEND_API_KEY is not configured. Simulating success.");
    return response.status(200).json({
      success: true,
      message: "Development Mode: API Key missing. Subscription simulated."
    });
  }

  if (!audienceId) {
    if (process.env.VERCEL === "1") {
      return response.status(500).json({ error: "RESEND_AUDIENCE_ID is not configured in your Vercel project settings." });
    }
  }

  try {
    const res = await fetch("https://api.resend.com/contacts", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
        "User-Agent": "ryeuga-portfolio/1.0"
      },
      body: JSON.stringify({
        email: email,
        unsubscribed: false,
        audienceId: audienceId
      })
    });

    // Handle empty response bodies
    let data = {};
    const text = await res.text();
    if (text) {
      try {
        data = JSON.parse(text);
      } catch (e) {
        console.error("Error parsing JSON response:", e);
      }
    }

    if (res.ok) {
      return response.status(200).json({ success: true });
    } else {
      console.error("Resend API error:", data);
      return response.status(res.status).json({ error: data.message || "Failed to register email." });
    }
  } catch (error) {
    console.error("Subscription request failed:", error);
    return response.status(500).json({ error: "Internal server error." });
  }
}
