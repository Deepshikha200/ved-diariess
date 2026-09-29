"use client";

import React from "react";
import Image from "next/image";
import { ArrowUp, MapPin, Mail, Phone } from "lucide-react";
import { YouTubeIcon, InstagramIcon, FacebookIcon } from "./SocialIcons";
import { YOUTUBE_CHANNEL_URL, INSTAGRAM_URL, FACEBOOK_URL } from "@/data/films";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Stories", href: "#stories" },
    { label: "Films", href: "#films" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    "Wedding Photography",
    "Cinematic Wedding Films",
    "Pre-Wedding Stories",
    "Destination Weddings",
    "Heirloom Fine-Art Albums",
  ];

  return (
    <footer className="bg-[#102B24] text-[#FAF8F5] relative overflow-hidden border-t border-[#234E42]">
      {/* Subtle Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A880]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#234E42]">
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#C5A880]/40 p-0.5 bg-[#0A1B17]">
                  <Image
                    src="/images/logo.png"
                    alt="Ved Diaries Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-light tracking-[0.25em] uppercase text-white">
                    Ved Diaries
                  </span>
                  <span className="text-[10px] tracking-[0.35em] uppercase text-[#C5A880] font-light">
                    Luxury Wedding Cinematography
                  </span>
                </div>
              </div>

              <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed max-w-sm">
                We believe weddings are living works of art. Our cinema and stills preserve
                the grandeur of rituals, the stillness of glances, and the authenticity of your
                cherished heritage.
              </p>

              <div className="mt-6 flex flex-col gap-2 text-xs text-white/60 font-light">
                <span className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                  Chandigarh, Punjab & Global Destinations
                </span>
                <span className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#C5A880]" />
                  contact@veddiaries.com
                </span>
                <span className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                  +91 98765 43210
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ved Diaries Instagram"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#C5A880] hover:text-[#102B24] border border-white/10 flex items-center justify-center text-white transition-all duration-300"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={YOUTUBE_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ved Diaries YouTube"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-red-600 hover:text-white border border-white/10 flex items-center justify-center text-white transition-all duration-300"
              >
                <YouTubeIcon className="w-4 h-4" />
              </a>

              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ved Diaries Facebook"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#C5A880] hover:text-[#102B24] border border-white/10 flex items-center justify-center text-white transition-all duration-300"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="lg:col-span-3">
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-[#C5A880] block mb-5">
              Explore
            </span>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-white/70 hover:text-[#C5A880] tracking-wider uppercase transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="text-xs sm:text-sm text-[#C5A880] hover:text-white tracking-wider uppercase transition-colors font-medium"
                >
                  Book Your Date →
                </a>
              </li>
            </ul>
          </div>

          {/* Services Portfolio (4 cols) */}
          <div className="lg:col-span-4">
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-[#C5A880] block mb-5">
              Studio Offerings
            </span>
            <ul className="space-y-3 text-xs sm:text-sm text-white/70 font-light">
              {services.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#C5A880]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-[11px] uppercase tracking-wider text-[#C5A880] block font-medium">
                Destination Bookings
              </span>
              <p className="text-[11px] text-white/60 font-light mt-1">
                Now taking wedding commissions for Udaipur, Jaipur, Goa, Mussoorie, and international celebrations.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-light">
          <p>© 2026 Ved Diaries. All Rights Reserved. Crafted for Timeless Stories.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white/70 hover:text-[#C5A880] tracking-widest uppercase transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 text-[#C5A880]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
