"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { faqData } from "@/content/faq";
import { useLocale } from "@/lib/locale";

export function FaqSection() {
  const { locale } = useLocale();

  return (
    <section className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={locale === "ar" ? "الأسئلة الشائعة" : "Patient Questions"}
          title={locale === "ar" ? "كل ما تود معرفته عن العلاج والتأمين" : "Frequently Asked Questions"}
          subtitle={
            locale === "ar"
              ? "إجابات واضحة ودقيقة لمساعدتك في التخطيط لزيارتك ومعرفة تفاصيل التأمين والتقسيط."
              : "Clear, reliable answers to help you prepare for your visit and understand insurance and payment options."
          }
        />

        <Accordion items={faqData} />
      </div>
    </section>
  );
}

