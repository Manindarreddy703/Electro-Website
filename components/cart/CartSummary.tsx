"use client";

import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { formatCurrency } from "@/lib/formatCurrency";
import { useCart } from "@/hooks/useCart";

export function CartSummary() {
  const { totals } = useCart();

  return (
    <Card className="sticky top-24 flex flex-col gap-4 p-6">
      <h2 className="text-lg font-semibold text-ink-950">Order summary</h2>
      <dl className="space-y-3 text-sm">
        <div className="flex justify-between">
          <dt className="text-gray-500">Subtotal ({totals.itemCount} items)</dt>
          <dd className="font-medium text-ink-950">{formatCurrency(totals.subtotal)}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-gray-500">Estimated tax</dt>
          <dd className="font-medium text-ink-950">{formatCurrency(totals.tax)}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-gray-500">Shipping</dt>
          <dd className="font-medium text-emerald-600">Free</dd>
        </div>
      </dl>
      <div className="flex justify-between border-t border-gray-100 pt-4">
        <span className="text-base font-semibold text-ink-950">Total</span>
        <span className="text-base font-semibold text-ink-950">
          {formatCurrency(totals.total)}
        </span>
      </div>
      <Button
        size="lg"
        fullWidth
        disabled={totals.itemCount === 0}
        onClick={() => alert("This is a demo checkout — no payment is processed.")}
      >
        Checkout
      </Button>
      <Link
        href="/products"
        className="text-center text-sm font-medium text-brand-500 hover:text-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink-950"
      >
        Continue shopping
      </Link>
    </Card>
  );
}
