"use client";

import { Minus, Plus } from "lucide-react";

export function QuantitySelector({
  quantity,
  onIncrease,
  onDecrease,
  label,
}: {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  label: string;
}) {
  return (
    <div className="inline-flex items-center rounded-full border border-gray-300">
      <button
        onClick={onDecrease}
        aria-label={`Decrease quantity of ${label}`}
        className="flex h-10 w-10 items-center justify-center rounded-full text-ink-950 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink-950"
      >
        <Minus className="h-4 w-4" aria-hidden="true" />
      </button>
      <span
        className="w-8 text-center text-sm font-semibold text-ink-950"
        aria-live="polite"
      >
        {quantity}
      </span>
      <button
        onClick={onIncrease}
        aria-label={`Increase quantity of ${label}`}
        className="flex h-10 w-10 items-center justify-center rounded-full text-ink-950 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink-950"
      >
        <Plus className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
}
