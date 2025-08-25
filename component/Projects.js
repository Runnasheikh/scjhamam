"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-4 px-8 rounded-lg text-white w-11/12 mx-auto"
    >
      <h2 className="text-3xl font-semibold mb-6 text-center">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-lg h-64 flex items-center justify-center overflow-hidden">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/O73TZ-wJbg0?autoplay=1&mute=1"
            title="Video 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="rounded-lg h-64 flex items-center justify-center overflow-hidden">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/mSyqtNyxOlI?autoplay=1&mute=1"
            title="Video 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="rounded-lg h-64 flex items-center justify-center">
          <Image
            src="/jha4.jpg"
            alt="Project 3"
            width={500}
            height={500}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>

        <div className="rounded-lg h-64 flex items-center justify-center">
          <Image
            src="/jha5.png"
            alt="Project 4"
            width={500}
            height={500}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </div>
    </motion.section>
  );
}
