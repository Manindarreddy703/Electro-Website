import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

let inputIdCounter = 0;

/**
 * Labeled text input with built-in error and hint slots so every form
 * field in the app gets consistent spacing, focus states, and ARIA wiring.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, label, error, hint, id, ...props },
  ref,
) {
  const generatedId = useStableId(id);
  const errorId = error ? `${generatedId}-error` : undefined;
  const hintId = hint ? `${generatedId}-hint` : undefined;

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={generatedId} className="text-sm font-medium text-ink-950">
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={generatedId}
        aria-invalid={Boolean(error)}
        aria-describedby={cn(errorId, hintId) || undefined}
        className={cn(
          "h-11 rounded-lg border border-gray-300 bg-white px-4 text-sm text-ink-950",
          "transition-colors placeholder:text-gray-400",
          "focus:border-brand-500 focus:outline focus:outline-2 focus:outline-brand-100",
          error && "border-red-500 focus:border-red-500 focus:outline-red-100",
          className,
        )}
        {...props}
      />
      {hint && !error && (
        <p id={hintId} className="text-xs text-gray-500">
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} role="alert" className="text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
});

function useStableId(id?: string): string {
  if (id) return id;
  inputIdCounter += 1;
  return `input-${inputIdCounter}`;
}
