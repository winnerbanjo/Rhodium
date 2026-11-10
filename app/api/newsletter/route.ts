import { NextRequest, NextResponse } from "next/server";
import * as z from "zod";
import { checkRateLimit } from "@/lib/rateLimit";
import { sendNotificationEmail } from "@/lib/email";
import { siteConfig } from "@/content/siteConfig";

const newsletterSchema = z.object({
  email: z.string().email("Please provide a valid email address"),
});

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "anonymous";
    const rateCheck = checkRateLimit(`newsletter_${ip}`, 5, 60 * 1000);

    if (!rateCheck.success) {
      return NextResponse.json(
        { error: "Too many subscription attempts. Please wait." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const parsed = newsletterSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const { email } = parsed.data;

    // Ready for Mailchimp, Brevo or Resend Audience API
    // Example: If MAILCHIMP_API_KEY is present, post to list
    const mailchimpKey = process.env.MAILCHIMP_API_KEY;
    const mailchimpListId = process.env.MAILCHIMP_LIST_ID;

    if (mailchimpKey && mailchimpListId) {
      // Connect to Mailchimp
      const dc = mailchimpKey.split("-")[1];
      const res = await fetch(`https://${dc}.api.mailchimp.com/3.0/lists/${mailchimpListId}/members`, {
        method: "POST",
        headers: {
          Authorization: `apikey ${mailchimpKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email,
          status: "subscribed",
        }),
      });

      if (!res.ok) {
        console.error("Mailchimp API error", await res.text());
      }
    } else {
      // Internal record / notification log
      const firmInbox = siteConfig.contact.email.replace(/[\[\]]/g, "");
      await sendNotificationEmail({
        to: process.env.NOTIFICATION_EMAIL || firmInbox,
        subject: `[New Newsletter Subscriber] ${email}`,
        html: `<p>New subscriber joined executive briefing list: <strong>${email}</strong> on ${new Date().toISOString()}</p>`,
      });
    }

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed to Rhodium Impact executive briefings.",
    });
  } catch (error: any) {
    console.error("Newsletter API error:", error);
    return NextResponse.json(
      { error: "Subscription could not be completed." },
      { status: 500 }
    );
  }
}
