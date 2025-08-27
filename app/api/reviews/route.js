import connect from "@/app/lib/mongodb";
import Review from "@/app/models/review";


export async function GET() {
  try {
    await connect();
    const reviews = await Review.find().sort({ createdAt: -1 });
    return new Response(JSON.stringify(reviews), { status: 200 });
  } catch (err) {
    console.error("GET /api/reviews error:", err);
    return new Response(JSON.stringify({ error: "Failed to fetch reviews", details: err.message }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connect();
    const { name, text } = await req.json();
    if (!name || !text) return new Response(JSON.stringify({ error: "Name and text required" }), { status: 400 });

    const review = await Review.create({ name, text });
    return new Response(JSON.stringify(review), { status: 201 });
  } catch (err) {
    console.error("POST /api/reviews error:", err);
    return new Response(JSON.stringify({ error: "Failed to save review", details: err.message }), { status: 500 });
  }
}
export async function DELETE(req) {
  try {
    await connect();

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id"); // fetch sends ?id=<id>
    if (!id) return new Response(JSON.stringify({ error: "ID required" }), { status: 400 });

    const deleted = await Review.findByIdAndDelete(id);
    if (!deleted) return new Response(JSON.stringify({ error: "Review not found" }), { status: 404 });

    return new Response(JSON.stringify({ message: "Deleted" }), { status: 200 });
  } catch (err) {
    console.error("DELETE /api/reviews error:", err);
    return new Response(JSON.stringify({ error: "Failed to delete review", details: err.message }), { status: 500 });
  }
}
