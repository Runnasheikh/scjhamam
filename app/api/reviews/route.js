import { promises as fs } from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "reviews.json");

async function ensureFile() {
  try {
    await fs.access(filePath);
  } catch {
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, "[]");
  }
}

export async function GET() {
  await ensureFile();
  const data = await fs.readFile(filePath, "utf-8");
  return new Response(data, { status: 200 });
}

export async function POST(req) {
  await ensureFile();
  const newReview = await req.json();
  const data = await fs.readFile(filePath, "utf-8");
  const reviews = JSON.parse(data);
  reviews.push(newReview);
  await fs.writeFile(filePath, JSON.stringify(reviews, null, 2));
  return new Response(JSON.stringify({ success: true, reviews }), { status: 200 });
}
