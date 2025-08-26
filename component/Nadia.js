"use client";
import { useMemo, useState } from "react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiSpotify } from "react-icons/si";
import { HiMenu, HiX } from "react-icons/hi"; 
import Link from "next/link";
import Carousel from "./Carousel"; 
import { usePathname } from "next/navigation";

const Nadia = ({ scrollToYoutube }) => {
  const heroImages = useMemo(
    () => [
      "/jha2.jpg","/jha3.jpg","/jha4.jpg","/jha5.png",
      "/jha6.jpg","/jha10.jpg","/jha14.jpg",
      "/jha15.jpg","/jha16.jpg","/jha17.jpg",
      "/jha20.jpg","/jha28.jpg","/jha22.jpg",
      "/jha23.jpg","/jha24.jpg","/jha30.jpg"
    ],
    []
  );

  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "India Tour", path: "/India-tour" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08 },
    }),
  };

  return (
    <>
      <Head>
        <title>Scjha — Captivating Rising Star</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="pb-4 bg-transparent text-foreground selection:bg-black/80 selection:text-white">
        {/* Navbar */}
        <header className="sticky top-0 z-50 backdrop-blur bg-white/60 border-b">
          <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-black text-white grid place-items-center font-black">
                Scjha
              </div>
            </div>

            {/* Desktop links */}
            <ul className="hidden sm:flex items-center gap-6 text-sm">
              {links.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className={`hover:opacity-70 transition-opacity border-b-2 pb-1 ${
                      pathname === item.path ? "border-blue-500" : "border-transparent"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social icons */}
            <div className="flex items-center space-x-4 text-xl text-black">
              <a href="https://www.facebook.com/yourfacebookpage" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="cursor-pointer hover:text-gray-600" />
              </a>
              <a href="https://www.instagram.com/soni_scjhaofficial" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="cursor-pointer hover:text-gray-600" />
              </a>
              <a href="https://www.youtube.com/@sonichoudharyjha" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="cursor-pointer hover:text-gray-600" />
              </a>
              <a href="http://open.spotify.com/artist/2j2fBasWl9E4SRsvAWbT8d?si=B0tRt5jfR5O96jo22f0xtg" target="_blank" rel="noopener noreferrer">
                <SiSpotify className="cursor-pointer hover:text-gray-600" />
              </a>
            </div>

            {/* Hamburger for mobile */}
            <div className="sm:hidden ml-2">
              <button onClick={() => setMobileOpen(!mobileOpen)}>
                {mobileOpen ? <HiX size={28} /> : <HiMenu size={28} />}
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="sm:hidden bg-white/90 border-t border-gray-200 overflow-hidden"
              >
                <ul className="flex flex-col items-center gap-4 py-4 text-sm">
                  {links.map((item, index) => (
                    <motion.li
                      key={item.name}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={menuVariants}
                      className="w-full text-center"
                    >
                      <Link
                        href={item.path}
                        className={`block hover:opacity-70 transition-opacity py-2 ${
                          pathname === item.path ? "text-blue-500 font-semibold" : "text-black"
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* Hero Section */}
        <section id="home" className="relative">
          <Carousel images={heroImages} height="h-[72vh] sm:h-[80vh]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10" />
          <div className="absolute inset-0 grid place-items-center text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl text-white"
            >
              <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight drop-shadow-md">
                Scjha: Captivating Female International Star
              </h1>
              <p className="mt-3 text-sm sm:text-base opacity-90">
                SONI CHOUDHARY JHA - Singer / Live Performer
              </p>
              <div className="flex justify-center space-x-6 mt-4">
                <button className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">
                  <a
                    href="https://www.instagram.com/soni_scjhaofficial/?igsh=cDJ5MmJ1eXh5bXk5&utm_source=qr#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </button>
                <button
                  onClick={scrollToYoutube} // scroll to YoutubePlaylist
                  className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition"
                >
                  Listen
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Nadia;
