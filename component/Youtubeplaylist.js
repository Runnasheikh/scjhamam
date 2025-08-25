"use client";
import { useState } from "react";

export default function YoutubePlaylist() {
  const playlistId = "PLFItq-kF44e2_PwkyifK9Bq5wSUh_c_Mw";

  const [currentVideo, setCurrentVideo] = useState("O73TZ-wJbg0");

  const videos = [
    { id: "O73TZ-wJbg0", title: "GULARI KE PHOOL | Soni Choudhary Jha", thumb: "https://img.youtube.com/vi/O73TZ-wJbg0/mqdefault.jpg" },
    { id: "0yMztht16rQ", title: "Mithila Ka Kan Kan Khila", thumb: "https://img.youtube.com/vi/0yMztht16rQ/mqdefault.jpg" },
    { id: "6qItVZ7oCEk", title: "Holi Khele Raghuveera", thumb: "https://img.youtube.com/vi/6qItVZ7oCEk/mqdefault.jpg" },
    { id: "lm2R6Zk0T8g", title: "Kari Saree | Amit Jha, Soni", thumb: "https://img.youtube.com/vi/lm2R6Zk0T8g/mqdefault.jpg" },
    { id: "WhuwIRv0UGo", title: "Hardi Chadhawale Na", thumb: "https://img.youtube.com/vi/WhuwIRv0UGo/mqdefault.jpg" },
    { id: "eIVtH4s2pyM", title: "Uga Ho Suruj Dev (Chhath Geet)", thumb: "https://img.youtube.com/vi/eIVtH4s2pyM/mqdefault.jpg" },
  ];

  return (
    <div className="flex flex-col md:flex-row h-screen bg-black text-white">
      {/* Video Player */}
      <div className="flex-1 w-full md:h-full md:flex md:items-center md:justify-center bg-black">
        <iframe
          className="w-full h-64 md:h-full"
          src={`https://www.youtube.com/embed/${currentVideo}?list=${playlistId}&autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Playlist Sidebar */}
      <div className="w-full md:w-80 bg-gray-900 overflow-y-auto p-2">
        <h2 className="text-lg font-bold mb-2">SCJ Hits</h2>
        <div className="flex flex-col md:flex-col gap-2">
          {videos.map((video) => (
            <div
              key={video.id}
              className={`flex items-center gap-2 p-2 cursor-pointer rounded hover:bg-gray-800 ${
                currentVideo === video.id ? "bg-gray-800" : ""
              }`}
              onClick={() => setCurrentVideo(video.id)}
            >
              <img src={video.thumb} alt={video.title} className="w-24 h-14 md:w-16 md:h-12 rounded" />
              <div className="text-sm line-clamp-2">{video.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
