"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Heart, Film, Camera, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#F5F2EB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column: Dual Image Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-[#102B24]/15 bg-[#102B24]">
              <Image
                src="/images/_ATP8950.jpg"
                alt="Ved Diaries - Fine Art Wedding Moments"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102B24]/60 via-transparent to-transparent" />
            </div>

            {/* Overlapping Floating Emblem Card */}
            <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-8 w-44 sm:w-52 p-4 rounded-2xl bg-[#102B24] text-white shadow-2xl border border-[#C5A880]/30 hidden sm:flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-[#0A1B17] shrink-0 border border-[#C5A880]/40 p-1">
                <Image
                  src="/images/logo.png"
                  alt="Ved Diaries Emblem"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold tracking-wider uppercase text-white">
                  Ved Diaries
                </span>
                <span className="text-[10px] text-[#C5A880] tracking-widest uppercase">
                  Studio & Cinema
                </span>
              </div>
            </div>

            {/* Decorative Gold Accent Border */}
            <div className="hidden lg:block absolute -top-5 -left-5 w-40 h-40 border-t-2 border-l-2 border-[#C5A880]/40 rounded-tl-3xl pointer-events-none" />
          </div>

          {/* Narrative Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102B24]/5 border border-[#102B24]/10 text-[#102B24] text-xs tracking-[0.25em] uppercase mb-4 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Our Story & Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-light text-[#102B24] tracking-tight leading-tight">
              The People Behind <br />
              <span className="font-serif italic font-normal text-[#1A3E34]">
                Ved Diaries
              </span>
            </h2>

            <div className="w-12 h-[1px] bg-[#C5A880] mt-4 mb-6" />

            {/* Emotional Brand Copy */}
            <div className="space-y-4 text-neutral-600 font-light text-sm sm:text-base leading-relaxed">
              <p>
                We founded <strong className="font-medium text-[#102B24]">Ved Diaries</strong> on
                a timeless conviction: weddings are not staged film sets to be controlled. They are
                sacred, emotional tapestries woven from generations of love, ancestral blessings,
                and uninhibited joy.
              </p>
              <p>
                Our team blends the keen observational instincts of documentary photographers with
                the grand visual scale of cinematic filmmakers. When we step onto your wedding
                grounds, our goal is not to dictate poses or command the room. We step into the
                background, observing with patient eyes and tender hearts until the genuine truth of
                the moment surfaces.
              </p>
              <p>
                From the intricate gold weave of your grandmother&apos;s heirloom saree to the silent,
                trembling embrace shared between father and daughter during the Vidaai, we treat
                every fraction of a second as a treasure designed to outlive us all.
              </p>
            </div>

            {/* Core Values Pillars */}
            <div className="mt-8 grid grid-cols-2 gap-4 pt-6 border-t border-[#102B24]/10">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#102B24]/5 flex items-center justify-center text-[#102B24] shrink-0 mt-0.5">
                  <Heart className="w-4 h-4 text-[#C5A880]" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold tracking-wider uppercase text-[#102B24]">
                    Authentic Emotions
                  </h4>
                  <p className="text-xs text-neutral-500 font-light mt-0.5">
                    Unstaged tears, raw joy & spontaneous warmth.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#102B24]/5 flex items-center justify-center text-[#102B24] shrink-0 mt-0.5">
                  <Film className="w-4 h-4 text-[#C5A880]" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold tracking-wider uppercase text-[#102B24]">
                    Cinematic Vision
                  </h4>
                  <p className="text-xs text-neutral-500 font-light mt-0.5">
                    Feature film grade color, pacing & licensed audio.
                  </p>
                </div>
              </div>
            </div>

            {/* Signature Tagline */}
            <div className="mt-8 flex items-center justify-between pt-6 border-t border-[#102B24]/10">
              <div>
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#102B24]">
                  Ved Diaries Creative Studio
                </span>
                <span className="block text-[11px] text-neutral-400 font-light">
                  Chandigarh, Punjab & Worldwide
                </span>
              </div>

              <a
                href="#contact"
                className="text-xs tracking-widest uppercase font-medium text-[#102B24] hover:text-[#C5A880] transition-colors"
              >
                Let&apos;s Connect →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
