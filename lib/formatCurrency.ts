/**
 * Centralized currency formatting so every price in the app renders
 * consistently (locale, currency symbol, decimal precision).
 */
export function formatCurrency(amount: number, currency: string = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function formatDiscountPercent(
  price: number,
  discountPrice: number | null,
): number | null {
  if (discountPrice === null || discountPrice >= price) return null;
  return Math.round(((price - discountPrice) / price) * 100);
}
