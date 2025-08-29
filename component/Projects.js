"use client";
import { useEffect, useState } from "react";

export default function Projects() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const playlistId = "PLFItq-kF44e1bHRVXhvUjgj7UGsN62tJA";
  const apiKey = process.env.NEXT_PUBLIC_YT_API_KEY;

  useEffect(() => {
    async function fetchPlaylist() {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}`
        );
        const data = await res.json();

        if (data.items) {
          const fetched = data.items.map((item, index) => ({
            index: index + 1,
            videoId: item.snippet.resourceId.videoId,
            title: item.snippet.title,
            thumb: item.snippet.thumbnails.medium.url,
            publishedAt: item.snippet.publishedAt,
          }));
          setVideos(fetched);
          setSelectedVideo(fetched[0]); // autoplay first video
        } else {
          console.error("No videos found in playlist", data);
        }
      } catch (e) {
        console.error("Error fetching playlist data", e);
      }
    }
    fetchPlaylist();
  }, [playlistId, apiKey]);

  return (
    <div className="w-full min-h-screen text-amber-400 p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Show Glimpse of SCJ</h2>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* 🎥 Main Video Player */}
        {selectedVideo && (
          <div className="flex-1">
            <iframe
              className="w-full aspect-video rounded-xl shadow-lg"
              src={`https://www.youtube.com/embed/${selectedVideo.videoId}`}
              title={selectedVideo.title}
              allow="accelerometer; ; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="mt-4 text-xl font-semibold">{selectedVideo.title}</h3>
            <p className="text-gray-400 text-sm">
              {new Date(selectedVideo.publishedAt).toLocaleDateString()}
            </p>
          </div>
        )}

        {/* 📺 Playlist (Sidebar) */}
        <div className="w-full lg:w-1/3 bg-gray-900 rounded-xl shadow-lg overflow-y-auto max-h-[70vh]">
          {videos.map((v) => (
            <div
              key={v.videoId}
              className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-700 transition-all ${
                selectedVideo?.videoId === v.videoId ? "bg-gray-700" : ""
              }`}
              onClick={() => setSelectedVideo(v)}
            >
              <img
                src={v.thumb}
                alt={v.title}
                className="w-32 h-20 object-cover rounded-md"
              />
              <div className="flex flex-col">
                <h3 className="text-sm font-semibold line-clamp-2">{v.title}</h3>
                <p className="text-gray-400 text-xs">
                  {new Date(v.publishedAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
