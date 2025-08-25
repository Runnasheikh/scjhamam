"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "/jha10.jpg",
  "/jha7.jpg",
  "/jha8.jpg",
  "/jha12.jpg",
  "/jha6.jpg",
];

export default function Concert() {
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
        slidesPerView={1} // default → mobile = 1 slide
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 }, // phones
          768: { slidesPerView: 2 }, // tablets
          1024: { slidesPerView: 3 }, // desktops
        }}
        loop={true}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center">
              <Image
                src={src}
                alt={`Concert ${index + 1}`}
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
