import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./Logo";

const columns = [
  {
    title: "Shop",
    links: [
      { href: "/products", label: "All products" },
      { href: "/products?category=Laptops", label: "Laptops" },
      { href: "/products?category=Phones", label: "Phones" },
      { href: "/products?category=Audio", label: "Audio" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About us" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Account",
    links: [
      { href: "/login", label: "Sign in" },
      { href: "/cart", label: "Your cart" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <Container className="grid grid-cols-2 gap-10 py-14 sm:grid-cols-4">
        <div className="col-span-2 sm:col-span-1">
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-500">
            Premium electronics, curated for people who care about the details.
          </p>
        </div>
        {columns.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <h2 className="mb-4 text-sm font-semibold text-ink-950">{column.title}</h2>
            <ul className="space-y-3">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-ink-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink-950"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </Container>
      <div className="border-t border-gray-100 py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-gray-400 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Electro. All rights reserved.</p>
          <p>Built with Next.js, TypeScript &amp; Tailwind CSS.</p>
        </Container>
      </div>
    </footer>
  );
}
