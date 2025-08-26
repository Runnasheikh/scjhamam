"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const BookMyShowPopup = () => {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 150) { // show after scrolling 150px
      setShow(true);
    } else {
      setShow(false);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  if (!show) return null;

  return (
    <div className="fixed top-5 right-5 z-50">
      <Link href="/contact">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-5 py-3 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer">
          Book My Show
        </div>
      </Link>
    </div>
  );
};

export default BookMyShowPopup;
