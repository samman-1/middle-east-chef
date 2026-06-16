import Link from "next/link";
import { ArrowRight, BadgeCheck, Snowflake, Truck, Award } from "lucide-react";
import { SiteHero } from "@/components/sections/site-hero";
import { GlobalSourcing } from "@/components/sections/global-sourcing";
import { CutsDiagram } from "@/components/sections/cuts-diagram";
import { Reveal } from "@/components/reveal";

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
      <SiteHero />

      {/* Why choose us */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
              Why Middle East Chef
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              Quality you can taste, service you can trust
            </h2>
            <p className="mt-4 text-lg text-stone-600">
              We supply the meat that great kitchens are built on — backed by careful sourcing,
              strict handling, and dependable delivery.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-stone-200 bg-stone-50 p-7 transition-all hover:-translate-y-1 hover:shadow-md">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-red/10 text-brand-red">
                    <item.icon size={24} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-stone-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Global sourcing (dark world map) */}
      <GlobalSourcing />

      {/* Our Range — interactive cut diagram */}
      <CutsDiagram />

      {/* CTA with photo */}
      <section className="relative overflow-hidden py-28">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/cta.jpg')" }}
        />
        <div className="absolute inset-0 bg-stone-950/75" />
        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to stock your kitchen?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-stone-200">
              Tell us what you need and our team will put together a quote tailored to your business.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-red px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-brand-red/30 transition-transform hover:scale-[1.03]"
            >
              Get a Quote <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
