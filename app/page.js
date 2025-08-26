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
import BookMyShowPopup from "@/component/BookMyShowPopup"; // import popup

export default function Home() {
  const youtubeRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollToYoutube = () => {
    youtubeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Nadia scrollToYoutube={scrollToYoutube} scrollToProjects={scrollToProjects} />
      <Hero />

      <div ref={youtubeRef}>
        <YoutubePlaylist />
      </div>

      <Concert />

      <div ref={projectsRef}>
        <Projects />
      </div>

      <Gallery />
      <About2 />
      <Footer />

      {/* Floating Book My Show Popup */}
      <BookMyShowPopup />
    </div>
  );
}
