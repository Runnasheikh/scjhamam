"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative text-white py-12 px-6 md:px-16 w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 w-11/12 mx-auto mb-12">
        {/* Heading with fade-in from left */}
        <motion.h1
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold mb-8 text-center md:text-left 
                     text-amber-400 bg-clip-text  "
        >
          A Rising Star: SCJha
        </motion.h1>

        {/* Flex container with text on left and image on right */}
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Text slides in from left */}
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-2/3 flex flex-col justify-center text-left space-y-6 bg-black/40 p-6 rounded-2xl shadow-lg"
          >
            <p className="text-base sm:text-lg leading-relaxed text-gray-100 drop-shadow-[0_0_8px_rgba(0,200,255,0.8)]">
              Soni Choudhary Jha is an accomplished playback singer and live performer.
              She has showcased her talent as a live performer in more than eight states,
              including Delhi, Punjab, Gujarat, West Bengal, Bihar, and Jharkhand.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-100 drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]">
              In addition to her live performances, Soni has lent her voice to playback singing
              in various music projects, working with notable platforms such as T-Series Bhakti
              Sagar, Ganga Maithili, Bhojpuri T Stage, and Fox Records Group. Her versatility is
              evident in her ability to sing in multiple languages, including Hindi, Maithili,
              Bhojpuri, Awadhi, Punjabi, and Haryanvi.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-300 italic drop-shadow-[0_0_6px_rgba(255,182,193,0.7)]">
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
              className="rounded-lg object-cover shadow-2xl hover:scale-105 transition-transform duration-300 border-4 border-cyan-400/40"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
