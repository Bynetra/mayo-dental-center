import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDirection(locale: string): "ltr" | "rtl" {
  return locale === "ar" ? "rtl" : "ltr";
}

/**
 * Calculates whether Mayo Dental Center is currently open in Saudi Arabia time (Asia/Riyadh, GMT+3).
 * Schedule: Sat-Thu 9:00 to 21:00, Friday closed.
 */
export function isClinicOpenNow(): boolean {
  try {
    // Current time in Saudi Arabia
    const now = new Date();
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Riyadh",
      weekday: "short",
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    });
    const parts = formatter.formatToParts(now);
    const weekday = parts.find((p) => p.type === "weekday")?.value;
    const hour = parseInt(parts.find((p) => p.type === "hour")?.value || "0", 10);

    // Closed on Friday
    if (weekday === "Fri") {
      return false;
    }

    // Open 9:00 (09) to 21:00 (21)
    if (hour >= 9 && hour < 21) {
      return true;
    }

    return false;
  } catch {
    return true; // Graceful fallback
  }
}

