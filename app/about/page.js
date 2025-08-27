// app/about/page.tsx
"use client";

import Footer from "@/component/Footer";
import Navbar from "@/component/Nav";
import VideoTestimonial from "@/component/Reviewtestamonial";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
    <Navbar/>
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6 py-12 font-serif">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center">
        <div className="relative w-40 h-40 md:w-52 md:h-52 mb-6">
          <Image
            src="/jha11.jpg"
            alt="Soni Choudhary Jha"
            fill
            className="rounded-full object-cover border-4 border-purple-500 shadow-xl"
            priority
          />
        </div>
        <h1 className="text-5xl font-extrabold tracking-wide mb-3">
          Soni Choudhary Jha
        </h1>
        <p className="text-xl italic text-gray-300">
          Playback Singer • Live Performer
        </p>
      </section>

      {/* About */}
      <section className="mt-14 bg-gray-800/40 p-8 rounded-3xl shadow-lg backdrop-blur-md hover:scale-[1.01] transition">
        <h2 className="text-3xl font-semibold mb-4 border-b border-gray-600 pb-2">
          About
        </h2>
        <p className="leading-relaxed text-gray-200">
          Soni Choudhary Jha is an accomplished playback singer and live
          performer with over five years of experience in learning and
          performing music. She has showcased her talent across more than eight
          states including Delhi, Punjab, Gujarat, West Bengal, Bihar, and
          Jharkhand.
        </p>
        <p className="mt-4 leading-relaxed text-gray-200">
          Her voice has featured in playback projects with{" "}
          <span className="font-medium text-purple-300">
            T-Series Bhakti Sagar, Ganga Maithili, Bhojpuri T Stage,
          </span>{" "}
          and{" "}
          <span className="font-medium text-purple-300">Fox Records Group</span>
          . She sings in Hindi, Maithili, Bhojpuri, Awadhi, Punjabi, and
          Haryanvi.
        </p>
      </section>

      {/* Performances */}
      <section className="mt-12 bg-gray-800/40 p-8 rounded-3xl shadow-lg backdrop-blur-md">
        <h2 className="text-3xl font-semibold mb-4 border-b border-gray-600 pb-2">
          Notable Performances
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-200">
          <li>Viddyapati Samaroh – Kolkata, Ludhiana, Siliguri (2024)</li>
          <li>Mithila Sanskriti Vikas Samiti – Patna (2023)</li>
          <li>Viddyapati Smriti Parv Samaroh – Delhi (2022)</li>
          <li>NASVI Event – Jawahar Lal Nehru Stadium, Delhi (2023)</li>
          <li>Kamla Aarti – Bihar (2023)</li>
          <li>Janki Navmi – Delhi (2024)</li>
          <li>Vaidehi Samman – Patna (2023)</li>
        </ul>
      </section>

      {/* Skills */}
      <section className="mt-12 bg-gray-800/40 p-8 rounded-3xl shadow-lg backdrop-blur-md">
        <h2 className="text-3xl font-semibold mb-4 border-b border-gray-600 pb-2">
          Skills
        </h2>
        <div className="flex flex-wrap gap-4">
          {[
            "Live Performances",
            "Playback Singing",
            "Lyrics Writing",
            "Composition",
          ].map((skill) => (
            <span
              key={skill}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Songs */}
      <section className="mt-12 bg-gray-800/40 p-8 rounded-3xl shadow-lg backdrop-blur-md">
        <h2 className="text-3xl font-semibold mb-4 border-b border-gray-600 pb-2">
          Popular Songs
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-200">
          <li>Gulari ke Phool</li>
          <li>Mithila me Ram</li>
          <li>Tu hi Aash Hai Meri</li>
          <li>Aankhon Ne Dil Se</li>
        </ul>
      </section>

      {/* Social */}
      <section className="mt-14 text-center">
        <h2 className="text-3xl font-semibold mb-6">Connect</h2>
        <div className="flex justify-center gap-8 text-lg">
          <Link
            href="http://www.youtube.com/@sonichoudharyjha"
            target="_blank"
            className="hover:text-red-400 transition"
          >
            YouTube
          </Link>
          <Link
            href="https://www.instagram.com/soni_scjhaofficial"
            target="_blank"
            className="hover:text-pink-400 transition"
          >
            Instagram
          </Link>
          <Link
            href="https://www.facebook.com/share/15uPuZmsWp/?mibextid=wwXIfr"
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            Facebook
          </Link>
          <Link
            href="mailto:sonichoudharyjha@gmail.com"
            className="hover:text-green-400 transition"
          >
            Email
          </Link>
        </div>
      </section>
    </main>
    {/* <VideoTestimonial/> */}
    <Footer/>
    </>
  );
}
