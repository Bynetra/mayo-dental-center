"use client";

import { ShieldCheck, Clock, HeartHandshake, MapPin, Sparkles, AlertCircle } from "lucide-react";
import { useLocale } from "@/lib/locale";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export function WhyChooseLucidaSection() {
  const { locale } = useLocale();

  const verifiedFacts = [
    {
      icon: MapPin,
      title: {
        en: "Strategic Al Waab, Doha Location",
        ar: "موقع استراتيجي في قلب الوعب، الدوحة",
      },
      description: {
        en: "Conveniently located on Bu Hasa Street in the peaceful Al Waab residential district, with smooth access and accessible patient parking.",
        ar: "موقع هادئ وميسر على شارع بوحصا في منطقة الوعب بالدوحة، بالقرب من طريق الوعب مع مواقف سيارات مريحة للمراجعين.",
      },
      tag: {
        en: "Bu Hasa St, Al Waab",
        ar: "شارع بوحصا، الوعب",
      },
    },
    {
      icon: Clock,
      title: {
        en: "Convenient Doha Shift Schedule",
        ar: "أوقات عمل مرنة وممتدة بالدوحة",
      },
      description: {
        en: "Open Saturday through Wednesday with morning and evening sessions (9am–1pm & 4:30pm–8:30pm), plus continuous Thursday hours (9am–5pm).",
        ar: "نستقبلكم من السبت إلى الأربعاء بفترتين صباحية ومسائية (9 ص–1 م و 4:30 م–8:30 م)، ويوم الخميس متواصلاً (9 ص–5 م) لتناسب كافة التزاماتكم.",
      },
      tag: {
        en: "Morning & Evening",
        ar: "صباحاً ومساءً",
      },
    },
    {
      icon: HeartHandshake,
      title: {
        en: "AlKoot Direct & QLM Claim Support",
        ar: "تأمين الكوت المباشر ودعم مطالبات QLM",
      },
      description: {
        en: "Direct coverage for eligible AlKoot healthcare network policyholders, alongside certified medical claim documentation for QLM, Mednet, and Nextcare.",
        ar: "تغطية إلكترونية مباشرة للمشتركين المؤهلين ضمن شبكة الكوت للتأمين، وتوفير تقارير مفصلة لمطالبات الاسترداد لعملاء QLM وميدنت ونكست كير.",
      },
      tag: {
        en: "Insurance Supported",
        ar: "تأمين معتمد",
      },
    },
    {
      icon: Sparkles,
      title: {
        en: "Tabby 4-Month Split Payments",
        ar: "تقسيط تابي على 4 دفعات ميسرة",
      },
      description: {
        en: "Split your dental treatments into 4 monthly payments with zero interest or hidden fees via Tabby, Visa, Mastercard, or NAPS debit cards.",
        ar: "إمكانية تقسيط تكلفة علاج أسنانك على 4 دفعات شهرية ميسرة بدون أي فوائد أو رسوم إضافية عبر تابي، بالإضافة للدفع بفيزا وماستركارد وبطاقات نافس.",
      },
      tag: {
        en: "Tabby 4x",
        ar: "تابي 4 دفعات",
      },
    },
    {
      icon: AlertCircle,
      title: {
        en: "Urgent Dental Emergency Care",
        ar: "رعاية طوارئ الأسنان العاجلة",
      },
      description: {
        en: "Dedicated clinical triage for acute toothaches, chipped restorations, and dental trauma under the care of Dr. Mohamed Isa and our urgent response team.",
        ar: "رعاية عاجلة وفورية لآلام الأسنان الشديدة، والكسور الطارئة، والالتهابات الحادة بإشراف طبيب الطوارئ د. محمد عيسى وفريقنا الطبي.",
      },
      tag: {
        en: "Same-Day Relief",
        ar: "تسكين فوري",
      },
    },
    {
      icon: ShieldCheck,
      title: {
        en: "QCHP Licensed Clinical Standards",
        ar: "معايير سريرية مرخصة من QCHP",
      },
      description: {
        en: "Full compliance with Qatar Council for Healthcare Practitioners regulations, hospital-grade sterilization protocols, and bilingual Arabic/English consultations.",
        ar: "التزام كامل بمعايير المجلس القطري للتخصصات الصحية (وزارة الصحة العامة)، وبروتوكولات تعقيم صارمة مع رعاية ثنائية اللغة لجميع أفراد الأسرة.",
      },
      tag: {
        en: "QCHP Compliant",
        ar: "معتمد من QCHP",
      },
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-slate-50/50 relative overflow-hidden" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={locale === "ar" ? "معاييرنا السريرية" : "Why Choose Lucida"}
          title={
            locale === "ar"
              ? "رعاية متخصصة، دقة سريرية، وراحة تامة بالدوحة"
              : "Specialized Care, Clinical Precision & Patient Comfort"
          }
          subtitle={
            locale === "ar"
              ? "نجمع بين الخبرة الطبية المتخصصة وأحدث تقنيات التشخيص الرقمي لضمان تجربة علاجية مطمئنة لجميع أفراد العائلة."
              : "Combining seasoned clinical expertise with modern digital diagnostics to ensure a gentle, reassuring visit for you and your family."
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {verifiedFacts.map((fact, index) => {
            const IconComponent = fact.icon;
            return (
              <Card
                key={index}
                variant="default"
                interactive
                className="p-6 sm:p-8 flex flex-col justify-between h-full bg-white border-slate-200/80 transition-all duration-300 hover:shadow-card hover:border-primary-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-navy-600 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-wider">
                      {fact.tag[locale]}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-navy-900 mb-2.5 leading-snug">
                    {fact.title[locale]}
                  </h3>
                  <p className="text-sm text-navy-600 leading-relaxed">
                    {fact.description[locale]}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-primary-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                  <span>{locale === "ar" ? "معيار موثوق" : "Verified Standard"}</span>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
