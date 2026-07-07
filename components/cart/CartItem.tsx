"use client";

import Link from "next/link";
import { Trash2 } from "lucide-react";
import { ProductImage } from "@/components/product/ProductImage";
import { QuantitySelector } from "./QuantitySelector";
import { formatCurrency } from "@/lib/formatCurrency";
import { getEffectivePrice } from "@/lib/helpers";
import { useCart } from "@/hooks/useCart";
import type { CartItem as CartItemType } from "@/types/cart";

export function CartItem({ item }: { item: CartItemType }) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
  const unitPrice = getEffectivePrice(item.product);
  const lineTotal = unitPrice * item.quantity;

  return (
    <div className="flex gap-4 border-b border-gray-100 py-6 last:border-b-0">
      <Link
        href={`/products/${item.product.slug}`}
        className="block h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink-950"
      >
        <ProductImage
          src={item.product.image}
          alt={`${item.product.name} product photo`}
          sizes="96px"
        />
      </Link>

      <div className="flex flex-1 flex-col gap-1">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold text-ink-950">
              <Link
                href={`/products/${item.product.slug}`}
                className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink-950"
              >
                {item.product.name}
              </Link>
            </h3>
            <p className="text-sm text-gray-500">
              {[item.selectedColor, item.selectedStorage].filter(Boolean).join(" · ")}
            </p>
          </div>
          <button
            onClick={() => removeFromCart(item.product.id)}
            aria-label={`Remove ${item.product.name} from cart`}
            className="rounded-full p-2 text-gray-400 hover:bg-red-50 hover:text-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-600"
          >
            <Trash2 className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-auto flex items-center justify-between pt-2">
          <QuantitySelector
            quantity={item.quantity}
            onIncrease={() => increaseQuantity(item.product.id)}
            onDecrease={() => decreaseQuantity(item.product.id)}
            label={item.product.name}
          />
          <div className="text-right">
            <p className="font-semibold text-ink-950">{formatCurrency(lineTotal)}</p>
            {item.quantity > 1 && (
              <p className="text-xs text-gray-400">{formatCurrency(unitPrice)} each</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
