"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Concert() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("/api/concert");
        const data = await res.json();
        console.log("Fetched images:", data.images);
        setImages(data.images || []);
      } catch (error) {
        console.error("Failed to fetch images:", error);
      }
    };
    fetchImages();
  }, []);

  if (!images.length) {
    return (
      <section className="py-8 px-8 text-center ">
        <h2 className="text-3xl font-semibold mb-6 text-amber-400">Upcoming Concert</h2>
        <p>Loading images...</p>
      </section>
    );
  }

  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-8 px-8 rounded-lg text-black w-11/12 mx-auto"
    >
      <h2 className="text-3xl font-semibold mb-6 text-center text-amber-400">
        Upcoming Concert
      </h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center h-[400px] w-full">
              <Image
  src={img.src}
  alt={img.alt || "Concert Image"}
  width={1200}
  height={800}
  className="rounded-lg w-full h-full object-cover object-center"
/>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
}
