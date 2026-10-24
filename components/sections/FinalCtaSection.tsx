"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, MessageCircle, Phone } from "lucide-react";
import { businessData } from "@/content/business";
import { Button } from "@/components/ui/Button";
import { useLocale } from "@/lib/locale";

export function FinalCtaSection() {
  const { locale } = useLocale();

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-navy-950 text-white">
      {/* Background Photography with Deep Gradient Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/original/cta-banner-bg.jpg"
          alt="Mayo Dental Center dental clinic treatment environment"
          fill
          sizes="100vw"
          className="object-cover opacity-20 filter saturate-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-primary-950/80" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold bg-primary-500/20 text-primary-300 border border-primary-400/30 mb-4 tracking-wide">
          {locale === "ar" ? "ابدأ خطوتك الأولى اليوم" : "Take the First Step Today"}
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display mb-6 tracking-tight leading-tight">
          {locale === "ar"
            ? "احجز موعدك الطبي الآن واستعد ابتسامتك الواثقة"
            : "Schedule an Appointment Today & Restore Your Smile"}
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          {locale === "ar"
            ? "سواء كنت بحاجة لفحص وقائي دوري، أو تنظيف للأسنان، أو استشارة تجميلية وتقويم مع د. ديكسون، نحن هنا لمساعدتك في الجبيل."
            : "Whether you need a routine cleaning, orthodontic consultation, or urgent dental care, our team is ready to welcome you."}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/book">
            <Button size="lg" icon={<CalendarCheck className="w-5 h-5" />}>
              {locale === "ar" ? "احجز موعدك الآن" : "Book your appointment"}
            </Button>
          </Link>

          <Link
            href={`https://wa.me/${businessData.contact.whatsapp.replace("+", "")}?text=${encodeURIComponent(
              locale === "ar"
                ? "مرحباً، أود حجز موعد في مركز مايو لطب الأسنان"
                : "Hello, I would like to schedule an appointment at Mayo Dental Center"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="whatsapp"
              size="lg"
              icon={<MessageCircle className="w-5 h-5" />}
            >
              {locale === "ar" ? "تواصل عبر واتساب" : "Chat on WhatsApp"}
            </Button>
          </Link>

          <Link href={`tel:${businessData.contact.phones[0]}`}>
            <Button
              variant="secondary"
              size="lg"
              className="bg-white/10 text-white border-white/20 hover:bg-white/20"
              icon={<Phone className="w-4 h-4" />}
            >
              {locale === "ar" ? "اتصال مباشر" : "Direct Phone Call"}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

