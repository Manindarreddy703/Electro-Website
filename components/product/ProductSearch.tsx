"use client";

import { Search } from "lucide-react";

export function ProductSearch({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="relative flex-1">
      <Search
        className="h-4.5 w-4.5 pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
        aria-hidden="true"
      />
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search products, brands..."
        aria-label="Search products"
        className="h-11 w-full rounded-full border border-gray-300 bg-white pl-10 pr-4 text-sm text-ink-950 placeholder:text-gray-400 focus:border-brand-500 focus:outline focus:outline-2 focus:outline-brand-100"
      />
    </div>
  );
}
