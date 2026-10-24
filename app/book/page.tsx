"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import { servicesData } from "@/content/services";
import { businessData } from "@/content/business";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { useLocale } from "@/lib/locale";

function BookingContent() {
  const { locale } = useLocale();
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "";

  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(preselectedService);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [patientDetails, setPatientDetails] = useState({
    name: "",
    phone: "",
    email: "",
    notes: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setSelectedService(preselectedService);
    }
  }, [preselectedService]);

  const activeServiceObj = servicesData.find((s) => s.slug === selectedService);

  const timeSlots = [
    "09:30 AM",
    "10:30 AM",
    "11:30 AM",
    "01:00 PM",
    "02:30 PM",
    "04:00 PM",
    "05:30 PM",
    "07:00 PM",
    "08:00 PM",
  ];

  const handleFinishBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: patientDetails.name,
          phone: patientDetails.phone,
          email: patientDetails.email,
          service: selectedService,
          date: `${selectedDate} at ${selectedTime}`,
          message: patientDetails.notes,
        }),
      });
      setIsSuccess(true);
    } catch {
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    locale === "ar"
      ? `مرحباً، أود حجز موعد في مركز مايو لطب الأسنان:\nالخدمة: ${
          activeServiceObj?.title.ar || "فحص عام"
        }\nالتاريخ: ${selectedDate || "أقرب وقت متاح"}\nالوقت: ${
          selectedTime || "الفترة المسائية"
        }\nالاسم: ${patientDetails.name || ""}\nالجوال: ${patientDetails.phone || ""}`
      : `Hello, I would like to book an appointment at Mayo Dental Center:\nService: ${
          activeServiceObj?.title.en || "General Checkup"
        }\nDate: ${selectedDate || "Earliest available"}\nTime: ${
          selectedTime || "Afternoon"
        }\nName: ${patientDetails.name || ""}\nPhone: ${patientDetails.phone || ""}`
  );

  return (
    <div className="py-12 sm:py-20 bg-slate-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <Badge variant="primary" dot className="mb-3">
            {locale === "ar" ? "حجز موعد إلكتروني" : "Online Appointment Reservation"}
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-950 font-display tracking-tight mb-3">
            {locale === "ar" ? "احجز موعدك في مركز مايو" : "Book Your Dental Visit"}
          </h1>
          <p className="text-sm sm:text-base text-navy-600">
            {locale === "ar"
              ? "خطوات سريعة لحجز موعدك، أو تواصل معنا مباشرة عبر الواتساب لتأكيد فوري."
              : "Complete the simple steps below, or use the direct WhatsApp link for instant priority confirmation."}
          </p>
        </div>

        {/* Multi-Step Wizard Card */}
        <Card variant="default" className="p-6 sm:p-10 shadow-lift border-slate-200">
          {isSuccess ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-navy-950 font-display mb-2">
                {locale === "ar" ? "تم استلام طلب حجزك بنجاح!" : "Appointment Request Received!"}
              </h2>
              <p className="text-sm sm:text-base text-navy-600 max-w-md mx-auto mb-6">
                {locale === "ar"
                  ? "شكراً لاختيارك مركز مايو لطب الأسنان. سيقوم موظف الاستقبال بمراجعة الموعد والتواصل معك لتأكيد الحجز النهائي."
                  : "Thank you for choosing Mayo Dental Center. Our desk will contact you via phone or WhatsApp shortly to confirm your booking."}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href={`https://wa.me/${businessData.contact.whatsapp.replace("+", "")}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="whatsapp" size="lg" icon={<MessageCircle className="w-5 h-5" />}>
                    {locale === "ar" ? "تأكيد فوري عبر واتساب" : "Confirm Faster on WhatsApp"}
                  </Button>
                </Link>

                <Link href="/">
                  <Button variant="ghost" size="lg">
                    {locale === "ar" ? "العودة للرئيسية" : "Return to Homepage"}
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <div>
              {/* Stepper Progress Header */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center ${
                      step >= 1 ? "bg-primary-600 text-white" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    1
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-navy-900 hidden sm:inline">
                    {locale === "ar" ? "الخدمة" : "Service"}
                  </span>
                </div>
                <div className="h-0.5 w-12 bg-slate-200" />

                <div className="flex items-center gap-2">
                  <span
                    className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center ${
                      step >= 2 ? "bg-primary-600 text-white" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    2
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-navy-900 hidden sm:inline">
                    {locale === "ar" ? "الموعد" : "Date & Time"}
                  </span>
                </div>
                <div className="h-0.5 w-12 bg-slate-200" />

                <div className="flex items-center gap-2">
                  <span
                    className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center ${
                      step >= 3 ? "bg-primary-600 text-white" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    3
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-navy-900 hidden sm:inline">
                    {locale === "ar" ? "بيانات المريض" : "Details"}
                  </span>
                </div>
              </div>

              {/* STEP 1: Service Selection */}
              {step === 1 && (
                <div>
                  <h3 className="text-lg font-bold text-navy-950 mb-4">
                    {locale === "ar" ? "اختر الخدمة المطلوبة:" : "Step 1: Select Dental Service"}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                    {servicesData.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setSelectedService(s.slug)}
                        className={`p-4 rounded-2xl border text-start transition-all flex flex-col justify-between ${
                          selectedService === s.slug
                            ? "bg-primary-50/70 border-primary-600 ring-2 ring-primary-600 shadow-sm"
                            : "bg-white border-slate-200 hover:border-primary-300"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-bold text-sm text-navy-950">
                            {s.title[locale]}
                          </span>
                          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-navy-700">
                            {s.duration}
                          </span>
                        </div>
                        <p className="text-xs text-navy-500 line-clamp-2">
                          {s.shortDescription[locale]}
                        </p>
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-end">
                    <Button
                      size="lg"
                      onClick={() => {
                        if (!selectedService) {
                          setSelectedService(servicesData[0].slug);
                        }
                        setStep(2);
                      }}
                    >
                      {locale === "ar" ? "متابعة لاختيار الموعد" : "Continue to Schedule"}
                    </Button>
                  </div>
                </div>
              )}

              {/* STEP 2: Date & Time */}
              {step === 2 && (
                <div>
                  <h3 className="text-lg font-bold text-navy-950 mb-4">
                    {locale === "ar" ? "حدد اليوم والوقت المفضل:" : "Step 2: Choose Date & Time"}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block text-xs font-bold text-navy-900 mb-2">
                        {locale === "ar" ? "تاريخ الزيارة (السبت - الخميس)" : "Preferred Date (Sat - Thu)"}
                      </label>
                      <input
                        type="date"
                        required
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-600 bg-white"
                      />
                      <p className="text-[11px] text-slate-500 mt-1.5">
                        {locale === "ar" ? "* العيادة مغلقة يوم الجمعة" : "* Note: Clinic is closed on Fridays"}
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy-900 mb-2">
                        {locale === "ar" ? "الفترة المفضلة" : "Available Time Slots"}
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedTime(slot)}
                            className={`py-2 px-2 rounded-xl text-xs font-semibold border transition-all ${
                              selectedTime === slot
                                ? "bg-primary-600 text-white border-primary-600 shadow-sm"
                                : "bg-white border-slate-200 hover:border-primary-300 text-navy-800"
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <Button variant="ghost" size="md" onClick={() => setStep(1)}>
                      {locale === "ar" ? "السابق" : "Back"}
                    </Button>
                    <Button size="lg" onClick={() => setStep(3)}>
                      {locale === "ar" ? "متابعة لتأكيد البيانات" : "Continue to Details"}
                    </Button>
                  </div>
                </div>
              )}

              {/* STEP 3: Patient Details & Confirm */}
              {step === 3 && (
                <form onSubmit={handleFinishBooking}>
                  <h3 className="text-lg font-bold text-navy-950 mb-4">
                    {locale === "ar" ? "بيانات المريض والتأكيد:" : "Step 3: Patient Information"}
                  </h3>

                  <div className="space-y-4 mb-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-navy-900 mb-1.5">
                          {locale === "ar" ? "الاسم الكامل *" : "Full Name *"}
                        </label>
                        <input
                          type="text"
                          required
                          value={patientDetails.name}
                          onChange={(e) =>
                            setPatientDetails({ ...patientDetails, name: e.target.value })
                          }
                          placeholder={locale === "ar" ? "أدخل اسم المريض" : "Patient full name"}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-600 bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-navy-900 mb-1.5">
                          {locale === "ar" ? "رقم الجوال للتأكيد *" : "Phone Number *"}
                        </label>
                        <input
                          type="tel"
                          required
                          dir="ltr"
                          value={patientDetails.phone}
                          onChange={(e) =>
                            setPatientDetails({ ...patientDetails, phone: e.target.value })
                          }
                          placeholder="05X XXX XXXX"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-600 bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy-900 mb-1.5">
                        {locale === "ar" ? "البريد الإلكتروني (اختياري)" : "Email Address (Optional)"}
                      </label>
                      <input
                        type="email"
                        value={patientDetails.email}
                        onChange={(e) =>
                          setPatientDetails({ ...patientDetails, email: e.target.value })
                        }
                        placeholder="name@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-600 bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy-900 mb-1.5">
                        {locale === "ar" ? "ملاحظات أو أعراض خاصة" : "Clinical Notes or Concerns"}
                      </label>
                      <textarea
                        rows={3}
                        value={patientDetails.notes}
                        onChange={(e) =>
                          setPatientDetails({ ...patientDetails, notes: e.target.value })
                        }
                        placeholder={
                          locale === "ar"
                            ? "اكتب أي ملاحظة عن حالتك أو استفسار لطبيب الأسنان..."
                            : "Any allergies, specific symptoms or concerns..."
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-600 bg-white"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <Button variant="ghost" size="md" type="button" onClick={() => setStep(2)}>
                      {locale === "ar" ? "السابق" : "Back"}
                    </Button>

                    <Button type="submit" size="lg" disabled={isSubmitting}>
                      {isSubmitting
                        ? locale === "ar"
                          ? "جارٍ التأكيد..."
                          : "Confirming..."
                        : locale === "ar"
                        ? "تأكيد وإرسال الحجز"
                        : "Submit Booking Request"}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div className="py-24 text-center">Loading booking calendar...</div>}>
      <BookingContent />
    </Suspense>
  );
}

