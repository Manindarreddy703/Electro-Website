import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-ink-950 text-white hover:bg-black focus-visible:outline-ink-950 disabled:bg-gray-300",
  secondary:
    "bg-brand-500 text-white hover:bg-brand-600 focus-visible:outline-brand-500 disabled:bg-gray-300",
  outline:
    "border border-gray-300 bg-white text-ink-950 hover:border-gray-400 hover:bg-gray-50 focus-visible:outline-ink-950",
  ghost: "bg-transparent text-ink-950 hover:bg-gray-100 focus-visible:outline-ink-950",
  danger:
    "bg-red-600 text-white hover:bg-red-700 focus-visible:outline-red-600 disabled:bg-gray-300",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-3.5 text-sm gap-1.5",
  md: "h-11 px-5 text-sm gap-2",
  lg: "h-13 px-7 text-base gap-2.5",
};

/**
 * Base button used across the app. Centralizing variants keeps every
 * call-to-action visually consistent and guarantees a visible focus ring.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = "primary", size = "md", fullWidth, disabled, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-60",
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && "w-full",
        className,
      )}
      {...props}
    />
  );
});
