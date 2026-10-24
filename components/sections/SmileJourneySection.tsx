"use client";

import { Calendar, Search, Sparkles, Smile } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLocale } from "@/lib/locale";

export function SmileJourneySection() {
  const { locale } = useLocale();

  const steps = [
    {
      step: "01",
      icon: Calendar,
      title: locale === "ar" ? "1. حجز الموعد بسهولة" : "1. Book Your Slot",
      desc:
        locale === "ar"
          ? "اختر الوقت والتاريخ المناسب لك عبر موقعنا أو راسل منسقي المواعيد مباشرة عبر الواتساب."
          : "Select your preferred date and time online or message our clinic coordination desk on WhatsApp.",
    },
    {
      step: "02",
      icon: Search,
      title: locale === "ar" ? "2. الفحص والتخطيط الرقمي" : "2. Checkup & Planning",
      desc:
        locale === "ar"
          ? "فحص سريري شامل وتصوير رقمي دقيق مع الفريق الطبي ومناقشة شفافة لكافة الخيارات العلاجية."
          : "Comprehensive exam and digital imaging with our clinical team, reviewing clear priorities and cost transparency.",
    },
    {
      step: "03",
      icon: Sparkles,
      title: locale === "ar" ? "3. علاج لطيف ومريح" : "3. Comfort-First Care",
      desc:
        locale === "ar"
          ? "تنفيذ الإجراء الطبي بأحدث الأجهزة وتقنيات التخدير الموضعي غير المؤلم في بيئة هادئة."
          : "Gentle treatment executed with modern precision tools and advanced pain-free anesthesia.",
    },
    {
      step: "04",
      icon: Smile,
      title: locale === "ar" ? "4. ابتسامة مشرقة تدوم" : "4. Lasting Healthy Smile",
      desc:
        locale === "ar"
          ? "استمتع بابتسامة متألقة وصحة فموية مثالية مع متابعة وقائية دورية تحمي نتائجك لسنوات."
          : "Walk away with radiant oral health, tailored aftercare instructions, and routine preventive support.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={locale === "ar" ? "خطوات بسيطة" : "How It Works"}
          title={locale === "ar" ? "رحلة ابتسامتك معنا" : "Your Seamless Smile Journey"}
          subtitle={
            locale === "ar"
              ? "نهتم بأدق التفاصيل لنضمن لك تجربة علاجية مريحة وشفافة من لحظة الحجز وحتى اكتمال العلاج."
              : "Four simple, stress-free steps designed to put your comfort and oral health first."
          }
        />

        {/* 4-Step Grid with Progress Line */}
        <div className="relative">
          {/* Subtle horizontal connecting bar on desktop */}
          <div className="hidden lg:block absolute top-1/2 start-8 end-8 h-0.5 bg-slate-200 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-card hover:border-primary-300 hover:shadow-lift transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl font-extrabold text-primary-700 font-display">
                        {item.step}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-700 flex items-center justify-center shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-navy-950 mb-2.5">
                      {item.title}
                    </h3>

                    <p className="text-sm text-navy-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-primary-700">
                    <span>{locale === "ar" ? "المرحلة" : "Phase"} {index + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

