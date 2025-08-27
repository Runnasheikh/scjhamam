"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="text-white py-8 px-6 md:px-16 w-11/12 mx-auto mb-12">
      {/* Heading with fade-in from left */}
      <motion.h1
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-extrabold mb-8 text-center md:text-left text-gradient bg-gradient-to-r from-red-500 via-red-500 to-yellow-500 bg-clip-text text-transparent"
      >
        A Rising Star: Scjha
      </motion.h1>

      {/* Flex container with text on left and image on right */}
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Text slides in from left */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-2/3 flex flex-col justify-center text-left space-y-4"
        >
          <p className="text-base sm:text-lg leading-relaxed text-gray-200">
            Soni Choudhary Jha is an accomplished playback singer and live performer
            with over five years of experience in both learning and performing music.
            She has showcased her talent as a live performer in more than eight states,
            including Delhi, Punjab, Gujarat, West Bengal, Bihar, and Jharkhand.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-200">
            In addition to her live performances, Soni has lent her voice to playback singing
            in various music projects, working with notable platforms such as T-Series Bhakti
            Sagar, Ganga Maithili, Bhojpuri T Stage, and Fox Records Group. Her versatility is
            evident in her ability to sing in multiple languages, including Hindi, Maithili,
            Bhojpuri, Awadhi, Punjabi, and Haryanvi.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-400 italic">
            “Her performances are soulful and captivating, leaving a lasting impression on every audience.”
          </p>
        </motion.div>

        {/* Image slides in from right */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="md:w-auto flex justify-center md:justify-end"
        >
          <Image
            src="/jha9.jpg"
            alt="Scjha"
            width={400}
            height={400}
            className="rounded-lg object-cover shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>
    </section>
  );
}
