import { Badge } from "@/components/ui/Badge";
import { formatDiscountPercent } from "@/lib/formatCurrency";
import type { Product } from "@/types/product";

export function ProductBadge({ product }: { product: Product }) {
  const discountPercent = formatDiscountPercent(product.price, product.discountPrice);

  return (
    <div className="flex flex-wrap gap-1.5">
      {product.featured && <Badge variant="brand">Featured</Badge>}
      {discountPercent !== null && <Badge variant="success">-{discountPercent}%</Badge>}
      {product.stock === 0 && <Badge variant="danger">Out of stock</Badge>}
      {product.stock > 0 && product.stock <= 10 && (
        <Badge variant="warning">Low stock</Badge>
      )}
    </div>
  );
}
