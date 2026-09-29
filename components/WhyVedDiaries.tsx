"use client";

import React from "react";
import { Sparkles, Eye, Film, HeartHandshake, Clock } from "lucide-react";

export default function WhyVedDiaries() {
  const pillars = [
    {
      number: "01",
      icon: Eye,
      title: "Real Moments",
      tagline: "Genuine emotions over forced poses",
      description:
        "We believe the most breathtaking memories happen when you forget the camera exists. We blend into the celebration, documenting raw joy, quiet tears, and spontaneous laughter naturally.",
    },
    {
      number: "02",
      icon: Film,
      title: "Cinematic Storytelling",
      tagline: "A narrative film, not a string of clips",
      description:
        "Every wedding is a unique epic with its own cadence. We weave together sacred mantras, vows, emotional family speeches, and licensed musical scores into a true cinematic narrative.",
    },
    {
      number: "03",
      icon: Sparkles,
      title: "Attention to Detail",
      tagline: "From subtle heirlooms to grand architecture",
      description:
        "From the bespoke zardozi embroidery and heirloom polki gems to the atmospheric sunset hues over palace domes, no detail escapes our observant visual composition.",
    },
    {
      number: "04",
      icon: Clock,
      title: "Timeless Memories",
      tagline: "Designed to evoke goosebumps decades later",
      description:
        "Trends fade, but timeless elegance endures. We utilize organic, true-to-life skin tones, natural contrast, and classical framing so your gallery remains as moving fifty years from now.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-[#102B24]/70 mb-3">
            Our Approach
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-[#102B24] tracking-tight">
            Why Discerning Couples Choose Ved Diaries
          </h2>
          <div className="w-12 h-[1px] bg-[#C5A880] mt-4" />
          <p className="mt-4 text-neutral-600 max-w-xl text-xs sm:text-sm font-light">
            We don&apos;t just deliver photographs and video files. We provide peace of mind,
            artistic integrity, and a heartfelt experience throughout your wedding journey.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="group relative p-8 rounded-3xl bg-white border border-[#102B24]/10 shadow-lg shadow-[#102B24]/5 hover:shadow-2xl hover:shadow-[#102B24]/10 transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Top Badge & Number */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-light text-[#C5A880] tracking-widest">
                      {pillar.number}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#102B24]/5 flex items-center justify-center text-[#102B24] group-hover:bg-[#102B24] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-light text-[#102B24] tracking-tight group-hover:text-[#1A3E34] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="mt-1 text-xs font-serif italic text-[#C5A880]">
                    {pillar.tagline}
                  </p>

                  <p className="mt-4 text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#102B24]/5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                  <span className="text-[10px] tracking-widest uppercase text-[#102B24]/60 font-medium">
                    The Ved Standard
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
