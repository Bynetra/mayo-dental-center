"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FAQItem } from "@/content/faq";
import { useLocale } from "@/lib/locale";

interface AccordionProps {
  items: FAQItem[];
  allowMultiple?: boolean;
}

export function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const { locale } = useLocale();
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || ""]);

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-3.5">
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);

        return (
          <div
            key={item.id}
            className={cn(
              "rounded-2xl border transition-colors duration-200 overflow-hidden",
              isOpen
                ? "bg-white border-primary-300 shadow-sm"
                : "bg-white/80 hover:bg-white border-slate-200/90"
            )}
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 text-start focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 rounded-2xl"
              aria-expanded={isOpen}
            >
              <span className="text-base sm:text-lg font-semibold text-navy-950 leading-snug">
                {item.question[locale]}
              </span>
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 transform",
                  isOpen
                    ? "bg-primary-50 text-primary-700 rotate-180"
                    : "bg-slate-100 text-navy-500 rotate-0"
                )}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-navy-600 leading-relaxed border-t border-slate-100/80 pt-3">
                  {item.answer[locale]}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

