import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  Clock,
  CheckCircle2,
  CalendarCheck,
  MessageCircle,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ShieldCheck,
  HelpCircle,
  Sparkles,
} from "lucide-react";
import { servicesData, type ServiceDetail } from "@/content/services";
import { businessData } from "@/content/business";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ServiceCard } from "@/components/ui/ServiceCard";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title.en} | ${service.title.ar} | Mayo Dental Center Jubail`,
    description: service.shortDescription.en,
    openGraph: {
      title: `${service.title.en} | Mayo Dental Center`,
      description: service.shortDescription.en,
      images: [{ url: service.image }],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Related services (exclude current)
  const relatedServices = servicesData
    .filter((s) => s.id !== service.id && !s.isEmergency)
    .slice(0, 3);

  return (
    <div className="py-12 sm:py-16 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8">
          <Link href="/" className="hover:text-primary-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/services" className="hover:text-primary-600 transition-colors">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-navy-950 font-bold truncate max-w-xs sm:max-w-md">
            {service.title.en}
          </span>
        </div>

        {/* Hero Banner Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-card p-6 sm:p-10 mb-12 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <Badge variant={service.isEmergency ? "emergency" : "primary"}>
                  {service.category.en} / {service.category.ar}
                </Badge>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-navy-800">
                  <Clock className="w-3.5 h-3.5 text-primary-600" />
                  <span>Duration: {service.duration}</span>
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 font-display mb-3 tracking-tight">
                {service.title.en}
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold text-primary-700 mb-6" dir="rtl">
                {service.title.ar}
              </h2>

              <p className="text-navy-600 text-base sm:text-lg leading-relaxed mb-8">
                {service.fullDescription.en}
              </p>

              <div className="flex flex-wrap items-center gap-3.5">
                <Link href={`/book?service=${service.slug}`}>
                  <Button size="lg" icon={<CalendarCheck className="w-5 h-5" />}>
                    Book This Service
                  </Button>
                </Link>

                <Link
                  href={`https://wa.me/${businessData.contact.whatsapp.replace("+", "")}?text=${encodeURIComponent(
                    `Hello, I would like to inquire about booking: ${service.title.en}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="whatsapp" size="lg" icon={<MessageCircle className="w-5 h-5" />}>
                    WhatsApp Inquiries
                  </Button>
                </Link>
              </div>
            </div>

            {/* Service Image Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-lift border border-slate-100">
                <Image
                  src={service.image}
                  alt={service.title.en}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Procedure & Clinical Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          {/* Main Procedure Content Column */}
          <div className="lg:col-span-8 space-y-8">
            {/* Who is it for? */}
            <Card variant="default" className="p-6 sm:p-8">
              <h3 className="text-xl font-bold text-navy-950 mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary-600" />
                <span>Who is this treatment for? / لمن هذا العلاج؟</span>
              </h3>
              <p className="text-navy-600 text-sm sm:text-base leading-relaxed mb-4">
                {service.whoIsItFor.en}
              </p>
              <p className="text-primary-800 text-sm sm:text-base leading-relaxed font-medium" dir="rtl">
                {service.whoIsItFor.ar}
              </p>
            </Card>

            {/* Step-by-Step Procedure */}
            <Card variant="default" className="p-6 sm:p-8">
              <h3 className="text-xl font-bold text-navy-950 mb-6">
                Step-by-Step Clinical Procedure / مراحل الإجراء الطبي
              </h3>
              <div className="space-y-6">
                {service.procedureSteps.map((step) => (
                  <div key={step.step} className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-primary-600 text-white font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                      {step.step}
                    </span>
                    <div>
                      <h4 className="text-base font-bold text-navy-950 mb-1">
                        {step.title.en}
                        <span className="text-primary-700 text-sm ms-2 font-normal">
                          ({step.title.ar})
                        </span>
                      </h4>
                      <p className="text-sm text-navy-600 leading-relaxed mb-1">
                        {step.desc.en}
                      </p>
                      <p className="text-xs text-slate-500" dir="rtl">
                        {step.desc.ar}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Benefits */}
            <Card variant="default" className="p-6 sm:p-8">
              <h3 className="text-xl font-bold text-navy-950 mb-5">
                Key Benefits / المزايا والفوائد
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-navy-900 mb-1">
                        {b.en}
                      </p>
                      <p className="text-xs text-slate-500" dir="rtl">
                        {b.ar}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Recovery & Aftercare */}
            <Card variant="default" className="p-6 sm:p-8">
              <h3 className="text-xl font-bold text-navy-950 mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span>Recovery & Aftercare / إرشادات العناية والتعافي</span>
              </h3>
              <ul className="space-y-3">
                {service.aftercare.map((item, i) => (
                  <li key={i} className="text-sm text-navy-600 flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" />
                    <div>
                      <span>{item.en}</span>
                      <span className="block text-xs text-slate-500 mt-0.5" dir="rtl">
                        {item.ar}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Service FAQ */}
            <Card variant="default" className="p-6 sm:p-8">
              <h3 className="text-xl font-bold text-navy-950 mb-5 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-primary-600" />
                <span>Procedure FAQ / أسئلة شائعة حول الإجراء</span>
              </h3>
              <div className="space-y-4">
                {service.faqs.map((faq, i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <h4 className="font-bold text-navy-950 text-sm mb-1.5">
                      {faq.question.en}
                    </h4>
                    <p className="text-xs sm:text-sm text-navy-600 mb-2">
                      {faq.answer.en}
                    </p>
                    <p className="text-xs text-slate-500 border-t border-slate-200/60 pt-2" dir="rtl">
                      <strong>{faq.question.ar}:</strong> {faq.answer.ar}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar Column: Clinic Quick Facts & Direct Booking */}
          <div className="lg:col-span-4 space-y-6">
            <Card variant="default" className="p-6 border-primary-200 shadow-lift sticky top-24">
              <h4 className="text-lg font-bold text-navy-950 mb-4 pb-2 border-b border-slate-100">
                Book This Treatment
              </h4>

              <div className="space-y-3 text-xs sm:text-sm mb-6">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-navy-500">Service:</span>
                  <span className="font-bold text-navy-900 text-end truncate max-w-[180px]">
                    {service.title.en}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-navy-500">Duration:</span>
                  <span className="font-bold text-navy-900">{service.duration}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-navy-500">Clinician:</span>
                  <span className="font-bold text-primary-700">Dr. Dixon & Team</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-navy-500">Location:</span>
                  <span className="font-bold text-navy-900">King Faisal North, Jubail</span>
                </div>
              </div>

              <div className="space-y-3">
                <Link href={`/book?service=${service.slug}`} className="w-full block">
                  <Button size="lg" className="w-full">
                    Proceed to Booking
                  </Button>
                </Link>

                <Link
                  href={`https://wa.me/${businessData.contact.whatsapp.replace("+", "")}?text=${encodeURIComponent(
                    `Hello, I would like to book an appointment for: ${service.title.en}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block"
                >
                  <Button variant="whatsapp" size="lg" className="w-full">
                    Book via WhatsApp
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>

        {/* Related Treatments */}
        {relatedServices.length > 0 && (
          <div className="pt-12 border-t border-slate-200">
            <h3 className="text-2xl font-bold text-navy-950 mb-6 font-display">
              Related Dental Treatments
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((rel) => (
                <ServiceCard key={rel.id} service={rel} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

