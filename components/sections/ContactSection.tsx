"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
} from "lucide-react";
import { businessData } from "@/content/business";
import { servicesData } from "@/content/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { useLocale } from "@/lib/locale";
import { isClinicOpenNow } from "@/lib/utils";

export function ContactSection() {
  const { locale } = useLocale();
  const [isOpenNow, setIsOpenNow] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    message: "",
    website: "", // Honeypot field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [whatsappFallbackUrl, setWhatsappFallbackUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showMap, setShowMap] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapFailed, setMapFailed] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsOpenNow(isClinicOpenNow());

    if (!mapRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    observer.observe(mapRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!showMap || mapLoaded || mapFailed) return;
    const timeout = setTimeout(() => {
      setMapFailed(true);
    }, 8000);
    return () => clearTimeout(timeout);
  }, [showMap, mapLoaded, mapFailed]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setErrorMessage(
        locale === "ar"
          ? "يرجى إدخال الاسم ورقم الجوال للتواصل."
          : "Please enter your name and contact phone number."
      );
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      // Send to contact API
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setIsSuccess(true);
        if (data.whatsappUrl) {
          setWhatsappFallbackUrl(data.whatsappUrl);
        }
      } else {
        setErrorMessage(data.message || (locale === "ar" ? "حدث خطأ أثناء الإرسال" : "Submission failed"));
      }
    } catch {
      // Local fallback
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={locale === "ar" ? "تواصل معنا" : "Contact & Visit"}
          title={locale === "ar" ? "تفضل بزيارتنا في الوعب أو راسلنا" : "Get In Touch & Visit Our Clinic"}
          subtitle={
            locale === "ar"
              ? "فريق الاستقبال والتنسيق الطبي بمركز لوسيدا متاح دائماً للإجابة على استفساراتكم وترتيب مواعيدكم."
              : "Reach out with any questions or find driving directions to our clinic on Bu Hasa Street in Al Waab, Doha."
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Form Card */}
          <div className="lg:col-span-7">
            <Card variant="default" className="p-6 sm:p-8">
              {isSuccess ? (
                <div className="text-center py-12 px-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-950 font-display mb-2">
                    {locale === "ar"
                      ? "شكراً لتواصلك معنا!"
                      : "Thank You for Reaching Out!"}
                  </h3>
                  <p className="text-sm sm:text-base text-navy-600 max-w-md mx-auto mb-6">
                    {locale === "ar"
                      ? "تم استلام طلبك بنجاح وسيقوم فريق الاستقبال الطبي بالاتصال بك أو مراسلتك عبر الواتساب لتأكيد موعدك."
                      : "We have received your message. Our reception team in Al Waab will reach out promptly via phone or WhatsApp to assist you."}
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    {whatsappFallbackUrl && (
                      <a
                        href={whatsappFallbackUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <Button
                          variant="whatsapp"
                          size="md"
                          icon={<MessageCircle className="w-4 h-4" />}
                        >
                          {locale === "ar" ? "تأكيد فوري عبر الواتساب" : "Confirm on WhatsApp"}
                        </Button>
                      </a>
                    )}
                    <Button
                      onClick={() => {
                        setIsSuccess(false);
                        setFormData({
                          name: "",
                          phone: "",
                          email: "",
                          service: "",
                          date: "",
                          message: "",
                          website: "",
                        });
                        setWhatsappFallbackUrl("");
                      }}
                      variant="secondary"
                      size="md"
                    >
                      {locale === "ar" ? "إرسال رسالة أخرى" : "Send Another Message"}
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {/* Spam Protection Honeypot field */}
                  <div className="hidden opacity-0 pointer-events-none absolute -left-[9999px]" aria-hidden="true">
                    <label htmlFor="website-field">Leave blank</label>
                    <input
                      id="website-field"
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    />
                  </div>
                  <div className="border-b border-slate-100 pb-4 mb-4">
                    <h3 className="text-xl font-bold text-navy-950">
                      {locale === "ar" ? "أرسل طلب استشارة فورية" : "Send Us an Enquiry"}
                    </h3>
                    <p className="text-xs text-navy-500 mt-1">
                      {locale === "ar"
                        ? "املأ النموذج التالي وسيقوم فريقنا بالرد عليك لتأكيد الموعد المناسب."
                        : "Fill in the details below and our clinic reception will contact you shortly."}
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold text-navy-900 mb-1.5">
                        {locale === "ar" ? "الاسم الكامل *" : "Full Name *"}
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={locale === "ar" ? "أدخل اسمك الكريم" : "Enter full name"}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-600 bg-white"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold text-navy-900 mb-1.5">
                        {locale === "ar" ? "رقم الجوال *" : "Phone Number *"}
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        dir="ltr"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+974 55XX XXXX"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-600 bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold text-navy-900 mb-1.5">
                        {locale === "ar" ? "البريد الإلكتروني (اختياري)" : "Email Address (Optional)"}
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-600 bg-white"
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label htmlFor="contact-service" className="block text-xs font-bold text-navy-900 mb-1.5">
                        {locale === "ar" ? "الخدمة المطلوبة" : "Interested Treatment"}
                      </label>
                      <select
                        id="contact-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-600 bg-white"
                      >
                        <option value="">
                          {locale === "ar" ? "-- اختر العلاج المطلوب --" : "-- Select a treatment --"}
                        </option>
                        {servicesData.map((s) => (
                          <option key={s.id} value={s.slug}>
                            {s.title[locale]} ({s.duration})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label htmlFor="contact-date" className="block text-xs font-bold text-navy-900 mb-1.5">
                      {locale === "ar" ? "الموعد المفضل (اختياري)" : "Preferred Appointment Date (Optional)"}
                    </label>
                    <input
                      id="contact-date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-600 bg-white"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold text-navy-900 mb-1.5">
                      {locale === "ar" ? "الرسالة أو الأعراض" : "Message or Notes"}
                    </label>
                    <textarea
                      id="contact-message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={
                        locale === "ar"
                          ? "اكتب لنا باختصار أي تفاصيل أو أوقات تناسبك..."
                          : "Describe how we can help or specific timing needs..."
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-600 bg-white"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                    icon={<Send className="w-4 h-4" />}
                  >
                    {isSubmitting
                      ? locale === "ar"
                        ? "جارٍ الإرسال..."
                        : "Sending..."
                      : locale === "ar"
                      ? "إرسال طلب الاستشارة"
                      : "Send Enquiry"}
                  </Button>
                </form>
              )}
            </Card>
          </div>

          {/* Right Column: Contact Details, Live Operating Hours & Embedded Map */}
          <div className="lg:col-span-5 space-y-6">
            {/* Live Operating Status Card */}
            <Card variant="default" className="p-6">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-primary-600" />
                  <h3 className="text-base font-bold text-navy-950">
                    {locale === "ar" ? "أوقات العمل الرسمية" : "Clinic Operating Hours"}
                  </h3>
                </div>
                <Badge variant={isOpenNow ? "success" : "neutral"} dot>
                  {isOpenNow
                    ? locale === "ar"
                      ? "مفتوح الآن"
                      : "Open Now"
                    : locale === "ar"
                    ? "مغلق الآن"
                    : "Closed Now"}
                </Badge>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm">
                <div className="flex justify-between items-center py-1">
                  <span className="font-semibold text-navy-900">
                    {locale === "ar" ? "السبت – الأربعاء:" : "Saturday – Wednesday:"}
                  </span>
                  <div className="text-end">
                    <span className="text-primary-700 font-bold block">
                      9:00 AM – 1:00 PM
                    </span>
                    <span className="text-primary-700 font-bold block">
                      4:30 PM – 8:30 PM
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center py-1 border-t border-slate-100">
                  <span className="font-semibold text-navy-900">
                    {locale === "ar" ? "يوم الخميس:" : "Thursday:"}
                  </span>
                  <span className="text-primary-700 font-bold">
                    9:00 AM – 5:00 PM
                  </span>
                </div>

                <div className="flex justify-between items-center py-1 border-t border-slate-100">
                  <span className="font-semibold text-navy-900">
                    {locale === "ar" ? "يوم الجمعة:" : "Friday:"}
                  </span>
                  <span className="text-red-600 font-semibold">
                    {locale === "ar" ? "مغلق (طوارئ على الواتساب)" : "Closed (On-call WhatsApp)"}
                  </span>
                </div>
              </div>
            </Card>

            {/* Direct Contact Lines */}
            <Card variant="default" className="p-6">
              <h3 className="text-base font-bold text-navy-950 mb-4 pb-2 border-b border-slate-100">
                {locale === "ar" ? "بيانات التواصل المباشر" : "Direct Contact Details"}
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-navy-900 font-medium block">
                      {businessData.location.address[locale]}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary-600 shrink-0" />
                  <div className="flex flex-wrap gap-x-3 gap-y-1 font-semibold [unicode-bidi:isolate] font-sans" dir="ltr">
                    <Link href={`tel:${businessData.contact.phones[0]}`} className="text-navy-900 hover:text-primary-600">
                      {businessData.contact.phones[0]}
                    </Link>
                    <span className="text-slate-300">|</span>
                    <Link href={`tel:${businessData.contact.phones[1]}`} className="text-navy-900 hover:text-primary-600">
                      {businessData.contact.phones[1]}
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary-600 shrink-0" />
                  <Link href={`mailto:${businessData.contact.email}`} className="text-navy-900 hover:text-primary-600 font-medium [unicode-bidi:isolate] font-sans" dir="ltr">
                    {businessData.contact.email}
                  </Link>
                </div>
              </div>
            </Card>

            {/* Embedded Google Map */}
            <div
              ref={mapRef}
              className="rounded-3xl overflow-hidden border border-slate-200/90 shadow-card aspect-[16/10] relative bg-slate-100 flex items-center justify-center"
            >
              {showMap && !mapFailed ? (
                <>
                  <iframe
                    title="Lucida Dental Center Al Waab Google Map Location"
                    src={businessData.location.googleMapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    onLoad={() => setMapLoaded(true)}
                    onError={() => setMapFailed(true)}
                  />
                  {!mapLoaded && (
                    <div className="absolute inset-0 bg-slate-100 flex flex-col items-center justify-center p-6 text-center animate-pulse">
                      <MapPin className="w-8 h-8 text-primary-600 mb-2" />
                      <span className="text-xs font-semibold text-navy-800">
                        {locale === "ar" ? "جارٍ تحميل الخريطة..." : "Loading Map..."}
                      </span>
                    </div>
                  )}
                </>
              ) : (
                <div className="flex flex-col items-center justify-center p-6 text-center">
                  <MapPin className="w-8 h-8 text-primary-600 mb-2" />
                  <span className="text-xs font-bold text-navy-900 block mb-1">
                    {businessData.location.address[locale]}
                  </span>
                  <div className="flex flex-wrap items-center justify-center gap-2 mt-3">
                    <a
                      href={businessData.location.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold bg-primary-600 text-white hover:bg-primary-700 transition-colors shadow-sm"
                    >
                      <span>{locale === "ar" ? "فتح في خرائط Google" : "Open in Google Maps"}</span>
                    </a>
                    <a
                      href={`tel:${businessData.contact.phones[0]}`}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold bg-white border border-slate-200 text-navy-800 hover:bg-slate-50 transition-colors shadow-sm"
                    >
                      <Phone className="w-3.5 h-3.5 text-primary-600" />
                      <span>{locale === "ar" ? "اتصال" : "Call Desk"}</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
