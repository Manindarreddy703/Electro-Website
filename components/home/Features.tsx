import { ShieldCheck, Truck, RefreshCw, Headphones } from "lucide-react";
import { Container } from "@/components/layout/Container";

const features = [
  {
    icon: Truck,
    title: "Free, fast shipping",
    description: "Every order ships free and arrives within 2–4 business days.",
  },
  {
    icon: ShieldCheck,
    title: "2-year warranty",
    description: "Every product is backed by an extended warranty, no questions asked.",
  },
  {
    icon: RefreshCw,
    title: "30-day returns",
    description: "Not the right fit? Send it back within 30 days for a full refund.",
  },
  {
    icon: Headphones,
    title: "Real human support",
    description: "Our specialists know the catalog inside out — reach us any time.",
  },
];

export function Features() {
  return (
    <section
      aria-labelledby="features-heading"
      className="border-y border-gray-100 bg-gray-50 py-16 sm:py-20"
    >
      <Container>
        <h2 id="features-heading" className="sr-only">
          Why choose Electro
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-start gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-soft">
                <feature.icon className="h-5 w-5 text-brand-500" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-ink-950">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
