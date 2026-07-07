"use client";

import { Trash2 } from "lucide-react";
import { CartItem } from "@/components/cart/CartItem";
import { CartSummary } from "@/components/cart/CartSummary";
import { EmptyCart } from "@/components/cart/EmptyCart";
import { Card } from "@/components/ui/Card";
import { useCart } from "@/hooks/useCart";

export function CartClient() {
  const { items, clearCart, isHydrated } = useCart();

  if (!isHydrated) {
    return null;
  }

  if (items.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <Card className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-ink-950">
              {items.reduce((sum, item) => sum + item.quantity, 0)} items
            </h2>
            <button
              onClick={clearCart}
              className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-600"
            >
              <Trash2 className="h-4 w-4" aria-hidden="true" />
              Clear cart
            </button>
          </div>
          <div>
            {items.map((item) => (
              <CartItem key={item.product.id} item={item} />
            ))}
          </div>
        </Card>
      </div>
      <div>
        <CartSummary />
      </div>
    </div>
  );
}
