import { PackageSearch } from "lucide-react";
import { ProductCard } from "./ProductCard";
import { EmptyState } from "@/components/ui/EmptyState";
import type { Product } from "@/types/product";

export function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <EmptyState
        icon={<PackageSearch className="h-10 w-10" aria-hidden="true" />}
        title="No products found"
        description="Try adjusting your search or filters to find what you're looking for."
      />
    );
  }

  return (
    <div
      className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4"
      role="list"
      aria-label="Products"
    >
      {products.map((product, index) => (
        <div role="listitem" key={product.id}>
          <ProductCard product={product} priority={index < 4} />
        </div>
      ))}
    </div>
  );
}
