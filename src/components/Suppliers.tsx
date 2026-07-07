import { supplierGroups } from "../data/catalog";
import { Reveal } from "./Reveal";

export function Suppliers() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-bold section-label text-muted">شبكة الموردين والشركاء</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-ink sm:text-4xl">
            علامات عالمية موثوقة في منظومة واحدة
          </h2>
        </Reveal>

        <div className="mt-10 space-y-5">
          {supplierGroups.map((g, gi) => (
            <Reveal key={g.en} delay={gi * 0.06}>
              <div className="grid items-center gap-4 rounded-2xl border border-ink/10 bg-cream-soft p-5 sm:grid-cols-[200px_1fr]">
                <div className="flex items-center gap-3 border-ink/10 sm:border-l sm:pl-4">
                  <span className="h-3 w-3 rounded-sm" style={{ background: g.accent }} />
                  <div>
                    <div className="text-base font-bold text-ink">{g.ar}</div>
                    <div className="font-latin text-[11px] font-semibold section-label text-muted">{g.en}</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.brands.map((b) => (
                    <span
                      key={b}
                      className="font-latin rounded-full border border-ink/10 bg-cream px-4 py-1.5 text-sm font-semibold text-ink"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
