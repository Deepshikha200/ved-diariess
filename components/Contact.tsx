"use client";

import React, { useState } from "react";
import {
  MapPin,
 Phone, Mail, Send, CheckCircle, Sparkles, Loader2,  AlertCircle,
} from "lucide-react";
import toast from "react-hot-toast";
import { YouTubeIcon, InstagramIcon, FacebookIcon } from "./SocialIcons";
import { YOUTUBE_CHANNEL_URL, INSTAGRAM_URL, FACEBOOK_URL } from "@/data/films";
import { CONTACT_EMAIL, CONTACT_PHONE, STUDIO_LOCATION } from "@/data/contact";

interface FormDataState {
  name: string;
  email: string;
  phone: string;
  weddingDate: string;
  eventLocation: string;
  serviceType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  weddingDate?: string;
  eventLocation?: string;
}

interface FormTouched {
  name?: boolean;
  email?: boolean;
  phone?: boolean;
  weddingDate?: boolean;
  eventLocation?: boolean;
}

const initialFormData: FormDataState = {
  name: "",
  email: "",
  phone: "",
  weddingDate: "",
  eventLocation: "",
  serviceType: "Full Photography & Films",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState<FormDataState>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<FormTouched>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case "name": {
        const trimmed = value.trim();
        if (!trimmed) return "Please enter your name(s).";
        if (trimmed.length < 2) return "Name must be at least 2 characters.";
        return undefined;
      }
      case "email": {
        const trimmed = value.trim();
        if (!trimmed) return "Please enter your email address.";
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(trimmed)) return "Please enter a valid email address.";
        return undefined;
      }
      case "phone": {
        const trimmed = value.trim();
        if (!trimmed) return "Please enter your phone / WhatsApp number.";
        const cleaned = trimmed.replace(/[\s\-\(\)\+]/g, "");
        if (cleaned.length < 8 || !/^\d+$/.test(cleaned)) {
          return "Please enter a valid phone number (at least 8 digits).";
        }
        return undefined;
      }
      case "weddingDate": {
        if (!value) return "Please select your wedding or event date.";
        return undefined;
      }
      case "eventLocation": {
        const trimmed = value.trim();
        if (!trimmed) return "Please enter your event location or venue.";
        return undefined;
      }
      default:
        return undefined;
    }
  };

  const validateAll = (data: FormDataState): FormErrors => {
    const errs: FormErrors = {};
    const nameErr = validateField("name", data.name);
    if (nameErr) errs.name = nameErr;

    const emailErr = validateField("email", data.email);
    if (emailErr) errs.email = emailErr;

    const phoneErr = validateField("phone", data.phone);
    if (phoneErr) errs.phone = phoneErr;

    const dateErr = validateField("weddingDate", data.weddingDate);
    if (dateErr) errs.weddingDate = dateErr;

    const locErr = validateField("eventLocation", data.eventLocation);
    if (locErr) errs.eventLocation = locErr;

    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // If the field has already been touched, validate immediately
    if (touched[name as keyof FormTouched]) {
      const fieldError = validateField(name, value);
      setErrors((prev) => ({
        ...prev,
        [name]: fieldError,
      }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    const fieldError = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: fieldError,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    // Mark all required fields as touched
    setTouched({
      name: true,
      email: true,
      phone: true,
      weddingDate: true,
      eventLocation: true,
    });

    const validationErrors = validateAll(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fill in all required fields highlighted below.");
      return;
    }

    setIsSubmitting(true);
    const toastId = toast.loading("Sending your wedding inquiry to Ved Diaries...");

    try {
      const submissionData = new FormData();
      submissionData.append("Name", formData.name.trim());
      submissionData.append("Email", formData.email.trim());
      submissionData.append("Phone / WhatsApp", formData.phone.trim());
      submissionData.append("Wedding / Event Date", formData.weddingDate);
      submissionData.append("Location / Venue", formData.eventLocation.trim());
      submissionData.append("Service Needed", formData.serviceType);
      submissionData.append(
        "Message & Vision",
        formData.message.trim() || "No additional message provided"
      );

      // FormSubmit special controls
      submissionData.append("_subject", `New Wedding Inquiry - ${formData.name.trim()}`);
      submissionData.append("_template", "table");
      submissionData.append("_captcha", "false");
      submissionData.append("_replyto", formData.email.trim());

      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: submissionData,
      });

      const result = await response.json().catch(() => null);

      if (response.ok && (result?.success === "true" || result?.success === true)) {
        toast.success("Inquiry sent successfully! We will get back to you within 24 hours.", {
          id: toastId,
          duration: 5000,
        });
        setIsSubmitted(true);
        setFormData(initialFormData);
        setErrors({});
        setTouched({});
      } else {
        const errorMsg =
          result?.message ||
          "Unable to send your inquiry. Please try again or reach out directly.";
        toast.error(errorMsg, {
          id: toastId,
          duration: 6000,
        });
      }
    } catch {
      toast.error("Network error. Please check your connection and try again.", {
        id: toastId,
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-32 bg-[#FAF8F5] relative overflow-hidden">
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
                      {STUDIO_LOCATION}
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
                      href={`tel:${CONTACT_PHONE.replace(/[\s\-\(\)]/g, "")}`}
                      className="text-xs sm:text-sm text-neutral-600 hover:text-[#102B24] font-light mt-0.5 block transition-colors"
                    >
                      {CONTACT_PHONE}
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
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-xs sm:text-sm text-neutral-600 hover:text-[#102B24] font-light mt-0.5 block transition-colors"
                    >
                      {CONTACT_EMAIL}
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
              <div className="flex items-center gap-4 flex-wrap">
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
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand/10 shadow-xl shadow-brand/5">
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
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData(initialFormData);
                      setErrors({});
                      setTouched({});
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-[#102B24] text-white text-xs tracking-widest uppercase hover:bg-[#1A3E34] transition-colors cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form noValidate onSubmit={handleSubmit} className="space-y-6">
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
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-medium tracking-wider uppercase text-[#102B24] mb-2"
                      >
                        Your Name(s) *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={isSubmitting}
                        placeholder="e.g. Simran & Aman"
                        className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all bg-[#FAF8F5]/50 disabled:opacity-60 disabled:cursor-not-allowed ${
                          errors.name && touched.name
                            ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                            : "border-neutral-300 focus:border-[#102B24] focus:ring-1 focus:ring-[#102B24]"
                        }`}
                      />
                      {errors.name && touched.name && (
                        <p className="mt-1.5 text-xs text-red-600 font-light flex items-center gap-1.5">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-medium tracking-wider uppercase text-[#102B24] mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={isSubmitting}
                        placeholder="you@example.com"
                        className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all bg-[#FAF8F5]/50 disabled:opacity-60 disabled:cursor-not-allowed ${
                          errors.email && touched.email
                            ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                            : "border-neutral-300 focus:border-[#102B24] focus:ring-1 focus:ring-[#102B24]"
                        }`}
                      />
                      {errors.email && touched.email && (
                        <p className="mt-1.5 text-xs text-red-600 font-light flex items-center gap-1.5">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs font-medium tracking-wider uppercase text-[#102B24] mb-2"
                      >
                        Phone / WhatsApp *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={isSubmitting}
                        placeholder="+91 9877260236"
                        className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all bg-[#FAF8F5]/50 disabled:opacity-60 disabled:cursor-not-allowed ${
                          errors.phone && touched.phone
                            ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                            : "border-neutral-300 focus:border-[#102B24] focus:ring-1 focus:ring-[#102B24]"
                        }`}
                      />
                      {errors.phone && touched.phone && (
                        <p className="mt-1.5 text-xs text-red-600 font-light flex items-center gap-1.5">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    {/* Wedding Date */}
                    <div>
                      <label
                        htmlFor="contact-wedding-date"
                        className="block text-xs font-medium tracking-wider uppercase text-[#102B24] mb-2"
                      >
                        Wedding / Event Date *
                      </label>
                      <input
                        id="contact-wedding-date"
                        type="date"
                        name="weddingDate"
                        value={formData.weddingDate}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all bg-[#FAF8F5]/50 text-neutral-800 disabled:opacity-60 disabled:cursor-not-allowed ${
                          errors.weddingDate && touched.weddingDate
                            ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                            : "border-neutral-300 focus:border-[#102B24] focus:ring-1 focus:ring-[#102B24]"
                        }`}
                      />
                      {errors.weddingDate && touched.weddingDate && (
                        <p className="mt-1.5 text-xs text-red-600 font-light flex items-center gap-1.5">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.weddingDate}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Event Location */}
                    <div>
                      <label
                        htmlFor="contact-event-location"
                        className="block text-xs font-medium tracking-wider uppercase text-[#102B24] mb-2"
                      >
                        Event Location / Venue *
                      </label>
                      <input
                        id="contact-event-location"
                        type="text"
                        name="eventLocation"
                        value={formData.eventLocation}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={isSubmitting}
                        placeholder="e.g. Udaipur / Chandigarh / Goa"
                        className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all bg-[#FAF8F5]/50 disabled:opacity-60 disabled:cursor-not-allowed ${
                          errors.eventLocation && touched.eventLocation
                            ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                            : "border-neutral-300 focus:border-[#102B24] focus:ring-1 focus:ring-[#102B24]"
                        }`}
                      />
                      {errors.eventLocation && touched.eventLocation && (
                        <p className="mt-1.5 text-xs text-red-600 font-light flex items-center gap-1.5">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.eventLocation}</span>
                        </p>
                      )}
                    </div>

                    {/* Services Needed */}
                    <div>
                      <label
                        htmlFor="contact-service-type"
                        className="block text-xs font-medium tracking-wider uppercase text-[#102B24] mb-2"
                      >
                        Services Needed
                      </label>
                      <select
                        id="contact-service-type"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#102B24] focus:ring-1 focus:ring-[#102B24] text-sm outline-none transition-all bg-[#FAF8F5]/50 text-neutral-800 disabled:opacity-60 disabled:cursor-not-allowed"
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
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-medium tracking-wider uppercase text-[#102B24] mb-2"
                    >
                      Tell Us About Your Celebration & Vision
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      placeholder="Share details about your wedding functions, decor aesthetics, guest count, or any special moments you envision..."
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#102B24] focus:ring-1 focus:ring-[#102B24] text-sm outline-none transition-all bg-[#FAF8F5]/50 resize-none disabled:opacity-60 disabled:cursor-not-allowed"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-[#102B24] text-[#FAF8F5] text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#1A3E34] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#102B24]/20 hover:scale-[1.01] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin text-[#C5A880]" />
                        <span>Sending Your Enquiry...</span>
                      </>
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
