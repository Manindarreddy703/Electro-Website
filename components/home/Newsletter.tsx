"use client";

import { useState, type FormEvent } from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.includes("@")) return;
    setSubmitted(true);
  }

  return (
    <section aria-labelledby="newsletter-heading" className="bg-ink-950 py-16 sm:py-20">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2
          id="newsletter-heading"
          className="max-w-lg text-2xl font-bold text-white sm:text-3xl"
        >
          Get early access to new drops
        </h2>
        <p className="max-w-md text-sm text-gray-400">
          One email a month. Product launches, restocks, and the occasional discount —
          nothing else.
        </p>
        {submitted ? (
          <p className="rounded-full bg-emerald-500/10 px-5 py-3 text-sm font-medium text-emerald-400">
            You&apos;re on the list. Thanks for subscribing!
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
            noValidate
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              className="h-12 flex-1 rounded-full border border-white/15 bg-white/5 px-5 text-sm text-white placeholder:text-gray-500 focus:border-brand-400 focus:outline focus:outline-2 focus:outline-brand-500"
            />
            <Button type="submit" variant="secondary" size="lg">
              Subscribe
            </Button>
          </form>
        )}
      </Container>
    </section>
  );
}
