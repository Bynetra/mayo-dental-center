"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  Globe,
  CalendarCheck,
  Clock,
  MapPin,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { useLocale } from "@/lib/locale";
import { mainNavItems } from "@/content/navigation";
import { businessData } from "@/content/business";
import { Button } from "@/components/ui/Button";
import { isClinicOpenNow, cn } from "@/lib/utils";

export function Navbar() {
  const { locale, toggleLocale, isRtl } = useLocale();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    setIsOpenNow(isClinicOpenNow());

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Notification Bar (Hours, Location & Phone) */}
      <div className="bg-navy-900 text-white text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-white/10 hidden md:block select-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-primary-400 shrink-0" />
              <span>
                {locale === "ar"
                  ? "السبت–الأربعاء: 9:00 ص–1:00 م و 4:30 م–8:30 م | الخميس: 9:00 ص–5:00 م"
                  : "Sat–Wed: 9am–1pm & 4:30pm–8:30pm | Thu: 9am–5pm"}
              </span>
            </span>

            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-primary-400 shrink-0" />
              <span>
                {locale === "ar"
                  ? "شارع بوحصا، منطقة الوعب، الدوحة"
                  : "Bu Hasa Street, Al Waab, Doha"}
              </span>
            </span>

            <span className="hidden xl:flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-accent-500 shrink-0" />
              <span>{locale === "ar" ? "مرخص من QCHP" : "QCHP Licensed"}</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                isOpenNow
                  ? "bg-emerald-500/20 text-emerald-300"
                  : "bg-amber-500/20 text-amber-300"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isOpenNow ? "bg-emerald-400 animate-pulse" : "bg-amber-400"
                }`}
              />
              <span>
                {isOpenNow
                  ? locale === "ar"
                    ? "العيادة مفتوحة الآن"
                    : "Open Now"
                  : locale === "ar"
                  ? "مغلق الآن"
                  : "Closed"}
              </span>
            </span>

            <Link
              href={`tel:${businessData.contact.phones[0]}`}
              className="text-slate-200 hover:text-white transition-colors flex items-center gap-1.5 font-semibold"
            >
              <Phone className="w-3 h-3 text-primary-400 shrink-0" />
              <span dir="ltr" className="[unicode-bidi:isolate] font-sans">
                {businessData.contact.phones[0]}
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-200/80 py-3"
            : "bg-white/80 backdrop-blur-md py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Clinic Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-primary-50/60 p-1 border border-primary-200/60 shadow-sm transition-transform group-hover:scale-105">
              <Image
                src="/images/original/lucida-logo.png"
                alt="Lucida Dental Center Logo"
                fill
                sizes="48px"
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold text-navy-900 font-display tracking-tight rtl:tracking-normal leading-tight group-hover:text-primary-600 transition-colors">
                {businessData.name[locale]}
              </span>
              <span className="text-[11px] font-medium text-navy-600 tracking-wider rtl:tracking-normal hidden sm:block">
                {locale === "ar" ? "الوعب، الدوحة، دولة قطر" : "Al Waab, Doha, Qatar"}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 shrink-0">
            {mainNavItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={cn(
                    "px-3 xl:px-4 py-2 rounded-full text-xs xl:text-sm font-semibold transition-all duration-200 whitespace-nowrap rtl:tracking-normal",
                    isActive
                      ? "bg-primary-50 text-primary-700 font-bold"
                      : "text-navy-700 hover:text-navy-950 hover:bg-slate-100/70"
                  )}
                >
                  {item.label[locale]}
                </Link>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Language Toggle Button */}
            <button
              onClick={toggleLocale}
              className="px-3 py-1.5 rounded-full text-xs font-bold text-navy-800 bg-slate-100 hover:bg-slate-200/80 transition-colors flex items-center gap-1.5 border border-slate-200/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
              aria-label={
                locale === "en"
                  ? "العربية - التبديل إلى اللغة العربية"
                  : "English - Switch to English"
              }
            >
              <Globe className="w-3.5 h-3.5 text-primary-600" />
              <span>{locale === "en" ? "العربية" : "English"}</span>
            </button>

            {/* Book Appointment CTA */}
            <Link href="/book" className="hidden sm:inline-flex">
              <Button size="md" icon={<CalendarCheck className="w-4 h-4" />}>
                {locale === "ar" ? "احجز موعدك" : "Book Appointment"}
              </Button>
            </Link>

            {/* Mobile Menu Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-navy-800 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Off-canvas Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-navy-950/60 backdrop-blur-sm">
          <div
            className={cn(
              "fixed top-0 bottom-0 w-5/6 max-w-sm bg-white p-6 shadow-2xl overflow-y-auto flex flex-col justify-between transition-all duration-300",
              isRtl ? "left-0" : "right-0"
            )}
          >
            <div>
              {/* Header inside mobile drawer */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-9 h-9 rounded-lg overflow-hidden bg-primary-50 p-1 border border-primary-200">
                    <Image
                      src="/images/original/lucida-logo.png"
                      alt="Lucida Dental Center Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="font-extrabold text-navy-950 font-display text-sm">
                    {businessData.name[locale]}
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Navigation List */}
              <nav className="flex flex-col gap-1.5 mb-8">
                {mainNavItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      className={cn(
                        "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all",
                        isActive
                          ? "bg-primary-50 text-primary-700"
                          : "text-navy-800 hover:bg-slate-50"
                      )}
                    >
                      <span>{item.label[locale]}</span>
                      <ChevronRight
                        className={cn(
                          "w-4 h-4 text-slate-400",
                          isRtl && "rotate-180"
                        )}
                      />
                    </Link>
                  );
                })}
              </nav>

              {/* Status pill in mobile drawer */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6">
                <div className="flex items-center gap-2 mb-1.5">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isOpenNow ? "bg-emerald-500 animate-pulse" : "bg-amber-500"
                    }`}
                  />
                  <span className="text-xs font-bold text-navy-900">
                    {isOpenNow
                      ? locale === "ar"
                        ? "العيادة مفتوحة الآن"
                        : "Clinic Open Now"
                      : locale === "ar"
                      ? "العيادة مغلقة الآن"
                      : "Clinic Closed Now"}
                  </span>
                </div>
                <p className="text-[11px] text-navy-600 leading-relaxed">
                  {locale === "ar"
                    ? "السبت–الأربعاء: 9 ص – 1 م و 4:30 م – 8:30 م | الخميس: 9 ص – 5 م"
                    : "Sat–Wed: 9am–1pm & 4:30pm–8:30pm | Thu: 9am–5pm"}
                </p>
              </div>
            </div>

            {/* Bottom Actions inside mobile drawer */}
            <div className="pt-6 border-t border-slate-100 flex flex-col gap-3">
              <Link href="/book" className="w-full">
                <Button size="lg" className="w-full" icon={<CalendarCheck className="w-4 h-4" />}>
                  {locale === "ar" ? "احجز موعدك الآن" : "Book Appointment"}
                </Button>
              </Link>

              <Link
                href={`tel:${businessData.contact.phones[0]}`}
                className="w-full py-2.5 px-4 rounded-xl border border-slate-200 text-center font-bold text-xs text-navy-900 flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors"
              >
                <Phone className="w-4 h-4 text-primary-600" />
                <span dir="ltr">{businessData.contact.phones[0]}</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
