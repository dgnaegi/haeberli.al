import { NextResponse } from "next/server";
import { sendContactEmail } from "@/src/lib/email";

type TestimonialPayload = {
  name: string;
  title?: string | null;
  quote: string;
  email: string;
  imageUrl?: string | null;
  stayUpdated?: boolean;
  stickerOrder?: boolean;
  flyerOrder?: boolean;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<TestimonialPayload>;
    const { name, title, quote, email, imageUrl, stayUpdated, stickerOrder, flyerOrder } = body;
    if (!name || !quote || !email) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Send notification email to admin
    const subject = "Neue Empfehlung";
    
    const selectedOptions = [];
    if (stayUpdated) selectedOptions.push('Dem Komitee beitreten');
    if (stickerOrder) selectedOptions.push('Sticker bestellen');
    if (flyerOrder) selectedOptions.push('Flyer bestellen');
    selectedOptions.push('öffentliches Zitat einreichen');
    
    const html = `
      <h2>Neue Empfehlung</h2>
      <p><strong>Name:</strong> ${name}</p>
      ${title ? `<p><strong>Titel:</strong> ${title}</p>` : ''}
      <p><strong>Zitat:</strong><br/>${quote.replace(/\n/g, '<br/>')}</p>
      <p><strong>Kontakt:</strong> ${email}</p>
      ${imageUrl ? `<p><strong>Bild:</strong> <a href="${imageUrl}">${imageUrl}</a></p>` : ''}
      ${selectedOptions.length > 0 ? `<p><strong>Ausgewählte Optionen:</strong><br/>${selectedOptions.join('<br/>')}</p>` : ''}
    `;

    await sendContactEmail({ subject, html, replyTo: email });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}


