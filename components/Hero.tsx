"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowDown, Play, ArrowUpRight, Sparkles } from "lucide-react";

const heroSlides = [
  {
    image: "/images/bannerimg.jpeg",
    tagline: "Grand Celebrations",
    location: "Chandigarh, India",
  },
  {
    image: "/images/contact_img.jpg",
    tagline: "Timeless Emotion",
    location: "Chandigarh, India",
  },
  {
    image: "/images/DSC09536.jpg",
    tagline: "Regal Heritage",
    location: "Chandigarh, India",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Subtle automatic slide change every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0A1B17]"
    >
      {/* Background Image Carousel with Cinematic Pan & Zoom */}
      {heroSlides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div
              className={`relative w-full h-full transform transition-transform duration-[7000ms] ease-out ${
                isActive ? "scale-105" : "scale-100"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.tagline}
                fill
                priority={index === 0}
                className="object-cover object-center"
                sizes="100vw"
                quality={90}
              />
            </div>
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#102B24] via-black/40 to-black/60" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        );
      })}

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center pt-24 sm:pt-28 pb-16">
        {/* Subtle Brand Eyebrow */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C5A880]/30 text-[#E0CDB2] mb-6 sm:mb-8 animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
          <span className="text-[10px] sm:text-xs font-medium tracking-[0.3em] uppercase">
            Luxury Indian Wedding Cinematography & Stills
          </span>
        </div>

        {/* Brand Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white tracking-tight leading-[1.08] sm:leading-[1.05] max-w-4xl">
          Stories that deserve <br className="hidden sm:inline" />
          to be <span className="font-serif italic font-normal text-[#E0CDB2]">remembered.</span>
        </h1>

        {/* Narrative Subtext */}
        <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-white/80 font-light max-w-2xl leading-relaxed tracking-wide">
          We don&apos;t just capture how your wedding looks. We preserve the quiet glances,
          regal rituals, and raw emotions that make it unforgettable.
        </p>

        {/* Dual Call-to-Actions */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto">
          <a
            href="#stories"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#102B24] text-[#FAF8F5] border border-[#C5A880]/50 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#1A3E34] hover:border-[#C5A880] shadow-lg shadow-black/40 hover:scale-[1.02]"
          >
            <span>Explore Our Stories</span>
            <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1 text-[#C5A880]" />
          </a>

          <a
            href="#contact"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#102B24] backdrop-blur-md border border-white/30 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase transition-all duration-300 hover:scale-[1.02]"
          >
            <span>Book Your Date</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      {/* Hero Bottom Bar: Slide Indicators & Scroll Prompt */}
      <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 z-20 px-6 sm:px-12 flex items-center justify-between text-white/70 max-w-7xl mx-auto">
        {/* Slide Location Indicator */}
        <div className="hidden sm:flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-white/60">
          <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-pulse" />
          <span>{heroSlides[currentSlide].location}</span>
        </div>

        {/* Carousel Dots */}
        <div className="flex items-center gap-2.5 mx-auto sm:mx-0">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                idx === currentSlide
                  ? "w-8 bg-[#C5A880]"
                  : "w-2 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <a
          href="#brand-intro"
          className="hidden sm:flex items-center gap-2 text-xs tracking-[0.2em] uppercase hover:text-white transition-colors"
        >
          <span>Scroll to explore</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#C5A880]" />
        </a>
      </div>
    </section>
  );
}
