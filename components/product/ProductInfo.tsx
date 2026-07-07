"use client";

import { useState } from "react";
import { ShoppingCart, CheckCircle2, XCircle } from "lucide-react";
import { ProductBadge } from "./ProductBadge";
import { ProductPrice } from "./ProductPrice";
import { ProductRating } from "./ProductRating";
import { QuantitySelector } from "@/components/cart/QuantitySelector";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/hooks/useCart";
import { cn } from "@/lib/cn";
import type { Product } from "@/types/product";

export function ProductInfo({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState<string | null>(
    product.colors[0] ?? null,
  );
  const [selectedStorage, setSelectedStorage] = useState<string | null>(
    product.storage[0] ?? null,
  );
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  const inStock = product.stock > 0;

  function handleAddToCart() {
    addToCart(product, quantity, selectedColor, selectedStorage);
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 2000);
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="space-y-2">
        <p className="text-sm font-medium uppercase tracking-wide text-brand-500">
          {product.brand}
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-ink-950">{product.name}</h1>
        <ProductRating
          rating={product.rating}
          reviewCount={product.reviewCount}
          size="md"
        />
      </div>

      <ProductBadge product={product} />

      <ProductPrice product={product} size="lg" />

      <p className="leading-relaxed text-gray-600">{product.description}</p>

      <div
        className={cn(
          "flex items-center gap-2 text-sm font-medium",
          inStock ? "text-emerald-600" : "text-red-600",
        )}
      >
        {inStock ? (
          <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
        ) : (
          <XCircle className="h-4 w-4" aria-hidden="true" />
        )}
        {inStock ? `In stock — ${product.stock} available` : "Out of stock"}
      </div>

      {product.colors.length > 0 && (
        <fieldset>
          <legend className="mb-2 text-sm font-semibold text-ink-950">Color</legend>
          <div className="flex flex-wrap gap-2">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                aria-pressed={selectedColor === color}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink-950",
                  selectedColor === color
                    ? "border-ink-950 bg-ink-950 text-white"
                    : "border-gray-200 text-gray-600 hover:border-gray-300",
                )}
              >
                {color}
              </button>
            ))}
          </div>
        </fieldset>
      )}

      {product.storage.length > 0 && (
        <fieldset>
          <legend className="mb-2 text-sm font-semibold text-ink-950">Storage</legend>
          <div className="flex flex-wrap gap-2">
            {product.storage.map((storage) => (
              <button
                key={storage}
                onClick={() => setSelectedStorage(storage)}
                aria-pressed={selectedStorage === storage}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink-950",
                  selectedStorage === storage
                    ? "border-ink-950 bg-ink-950 text-white"
                    : "border-gray-200 text-gray-600 hover:border-gray-300",
                )}
              >
                {storage}
              </button>
            ))}
          </div>
        </fieldset>
      )}

      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
        <QuantitySelector
          quantity={quantity}
          onIncrease={() => setQuantity((q) => Math.min(q + 1, product.stock || 1))}
          onDecrease={() => setQuantity((q) => Math.max(q - 1, 1))}
          label={product.name}
        />
        <Button
          size="lg"
          disabled={!inStock}
          onClick={handleAddToCart}
          fullWidth
          className="sm:w-auto sm:flex-1"
        >
          <ShoppingCart className="h-5 w-5" aria-hidden="true" />
          {justAdded ? "Added to cart" : "Add to cart"}
        </Button>
      </div>

      {product.specifications.length > 0 && (
        <div className="mt-4">
          <h2 className="mb-3 text-lg font-semibold text-ink-950">Specifications</h2>
          <table className="w-full border-collapse overflow-hidden rounded-xl border border-gray-100 text-sm">
            <tbody>
              {product.specifications.map((spec, index) => (
                <tr
                  key={spec.label}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <th
                    scope="row"
                    className="w-1/3 px-4 py-3 text-left font-medium text-gray-500"
                  >
                    {spec.label}
                  </th>
                  <td className="px-4 py-3 text-ink-950">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
