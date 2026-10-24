"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar, MessageCircle, Phone, Clock } from "lucide-react";
import { useLocale } from "@/lib/locale";
import { businessData } from "@/content/business";
import { isClinicOpenNow, cn } from "@/lib/utils";

export function StickyBookingBar() {
  const { locale } = useLocale();
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setIsOpen(isClinicOpenNow());

    // Observe hero element so the bar strictly reveals only AFTER scrolling past hero
    const heroEl = document.getElementById("hero") || document.querySelector("section");
    if (heroEl && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Visible only when hero is scrolled past
          setIsVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0);
        },
        { threshold: 0.05, rootMargin: "-80px 0px 0px 0px" }
      );
      observer.observe(heroEl);
      return () => observer.disconnect();
    } else {
      const handleScroll = () => {
        setIsVisible(window.scrollY > 450);
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div
      className={cn(
        "hidden sm:block fixed bottom-4 inset-x-4 z-40 max-w-xl mx-auto transition-all duration-300 ease-out transform",
        isVisible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-12 opacity-0 pointer-events-none"
      )}
    >
      <div className="bg-navy-950/95 text-white rounded-full p-1.5 sm:p-2 backdrop-blur-xl border border-white/15 shadow-2xl flex items-center justify-between gap-3">
        {/* Status Indicator */}
        <div className="flex items-center gap-2 ps-3 pe-1 py-0.5">
          <span
            className={`w-2 h-2 rounded-full shrink-0 ${
              isOpen ? "bg-emerald-400 animate-pulse" : "bg-amber-400"
            }`}
          />
          <div className="flex flex-col">
            <span className="text-xs font-bold leading-tight tracking-tight rtl:tracking-normal">
              {isOpen
                ? locale === "ar"
                  ? "العيادة مفتوحة الآن"
                  : "Clinic Open Now"
                : locale === "ar"
                ? "العيادة مغلقة حالياً"
                : "Currently Closed"}
            </span>
            <span className="text-[10px] text-slate-300 hidden sm:inline rtl:tracking-normal">
              {locale === "ar" ? "السبت-الخميس: 9 ص - 9 م" : "Sat-Thu 9am - 9pm"}
            </span>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <Link
            href={`https://wa.me/${businessData.contact.whatsapp.replace("+", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center transition-colors shadow-sm"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </Link>

          <Link
            href={`tel:${businessData.contact.phones[0]}`}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shadow-sm hidden sm:flex"
            aria-label="Call clinic"
          >
            <Phone className="w-3.5 h-3.5" />
          </Link>

          <Link
            href="/book"
            className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary-600 hover:bg-primary-700 text-white text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-colors shadow-md rtl:tracking-normal"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>{locale === "ar" ? "حجز موعد" : "Book Slot"}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

