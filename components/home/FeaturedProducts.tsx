import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductGrid } from "@/components/product/ProductGrid";
import { Container } from "@/components/layout/Container";
import type { Product } from "@/types/product";

export function FeaturedProducts({ products }: { products: Product[] }) {
  const featured = products.filter((product) => product.featured).slice(0, 8);

  return (
    <section aria-labelledby="featured-heading" className="py-16 sm:py-20">
      <Container>
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-500">
              Handpicked
            </p>
            <h2
              id="featured-heading"
              className="mt-1 text-2xl font-bold tracking-tight text-ink-950 sm:text-3xl"
            >
              Featured products
            </h2>
          </div>
          <Link
            href="/products"
            className="hidden items-center gap-1 text-sm font-semibold text-brand-500 hover:text-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink-950 sm:flex"
          >
            View all
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <ProductGrid products={featured} />
      </Container>
    </section>
  );
}
