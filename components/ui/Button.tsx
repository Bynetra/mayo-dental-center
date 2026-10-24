import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "whatsapp" | "emergency";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "start" | "end";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      children,
      icon,
      iconPosition = "end",
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none hover:scale-[1.015] active:scale-[0.98] rtl:tracking-normal";

    const variantStyles = {
      primary:
        "bg-primary-600 text-white hover:bg-primary-700 shadow-md hover:shadow-lg hover:shadow-primary-600/25 focus-visible:ring-primary-600",
      secondary:
        "bg-primary-50 text-primary-800 border border-primary-200/80 hover:bg-primary-100 hover:border-primary-300 focus-visible:ring-primary-600",
      ghost:
        "bg-transparent text-navy-800 hover:bg-navy-100/70 hover:text-navy-950 focus-visible:ring-navy-400",
      whatsapp:
        "bg-[#047857] text-white hover:bg-[#065f46] shadow-md hover:shadow-lg hover:shadow-emerald-700/25 focus-visible:ring-emerald-600 font-semibold",
      emergency:
        "bg-emergency text-white hover:bg-emergency-dark shadow-md hover:shadow-lg hover:shadow-emergency/30 focus-visible:ring-emergency animate-pulse-subtle",
    };

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 gap-1.5 min-h-[36px]",
      md: "text-sm px-5 py-2.5 gap-2 min-h-[44px]",
      lg: "text-base px-6 py-3 gap-2.5 min-h-[50px] font-semibold",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        disabled={disabled}
        {...props}
      >
        {icon && iconPosition === "start" && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === "end" && <span className="shrink-0">{icon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
