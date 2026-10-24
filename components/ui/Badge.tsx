import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "success" | "emergency" | "neutral" | "accent";
  className?: string;
  dot?: boolean;
}

export function Badge({
  children,
  variant = "primary",
  className,
  dot = false,
}: BadgeProps) {
  const variantStyles = {
    primary: "bg-primary-50 text-primary-900 border-primary-200/80 font-semibold",
    secondary: "bg-navy-100 text-navy-900 border-navy-200 font-semibold",
    success: "bg-emerald-50 text-emerald-900 border-emerald-200 font-semibold",
    emergency: "bg-red-50 text-red-900 border-red-200 animate-pulse-subtle font-semibold",
    neutral: "bg-slate-100 text-slate-800 border-slate-200 font-semibold",
    accent: "bg-amber-50 text-amber-950 border-amber-200 font-semibold",
  };

  const dotStyles = {
    primary: "bg-primary-500",
    secondary: "bg-navy-500",
    success: "bg-emerald-500",
    emergency: "bg-red-500",
    neutral: "bg-slate-400",
    accent: "bg-amber-500",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border tracking-wide rtl:tracking-normal",
        variantStyles[variant],
        className
      )}
    >
      {dot && (
        <span
          className={cn("w-1.5 h-1.5 rounded-full shrink-0", dotStyles[variant])}
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
    </span>
  );
}
