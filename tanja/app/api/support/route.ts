import { NextResponse } from "next/server";
import { sendContactEmail } from "@/src/lib/email";

type SupportPayload = {
  firstName: string;
  lastName: string;
  email: string;
  street?: string;
  zip?: string;
  city?: string;
  function?: string;
  quote?: string;
  imageUrl?: string | null;
  imageFilename?: string | null;
  testimonialId?: string;
  stayUpdated?: boolean;
  publicSupport?: boolean;
  withQuote?: boolean;
  materialOrder?: boolean;
  stickerOrder?: boolean;
  flyerOrder?: boolean;
  stampOrder?: boolean;
  publicQuote?: boolean; // backward compatibility
};

// HTML escape function
function escapeHtml(text: string) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<SupportPayload>;
    const { 
      firstName, 
      lastName, 
      email, 
      street, 
      zip, 
      city, 
      function: title, 
      quote, 
      imageUrl,
      imageFilename,
      testimonialId,
      stayUpdated, 
      publicSupport,
      withQuote,
      materialOrder,
      stickerOrder, 
      flyerOrder, 
      stampOrder, 
      publicQuote // backward compatibility
    } = body;

    // Check required fields based on selected options
    if (publicSupport || publicQuote || materialOrder) {
      if (!firstName || !lastName || !email) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
      }
    }

    const name = `${firstName || ''} ${lastName || ''}`.trim();
    const subject = "Komitee Tanja Maag";
    
    const selectedOptions = [];
    if (publicSupport || publicQuote) selectedOptions.push('Tanja öffentlich unterstützen');
    if (withQuote || publicQuote) selectedOptions.push('Mit Zitat unterstützen');
    if (materialOrder) selectedOptions.push('Material bestellen');
    if (stickerOrder) selectedOptions.push('Sticker bestellen');
    if (flyerOrder) selectedOptions.push('Flyer bestellen');
    if (stampOrder) selectedOptions.push('"Zürich maag Tanja"-Briefmarken bestellen');
    
    let html = `
      <h2>Neue Unterstützung</h2>
    `;

    // Add name and email if public support or material order
    if (publicSupport || publicQuote || materialOrder) {
      html += `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email || '')}</p>
      `;
      // Function/title only shown for public support
      if ((publicSupport || publicQuote) && title) {
        html += `<p><strong>Funktion / Titel:</strong> ${escapeHtml(title)}</p>`;
      }
    }

    // Add address if provided (for material orders)
    if (materialOrder && (street || zip || city)) {
      html += `
        <p><strong>Adresse:</strong><br/>
        ${escapeHtml(street || 'Nicht angegeben')}<br/>
        ${escapeHtml(zip || '')} ${escapeHtml(city || '')}
        </p>
      `;
    }

    // Add quote information if withQuote is selected
    if ((withQuote || publicQuote) && quote) {
      html += `
        <p><strong>Zitat:</strong><br/>${escapeHtml(quote).replace(/\n/g, '<br/>')}</p>
      `;
      if (imageUrl) {
        html += `<p><strong>Bild:</strong> <a href="${escapeHtml(imageUrl)}">${escapeHtml(imageUrl)}</a></p>`;
        html += `<p><img src="${escapeHtml(imageUrl)}" alt="Testimonial Bild" style="max-width: 500px; height: auto;" /></p>`;
      }
      if (imageFilename) {
        html += `<p><strong>Dateiname:</strong> ${escapeHtml(imageFilename)}</p>`;
      }
      if (testimonialId) {
        html += `<p><strong>Testimonial ID:</strong> ${escapeHtml(testimonialId)}</p>`;
      }
      
      // Add JSON for easy copy-paste
      if (testimonialId && imageFilename && firstName && lastName && quote) {
        const jsonData = {
          id: testimonialId,
          image: imageFilename,
          name: `${firstName} ${lastName}`,
          title: title || '',
          quote: quote.replace(/\n/g, ' '),
          quoteShort: quote.length > 150 ? quote.substring(0, 147) + '...' : quote.replace(/\n/g, ' '),
          withQuote: true
        };
        
        const jsonString = JSON.stringify(jsonData, null, 2);
        html += `
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;" />
          <p><strong>JSON für testimonialsData.ts:</strong></p>
          <pre style="background: #f5f5f5; padding: 16px; border-radius: 4px; overflow-x: auto; font-family: 'Courier New', monospace; font-size: 12px; line-height: 1.5; white-space: pre-wrap; word-wrap: break-word;">${escapeHtml(jsonString)}</pre>
        `;
        
        // Add confirmation email template
        let baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
        if (!baseUrl) {
          const origin = req.headers.get('origin');
          const host = req.headers.get('host');
          if (origin) {
            baseUrl = origin;
          } else if (host) {
            const protocol = host.includes('localhost') ? 'http' : 'https';
            baseUrl = `${protocol}://${host}`;
          } else {
            baseUrl = 'https://tanja-maag.ch';
          }
        }
        const testimonialLink = `${baseUrl}?testimonial=${encodeURIComponent(testimonialId)}`;
        const firstNameCapitalized = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
        
        const confirmationEmail = `Liebe ${firstNameCapitalized}

Vielen Dank fürs Einreichen deines Zitates für tanja-maag.ch. Ich verwalte Tanjas Website und habe es eben hinzugefügt.
Solltest du noch irgendwelche Anliegen dazu haben, kannst du dich gerne bei mir melden.

Hier kannst du dein Zitat auf der Website sehen: ${testimonialLink}

Liebe Grüsse
Dani`;
        
        html += `
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;" />
          <p><strong>Bestätigungs-E-Mail Vorlage:</strong></p>
          <pre style="background: #f0f8ff; padding: 16px; border-radius: 4px; overflow-x: auto; font-family: 'Courier New', monospace; font-size: 12px; line-height: 1.6; white-space: pre-wrap; word-wrap: break-word; border-left: 3px solid #4a90e2;">${escapeHtml(confirmationEmail)}</pre>
        `;
      }
    }

    // Add selected options
    if (selectedOptions.length > 0) {
      html += `
        <p><strong>Ausgewählte Optionen:</strong><br/>
        ${selectedOptions.map(opt => escapeHtml(opt)).join('<br/>')}
        </p>
      `;
    }

    await sendContactEmail({ subject, html, replyTo: email || undefined });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Support form error:', err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
