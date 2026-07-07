"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/login", label: "Account" },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Safely control body scroll-lock without causing background race conditions
  const toggleMenu = useCallback((open: boolean) => {
    setIsOpen(open);
    if (typeof window !== "undefined") {
      document.body.style.overflow = open ? "hidden" : "";
    }
  }, []);

  // Automatically close menu when navigating to a new route
  useEffect(() => {
    toggleMenu(false);
  }, [pathname, toggleMenu]);

  // Clean up body styles explicitly if the component unmounts unexpectedly
  useEffect(() => {
    return () => {
      if (typeof window !== "undefined") {
        document.body.style.overflow = "";
      }
    };
  }, []);

  // Listen for 'Escape' key to close the mobile drawer (Core A11y)
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") toggleMenu(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, toggleMenu]);

  return (
    <div className="md:hidden">
      <button
        onClick={() => toggleMenu(true)}
        aria-label="Open menu"
        aria-expanded={isOpen}
        aria-controls="mobile-nav-panel"
        className="rounded-full p-2 text-ink-950 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink-950"
      >
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] animate-fade-in">
          {/* Overlay backdrop with white blur tint */}
          <div
            className="absolute inset-0 bg-white/60 backdrop-blur-sm"
            onClick={() => toggleMenu(false)}
            aria-hidden="true"
          />
          
          {/* Navigation Panel Drawer (Solid White background) */}
          <div
            id="mobile-nav-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="absolute right-0 top-0 flex h-full w-72 max-w-[85vw] flex-col gap-1 bg-white p-5 shadow-2xl transition-transform duration-300 ease-in-out border-l border-gray-100"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="font-display text-lg font-bold text-gray-900">Menu</span>
              <button
                onClick={() => toggleMenu(false)}
                aria-label="Close menu"
                className="rounded-full p-2 text-ink-950 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink-950"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            
            <nav aria-label="Mobile primary" className="flex flex-col gap-1 bg-white/80">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={cn(
                    "rounded-lg px-4 py-3 text-base font-medium transition-colors",
                    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink-950",
                    pathname === link.href
                      ? "bg-gray-100 text-gray-900 font-semibold"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}