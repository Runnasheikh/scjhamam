import { promises as fs } from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "reviews.json");

// GET all reviews
export async function GET() {
  const data = await fs.readFile(filePath, "utf-8");
  return new Response(data, { status: 200 });
}

// POST new review
export async function POST(req) {
  const newReview = await req.json();
  const data = JSON.parse(await fs.readFile(filePath, "utf-8"));
  newReview.id = Date.now().toString(); // assign id
  data.push(newReview);
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
  return new Response(JSON.stringify(newReview), { status: 201 });
}

// DELETE review
export async function DELETE(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) return new Response("Missing id", { status: 400 });

  const data = JSON.parse(await fs.readFile(filePath, "utf-8"));
  const updated = data.filter((r) => r.id !== id);

  await fs.writeFile(filePath, JSON.stringify(updated, null, 2));
  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
