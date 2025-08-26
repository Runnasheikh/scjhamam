"use client";

import { useState } from "react";

const Footer = ({ onNewReview }) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !text) {
      setMessage("Please fill all fields");
      setSuccess(false);
      return;
    }

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, text })
      });
      const result = await res.json();
      console.log("POST result:", result);

      if (!res.ok) throw new Error(result.error || "Failed to save review");

      setMessage("Review submitted successfully!");
      setSuccess(true);
      setName("");
      setText("");
      onNewReview?.();
    } catch (err) {
      console.error("Submit error:", err);
      setMessage(err.message);
      setSuccess(false);
    }
  };

  return (
    <footer className="bg-white dark:bg-gray-900 mt-10">
      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Leave a Review</h2>
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"/>
          <textarea placeholder="Your Review" value={text} onChange={(e) => setText(e.target.value)} className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"/>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Submit</button>
        </form>
        {message && <p className={`mt-2 text-sm ${success ? "text-green-500" : "text-red-500"}`}>{success ? "✅ " : "❌ "}{message}</p>}
      </div>
    </footer>
  );
};

export default Footer;
