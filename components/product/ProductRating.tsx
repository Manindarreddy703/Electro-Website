import { Star } from "lucide-react";
import { cn } from "@/lib/cn";

export function ProductRating({
  rating,
  reviewCount,
  size = "sm",
}: {
  rating: number;
  reviewCount?: number;
  size?: "sm" | "md";
}) {
  const iconSize = size === "sm" ? "h-3.5 w-3.5" : "h-4.5 w-4.5";

  return (
    <div
      className="flex items-center gap-1.5"
      role="img"
      aria-label={`Rated ${rating} out of 5 stars${reviewCount ? ` from ${reviewCount} reviews` : ""}`}
    >
      <div className="flex" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={cn(
              iconSize,
              index < Math.round(rating)
                ? "fill-amber-400 text-amber-400"
                : "fill-gray-200 text-gray-200",
            )}
          />
        ))}
      </div>
      <span className="text-xs font-medium text-gray-500">
        {rating.toFixed(1)}
        {reviewCount !== undefined && ` (${reviewCount})`}
      </span>
    </div>
  );
}
