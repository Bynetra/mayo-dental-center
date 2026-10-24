"use client";

import React from "react";
import Image from "next/image";
import { Users, HeartHandshake, Calendar, PhoneCall, CheckCircle } from "lucide-react";
import { useLocale } from "@/lib/locale";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export function AboutCommitmentSection() {
  const { locale } = useLocale();

  const values = [
    {
      icon: Users,
      emoji: "👨‍⚕️",
      title: locale === "ar" ? "فريق طبي متخصص وذو خبرة" : "Specialized & Experienced Team",
      desc:
        locale === "ar"
          ? "يتكون مركز مايو لطب الأسنان من فريق متخصص وذي خبرة عالية للعناية بصحة أسنانك وأسنان جميع أفراد عائلتك، بتقديم خيارات علاجية ووقائية متطورة."
          : "Mayo Dental Center consists of a specialized and experienced team to care for the health of your teeth and the teeth of all your family members.",
    },
    {
      icon: HeartHandshake,
      emoji: "🏥",
      title: locale === "ar" ? "راحتك ورضاك أولويتنا" : "Your Comfort & Satisfaction First",
      desc:
        locale === "ar"
          ? "راحتك ورضاك هما أهم أولوياتنا. نسعى جاهدين لخلق بيئة مرحبة ومريحة تشعرك بالثقة والاطمئنان في الرعاية التي تتلقاها."
          : "Your comfort and satisfaction are our top priorities. We strive to create a welcoming environment where you feel comfortable and confident in the care you receive.",
    },
    {
      icon: Calendar,
      emoji: "📅",
      title: locale === "ar" ? "حجز مواعيد سهل وسريع" : "Seamless Appointment Booking",
      desc:
        locale === "ar"
          ? "جاهز لزيارتك القادمة؟ يمكنك حجز موعدك بسهولة عبر الموقع الإلكتروني أو التحدث معنا مباشرة عبر الواتساب على 0550220715 966+."
          : "Ready for your next visit? Easily book through our website, or speak directly with our coordination team on WhatsApp.",
    },
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column with Mask Reveal Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-100">
              <Image
                src="/images/generated/hero-clinic-ambiance.webp"
                alt="Mayo Dental Center welcoming clinic lounge"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />

              <div className="absolute bottom-6 inset-x-6 text-white">
                <span className="text-xs uppercase tracking-wider text-primary-300 font-bold block mb-1">
                  {locale === "ar" ? "رعاية صحية متكاملة" : "Comprehensive Dental Care"}
                </span>
                <p className="text-xl font-bold font-display">
                  {locale === "ar"
                    ? "الجبيل البلد — طريق الملك فيصل"
                    : "Jubail City Center — King Faisal Rd"}
                </p>
              </div>
            </div>

            {/* Clinic Operating Hours Badge */}
            <div className="absolute -bottom-6 -end-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 hidden sm:flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary-600 text-white flex items-center justify-center font-extrabold text-xs text-center leading-tight">
                9am<br />9pm
              </div>
              <div>
                <span className="text-xs font-bold text-navy-900 block">
                  {locale === "ar" ? "السبت – الخميس" : "Saturday – Thursday"}
                </span>
                <span className="text-[11px] text-slate-500">
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
                ? "رعاية صحية شاملة لك ولكافة أفراد عائلتك"
                : "Dedicated Dental Care for You & Your Whole Family"}
            </h2>

            <p className="text-navy-600 text-base sm:text-lg leading-relaxed mb-8">
              {locale === "ar"
                ? "في مركز مايو لطب الأسنان، نؤمن بأن زيارة طبيب الأسنان يجب أن تكون تجربة هادئة ومريحة ومطمئنة. موقعنا في الجبيل، فريقنا الطبي المتخصص هنا لمساعدتك في الحصول على ابتسامة صحية وجميلة والحفاظ عليها."
                : "At Mayo Dental Center, we believe that visiting the dentist should be a calm, reassuring, and completely comfortable experience. Conveniently located in Al-Jubail, our dentistry team is here to help you achieve and maintain a healthy, beautiful smile."}
            </p>

            {/* 3 Value Cards */}
            <div className="space-y-4">
              {values.map((v, i) => (
                <Card
                  key={i}
                  variant="default"
                  className="p-4 sm:p-5 hover:border-primary-300 transition-colors"
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
