import { NextResponse } from "next/server";

const GOOGLE_SHEET_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbylJrHVXfO9rxp9bJjSwiUooLIi2BUatp20gO7JwhuVohWHyEe3DlZO5TNpTCwpZzCR/exec";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const lead = {
      name: String(body.name || "").trim(),
      phone: String(body.phone || "").trim(),
      service: String(body.service || "").trim(),
      message: String(body.message || "").trim(),
      source: "MeriAsk Website",
    };

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
