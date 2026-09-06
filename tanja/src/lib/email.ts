import { Resend } from "resend";

export type SendEmailArgs = {
  subject: string;
  html: string;
  replyTo?: string | null;
  to?: string | null; // Optional recipient, defaults to CONTACT_TO_EMAIL
};

export async function sendContactEmail({ subject, html, replyTo, to }: SendEmailArgs) {
  const apiKey = process.env.RESEND_API_KEY;
  const defaultTo = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || "contact@resend.dev";

  if (!apiKey || !defaultTo) {
    throw new Error("Email not configured");
  }

  const resend = new Resend(apiKey);
  const recipient = to || defaultTo;
  
  await resend.emails.send({
    from,
    to: recipient,
    subject,
    html,
    ...(replyTo ? { reply_to: replyTo } : {}),
  } as any);
}


