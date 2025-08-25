"use client";

import { useRef } from "react";
import Nadia from "@/component/Nadia";
import YoutubePlaylist from "@/component/Youtubeplaylist";
import Hero from "@/component/Hero";
import Concert from "@/component/Concert";
import Projects from "@/component/Projects";
import Gallery from "@/component/Gallery";

import Footer from "@/component/Footer";
import About2 from "@/component/About2";

export default function Home() {
  // Ref for YoutubePlaylist
  const youtubeRef = useRef(null);

  // Function to scroll smoothly
  const scrollToYoutube = () => {
    youtubeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Nadia Hero Section */}
      <Nadia scrollToYoutube={scrollToYoutube} />

      {/* Other Sections */}
      <Hero />

      {/* Youtube Playlist Section */}
      <div ref={youtubeRef}>
        <YoutubePlaylist />
      </div>

      <Concert />
      <Projects />
      <Gallery />
      {/* <AboutSection /> */}
      
      {/* <AboutPage /> */}
      <About2/>
      <Footer />
    </div>
  );
}
