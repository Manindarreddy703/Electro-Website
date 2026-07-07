import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/layout/Container";
import { Spinner } from "@/components/ui/Spinner";
import { ProductsClient } from "./ProductsClient";
import { buildMetadata } from "@/lib/seo";
import productsData from "@/data/products.json";
import type { Product } from "@/types/product";

const products = productsData as Product[];

export const metadata: Metadata = buildMetadata({
  title: "Shop All Products",
  description:
    "Browse the full Electro catalog — laptops, phones, tablets, audio, wearables, monitors, and accessories. Filter by category and sort by price or rating.",
  path: "/products",
  keywords: ["shop electronics", "buy laptop", "buy phone", "electronics catalog"],
});

export default function ProductsPage() {
  return (
    <Container className="py-10 sm:py-14">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
          Shop all products
        </h1>
        <p className="mt-2 max-w-2xl text-gray-500">
          {products.length} carefully selected products across laptops, phones, audio,
          wearables, and more.
        </p>
      </header>
      <Suspense fallback={<Spinner label="Loading products" />}>
        <ProductsClient products={products} />
      </Suspense>
    </Container>
  );
}
