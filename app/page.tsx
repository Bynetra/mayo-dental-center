import dynamic from "next/dynamic";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustMarqueeSection } from "@/components/sections/TrustMarqueeSection";

// Dynamically load below-the-fold components with ssr: true for high initial bootup performance
const AboutCommitmentSection = dynamic(
  () => import("@/components/sections/AboutCommitmentSection").then((m) => m.AboutCommitmentSection),
  { ssr: true }
);
const DoctorSection = dynamic(
  () => import("@/components/sections/DoctorSection").then((m) => m.DoctorSection),
  { ssr: true }
);
const WhyChooseMayoSection = dynamic(
  () => import("@/components/sections/WhyChooseMayoSection").then((m) => m.WhyChooseMayoSection),
  { ssr: true }
);
const ServicesSection = dynamic(
  () => import("@/components/sections/ServicesSection").then((m) => m.ServicesSection),
  { ssr: true }
);
const SmileJourneySection = dynamic(
  () => import("@/components/sections/SmileJourneySection").then((m) => m.SmileJourneySection),
  { ssr: true }
);
const GallerySection = dynamic(
  () => import("@/components/sections/GallerySection").then((m) => m.GallerySection),
  { ssr: true }
);
const FaqSection = dynamic(
  () => import("@/components/sections/FaqSection").then((m) => m.FaqSection),
  { ssr: true }
);
const InsurancePaymentSection = dynamic(
  () => import("@/components/sections/InsurancePaymentSection").then((m) => m.InsurancePaymentSection),
  { ssr: true }
);
const FinalCtaSection = dynamic(
  () => import("@/components/sections/FinalCtaSection").then((m) => m.FinalCtaSection),
  { ssr: true }
);
const ContactSection = dynamic(
  () => import("@/components/sections/ContactSection").then((m) => m.ContactSection),
  { ssr: true }
);

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section with Split Layout & Floating Glass Cards */}
      <HeroSection />

      {/* 2. Trust Strip Marquee with Insurance & Payment Partners */}
      <TrustMarqueeSection />

      {/* 3. About Us & Our Commitment Editorial Section */}
      <AboutCommitmentSection />

      {/* 4. Meet Dr. Dixon Clinical Leadership Showcase */}
      <DoctorSection />

      {/* 5. Why Choose Mayo Verified Clinical Standards */}
      <WhyChooseMayoSection />

      {/* 6. Comprehensive Services Bento Grid & Emergency Banner */}
      <ServicesSection />

      {/* 6. Smile Journey 4-Step Patient Pathway */}
      <SmileJourneySection />

      {/* 7. Clinical Whitening Before/After Slider & Real Photo Gallery */}
      <GallerySection />

      {/* 8. Frequently Asked Questions Accordion */}
      <FaqSection />

      {/* 9. Insurance Partnerships, Tabby & Registration Form Download */}
      <InsurancePaymentSection />

      {/* 10. Final Call to Action Conversion Band */}
      <FinalCtaSection />

      {/* 11. Contact Form, Live Operating Hours & Embedded Google Map */}
      <ContactSection />
    </>
  );
}

