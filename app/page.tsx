import Link from "next/link";
import { ArrowRight, BadgeCheck, Snowflake, Truck, Award } from "lucide-react";
import { Component as HorizonHero } from "@/components/ui/horizon-hero-section";
import { Reveal } from "@/components/reveal";
import { productCategories } from "@/lib/products";

const highlights = [
  {
    icon: Award,
    title: "Premium Quality",
    text: "Carefully selected cuts graded for marbling, freshness, and consistency on every order.",
  },
  {
    icon: BadgeCheck,
    title: "Halal Certified",
    text: "Sourced and processed to strict Halal standards you and your customers can rely on.",
  },
  {
    icon: Snowflake,
    title: "Cold-Chain Control",
    text: "Temperature-controlled handling from our facility to your door keeps quality locked in.",
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    text: "Dependable scheduling for restaurants, retailers, and wholesalers, big or small.",
  },
];

export default function Home() {
  return (
    <>
      {/* Immersive animated hero (Three.js + GSAP) */}
      <HorizonHero />

      {/* Why choose us */}
      <section className="relative z-10 bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
              Why Middle East Chef
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Quality you can taste, service you can trust
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              We supply the meat that great kitchens are built on — backed by careful sourcing,
              strict handling, and dependable delivery.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-slate-100 bg-slate-50/60 p-7 transition-shadow hover:shadow-md">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-red/10 text-brand-red">
                    <item.icon size={24} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product preview */}
      <section className="relative z-10 bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
                Our Range
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                A full catalogue for every kitchen
              </h2>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-red hover:gap-3 transition-all"
            >
              View all products <ArrowRight size={18} />
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.slice(0, 6).map((cat, i) => (
              <Reveal key={cat.slug} delay={(i % 3) * 0.08}>
                <Link
                  href="/products"
                  className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white transition-shadow hover:shadow-lg"
                >
                  <div
                    className="flex h-36 items-end p-5"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${cat.color}, ${cat.color}cc)`,
                    }}
                  >
                    <h3 className="text-2xl font-bold text-white drop-shadow-sm">{cat.name}</h3>
                  </div>
                  <div className="p-5">
                    <p className="text-sm font-medium text-brand-red">{cat.tagline}</p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{cat.description}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 overflow-hidden bg-slate-950 py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(60% 60% at 30% 30%, rgba(242,92,84,0.35), transparent), radial-gradient(50% 50% at 80% 70%, rgba(247,148,29,0.3), transparent)",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to stock your kitchen?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
              Tell us what you need and our team will put together a quote tailored to your business.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-red px-8 py-4 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.03]"
            >
              Get a Quote <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
