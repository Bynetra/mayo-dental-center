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
      alt: "Mayo Dental Center collection photo 1",
      title: locale === "ar" ? "معرض المركز — صورة 1" : "Clinic Showcase — Photo 1",
    },
    {
      src: "/images/original/gallery-2.webp",
      alt: "Mayo Dental Center collection photo 2",
      title: locale === "ar" ? "معرض المركز — صورة 2" : "Clinic Showcase — Photo 2",
    },
    {
      src: "/images/original/gallery-3.webp",
      alt: "Mayo Dental Center collection photo 3",
      title: locale === "ar" ? "معرض المركز — صورة 3" : "Clinic Showcase — Photo 3",
    },
    {
      src: "/images/original/gallery-4.webp",
      alt: "Mayo Dental Center collection photo 4",
      title: locale === "ar" ? "معرض المركز — صورة 4" : "Clinic Showcase — Photo 4",
    },
    {
      src: "/images/original/gallery-5.webp",
      alt: "Mayo Dental Center collection photo 5",
      title: locale === "ar" ? "معرض المركز — صورة 5" : "Clinic Showcase — Photo 5",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={locale === "ar" ? "معرضنا" : "Our Collection"}
          title={locale === "ar" ? "معرض الصور — مركز مايو" : "Our Collection"}
          subtitle={
            locale === "ar"
              ? "مجموعة صور من معرض المركز كما وردت في الموقع الأصلي."
              : "A photographic preview from the clinic's collection."
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
          className="fixed inset-0 z-50 bg-navy-950/90 backdrop-blur-md flex items-center justify-center p-4 transition-opacity duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 end-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-4xl w-full max-h-[85vh] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Enlarged gallery view"
              fill
              className="object-contain"
              onError={() => setSelectedImage(null)}
            />
          </div>
        </div>
      )}
    </section>
  );
}

