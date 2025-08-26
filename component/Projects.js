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
          setSelectedVideo(fetched[0]);
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
    <div className="w-full min-h-screen  text-white p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Show Glimpse of SCJ</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((v) => (
          <a
            key={v.videoId}
            href={`https://www.youtube.com/watch?v=${v.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 transition-all rounded-xl shadow-lg overflow-hidden transform hover:scale-105 duration-300"
          >
            <img
              src={v.thumb}
              alt={v.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg line-clamp-2 mb-2">{v.title}</h3>
              <p className="text-gray-400 text-sm">
                {new Date(v.publishedAt).toLocaleDateString()}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
