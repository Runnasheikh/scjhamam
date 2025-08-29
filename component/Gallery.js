"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch("/api/gallery");
      const data = await res.json();
      setImages(data.images || []);
    };
    fetchImages();
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-8   
                     bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(0,255,255,0.7)] text-center">
          Gallery Highlights
        </h2>
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
              <div className="relative w-full h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-xl shadow-xl border border-gray-800">
                {/* Blurred background */}
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover blur-2xl scale-110"
                />

                {/* Main image (always fits, no cropping) */}
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-contain relative z-10"
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
