"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Default manual reviews
const defaultReviews = [
  { name: "Kunal", text: "Scjha's voice is mesmerizing!" },
  { name: "Amit", text: "Absolutely phenomenal!" },
  { name: "Priya", text: "A true artist!" }
];

const VideoTestimonial = ({ refreshKey }) => {
  const [reviews, setReviews] = useState(defaultReviews);

  const fetchReviews = async () => {
    try {
      const res = await fetch("/api/reviews");
      console.log("API status:", res.status);
      if (!res.ok) throw new Error("Failed to fetch reviews");

      const data = await res.json();
      setReviews([...defaultReviews, ...data]);
    } catch (err) {
      console.error("fetchReviews error:", err);
      setReviews(defaultReviews);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [refreshKey]);

  const ReviewCard = ({ review }) => (
    <div className="bg-gray-800 text-white p-8 text-center rounded-lg flex flex-col items-center">
      <div className="flex mb-4">{Array(5).fill().map((_, i) => <span key={i} className="text-yellow-400 text-xl">★</span>)}</div>
      <p className="mb-6 text-lg">{review.text}</p>
      <p className="font-semibold">{review.name}</p>
    </div>
  );

  if (!reviews.length) return <p className="text-white text-center py-10">No reviews yet.</p>;

  return (
    <section className="w-full flex justify-center py-10">
      <div className="w-[80%]">
        {reviews.length > 3 ? (
          <Swiper
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            navigation
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <ReviewCard review={review} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => <ReviewCard key={index} review={review} />)}
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoTestimonial;
