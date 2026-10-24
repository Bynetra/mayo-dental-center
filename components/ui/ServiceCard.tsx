"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  ArrowRight,
  ArrowLeft,
  Stethoscope,
  Sparkles,
  ShieldCheck,
  Scissors,
  Activity,
  Sun,
  Smile,
  Layers,
  Anchor,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { useLocale } from "@/lib/locale";
import type { ServiceDetail } from "@/content/services";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Stethoscope,
  Sparkles,
  ShieldCheck,
  Scissors,
  Activity,
  Sun,
  Smile,
  Layers,
  Anchor,
  Zap,
};

interface ServiceCardProps {
  service: ServiceDetail;
  featured?: boolean;
}

export function ServiceCard({ service, featured = false }: ServiceCardProps) {
  const { locale, isRtl } = useLocale();
  const Icon = iconMap[service.iconName] || Stethoscope;
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <div
      className={cn(
        "group relative bg-white rounded-2xl sm:rounded-3xl border transition-all duration-300 overflow-hidden flex flex-col h-full hover:-translate-y-1.5",
        service.isEmergency
          ? "border-red-200 shadow-md hover:border-red-400 hover:shadow-red-500/10"
          : "border-slate-200/80 shadow-card hover:border-primary-400/70 hover:shadow-lift"
      )}
    >
      {/* Service Image Frame */}
      <div className="relative w-full h-48 sm:h-52 bg-slate-100 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title[locale]}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />

        {/* Floating Category & Duration */}
        <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between">
          <Badge
            variant={service.isEmergency ? "emergency" : "secondary"}
            className="backdrop-blur-md bg-white/90 shadow-sm"
          >
            {service.category[locale]}
          </Badge>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-navy-950/80 backdrop-blur-md text-white shadow-sm">
            <Clock className="w-3.5 h-3.5 text-primary-300" />
            <span>{service.duration}</span>
          </span>
        </div>

        {/* Icon Floating Badge */}
        <div className="absolute bottom-3 start-3.5 w-10 h-10 rounded-xl bg-white shadow-md flex items-center justify-center text-primary-700">
          <Icon className="w-5 h-5" />
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        <div className="mb-2.5">
          <h3 className="text-lg sm:text-xl font-bold text-navy-950 group-hover:text-primary-700 transition-colors line-clamp-1">
            {service.title[locale]}
          </h3>
          <p className="text-xs text-navy-700 font-semibold mt-0.5" dir="rtl">
            {locale === "en" ? service.title.ar : service.title.en}
          </p>
        </div>

        <p className="text-sm text-navy-600 leading-relaxed mb-6 flex-grow line-clamp-2">
          {service.shortDescription[locale]}
        </p>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
          <Link
            href={`/services/${service.slug}`}
            className="text-sm font-semibold text-primary-700 hover:text-primary-800 inline-flex items-center gap-1.5 transition-colors group/link"
          >
            <span>{locale === "ar" ? "تفاصيل الخدمة" : "Service Details"}</span>
            <ArrowIcon className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
          </Link>

          <Link
            href={`/book?service=${service.slug}`}
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary-50 text-primary-800 hover:bg-primary-600 hover:text-white transition-colors"
          >
            {locale === "ar" ? "حجز موعد" : "Book Now"}
          </Link>
        </div>
      </div>
    </div>
  );
}
