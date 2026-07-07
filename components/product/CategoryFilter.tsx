"use client";

import { cn } from "@/lib/cn";
import type { ProductCategory, SortOption } from "@/types/product";

const categories: (ProductCategory | "All")[] = [
  "All",
  "Laptops",
  "Phones",
  "Tablets",
  "Audio",
  "Wearables",
  "Monitors",
  "Accessories",
];

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "alphabetical", label: "Alphabetical" },
];

export function CategoryFilter({
  activeCategory,
  onCategoryChange,
  sort,
  onSortChange,
}: {
  activeCategory: ProductCategory | "All";
  onCategoryChange: (category: ProductCategory | "All") => void;
  sort: SortOption;
  onSortChange: (sort: SortOption) => void;
}) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
        {categories.map((category) => {
          const isActive = category === activeCategory;
          return (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              aria-pressed={isActive}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink-950",
                isActive
                  ? "border-ink-950 bg-ink-950 text-white"
                  : "border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:text-ink-950",
              )}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="flex items-center gap-2">
        <label htmlFor="sort-select" className="text-sm font-medium text-gray-500">
          Sort by
        </label>
        <select
          id="sort-select"
          value={sort}
          onChange={(event) => onSortChange(event.target.value as SortOption)}
          className="h-10 rounded-lg border border-gray-300 bg-white px-3 text-sm text-ink-950 focus:border-brand-500 focus:outline focus:outline-2 focus:outline-brand-100"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
