"use client";
import Navbar from "@/component/Nav";
import Image from "next/image";
import { useState } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "", bookShow: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send email via API first
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        // Email sent successfully
        alert(`✅ Your message has been sent via email to ${process.env.NEXT_PUBLIC_CONTACT_EMAIL || "our team"}. Now we will open WhatsApp for further contact.`);

        // Then open WhatsApp
        const phoneNumber = "919717553820"; // replace with your WhatsApp number
        const whatsappURL = `https://wa.me/${phoneNumber}?text=Hello, my name is ${form.name}. My email is ${form.email}. Message: ${form.message}. Book a Show: ${form.bookShow}`;
        window.open(whatsappURL, "_blank");

        setSubmitted(true);
      } else {
        alert("❌ Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("❌ Error sending email. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-100 py-12 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-2xl overflow-hidden">

            <div className="w-full md:w-1/2 bg-indigo-50 p-8 flex flex-col justify-center">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>

                  <InputField label="Enter your name" name="name" value={form.name} onChange={handleChange} required />
                  <InputField label="Enter your email address*" name="email" type="email" value={form.email} onChange={handleChange} required />
                  <TextareaField label="Write your message here*" name="message" value={form.message} onChange={handleChange} required />
                  <TextareaField label="occasion" name="bookShow" value={form.bookShow} onChange={handleChange} />

                  <button type="submit" className="w-full py-3 rounded-full bg-gray-800 text-white font-semibold hover:bg-gray-700 transition">
                    Submit your information now
                  </button>
                </form>
              ) : (
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-700">✅ Thank you!</h2>
                  <p className="text-gray-500 mt-2">We have received your message.</p>
                </div>
              )}
            </div>

            <div className="w-full md:w-1/2 relative h-96 md:h-auto">
              <Image src="/jha15.jpg" alt="Singer" layout="fill" objectFit="cover" className="rounded-r-2xl" />
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="bg-white shadow-lg rounded-2xl p-10 text-center space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">Contact Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Connect with scjha for inquiries regarding her music portfolio and performances.
            </p>

            <div className="space-y-2">
              <p className="font-semibold text-gray-800">Email</p>
              <p className="text-gray-600">{process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact23@gmail.com"}</p>
            </div>

            <div className="flex items-center justify-center gap-6 mt-6">
              <a href="https://www.instagram.com/soni_scjhaofficial" target="_blank" className="flex items-center gap-2 px-6 py-3 rounded-full bg-pink-600 text-white font-medium hover:bg-pink-700 transition">
                <FaInstagram className="text-lg" /> Instagram
              </a>
            {/* <a 
  href="whatsapp://send?phone=9717553820" 
  className="flex items-center gap-2 px-6 py-3 rounded-full bg-green-600 text-white font-medium hover:bg-green-700 transition"
>
  <FaWhatsapp className="text-lg" /> WhatsApp
</a> */}
<a 
  href="whatsapp://send?phone=919101651175&text=Hello%20I%20want%20to%20book%20a%20show" 
  className="flex items-center gap-2 px-6 py-3 rounded-full bg-green-600 text-white font-medium hover:bg-green-700 transition"
>
  <FaWhatsapp className="text-lg" /> WhatsApp
</a>


            </div>
          </div>
        </div>
      </main>
    </>
  );
}

// --- Helper Components ---
const InputField = ({ label, type = "text", name, value, onChange, required = false }) => (
  <div>
    <label className="block text-gray-700 font-medium">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-400"
      required={required}
    />
  </div>
);

const TextareaField = ({ label, name, value, onChange, rows = 4, required = false }) => (
  <div>
    <label className="block text-gray-700 font-medium">{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      rows={rows}
      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-400"
      required={required}
    />
  </div>
);
