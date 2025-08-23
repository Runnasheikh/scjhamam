"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Carousel({ images, height = "h-[60vh]" }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % images.length);
    }, 4000);

    return () => clearInterval(id);
  }, [images.length]);

  const current = images[index];

  const imageSrc = current.startsWith("http")
    ? `${current}&auto=format&fit=crop&w=1600&q=80`
    : current;

  return (
    <div className={`relative w-full ${height} overflow-hidden rounded-2xl shadow-lg`}>
      {/* Blurred background of the current slide */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={imageSrc}
          alt={`bg-slide-${index}`}
          className="w-full h-full object-cover filter blur-3xl scale-110"
        />
        <div className="absolute inset-0 bg-blue-500/30"></div>
      </div>

      {/* Foreground image sliding */}
      <AnimatePresence initial={false} mode="wait">
        <motion.img
          key={current} // changes key when slide changes
          src={imageSrc}
          alt={`slide-${index}`}
          className="relative w-full h-full object-contain"
          initial={{ x: direction > 0 ? "100%" : "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction > 0 ? "-100%" : "100%", opacity: 0 }}
          transition={{ type: "tween", ease: "easeInOut", duration: 0.8 }}
        />
      </AnimatePresence>

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            className={`h-2 w-2 rounded-full transition-all ${
              i === index ? "w-6 bg-white/90" : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
