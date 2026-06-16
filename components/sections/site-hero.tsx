"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

const ease = [0.22, 1, 0.36, 1] as const;

const customers = [
  "Restaurants",
  "Hotels",
  "Retailers",
  "Caterers",
  "Wholesalers",
  "Butcheries",
  "Cloud Kitchens",
];

export function SiteHero() {
  return (
    <section className="overflow-x-hidden">
      <div className="relative pt-40 pb-20 lg:pt-56 lg:pb-28">
        {/* Full-bleed cooking video */}
        <div className="absolute inset-2 overflow-hidden rounded-3xl sm:inset-3 lg:rounded-[3rem]">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/hero.jpg"
            className="size-full object-cover"
            src="/cooking.mp4"
          />
          {/* scrims for legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/55 to-stone-950/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-stone-950/30" />
        </div>

        {/* Text */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur"
            >
              Halal Certified · Global Sourcing
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08, ease }}
              className="mt-7 text-balance text-5xl font-black leading-[1.03] tracking-tight text-white md:text-6xl xl:text-7xl"
            >
              Premium meat,
              <br />
              delivered{" "}
              <span className="bg-gradient-to-r from-brand-red to-brand-orange bg-clip-text text-transparent">
                worldwide
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.18, ease }}
              className="mt-6 max-w-xl text-balance text-lg text-stone-200"
            >
              We source the finest beef, lamb, and poultry from across the globe and deliver it
              fresh to restaurants, retailers, and wholesalers across Saudi Arabia.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.28, ease }}
              className="mt-10 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-red px-7 text-sm font-semibold text-white shadow-lg shadow-brand-red/30 transition-transform hover:scale-[1.03]"
              >
                Get a Quote <ArrowRight size={18} />
              </Link>
              <Link
                href="/products"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                View Products
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Customer-type marquee */}
      <div className="bg-white pb-2">
        <div className="group relative m-auto max-w-7xl px-6">
          <div className="flex flex-col items-center md:flex-row">
            <div className="md:max-w-44 md:border-r md:border-stone-200 md:pr-6">
              <p className="text-end text-sm text-stone-500">Trusted by kitchens of every kind</p>
            </div>
            <div className="relative py-6 md:w-[calc(100%-11rem)]">
              <InfiniteSlider duration={40} durationOnHover={120} gap={112}>
                {customers.map((c) => (
                  <span
                    key={c}
                    className="text-base font-semibold uppercase tracking-[0.18em] text-stone-400"
                  >
                    {c}
                  </span>
                ))}
              </InfiniteSlider>

              <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white" />
              <ProgressiveBlur
                className="pointer-events-none absolute left-0 top-0 h-full w-20"
                direction="left"
                blurIntensity={1}
              />
              <ProgressiveBlur
                className="pointer-events-none absolute right-0 top-0 h-full w-20"
                direction="right"
                blurIntensity={1}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
