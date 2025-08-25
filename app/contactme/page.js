"use client";
import Navbar from "@/component/Nav";
import Image from "next/image";
import { useState } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // WhatsApp auto-send
    const phoneNumber = "919876543210"; // 👉 replace with your WhatsApp number
    const whatsappURL = `https://wa.me/${phoneNumber}?text=Hello, my name is ${form.name}. My email is ${form.email}. Message: ${form.message}`;
    window.open(whatsappURL, "_blank");

    setSubmitted(true);
  };

  return (
    <>
    <Navbar/>
    <main className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* --- Form with Side Image --- */}
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-2xl overflow-hidden">
          
          {/* Left Form Section */}
          <div className="w-full md:w-1/2 bg-indigo-50 p-8 flex flex-col justify-center">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>

                <div>
                  <label className="block text-gray-700 font-medium">
                    Enter your first name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your first name here"
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium">
                    Enter your email address*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your email address here"
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium">
                    Write your message here*
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your message content here"
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-gray-800 text-white font-semibold hover:bg-gray-700 transition"
                >
                  Submit your information now
                </button>
              </form>
            ) : (
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-700">✅ Thank you!</h2>
                <p className="text-gray-500 mt-2">
                  We have received your message.
                </p>
              </div>
            )}
          </div>

          {/* Right Image Section */}
          <div className="w-full md:w-1/2 relative h-96 md:h-auto">
            <Image
              src="/jha15.jpg" // 👉 replace with your image in public/
              alt="Singer"
              layout="fill"
              objectFit="cover"
              className="rounded-r-2xl"
            />
          </div>
        </div>

        {/* --- Contact Us Section --- */}
        <div className="bg-white shadow-lg rounded-2xl p-10 text-center space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect with scjha for inquiries regarding her music portfolio and performances.
          </p>

          <div className="space-y-2">
            <p className="font-semibold text-gray-800">Email</p>
            <p className="text-gray-600">scjha@gmail.com</p>
          </div>

          <div className="flex items-center justify-center gap-6 mt-6">
            {/* Instagram Button */}
            <a
              href="https://www.instagram.com/soni_scjhaofficial"
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-pink-600 text-white font-medium hover:bg-pink-700 transition"
            >
              <FaInstagram className="text-lg" />
              Instagram
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919101651175" // 👉 replace with your WhatsApp number
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-green-600 text-white font-medium hover:bg-green-700 transition"
            >
              <FaWhatsapp className="text-lg" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
