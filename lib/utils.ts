import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDirection(locale: string): "ltr" | "rtl" {
  return locale === "ar" ? "rtl" : "ltr";
}

/**
 * Calculates whether Lucida Dental Center is currently open in Qatar time (Asia/Qatar, GMT+3).
 * Schedule:
 * - Saturday through Wednesday: 9:00 AM – 1:00 PM and 4:30 PM – 8:30 PM
 * - Thursday: 9:00 AM – 5:00 PM
 * - Friday: Closed
 */
export function isClinicOpenNow(): boolean {
  try {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Qatar",
      weekday: "short",
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    });
    const parts = formatter.formatToParts(now);
    const weekday = parts.find((p) => p.type === "weekday")?.value;
    const hour = parseInt(parts.find((p) => p.type === "hour")?.value || "0", 10);
    const minute = parseInt(parts.find((p) => p.type === "minute")?.value || "0", 10);
    const timeInMinutes = hour * 60 + minute;

    // Closed on Friday
    if (weekday === "Fri") {
      return false;
    }

    // Thursday: 9:00 AM to 5:00 PM (540 to 1020 minutes)
    if (weekday === "Thu") {
      return timeInMinutes >= 9 * 60 && timeInMinutes < 17 * 60;
    }

    // Saturday through Wednesday (split shift):
    // Morning: 9:00 AM – 1:00 PM (540 to 780 minutes)
    // Evening: 4:30 PM – 8:30 PM (990 to 1230 minutes)
    const isMorningShift = timeInMinutes >= 9 * 60 && timeInMinutes < 13 * 60;
    const isEveningShift = timeInMinutes >= 16 * 60 + 30 && timeInMinutes < 20 * 60 + 30;

    return isMorningShift || isEveningShift;
  } catch {
    return true; // Graceful fallback
  }
}
