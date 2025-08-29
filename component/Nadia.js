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
import Image from "next/image";

const Nadia = ({ scrollToYoutube, scrollToProjects }) => {
  const heroImages = useMemo(
  () => [
    "/jhaheader/head0.png",   // ✅ First image
    "/jhaheader/head1.jpg",
    "/jhaheader/head2.png",
    "/jhaheader/head3.jpg",
    "/jhaheader/head4.jpg",
    "/jhaheader/head5.jpg",
    "/jhaheader/head6.jpg",
    "/jhaheader/head7.jpg",
    "/jhaheader/head8.jpg",
    "/jhaheader/head9.jpg",
    "/jhaheader/head10.jpg",
    "/jhaheader/head1.jpg",
    "/jhaheader/head12.png",
    "/jhaheader/head13.jpg",
    "/jhaheader/head14.jpg",
    "/jhaheader/head15.jpg",
    "/jhaheader/head16.jpg",
    "/jhaheader/head17.jpg",
    "/jhaheader/head18.jpg",
    "/jhaheader/head19.jpg",
    "/jhaheader/head20.jpg",
    "/jhaheader/head21.jpg",
    "/jhaheader/head22.jpg",
    "/jhaheader/head23.jpg",
    "/jhaheader/head24.jpg",
    "/jhaheader/head25.jpg",
  ],
  []
);


  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Show Glimpse", path: null },
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
              <Link href="/">
                <Image
                  src="/jha/navimage.png"   // 🔥 put your uploaded logo path here
                  alt="SCJha Logo"
                  width={40}
                  height={40}
                  className="object-contain rounded-full"
                  priority
                />
              </Link>
            </div>

            {/* Desktop links */}
            <ul className="hidden sm:flex items-center h-14 gap-6 text-sm">
              {links.map((item) => (
                <li key={item.name} className="flex items-center h-full">
                  {item.name === "Show Glimpse" ? (
                    <button
                      onClick={scrollToProjects}
                      className="flex items-center h-full px-2 text-sm leading-none border-b-2 border-transparent hover:opacity-70 transition"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      href={item.path}
                      className={`flex items-center h-full px-2 text-sm leading-none border-b-2 border-transparent hover:opacity-70 transition ${
                        pathname === item.path ? "border-blue-500 font-semibold" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
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
                <ul className="flex flex-col items-center w-full text-center py-4">
                  {links.map((item, index) => (
                    <motion.li
                      key={item.name}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={menuVariants}
                      className="w-full"
                    >
                      {item.name === "Show Glimpse" ? (
                        <button
                          onClick={() => {
                            setMobileOpen(false);
                            setTimeout(() => {
                              scrollToProjects(); // scroll after menu closes
                            }, 300); // match animation duration
                          }}
                          className="w-full text-center px-4 py-4 border-b-2 border-transparent hover:opacity-70 transition text-black font-medium"
                        >
                          {item.name}
                        </button>
                      ) : (
                        <Link
                          href={item.path}
                          onClick={() => setMobileOpen(false)}
                          className={`block w-full text-center px-4 py-4 hover:opacity-70 transition ${
                            pathname === item.path ? "text-blue-500 font-semibold" : "text-black"
                          }`}
                        >
                          {item.name}
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* Hero Section */}
        {/* Hero Section */}
{/* Hero Section */}
<section id="home" className="relative">
  <Carousel images={heroImages} height="h-[72vh] sm:h-[80vh]" />

  {/* No heavy overlay - keep image dominant */}
  <div className="absolute inset-0 bg-black/10" /> {/* optional: tiny dark tint */}

  {/* Text overlay */}
  <div className="absolute inset-0 flex flex-col justify-end items-center text-center px-4 pb-24 sm:pb-32">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl"
    >
      <h1 className="text-2xl sm:text-4xl font-extrabold leading-tight text-white/60">
        SCJha: Captivating Rising Star
      </h1>
      <p className="mt-3 text-xs sm:text-sm text-black/80">
        SONI CHOUDHARY JHA - Playback Singer / Live Performer
      </p>
      <div className="flex justify-center space-x-6 mt-4">
        <button className="px-6 py-2 border border-white text-white rounded-full hover:bg-white/20 hover:text-white transition">
          <a
            href="https://www.instagram.com/soni_scjhaofficial/?igsh=cDJ5MmJ1eXh5bXk5&utm_source=qr#"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
        </button>
        <button
          onClick={scrollToYoutube}
          className="px-6 py-2 border border-white/90 text-white/70 rounded-full hover:bg-white/70 hover:text-black transition"
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
