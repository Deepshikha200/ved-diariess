"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote, MapPin } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const current = testimonialsData[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section className="py-24 sm:py-32 bg-[#F5F2EB] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-[#102B24]/70 mb-3">
            Words of Love
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-[#102B24] tracking-tight">
            Kind Words from Our Couples
          </h2>
          <div className="w-12 h-[1px] bg-[#C5A880] mt-4" />
        </div>

        {/* Editorial Feature Testimonial Card */}
        <div className="relative bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#102B24]/10 shadow-xl shadow-[#102B24]/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Couple Image Thumbnail */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start">
              {current.image && (
                <div className="relative w-48 h-56 sm:w-60 sm:h-72 rounded-2xl overflow-hidden shadow-lg border border-[#C5A880]/30 bg-[#102B24]">
                  <Image
                    src={current.image}
                    alt={current.clientName}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
              )}
            </div>

            {/* Testimonial Quote & Info */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              <div>
                {/* 5 Stars Rating */}
                <div className="flex items-center gap-1.5 text-[#C5A880] mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="ml-2 text-xs font-medium tracking-wider text-[#102B24]/60">
                    5.0 RATING
                  </span>
                </div>

                <Quote className="w-10 h-10 text-[#C5A880]/40 mb-3" />

                <blockquote className="text-base sm:text-lg lg:text-xl font-light text-[#102B24] leading-relaxed italic">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>

                <div className="mt-8 pt-6 border-t border-[#102B24]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-xl font-light text-[#102B24] tracking-tight">
                      {current.clientName}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-neutral-500 font-light mt-1">
                      <span>{current.weddingDetails}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-[#102B24]/80">
                        <MapPin className="w-3 h-3 text-[#C5A880]" />
                        {current.location}
                      </span>
                    </div>
                  </div>

                  {/* Navigation Arrows */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      className="p-3 rounded-full bg-[#FAF8F5] hover:bg-[#102B24] hover:text-white border border-[#102B24]/10 transition-colors"
                      aria-label="Previous Testimonial"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-xs font-mono text-neutral-400 px-2">
                      {activeIndex + 1} / {testimonialsData.length}
                    </span>
                    <button
                      onClick={handleNext}
                      className="p-3 rounded-full bg-[#FAF8F5] hover:bg-[#102B24] hover:text-white border border-[#102B24]/10 transition-colors"
                      aria-label="Next Testimonial"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel indicator dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonialsData.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                i === activeIndex ? "w-8 bg-[#102B24]" : "w-2 bg-[#102B24]/20 hover:bg-[#102B24]/40"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
