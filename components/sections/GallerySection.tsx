"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { businessData } from "@/content/business";
import { useLocale } from "@/lib/locale";

export function GallerySection() {
  const { locale } = useLocale();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});

  const galleryImages = [
    {
      src: "/images/original/gallery-1.webp",
      alt: "Lucida Dental Center patient treatment suite in Al Waab",
      title: locale === "ar" ? "عيادة العلاج السريري المتخصصة" : "Specialized Clinical Treatment Suite",
    },
    {
      src: "/images/original/gallery-2.webp",
      alt: "Lucida Dental Center digital sterilization and hygiene standards",
      title: locale === "ar" ? "محطة التعقيم والوقاية السريرية" : "Sterilization & Hygiene Standards",
    },
    {
      src: "/images/original/gallery-3.webp",
      alt: "Lucida Dental Center welcoming reception and consultation lounge",
      title: locale === "ar" ? "صالة الاستقبال والاستشارة بالوعب" : "Welcoming Reception & Lounge",
    },
    {
      src: "/images/original/gallery-4.webp",
      alt: "Lucida Dental Center modern dental operatories",
      title: locale === "ar" ? "تجهيزات تشخيصية ورقمية حديثة" : "Modern Digital Operatories",
    },
    {
      src: "/images/original/gallery-5.webp",
      alt: "Lucida Dental Center comfortable patient care environment",
      title: locale === "ar" ? "بيئة مريحة وهادئة للمراجعين" : "Tranquil Patient Care Setting",
    },
    {
      src: "/images/generated/hero-clinic-ambiance.webp",
      alt: "Lucida Dental Center digital diagnostic consultation suite",
      title: locale === "ar" ? "جناح الاستشارات والتشخيص الرقمي" : "Digital Diagnostic Consultation Suite",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={locale === "ar" ? "جولة في العيادة" : "Our Facilities"}
          title={locale === "ar" ? "معرض الصور — مركز لوسيدا لطب الأسنان" : "Clinic Gallery — Lucida Dental Center"}
          subtitle={
            locale === "ar"
              ? "لقطات من داخل عيادتنا ومعايير التعقيم والأجهزة الطبية المتطورة في منطقة الوعب بالدوحة."
              : "A photographic look inside our modern clinical environments, sterilization standards, and patient comfort in Al Waab, Doha."
          }
        />

        {/* Before/After Interactive Comparison Feature (Controlled via content toggle) */}
        {businessData.showBeforeAfterSlider && (
          <div className="mb-20">
            <BeforeAfterSlider
              title={
                locale === "ar"
                  ? "مقارنة نتائج التبييض السريري الاحترافي"
                  : "Interactive Clinical Whitening Results"
              }
            />
          </div>
        )}

        {/* Clinic Collection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => {
            if (failedImages[index]) return null;
            return (
              <div
                key={index}
                className="group relative aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-card border border-slate-200/80 cursor-pointer"
                onClick={() => setSelectedImage(img.src)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={() => setFailedImages((prev) => ({ ...prev, [index]: true }))}
                />
                <div className="absolute inset-0 bg-navy-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="w-11 h-11 rounded-full bg-white/90 text-navy-900 flex items-center justify-center shadow-lg backdrop-blur-md transform translate-y-3 group-hover:translate-y-0 transition-transform">
                    <ZoomIn className="w-5 h-5" />
                  </span>
                </div>
                <div className="absolute bottom-3 start-3 end-3 px-3 py-1.5 rounded-xl bg-navy-950/80 text-white text-xs font-semibold backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                  {img.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-navy-950/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 end-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="relative max-w-4xl max-h-[85vh] w-full h-full rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Lucida Dental Center enlarged facility preview"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
