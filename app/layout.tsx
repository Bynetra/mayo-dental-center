import type { Metadata } from "next";
import { Inter, Tajawal } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/lib/locale";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyBookingBar } from "@/components/ui/StickyBookingBar";
import { StickyMobileBottomBar } from "@/components/ui/StickyMobileBottomBar";
import { generateClinicSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["500", "700"],
  variable: "--font-arabic",
  display: "swap",
  preload: false,
});

const allowIndexing = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";

export const metadata: Metadata = {
  title: "Lucida Dental Center | Precision Dental Care in Al Waab, Doha, Qatar",
  description:
    "Experience specialized dental care at Lucida Dental Center in Al Waab, Doha. QCHP-licensed clinic providing Zoom teeth whitening, clear aligners, microscopic root canals, dental implants, and emergency dentistry.",
  robots: allowIndexing
    ? {
        index: true,
        follow: true,
      }
    : {
        index: false,
        follow: false,
        nocache: true,
        googleBot: {
          index: false,
          follow: false,
        },
      },
  keywords: [
    "Lucida Dental Center",
    "Lucida Dental Doha",
    "مركز لوسيدا لطب الأسنان",
    "Dentist Al Waab",
    "طبيب أسنان الوعب",
    "طبيب أسنان الدوحة",
    "Zoom Whitening Doha",
    "Dental Implants Qatar",
    "Root Canal Treatment Doha",
    "Dr. Adey Al-Shaar",
    "Dr. Mohamed Isa",
    "Dental Clinic Bu Hasa Street",
    "QCHP Licensed Dental Clinic",
  ],
  authors: [{ name: "Lucida Dental Center" }],
  creator: "Lucida Dental Center",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://lucidadental.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-QA": "/",
      "ar-QA": "/?lang=ar",
    },
  },
  openGraph: {
    title: "Lucida Dental Center | Precision Dentistry in Al Waab, Doha",
    description:
      "Specialized dental care with clinical precision and gentle touch in Doha, Qatar. QCHP-licensed practice welcoming new patients and families.",
    url: "https://lucidadental.com",
    siteName: "Lucida Dental Center",
    images: [
      {
        url: "/images/original/lucida-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lucida Dental Center Al Waab Doha",
      },
    ],
    locale: "en_QA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucida Dental Center | Al Waab, Doha, Qatar",
    description:
      "Advanced clinical dental care and personalized smile artistry in Doha. QCHP licensed.",
    images: ["/images/original/lucida-og-image.jpg"],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = generateClinicSchema("en");

  return (
    <html lang="en" dir="ltr" className={`${inter.variable} ${tajawal.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans selection:bg-primary-100 selection:text-primary-900 bg-white text-navy-900">
        <LocaleProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <StickyBookingBar />
          <StickyMobileBottomBar />
        </LocaleProvider>
      </body>
    </html>
  );
}
