import Link from "next/link";
import { Compass } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center justify-center gap-6 py-24 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-50">
        <Compass className="h-7 w-7 text-brand-500" aria-hidden="true" />
      </div>
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-ink-950">Page not found</h1>
        <p className="mt-2 max-w-sm text-gray-500">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
          Let&apos;s get you back on track.
        </p>
      </div>
      <div className="flex gap-3">
        <Link href="/">
          <Button>Back home</Button>
        </Link>
        <Link href="/products">
          <Button variant="outline">Browse products</Button>
        </Link>
      </div>
    </Container>
  );
}
