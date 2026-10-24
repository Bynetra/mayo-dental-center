"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  Users,
  CheckCircle2,
  CalendarCheck,
  HeartHandshake,
  Clock,
  Sparkles,
} from "lucide-react";
import { businessData } from "@/content/business";
import { DoctorCard } from "@/components/ui/DoctorCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { useLocale } from "@/lib/locale";

export default function AboutPage() {
  const { locale } = useLocale();

  return (
    <div className="py-16 sm:py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          badge={locale === "ar" ? "عن المركز" : "About Mayo Dental"}
          title={
            locale === "ar"
              ? "رعاية طبية راقية وميسرة في قلب الجبيل"
              : "Premier Dental Care in the Heart of Jubail"
          }
          subtitle={
            locale === "ar"
              ? "نجمع بين الخبرة الطبية الطويلة وأحدث التقنيات لنقدم لك ولعائلتك تجربة علاجية هادئة ومريحة."
              : "Combining seasoned clinical skill with modern dental technology to deliver confident, healthy smiles."
          }
        />

        {/* Editorial Story Section */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-card p-6 sm:p-10 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <Badge variant="primary" dot className="mb-4">
                {locale === "ar" ? "فلسفتنا في العلاج" : "Our Clinical Philosophy"}
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-950 font-display mb-4">
                {locale === "ar"
                  ? "فريق متخصص لرعاية أسنانك وأسنان عائلتك"
                  : "A Specialized Team Dedicated to Family Oral Health"}
              </h2>
              <p className="text-navy-600 text-sm sm:text-base leading-relaxed mb-4">
                {locale === "ar"
                  ? "يتكون مركز مايو لطب الأسنان من فريق متخصص وذي خبرة عالية للعناية بصحة أسنانك وأسنان جميع أفراد عائلتك. يقدم مركزنا مجموعة شاملة من الخدمات بما في ذلك الفحوصات الدورية، وتنظيف الأسنان، وطب الأسنان التجميلي، والتقويم، وزراعة الأسنان."
                  : "Mayo Dental Center consists of a specialized and experienced team to care for the health of your teeth and the teeth of all your family members. Our center offers a wide range of services including routine checkups, teeth cleanings, cosmetic dentistry, orthodontics and more."}
              </p>
              <p className="text-navy-600 text-sm sm:text-base leading-relaxed mb-6">
                {locale === "ar"
                  ? "راحتك ورضاك هما أهم أولوياتنا. نسعى جاهدين لخلق بيئة مرحبة حيث تشعر بالاطمئنان والثقة في الرعاية التي تتلقاها."
                  : "Your comfort and satisfaction are our top priorities. We strive to create a welcoming environment where you feel comfortable and confident in the care you receive. Our team is always here to answer any questions you have."}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 text-xs sm:text-sm font-semibold text-navy-900">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-600" />
                  <span>{locale === "ar" ? "تعقيم سريري فائق" : "Hospital-Grade Sterilization"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-600" />
                  <span>{locale === "ar" ? "أحدث أجهزة الأشعة" : "Low-Dose Digital X-Rays"}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden shadow-lift border border-slate-100">
                <Image
                  src="/images/original/orthodontic-checkup.jpg"
                  alt="Doctor consultation at Mayo Dental Center"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Doctor Showcase */}
        <div className="mb-16">
          <DoctorCard />
        </div>

        {/* 3 Core Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card variant="default" className="p-6">
            <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-700 flex items-center justify-center mb-4">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-navy-950 mb-2">
              {locale === "ar" ? "عناية تركز على راحة المريض" : "Gentle, Compassionate Care"}
            </h4>
            <p className="text-sm text-navy-600 leading-relaxed">
              {locale === "ar"
                ? "نولي اهتماماً خاصاً للمرضى الذين يعانون من قلق عيادات الأسنان، ونوفر تخدير موضعي لطيف وغير مؤلم."
                : "We cater to patients with dental anxiety, taking our time and using gentle, painless numbing techniques."}
            </p>
          </Card>

          <Card variant="default" className="p-6">
            <div className="w-12 h-12 rounded-2xl bg-accent-50 text-accent-700 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-navy-950 mb-2">
              {locale === "ar" ? "شفافية مطلقة في الخطط" : "Total Treatment Transparency"}
            </h4>
            <p className="text-sm text-navy-600 leading-relaxed">
              {locale === "ar"
                ? "شرح مفصل لكافة الخيارات العلاجية والتكاليف المعتمدة قبل البدء بأي إجراء دون أي مفاجآت."
                : "Clear explanations of all your treatment options, timelines, and costs before any procedure begins."}
            </p>
          </Card>

          <Card variant="default" className="p-6">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-navy-950 mb-2">
              {locale === "ar" ? "تسهيلات دفع وتأمين" : "Insurance & Tabby Plans"}
            </h4>
            <p className="text-sm text-navy-600 leading-relaxed">
              {locale === "ar"
                ? "تأمين التعاونية وميدغلف معتمدان، بالإضافة إلى إمكانية تقسيط العلاج على 4 دفعات بدون فوائد عبر تابي."
                : "Approved provider for Tawuniya & Medgulf insurance, plus zero-interest 4x installments through Tabby."}
            </p>
          </Card>
        </div>

        {/* CTA Banner */}
        <div className="p-8 rounded-3xl bg-navy-950 text-white text-center shadow-xl">
          <h3 className="text-2xl font-bold font-display mb-2">
            {locale === "ar" ? "يسعدنا الترحيب بك في مركز مايو بالجبيل" : "We Look Forward to Welcoming You"}
          </h3>
          <p className="text-sm text-slate-300 max-w-lg mx-auto mb-6">
            {locale === "ar"
              ? "احجز موعدك اليوم واكتشف بنفسك المعايير الطبية المتميزة لمركزنا."
              : "Book your consultation today and experience high-standard, gentle dentistry."}
          </p>
          <Link href="/book">
            <Button size="lg">
              {locale === "ar" ? "احجز موعدك الطبي الآن" : "Book an Appointment"}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

