import type { Metadata } from "next";
import { Target, Eye, Heart, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn about Electro's story, mission, and values — and why we curate rather than stock everything.",
  path: "/about",
  keywords: ["about electro", "company story", "mission", "values"],
});

const values = [
  {
    icon: Target,
    title: "Curation over volume",
    description:
      "We'd rather stock twenty products we believe in than two thousand we don't.",
  },
  {
    icon: Eye,
    title: "Radical transparency",
    description: "Honest specs, honest pricing, and reviews we never edit.",
  },
  {
    icon: Heart,
    title: "Customer-first support",
    description: "Real people who use this gear daily, ready to help you choose.",
  },
  {
    icon: Sparkles,
    title: "Quality that lasts",
    description: "We test for longevity, not just first impressions.",
  },
];

const timeline = [
  {
    year: "2019",
    event: "Electro started as a single shelf in a Brooklyn co-working space.",
  },
  {
    year: "2021",
    event: "Crossed 10,000 customers and opened our first fulfillment center.",
  },
  {
    year: "2023",
    event: "Introduced our 2-year warranty program on every product we sell.",
  },
  { year: "2026", event: "Relaunched with a fully redesigned, accessible storefront." },
];

export default function AboutPage() {
  return (
    <Container className="py-10 sm:py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
          We believe in fewer, better things.
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-gray-500">
          Electro started with a simple frustration: shopping for electronics meant wading
          through thousands of nearly identical listings to find the handful actually
          worth owning. So we built the store we wished existed — a small, honest catalog
          of the electronics we&apos;d recommend to a friend.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
        <Card className="p-6">
          <h2 className="mb-2 text-lg font-semibold text-ink-950">Our mission</h2>
          <p className="text-sm leading-relaxed text-gray-500">
            To make choosing electronics simple again — by curating a catalog small enough
            to trust and clear enough to compare in minutes, not hours.
          </p>
        </Card>
        <Card className="p-6">
          <h2 className="mb-2 text-lg font-semibold text-ink-950">Our vision</h2>
          <p className="text-sm leading-relaxed text-gray-500">
            A future where buying technology feels like getting a recommendation from a
            knowledgeable friend, not navigating an endless aisle.
          </p>
        </Card>
      </div>

      <section aria-labelledby="values-heading" className="mt-20">
        <h2
          id="values-heading"
          className="mb-8 text-center text-2xl font-bold text-ink-950"
        >
          What we value
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.title} className="flex flex-col items-start gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50">
                <value.icon className="h-5 w-5 text-brand-500" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-ink-950">{value.title}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="timeline-heading" className="mx-auto mt-20 max-w-2xl">
        <h2
          id="timeline-heading"
          className="mb-8 text-center text-2xl font-bold text-ink-950"
        >
          Our timeline
        </h2>
        <ol className="relative space-y-8 border-l border-gray-200 pl-6">
          {timeline.map((item) => (
            <li key={item.year} className="relative">
              <span
                className="absolute -left-[1.9rem] flex h-4 w-4 items-center justify-center rounded-full bg-brand-500 ring-4 ring-white"
                aria-hidden="true"
              />
              <p className="text-sm font-semibold text-brand-500">{item.year}</p>
              <p className="mt-1 text-sm leading-relaxed text-gray-600">{item.event}</p>
            </li>
          ))}
        </ol>
      </section>
    </Container>
  );
}
