import type { Metadata } from "next";
import { MapPin, Mail, Phone } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { ContactForm } from "./ContactForm";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with the Electro team — send a message, find our address, or check answers to common questions.",
  path: "/contact",
  keywords: ["contact electro", "customer support", "faq"],
});

const contactDetails = [
  { icon: MapPin, label: "Address", value: "148 Greene Street, New York, NY 10012" },
  { icon: Mail, label: "Email", value: "support@electro-store.example.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 010-2938" },
];

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "You can return any item within 30 days of delivery for a full refund, as long as it's in its original condition and packaging.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Currently we ship within the United States and Canada. International shipping is on our roadmap for next year.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping takes 2–4 business days. All orders ship free, with no minimum purchase required.",
  },
  {
    question: "Is there a warranty on products?",
    answer:
      "Yes — every product sold on Electro includes a 2-year warranty covering manufacturing defects.",
  },
];

export default function ContactPage() {
  return (
    <Container className="py-10 sm:py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
          We&apos;d love to hear from you
        </h1>
        <p className="mt-3 text-gray-500">
          Questions about an order, a product, or anything else — reach out and a real
          person will respond.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
        <Card className="p-6 sm:p-8">
          <h2 className="mb-6 text-lg font-semibold text-ink-950">Send a message</h2>
          <ContactForm />
        </Card>

        <div className="flex flex-col gap-6">
          <Card className="p-6 sm:p-8">
            <h2 className="mb-4 text-lg font-semibold text-ink-950">Get in touch</h2>
            <ul className="space-y-4">
              {contactDetails.map((detail) => (
                <li key={detail.label} className="flex items-start gap-3">
                  <detail.icon
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-500"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-medium text-ink-950">{detail.label}</p>
                    <p className="text-sm text-gray-500">{detail.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Card>

          <div
            role="img"
            aria-label="Map placeholder showing the Electro store location in New York City"
            className="flex h-48 items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-gray-50 text-sm text-gray-400"
          >
            Map placeholder — New York, NY
          </div>
        </div>
      </div>

      <section aria-labelledby="faq-heading" className="mx-auto mt-20 max-w-3xl">
        <h2 id="faq-heading" className="mb-8 text-center text-2xl font-bold text-ink-950">
          Frequently asked questions
        </h2>
        <div className="divide-y divide-gray-100 rounded-2xl border border-gray-100">
          {faqs.map((faq) => (
            <details key={faq.question} className="group p-5">
              <summary className="cursor-pointer list-none font-medium text-ink-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink-950">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </Container>
  );
}
