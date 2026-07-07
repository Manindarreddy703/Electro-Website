import type { Product } from "./product";

/**
 * A single line item in the cart. We store a snapshot of the selected
 * color/storage alongside the product reference so historical cart entries
 * remain meaningful even if the catalog data changes later.
 */
export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: string | null;
  selectedStorage: string | null;
}

export interface CartTotals {
  subtotal: number;
  tax: number;
  total: number;
  itemCount: number;
}

export interface CartContextValue {
  items: CartItem[];
  addToCart: (
    product: Product,
    quantity?: number,
    selectedColor?: string | null,
    selectedStorage?: string | null,
  ) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  increaseQuantity: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
  calculateSubtotal: () => number;
  calculateTax: () => number;
  calculateTotal: () => number;
  totals: CartTotals;
  isHydrated: boolean;
}
