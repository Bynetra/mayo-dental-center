import { NextResponse } from "next/server";
import { z } from "zod";

// Schema with optional honeypot field
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(7, "Valid phone number required"),
  email: z.string().email().optional().or(z.literal("")),
  service: z.string().optional(),
  date: z.string().optional(),
  message: z.string().optional(),
  website: z.string().optional(), // Honeypot spam trap
});

// In-memory rate limiting: IP -> array of timestamps
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  recent.push(now);
  rateLimitMap.set(ip, recent);
  return false;
}

export async function POST(request: Request) {
  try {
    // 1. Rate Limiting Check
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Too many submissions from this connection. Please reach out to us directly via WhatsApp or phone.",
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    const validated = contactSchema.parse(body);

    // 2. Honeypot check: If the hidden 'website' field was filled out, it's a bot
    if (validated.website && validated.website.trim().length > 0) {
      console.warn("[Spam Trap] Honeypot triggered by IP:", ip);
      // Silently accept so bot thinks it succeeded
      return NextResponse.json({
        success: true,
        message: "Message received.",
      });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_TO_EMAIL || "info@mayodentalcenter.com";

    // 3. Prepare Pre-filled WhatsApp Fallback URL
    const waText = `*Mayo Dental Center - New Consultation Inquiry*%0A%0A*Name:* ${encodeURIComponent(
      validated.name
    )}%0A*Phone:* ${encodeURIComponent(validated.phone)}${
      validated.email ? `%0A*Email:* ${encodeURIComponent(validated.email)}` : ""
    }${
      validated.service ? `%0A*Interested Service:* ${encodeURIComponent(validated.service)}` : ""
    }${validated.date ? `%0A*Preferred Date:* ${encodeURIComponent(validated.date)}` : ""}${
      validated.message ? `%0A*Notes:* ${encodeURIComponent(validated.message)}` : ""
    }`;
    const whatsappUrl = `https://wa.me/966550220715?text=${waText}`;

    // 4. If RESEND_API_KEY is configured, send email notification
    if (resendApiKey) {
      try {
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Mayo Dental Center <inquiries@mayodentalcenter.com>",
            to: [recipientEmail],
            subject: `New Dental Consultation Request: ${validated.name}`,
            html: `
              <h2>New Patient Consultation Request</h2>
              <p><strong>Name:</strong> ${validated.name}</p>
              <p><strong>Phone:</strong> ${validated.phone}</p>
              <p><strong>Email:</strong> ${validated.email || "Not provided"}</p>
              <p><strong>Service:</strong> ${validated.service || "General Consultation"}</p>
              <p><strong>Preferred Date:</strong> ${validated.date || "Flexible"}</p>
              <p><strong>Notes / Symptoms:</strong> ${validated.message || "None"}</p>
              <hr />
              <p><small>Delivered via Mayo Dental Center Next.js Portal</small></p>
            `,
          }),
        });

        if (resendRes.ok) {
          return NextResponse.json({
            success: true,
            delivery: "email",
            message: "Inquiry successfully submitted via email.",
            whatsappUrl,
          });
        }
      } catch (err) {
        console.error("[Resend API Error]:", err);
      }
    }

    // 5. Fallback: Resend key not configured or failed - return WhatsApp instant fallback
    console.log(
      "[Mayo Dental Center] Local/Fallback Mode: Inquiry logged. Pre-filled WhatsApp fallback provided.",
      validated
    );

    return NextResponse.json({
      success: true,
      delivery: "whatsapp_fallback",
      message: "Inquiry logged. You can also confirm immediately via WhatsApp.",
      whatsappUrl,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.issues },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
