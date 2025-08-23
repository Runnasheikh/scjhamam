"use client"; // must be first line

import { motion } from "framer-motion";
import Image from "next/image";

const sections = [
  { title: "Upcoming Concert", id: "concert" },
  { title: "Featured Projects", id: "projects" },
];

const eventImages = ["/jha2.jpg", "/jha3.jpg"];

export default function Middle() {
  return (
    <div className="space-y-24 bg-transparent">
      {/* Hero Section */}
      <motion.section
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-white py-16 pb-20 px-8 flex flex-col md:flex-row items-center justify-center gap-8 w-11/12 mx-auto shadow-none"
      >
        <div className="md:w-1/2 text-center md:text-center flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">A Rising Star: Scjha</h1>
          <p className="text-base sm:text-lg">
            Soni Choudhary Jha is an accomplished playback singer and live performer
            with over five years of experience in both learning and performing music. She
            has showcased her talent as a live performer in more than eight states,
            including Delhi, Punjab, Gujarat, West Bengal, Bihar, and Jharkhand.
            In addition to her live performances, Soni has lent her voice to playback singing
            in various music projects, working with notable platforms such as T-Series Bhakti
            Sagar, Ganga Maithili, Bhojpuri T Stage, and Fox Records Group. Her versatility is
            evident in her ability to sing in multiple languages, including Hindi, Maithili,
            Bhojpuri, Awadhi, Punjabi, and Haryanvi, making her a dynamic and sought
            after artist in the industry
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/jha2.jpg"
            alt="Scjha"
            width={700}
            height={700}
            className="rounded-lg object-cover w-full h-[80vh]"
          />
        </div>
      </motion.section>

      {/* Sections */}
      {sections.map((section) => (
        <motion.section
          key={section.id}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`py-16 px-8 rounded-lg text-white shadow-none w-11/12 mx-auto`}
        >
          <h2 className="text-3xl font-semibold mb-6 text-center">{section.title}</h2>

          {/* Upcoming Concert */}
          {section.id === "concert" && (
            <div className="flex justify-center items-center h-[60vh]">
              <Image
                src="/jha2.jpg"
                alt="Upcoming Concert"
                width={1200}
                height={800}
                className="rounded-lg object-cover w-4/5 h-full"
              />
            </div>
          )}

          {/* Featured Projects */}
          {section.id === "projects" && (
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
          )}
        </motion.section>
      ))}
    </div>
  );
}
 