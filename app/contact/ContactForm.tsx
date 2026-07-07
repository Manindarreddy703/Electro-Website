"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const initialState: FormState = { name: "", email: "", message: "" };

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): FormErrors {
    const nextErrors: FormErrors = {};
    if (values.name.trim().length < 2) {
      nextErrors.name = "Please enter your full name.";
    }
    if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (values.message.trim().length < 10) {
      nextErrors.message = "Your message should be at least 10 characters.";
    }
    return nextErrors;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setValues(initialState);
    }
  }

  if (submitted) {
    return (
      <p
        role="status"
        className="rounded-xl bg-emerald-50 p-6 text-center text-sm font-medium text-emerald-700"
      >
        Thanks for reaching out! Our team will get back to you within one business day.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <Input
        label="Full name"
        value={values.name}
        onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
        error={errors.name}
        autoComplete="name"
      />
      <Input
        label="Email address"
        type="email"
        value={values.email}
        onChange={(event) =>
          setValues((prev) => ({ ...prev, email: event.target.value }))
        }
        error={errors.email}
        autoComplete="email"
      />
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-ink-950">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={values.message}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, message: event.target.value }))
          }
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-ink-950 placeholder:text-gray-400 focus:border-brand-500 focus:outline focus:outline-2 focus:outline-brand-100"
          placeholder="How can we help?"
        />
        {errors.message && (
          <p id="message-error" role="alert" className="text-xs text-red-600">
            {errors.message}
          </p>
        )}
      </div>
      <Button type="submit" size="lg" fullWidth>
        <Send className="h-4 w-4" aria-hidden="true" />
        Send message
      </Button>
    </form>
  );
}
