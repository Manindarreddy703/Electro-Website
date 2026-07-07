import type { Product, ProductFilters, SortOption } from "@/types/product";

const TAX_RATE = 0.08;

/** Effective unit price for a product, honoring an active discount. */
export function getEffectivePrice(product: Product): number {
  return product.discountPrice ?? product.price;
}

/** Applies search, category, and sort filters to a product list, in that order. */
export function filterAndSortProducts(
  products: Product[],
  filters: ProductFilters,
): Product[] {
  const query = filters.query.trim().toLowerCase();

  let result = products.filter((product) => {
    const matchesQuery =
      query.length === 0 ||
      product.name.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query) ||
      product.tags.some((tag) => tag.toLowerCase().includes(query));

    const matchesCategory =
      filters.category === "All" || product.category === filters.category;

    return matchesQuery && matchesCategory;
  });

  result = sortProducts(result, filters.sort);

  return result;
}

export function sortProducts(products: Product[], sort: SortOption): Product[] {
  const copy = [...products];
  switch (sort) {
    case "price-asc":
      return copy.sort((a, b) => getEffectivePrice(a) - getEffectivePrice(b));
    case "price-desc":
      return copy.sort((a, b) => getEffectivePrice(b) - getEffectivePrice(a));
    case "alphabetical":
      return copy.sort((a, b) => a.name.localeCompare(b.name));
    case "featured":
    default:
      return copy.sort((a, b) => Number(b.featured) - Number(a.featured));
  }
}

export function getRelatedProducts(
  products: Product[],
  current: Product,
  limit: number = 4,
): Product[] {
  return products
    .filter((p) => p.id !== current.id && p.category === current.category)
    .slice(0, limit);
}

export function calculateSubtotal(
  items: { product: Product; quantity: number }[],
): number {
  return items.reduce(
    (sum, item) => sum + getEffectivePrice(item.product) * item.quantity,
    0,
  );
}

export function calculateTax(subtotal: number): number {
  return subtotal * TAX_RATE;
}

export function calculateTotal(subtotal: number, tax: number): number {
  return subtotal + tax;
}

/** Builds a cart line-item key that disambiguates the same product with different variants. */
export function getCartLineKey(
  productId: string,
  color?: string | null,
  storage?: string | null,
): string {
  return [productId, color ?? "default", storage ?? "default"].join("::");
}
