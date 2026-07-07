import { Hero } from "@/components/home/Hero";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Features } from "@/components/home/Features";
import { Newsletter } from "@/components/home/Newsletter";
import productsData from "@/data/products.json";
import type { Product } from "@/types/product";

const products = productsData as Product[];

// Home page metadata is inherited from the root layout's default metadata.

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts products={products} />
      <Features />
      <Newsletter />
    </>
  );
}
