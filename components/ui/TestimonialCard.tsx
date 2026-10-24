import React from "react";
import { Star, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TestimonialItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  content: {
    en: string;
    ar: string;
  };
  serviceTreated?: {
    en: string;
    ar: string;
  };
}

interface TestimonialCardProps {
  testimonial: TestimonialItem;
  locale: "en" | "ar";
}

export function TestimonialCard({ testimonial, locale }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-card flex flex-col justify-between h-full">
      <div>
        {/* Rating Stars */}
        <div className="flex items-center gap-1 mb-3 text-amber-400">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                "w-4 h-4 fill-current",
                i < testimonial.rating ? "text-amber-400" : "text-slate-200"
              )}
            />
          ))}
        </div>

        {/* Content */}
        <p className="text-sm sm:text-base text-navy-700 leading-relaxed italic mb-4">
          &ldquo;{testimonial.content[locale]}&rdquo;
        </p>
      </div>

      {/* Author Details */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-bold text-navy-950">
              {testimonial.author}
            </span>
            <CheckCircle className="w-3.5 h-3.5 text-primary-600" />
          </div>
          {testimonial.serviceTreated && (
            <span className="text-xs text-primary-700 font-medium">
              {testimonial.serviceTreated[locale]}
            </span>
          )}
        </div>
        <span className="text-xs text-slate-400 font-normal">
          {testimonial.date}
        </span>
      </div>
    </div>
  );
}

