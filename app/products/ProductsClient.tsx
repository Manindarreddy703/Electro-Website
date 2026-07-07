"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ProductSearch } from "@/components/product/ProductSearch";
import { CategoryFilter } from "@/components/product/CategoryFilter";
import { ProductGrid } from "@/components/product/ProductGrid";
import { filterAndSortProducts } from "@/lib/helpers";
import type { Product, ProductCategory, SortOption } from "@/types/product";

export function ProductsClient({ products }: { products: Product[] }) {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") as ProductCategory | null;

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ProductCategory | "All">(
    categoryParam ?? "All",
  );
  const [sort, setSort] = useState<SortOption>("featured");

  const filteredProducts = useMemo(
    () => filterAndSortProducts(products, { query, category, sort }),
    [products, query, category, sort],
  );

  return (
    <div className="flex flex-col gap-6">
      <ProductSearch value={query} onChange={setQuery} />
      <CategoryFilter
        activeCategory={category}
        onCategoryChange={setCategory}
        sort={sort}
        onSortChange={setSort}
      />
      <p className="text-sm text-gray-500" aria-live="polite">
        {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
      </p>
      <ProductGrid products={filteredProducts} />
    </div>
  );
}
