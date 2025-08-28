"use client";

import Navbar from "@/component/Nav";
import { useEffect, useState } from "react";

// Default manual reviews
const defaultReviews = [
  { _id: "d1", name: "Kunal", text: "Scjha's voice is mesmerizing!" },
  { _id: "d2", name: "Amit", text: "Absolutely phenomenal!" },
  { _id: "d3", name: "Kaif", text: "A true artist!" }
];

const SeeReview = ({ refreshKey }) => {
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

  useEffect(() => {
    fetchReviews();
  }, [refreshKey]);

  const ReviewCard = ({ review }) => (
    <div className="bg-gray-800 text-white p-8 text-center rounded-lg flex flex-col items-center relative shadow-lg">
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
    <>
    <Navbar/>
    <section className="w-full flex justify-center py-10">
      <div className="w-[80%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review} />
        ))}
      </div>
    </section>
    </>
  );
};

export default SeeReview;
