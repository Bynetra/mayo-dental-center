"use client";

import React from "react";
import Link from "next/link";
import { AlertCircle, PhoneCall, MessageCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { servicesData } from "@/content/services";
import { businessData } from "@/content/business";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useLocale } from "@/lib/locale";

export function ServicesSection() {
  const { locale, isRtl } = useLocale();

  // Separate the emergency service from regular services
  const regularServices = servicesData.filter((s) => !s.isEmergency);
  const emergencyService = servicesData.find((s) => s.isEmergency);
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={locale === "ar" ? "خدماتنا المتخصصة" : "Our Clinical Care"}
          title={locale === "ar" ? "خدمات طب الأسنان الشاملة" : "Comprehensive Dental Services"}
          subtitle={
            locale === "ar"
              ? "نقدم رعاية فموية متكاملة تبدأ من الفحص والتنظيف الوقائي وحتى تجميل وزراعة الأسنان بأعلى المعايير."
              : "From routine preventive hygiene to advanced orthodontic alignment and permanent implants, all under one roof."
          }
        />

        {/* Highlighted Emergency Appointment High-Contrast Banner */}
        {emergencyService && (
          <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-red-600 to-rose-700 text-white shadow-xl relative overflow-hidden">
            {/* Background graphic elements */}
            <div className="absolute -top-12 -end-12 w-48 h-48 bg-white/10 rounded-full blur-2xl" />

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="emergency" className="bg-white/20 text-white border-white/30">
                    {locale === "ar" ? "طوارئ في نفس اليوم" : "Same-Day Emergency"}
                  </Badge>
                  <span className="text-xs text-white/80 font-medium">
                    {emergencyService.duration}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold mb-2 tracking-tight">
                  {emergencyService.title[locale]}
                </h3>
                <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                  {emergencyService.shortDescription[locale]}
                </p>
              </div>

              {/* Emergency Call & WhatsApp Buttons */}
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Link href={`tel:${businessData.contact.phones[0]}`}>
                  <Button
                    variant="secondary"
                    size="lg"
                    className="bg-white text-red-700 hover:bg-slate-100 border-none font-bold shadow-md"
                    icon={<PhoneCall className="w-4 h-4 text-red-600" />}
                  >
                    {locale === "ar" ? "اتصل الآن" : "Call Now"}
                  </Button>
                </Link>

                <Link
                  href={`https://wa.me/${businessData.contact.whatsapp.replace("+", "")}?text=${encodeURIComponent(
                    locale === "ar"
                      ? "حالة طارئة: أحتاج لموعد فوري عاجل لآلام الأسنان"
                      : "Dental Emergency: I need an urgent same-day appointment for severe pain"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="whatsapp"
                    size="lg"
                    className="border border-white/30"
                    icon={<MessageCircle className="w-4 h-4" />}
                  >
                    {locale === "ar" ? "واتساب الطوارئ" : "Emergency WhatsApp"}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Bento Grid of 9 Routine Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {regularServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* View All Services Link */}
        <div className="text-center pt-4">
          <Link href="/services">
            <Button
              variant="secondary"
              size="lg"
              icon={<ArrowIcon className="w-4 h-4" />}
            >
              {locale === "ar" ? "استعرض كافة تفاصيل الخدمات" : "View All 10 Dental Services"}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

