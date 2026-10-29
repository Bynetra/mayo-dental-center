"use client";

import { DoctorCard } from "@/components/ui/DoctorCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLocale } from "@/lib/locale";

export function DoctorSection() {
  const { locale } = useLocale();

  return (
    <section className="py-20 sm:py-28 bg-slate-50/50 relative overflow-hidden" id="doctor">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={locale === "ar" ? "القيادة الطبية" : "Clinical Leadership"}
          title={
            locale === "ar"
              ? "تعرف على د. عدي الشعار وفريقنا الطبي"
              : "Meet Dr. Adey Al-Shaar & Our Clinical Team"
          }
          subtitle={
            locale === "ar"
              ? "خبرة سريرية متقدمة في علاج الجذور المجهري، زراعة وتجميل الأسنان مع التزام تام براحة وسلامة المراجعين."
              : "Advanced clinical expertise in microscopic endodontics, dental implants, and smile aesthetics with a gentle, comfort-first approach."
          }
        />

        <DoctorCard />
      </div>
    </section>
  );
}
