"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Compass, Heart, Film } from "lucide-react";

export default function BrandIntro() {
  const hallmarks = [
   
    {
      icon: Heart,
      number: "250+",
      label: "Stories Preserved",
      description: "Honored to document bespoke love stories",
    },
    {
      icon: Film,
      number: "100%",
      label: "Unscripted Emotion",
      description: "Pure candid honesty over forced poses",
    },
    {
      icon: Sparkles,
      number: "5+",
      label: "Years of Mastery",
      description: "Dedicated to the art of luxury Indian weddings",
    },
  ];

  return (
    <section
      id="brand-intro"
      className="py-24 sm:py-32 lg:py-40 bg-[#FAF8F5] relative overflow-hidden"
    >
      {/* Subtle Background Ambience */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#102B24]/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C5A880]/[0.05] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Brand Crest Accent */}
        <div className="flex flex-col items-center text-center">
          <div className="w-30 h-30 relative mb-6 ">
            <Image
              src="/images/logo.png"
              alt="Ved Diaries Crest"
              fill
              className="object-contain"
            />
          </div>

          <span className="text-xs font-medium tracking-[0.3em] uppercase text-[#102B24]/70 mb-4">
            The Ved Diaries Philosophy
          </span>

          <div className="w-12 h-[1px] bg-[#C5A880] mb-10" />

          {/* Large Editorial Headline */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light text-[#102B24] tracking-tight max-w-4xl leading-[1.18] sm:leading-[1.15]">
            We don&apos;t just capture weddings. <br />
            <span className="font-serif italic font-normal text-[#1A3E34]">
              We preserve the feeling of them.
            </span>
          </h2>

          {/* Narrative Paragraph */}
          <div className="mt-8 sm:mt-10 max-w-2xl text-center space-y-5 text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
            <p>
              Weddings are magnificent whirlwinds of sacred rituals, quiet tears between fathers
              and daughters, ecstatic midnight dance floors, and unspoken glances.
            </p>
            <p>
              At <strong className="font-medium text-[#102B24]">Ved Diaries</strong>, we approach
              each celebration with the sensitivity of a fine-art storyteller and the technical
              finesse of a feature filmmaker. Our lens remains unobtrusive, allowing the authenticity
              of your heritage and bond to breathe naturally.
            </p>
          </div>
        </div>

        {/* Hallmarks Grid */}
        <div className="mt-20 sm:mt-24 pt-12 border-t border-[#102B24]/10 grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 text-center">
          {hallmarks.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex flex-col items-center group">
                <div className="w-10 h-10 rounded-full bg-[#102B24]/5 flex items-center justify-center text-[#102B24] mb-3 group-hover:bg-[#102B24] group-hover:text-[#FAF8F5] transition-colors duration-300">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-3xl sm:text-4xl font-light text-[#102B24] tracking-tight">
                  {item.number}
                </span>
                <span className="mt-1 text-xs font-medium tracking-[0.18em] uppercase text-[#102B24]">
                  {item.label}
                </span>
                <p className="mt-1 text-[11px] sm:text-xs text-neutral-500 font-light max-w-[180px]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
