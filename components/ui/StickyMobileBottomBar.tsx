"use client";

import Link from "next/link";
import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { useLocale } from "@/lib/locale";
import { businessData } from "@/content/business";

export function StickyMobileBottomBar() {
  const { locale } = useLocale();

  const whatsappMessage =
    locale === "ar"
      ? "مرحباً، أود حجز موعد في مركز لوسيدا لطب الأسنان بالوعب"
      : "Hello, I would like to book an appointment at Lucida Dental Center in Al Waab";

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200/90 py-2.5 px-3 shadow-[0_-4px_24px_rgba(15,23,42,0.08)]">
      <div className="grid grid-cols-3 gap-2">
        {/* Direct Call Button */}
        <Link
          href={`tel:${businessData.contact.phones[0]}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-100 hover:bg-slate-200 active:scale-95 text-navy-900 transition-all border border-slate-200/80 min-h-[48px]"
          aria-label={locale === "ar" ? "اتصال مباشر بالعيادة" : "Call Clinic Now"}
        >
          <Phone className="w-4 h-4 text-primary-700 mb-0.5" />
          <span className="text-[11px] font-bold leading-tight rtl:tracking-normal">
            {locale === "ar" ? "اتصال" : "Call"}
          </span>
        </Link>

        {/* Instant WhatsApp Action */}
        <Link
          href={`https://wa.me/${businessData.contact.whatsapp.replace("+", "")}?text=${encodeURIComponent(
            whatsappMessage
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#047857] hover:bg-[#065f46] active:scale-95 text-white transition-all shadow-sm min-h-[48px]"
          aria-label={locale === "ar" ? "محادثة فورية واتساب" : "WhatsApp Chat"}
        >
          <MessageCircle className="w-4 h-4 text-white mb-0.5" />
          <span className="text-[11px] font-bold leading-tight rtl:tracking-normal">
            {locale === "ar" ? "واتساب" : "WhatsApp"}
          </span>
        </Link>

        {/* Primary Booking Action */}
        <Link
          href="/book"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-primary-600 hover:bg-primary-700 active:scale-95 text-white transition-all shadow-sm min-h-[48px]"
          aria-label={locale === "ar" ? "حجز موعد أونلاين" : "Book Appointment"}
        >
          <CalendarCheck className="w-4 h-4 text-white mb-0.5" />
          <span className="text-[11px] font-bold leading-tight rtl:tracking-normal">
            {locale === "ar" ? "حجز موعد" : "Book"}
          </span>
        </Link>
      </div>
    </div>
  );
}
