"use client";
// import Image from "next/image";
// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6"; 

// import React from 'react'
// import Link from "next/link";

// const Nav = () => {
//   return (
//     <div className=" bg-gray-100 flex flex-col ">
//      <nav className="bg-gray-1000 shadow-sm py-4 px-8 flex justify-between items-center">
//      <div className="flex space-x-8 text-gray-700 font-medium">
//      <Link href="/" className="hover:text-black border-b-2 border-black pb-1">Home</Link>
//      <a href="#portfolio" className="hover:text-black">Portfolio</a>
//      <a href="#tour" className="hover:text-black">World Tour</a>
//      <a href="#about" className="hover:text-black">About</a>
//      <a href="#contact" className="hover:text-black">Contact</a>
//      </div>
//      <div className="flex items-center space-x-6">
//      <Image
//      width={20}
//      height={20}
//      src="/logo.png"
//      alt="Scj"
//      className="h-12 w-auto"
//      />
//      <div className="flex space-x-4 text-xl text-black">
//      <FaFacebookF className="cursor-pointer hover:text-gray-600" />
//      <FaInstagram className="cursor-pointer hover:text-gray-600" />
//      <FaLinkedinIn className="cursor-pointer hover:text-gray-600" />
//      <FaXTwitter className="cursor-pointer hover:text-gray-600" />
//      </div>
//      </div>
//      </nav>
     
     
     {/* Hero Section */}
     {/* <section
  id="home"
  className="relative min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-center text-white px-6"
  style={{
    backgroundImage: `url("https://s1.1zoom.me/b5136/671/Emirates_UAE_Houses_Temples_Abu_Dhabi_Bay_Night_566457_1920x1080.jpg")`,
  }}
>
  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
  <div className="relative z-10 max-w-3xl">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">
      Scjha: Captivating Female International Star
    </h1>
    <p className="text-lg md:text-xl mb-6">
      Explore the enchanting world of Scjha&apos;s music and artistry through her stunning portfolio.
    </p>
    <div className="flex justify-center space-x-6">
      <button className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">
        View
      </button>
      <button className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">
        Listen
      </button>
    </div>
  </div>
</section> */}

//     </div>
//   )
// }

// export default Nav


import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiSpotify } from "react-icons/si";
import { HiMenu, HiX } from "react-icons/hi"; 
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
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
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 border-b">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        
        {/* Logo */}
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
  );
};

export default Navbar;
