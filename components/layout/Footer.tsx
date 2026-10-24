"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  FileText,
  CalendarCheck,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import { businessData } from "@/content/business";
import { servicesData } from "@/content/services";
import { useLocale } from "@/lib/locale";

export function Footer() {
  const { locale, isRtl } = useLocale();

  return (
    <footer className="bg-navy-950 text-white pt-16 sm:pt-20 pb-20 sm:pb-24 lg:pb-28 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-navy-900">
          {/* Brand & Introduction Column */}
          <div className="lg:col-span-4 flex flex-col">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="relative w-11 h-11 rounded-xl overflow-hidden bg-white/10 p-1 border border-white/20">
                <Image
                  src="/images/original/mayo-logo.png"
                  alt="Mayo Dental Center"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <span className="text-xl font-bold font-display tracking-tight text-white">
                {businessData.name[locale]}
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {businessData.tagline[locale]}
            </p>

            {/* Registration Form Quick Action */}
            <div className="p-4 rounded-2xl bg-navy-900/80 border border-navy-800 mb-6">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">
                    {locale === "ar" ? "استمارة مريض جديد" : "New Patient Registration"}
                  </p>
                  <p className="text-xs text-slate-300 mt-1">
                    {locale === "ar"
                      ? "قم بتحميل الاستمارة وتعبئتها لتسريع موعدك الأول."
                      : "Download and print our official intake form before your visit."}
                  </p>
                  <a
                    href="/docs/new-patient-registration.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary-300 hover:text-white mt-2.5 transition-colors py-1"
                  >
                    <span>{locale === "ar" ? "تحميل الاستمارة (PDF)" : "Download Form (PDF)"}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-3">
              <Link
                href={businessData.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-navy-900 hover:bg-primary-600 text-slate-200 hover:text-white flex items-center justify-center transition-colors border border-navy-800"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-navy-900 hover:bg-primary-600 text-slate-200 hover:text-white flex items-center justify-center transition-colors border border-navy-800"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* All 10 Services Quick Links */}
          <div className="lg:col-span-5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary-300 mb-5">
              {locale === "ar" ? "خدمات طب الأسنان" : "Our Dental Services"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
              {servicesData.map((s) => (
                <Link
                  key={s.id}
                  href={`/services/${s.slug}`}
                  className="text-xs sm:text-sm text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 py-1.5"
                >
                  <span className="w-1 h-1 rounded-full bg-primary-400 shrink-0" />
                  <span className="truncate">{s.title[locale]}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact, Location & Hours Column */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary-300 mb-5">
              {locale === "ar" ? "التواصل وساعات العمل" : "Contact & Hours"}
            </h3>
            <ul className="space-y-4 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />
                <span>{businessData.location.address[locale]}</span>
              </li>

              <li className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-primary-400 shrink-0" />
                <div className="flex flex-col gap-1 [unicode-bidi:isolate]" dir="ltr">
                  <Link href={`tel:${businessData.contact.phones[0]}`} className="hover:text-white py-1 inline-block text-slate-200 font-sans">
                    {businessData.contact.phones[0]}
                  </Link>
                  <Link href={`tel:${businessData.contact.phones[1]}`} className="hover:text-white text-xs text-slate-300 py-1 inline-block font-sans">
                    {businessData.contact.phones[1]}
                  </Link>
                </div>
              </li>

              <li className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-primary-400 shrink-0" />
                <Link href={`mailto:${businessData.contact.email}`} className="hover:text-white truncate py-1 inline-block [unicode-bidi:isolate] font-sans" dir="ltr">
                  {businessData.contact.email}
                </Link>
              </li>

              <li className="pt-2 border-t border-navy-900">
                <div className="flex items-start gap-2.5 text-slate-300">
                  <Clock className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-white">
                      {locale === "ar" ? "السبت – الخميس:" : "Sat – Thu:"}
                    </span>
                    <span className="text-xs text-slate-300">
                      9:00 AM – 9:00 PM
                    </span>
                    <span className="block text-xs text-amber-400 font-medium mt-1">
                      {locale === "ar" ? "الجمعة: مغلق" : "Friday: Closed"}
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal / Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p>{businessData.name[locale]} © {new Date().getFullYear()}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="text-slate-300 hover:text-white transition-colors py-1.5 inline-block">
              {locale === "ar" ? "من نحن" : "About"}
            </Link>
            <Link href="/patient-info" className="text-slate-300 hover:text-white transition-colors py-1.5 inline-block">
              {locale === "ar" ? "معلومات التأمين والتسجيل" : "Insurance & Patient Info"}
            </Link>
            <Link href="/contact" className="text-slate-300 hover:text-white transition-colors py-1.5 inline-block">
              {locale === "ar" ? "خريطة الموقع" : "Location Map"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
