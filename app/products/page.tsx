import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { productCategories } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore the Middle East Chef catalogue — beef, lamb & mutton, poultry, veal, processed & marinated products, and a full frozen range for restaurants, retailers, and wholesalers.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="border-b border-stone-200 bg-stone-50 pt-36 pb-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
              Our Products
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
              A full range of premium meat
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-stone-600">
              From everyday essentials to specialty cuts, we supply quality meat across every
              category — fresh or frozen, portioned to your specification.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((cat, i) => (
              <Reveal key={cat.slug} delay={(i % 3) * 0.08}>
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-shadow hover:shadow-lg">
                  <div className="relative h-44 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url('${cat.image}')` }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{ backgroundImage: `linear-gradient(to top, ${cat.color}e6, ${cat.color}33 55%, transparent)` }}
                    />
                    <h2 className="absolute bottom-4 left-5 text-2xl font-bold text-white drop-shadow">
                      {cat.name}
                    </h2>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-sm font-semibold text-brand-red">{cat.tagline}</p>
                    <p className="mt-2 text-sm leading-relaxed text-stone-600">{cat.description}</p>
                    <ul className="mt-5 space-y-2">
                      {cat.items.map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-sm text-stone-700">
                          <Check size={16} className="shrink-0 text-brand-green" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 rounded-3xl border border-stone-200 bg-stone-50 p-10 text-center">
            <h2 className="text-2xl font-bold text-stone-900">Looking for something specific?</h2>
            <p className="mx-auto mt-3 max-w-xl text-stone-600">
              We handle custom cuts, bulk orders, and tailored specifications. Send us your
              requirements and we&apos;ll take care of the rest.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-red px-8 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              Request a Quote <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
