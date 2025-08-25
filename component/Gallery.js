"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import JSON directly
import galleryData from "../app/data/gallery.json";

const Gallery = () => {
  const images = galleryData.images; // get images from JSON

  return (
    <section className="py-16 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-3xl text-amber-400 font-bold mb-4">Gallery Highlights</h2>
        <p className="text-gray-300 mb-12">
          Explore Scjha stunning portfolio and captivating musical moments.
        </p>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="py-8"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="overflow-hidden rounded-xl shadow-xl border border-gray-800">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={500}
                  className="w-full h-[300px] md:h-[350px] lg:h-[400px] object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;
