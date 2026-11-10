import { NextRequest, NextResponse } from "next/server";
import * as z from "zod";
import { checkRateLimit } from "@/lib/rateLimit";
import { sendNotificationEmail } from "@/lib/email";
import { siteConfig } from "@/content/siteConfig";

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  organisation: z.string().min(2, "Organisation name is required"),
  phone: z.string().optional(),
  enquiryType: z.string().min(2, "Enquiry type is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  consent: z.boolean().optional(),
  honeypot: z.string().max(0, "Spam detected").optional(),
});

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "anonymous";
    const rateCheck = checkRateLimit(ip, 5, 60 * 1000);

    if (!rateCheck.success) {
      return NextResponse.json(
        { error: "Too many submissions. Please wait a minute before trying again." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsed.error.format() },
        { status: 400 }
      );
    }

    const { fullName, email, organisation, phone, enquiryType, message, honeypot } = parsed.data;

    if (honeypot && honeypot.length > 0) {
      // Quietly reject bot
      return NextResponse.json({ success: true, message: "Enquiry submitted successfully." });
    }

    // Build notification email HTML
    const emailHtml = `
      <h2>New Enquiry Submitted — Rhodium Impact</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Organisation:</strong> ${organisation}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Enquiry Type:</strong> ${enquiryType}</p>
      <hr />
      <h3>Message / Project Scope:</h3>
      <p style="white-space: pre-wrap;">${message}</p>
      <hr />
      <small>Sent from Rhodium Impact website (${new Date().toISOString()})</small>
    `;

    // Send internal alert
    const firmInbox = siteConfig.contact.email.replace(/[\[\]]/g, "");
    await sendNotificationEmail({
      to: process.env.NOTIFICATION_EMAIL || firmInbox,
      replyTo: email,
      subject: `[Enquiry: ${enquiryType}] from ${fullName} (${organisation})`,
      html: emailHtml,
    });

    return NextResponse.json({
      success: true,
      message: "Thank you. Your enquiry has been received and our team will be in touch shortly.",
    });
  } catch (error: any) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
