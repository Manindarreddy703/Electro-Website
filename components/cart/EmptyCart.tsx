import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { EmptyState } from "@/components/ui/EmptyState";
import { Button } from "@/components/ui/Button";

export function EmptyCart() {
  return (
    <EmptyState
      icon={<ShoppingBag className="h-12 w-12" aria-hidden="true" />}
      title="Your cart is empty"
      description="Looks like you haven't added anything yet. Explore the catalog to find something you'll love."
      action={
        <Link href="/products">
          <Button>Browse products</Button>
        </Link>
      }
    />
  );
}
