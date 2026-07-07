"use client";

import { createContext, useCallback, useMemo, type ReactNode } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { calculateSubtotal, calculateTax, calculateTotal } from "@/lib/helpers";
import type { CartContextValue, CartItem } from "@/types/cart";
import type { Product } from "@/types/product";

export const CartContext = createContext<CartContextValue | null>(null);

const CART_STORAGE_KEY = "electro-cart";

function isSameLine(
  item: CartItem,
  productId: string,
  color?: string | null,
  storage?: string | null,
): boolean {
  return (
    item.product.id === productId &&
    (item.selectedColor ?? null) === (color ?? null) &&
    (item.selectedStorage ?? null) === (storage ?? null)
  );
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems, isHydrated] = useLocalStorage<CartItem[]>(CART_STORAGE_KEY, []);

  const addToCart = useCallback(
    (
      product: Product,
      quantity: number = 1,
      selectedColor: string | null = null,
      selectedStorage: string | null = null,
    ) => {
      setItems((prev) => {
        const existingIndex = prev.findIndex((item) =>
          isSameLine(item, product.id, selectedColor, selectedStorage),
        );

        if (existingIndex !== -1) {
          const next = [...prev];
          const existing = next[existingIndex];
          if (!existing) return prev;
          next[existingIndex] = {
            ...existing,
            quantity: existing.quantity + quantity,
          };
          return next;
        }

        return [...prev, { product, quantity, selectedColor, selectedStorage }];
      });
    },
    [setItems],
  );

  const removeFromCart = useCallback(
    (productId: string) => {
      setItems((prev) => prev.filter((item) => item.product.id !== productId));
    },
    [setItems],
  );

  const clearCart = useCallback(() => {
    setItems([]);
  }, [setItems]);

  const increaseQuantity = useCallback(
    (productId: string) => {
      setItems((prev) =>
        prev.map((item) =>
          item.product.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
        ),
      );
    },
    [setItems],
  );

  const decreaseQuantity = useCallback(
    (productId: string) => {
      setItems((prev) =>
        prev
          .map((item) =>
            item.product.id === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          )
          .filter((item) => item.quantity > 0),
      );
    },
    [setItems],
  );

  const calculateSubtotalFn = useCallback(() => calculateSubtotal(items), [items]);
  const calculateTaxFn = useCallback(
    () => calculateTax(calculateSubtotal(items)),
    [items],
  );
  const calculateTotalFn = useCallback(() => {
    const subtotal = calculateSubtotal(items);
    return calculateTotal(subtotal, calculateTax(subtotal));
  }, [items]);

  const totals = useMemo(() => {
    const subtotal = calculateSubtotal(items);
    const tax = calculateTax(subtotal);
    const total = calculateTotal(subtotal, tax);
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
    return { subtotal, tax, total, itemCount };
  }, [items]);

  const value: CartContextValue = useMemo(
    () => ({
      items,
      addToCart,
      removeFromCart,
      clearCart,
      increaseQuantity,
      decreaseQuantity,
      calculateSubtotal: calculateSubtotalFn,
      calculateTax: calculateTaxFn,
      calculateTotal: calculateTotalFn,
      totals,
      isHydrated,
    }),
    [
      items,
      addToCart,
      removeFromCart,
      clearCart,
      increaseQuantity,
      decreaseQuantity,
      calculateSubtotalFn,
      calculateTaxFn,
      calculateTotalFn,
      totals,
      isHydrated,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
