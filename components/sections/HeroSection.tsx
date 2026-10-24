"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CalendarCheck,
  MessageCircle,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { useLocale } from "@/lib/locale";
import { businessData } from "@/content/business";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { isClinicOpenNow } from "@/lib/utils";

export function HeroSection() {
  const { locale, isRtl } = useLocale();
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    setIsOpenNow(isClinicOpenNow());
  }, []);

  const headlineEn = ["Change", "your", "smile", "today!"];
  const headlineAr = ["غيّر", "ابتسامتك", "اليوم!"];
  const words = locale === "ar" ? headlineAr : headlineEn;

  return (
    <section id="hero" className="relative overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20 bg-gradient-to-b from-white via-primary-50/30 to-white">
      {/* 1. Animated Aurora / Gradient Mesh Background (Disabled on mobile for high performance) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
        {/* Top Central Ambient Pulse - Desktop only */}
        <div className="absolute -top-32 start-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-primary-200/40 via-teal-100/30 to-sky-200/20 rounded-full blur-3xl opacity-70 hidden sm:block animate-pulse-slow" />
        {/* Right Corner Accent - Desktop only */}
        <div className="absolute top-1/4 end-0 w-[450px] h-[450px] bg-gradient-to-bl from-teal-200/30 via-emerald-100/20 to-transparent rounded-full blur-3xl hidden sm:block" />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#0f766e_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-[0.035]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text & CTA Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-start">
            {/* Top Clinic Status Pill */}
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <Badge variant="primary" dot>
                {locale === "ar" ? "مركز مايو لطب الأسنان — الجبيل" : "Mayo Dental Center — Jubail"}
              </Badge>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-900 border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
                <span>
                  {isOpenNow
                    ? locale === "ar"
                      ? "مفتوح اليوم حتى 9:00 م"
                      : "Open Today until 9:00 PM"
                    : locale === "ar"
                    ? "السبت-الخميس: 9 ص - 9 م"
                    : "Sat–Thu: 9am – 9pm"}
                </span>
              </span>
            </div>

            {/* Headline with animated subtle dental sparkle accent */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-navy-950 tracking-tight font-display mb-6 leading-[1.12]">
              {words.map((word, index) => {
                const isHighlight = word.includes("smile") || word.includes("ابتسامتك");
                return (
                  <span
                    key={index}
                    className={
                      isHighlight
                        ? "inline-block text-primary-700 relative me-3 font-black"
                        : "inline-block me-3"
                    }
                  >
                    {word}
                    {isHighlight && (
                      <span className="absolute -top-3 sm:-top-4 -end-5 sm:-end-6 hidden sm:inline-flex" aria-hidden="true">
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 text-accent-500 animate-spin-slow"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                        </svg>
                      </span>
                    )}
                  </span>
                );
              })}
            </h1>

            {/* Subtitle Copy */}
            <p className="text-base sm:text-lg lg:text-xl text-navy-700 leading-relaxed max-w-2xl mb-8 font-normal">
              {locale === "ar"
                ? "اختبر رعاية أسنان فائقة الجودة في مركز مايو لطب الأسنان. موقعنا في الجبيل، فريقنا الطبي المتخصص هنا لمساعدتك في الحصول على ابتسامة صحية وجميلة والحفاظ عليها. نرحب بالمرضى الجدد!"
                : "Experience top-notch dental care at Mayo Dental Center. Conveniently located in Al-Jubail, our dentistry team is here to help you achieve and maintain a healthy, beautiful smile. New patients welcome!"}
            </p>

            {/* Main Action CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-10 w-full sm:w-auto">
              <Link href="/book" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto" icon={<CalendarCheck className="w-5 h-5" />}>
                  {locale === "ar" ? "احجز موعدك الآن" : "Book your appointment"}
                </Button>
              </Link>

              <Link
                href={`https://wa.me/${businessData.contact.whatsapp.replace("+", "")}?text=${encodeURIComponent(
                  locale === "ar"
                    ? "مرحباً، أود حجز موعد في مركز مايو لطب الأسنان بالجبيل"
                    : "Hello, I would like to book an appointment at Mayo Dental Center Jubail"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="whatsapp"
                  size="lg"
                  className="w-full sm:w-auto"
                  icon={<MessageCircle className="w-5 h-5" />}
                >
                  {locale === "ar" ? "محادثة فورية واتساب" : "Chat on WhatsApp"}
                </Button>
              </Link>
            </div>

            {/* Trust Badges Strip */}
            <div className="pt-6 border-t border-slate-200/90 w-full flex flex-wrap items-center gap-y-3 gap-x-6 text-xs sm:text-sm text-navy-800 font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-700 shrink-0" />
                <span>{locale === "ar" ? "نرحب بالمرضى الجدد" : "New patients welcome"}</span>
              </div>

              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary-700 shrink-0" />
                <span>{locale === "ar" ? "تأمين التعاونية وميدغلف معتمد" : "Tawuniya & Medgulf Accepted"}</span>
              </div>

              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{locale === "ar" ? "تقسيط تابي على 4 دفعات" : "Tabby 4x Installments"}</span>
              </div>
            </div>
          </div>

          {/* Right Visual Image & Floating Glass Cards Column with Layered Parallax Feel */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Background subtle glowing halo */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary-400/20 to-teal-200/30 rounded-3xl blur-2xl -z-10" />

            <div className="relative w-full max-w-lg aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
              <Image
                src="/images/original/hero-dental-tools.webp"
                alt="Mayo Dental Center clinical precision equipment"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />

              {/* Floating Top Glass Card: Clinic Operating Status */}
              <div className="absolute top-5 start-5 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-lift border border-white/80 max-w-[220px]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-navy-900 block leading-tight">
                      {isOpenNow
                        ? locale === "ar"
                          ? "مفتوح اليوم حتى 9:00 م"
                          : "Open today until 9pm"
                        : locale === "ar"
                        ? "السبت-الخميس: 9 ص - 9 م"
                        : "Sat-Thu 9am-9pm"}
                    </span>
                    <span className="text-[10px] text-navy-600 font-medium">
                      {locale === "ar" ? "الجبيل البلد — شارع الملك فيصل" : "Jubail Center — King Faisal Rd"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Bottom Glass Card: Insurance & Tabby Accepted */}
              <div className="absolute bottom-5 end-5 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-lift border border-white/80 max-w-[240px]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-navy-900 block leading-tight">
                      {locale === "ar" ? "التعاونية وميدغلف وتابي" : "Insurance & Tabby"}
                    </span>
                    <span className="text-[10px] text-slate-600 font-medium">
                      {locale === "ar" ? "تغطية مباشرة وتقسيط 4 دفعات" : "Direct billing & 4x installments"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
