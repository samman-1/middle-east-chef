import { Snowflake, Star, ShieldCheck, Share2, Globe, Truck, MapPin, RefreshCw } from "lucide-react";
import { standards } from "../data/catalog";
import { Reveal } from "./Reveal";

const iconMap: Record<string, typeof Snowflake> = {
  snow: Snowflake,
  star: Star,
  shield: ShieldCheck,
  share: Share2,
  globe: Globe,
  truck: Truck,
  pin: MapPin,
  refresh: RefreshCw,
};

export function Standards() {
  return (
    <section id="quality" className="scroll-mt-20 bg-cream-soft py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-bold section-label text-muted">الجودة والثقة</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-ink sm:text-5xl">
            معايير نلتزم بها في كل شحنة
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {standards.map((s, i) => {
            const Icon = iconMap[s.icon] ?? Star;
            return (
              <Reveal key={s.en} delay={i * 0.05}>
                <div className="group h-full rounded-2xl border border-ink/10 bg-cream p-7 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5">
                  <Icon size={26} style={{ color: s.accent }} />
                  <p className="mt-6 font-latin text-[11px] font-semibold section-label text-muted">{s.en}</p>
                  <h3 className="mt-1 text-xl font-bold text-ink">{s.ar}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.textAr}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
