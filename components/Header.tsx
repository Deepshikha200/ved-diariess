"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Phone, Calendar } from "lucide-react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Stories", href: "#stories" },
    { label: "Films", href: "#films" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-[#FAF8F5]/90 backdrop-blur-md py-3.5 shadow-sm border-b border-[#102B24]/10"
            : "bg-gradient-to-b from-black/60 via-black/30 to-transparent py-5 lg:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          <Link
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Ved Diaries - Return to top"
          >
            <div className="relative w-9 h-9 sm:w-17 sm:h-17  overflow-hidden border border-[#C5A880]/40 p-0.5 bg-[#102B24] transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo.png"  
                alt="Ved Diaries Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`text-lg sm:text-xl font-semibold tracking-[0.25em] uppercase transition-colors duration-300 ${
                  isScrolled ? "text-[#102B24]" : "text-white"
                }`}
              >
                Ved Diaries
              </span>
              <span
                className={`text-[9px] sm:text-[10px] tracking-[0.35em] uppercase font-light -mt-1 transition-colors duration-300 ${
                  isScrolled ? "text-[#102B24]/70" : "text-[#E0CDB2]"
                }`}
              >
                Cinematography & Stills
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium tracking-[0.15em] uppercase transition-all duration-300 relative py-1 hover:text-[#C5A880] ${
                  isScrolled
                    ? "text-[#102B24]/85 hover:text-[#102B24]"
                    : "text-white/90 hover:text-white"
                } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C5A880] after:transition-all after:duration-300 hover:after:w-full`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action / CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              className={`group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium tracking-[0.18em] uppercase transition-all duration-300 shadow-sm ${
                isScrolled
                  ? "bg-[#102B24] text-[#FAF8F5] hover:bg-[#1A3E34] hover:shadow-md hover:shadow-[#102B24]/20"
                  : "bg-white/10 text-white backdrop-blur-sm border border-white/30 hover:bg-white hover:text-[#102B24]"
              }`}
            >
              <span>Book Your Date</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="#contact"
              className={`text-xs px-3 py-1.5 rounded-full font-medium tracking-wider uppercase sm:inline-flex hidden ${
                isScrolled
                  ? "bg-[#102B24] text-white"
                  : "bg-white/20 text-white backdrop-blur-sm"
              }`}
            >
              Book Date
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile menu"
              className={`p-2 rounded-lg transition-colors duration-200 ${
                isScrolled
                  ? "text-[#102B24] hover:bg-[#102B24]/5"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Animated Mobile Navigation Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
}
