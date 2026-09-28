import { NextResponse } from "next/server";

// Set LEAD_WEBHOOK_URL in Vercel (Project Settings > Environment Variables).
// The fallback keeps the current setup working until the env var is added.
const GOOGLE_SHEET_WEBHOOK_URL =
  process.env.LEAD_WEBHOOK_URL ||
  "https://script.google.com/macros/s/AKfycbylJrHVXfO9rxp9bJjSwiUooLIi2BUatp20gO7JwhuVohWHyEe3DlZO5TNpTCwpZzCR/exec";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const lead = {
      name: String(body.name || "").trim().slice(0, 80),
      phone: String(body.phone || "").trim().slice(0, 20),
      service: String(body.service || "").trim().slice(0, 80),
      message: String(body.message || "").trim().slice(0, 1000),
      source: "MeriAsk Website",
    };

    if (body.website) return NextResponse.json({ success: true }); // honeypot

    if (!lead.name || !lead.phone || !lead.service || !lead.message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const response = await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json(
        { success: false, message: "Google Sheet save failed" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead API error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
