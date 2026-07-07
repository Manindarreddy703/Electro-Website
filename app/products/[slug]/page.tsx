import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductInfo } from "@/components/product/ProductInfo";
import { ProductGrid } from "@/components/product/ProductGrid";
import { getRelatedProducts } from "@/lib/helpers";
import { buildMetadata } from "@/lib/seo";
import productsData from "@/data/products.json";
import type { Product } from "@/types/product";

const products = productsData as Product[];

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return buildMetadata({
      title: "Product not found",
      path: `/products/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: product.name,
    description: product.shortDescription,
    path: `/products/${product.slug}`,
    keywords: [product.name, product.brand, product.category, ...product.tags],
    image: product.image,
  });
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(products, product);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.gallery,
    description: product.description,
    brand: { "@type": "Brand", name: product.brand },
    sku: product.id,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: product.discountPrice ?? product.price,
      availability:
        product.stock > 0
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
    },
  };

  return (
    <Container className="py-10 sm:py-14">
      {/* eslint-disable-next-line @next/next/no-script-component-in-head */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav
        aria-label="Breadcrumb"
        className="mb-6 flex items-center gap-1.5 text-sm text-gray-500"
      >
        <Link href="/" className="hover:text-ink-950">
          Home
        </Link>
        <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
        <Link href="/products" className="hover:text-ink-950">
          Shop
        </Link>
        <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
        <span className="text-ink-950" aria-current="page">
          {product.name}
        </span>
      </nav>

      <article className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <ProductGallery images={product.gallery} alt={`${product.name} product photo`} />
        <ProductInfo product={product} />
      </article>

      {relatedProducts.length > 0 && (
        <section aria-labelledby="related-heading" className="mt-20">
          <h2
            id="related-heading"
            className="mb-6 text-2xl font-bold tracking-tight text-ink-950"
          >
            You might also like
          </h2>
          <ProductGrid products={relatedProducts} />
        </section>
      )}
    </Container>
  );
}
