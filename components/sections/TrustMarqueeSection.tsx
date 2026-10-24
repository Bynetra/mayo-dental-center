"use client";

import React from "react";
import { Marquee } from "@/components/ui/Marquee";
import { useLocale } from "@/lib/locale";

export function TrustMarqueeSection() {
  const { locale } = useLocale();

  return (
    <section className="bg-slate-50/70 border-y border-slate-200/80 py-5 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-wider rtl:normal-case rtl:tracking-normal text-slate-500 mb-3">
          {locale === "ar"
            ? "شركاء التأمين المعتمدون ووسائل الدفع والتقسيط الميسرة"
            : "Approved Insurance Partners & Flexible Payment Options"}
        </p>
        <Marquee />
      </div>
    </section>
  );
}

