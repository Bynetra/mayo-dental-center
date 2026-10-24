"use client";

import React from "react";
import { ContactSection } from "@/components/sections/ContactSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLocale } from "@/lib/locale";

export default function ContactPage() {
  const { locale } = useLocale();

  return (
    <div className="pt-6">
      <ContactSection />
    </div>
  );
}

