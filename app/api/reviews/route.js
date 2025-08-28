// /app/api/reviews/route.js
import connect from "@/app/lib/mongodb";
import Review from "@/app/models/review";

let cachedReviews = null; // optional in-memory cache

// GET /api/reviews?page=1&limit=20
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 20;
    const skip = (page - 1) * limit;

    // Return cached result if available for the first page
    if (page === 1 && cachedReviews) {
      return new Response(JSON.stringify(cachedReviews), { status: 200 });
    }

    await connect();
    const reviews = await Review.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean(); // faster plain JS objects

    // Cache first page
    if (page === 1) cachedReviews = reviews;

    return new Response(JSON.stringify(reviews), { status: 200 });
  } catch (err) {
    console.error("GET /api/reviews error:", err);
    return new Response(
      JSON.stringify({ error: "Failed to fetch reviews", details: err.message }),
      { status: 500 }
    );
  }
}

// POST /api/reviews
export async function POST(req) {
  try {
    await connect();
    const { name, text } = await req.json();
    if (!name || !text)
      return new Response(
        JSON.stringify({ error: "Name and text required" }),
        { status: 400 }
      );

    const review = await Review.create({ name, text });

    // Clear cache so next GET fetches updated reviews
    cachedReviews = null;

    return new Response(JSON.stringify(review), { status: 201 });
  } catch (err) {
    console.error("POST /api/reviews error:", err);
    return new Response(
      JSON.stringify({ error: "Failed to save review", details: err.message }),
      { status: 500 }
    );
  }
}

// DELETE /api/reviews?id=<id>
export async function DELETE(req) {
  try {
    await connect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id)
      return new Response(JSON.stringify({ error: "ID required" }), { status: 400 });

    const deleted = await Review.findByIdAndDelete(id);
    if (!deleted)
      return new Response(JSON.stringify({ error: "Review not found" }), { status: 404 });

    // Clear cache after deletion
    cachedReviews = null;

    return new Response(JSON.stringify({ message: "Deleted" }), { status: 200 });
  } catch (err) {
    console.error("DELETE /api/reviews error:", err);
    return new Response(
      JSON.stringify({ error: "Failed to delete review", details: err.message }),
      { status: 500 }
    );
  }
}
