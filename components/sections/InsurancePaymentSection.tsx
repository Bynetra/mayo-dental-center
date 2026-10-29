"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, CreditCard, Sparkles, CheckCircle2, Building2 } from "lucide-react";
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
          title={locale === "ar" ? "خيارات التأمين الصحي وخطط الدفع بالدوحة" : "Insurance & Payment Options in Qatar"}
          subtitle={
            locale === "ar"
              ? "في مركز لوسيدا لطب الأسنان، نسعى جاهدين لجعل رعاية الأسنان المتميزة في متناول الجميع مع خيارات سداد مرنة."
              : "At Lucida Dental Center, we strive to make premier dental care accessible with transparent billing, direct insurance, and flexible installment plans."
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
                      {locale === "ar" ? "شركاء التأمين الطبي في قطر" : "Qatar Health Insurance Support"}
                    </h3>
                    <span className="text-xs text-primary-700 font-semibold">
                      {locale === "ar" ? "تغطية مباشرة ودعم مطالبات الاسترداد" : "Direct billing & reimbursement claims"}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-navy-600 leading-relaxed mb-6">
                  {locale === "ar"
                    ? "نوفر المطالبات الإلكترونية المباشرة للمشتركين المؤهلين ضمن شبكة الكوت (AlKoot). كما يزودك فريق الاستقبال لدينا بفواتير وتقارير طبية معتمدة ومفصلة لتقديمها لشركات QLM، ميدنت، نكست كير، وكافة برامج التأمين الخاصة للاسترداد السريع."
                    : "We facilitate direct insurance billing for eligible policyholders under the AlKoot healthcare network. For QLM, Mednet, Nextcare, and corporate plans, our desk provides standardized, stamped diagnostic claims documentation for rapid reimbursement."}
                </p>

                {/* Insurance Providers Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                  {businessData.insurance.map((ins) => (
                    <div
                      key={ins.id}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Building2 className="w-4 h-4 text-primary-600 shrink-0" />
                        <span className="text-sm font-bold text-navy-900">
                          {locale === "ar" ? ins.nameAr : ins.name}
                        </span>
                      </div>
                      {ins.note && (
                        <p className="text-[11px] text-navy-600 leading-tight">
                          {ins.note[locale]}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 text-xs text-navy-500 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-600 shrink-0" />
                <span>
                  {locale === "ar"
                    ? "فريقنا الطبي مستعد لمساعدتك في استيفاء متطلبات شركة تأمينك"
                    : "Our front desk assists with claim form completion and diagnostic codes"}
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
                      {locale === "ar" ? "طرق الدفع والتقسيط عبر تابي" : "Payment Methods & Tabby Installments"}
                    </h3>
                    <span className="text-xs text-accent-700 font-semibold">
                      {locale === "ar" ? "قسّم فاتورتك على 4 دفعات بدون فوائد" : "Split into 4 interest-free monthly payments"}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-navy-600 leading-relaxed mb-6">
                  {locale === "ar"
                    ? "نسهل عليك إجراءات السداد في العيادة بقبول جميع بطاقات الصراف الآلي القطرية (نافس)، بطاقات فيزا وماستركارد، بالإضافة لخيار التقسيط المريح عبر تابي لتوزيع تكلفة العلاج على 4 دفعات دون أي فوائد أو رسوم خفية."
                    : "We accept all major payment systems at our reception, including Qatari NAPS debit cards, Visa, and Mastercard. Additionally, our Tabby partnership lets you comfortably split treatment costs into 4 interest-free payments."}
                </p>

                {/* Payment Methods Badges */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {businessData.paymentMethods.map((pm) => (
                    <div
                      key={pm.id}
                      className={`p-3.5 rounded-xl border flex items-center gap-2.5 ${
                        pm.isInstallment
                          ? "bg-accent-50/50 border-accent-200"
                          : "bg-slate-50 border-slate-200/80"
                      }`}
                    >
                      <CreditCard className="w-4 h-4 text-primary-600 shrink-0" />
                      <div>
                        <span className="text-xs font-bold text-navy-900 block">
                          {locale === "ar" ? pm.nameAr : pm.name}
                        </span>
                        {pm.isInstallment && (
                          <span className="text-[10px] font-bold text-accent-700">
                            {locale === "ar" ? "تقسيط بدون فوائد" : "0% Interest"}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-navy-500">
                  {locale === "ar" ? "تسعير شفاف دون أي رسوم مخفية" : "Transparent clinical fees with no surprise costs"}
                </span>
                <Link href="/book">
                  <Button size="sm">
                    {locale === "ar" ? "احجز استشارتك" : "Book Visit"}
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
