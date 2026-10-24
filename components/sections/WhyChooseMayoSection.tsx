"use client";

import React from "react";
import { ShieldCheck, Clock, HeartHandshake, MapPin, Sparkles, AlertCircle } from "lucide-react";
import { useLocale } from "@/lib/locale";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export function WhyChooseMayoSection() {
  const { locale } = useLocale();

  // STRICTLY ALLOWED FACTS FROM CLIENT SITE & OFFICIAL DATA ONLY
  const verifiedFacts = [
    {
      icon: MapPin,
      title: {
        en: "Central Jubail City Center Location",
        ar: "موقع مركزي في قلب الجبيل",
      },
      description: {
        en: "Conveniently located on King Faisal Ibn Abd Al Aziz Road in Jubail City Center, with accessible patient parking.",
        ar: "موقع استراتيجي وميسر على طريق الملك فيصل بن عبد العزيز في الجبيل البلد مع مواقف سيارات مريحة للمراجعين.",
      },
      tag: {
        en: "King Faisal Rd",
        ar: "طريق الملك فيصل",
      },
    },
    {
      icon: Clock,
      title: {
        en: "Convenient 12-Hour Daily Schedule",
        ar: "ساعات عمل يومية مرنة وممتدة",
      },
      description: {
        en: "Open Saturday through Thursday from 9:00 AM to 9:00 PM, providing comfortable evening appointments after work.",
        ar: "نستقبلكم من السبت إلى الخميس من الساعة 9:00 صباحاً وحتى 9:00 مساءً لتناسب مواعيدكم بعد ساعات العمل.",
      },
      tag: {
        en: "Sat–Thu 9am–9pm",
        ar: "السبت–الخميس 9ص–9م",
      },
    },
    {
      icon: HeartHandshake,
      title: {
        en: "Tawuniya & Medgulf Insurance Direct",
        ar: "تأمين التعاونية وميدغلف مباشرة",
      },
      description: {
        en: "Direct electronic billing for approved dental procedures under Tawuniya and Medgulf healthcare networks.",
        ar: "مطالبات تأمينية إلكترونية مباشرة للإجراءات المعتمدة ضمن شبكتي التأمين الصحي التعاونية وميدغلف.",
      },
      tag: {
        en: "Insurance Approved",
        ar: "تأمين معتمد",
      },
    },
    {
      icon: Sparkles,
      title: {
        en: "Tabby 4-Month Split Payments",
        ar: "تقسيط تابي على 4 دفعات",
      },
      description: {
        en: "Split your dental treatment cost into 4 monthly payments with zero interest or hidden fees via Tabby, Visa, or Mastercard.",
        ar: "إمكانية تقسيط تكلفة علاج أسنانك على 4 دفعات شهرية ميسرة بدون أي فوائد عبر تابي، بالإضافة للدفع بفيزا وماستركارد.",
      },
      tag: {
        en: "Tabby 4x",
        ar: "تابي 4 دفعات",
      },
    },
    {
      icon: AlertCircle,
      title: {
        en: "Emergency Dental Appointments",
        ar: "مواعيد طوارئ الأسنان العاجلة",
      },
      description: {
        en: "Dedicated urgent care triage for acute toothaches, sudden trauma, and dental swelling during clinic hours and via WhatsApp.",
        ar: "رعاية عاجلة ومخصصة لحالات ألم الأسنان الحاد، والكسور الطارئة، والانتفاخات خلال ساعات الدوام وعبر الواتساب.",
      },
      tag: {
        en: "Urgent Relief",
        ar: "إغاثة عاجلة",
      },
    },
    {
      icon: ShieldCheck,
      title: {
        en: "New Patients & Whole Families Welcome",
        ar: "نرحب بالمرضى الجدد وكافة أفراد العائلة",
      },
      description: {
        en: "Bilingual English and Arabic dental services covering routine checkups, root canal, orthodontics, teeth whitening, and implants.",
        ar: "خدمات أسنان متكاملة باللغتين العربية والإنجليزية تشمل الفحص الدوري، علاج الجذور، التقويم، التبييض وزراعة الأسنان.",
      },
      tag: {
        en: "Bilingual Care",
        ar: "عربي / إنجليزي",
      },
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50/70 border-y border-slate-200/70 relative overflow-hidden" id="why-mayo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={locale === "ar" ? "معلومات المركز" : "Clinic Overview"}
          title={
            locale === "ar"
              ? "خدمات ورعاية تلبي احتياجاتك في الجبيل"
              : "Dedicated Dental Care in Jubail"
          }
          subtitle={
            locale === "ar"
              ? "موقع مركزي، ساعات عمل ممتدة، وتغطية تأمينية معتمدة لضمان راحتك."
              : "Convenient location, extended hours, and approved insurance coverage for your peace of mind."
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {verifiedFacts.map((r, i) => {
            const Icon = r.icon;
            return (
              <Card
                key={i}
                variant="default"
                className="p-5 sm:p-6 hover:border-primary-400 transition-colors flex flex-col justify-between bg-white"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center border border-primary-200/60 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200/80">
                      {r.tag[locale]}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-navy-950 mb-2 font-display">
                    {r.title[locale]}
                  </h3>

                  <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                    {r.description[locale]}
                  </p>
                </div>

                <div className="pt-3 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-primary-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-600" />
                  <span>{locale === "ar" ? "بيانات موثقة من المركز" : "Official Clinic Information"}</span>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
