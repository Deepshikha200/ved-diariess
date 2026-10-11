"use client";

import React, { useState } from "react";
import { YouTubeIcon } from "./SocialIcons";
import { videos, YouTubeVideo, YOUTUBE_CHANNEL_URL } from "@/data/films";
import VideoCard from "./VideoCard";
import VideoModal from "./VideoModal";

export default function Films() {
  const [activeVideo, setActiveVideo] = useState<YouTubeVideo | null>(null);

  return (
    <section id="films" className="py-20 sm:py-32 bg-[#0A1B17] text-white relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#102B24] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#C5A880]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102B24] border border-[#C5A880]/30 text-[#C5A880] text-xs tracking-[0.25em] uppercase mb-4">
              <YouTubeIcon className="w-3.5 h-3.5 text-red-500" />
              <span>Cinematic Wedding Films</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight">
              Stories in Motion
            </h2>
            <div className="w-12 h-[1px] bg-[#C5A880] mt-4" />
            <p className="mt-4 text-white/70 max-w-xl text-sm sm:text-base font-light leading-relaxed">
              Cinematic stories, beautiful moments, and journeys captured through our lens.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={YOUTUBE_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-red-700/80 hover:bg-red-600 text-white text-xs font-medium tracking-wider uppercase transition-all shadow-lg hover:shadow-red-700/30"
            >
              <YouTubeIcon className="w-4 h-4 text-white" />
              <span>Visit YouTube Channel</span>
            </a>
          </div>
        </div>

        {/* Responsive Grid: 3 cols Desktop, 2 cols Tablet, 1 col Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {videos.map((video, index) => (
            <VideoCard
              key={video.id}
              video={video}
              priority={index < 3}
              onClick={() => setActiveVideo(video)}
            />
          ))}
        </div>
      </div>

      {/* Embedded YouTube Player Modal */}
      <VideoModal film={activeVideo} onClose={() => setActiveVideo(null)} />
    </section>
  );
}
