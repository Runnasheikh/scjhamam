"use client";

import { useState } from "react";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
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
        body: JSON.stringify({ name, text }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Failed to save review");

      setMessage("Review submitted successfully!");
      setSuccess(true);
      setName("");
      setText("");
    } catch (err) {
      console.error("Submit error:", err);
      setMessage(err.message);
      setSuccess(false);
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-200 pt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-10">
        
        {/* Contact Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white">Contact Me</h2>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-lg text-red-500" />
              <a href="mailto:sonichoudharyjha@gmail.com" className="hover:underline">
                sonichoudharyjha@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaWhatsapp className="text-lg text-green-500" />
              <a href="https://wa.me/919717553820" target="_blank" className="hover:underline">
                +91 97175 53820
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaInstagram className="text-lg text-pink-500" />
              <a href="https://www.instagram.com/soni_scjhaofficial" target="_blank" className="hover:underline">
                @soni_scjhaofficial
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
            <li><a href="#reviews" className="hover:underline">Reviews</a></li>
          </ul>
        </div>

        {/* Review Form */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white">Leave a Review</h2>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
            />
            <textarea
              placeholder="Your Review"
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows="3"
              className="w-full px-3 py-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
            />
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
          {message && (
            <p className={`text-sm ${success ? "text-green-400" : "text-red-400"}`}>
              {success ? "✅ " : "❌ "} {message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} SC Jha. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
