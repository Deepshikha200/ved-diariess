"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Clock, MapPin, ExternalLink } from "lucide-react";
import { YouTubeVideo } from "@/data/films";

interface VideoCardProps {
  video: YouTubeVideo;
  onClick?: () => void;
  priority?: boolean;
}

export default function VideoCard({ video, onClick, priority = false }: VideoCardProps) {
  // Clean the YouTube ID (strip extra query params like &t=...)
  const cleanId = video.id.trim().split("&")[0].split("?")[0];

  // Try maxresdefault first for high-res crispness, gracefully fallback to hqdefault
  const [thumbSrc, setThumbSrc] = useState(
    `https://img.youtube.com/vi/${cleanId}/maxresdefault.jpg`
  );

  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.();
        }
      }}
      className="group cursor-pointer flex flex-col rounded-2xl sm:rounded-3xl overflow-hidden bg-[#102B24] border border-[#234E42]/60 hover:border-[#C5A880]/70 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-black/50 text-left focus:outline-none focus:ring-2 focus:ring-[#C5A880]/50"
    >
      {/* Thumbnail Aspect Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-black/60">
        <Image
          src={thumbSrc}
          alt={video.title}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          onError={() => {
            // Fallback to standard guaranteed YouTube thumbnail
            setThumbSrc(`https://img.youtube.com/vi/${cleanId}/hqdefault.jpg`);
          }}
        />

        {/* Dark Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/20 group-hover:from-black/90 group-hover:via-black/35 transition-colors duration-300" />

        {/* Top Badges (Category & Duration) */}
        {(video.category || video.duration) && (
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
            {video.category ? (
              <span className="px-2.5 py-1 rounded-full bg-[#102B24]/90 backdrop-blur-sm border border-[#C5A880]/30 text-[#E0CDB2] text-[10px] sm:text-xs tracking-widest uppercase font-light">
                {video.category}
              </span>
            ) : <span />}

            {video.duration && (
              <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-sm text-[11px] text-white/90 font-light">
                <Clock className="w-3 h-3 text-[#C5A880]" />
                {video.duration}
              </span>
            )}
          </div>
        )}

        {/* Center Subtle Play Button with Micro-Hover Animation */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="relative flex items-center justify-center">
            <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-[#102B24]/90 backdrop-blur-md border border-[#C5A880]/60 flex items-center justify-center text-[#C5A880] group-hover:bg-[#C5A880] group-hover:text-[#102B24] group-hover:border-[#C5A880] transition-all duration-300 shadow-2xl group-hover:scale-110">
              <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-0.5" />
            </div>
          </div>
        </div>

        {/* Mobile/Hover Direct YouTube Link Button */}
        <a
          href={`https://www.youtube.com/watch?v=${cleanId}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="absolute bottom-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 rounded-full bg-black/70 hover:bg-[#C5A880] text-white hover:text-[#102B24] backdrop-blur-sm"
          title="Open directly on YouTube"
          aria-label="Open on YouTube"
        >
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Card Information Bottom Bar */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
        <div>
          {video.location && (
            <span className="text-[11px] text-[#C5A880] tracking-widest uppercase flex items-center gap-1 mb-1.5 font-light">
              <MapPin className="w-3 h-3 text-[#C5A880]" />
              {video.location}
            </span>
          )}

          <h3 className="text-base sm:text-lg font-light text-white tracking-wide group-hover:text-[#E0CDB2] transition-colors leading-snug line-clamp-2">
            {video.title}
          </h3>
        </div>
      </div>
    </div>
  );
}
