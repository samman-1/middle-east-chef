import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Leaf, ShieldCheck, Handshake, Thermometer } from "lucide-react";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Middle East Chef — a premium meat distributor committed to quality, Halal standards, strict cold-chain handling, and dependable service.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Quality First",
    text: "Every cut is selected and inspected to meet a consistently high standard.",
  },
  {
    icon: Leaf,
    title: "Halal Integrity",
    text: "We uphold strict Halal sourcing and processing across our entire range.",
  },
  {
    icon: Thermometer,
    title: "Cold-Chain Discipline",
    text: "Temperature is controlled at every step to protect freshness and safety.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    text: "We work as an extension of your team — reliable, responsive, and flexible.",
  },
];

const stats = [
  { value: "100%", label: "Halal Certified" },
  { value: "6+", label: "Product Categories" },
  { value: "24/7", label: "Cold-Chain Control" },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-stone-200 bg-stone-50 pt-36 pb-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
              About Us
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
              The meat partner great kitchens rely on
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-stone-600">
              Middle East Chef is a premium meat distributor supplying restaurants, retailers, and
              wholesalers with quality cuts and dependable delivery.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div
              className="aspect-[4/3] rounded-3xl border border-stone-200 bg-cover bg-center shadow-sm"
              style={{ backgroundImage: "url('/about.jpg')" }}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl font-bold tracking-tight text-stone-900">Our story</h2>
            <p className="mt-4 leading-relaxed text-stone-600">
              Middle East Chef was built on a simple idea: that great food starts with great
              ingredients. We bring together careful sourcing, disciplined handling, and a
              genuine commitment to service so our customers can cook with confidence.
            </p>
            <p className="mt-4 leading-relaxed text-stone-600">
              From premium steakhouse cuts to wholesale frozen ranges, we supply the meat that
              kitchens depend on — delivered fresh, on time, and to specification.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-stone-200 bg-stone-50 p-5 text-center"
                >
                  <div className="text-2xl font-extrabold text-brand-red">{s.value}</div>
                  <div className="mt-1 text-xs font-medium text-stone-500">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-stone-50 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-stone-900">What we stand for</h2>
            <p className="mt-3 text-stone-600">The principles behind every order we deliver.</p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-stone-200 bg-white p-7 shadow-sm">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-orange/10 text-brand-orange">
                    <v.icon size={24} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-stone-900">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-red px-8 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              Work with us <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
