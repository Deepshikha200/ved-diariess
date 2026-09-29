"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";
import { YouTubeIcon, InstagramIcon, FacebookIcon } from "./SocialIcons";
import { YOUTUBE_CHANNEL_URL, INSTAGRAM_URL, FACEBOOK_URL } from "@/data/films";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { label: string; href: string }[];
}

export default function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-500 lg:hidden ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Drawer */}
      <div
        className={`absolute top-0 right-0 w-full max-w-sm h-full bg-[#102B24] text-[#FAF8F5] shadow-2xl flex flex-col justify-between p-6 sm:p-8 transition-transform duration-500 ease-out border-l border-[#C5A880]/20 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-[#234E42]">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#C5A880]/40 p-0.5 bg-[#0A1B17]">
                <Image
                  src="/images/logo.png"
                  alt="Ved Diaries Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-semibold tracking-[0.25em] uppercase text-white">
                  Ved Diaries
                </span>
                <span className="text-[9px] tracking-[0.3em] uppercase text-[#C5A880]">
                  Cinematography
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-8 flex flex-col space-y-4">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={onClose}
                className="group flex items-center justify-between py-2 text-xl font-light tracking-[0.15em] uppercase text-white/90 hover:text-[#C5A880] transition-colors"
                style={{ transitionDelay: `${idx * 40}ms` }}
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#C5A880] opacity-0 group-hover:opacity-100 transition-opacity">
                  0{idx + 1}
                </span>
              </a>
            ))}

            <div className="pt-4">
              <a
                href="#contact"
                onClick={onClose}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#C5A880] text-[#102B24] font-medium text-xs tracking-[0.2em] uppercase hover:bg-white transition-all shadow-lg shadow-black/30"
              >
                <span>Book Your Date</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>

        {/* Drawer Footer with Contact & Social */}
        <div className="pt-6 border-t border-[#234E42] flex flex-col gap-4">
          <div className="flex flex-col gap-1.5 text-xs text-white/70">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Chandigarh & Worldwide Destinations</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
              <a href="tel:+919876543210" className="hover:text-white">
                +91 98765 43210
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#C5A880]" />
              <a href="mailto:info@veddiaries.com" className="hover:text-white">
                contact@veddiaries.com
              </a>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-[11px] tracking-widest uppercase text-white/50">Follow Our Craft</span>
            <div className="flex items-center gap-4 text-white/80">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ved Diaries Instagram"
                className="hover:text-[#C5A880] transition-colors"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={YOUTUBE_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ved Diaries YouTube"
                className="hover:text-[#C5A880] transition-colors"
              >
                <YouTubeIcon className="w-5 h-5 text-red-400" />
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ved Diaries Facebook"
                className="hover:text-[#C5A880] transition-colors"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
