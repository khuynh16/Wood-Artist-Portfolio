import dotenv from "dotenv";
dotenv.config();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email } = req.body || {};

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    const apiKey = process.env.BREVO_API_KEY;
    const listId = Number(process.env.BREVO_LIST_ID);

    // ----------------------------------------------------
    // STEP 1: CHECK IF CONTACT ALREADY EXISTS
    // ----------------------------------------------------
    const checkRes = await fetch(
      `https://api.brevo.com/v3/contacts/${encodeURIComponent(email)}`,
      {
        method: "GET",
        headers: {
          "api-key": apiKey,
        },
      },
    );

    const alreadyExists = checkRes.ok;

    // ----------------------------------------------------
    // STEP 2: CREATE / UPDATE CONTACT
    // ----------------------------------------------------
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        email,
        listIds: [listId],
        updateEnabled: true,
      }),
    });

    // Brevo often returns 204 No Content → handle safely
    const text = await response.text();

    let data;
    try {
      data = text ? JSON.parse(text) : {};
    } catch {
      data = { raw: text };
    }

    // ----------------------------------------------------
    // STEP 3: HANDLE RESPONSE
    // ----------------------------------------------------
    if (!response.ok) {
      return res.status(400).json({
        success: false,
        message: data.message || "Subscription failed",
      });
    }

    // If contact already existed BEFORE POST
    if (alreadyExists) {
      return res.status(200).json({
        success: true,
        status: "already_subscribed",
      });
    }

    // New subscriber
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error("API CRASH:", error);

    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
}
