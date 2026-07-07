"use client";

import Link from "next/link";
import { ShoppingBag, User } from "lucide-react";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { DesktopNav } from "@/components/navigation/DesktopNav";
import { MobileNav } from "@/components/navigation/MobileNav";
import { useCart } from "@/hooks/useCart";

export function Navbar() {
  const { totals, isHydrated } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Logo />
          <DesktopNav />
          <div className="flex items-center gap-1">
            <Link
              href="/login"
              aria-label="Account"
              className="hidden rounded-full p-2.5 text-ink-950 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink-950 md:inline-flex"
            >
              <User className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link
              href="/cart"
              aria-label={`Cart, ${isHydrated ? totals.itemCount : 0} items`}
              className="relative rounded-full p-2.5 text-ink-950 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink-950"
            >
              <ShoppingBag className="h-5 w-5" aria-hidden="true" />
              {isHydrated && totals.itemCount > 0 && (
                <span
                  className="h-4.5 min-w-4.5 absolute -right-0.5 -top-0.5 flex items-center justify-center rounded-full bg-brand-500 px-1 text-[10px] font-bold text-white"
                  aria-hidden="true"
                >
                  {totals.itemCount > 99 ? "99+" : totals.itemCount}
                </span>
              )}
            </Link>
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}
