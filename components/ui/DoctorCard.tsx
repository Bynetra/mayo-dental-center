"use client";

import Link from "next/link";
import { CalendarCheck, ShieldCheck, Award, GraduationCap, Stethoscope, Clock } from "lucide-react";
import { businessData } from "@/content/business";
import { useLocale } from "@/lib/locale";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function DoctorCard() {
  const { locale } = useLocale();
  const doc = businessData.doctor;
  const emergencyDoc = businessData.emergencyDoctor;

  return (
    <div className="flex flex-col gap-8">
      {/* Primary Clinical Director Showcase: Dr. Adey Al-Shaar */}
      <div className="relative bg-white rounded-3xl border border-slate-200/90 shadow-card p-6 sm:p-8 lg:p-10 overflow-hidden">
        <div className="absolute top-0 end-0 w-80 h-80 bg-primary-100/30 rounded-full blur-3xl -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Branded Clinical Director Seal / Visual Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] aspect-[3/4] rounded-2xl overflow-hidden shadow-lift border-4 border-white bg-gradient-to-br from-navy-950 via-primary-950 to-navy-900 flex flex-col items-center justify-between p-6 text-center text-white">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0aabcb_1px,transparent_1px)] [background-size:16px_16px]" />

              {/* Top Badge */}
              <div className="relative z-10 w-full flex justify-between items-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-white/10 backdrop-blur-md text-primary-300 border border-white/10">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary-400" />
                  <span>{businessData.name[locale]}</span>
                </span>
                <span className="text-[10px] font-semibold text-slate-300 uppercase tracking-wider">
                  Al Waab, Doha
                </span>
              </div>

              {/* Central Medical Director Emblem */}
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
                    <path d="M12 2C8.5 2 6 4.5 6 7.5c0 4.5 3 6.5 3 9.5 0 2 .5 5 3 5s3-3 3-5c0-3 3-5 3-9.5C18 4.5 15.5 2 12 2z" />
                    <path d="M9 7.5c.8-1 2-1.5 3-1.5s2.2.5 3 1.5" />
                    <circle cx="12" cy="11" r="1.5" fill="currentColor" />
                  </svg>
                  <div className="absolute -bottom-1 -end-1 w-7 h-7 rounded-full bg-accent-500 text-navy-950 font-black flex items-center justify-center text-xs shadow-md">
                    ★
                  </div>
                </div>

                <div className="px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-2">
                  <span className="text-xs font-bold text-accent-400">
                    {locale === "ar" ? "ماجستير علاج الجذور (JUST)" : "Master's in Endodontics (JUST)"}
                  </span>
                </div>

                <p className="text-[11px] text-slate-300 max-w-[220px] leading-relaxed">
                  {locale === "ar"
                    ? "المدير الطبي وأخصائي علاج الجذور وزراعة الأسنان"
                    : "Medical Director & Specialist Endodontist"}
                </p>
              </div>

              {/* Bottom Doctor Identification */}
              <div className="relative z-10 w-full pt-3 border-t border-white/10">
                <span className="text-base font-bold text-white block">
                  {doc.name[locale]}
                </span>
                <span className="text-[11px] text-primary-300 font-medium block">
                  {doc.title[locale]}
                </span>
              </div>
            </div>
          </div>

          {/* Doctor Detailed Info Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="mb-4">
              <Badge variant="primary" dot className="mb-2.5">
                {locale === "ar" ? "المدير الطبي للمركز" : "Clinical Medical Director"}
              </Badge>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900 font-display rtl:leading-[1.35] rtl:tracking-normal">
                {doc.name[locale]}
              </h3>
              <p className="text-base sm:text-lg font-medium text-primary-600 mt-1">
                {doc.title[locale]}
              </p>
            </div>

            <p className="text-navy-600 text-sm sm:text-base leading-relaxed mb-6">
              {doc.bio[locale]}
            </p>

            {/* Credential Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-navy-900">
                    {locale === "ar" ? "المؤهل الأكاديمي" : "Academic Qualification"}
                  </h4>
                  <p className="text-xs text-navy-600 mt-0.5">
                    {locale === "ar"
                      ? "ماجستير في علاج جذور الأسنان، جامعة العلوم والتكنولوجيا الأردنية"
                      : "Master's Degree in Endodontics, Jordan University of Science & Technology"}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-navy-900">
                    {locale === "ar" ? "مجالات التخصص الدقيق" : "Clinical Specialties"}
                  </h4>
                  <p className="text-xs text-navy-600 mt-0.5">
                    {doc.specialty[locale]}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Booking CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/book">
                <Button size="md" icon={<CalendarCheck className="w-4 h-4" />}>
                  {locale === "ar" ? "احجز استشارة مع د. عدي" : "Consult with Dr. Adey"}
                </Button>
              </Link>
              <Link
                href={`https://wa.me/${businessData.contact.whatsapp.replace("+", "")}?text=${encodeURIComponent(
                  locale === "ar"
                    ? "مرحباً، أود حجز موعد استشارة مع د. عدي الشعار في مركز لوسيدا لطب الأسنان"
                    : "Hello, I would like to schedule a consultation with Dr. Adey Al-Shaar at Lucida Dental Center"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" size="md">
                  {locale === "ar" ? "استفسار عبر واتساب" : "Enquire via WhatsApp"}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Doctor Showcase: Dr. Mohamed Isa (Emergency & General Practitioner) */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-soft p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-2xl bg-accent-50 text-accent-700 flex items-center justify-center shrink-0">
            <Stethoscope className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-accent-700 uppercase tracking-wider">
                {locale === "ar" ? "طوارئ وطب الأسنان العام" : "Emergency & General Dentistry"}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
              <span className="text-xs text-navy-500 font-medium">BDS (Kasr Al Ainy Trained)</span>
            </div>
            <h4 className="text-xl font-bold text-navy-900 font-display">
              {emergencyDoc.name[locale]}
            </h4>
            <p className="text-xs text-primary-700 font-semibold mb-2">
              {emergencyDoc.title[locale]}
            </p>
            <p className="text-xs sm:text-sm text-navy-600 max-w-2xl leading-relaxed">
              {emergencyDoc.bio[locale]}
            </p>
          </div>
        </div>

        <Link
          href={`https://wa.me/${businessData.contact.whatsapp.replace("+", "")}?text=${encodeURIComponent(
            locale === "ar"
              ? "مرحباً، لدي حالة ألم أسنان طارئة وأحتاج لموعد عاجل في مركز لوسيدا"
              : "Hello, I have an urgent dental emergency and need a same-day appointment at Lucida Dental Center"
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 w-full md:w-auto"
        >
          <Button variant="secondary" size="md" className="w-full md:w-auto" icon={<Clock className="w-4 h-4" />}>
            {locale === "ar" ? "طوارئ الأسنان العاجلة" : "Urgent Dental Triage"}
          </Button>
        </Link>
      </div>
    </div>
  );
}
