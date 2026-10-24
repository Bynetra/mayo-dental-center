"use client";

import { useState } from "react";
import Link from "next/link";
import { servicesData } from "@/content/services";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { useLocale } from "@/lib/locale";

export default function ServicesOverviewPage() {
  const { locale } = useLocale();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: locale === "ar" ? "جميع الخدمات" : "All Services" },
    { id: "preventive", label: locale === "ar" ? "الوقاية والنظافة" : "Hygiene & Prevention" },
    { id: "cosmetic", label: locale === "ar" ? "تجميل الأسنان" : "Cosmetic & Whitening" },
    { id: "restorative", label: locale === "ar" ? "الجراحة والعلاج" : "Endo & Surgery" },
    { id: "specialty", label: locale === "ar" ? "التقويم والزراعة" : "Ortho & Implants" },
  ];

  const filteredServices = servicesData.filter((service) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "preventive")
      return service.id === "checkup" || service.id === "scaling" || service.id === "fluoride";
    if (selectedCategory === "cosmetic")
      return service.id === "whitening" || service.id === "hollywood-smile";
    if (selectedCategory === "restorative")
      return service.id === "extraction" || service.id === "root-canal" || service.id === "emergency";
    if (selectedCategory === "specialty")
      return service.id === "orthodontics" || service.id === "implants";
    return true;
  });

  return (
    <div className="py-16 sm:py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={locale === "ar" ? "خدماتنا السريرية" : "Clinical Directory"}
          title={locale === "ar" ? "كافة خدمات طب وتجميل الأسنان" : "Complete Dental Treatment Services"}
          subtitle={
            locale === "ar"
              ? "استعرض جميع الإجراءات العلاجية والتجميلية والتقويمية المقدمة في مركز مايو لطب الأسنان بالجبيل."
              : "Explore our full range of modern dental care treatments performed by experienced clinicians in Jubail."
          }
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat.id
                  ? "bg-primary-600 text-white shadow-md shadow-primary-600/20"
                  : "bg-white text-navy-700 border border-slate-200 hover:border-primary-300"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Bottom Booking Banner */}
        <div className="p-8 rounded-3xl bg-primary-900 text-white text-center max-w-3xl mx-auto shadow-xl">
          <h3 className="text-xl sm:text-2xl font-bold font-display mb-2">
            {locale === "ar" ? "غير متأكد من الخدمة المناسبة لحالتك؟" : "Unsure Which Treatment You Need?"}
          </h3>
          <p className="text-xs sm:text-sm text-primary-200 mb-6 max-w-lg mx-auto">
            {locale === "ar"
              ? "احجز فحصاً عاماً مع تخطيط العلاج، وسيقوم أطباؤنا بفحص حالتك وتقديم النصح الأمثل بشفافية."
              : "Schedule a comprehensive general checkup with Dr. Dixon to diagnose your needs and formulate a custom treatment plan."}
          </p>
          <Link href="/book">
            <Button size="lg" className="bg-white text-primary-900 hover:bg-primary-50 font-bold">
              {locale === "ar" ? "احجز فحصاً عاماً الآن" : "Book General Checkup"}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

