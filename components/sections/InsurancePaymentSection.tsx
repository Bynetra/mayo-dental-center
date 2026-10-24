"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FileText, Download, ShieldCheck, CreditCard, Sparkles, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { businessData } from "@/content/business";
import { useLocale } from "@/lib/locale";

export function InsurancePaymentSection() {
  const { locale } = useLocale();

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden" id="insurance">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={locale === "ar" ? "التأمين والدفع" : "Coverage & Payments"}
          title={locale === "ar" ? "خيارات التأمين وخطط الدفع الميسرة" : "Insurance & Payment Options"}
          subtitle={
            locale === "ar"
              ? "في مركز مايو لطب الأسنان، نسعى جاهدين لجعل الرعاية الصحية ميسرة وفي متناول الجميع."
              : "At Mayo Dental Center, we strive to make healthcare accessible with flexible payment plans and insurance coverage."
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Left Card: Insurance Network */}
          <div className="lg:col-span-6 flex flex-col">
            <Card variant="default" className="p-6 sm:p-8 flex flex-col justify-between h-full border-primary-100">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-950">
                      {locale === "ar" ? "شركاء التأمين الطبي" : "Direct Insurance Partners"}
                    </h3>
                    <span className="text-xs text-primary-700 font-semibold">
                      {locale === "ar" ? "تغطية مباشرة بدون تعقيد" : "Direct billing without hassle"}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-navy-600 leading-relaxed mb-6">
                  {locale === "ar"
                    ? "نعمل بشكل وثيق مع شركائنا في التأمين لتسهيل حصولك على الرعاية المطلوبة. كما نوفر الفواتير والتقارير الطبية الكاملة لأي تأمين خارج الشبكة للاسترداد السريع."
                    : "We work directly with major health insurers to offer seamless coverage. Comprehensive claims documentation is also provided for out-of-network reimbursement."}
                </p>

                {/* Insurance Logos Row */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {businessData.insurance.map((ins) => (
                    <div
                      key={ins.id}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center justify-center text-center"
                    >
                      <div className="relative w-28 h-10 mb-2">
                        <Image
                          src={ins.logo}
                          alt={ins.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-xs font-bold text-navy-900">
                        {locale === "ar" ? ins.nameAr : ins.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 text-xs text-navy-500 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-600 shrink-0" />
                <span>
                  {locale === "ar"
                    ? "نعمل باستمرار على إضافة شركاء تأمين جدد"
                    : "Constantly expanding our approved provider network"}
                </span>
              </div>
            </Card>
          </div>

          {/* Right Card: Flexible Payment & Tabby Installments */}
          <div className="lg:col-span-6 flex flex-col">
            <Card variant="default" className="p-6 sm:p-8 flex flex-col justify-between h-full border-accent-100">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent-50 text-accent-700 flex items-center justify-center">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-950">
                      {locale === "ar" ? "طرق الدفع والتقسيط عبر تابي" : "Payment Methods & Tabby"}
                    </h3>
                    <span className="text-xs text-accent-700 font-semibold">
                      {locale === "ar" ? "قسّم فاتورتك على 4 دفعات" : "Split into 4 interest-free payments"}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-navy-600 leading-relaxed mb-6">
                  {locale === "ar"
                    ? "نقبل كافة البطاقات الائتمانية العالمية (فيزا وماستركارد)، بالإضافة إلى خدمة 'تابي' لتقسيط تكاليف العلاج دون أي فوائد أو أعباء مالية مفاجئة."
                    : "We accept Visa, Mastercard, and Tabby installment options. Split your dental treatments into manageable, interest-free monthly payments."}
                </p>

                {/* Payment Logos Row */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {businessData.paymentMethods.map((pay) => (
                    <div
                      key={pay.id}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center justify-center text-center"
                    >
                      <div className="relative w-20 h-8 mb-1.5">
                        <Image
                          src={pay.logo}
                          alt={pay.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-xs font-bold text-navy-900 truncate max-w-full">
                        {locale === "ar" ? pay.nameAr : pay.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 text-xs text-navy-500 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent-600 shrink-0" />
                <span>
                  {locale === "ar"
                    ? "اختر تابي عند الاستقبال وقسّم الدفعات بسهولة"
                    : "Zero interest or hidden fees when splitting with Tabby"}
                </span>
              </div>
            </Card>
          </div>
        </div>

        {/* New Patient Registration Document Download Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-primary-900 to-navy-950 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-primary-300 shrink-0 mt-1">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-display mb-1">
                {locale === "ar" ? "استمارة تسجيل مريض جديد" : "New Patient Registration Form"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                {locale === "ar"
                  ? "وفر وقتك في العيادة عبر تحميل الاستمارة الرسمية وتعبئتها مسبقاً قبل موعدك الأول."
                  : "Save time at your first visit. Download and complete our official new patient registration form before arriving."}
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
              icon={<Download className="w-4 h-4" />}
            >
              {locale === "ar" ? "تحميل الاستمارة (PDF)" : "Download Form (PDF)"}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
