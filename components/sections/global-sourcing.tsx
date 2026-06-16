"use client";

import { motion } from "framer-motion";
import { Plane } from "lucide-react";
import { WorldMap } from "@/components/sections/world-map";
import { CountUp } from "@/components/motion/count-up";

const ease = [0.22, 1, 0.36, 1] as const;

const stats = [
  { to: 7, suffix: "+", label: "Source countries" },
  { to: 3, suffix: "", label: "KSA delivery hubs" },
  { to: 100, suffix: "%", label: "Halal certified" },
];

export function GlobalSourcing() {
  return (
    <section className="relative bg-stone-950 py-16 text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(45% 50% at 50% 40%, rgba(252,84,84,0.14), transparent), radial-gradient(40% 45% at 70% 70%, rgba(252,144,24,0.12), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-orange"
          >
            <Plane size={14} /> Global Sourcing
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05, ease }}
            className="mt-5 text-4xl font-black tracking-tight sm:text-5xl"
          >
            From the world&apos;s best,{" "}
            <span className="bg-gradient-to-r from-brand-red to-brand-orange bg-clip-text text-transparent">
              to your kitchen
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-stone-400"
          >
            We source premium meat from trusted partners around the globe and deliver it fresh to
            Jeddah, Dammam, and Riyadh through a strict cold chain.
          </motion.p>
        </div>

        {/* World map with labeled routes */}
        <div className="mx-auto mt-8 max-w-4xl">
          <WorldMap />
        </div>

        {/* Stats */}
        <div className="mt-8 flex flex-wrap justify-center gap-x-14 gap-y-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              className="text-center"
            >
              <div className="text-4xl font-black text-white">
                <CountUp to={s.to} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-stone-500">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
