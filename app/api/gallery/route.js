import { NextResponse } from "next/server";

export async function GET() {
  try {
    const folderId = "1R6Ehe8QPPm2PhD3IInyREkd3ulWd8XWM"; // your folder ID
    const apiKey = process.env.NEXT_PUBLIC_GD_API_KEY;

    const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}&fields=files(id,name,mimeType)`;

    const res = await fetch(url);
    const data = await res.json();

    if (!data.files) {
      return NextResponse.json({ images: [] });
    }

    // Convert Drive file IDs → public image URLs
    const images = data.files
      .filter((f) => f.mimeType && f.mimeType.startsWith("image/"))
      .map((f) => ({
        src: `https://drive.google.com/uc?export=view&id=${f.id}`,
        alt: f.name,
      }));

    return NextResponse.json({ images });
  } catch (err) {
    console.error("Drive fetch error:", err);
    return NextResponse.json({ error: "Failed to fetch Drive images" }, { status: 500 });
  }
}
