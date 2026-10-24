"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  Download,
  CreditCard,
  ShieldCheck,
  CalendarCheck,
} from "lucide-react";
import { businessData } from "@/content/business";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { useLocale } from "@/lib/locale";

export default function PatientInfoPage() {
  const { locale } = useLocale();

  const checklist = [
    {
      title: locale === "ar" ? "الهوية الوطنية أو الإقامة" : "National ID or Iqama",
      desc:
        locale === "ar"
          ? "مطلوبة لفتح الملف الطبي الرسمي وتأكيد بيانات المريض في النظام الصحي."
          : "Required to establish your official clinical file and verify patient identity.",
    },
    {
      title: locale === "ar" ? "بطاقة التأمين الطبي المعتمد" : "Health Insurance Card",
      desc:
        locale === "ar"
          ? "إذا كنت مشمولاً بتأمين التعاونية أو ميدغلف، أحضر بطاقتك لتسجيل الموافقة المباشرة."
          : "Bring your active Tawuniya or Medgulf card/app for direct pre-approval processing.",
    },
    {
      title: locale === "ar" ? "قائمة الأدوية والتاريخ الطبي" : "Medical History & Current Medications",
      desc:
        locale === "ar"
          ? "يرجى إبلاغ الطبيب بأي أمراض مزمنة (كالسكري أو الضغط) أو أدوية سيولة وحساسية."
          : "Inform our clinical team of any existing conditions, blood thinners, or medication allergies.",
    },
    {
      title: locale === "ar" ? "استمارة مريض جديد معبأة مسبقاً" : "Completed Intake Form (Optional)",
      desc:
        locale === "ar"
          ? "يمكنك تحميل الاستمارة وتعبئتها لتفادي الانتظار في صالة الاستقبال."
          : "Download and fill the PDF registration form beforehand to save time at check-in.",
    },
  ];

  return (
    <div className="py-16 sm:py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={locale === "ar" ? "دليل المراجعين" : "Patient Information"}
          title={
            locale === "ar"
              ? "معلومات التأمين، الدفع، ودليل زيارتك الأولى"
              : "Insurance, Payments & First-Visit Guide"
          }
          subtitle={
            locale === "ar"
              ? "كل ما يهمك معرفته لتسهيل زيارتك لمركز مايو لطب الأسنان بالجبيل."
              : "Everything you need to know about preparing for your appointment, billing options, and registration."
          }
        />

        {/* 1. New Patient Registration Document Download Banner */}
        <div className="p-8 rounded-3xl bg-primary-900 text-white shadow-xl mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-primary-300 shrink-0">
              <FileText className="w-7 h-7" />
            </div>
            <div>
              <Badge variant="primary" className="bg-white/20 text-white border-white/30 mb-2">
                {locale === "ar" ? "تحميل فوري" : "Official Patient Intake Form"}
              </Badge>
              <h2 className="text-xl sm:text-2xl font-bold font-display mb-1">
                {locale === "ar" ? "استمارة تسجيل مريض جديد (PDF)" : "Download New Patient Registration Form"}
              </h2>
              <p className="text-sm text-primary-200 max-w-xl">
                {locale === "ar"
                  ? "قم بتحميل الاستمارة الرسمية لمركز مايو لطب الأسنان وتعبئتها مسبقاً لتقليل وقت الانتظار عند الوصول."
                  : "Save time at your initial consultation. Download, print, and fill our official intake sheet before arriving."}
              </p>
            </div>
          </div>

          <a
            href="/docs/new-patient-registration.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0"
          >
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-navy-950 hover:bg-slate-100 font-bold shadow-md"
              icon={<Download className="w-5 h-5" />}
            >
              {locale === "ar" ? "تحميل الاستمارة (PDF)" : "Download PDF (567 KB)"}
            </Button>
          </a>
        </div>

        {/* 2. First Visit Checklist */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-card p-6 sm:p-10 mb-16">
          <h3 className="text-2xl font-bold text-navy-950 font-display mb-2">
            {locale === "ar" ? "قائمة ما يجب إحضاره في زيارتك الأولى" : "Your First-Visit Checklist"}
          </h3>
          <p className="text-sm text-navy-600 mb-8 max-w-2xl">
            {locale === "ar"
              ? "لضمان سرعة تسجيل ملفك وتقديم الرعاية الطبية الملائمة دون تأخير:"
              : "To ensure quick registration and smooth clinical onboarding, please prepare the following:"}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {checklist.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="w-7 h-7 rounded-full bg-primary-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <h4 className="text-base font-bold text-navy-950 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Insurance & Payment Policies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Insurance */}
          <Card variant="default" className="p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-6 h-6 text-primary-600" />
              <h3 className="text-xl font-bold text-navy-950">
                {locale === "ar" ? "التأمين الطبي المعتمد" : "Accepted Health Insurance"}
              </h3>
            </div>
            <p className="text-sm text-navy-600 leading-relaxed mb-6">
              {locale === "ar"
                ? "نقبل تأمين التعاونية وميدغلف مباشرة في العيادة. كما نوفر لك تقارير طبية وفواتير ضريبية معتمدة لتقديمها لأي شركة تأمين أخرى."
                : "We are an approved network provider for Tawuniya and Medgulf. For other providers, we provide full itemized claims documentation."}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {businessData.insurance.map((ins) => (
                <div key={ins.id} className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
                  <div className="relative w-28 h-10 mx-auto mb-2">
                    <Image src={ins.logo} alt={ins.name} fill className="object-contain" />
                  </div>
                  <span className="text-xs font-bold text-navy-900 block">{ins.name}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Payment & Tabby */}
          <Card variant="default" className="p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="w-6 h-6 text-accent-600" />
              <h3 className="text-xl font-bold text-navy-950">
                {locale === "ar" ? "طرق السداد وتقسيط تابي" : "Payments & Tabby Installments"}
              </h3>
            </div>
            <p className="text-sm text-navy-600 leading-relaxed mb-6">
              {locale === "ar"
                ? "يمكنك سداد العلاج ببطاقات فيزا وماستركارد، أو تقسيط كامل الفاتورة على 4 دفعات شهرية متساوية عبر تابي بدون أي فوائد."
                : "Pay comfortably with Visa, Mastercard, or split your total treatment cost into 4 monthly installments with Tabby."}
            </p>
            <div className="grid grid-cols-3 gap-3">
              {businessData.paymentMethods.map((pay) => (
                <div key={pay.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
                  <div className="relative w-16 h-8 mx-auto mb-1.5">
                    <Image src={pay.logo} alt={pay.name} fill className="object-contain" />
                  </div>
                  <span className="text-xs font-bold text-navy-900 block truncate">{pay.name}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Booking CTA */}
        <div className="text-center">
          <Link href="/book">
            <Button size="lg" icon={<CalendarCheck className="w-5 h-5" />}>
              {locale === "ar" ? "احجز موعدك الآن" : "Schedule Your Visit"}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

