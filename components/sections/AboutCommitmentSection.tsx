"use client";

import Image from "next/image";
import { Users, HeartHandshake, Calendar, ShieldCheck } from "lucide-react";
import { useLocale } from "@/lib/locale";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { businessData } from "@/content/business";

export function AboutCommitmentSection() {
  const { locale } = useLocale();

  const values = [
    {
      icon: Users,
      emoji: "👨‍⚕️",
      title: locale === "ar" ? "فريق طبي متخصص ومرخص من QCHP" : "Specialized & QCHP-Licensed Clinical Team",
      desc:
        locale === "ar"
          ? "يضم مركز لوسيدا لطب الأسنان نخبة من الأطباء المتخصصين بقيادة د. عدي الشعار (ماجستير علاج الجذور) للعناية بصحة وجمال أسنانك وأسنان جميع أفراد عائلتك."
          : "Lucida Dental Center brings together specialized clinical practitioners led by Dr. Adey Al-Shaar (Master's in Endodontics) to care for your family's oral health with precision.",
    },
    {
      icon: HeartHandshake,
      emoji: "🏥",
      title: locale === "ar" ? "راحتك وهدوء تجربتك أولويتنا" : "Calm, Patient-Centered Clinical Experience",
      desc:
        locale === "ar"
          ? "راحتك ورضاك هما أولويتنا المطلقة. نحرص على توفير بيئة علاجية هادئة تشعرك بالاطمئنان والشفافية التامة في خطط العلاج والأسعار."
          : "Your comfort and trust are our highest priorities. We cultivate a calm, modern environment where you feel fully confident in the personalized care you receive.",
    },
    {
      icon: Calendar,
      emoji: "📅",
      title: locale === "ar" ? "تنسيق مواعيد ميسر وسريع بالدوحة" : "Direct & Flexible Appointment Scheduling",
      desc:
        locale === "ar"
          ? "جاهز لزيارتك القادمة؟ يمكنك حجز موعدك بسهولة عبر الموقع الإلكتروني أو التحدث معنا مباشرة عبر الواتساب على 1553 5531 974+."
          : "Ready for your next visit? Easily book through our online consultation desk or chat with our front reception directly on WhatsApp at +974 5531 1553.",
    },
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-100">
              <Image
                src="/images/generated/hero-clinic-ambiance.webp"
                alt="Lucida Dental Center welcoming clinic lounge in Al Waab"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />

              <div className="absolute bottom-6 inset-x-6 text-white">
                <span className="text-xs uppercase tracking-wider text-primary-300 font-bold block mb-1">
                  {locale === "ar" ? "رعاية أسنان راقية ومتخصصة" : "Specialized Dental Care"}
                </span>
                <p className="text-xl font-bold font-display">
                  {locale === "ar"
                    ? "الوعب، الدوحة — شارع بوحصا"
                    : "Al Waab, Doha — Bu Hasa Street"}
                </p>
              </div>
            </div>

            {/* QCHP & Hours Badge */}
            <div className="absolute -bottom-6 -end-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 hidden sm:flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary-600 text-white flex items-center justify-center font-extrabold text-xs text-center leading-tight">
                QCHP<br />Licensed
              </div>
              <div>
                <span className="text-xs font-bold text-navy-900 block">
                  {locale === "ar" ? "مرخص من وزارة الصحة" : "MOPH Qatar Standards"}
                </span>
                <span className="text-[11px] text-navy-500">
                  {locale === "ar" ? "نرحب بالمرضى الجدد" : "New patients welcome"}
                </span>
              </div>
            </div>
          </div>

          {/* Editorial Content Column */}
          <div className="lg:col-span-7">
            <Badge variant="primary" dot className="mb-3.5">
              {locale === "ar" ? "التزامنا ورسالتنا" : "Our Commitment & Care"}
            </Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 font-display mb-6 tracking-tight rtl:tracking-normal leading-tight rtl:leading-[1.38] text-balance">
              {locale === "ar"
                ? "رعاية طبية راقية ومخصصة لك ولكافة أفراد عائلتك"
                : "Dedicated Dental Care for You & Your Whole Family"}
            </h2>

            <p className="text-navy-600 text-base sm:text-lg leading-relaxed mb-8">
              {locale === "ar"
                ? "في مركز لوسيدا لطب الأسنان بالوعب، نؤمن بأن العناية بصحة الأسنان يجب أن تكون تجربة هادئة ومريحة ومبنية على أحدث المعايير الطبية المعتمدة. فريقنا الطبي المتخصص هنا لمساعدتك في الحفاظ على أسنان قوية وابتسامة واثقة ومشرقة."
                : "At Lucida Dental Center in Al Waab, we believe dental visits should be calm, reassuring, and rooted in proven clinical science. Our dentistry team is dedicated to preserving your natural teeth, restoring function, and creating radiant smiles."}
            </p>

            {/* 3 Value Cards */}
            <div className="space-y-4">
              {values.map((v, i) => (
                <Card
                  key={i}
                  variant="default"
                  className="p-4 sm:p-5 hover:border-primary-300 transition-colors bg-slate-50/50"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center shrink-0 text-xl font-bold">
                      {v.emoji}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-navy-950 mb-1">
                        {v.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                        {v.desc}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
