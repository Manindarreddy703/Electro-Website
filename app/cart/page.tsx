import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { CartClient } from "./CartClient";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Your Cart",
  description: "Review the items in your cart, adjust quantities, and check out.",
  path: "/cart",
  noIndex: true,
});

export default function CartPage() {
  return (
    <Container className="py-10 sm:py-14">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
        Your cart
      </h1>
      <CartClient />
    </Container>
  );
}
