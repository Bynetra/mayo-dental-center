"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  HeartHandshake,
  Sparkles,
  MapPin,
  Clock,
} from "lucide-react";
import { DoctorCard } from "@/components/ui/DoctorCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { useLocale } from "@/lib/locale";
import { businessData } from "@/content/business";

export default function AboutPage() {
  const { locale } = useLocale();

  return (
    <div className="py-16 sm:py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          badge={locale === "ar" ? "عن المركز" : "About Lucida Dental"}
          title={
            locale === "ar"
              ? "رعاية طبية راقية وميسرة في قلب الوعب، الدوحة"
              : "Premier Dental Care in the Heart of Al Waab, Doha"
          }
          subtitle={
            locale === "ar"
              ? "نجمع بين الخبرة السريرية المتقدمة وأحدث التقنيات الرقمية لنقدم لك ولعائلتك تجربة علاجية هادئة ومريحة."
              : "Combining seasoned clinical skill with modern dental technology to deliver confident, healthy smiles in Qatar."
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
                  ? "يضم مركز لوسيدا لطب الأسنان نخبة من الأطباء المتخصصين وذوي الكفاءة العالية للعناية بصحة أسنانك وأسنان جميع أفراد عائلتك. يقدم مركزنا مجموعة شاملة من الخدمات تشمل الفحوصات الدورية، تنظيف وتلميع الأسنان، تبييض زوم الاحترافي، علاج الجذور المجهري، التقويم الشفاف، وزراعة الأسنان."
                  : "Lucida Dental Center brings together dedicated and experienced practitioners to safeguard the oral health of your entire family. Our clinic provides a full spectrum of treatments including preventive checkups, scaling and polishing, Philips Zoom teeth whitening, microscopic endodontics, clear aligners, and dental implants."}
              </p>
              <p className="text-navy-600 text-sm sm:text-base leading-relaxed mb-6">
                {locale === "ar"
                  ? "راحتك ورضاك هما أهم أولوياتنا. نحرص على خلق بيئة هادئة ومرحبة حيث تشعر بالاطمئنان والشفافية التامة في كل خطوة من خطوات علاجك."
                  : "Your comfort and peace of mind are our foremost priorities. We cultivate a calm, welcoming clinical environment where you feel fully informed and confident in every stage of your dental journey."}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 text-xs sm:text-sm font-semibold text-navy-900">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-600 shrink-0" />
                  <span>{locale === "ar" ? "تعقيم سريري فائق" : "Hospital-Grade Sterilization"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-600 shrink-0" />
                  <span>{locale === "ar" ? "أشعة رقمية منخفضة الإشعاع" : "Low-Dose Digital X-Rays"}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden shadow-lift border border-slate-100">
                <Image
                  src="/images/original/orthodontic-checkup.jpg"
                  alt="Doctor consultation at Lucida Dental Center in Doha"
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
            <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
              {locale === "ar"
                ? "نطبق بروتوكولات تخفيف الألم المتطورة لتكون كل جلسة علاجية مريحة وخالية من التوتر والقلق."
                : "Advanced pain-management protocols ensure every appointment is tranquil, stress-free, and respectful of your comfort."}
            </p>
          </Card>

          <Card variant="default" className="p-6">
            <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-700 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-navy-950 mb-2">
              {locale === "ar" ? "ترخيص ومعايير QCHP الصارمة" : "QCHP Regulatory Standards"}
            </h4>
            <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
              {locale === "ar"
                ? "مرخص بالكامل من المجلس القطري للتخصصات الصحية مع الالتزام بأحدث إرشادات السلامة والتعقيم العالمية."
                : "Fully licensed by the Qatar Council for Healthcare Practitioners, complying with strict international hygiene directives."}
            </p>
          </Card>

          <Card variant="default" className="p-6">
            <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-700 flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-navy-950 mb-2">
              {locale === "ar" ? "شفافية العلاج والأسعار" : "Transparent Treatment Planning"}
            </h4>
            <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
              {locale === "ar"
                ? "خطة علاجية واضحة ومحددة التكاليف قبل البدء مع إمكانية التقسيط الميسر عبر تابي."
                : "Clear, itemized treatment pathways and fees explained in advance, with convenient Tabby 4x split payment options."}
            </p>
          </Card>
        </div>

        {/* Location & Quick CTA Band */}
        <div className="p-8 sm:p-10 rounded-3xl bg-navy-950 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-primary-300 shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-display">
                {locale === "ar" ? "موقعنا في الوعب، الدوحة" : "Visit Our Clinic in Al Waab, Doha"}
              </h3>
              <p className="text-sm text-slate-300 mt-1 max-w-xl">
                {locale === "ar"
                  ? "شارع بوحصا (شارع صنيع بو حصى)، منطقة الوعب. متواجدون لخدمتكم السبت إلى الأربعاء 9–1 و 4:30–8:30، والخميس 9–5."
                  : "Bu Hasa Street (Snay Bu Hasa St), Al Waab District. Open Saturday to Wednesday 9am–1pm & 4:30pm–8:30pm, and Thursday 9am–5pm."}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <Link href="/book" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto">
                {locale === "ar" ? "احجز استشارتك" : "Book Consultation"}
              </Button>
            </Link>
            <a
              href={businessData.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="secondary" size="lg" className="w-full sm:w-auto bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white">
                {locale === "ar" ? "اتجاهات القيادة" : "Get Directions"}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
