import { NextRequest, NextResponse } from "next/server";
import { put, del } from "@vercel/blob";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    const customFilename = formData.get("filename") as string | null;
    
    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Validate file type - only allow typical image formats
    const allowedTypes = [
      "image/jpeg",
      "image/jpg", 
      "image/png",
      "image/webp",
      "image/gif"
    ];
    
    if (!allowedTypes.includes(file.type.toLowerCase())) {
      return NextResponse.json({ error: "Nur JPEG, PNG, WebP oder GIF erlaubt" }, { status: 400 });
    }

    // Validate file size (max 300MB)
    const maxSize = 300 * 1024 * 1024; // 300MB
    if (file.size > maxSize) {
      return NextResponse.json({ error: "Dateigröße muss kleiner als 300MB sein" }, { status: 400 });
    }

    // Use custom filename if provided, otherwise use original filename
    const filename = customFilename || file.name;
    
    // Upload to Vercel Blob
    // Note: Using "public" access - URLs are hard to guess but publicly accessible
    // For testimonials this is typically fine as they're meant to be public
    // If more privacy is needed, consider using a proxy route to serve images
    // Allow overwrite to handle cases where filename is already taken (e.g., same last name)
    const blob = await put(`testimonials/${filename}`, file, {
      access: "public",
      addRandomSuffix: false,
      allowOverwrite: true, // Allow overwriting if file exists (handles duplicate last names)
    });

    return NextResponse.json({ url: blob.url });
  } catch (err) {
    console.error("Error uploading file:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
