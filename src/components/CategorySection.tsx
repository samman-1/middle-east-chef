import type { ReactNode } from "react";
import { motion } from "framer-motion";
import type { Category } from "../data/catalog";
import { Reveal } from "./Reveal";

function ProductCard({ ar, en, img, accent, fit = "cover", aspect = "4 / 3" }: { ar: string; en: string; img: string; accent: string; fit?: "cover" | "contain"; aspect?: string }) {
  const contain = fit === "contain";
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-cream-soft shadow-sm">
      <div className={`flex items-center justify-center overflow-hidden ${contain ? "bg-white" : ""}`} style={{ aspectRatio: aspect }}>
        <img src={img} alt={ar} className={`h-full w-full ${contain ? "object-contain" : "object-cover"} transition-transform duration-500 hover:scale-105`} />
      </div>
      <div className="mt-auto flex min-h-[3.75rem] items-center justify-between gap-2 px-4 py-3">
        <span className="font-latin text-[11px] font-semibold section-label text-muted">{en}</span>
        <span className="flex items-center gap-2 text-sm font-bold text-ink">
          {ar}
          <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: accent }} />
        </span>
      </div>
    </div>
  );
}

function BrandCard({ en, ar, origin, note, accent }: { en: string; ar: string; origin?: string; note?: string; accent: string }) {
  return (
    <div className="rounded-2xl border border-ink/10 bg-cream-soft p-5 text-center transition-shadow hover:shadow-md">
      <div className="font-latin text-xl font-bold text-ink">{en}</div>
      <div className="mt-0.5 text-sm text-muted">{ar}</div>
      {origin && (
        <div className="mt-2 font-latin text-[11px] font-semibold section-label" style={{ color: accent }}>
          {origin}
        </div>
      )}
      {note && <p className="mx-auto mt-3 max-w-[16rem] border-t border-ink/10 pt-3 text-xs leading-relaxed text-muted">{note}</p>}
    </div>
  );
}

export function CategorySection({
  cat,
  index,
  extra,
}: {
  cat: Category;
  index: number;
  extra?: ReactNode;
}) {
  return (
    <section id={cat.id} className="scroll-mt-20 border-t border-ink/10 py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* header */}
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="font-latin text-sm font-semibold section-label" style={{ color: cat.accent }}>
                {String(index + 1).padStart(2, "0")} — {cat.en}
              </span>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-ink sm:text-5xl">{cat.ar}</h2>
            </div>
            <span className="h-1.5 w-24 rounded-full" style={{ background: cat.accent }} />
          </div>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">{cat.blurbAr}</p>
        </Reveal>

        {/* products */}
        <div className={`mt-10 grid gap-5 sm:grid-cols-2 ${cat.products.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
          {cat.products.map((p, i) => (
            <Reveal key={p.ar} delay={i * 0.06} className="h-full">
              <ProductCard {...p} accent={cat.accent} fit={cat.fit} aspect={cat.aspect} />
            </Reveal>
          ))}
        </div>

        {extra}
      </div>
    </section>
  );
}
