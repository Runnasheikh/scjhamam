import { NextResponse } from "next/server";

export async function GET(req) {
  const apiKey = process.env.YT_API_KEY; // keep your key in .env.local
  const playlistId = process.env.YT_PLAYLIST_ID; // also store playlist ID in .env.local

  const { searchParams } = new URL(req.url);
  const pageToken = searchParams.get("pageToken") || "";

  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&pageToken=${pageToken}&playlistId=${playlistId}&key=${apiKey}`
  );

  const data = await res.json();
  return NextResponse.json(data);
}
