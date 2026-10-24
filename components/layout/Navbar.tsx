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
      {/* Top Notification Bar (Hours & Phone) */}
      <div className="bg-navy-950 text-white text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-white/10 hidden md:block select-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-primary-400" />
              <span>
                {locale === "ar"
                  ? "السبت – الخميس: 9:00 ص – 9:00 م (الجمعة مغلق)"
                  : "Sat – Thu: 9:00 AM – 9:00 PM (Fri Closed)"}
              </span>
            </span>

            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-primary-400" />
              <span>
                {locale === "ar"
                  ? "الجبيل البلد، شارع الملك فيصل الشمالي"
                  : "Jubail City Center, King Faisal North"}
              </span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span
              className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold ${
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
              className="text-slate-200 hover:text-white transition-colors flex items-center gap-1 font-semibold"
            >
              <Phone className="w-3 h-3 text-primary-400 shrink-0" />
              <span dir="ltr" className="[unicode-bidi:isolate] font-sans">{businessData.contact.phones[0]}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-slate-200/80 py-3"
            : "bg-white/70 backdrop-blur-md py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Clinic Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-primary-50 p-1 border border-primary-200/60 shadow-sm transition-transform group-hover:scale-105">
              <Image
                src="/images/original/mayo-logo.png"
                alt="Mayo Dental Center Logo"
                fill
                sizes="48px"
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold text-navy-950 font-display tracking-tight rtl:tracking-normal leading-tight">
                {businessData.name[locale]}
              </span>
              <span className="text-[11px] font-medium text-primary-700 tracking-wider rtl:tracking-normal hidden sm:block">
                {locale === "ar" ? "الجبيل، المملكة العربية السعودية" : "Jubail, Saudi Arabia"}
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
                    "px-2.5 xl:px-3.5 py-1.5 xl:py-2 rounded-full text-xs xl:text-sm font-semibold transition-all duration-200 whitespace-nowrap rtl:tracking-normal",
                    isActive
                      ? "bg-primary-50 text-primary-800"
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
              aria-label={locale === "en" ? "العربية - التبديل إلى اللغة العربية" : "English - Switch to English"}
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
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden bg-navy-950/60 backdrop-blur-sm transition-opacity duration-300",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto block" : "opacity-0 pointer-events-none hidden"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden={!isMobileMenuOpen}
      >
        <div
          className={cn(
            "absolute top-0 bottom-0 start-0 w-[82%] max-w-sm bg-white p-6 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-out",
            isMobileMenuOpen
              ? "translate-x-0"
              : isRtl
              ? "translate-x-full"
              : "-translate-x-full"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-5 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="relative w-9 h-9 rounded-lg overflow-hidden bg-primary-50 p-1">
                  <Image
                    src="/images/original/mayo-logo.png"
                    alt="Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-bold text-navy-950 text-base">
                  {businessData.name[locale]}
                </span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100"
                aria-label={locale === "ar" ? "إغلاق القائمة" : "Close Menu"}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav Links */}
            <div className="py-6 space-y-1">
              {mainNavItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors",
                      isActive
                        ? "bg-primary-50 text-primary-700"
                        : "text-navy-800 hover:bg-slate-50"
                    )}
                  >
                    <span>{item.label[locale]}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400 rtl:rotate-180" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Drawer Footer Actions */}
          <div className="pt-6 border-t border-slate-100 space-y-3">
            <Link href="/book" className="w-full block">
              <Button size="lg" className="w-full">
                {locale === "ar" ? "احجز موعدك الآن" : "Book Your Appointment"}
              </Button>
            </Link>

            <div className="flex items-center justify-between px-2 text-xs text-navy-500 pt-2">
              <span>{locale === "ar" ? "طوارئ الجبيل:" : "Jubail Direct:"}</span>
              <Link
                href={`tel:${businessData.contact.phones[0]}`}
                className="font-bold text-primary-700 [unicode-bidi:isolate] font-sans"
                dir="ltr"
              >
                {businessData.contact.phones[0]}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

