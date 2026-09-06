import { colors } from "../../styles/colors";
import type { Testimonial } from "./testimonialsData";

/**
 * Generate a shareable URL for a testimonial using its ID
 */
export const getTestimonialUrl = (testimonialId: string): string => {
  if (typeof window === "undefined") return "";
  const baseUrl = window.location.origin + window.location.pathname;
  return `${baseUrl}?testimonial=${encodeURIComponent(testimonialId)}`;
};

/**
 * Generate image blob from testimonial data
 */
export const generateTestimonialImageBlob = async (testimonial: Testimonial): Promise<Blob | null> => {
  if (!testimonial) return null;

  try {
    // Create canvas
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    // Set canvas size (square for Instagram posts)
    const size = 1080;
    canvas.width = size;
    canvas.height = size;

    // Draw white background
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, size, size);

    // Wait for fonts to load before measuring text
    await document.fonts.ready;

    // Measure quote text to determine layout
    const quoteText = testimonial.quote.replace(/<br\s*\/?>/gi, " ").replace(/&nbsp;/g, " ");
    const words = quoteText.split(" ");
    const quoteWidth = size - 160;
    const quoteX = 80;
    const lineHeight = 60;
    const maxWidth = quoteWidth - 40;
    
    // Calculate text height
    ctx.font = "400 36px system-ui, -apple-system, sans-serif";
    let textHeight = 0;
    let line = "";
    for (let i = 0; i < words.length; i++) {
      const testLine = line + words[i] + " ";
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && i > 0) {
        textHeight += lineHeight;
        line = words[i] + " ";
      } else {
        line = testLine;
      }
    }
    textHeight += lineHeight; // Last line
    textHeight += 120; // Space for quote marks and padding

    // Calculate optimal top section height
    // Minimum 45%, but increase if text is short to reduce white space
    const minTopHeight = size * 0.45;
    const maxTopHeight = size * 0.55;
    const whiteSectionMinHeight = textHeight + 120; // Text + padding + brand
    const calculatedTopHeight = Math.max(minTopHeight, size - whiteSectionMinHeight);
    const topHeight = Math.min(maxTopHeight, calculatedTopHeight);

    // Draw top section (magenta)
    ctx.fillStyle = colors.neonMagenta;
    ctx.fillRect(0, 0, size, topHeight);

    // Draw avatar circle placeholder first
    const avatarSize = 200;
    const avatarX = (size - avatarSize) / 2;
    const avatarY = 80;
    
    // Draw white circle background
    ctx.beginPath();
    ctx.arc(avatarX + avatarSize / 2, avatarY + avatarSize / 2, avatarSize / 2 + 5, 0, Math.PI * 2);
    ctx.fillStyle = "#ffffff";
    ctx.fill();

    // Load and draw avatar
    const avatarImg = new Image();
    avatarImg.crossOrigin = "anonymous";
    
    await new Promise<void>((resolve) => {
      avatarImg.onload = () => {
        ctx.save();
        ctx.beginPath();
        ctx.arc(avatarX + avatarSize / 2, avatarY + avatarSize / 2, avatarSize / 2, 0, Math.PI * 2);
        ctx.clip();
        ctx.drawImage(avatarImg, avatarX, avatarY, avatarSize, avatarSize);
        ctx.restore();
        resolve();
      };
      avatarImg.onerror = () => resolve();
      avatarImg.src = `/testemonials/${testimonial.image}`;
    });

    // Draw name and title
    ctx.fillStyle = "#ffffff";
    ctx.font = "700 42px system-ui, -apple-system, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    
    const nameY = avatarY + avatarSize + 30;
    ctx.fillText(testimonial.name, size / 2, nameY);
    
    ctx.font = "400 28px system-ui, -apple-system, sans-serif";
    ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
    const titleY = nameY + 50;
    ctx.fillText(testimonial.title, size / 2, titleY);

    // Draw quote section - center vertically in white space
    const whiteSectionHeight = size - topHeight;
    const quoteVerticalPadding = 60;
    const quoteStartY = topHeight + quoteVerticalPadding;
    const quoteEndY = size - 60; // Leave space for brand
    const availableHeight = quoteEndY - quoteStartY;
    
    // Center quote vertically if text is shorter than available space
    const quoteContentHeight = textHeight;
    const quoteOffset = Math.max(0, (availableHeight - quoteContentHeight) / 2);
    const actualQuoteStartY = quoteStartY + quoteOffset;

    // Draw opening quote mark
    ctx.fillStyle = colors.neonMagenta;
    ctx.font = "900 120px system-ui, -apple-system, sans-serif";
    ctx.textAlign = "left";
    ctx.globalAlpha = 0.2;
    ctx.fillText("\u201C", quoteX, actualQuoteStartY - 20);

    // Draw quote text
    ctx.globalAlpha = 1;
    ctx.fillStyle = "#1a1a1a";
    ctx.font = "400 36px system-ui, -apple-system, sans-serif";
    
    line = "";
    let y = actualQuoteStartY + 60;

    for (let i = 0; i < words.length; i++) {
      const testLine = line + words[i] + " ";
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && i > 0) {
        ctx.fillText(line, quoteX + 40, y);
        line = words[i] + " ";
        y += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, quoteX + 40, y);

    // Draw closing quote mark
    ctx.fillStyle = colors.neonMagenta;
    ctx.font = "900 120px system-ui, -apple-system, sans-serif";
    ctx.textAlign = "right";
    ctx.globalAlpha = 0.2;
    ctx.fillText("\u201D", size - quoteX, y + 40);

    // Draw brand/website
    ctx.globalAlpha = 1;
    ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
    ctx.font = "800 24px system-ui, -apple-system, sans-serif";
    ctx.textAlign = "right";
    ctx.fillText("tanja-maag.ch", size - 60, size - 40);

    // Convert to blob with transparency support
    return new Promise((resolve) => {
      canvas.toBlob((blob) => resolve(blob), "image/png", 1.0);
    });
  } catch (error) {
    console.error("Error generating image:", error);
    return null;
  }
};

/**
 * Download image blob as file
 */
export const downloadImage = (blob: Blob, fileName: string) => {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

/**
 * Check if device is mobile
 */
export const isMobileDevice = (): boolean => {
  if (typeof window === "undefined") return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
};
