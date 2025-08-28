"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Default manual reviews
const defaultReviews = [
  { _id: "d1", name: "Kunal", text: "Scjha's voice is mesmerizing!" },
  { _id: "d2", name: "Amit", text: "Absolutely phenomenal!" },
  { _id: "d3", name: "kaif", text: "A true artist!" }
];

const Deletereview = ({ refreshKey }) => {
  const [reviews, setReviews] = useState(defaultReviews);

  // Fetch reviews from API
  const fetchReviews = async () => {
    try {
      const res = await fetch("/api/reviews", { cache: "no-store" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to fetch reviews");

      setReviews([...defaultReviews, ...data]); // merge default and DB reviews
    } catch (err) {
      console.error("fetchReviews error:", err);
      setReviews(defaultReviews);
    }
  };

  // Delete review
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/reviews?id=${id}`, { method: "DELETE" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to delete review");

      setReviews(reviews.filter((r) => r._id !== id)); // remove locally
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [refreshKey]);

  const ReviewCard = ({ review }) => (
    <div className="bg-gray-800 text-white p-8 text-center rounded-lg flex flex-col items-center relative">
      <button
        onClick={() => handleDelete(review._id)}
        className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-sm"
      >
        Delete
      </button>
      <div className="flex mb-4">
        {Array(5)
          .fill()
          .map((_, i) => (
            <span key={i} className="text-yellow-400 text-xl">★</span>
          ))}
      </div>
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
            {reviews.map((review) => (
              <SwiperSlide key={review._id}>
                <ReviewCard review={review} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review._id} review={review} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Deletereview;
