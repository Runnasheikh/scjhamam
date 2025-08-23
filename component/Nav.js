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

import { useMemo } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import React from "react";
import Carousel from "./Carousel"; 
import Link from "next/link";
import { usePathname } from "next/navigation"; // ✅ Import usePathname

const Nav = () => {
  const heroImages = useMemo(
    () => ["/jha2.jpg", "/jha3.jpg", "/jha4.jpg", "/jha5.png"],
    []
  );

  const pathname = usePathname(); // ✅ Get current route

  return (
    <>
      <Head>
        <title>Scjha — Captivating Female International Star</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className=" bg-background text-foreground selection:bg-black/80 selection:text-white">
        {/* ✅ Navbar */}
        <header className="sticky top-0 z-50 backdrop-blur bg-white/60 border-b">
          <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-black text-white grid place-items-center font-black">
                Scjha
              </div>
              <span className="font-semibold tracking-wide">Scjha</span>
            </div>

            {/* ✅ Navbar Links with active route highlight */}
            <ul className="hidden sm:flex items-center gap-6 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "World Tour", path: "/world-tour" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
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

            <div className="hidden sm:flex items-center space-x-4 text-xl text-black">
              <FaFacebookF className="cursor-pointer hover:text-gray-600" />
              <FaInstagram className="cursor-pointer hover:text-gray-600" />
              <FaLinkedinIn className="cursor-pointer hover:text-gray-600" />
              <FaXTwitter className="cursor-pointer hover:text-gray-600" />
            </div>
          </nav>
        </header>

        {/* ✅ Hero Section */}
        {/* <section id="home" className="relative">
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
                A stylish, modern, and fully responsive landing page powered by
                Next.js, Tailwind CSS, Framer Motion, and Unsplash images.
              </p>
              <div className="flex justify-center space-x-6 mt-4">
                <button className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">
                  View
                </button>
                <button className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">
                  Listen
                </button>
              </div>
            </motion.div>
          </div>
        </section> */}
      </main>
    </>
  );
};

export default Nav;
