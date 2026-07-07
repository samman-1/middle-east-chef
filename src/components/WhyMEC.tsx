import { whyMEC, company } from "../data/catalog";
import { Reveal } from "./Reveal";

export function WhyMEC() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-cream">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(200,136,31,0.14),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold section-label text-cream/50">لماذا {company.nameAr}</p>
          <h2 className="mt-3 text-4xl font-black leading-snug tracking-tight sm:text-5xl">
            شريك توزيع للأغذية المجمّدة تثق به منشأتك
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-cream/10 bg-cream/10 sm:grid-cols-2 lg:grid-cols-4">
          {whyMEC.map((w, i) => (
            <Reveal key={w.n} delay={i * 0.06}>
              <div className="h-full bg-ink p-7">
                <span className="font-latin text-sm font-semibold text-cream/40">{w.n}</span>
                <h3 className="mt-4 text-lg font-bold">{w.titleAr}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/70">{w.textAr}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
