"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { animals, type AnimalKey } from "@/lib/cuts";

export function CutsDiagram() {
  const [animal, setAnimal] = useState<AnimalKey>("beef");
  const [active, setActive] = useState(0);

  const data = animals[animal];
  const cut = data.cuts[active];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Our Range
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Know your cut — and where it&apos;s from
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            Hover a cut to see the prime region we source it from. Every cut, traced to its origin.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-full border border-stone-200 bg-stone-50 p-1">
            {(Object.keys(animals) as AnimalKey[]).map((key) => (
              <button
                key={key}
                onClick={() => {
                  setAnimal(key);
                  setActive(0);
                }}
                className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
                  animal === key ? "bg-brand-red text-white" : "text-stone-600 hover:text-brand-red"
                }`}
              >
                {animals[key].label} <span className="opacity-60">· {animals[key].short}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
          {/* Diagram */}
          <div className="relative mx-auto aspect-square w-full max-w-2xl rounded-3xl border border-stone-200 bg-stone-50">
            {/* Silhouette (brand-gradient via mask) */}
            <div
              className="absolute inset-[8%] bg-gradient-to-br from-brand-red to-brand-orange opacity-90"
              style={{
                WebkitMaskImage: `url(${data.svg})`,
                maskImage: `url(${data.svg})`,
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskPosition: "center",
                WebkitMaskSize: "contain",
                maskSize: "contain",
              }}
            />

            {/* Hotspots */}
            {data.cuts.map((c, i) => {
              const isActive = i === active;
              return (
                <button
                  key={c.name}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-label={`${c.name} — ${c.origin}`}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${c.x}%`, top: `${c.y}%` }}
                >
                  <span className="relative flex h-4 w-4 items-center justify-center">
                    {isActive && (
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-red opacity-60" />
                    )}
                    <span
                      className={`relative inline-flex rounded-full ring-2 ring-white transition-all ${
                        isActive ? "h-4 w-4 bg-brand-red" : "h-3 w-3 bg-stone-900/70"
                      }`}
                    />
                  </span>

                  {/* Callout on the active hotspot */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.span
                        initial={{ opacity: 0, y: 6, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-[calc(100%+10px)] left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-xl border border-stone-200 bg-white px-3 py-2 text-center shadow-xl"
                      >
                        <span className="block text-sm font-bold text-stone-900">{c.name}</span>
                        <span className="block text-xs text-brand-red">from {c.origin}</span>
                        <span className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1 rotate-45 border-b border-r border-stone-200 bg-white" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>

          {/* Detail + selector */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={animal + active}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-stone-200 bg-stone-50 p-8"
              >
                <div className="flex items-center gap-2 text-sm font-semibold text-brand-red">
                  <MapPin size={16} /> Sourced from
                </div>
                <div className="mt-2 text-3xl font-black tracking-tight text-stone-900">
                  {cut.origin}
                </div>
                <div className="mt-4 text-lg font-semibold text-stone-900">{cut.name}</div>
                <p className="mt-1 text-stone-600">{cut.note}</p>
              </motion.div>
            </AnimatePresence>

            {/* Cut pills */}
            <div className="mt-6 flex flex-wrap gap-2">
              {data.cuts.map((c, i) => (
                <button
                  key={c.name}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    i === active
                      ? "border-brand-red bg-brand-red/10 text-brand-red"
                      : "border-stone-200 bg-white text-stone-600 hover:border-brand-red/40"
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
