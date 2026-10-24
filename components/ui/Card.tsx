import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "glass" | "gradient" | "outline";
  interactive?: boolean;
}

export function Card({
  children,
  variant = "default",
  interactive = false,
  className,
  ...props
}: CardProps) {
  const variantStyles = {
    default: "bg-white border border-slate-200/90 shadow-card",
    glass: "bg-white/80 backdrop-blur-md border border-white/70 shadow-glass",
    gradient: "bg-gradient-to-br from-white to-primary-50/40 border border-primary-100 shadow-card",
    outline: "bg-transparent border border-slate-200",
  };

  return (
    <div
      className={cn(
        "rounded-2xl p-6 transition-all duration-200",
        interactive && "hover:-translate-y-1 hover:border-primary-400/60 hover:shadow-lift cursor-pointer",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
