/**
 * Email dispatch abstraction.
 * Ready for Resend, Postmark, or Nodemailer integration.
 * In development / unconfigured environments, securely logs the payload.
 */

interface SendEmailParams {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendNotificationEmail(params: SendEmailParams): Promise<{ success: boolean; messageId?: string; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY;

  if (apiKey) {
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          from: process.env.EMAIL_FROM || "Rhodium Impact <notifications@rhodiumimpact.com>",
          to: params.to,
          reply_to: params.replyTo,
          subject: params.subject,
          html: params.html,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Resend API error:", errorText);
        return { success: false, error: errorText };
      }

      const data = await response.json();
      return { success: true, messageId: data.id };
    } catch (err: any) {
      console.error("Failed to send email via Resend:", err);
      return { success: false, error: err.message };
    }
  }

  // Fallback: simulated development send
  console.log("=== [SIMULATED EMAIL DISPATCH] ===");
  console.log(`To: ${params.to}`);
  console.log(`Subject: ${params.subject}`);
  console.log(`Reply-To: ${params.replyTo || "none"}`);
  console.log("Content snippet:", params.html.substring(0, 300) + "...");
  console.log("==================================");

  return { success: true, messageId: `sim_${Date.now()}` };
}
