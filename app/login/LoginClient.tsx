"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { LogIn, UserRound } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import type { GuestUser } from "@/types/user";

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const GUEST_STORAGE_KEY = "electro-guest-user";

export function LoginClient() {
  const router = useRouter();
  const [, setGuestUser] = useLocalStorage<GuestUser | null>(GUEST_STORAGE_KEY, null);
  const [mode, setMode] = useState<"login" | "guest">("login");
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [guestError, setGuestError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  function onSubmit(data: LoginFormData) {
    // No backend: simulate a short delay then treat as signed in.
    return new Promise<void>((resolve) => {
      window.setTimeout(() => {
        setSuccessMessage(
          `Welcome back, ${data.email}. (Demo login — no account was created.)`,
        );
        resolve();
      }, 600);
    });
  }

  function handleGuestLogin(event: React.FormEvent) {
    event.preventDefault();
    if (guestName.trim().length < 2) {
      setGuestError("Please enter your name (at least 2 characters).");
      return;
    }
    if (!guestEmail.includes("@")) {
      setGuestError("Please enter a valid email address.");
      return;
    }
    setGuestError(null);
    setGuestUser({
      name: guestName.trim(),
      email: guestEmail.trim(),
      isGuest: true,
      createdAt: new Date().toISOString(),
    });
    router.push("/");
  }

  return (
    <Card className="mx-auto max-w-md p-8">
      <div className="mb-6 flex gap-2 rounded-full bg-gray-100 p-1" role="tablist">
        <button
          role="tab"
          aria-selected={mode === "login"}
          onClick={() => setMode("login")}
          className={`flex-1 rounded-full py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink-950 ${
            mode === "login" ? "bg-white text-ink-950 shadow-soft" : "text-gray-500"
          }`}
        >
          Sign in
        </button>
        <button
          role="tab"
          aria-selected={mode === "guest"}
          onClick={() => setMode("guest")}
          className={`flex-1 rounded-full py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink-950 ${
            mode === "guest" ? "bg-white text-ink-950 shadow-soft" : "text-gray-500"
          }`}
        >
          Continue as guest
        </button>
      </div>

      {mode === "login" ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="flex flex-col gap-4"
        >
          <Input
            label="Email address"
            type="email"
            autoComplete="email"
            error={errors.email?.message}
            {...register("email")}
          />
          <Input
            label="Password"
            type="password"
            autoComplete="current-password"
            error={errors.password?.message}
            {...register("password")}
          />
          <Button type="submit" size="lg" fullWidth disabled={isSubmitting}>
            <LogIn className="h-4 w-4" aria-hidden="true" />
            {isSubmitting ? "Signing in..." : "Sign in"}
          </Button>
          {successMessage && (
            <p role="status" className="text-center text-sm text-emerald-600">
              {successMessage}
            </p>
          )}
          <p className="text-center text-xs text-gray-400">
            This is a demo — no account is created or stored on a server.
          </p>
        </form>
      ) : (
        <form onSubmit={handleGuestLogin} noValidate className="flex flex-col gap-4">
          <Input
            label="Your name"
            value={guestName}
            onChange={(event) => setGuestName(event.target.value)}
            autoComplete="name"
          />
          <Input
            label="Email address"
            type="email"
            value={guestEmail}
            onChange={(event) => setGuestEmail(event.target.value)}
            autoComplete="email"
          />
          {guestError && (
            <p role="alert" className="text-sm text-red-600">
              {guestError}
            </p>
          )}
          <Button type="submit" size="lg" fullWidth>
            <UserRound className="h-4 w-4" aria-hidden="true" />
            Continue as guest
          </Button>
          <p className="text-center text-xs text-gray-400">
            We&apos;ll remember you on this device using local storage.
          </p>
        </form>
      )}
    </Card>
  );
}
