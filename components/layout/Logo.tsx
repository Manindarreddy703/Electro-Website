import Link from "next/link";
import { Zap } from "lucide-react";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 rounded-md font-display text-xl font-bold tracking-tight text-ink-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink-950"
      aria-label="Electro home"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink-950 text-white">
        <Zap className="h-4.5 w-4.5" aria-hidden="true" fill="currentColor" />
      </span>
      Electro
    </Link>
  );
}
