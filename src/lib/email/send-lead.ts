import { siteConfig } from "@/data/site";

type LeadEmail = {
  subject: string;
  fields: { label: string; value: string }[];
};

/**
 * Deliver a lead notification. Uses Resend when RESEND_API_KEY is set;
 * otherwise logs to the server console so the app works locally without secrets.
 */
export async function sendLeadEmail({ subject, fields }: LeadEmail) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_INBOX ?? siteConfig.email;
  const text = fields.map((f) => `${f.label}: ${f.value}`).join("\n");

  if (!apiKey) {
    console.info(
      `[lead] RESEND_API_KEY not set — not sending.\nTo: ${to}\nSubject: ${subject}\n${text}`,
    );
    return;
  }

  // Imported lazily so the SDK is only loaded when actually sending.
  const { Resend } = await import("resend");
  const resend = new Resend(apiKey);
  await resend.emails.send({
    from: process.env.LEAD_FROM ?? "Hirelo. <onboarding@resend.dev>",
    to,
    subject,
    text,
  });
}
