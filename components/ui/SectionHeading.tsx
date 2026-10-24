import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: "primary" | "secondary" | "success" | "emergency" | "accent";
  title: string;
  subtitle?: string;
  align?: "center" | "start";
  className?: string;
  dark?: boolean;
}

export function SectionHeading({
  badge,
  badgeVariant = "primary",
  title,
  subtitle,
  align = "center",
  className,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl mb-12 lg:mb-16",
        align === "center" ? "mx-auto text-center" : "text-start",
        className
      )}
    >
      {badge && (
        <div className={cn("mb-3.5", align === "center" ? "flex justify-center" : "")}>
          <Badge variant={badgeVariant} dot>
            {badge}
          </Badge>
        </div>
      )}
      <h2
        className={cn(
          "text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight rtl:tracking-normal rtl:leading-[1.35] text-balance mb-4 font-display",
          dark ? "text-white" : "text-navy-950"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-base sm:text-lg leading-relaxed font-normal",
            dark ? "text-slate-300" : "text-navy-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

