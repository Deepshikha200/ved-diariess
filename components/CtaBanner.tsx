"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, MessageSquare, Sparkles } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="relative w-full py-28 sm:py-36 lg:py-44 overflow-hidden bg-[#0A1B17]">
      {/* Cinematic Full-Width Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/contact_img.jpg"
          alt="Ved Diaries - Cinematic Moments"
          fill
          className="object-cover object-center scale-105"
          sizes="100vw"
        />
        {/* Layered Luxury Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1B17]/95 via-[#102B24]/85 to-[#0A1B17]/95" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Decorative Gold Frame */}
      <div className="absolute inset-6 sm:inset-10 lg:inset-14 border border-[#C5A880]/20 rounded-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C5A880]/40 text-[#E0CDB2] mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
          <span className="text-[10px] sm:text-xs font-medium tracking-[0.3em] uppercase">
            Reservations Open for 2026 – 2027
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-tight">
          Your story deserves <br className="hidden sm:inline" />
          to be <span className="font-serif italic font-normal text-[#E0CDB2]">remembered.</span>
        </h2>

        <p className="mt-6 text-base sm:text-xl text-white/80 font-light max-w-xl leading-relaxed">
          Let&apos;s create something timeless together. We accept a limited number of
          weddings each season to ensure uncompromising artistic dedication.
        </p>

        {/* Buttons */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#contact"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#FAF8F5] text-[#102B24] text-xs sm:text-sm font-medium tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#C5A880] hover:text-white shadow-xl hover:scale-105"
          >
            <span>Let&apos;s Talk</span>
            <MessageSquare className="w-4 h-4 text-[#102B24] group-hover:text-white transition-colors" />
          </a>

          <a
            href="#contact"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-transparent hover:bg-white/10 text-white border border-white/40 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase transition-all duration-300 hover:border-white"
          >
            <span>Book Your Date</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
