import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Home, Sparkles, MessageCircle } from "lucide-react";
import { businessData } from "@/content/business";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-slate-50">
      <div className="max-w-lg w-full text-center">
        <span className="text-6xl sm:text-7xl font-extrabold text-primary-600 font-display block mb-4">
          404
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold text-navy-950 mb-3">
          Page Not Found / الصفحة غير موجودة
        </h1>
        <p className="text-sm text-navy-600 mb-8 leading-relaxed max-w-md mx-auto">
          The requested page does not exist or has moved. Please navigate using the links below or reach out to our clinic desk.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link href="/">
            <Button size="md" icon={<Home className="w-4 h-4" />}>
              Home / الرئيسية
            </Button>
          </Link>
          <Link href="/services">
            <Button variant="secondary" size="md" icon={<Sparkles className="w-4 h-4" />}>
              Services / الخدمات
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="ghost" size="md">
              Contact / اتصل بنا
            </Button>
          </Link>
          <Link
            href={`https://wa.me/${businessData.contact.whatsapp.replace("+", "")}?text=${encodeURIComponent(
              "Hello, I need assistance navigating the Lucida Dental Center website."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="whatsapp" size="md" icon={<MessageCircle className="w-4 h-4" />}>
              WhatsApp
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
