"use client";
import { useRef, useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // install react-icons if not already
import Nadia from "@/component/Nadia";
import YoutubePlaylist from "@/component/Youtubeplaylist";
import Hero from "@/component/Hero";
import Concert from "@/component/Concert";
import Projects from "@/component/Projects";
import Gallery from "@/component/Gallery";
import Footer from "@/component/Footer";
import About2 from "@/component/About2";
import BookMyShowPopup from "@/component/BookMyShowPopup"; 

export default function Home() {
  const youtubeRef = useRef(null);
  const projectsRef = useRef(null);
  const [showScroll, setShowScroll] = useState(false);

  const scrollToYoutube = () => {
    youtubeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Show button only when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition-all"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
}
