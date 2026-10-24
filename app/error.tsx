"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { RotateCcw, MessageCircle, Home } from "lucide-react";
import { businessData } from "@/content/business";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console in production
    console.error("Application error captured by boundary:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-slate-50">
      <div className="max-w-md w-full text-center bg-white p-8 rounded-3xl shadow-lift border border-slate-200">
        <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-4">
          <RotateCcw className="w-7 h-7" />
        </div>
        <h1 className="text-2xl font-bold text-navy-950 mb-2">
          Something went wrong / حدث خطأ غير متوقع
        </h1>
        <p className="text-sm text-navy-600 mb-6 leading-relaxed">
          We encountered a temporary technical glitch. You can retry the page or reach our clinic desk directly via WhatsApp.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button onClick={() => reset()} size="md" icon={<RotateCcw className="w-4 h-4" />}>
            Try Again / إعادة المحاولة
          </Button>
          <Link
            href={`https://wa.me/${businessData.contact.whatsapp.replace("+", "")}?text=${encodeURIComponent(
              "Hello, I encountered an issue on your website and would like assistance."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button variant="whatsapp" size="md" icon={<MessageCircle className="w-4 h-4" />}>
              WhatsApp
            </Button>
          </Link>
          <Link href="/" className="w-full sm:w-auto">
            <Button variant="secondary" size="md" icon={<Home className="w-4 h-4" />}>
              Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
