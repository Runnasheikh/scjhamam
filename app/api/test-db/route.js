
import connect from "@/app/lib/mongodb";
import mongoose from "mongoose";

export async function GET() {
  try {
    const conn = await connect();
    // Check connection status
    const status = mongoose.connection.readyState; // 0=disconnected, 1=connected
    return new Response(JSON.stringify({ message: "DB connected!", status }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: "DB connection failed", details: err.message }), { status: 500 });
  }
}
