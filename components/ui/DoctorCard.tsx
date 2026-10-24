"use client";

import Link from "next/link";
import { CalendarCheck, ShieldCheck } from "lucide-react";
import { businessData } from "@/content/business";
import { useLocale } from "@/lib/locale";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function DoctorCard() {
  const { locale } = useLocale();
  const doc = businessData.doctor;

  return (
    <div className="relative bg-white rounded-3xl border border-slate-200/90 shadow-card p-6 sm:p-8 lg:p-10 overflow-hidden">
      {/* Background soft teal glow */}
      <div className="absolute top-0 end-0 w-80 h-80 bg-primary-100/40 rounded-full blur-3xl -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Branded Clinical Director Placeholder Column (No AI-Generated Human Faces) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[340px] aspect-[3/4] rounded-2xl overflow-hidden shadow-lift border-4 border-white bg-gradient-to-br from-navy-900 via-primary-950 to-navy-950 flex flex-col items-center justify-between p-6 text-center text-white">
            {/* Background subtle geometric rings */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />

            {/* Top Badge */}
            <div className="relative z-10 w-full flex justify-between items-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-white/10 backdrop-blur-md text-primary-300 border border-white/10">
                <ShieldCheck className="w-3.5 h-3.5 text-primary-400" />
                <span>{locale === "ar" ? "مركز مايو لطب الأسنان" : "Mayo Dental Center"}</span>
              </span>
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                Jubail, KSA
              </span>
            </div>

            {/* Central Branded Seal & Crest */}
            <div className="relative z-10 my-auto flex flex-col items-center">
              <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-primary-500/20 to-primary-700/40 border-2 border-primary-400/40 p-3 shadow-inner flex items-center justify-center mb-4 backdrop-blur-sm">
                <svg
                  className="w-16 h-16 text-primary-300 stroke-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Dental Clinic Stethoscope & Tooth Empath Crest */}
                  <path d="M12 2C8.5 2 6 4.5 6 7.5c0 4.5 3 6.5 3 9.5 0 2 .5 5 3 5s3-3 3-5c0-3 3-5 3-9.5C18 4.5 15.5 2 12 2z" />
                  <path d="M9 7.5c.8-1 2-1.5 3-1.5s2.2.5 3 1.5" />
                  <circle cx="12" cy="11" r="1.5" fill="currentColor" />
                </svg>
                <div className="absolute -bottom-1 -end-1 w-7 h-7 rounded-full bg-accent-500 text-navy-950 font-black flex items-center justify-center text-xs shadow-md">
                  ★
                </div>
              </div>

              <div className="px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-2">
                <span className="text-xs font-bold text-amber-300">
                  {locale === "ar" ? "الصورة الرسمية قريباً" : "Official Portrait Coming Soon"}
                </span>
              </div>

              <p className="text-[11px] text-slate-300 max-w-[220px] leading-relaxed">
                {locale === "ar"
                  ? "بانتظار جلسة التصوير الفوتوغرافي المعتمدة داخل العيادة"
                  : "Awaiting scheduled on-site photography session"}
              </p>
            </div>

            {/* Bottom Designation Card */}
            <div className="relative z-10 w-full pt-3 border-t border-white/10">
              <span className="text-sm font-bold text-white block">
                {doc.name[locale]}
              </span>
              <span className="text-[11px] text-primary-300 font-medium block">
                {locale === "ar" ? "طبيب الأسنان — مركز مايو لطب الأسنان" : "Dental Surgeon — Mayo Dental Center"}
              </span>
            </div>
          </div>
        </div>

        {/* Doctor Information Column */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="mb-4">
            <Badge variant="primary" dot className="mb-2.5">
              {locale === "ar" ? "الفريق الطبي المتميز" : "Expert Clinical Team"}
            </Badge>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-950 font-display rtl:leading-[1.35] rtl:tracking-normal">
              {doc.name[locale]}
            </h3>
            <p className="text-base sm:text-lg font-medium text-primary-700 mt-1">
              {doc.title[locale]}
            </p>
          </div>

          <p className="text-navy-600 text-sm sm:text-base leading-relaxed mb-6">
            {doc.bio[locale]}
          </p>

          {/* Verified Clinic Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <ShieldCheck className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-navy-900">
                  {locale === "ar" ? "خدمات الأسنان الشاملة" : "Comprehensive Dental Care"}
                </p>
                <p className="text-xs text-navy-500 mt-0.5">
                  {locale === "ar"
                    ? "الجبيل البلد — طريق الملك فيصل"
                    : "Jubail City Center — King Faisal Rd"}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <CalendarCheck className="w-5 h-5 text-accent-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-navy-900">
                  {locale === "ar" ? "أوقات العمل الرسمية" : "Clinic Operating Hours"}
                </p>
                <p className="text-xs text-navy-500 mt-0.5">
                  {locale === "ar"
                    ? "السبت – الخميس: 9:00 ص – 9:00 م"
                    : "Saturday – Thursday: 9:00 AM – 9:00 PM"}
                </p>
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/book">
              <Button size="lg" icon={<CalendarCheck className="w-4 h-4" />}>
                {locale === "ar" ? "احجز استشارة مع د. ديكسون" : "Book Consultation with Dr. Dixon"}
              </Button>
            </Link>

            <Link
              href={`https://wa.me/${businessData.contact.whatsapp.replace("+", "")}?text=${encodeURIComponent(
                locale === "ar"
                  ? "مرحباً، أود حجز موعد استشارة مع د. ديكسون في مركز مايو لطب الأسنان"
                  : "Hello, I would like to book a consultation with Dr. Dixon at Mayo Dental Center"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" size="lg">
                {locale === "ar" ? "استفسار عبر واتساب" : "Inquire on WhatsApp"}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
