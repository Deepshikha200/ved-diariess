"use client";

import React, { useEffect } from "react";
import { X, ExternalLink } from "lucide-react";
import { WeddingFilm, YOUTUBE_CHANNEL_URL } from "@/data/films";

interface VideoModalProps {
  film: WeddingFilm | null;
  onClose: () => void;
}

export default function VideoModal({ film, onClose }: VideoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (film) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [film, onClose]);

  if (!film) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#0A1B17] rounded-3xl overflow-hidden border border-[#C5A880]/30 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-5 sm:px-8 py-4 bg-[#102B24] border-b border-[#234E42]">
          <div className="flex flex-col">
            <span className="text-xs font-serif italic text-[#C5A880]">
              {film.category} • {film.location}
            </span>
            <h3 className="text-base sm:text-lg font-light text-white tracking-wide truncate max-w-md sm:max-w-xl">
              {film.title}
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`https://www.youtube.com/watch?v=${film.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#FAF8F5]/80 hover:text-white px-3 py-1.5 rounded-full border border-white/20 transition-colors"
            >
              <span>Watch on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close video player"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 16:9 Responsive Video Embed Container */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${film.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={film.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>

        {/* Bottom Details Bar */}
        <div className="p-5 sm:p-6 bg-[#0A1B17] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-white/70">
          <p className="max-w-2xl font-light">{film.description}</p>
          <a
            href={YOUTUBE_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A880] hover:underline font-medium tracking-wider uppercase shrink-0"
          >
            Visit @veddiaries9 YouTube Channel →
          </a>
        </div>
      </div>
    </div>
  );
}
