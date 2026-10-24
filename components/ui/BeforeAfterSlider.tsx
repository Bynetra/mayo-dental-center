"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { Sparkles, SlidersHorizontal } from "lucide-react";
import { useLocale } from "@/lib/locale";

interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage?: string;
  beforeLabel?: string;
  afterLabel?: string;
  title?: string;
  disclaimer?: string;
}

export function BeforeAfterSlider({
  beforeImage = "/images/generated/before-whitening.jpg",
  afterImage = "/images/generated/after-whitening.jpg",
  beforeLabel,
  afterLabel,
  title,
  disclaimer,
}: BeforeAfterSliderProps) {
  const { locale } = useLocale();
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const defaultBefore = beforeLabel || (locale === "ar" ? "قبل التبييض" : "Before");
  const defaultAfter = afterLabel || (locale === "ar" ? "بعد التبييض السريري" : "After Treatment");

  if (hasError) return null;

  return (
    <div className="w-full max-w-3xl mx-auto">
      {title && (
        <div className="text-center mb-4">
          <h3 className="text-lg font-bold text-navy-950 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-primary-600" />
            <span>{title}</span>
          </h3>
        </div>
      )}

      {/* Slider Container */}
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-card border border-slate-200 select-none cursor-ew-resize touch-none"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
      >
        {/* Prominent Educational / Illustrative Disclaimer Badge */}
        <div className="absolute top-4 inset-x-4 z-20 flex justify-center pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-navy-950/85 text-amber-300 backdrop-blur-md shadow-md border border-white/15">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>
              {locale === "ar"
                ? "نموذج توضيحي إرشادي — بانتظار موافقة حالات المركز السريرية"
                : "Illustrative Clinical Model — Pending Client Consented Cases"}
            </span>
          </span>
        </div>

        {/* After Image (Background) */}
        <div className="absolute inset-0">
          <Image
            src={afterImage}
            alt="After dental treatment"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 750px"
            onError={() => setHasError(true)}
          />
          <span className="absolute bottom-4 end-4 px-3 py-1 rounded-full text-xs font-semibold bg-primary-900/85 text-white backdrop-blur-md shadow-md">
            {defaultAfter}
          </span>
        </div>

        {/* Before Image (Clipped Overlay) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="relative w-full h-full" style={{ width: containerRef.current?.offsetWidth || "100%" }}>
            <Image
              src={beforeImage}
              alt="Before dental treatment"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 750px"
              onError={() => setHasError(true)}
            />
            <span className="absolute bottom-4 start-4 px-3 py-1 rounded-full text-xs font-semibold bg-navy-950/85 text-white backdrop-blur-md shadow-md">
              {defaultBefore}
            </span>
          </div>
        </div>

        {/* Divider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 cursor-ew-resize flex items-center justify-center"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        >
          <div className="w-8 h-8 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center text-primary-700">
            <SlidersHorizontal className="w-4 h-4 rotate-90" />
          </div>
        </div>
      </div>

      {/* Transparent Disclaimer */}
      <p className="text-center text-xs text-navy-600 mt-3 font-medium">
        {disclaimer ||
          (locale === "ar"
            ? "* حالة سريرية توضيحية لنتائج تبييض الأسنان الاحترافي. تختلف النتائج الفردية بحسب طبيعة الأسنان والتزام المراجع."
            : "* Illustrative clinical case comparison for professional whitening. Individual clinical results vary by natural enamel shade and oral hygiene habits.")}
      </p>
    </div>
  );
}
