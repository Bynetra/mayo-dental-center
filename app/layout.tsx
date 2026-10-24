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
  weight: ["400", "600", "700", "800"],
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
  title: "Mayo Dental Center | Premium Dental Care in Jubail, Saudi Arabia",
  description:
    "Experience top-notch dental care at Mayo Dental Center in Al-Jubail. Routine checkups, whitening, root canal, orthodontics, Hollywood smile, and dental implants. New patients welcome!",
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
    "Mayo Dental Center",
    "Dentist Jubail",
    "طبيب أسنان الجبيل",
    "مركز مايو لطب الأسنان",
    "Hollywood Smile Jubail",
    "Orthodontics Jubail",
    "Dental Implants Jubail",
    "Dr. Dixon",
    "Dental Clinic Jubail City Center",
  ],
  authors: [{ name: "Mayo Dental Center" }],
  creator: "Mayo Dental Center",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.mayodentalcenter.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-SA": "/",
      "ar-SA": "/?lang=ar",
    },
  },
  openGraph: {
    title: "Mayo Dental Center | Affordable Dentist | King Faisal North, Jubail",
    description:
      "Experience top-notch dental care at Mayo Dental Center. Conveniently located in Al-Jubail, our dentistry team is here to help you achieve and maintain a healthy, beautiful smile.",
    url: "https://www.mayodentalcenter.com",
    siteName: "Mayo Dental Center",
    images: [
      {
        url: "/images/original/mayo-logo.png",
        width: 1200,
        height: 630,
        alt: "Mayo Dental Center Jubail",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayo Dental Center | Jubail, Saudi Arabia",
    description: "Quality dental care with a gentle touch. Changing smiles in Jubail today.",
    images: ["/images/original/mayo-logo.png"],
  },
  icons: {
    icon: "/images/original/mayo-logo.png",
    shortcut: "/images/original/mayo-logo.png",
    apple: "/images/original/mayo-logo.png",
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
      <body className="min-h-screen flex flex-col font-sans selection:bg-primary-100 selection:text-primary-900">
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

