import { NextResponse } from "next/server";
import { sendContactEmail } from "@/src/lib/email";

type StickerOrder = {
  name: string;
  street: string;
  zip: string;
  city: string;
  email: string;
  type?: 'sticker' | 'flyer';
  stayUpdated?: boolean;
  publicQuote?: boolean;
};

function isValidEmail(email: string) {
  return /.+@.+\..+/.test(email);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<StickerOrder>;
    const { name, street, zip, city, email, type, stayUpdated, publicQuote } = body;

    if (!name || !street || !zip || !city || !email) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const orderType = type === 'flyer' ? 'Flyer' : 'Sticker';
    const subject = `Neue ${orderType}-Bestellung`;
    
    const selectedOptions = [];
    if (stayUpdated) selectedOptions.push('Dem Komitee beitreten');
    if (type === 'sticker') selectedOptions.push('Sticker bestellen');
    if (type === 'flyer') selectedOptions.push('Flyer bestellen');
    if (publicQuote) selectedOptions.push('öffentliches Zitat einreichen');
    
    // HTML escape function
    const escapeHtml = (text: string) => {
      return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    };
    
    const html = `
      <h2>Neue ${orderType}-Bestellung</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Adresse:</strong><br/>${escapeHtml(street || 'Nicht angegeben')}<br/>${escapeHtml(zip)} ${escapeHtml(city)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      ${selectedOptions.length > 0 ? `<p><strong>Ausgewählte Optionen:</strong><br/>${selectedOptions.map(opt => escapeHtml(opt)).join('<br/>')}</p>` : ''}
    `;

    await sendContactEmail({ subject, html, replyTo: email });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}


