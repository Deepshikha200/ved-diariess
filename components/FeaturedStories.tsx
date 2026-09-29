"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, MapPin, Calendar, X, Sparkles } from "lucide-react";
import { featuredStories, WeddingStory } from "@/data/stories";

export default function FeaturedStories() {
  const [selectedStory, setSelectedStory] = useState<WeddingStory | null>(null);

  return (
    <section id="stories" className="py-24 sm:py-32 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div>
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-[#102B24]/70 mb-3 block">
              Editorial Portfolio
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-[#102B24] tracking-tight">
              Featured Wedding Stories
            </h2>
            <div className="w-12 h-[1px] bg-[#C5A880] mt-4" />
          </div>
          <p className="text-neutral-600 max-w-md text-sm font-light leading-relaxed">
            Each celebration is an unrepeatable chapter of heritage and devotion.
            Explore these curated wedding diaries from royal palaces and intimate havens.
          </p>
        </div>

        {/* Asymmetric Magazine Grid */}
        <div className="space-y-16 lg:space-y-24">
          {/* Story 1: Large Featured Magazine Spread */}
          {featuredStories.length > 0 && (
            <div className="relative group bg-white rounded-3xl overflow-hidden border border-[#102B24]/10 shadow-xl shadow-[#102B24]/5">
              <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
                {/* Large Visual (7 cols) */}
                <div className="lg:col-span-7 relative h-80 sm:h-96 lg:h-auto overflow-hidden">
                  <Image
                    src={featuredStories[0].coverImage}
                    alt={featuredStories[0].title}
                    fill
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
                  <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-[#102B24]/80 backdrop-blur-md border border-[#C5A880]/40 text-[#E0CDB2] text-xs tracking-[0.2em] uppercase font-light">
                    Cover Feature
                  </div>
                </div>

                {/* Editorial Story Column (5 cols) */}
                <div className="lg:col-span-5 p-8 sm:p-12 lg:p-14 flex flex-col justify-between bg-[#FDFBF7]">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#102B24]/70 tracking-widest uppercase mb-4">
                      <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                      <span>{featuredStories[0].location}</span>
                      <span>•</span>
                      <span>{featuredStories[0].category}</span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-light text-[#102B24] tracking-tight leading-tight">
                      {featuredStories[0].couple}
                    </h3>
                    <p className="mt-1 text-base font-serif italic text-[#C5A880]">
                      {featuredStories[0].title}
                    </p>

                    <blockquote className="mt-6 pl-4 border-l-2 border-[#C5A880] text-sm italic text-neutral-600 font-light leading-relaxed">
                      &ldquo;{featuredStories[0].quote}&rdquo;
                    </blockquote>

                    <p className="mt-6 text-sm text-neutral-600 font-light leading-relaxed line-clamp-3">
                      {featuredStories[0].summary}
                    </p>

                    {/* Secondary thumbnail peek */}
                    <div className="mt-6 flex items-center gap-3">
                      <div className="relative w-20 h-14 rounded-lg overflow-hidden border border-[#102B24]/10 shrink-0">
                        <Image
                          src={featuredStories[0].secondaryImage}
                          alt="Detail shot"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="text-xs text-neutral-500 font-light">
                        <span className="font-medium text-[#102B24]">Highlights:</span>{" "}
                        {featuredStories[0].highlights.join(" • ")}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#102B24]/10">
                    <button
                      onClick={() => setSelectedStory(featuredStories[0])}
                      className="group/btn inline-flex items-center gap-3 text-xs font-medium tracking-[0.2em] uppercase text-[#102B24] hover:text-[#C5A880] transition-colors"
                    >
                      <span>View Story Narrative</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1.5 text-[#C5A880]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Staggered Secondary Stories Grid (3 cards in asymmetric columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {featuredStories.slice(1).map((story, i) => (
              <div
                key={story.id}
                className="group flex flex-col justify-between bg-white rounded-2xl overflow-hidden border border-[#102B24]/10 shadow-lg shadow-[#102B24]/5 hover:shadow-2xl hover:shadow-[#102B24]/10 transition-all duration-500"
              >
                <div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#102B24]">
                    <Image
                      src={story.coverImage}
                      alt={story.couple}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#102B24]/80 backdrop-blur-sm border border-[#C5A880]/30 text-white text-[10px] tracking-[0.2em] uppercase font-light">
                      {story.category}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/90 text-xs">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                        {story.location}
                      </span>
                      <span className="text-[11px] text-white/70">{story.date}</span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7">
                    <h3 className="text-2xl font-light text-[#102B24] tracking-tight group-hover:text-[#1A3E34] transition-colors">
                      {story.couple}
                    </h3>
                    <p className="mt-1 text-xs font-serif italic text-[#C5A880]">
                      {story.title}
                    </p>

                    <p className="mt-4 text-xs sm:text-sm text-neutral-600 font-light leading-relaxed line-clamp-3">
                      {story.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-7 pt-0 border-t border-[#102B24]/5 mt-4">
                  <button
                    onClick={() => setSelectedStory(story)}
                    className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] uppercase text-[#102B24] group-hover:text-[#C5A880] transition-colors pt-4"
                  >
                    <span>View Story</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C5A880] transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Detail Modal */}
      {selectedStory && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedStory(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#FAF8F5] rounded-3xl shadow-2xl border border-[#C5A880]/30 p-6 sm:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedStory(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#102B24] text-white hover:bg-[#C5A880] transition-colors z-20"
              aria-label="Close story"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs text-[#102B24]/70 tracking-widest uppercase mb-2">
              <MapPin className="w-4 h-4 text-[#C5A880]" />
              <span>{selectedStory.location}</span>
              <span>•</span>
              <span>{selectedStory.category}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-light text-[#102B24] tracking-tight">
              {selectedStory.couple}
            </h2>
            <p className="text-lg font-serif italic text-[#C5A880] mt-1">
              {selectedStory.title}
            </p>

            {/* Images Showcase */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#102B24]">
                <Image
                  src={selectedStory.coverImage}
                  alt={selectedStory.couple}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#102B24]">
                <Image
                  src={selectedStory.secondaryImage}
                  alt="Story secondary photo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mt-8 space-y-4 text-neutral-700 text-sm sm:text-base font-light leading-relaxed">
              <blockquote className="p-4 bg-[#F5F2EB] rounded-xl border-l-4 border-[#C5A880] text-sm italic font-normal text-[#102B24]">
                &ldquo;{selectedStory.quote}&rdquo;
              </blockquote>
              <p>{selectedStory.summary}</p>
            </div>

            <div className="mt-6 pt-6 border-t border-[#102B24]/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-medium tracking-wider uppercase text-[#102B24]">
                  Key Moments:
                </span>
                {selectedStory.highlights.map((h, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-[#102B24]/5 text-[#102B24]"
                  >
                    {h}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                onClick={() => setSelectedStory(null)}
                className="px-6 py-2.5 rounded-full bg-[#102B24] text-[#FAF8F5] text-xs tracking-widest uppercase hover:bg-[#C5A880] hover:text-[#102B24] transition-colors"
              >
                Book a Similar Wedding
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
