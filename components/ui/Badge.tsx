import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type BadgeVariant = "default" | "success" | "warning" | "danger" | "brand";

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-gray-100 text-gray-700",
  success: "bg-emerald-50 text-emerald-700",
  warning: "bg-amber-50 text-amber-700",
  danger: "bg-red-50 text-red-700",
  brand: "bg-brand-50 text-brand-600",
};

export function Badge({
  children,
  variant = "default",
  className,
}: {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold",
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
