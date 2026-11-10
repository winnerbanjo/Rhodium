import { NextRequest, NextResponse } from "next/server";
import * as z from "zod";
import { checkRateLimit } from "@/lib/rateLimit";
import { sendNotificationEmail } from "@/lib/email";
import { siteConfig } from "@/content/siteConfig";

const bookingSchema = z.object({
  serviceSlug: z.string().min(1, "Service practice is required"),
  projectStage: z.enum(["Prepare", "Structure", "Close", "Operate", "Other"]),
  sector: z.string().min(1, "Sector is required"),
  country: z.string().min(1, "Country is required"),
  description: z.string().min(10, "Please provide brief details (min 10 characters)"),
  preferredDate: z.string().min(1, "Preferred date is required"),
  preferredTimeSlot: z.string().min(1, "Preferred time slot is required"),
  fullName: z.string().min(2, "Full name is required"),
  organisation: z.string().min(2, "Organisation is required"),
  email: z.string().email("Valid corporate email is required"),
  phone: z.string().min(5, "Contact phone is required"),
  honeypot: z.string().max(0, "Spam detected").optional(),
});

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "anonymous";
    const rateCheck = checkRateLimit(`book_${ip}`, 5, 60 * 1000);

    if (!rateCheck.success) {
      return NextResponse.json(
        { error: "Too many booking requests. Please wait a minute." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const parsed = bookingSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsed.error.format() },
        { status: 400 }
      );
    }

    const data = parsed.data;

    if (data.honeypot && data.honeypot.length > 0) {
      return NextResponse.json({ success: true, bookingRef: `RHOD-${Date.now().toString().slice(-6)}` });
    }

    const bookingRef = `RHOD-${Date.now().toString().slice(-6)}`;

    // Internal firm alert email
    const internalEmail = `
      <h2>New Consultation Booking Request — [Ref: ${bookingRef}]</h2>
      <p><strong>Client:</strong> ${data.fullName} (${data.organisation})</p>
      <p><strong>Email:</strong> ${data.email} | <strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Practice:</strong> ${data.serviceSlug}</p>
      <p><strong>Project Stage:</strong> ${data.projectStage}</p>
      <p><strong>Sector:</strong> ${data.sector} | <strong>Country:</strong> ${data.country}</p>
      <p><strong>Requested Slot:</strong> ${data.preferredDate} at ${data.preferredTimeSlot} WAT</p>
      <hr />
      <h3>Brief:</h3>
      <p style="white-space: pre-wrap;">${data.description}</p>
    `;

    // Client confirmation email
    const clientConfirmationEmail = `
      <h2>Consultation Request Confirmed — Rhodium Impact</h2>
      <p>Dear ${data.fullName},</p>
      <p>Thank you for requesting an advisory consultation with <strong>Rhodium Impact Consulting Ltd</strong>.</p>
      <p><strong>Booking Reference:</strong> ${bookingRef}</p>
      <p><strong>Requested Date & Time:</strong> ${data.preferredDate} at ${data.preferredTimeSlot} (WAT)</p>
      <p><strong>Practice Area:</strong> ${data.serviceSlug}</p>
      <p>Our senior transaction team has received your brief. A calendar invitation and video conference link will be dispatched to this email address within 24 hours.</p>
      <hr />
      <p><em>Rhodium Impact Consulting Ltd — Turning infrastructure needs into bankable projects.</em></p>
    `;

    const firmInbox = siteConfig.contact.email.replace(/[\[\]]/g, "");

    // 1. Notify firm
    await sendNotificationEmail({
      to: process.env.NOTIFICATION_EMAIL || firmInbox,
      replyTo: data.email,
      subject: `[New Booking ${bookingRef}] ${data.fullName} - ${data.organisation} (${data.projectStage})`,
      html: internalEmail,
    });

    // 2. Send confirmation to user
    await sendNotificationEmail({
      to: data.email,
      subject: `Consultation Booking Confirmation [Ref: ${bookingRef}] — Rhodium Impact`,
      html: clientConfirmationEmail,
    });

    return NextResponse.json({
      success: true,
      bookingRef,
      message: "Consultation requested successfully.",
    });
  } catch (error: any) {
    console.error("Booking API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while booking. Please try again." },
      { status: 500 }
    );
  }
}
