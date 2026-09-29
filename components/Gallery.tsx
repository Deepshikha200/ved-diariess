"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Maximize2, MapPin, Sparkles } from "lucide-react";
import { galleryImages, galleryCategories, GalleryCategory, GalleryImage } from "@/data/gallery";
import Lightbox from "./Lightbox";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("All");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredImages = useMemo(() => {
    if (selectedCategory === "All") return galleryImages;
    return galleryImages.filter((img) => img.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102B24]/5 border border-[#102B24]/10 text-[#102B24] text-xs tracking-[0.25em] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Visual Archive</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-light text-[#102B24] tracking-tight">
            The Ved Diaries Gallery
          </h2>
          <div className="w-12 h-[1px] bg-[#C5A880] mt-4" />
          <p className="mt-3 text-neutral-600 max-w-xl text-xs sm:text-sm font-light">
            A curated collection of quiet intimacies, majestic architectural frames, and exuberant rituals.
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {galleryCategories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs font-medium tracking-[0.15em] uppercase transition-all duration-300 ${
                    isActive
                      ? "bg-[#102B24] text-[#FAF8F5] shadow-md shadow-[#102B24]/20 scale-105"
                      : "bg-[#F5F2EB] text-[#102B24]/75 hover:bg-[#EBE6DC] hover:text-[#102B24]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial Masonry Grid (columns layout allows mixed portrait, landscape, square naturally) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 [column-fill:_balance]">
          {filteredImages.map((image, index) => {
            // Determine aspect ratio class
            const aspectClass =
              image.aspect === "portrait"
                ? "aspect-[3/4]"
                : image.aspect === "landscape"
                ? "aspect-[4/3]"
                : "aspect-square";

            return (
              <div
                key={image.id}
                onClick={() => setActiveLightboxIndex(index)}
                className="group relative cursor-pointer break-inside-avoid mb-6 rounded-2xl overflow-hidden bg-[#102B24] border border-[#102B24]/10 shadow-md hover:shadow-2xl transition-all duration-500"
              >
                <div className={`relative w-full ${aspectClass} overflow-hidden`}>
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102B24]/90 via-[#102B24]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5" />

                  {/* Expand Icon Badge */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#102B24]/80 backdrop-blur-md border border-[#C5A880]/40 flex items-center justify-center text-[#E0CDB2] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Bottom Text Information */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 text-white">
                    <span className="text-[10px] font-serif italic text-[#C5A880] tracking-wider uppercase block">
                      {image.category}
                    </span>
                    <h4 className="text-sm font-light text-white tracking-wide mt-0.5 line-clamp-1">
                      {image.title}
                    </h4>
                    <span className="text-[11px] text-white/70 flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3 text-[#C5A880]" />
                      {image.location}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Component */}
      <Lightbox
        images={filteredImages}
        currentIndex={activeLightboxIndex}
        onClose={() => setActiveLightboxIndex(null)}
        onNavigate={(newIndex) => setActiveLightboxIndex(newIndex)}
      />
    </section>
  );
}
