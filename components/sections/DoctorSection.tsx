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
          badge={locale === "ar" ? "الفريق الطبي" : "Medical Leadership"}
          title={locale === "ar" ? "تعرف على د. ديكسون" : "Meet Dr. Dixon"}
          subtitle={
            locale === "ar"
              ? "خبرة سريرية متقدمة في علاج وتجميل وتقويم الأسنان مع التزام تام براحة وسلامة المراجعين."
              : "Advanced clinical expertise in restorative, cosmetic, and orthodontic dentistry with a comfort-first approach."
          }
        />

        <DoctorCard />
      </div>
    </section>
  );
}

