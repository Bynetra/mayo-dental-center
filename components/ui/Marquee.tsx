"use client";

import React from "react";
import Image from "next/image";
import { businessData } from "@/content/business";
import { useLocale } from "@/lib/locale";

export function Marquee() {
  const { locale } = useLocale();

  // Combine insurance partners and payment logos
  const partners = [
    ...businessData.insurance.map((ins) => ({
      id: ins.id,
      name: locale === "ar" ? ins.nameAr : ins.name,
      logo: ins.logo,
      tag: locale === "ar" ? "تأمين معتمد" : "Approved Insurance",
    })),
    ...businessData.paymentMethods.map((pay) => ({
      id: pay.id,
      name: locale === "ar" ? pay.nameAr : pay.name,
      logo: pay.logo,
      tag: pay.isInstallment
        ? locale === "ar"
          ? "تقسيط 4 دفعات"
          : "4x Installments"
        : locale === "ar"
        ? "دفع إلكتروني"
        : "Direct Payment",
    })),
  ];

  // Repeat 4 sets (2 identical halves) so translating by exactly 50% seamlessly loops without layout seams
  const list = [...partners, ...partners, ...partners, ...partners];

  return (
    <div className="relative w-full overflow-hidden py-3 sm:py-4 select-none">
      {/* Gradient edge masks with logical RTL support */}
      <div className="absolute start-0 inset-y-0 w-10 sm:w-20 bg-gradient-to-r rtl:bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute end-0 inset-y-0 w-10 sm:w-20 bg-gradient-to-l rtl:bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />

      {/* Marquee Track: Direction-aware animation (LTR translates 0 -> -50%, RTL translates 0 -> +50%) */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center gap-6 sm:gap-10 will-change-transform">
        {list.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="flex items-center gap-3 px-4 py-2 sm:px-5 sm:py-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-primary-300 transition-colors shrink-0"
          >
            <div className="relative w-14 sm:w-16 h-7 sm:h-8 flex items-center justify-center">
              <Image
                src={item.logo}
                alt={item.name}
                width={80}
                height={36}
                className="max-h-7 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all opacity-85 hover:opacity-100"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-navy-900 tracking-tight rtl:tracking-normal">
                {item.name}
              </span>
              <span className="text-[10px] text-primary-700 font-medium rtl:tracking-normal">
                {item.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

