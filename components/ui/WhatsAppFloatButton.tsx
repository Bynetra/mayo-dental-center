"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { businessData } from "@/content/business";
import { useLocale } from "@/lib/locale";

export function WhatsAppFloatButton() {
  const { locale, isRtl } = useLocale();

  const message =
    locale === "ar"
      ? "مرحباً، أود الاستفسار عن حجز موعد في مركز مايو لطب الأسنان"
      : "Hello, I would like to inquire about booking an appointment at Mayo Dental Center";

  return (
    <div
      className={`hidden sm:flex fixed sm:bottom-6 ${
        isRtl ? "sm:start-6" : "sm:end-6"
      } z-40`}
    >
      <Link
        href={`https://wa.me/${businessData.contact.whatsapp.replace("+", "")}?text=${encodeURIComponent(
          message
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#047857] hover:bg-[#065f46] text-white shadow-xl hover:shadow-2xl hover:shadow-emerald-900/30 transition-all duration-300"
        aria-label={locale === "ar" ? "محادثة فورية واتساب" : "Chat on WhatsApp"}
      >
        <span className="relative flex items-center justify-center">
          <MessageCircle className="w-6 h-6 fill-white" />
          <span className="absolute -top-1 -end-1 w-2.5 h-2.5 rounded-full bg-white animate-ping" />
        </span>
        <span className="text-xs sm:text-sm font-bold tracking-tight hidden md:inline">
          {locale === "ar" ? "محادثة فورية واتساب" : "Chat on WhatsApp"}
        </span>
      </Link>
    </div>
  );
}

