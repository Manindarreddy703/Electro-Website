"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, ShoppingCart } from "lucide-react";
import { ProductImage } from "./ProductImage";
import { ProductBadge } from "./ProductBadge";
import { ProductPrice } from "./ProductPrice";
import { ProductRating } from "./ProductRating";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/hooks/useCart";
import type { Product } from "@/types/product";

export function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  const { addToCart } = useCart();
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  function handleAddToCart() {
    addToCart(product, 1, product.colors[0] ?? null, product.storage[0] ?? null);
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1600);
  }

  return (
    <>
      <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-card transition-shadow duration-300 hover:shadow-card-hover">
        <div className="relative">
          <Link href={`/products/${product.slug}`} className="block" tabIndex={-1}>
            <ProductImage
              src={product.image}
              alt={`${product.name} product photo`}
              priority={priority}
            />
          </Link>
          <div className="absolute left-3 top-3">
            <ProductBadge product={product} />
          </div>
          <button
            onClick={() => setIsQuickViewOpen(true)}
            aria-label={`Quick view ${product.name}`}
            className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-ink-950 opacity-0 shadow-soft backdrop-blur transition-opacity duration-200 hover:bg-white focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink-950 group-hover:opacity-100"
          >
            <Eye className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="flex flex-1 flex-col gap-2 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
            {product.brand}
          </p>
          <h3 className="line-clamp-1 font-semibold text-ink-950">
            <Link
              href={`/products/${product.slug}`}
              className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink-950"
            >
              {product.name}
            </Link>
          </h3>
          <ProductRating rating={product.rating} reviewCount={product.reviewCount} />
          <div className="mt-auto flex items-center justify-between pt-2">
            <ProductPrice product={product} />
            <Button
              size="sm"
              variant={justAdded ? "outline" : "primary"}
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              aria-label={`Add ${product.name} to cart`}
            >
              <ShoppingCart className="h-4 w-4" aria-hidden="true" />
              <span className="hidden sm:inline">{justAdded ? "Added" : "Add"}</span>
            </Button>
          </div>
        </div>
      </article>

      <Modal
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
        title={product.name}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <ProductImage
            src={product.image}
            alt={`${product.name} product photo`}
            className="rounded-xl"
          />
          <div className="flex flex-col gap-3">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
              {product.brand}
            </p>
            <ProductRating rating={product.rating} reviewCount={product.reviewCount} />
            <p className="text-sm text-gray-600">{product.shortDescription}</p>
            <ProductPrice product={product} size="lg" />
            <div className="mt-2 flex gap-2">
              <Button onClick={handleAddToCart} disabled={product.stock === 0} fullWidth>
                <ShoppingCart className="h-4 w-4" aria-hidden="true" />
                Add to cart
              </Button>
              <Link href={`/products/${product.slug}`} className="w-full">
                <Button variant="outline" fullWidth>
                  View details
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
