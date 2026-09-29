"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Calendar,
  Send,
  CheckCircle,
  Clock,
  Sparkles,
} from "lucide-react";
import { YouTubeIcon, InstagramIcon, FacebookIcon } from "./SocialIcons";
import { YOUTUBE_CHANNEL_URL, INSTAGRAM_URL, FACEBOOK_URL } from "@/data/films";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    weddingDate: "",
    eventLocation: "",
    serviceType: "Full Photography & Films",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Studio Information & Social Links */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102B24]/5 border border-[#102B24]/10 text-[#102B24] text-xs tracking-[0.25em] uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Begin Your Journey</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-light text-[#102B24] tracking-tight leading-tight">
                Let&apos;s Connect & <br />
                <span className="font-serif italic font-normal text-[#1A3E34]">
                  Craft Your Memories
                </span>
              </h2>

              <div className="w-12 h-[1px] bg-[#C5A880] mt-4 mb-6" />

              <p className="text-neutral-600 font-light text-sm sm:text-base leading-relaxed">
                Whether you are planning an intimate ceremony in the hills or a majestic multi-day
                palace celebration, we would love to hear your story. Reach out to check our
                availability.
              </p>

              {/* Contact Info Cards */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#102B24]/10 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-[#102B24]/5 flex items-center justify-center text-[#102B24] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-[#C5A880]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold tracking-wider uppercase text-[#102B24]">
                      Studio Location
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-600 font-light mt-0.5">
                      Chandigarh, India • Traveling Worldwide
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#102B24]/10 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-[#102B24]/5 flex items-center justify-center text-[#102B24] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-[#C5A880]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold tracking-wider uppercase text-[#102B24]">
                      Phone / WhatsApp
                    </h4>
                    <a
                      href="tel:+919876543210"
                      className="text-xs sm:text-sm text-neutral-600 hover:text-[#102B24] font-light mt-0.5 block"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#102B24]/10 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-[#102B24]/5 flex items-center justify-center text-[#102B24] shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 text-[#C5A880]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold tracking-wider uppercase text-[#102B24]">
                      Direct Email
                    </h4>
                    <a
                      href="mailto:contact@veddiaries.com"
                      className="text-xs sm:text-sm text-neutral-600 hover:text-[#102B24] font-light mt-0.5 block"
                    >
                      contact@veddiaries.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-10 pt-8 border-t border-[#102B24]/10">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#102B24] block mb-4">
                Follow Ved Diaries
              </span>
              <div className="flex items-center gap-4">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ved Diaries Instagram"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#102B24] text-white hover:bg-[#1A3E34] text-xs transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-[#C5A880]" />
                  <span>@ved.diaries</span>
                </a>

                <a
                  href={YOUTUBE_CHANNEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ved Diaries YouTube"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#102B24] text-white hover:bg-[#1A3E34] text-xs transition-colors"
                >
                  <YouTubeIcon className="w-4 h-4 text-red-500" />
                  <span>@veddiaries9</span>
                </a>

                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ved Diaries Facebook"
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-[#102B24]/20 text-[#102B24] hover:bg-[#102B24] hover:text-white text-xs transition-colors"
                >
                  <FacebookIcon className="w-3.5 h-3.5" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Date Reservation Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#102B24]/10 shadow-xl shadow-[#102B24]/5">
              {isSubmitted ? (
                <div className="text-center py-16 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#102B24]/10 text-[#102B24] flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8 text-[#C5A880]" />
                  </div>
                  <h3 className="text-2xl font-light text-[#102B24] tracking-tight">
                    Thank You for Reaching Out
                  </h3>
                  <p className="text-neutral-600 text-sm max-w-md mx-auto font-light leading-relaxed">
                    We have received your celebration details. Our creative director will review
                    your wedding dates and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        weddingDate: "",
                        eventLocation: "",
                        serviceType: "Full Photography & Films",
                        message: "",
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-[#102B24] text-white text-xs tracking-widest uppercase"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-light text-[#102B24] tracking-tight mb-1">
                      Check Date Availability
                    </h3>
                    <p className="text-xs text-neutral-500 font-light">
                      Please provide as many details as possible so we can provide a tailored proposal.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-medium tracking-wider uppercase text-[#102B24] mb-2">
                        Your Name(s) *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Simran & Aman"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#102B24] focus:ring-1 focus:ring-[#102B24] text-sm outline-none transition-all bg-[#FAF8F5]/50"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-medium tracking-wider uppercase text-[#102B24] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#102B24] focus:ring-1 focus:ring-[#102B24] text-sm outline-none transition-all bg-[#FAF8F5]/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-medium tracking-wider uppercase text-[#102B24] mb-2">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#102B24] focus:ring-1 focus:ring-[#102B24] text-sm outline-none transition-all bg-[#FAF8F5]/50"
                      />
                    </div>

                    {/* Wedding Date */}
                    <div>
                      <label className="block text-xs font-medium tracking-wider uppercase text-[#102B24] mb-2">
                        Wedding / Event Date *
                      </label>
                      <input
                        type="date"
                        name="weddingDate"
                        required
                        value={formData.weddingDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#102B24] focus:ring-1 focus:ring-[#102B24] text-sm outline-none transition-all bg-[#FAF8F5]/50 text-neutral-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Event Location */}
                    <div>
                      <label className="block text-xs font-medium tracking-wider uppercase text-[#102B24] mb-2">
                        Event Location / Venue *
                      </label>
                      <input
                        type="text"
                        name="eventLocation"
                        required
                        value={formData.eventLocation}
                        onChange={handleChange}
                        placeholder="e.g. Udaipur / Chandigarh / Goa"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#102B24] focus:ring-1 focus:ring-[#102B24] text-sm outline-none transition-all bg-[#FAF8F5]/50"
                      />
                    </div>

                    {/* Services Needed */}
                    <div>
                      <label className="block text-xs font-medium tracking-wider uppercase text-[#102B24] mb-2">
                        Services Needed
                      </label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#102B24] focus:ring-1 focus:ring-[#102B24] text-sm outline-none transition-all bg-[#FAF8F5]/50 text-neutral-800"
                      >
                        <option value="Full Photography & Films">Full Photography & Films</option>
                        <option value="Wedding Photography Only">Wedding Photography Only</option>
                        <option value="Cinematic Wedding Films Only">Cinematic Wedding Films Only</option>
                        <option value="Pre-Wedding + Wedding Package">Pre-Wedding + Wedding Package</option>
                        <option value="Destination Celebration">Destination Celebration (Multi-day)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium tracking-wider uppercase text-[#102B24] mb-2">
                      Tell Us About Your Celebration & Vision
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share details about your wedding functions, decor aesthetics, guest count, or any special moments you envision..."
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#102B24] focus:ring-1 focus:ring-[#102B24] text-sm outline-none transition-all bg-[#FAF8F5]/50 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-[#102B24] text-[#FAF8F5] text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#1A3E34] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#102B24]/20 hover:scale-[1.01] disabled:opacity-70 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending Your Enquiry...</span>
                    ) : (
                      <>
                        <span>Send Enquiry</span>
                        <Send className="w-3.5 h-3.5 text-[#C5A880]" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
