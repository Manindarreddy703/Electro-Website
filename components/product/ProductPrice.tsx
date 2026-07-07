import { formatCurrency } from "@/lib/formatCurrency";
import type { Product } from "@/types/product";
import { cn } from "@/lib/cn";

export function ProductPrice({
  product,
  size = "md",
}: {
  product: Product;
  size?: "sm" | "md" | "lg";
}) {
  const hasDiscount =
    product.discountPrice !== null && product.discountPrice < product.price;

  const sizeClasses = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-3xl",
  } as const;

  return (
    <div className="flex flex-wrap items-baseline gap-2">
      <span className={cn("font-bold text-ink-950", sizeClasses[size])}>
        {formatCurrency(hasDiscount ? product.discountPrice! : product.price)}
      </span>
      {hasDiscount && (
        <span className="text-sm text-gray-400 line-through">
          {formatCurrency(product.price)}
        </span>
      )}
    </div>
  );
}
