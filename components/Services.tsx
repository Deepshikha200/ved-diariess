"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import { servicesData } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#F5F2EB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-24">
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-[#102B24]/70 mb-3">
            Bespoke Offerings
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-[#102B24] tracking-tight">
            Curated Services for the Connoisseur
          </h2>
          <div className="w-12 h-[1px] bg-[#C5A880] mt-6" />
          <p className="mt-4 text-neutral-600 max-w-xl text-sm sm:text-base font-light">
            Every celebration has its own cadence. We tailor our photography and cinema
            to align seamlessly with your vision and ancestral rituals.
          </p>
        </div>

        {/* Alternating Editorial Rows */}
        <div className="space-y-24 sm:space-y-32">
          {servicesData.map((service, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={service.id}
                className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 xl:gap-20 ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual Image Column */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className="relative aspect-[4/5] sm:aspect-[3/3.5] w-full rounded-2xl overflow-hidden shadow-2xl shadow-[#102B24]/10 bg-[#102B24]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {/* Subtle Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#102B24]/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                    {/* Badge */}
                    <div className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-[#102B24]/80 backdrop-blur-md border border-[#C5A880]/30 text-white text-[11px] tracking-[0.2em] uppercase font-light">
                      Service {service.number}
                    </div>
                  </div>

                  {/* Decorative Subtle Frame */}
                  <div
                    className={`hidden sm:block absolute -bottom-4 ${
                      isReversed ? "-left-4" : "-right-4"
                    } -z-10 w-full h-full border border-[#C5A880]/30 rounded-2xl pointer-events-none`}
                  />
                </div>

                {/* Text Content Column */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl font-light text-[#C5A880] tracking-widest">
                      {service.number}
                    </span>
                    <span className="w-8 h-[1px] bg-[#C5A880]/60" />
                    <span className="text-xs font-medium tracking-[0.25em] uppercase text-[#102B24]/70">
                      Ved Diaries Exclusive
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-light text-[#102B24] tracking-tight">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm sm:text-base font-serif italic text-[#C5A880] tracking-wide">
                    {service.tagline}
                  </p>

                  <p className="mt-5 text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
                    {service.description}
                  </p>

                  {/* Key Deliverables */}
                  <div className="mt-6 pt-6 border-t border-[#102B24]/10">
                    <span className="text-xs font-medium tracking-[0.18em] uppercase text-[#102B24] block mb-3">
                      Included In This Experience:
                    </span>
                    <ul className="space-y-2.5">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 font-light">
                          <Check className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Service Inquiry Button */}
                  <div className="mt-8 flex items-center gap-4">
                    <a
                      href="#contact"
                      className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#102B24] text-[#FAF8F5] text-xs font-medium tracking-[0.18em] uppercase hover:bg-[#1A3E34] transition-all duration-300 shadow-md shadow-[#102B24]/15"
                    >
                      <span>Inquire About {service.title}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#C5A880]" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
