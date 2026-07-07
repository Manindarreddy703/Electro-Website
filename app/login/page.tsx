import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { LoginClient } from "./LoginClient";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Sign In",
  description: "Sign in to your Electro account or continue as a guest.",
  path: "/login",
  noIndex: true,
});

export default function LoginPage() {
  return (
    <Container className="py-10 sm:py-16">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
          Welcome to Electro
        </h1>
        <p className="mt-2 text-gray-500">
          Sign in to manage your orders and preferences.
        </p>
      </div>
      <LoginClient />
    </Container>
  );
}
