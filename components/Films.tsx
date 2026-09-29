"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Clock, MapPin, ArrowUpRight } from "lucide-react";
import { YouTubeIcon } from "./SocialIcons";
import { weddingFilms, WeddingFilm, YOUTUBE_CHANNEL_URL } from "@/data/films";
import VideoModal from "./VideoModal";

export default function Films() {
  const [activeFilm, setActiveFilm] = useState<WeddingFilm | null>(null);

  const featuredFilm = weddingFilms.find((f) => f.isFeatured) || weddingFilms[0];
  const regularFilms = weddingFilms.filter((f) => f.id !== featuredFilm?.id);

  // Fallback high-res poster images for the video cards
  const videoPosters: Record<string, string> = {
    "film-1": "/images/contact_img.jpg",
    "film-2": "/images/9E0A8414.jpg",
    "film-3": "/images/bannerimg.jpeg",
    "film-4": "/images/1J2A0521.jpg",
  };

  return (
    <section id="films" className="py-24 sm:py-32 bg-[#0A1B17] text-white relative overflow-hidden">
      {/* Subtle Glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#102B24] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#C5A880]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102B24] border border-[#C5A880]/30 text-[#C5A880] text-xs tracking-[0.25em] uppercase mb-3">
              <YouTubeIcon className="w-3.5 h-3.5 text-red-500" />
              <span>Cinematic Wedding Films</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight">
              Stories in Motion
            </h2>
            <div className="w-12 h-[1px] bg-[#C5A880] mt-4" />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="text-white/60 max-w-sm text-xs sm:text-sm font-light">
              Shot on cinema cameras, color graded with film emulation, and scored to evoke raw, tearful emotion.
            </p>
            <a
              href={YOUTUBE_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-700/80 hover:bg-red-600 text-white text-xs font-medium tracking-wider uppercase transition-all shadow-lg hover:shadow-red-700/30 shrink-0"
            >
              <YouTubeIcon className="w-4 h-4 text-white" />
              <span>YouTube Channel</span>
            </a>
          </div>
        </div>

        {/* 1 Large Featured Cinematic Film Card */}
        {featuredFilm && (
          <div
            onClick={() => setActiveFilm(featuredFilm)}
            className="group relative cursor-pointer w-full rounded-3xl overflow-hidden border border-[#C5A880]/30 bg-[#102B24] shadow-2xl transition-all duration-500 hover:border-[#C5A880]/80 mb-12 sm:mb-16"
          >
            <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden">
              <Image
                src={videoPosters[featuredFilm.id] || `https://img.youtube.com/vi/${featuredFilm.youtubeId}/maxresdefault.jpg`}
                alt={featuredFilm.title}
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                sizes="(max-width: 1280px) 100vw, 1200px"
              />

              {/* Dark Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />

              {/* Top Badges */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                <span className="px-3.5 py-1.5 rounded-full bg-[#102B24]/90 backdrop-blur-md border border-[#C5A880]/40 text-[#E0CDB2] text-xs tracking-widest uppercase font-light">
                  {featuredFilm.category}
                </span>

                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs text-white/80">
                  <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
                  {featuredFilm.duration}
                </span>
              </div>

              {/* Centered Large Play Button with Ripple Animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#C5A880]/20 animate-ping" />
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#102B24]/90 border-2 border-[#C5A880] flex items-center justify-center text-[#C5A880] group-hover:bg-[#C5A880] group-hover:text-[#102B24] transition-all duration-300 shadow-2xl group-hover:scale-110">
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </div>
                </div>
              </div>

              {/* Bottom Info Bar */}
              <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-10 right-6 sm:right-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#C5A880] tracking-widest uppercase mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{featuredFilm.location}</span>
                    <span>•</span>
                    <span>{featuredFilm.year}</span>
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-light text-white tracking-tight">
                    {featuredFilm.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-white/70 font-light max-w-xl hidden sm:block">
                    {featuredFilm.description}
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-[#E0CDB2] group-hover:text-white transition-colors">
                  <span>Watch Cinematic Film</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Curated Films Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {regularFilms.map((film) => (
            <div
              key={film.id}
              onClick={() => setActiveFilm(film)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-[#102B24] border border-[#234E42] hover:border-[#C5A880]/60 transition-all duration-500 shadow-xl"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                <Image
                  src={videoPosters[film.id] || `https://img.youtube.com/vi/${film.youtubeId}/hqdefault.jpg`}
                  alt={film.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:opacity-75 transition-opacity" />

                {/* Duration Badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-sm text-[11px] text-white/90 flex items-center gap-1 font-light">
                  <Clock className="w-3 h-3 text-[#C5A880]" />
                  {film.duration}
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#102B24]/90 backdrop-blur-sm text-[10px] text-[#C5A880] tracking-widest uppercase font-light">
                  {film.category}
                </div>

                {/* Small Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#102B24]/90 border border-[#C5A880] flex items-center justify-center text-[#C5A880] group-hover:bg-[#C5A880] group-hover:text-[#102B24] transition-all duration-300 group-hover:scale-110">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <span className="text-[11px] tracking-wider uppercase text-[#C5A880] block mb-1">
                  {film.location}
                </span>
                <h4 className="text-base sm:text-lg font-light text-white tracking-wide group-hover:text-[#E0CDB2] transition-colors">
                  {film.title}
                </h4>
                <p className="mt-2 text-xs text-white/60 font-light line-clamp-2">
                  {film.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Embedded YouTube Player Modal */}
      <VideoModal film={activeFilm} onClose={() => setActiveFilm(null)} />
    </section>
  );
}
