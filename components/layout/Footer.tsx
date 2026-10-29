"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import { businessData } from "@/content/business";
import { servicesData } from "@/content/services";
import { useLocale } from "@/lib/locale";

export function Footer() {
  const { locale } = useLocale();

  return (
    <footer className="bg-navy-950 text-white pt-16 sm:pt-20 pb-20 sm:pb-24 lg:pb-28 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-navy-900">
          {/* Brand & Introduction Column */}
          <div className="lg:col-span-4 flex flex-col">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="relative w-11 h-11 rounded-xl overflow-hidden bg-white/10 p-1 border border-white/20">
                <Image
                  src="/images/original/lucida-logo.png"
                  alt="Lucida Dental Center Logo"
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

            {/* QCHP License Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-primary-300 font-semibold mb-6">
              <ShieldCheck className="w-4 h-4 text-accent-500 shrink-0" />
              <span>{businessData.license[locale]}</span>
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
                href={businessData.contact.facebook}
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

          {/* Clinical Treatments Quick Links */}
          <div className="lg:col-span-5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-5 font-display">
              {locale === "ar" ? "الخدمات والعلاجات السريرية" : "Clinical Treatments"}
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4">
              {servicesData.map((svc) => (
                <li key={svc.id}>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="text-xs sm:text-sm text-slate-300 hover:text-primary-300 transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-400 shrink-0" />
                    <span>{svc.title[locale]}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Doha Location */}
          <div className="lg:col-span-3 flex flex-col">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-5 font-display">
              {locale === "ar" ? "الموقع ومعلومات الاتصال" : "Contact & Location"}
            </h3>

            <div className="flex flex-col gap-3.5 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">{businessData.location.address[locale]}</p>
                  <a
                    href={businessData.location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-300 hover:text-primary-200 inline-flex items-center gap-1 text-xs mt-1"
                  >
                    <span>{locale === "ar" ? "عرض على خرائط Google" : "View on Google Maps"}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary-400 shrink-0" />
                <div className="flex flex-col gap-0.5">
                  <Link
                    href={`tel:${businessData.contact.phones[0]}`}
                    className="hover:text-white transition-colors"
                  >
                    <span dir="ltr">{businessData.contact.phones[0]}</span> (Landline)
                  </Link>
                  <Link
                    href={`https://wa.me/${businessData.contact.whatsapp.replace("+", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors text-emerald-400"
                  >
                    <span dir="ltr">{businessData.contact.whatsappFormatted}</span> (WhatsApp)
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary-400 shrink-0" />
                <Link
                  href={`mailto:${businessData.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {businessData.contact.email}
                </Link>
              </div>

              <div className="flex items-start gap-2.5 pt-2 border-t border-navy-900">
                <Clock className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">
                    {locale === "ar"
                      ? "السبت – الأربعاء: 9:00 ص – 1:00 م و 4:30 م – 8:30 م"
                      : "Sat – Wed: 9:00 AM – 1:00 PM & 4:30 PM – 8:30 PM"}
                  </p>
                  <p className="text-slate-400 text-xs mt-0.5">
                    {locale === "ar"
                      ? "الخميس: 9:00 ص – 5:00 م | الجمعة: مغلق (طوارئ عبر الواتساب)"
                      : "Thu: 9:00 AM – 5:00 PM | Fri: Closed (Emergency on WhatsApp)"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Lucida Dental Center. All rights reserved. Doha, Qatar.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white transition-colors">
              {locale === "ar" ? "عن المركز" : "About"}
            </Link>
            <Link href="/services" className="hover:text-white transition-colors">
              {locale === "ar" ? "العلاجات والخدمات" : "Treatments"}
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              {locale === "ar" ? "حجز واستفسار" : "Enquiries"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
