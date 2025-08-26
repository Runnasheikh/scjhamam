"use client";
import { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";

export default function YoutubePlaylist() {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);

  const playlistId = "PLFItq-kF44e2_PwkyifK9Bq5wSUh_c_Mw";
  const apiKey = process.env.NEXT_PUBLIC_YT_API_KEY;

  useEffect(() => {
    async function fetchPlaylist() {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=${playlistId}&key=${apiKey}`
        );
        const data = await res.json();

        console.log("Playlist Data:", data);

        if (data.items) {
          const fetchedVideos = data.items.map((item) => ({
            id: item.snippet.resourceId.videoId,
            title: item.snippet.title,
            thumb: item.snippet.thumbnails.medium.url,
          }));

          setVideos(fetchedVideos);
          setCurrentVideo(fetchedVideos[0].id); // play first video by default
        } else {
          console.error("No items found in playlist");
        }
      } catch (err) {
        console.error("Error fetching playlist:", err);
      }
    }

    fetchPlaylist();
  }, [playlistId, apiKey]);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-black text-white">
      {/* Video Player */}
      <div className="flex-1 w-full md:h-full flex items-center justify-center bg-black">
        {currentVideo ? (
          <iframe
            className="w-full h-64 md:h-full"
            src={`https://www.youtube.com/embed/${currentVideo}?list=${playlistId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <p>Loading video...</p>
        )}
      </div>

      {/* Playlist Sidebar */}
      <div className="w-full md:w-80 bg-gray-900 overflow-y-auto p-2">
        <h2 className="text-lg font-bold mb-2">SCJ Hits Playlist</h2>
        <div className="flex flex-col gap-2">
          {videos.map((video) => (
            <div
              key={video.id}
              className={`flex items-center gap-2 p-2 cursor-pointer rounded hover:bg-gray-800 ${
                currentVideo === video.id ? "bg-gray-800" : ""
              }`}
              onClick={() => {
                setCurrentVideo(video.id);
              }}
            >
              <img
                src={video.thumb}
                alt={video.title}
                className="w-24 h-14 md:w-16 md:h-12 rounded"
              />
              <div className="text-sm line-clamp-2">{video.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
