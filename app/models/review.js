import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  text: { type: String, required: true },
}, { timestamps: true });

// Avoid recompilation of model in dev
export default mongoose.models.Review || mongoose.model("Review", ReviewSchema);
