"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <motion.section
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.8 }}
      className="text-white py-4 px-8 w-11/12 mx-auto mb-8" // <-- added mb-12
    >
      {/* Heading at the top */}
      <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center md:text-left ">
        A Rising Star: Scjha
      </h1>

      {/* First half text - full width above image */}
      <div className="mb-8 text-center md:text-left">
        <p className="text-base sm:text-lg leading-relaxed">
          Soni Choudhary Jha is an accomplished playback singer and live performer
          with over five years of experience in both learning and performing music.
          She has showcased her talent as a live performer in more than eight states,
          including Delhi, Punjab, Gujarat, West Bengal, Bihar, and Jharkhand.
        </p>
      </div>

      {/* Image with second half text */}
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Image on left */}
        <div className="md:w-1/3 flex justify-center md:justify-start">
          <Image
            src="/jha11.jpg"
            alt="Scjha"
            width={400}
            height={400}
            className="rounded-lg object-cover w-64 h-64 md:w-72 md:h-72"
          />
        </div>

        {/* Second half of text on right */}
        <div className="md:w-2/3 flex flex-col justify-center text-left">
          <p className="text-base sm:text-lg leading-relaxed">
            In addition to her live performances, Soni has lent her voice to playback singing
            in various music projects, working with notable platforms such as T-Series Bhakti
            Sagar, Ganga Maithili, Bhojpuri T Stage, and Fox Records Group. Her versatility is
            evident in her ability to sing in multiple languages, including Hindi, Maithili,
            Bhojpuri, Awadhi, Punjabi, and Haryanvi.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
