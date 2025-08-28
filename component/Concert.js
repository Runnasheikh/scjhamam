"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Concert() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch("/api/concert");
      const data = await res.json();
      setImages(data.images || []);
    };
    fetchImages();
  }, []);

  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-8 px-8 rounded-lg text-black w-11/12 mx-auto"
    >
      <h2 className="text-3xl font-semibold mb-6 text-center text-white">
        Upcoming Concert
      </h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop={true}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center">
              <Image
                src={img.src}
                alt={img.alt}
                width={1200}
                height={800}
                className="rounded-lg object-cover w-full h-[400px]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
}
