import { Reveal } from "./Reveal";
import { KSAMap } from "./KSAMap";

export function Coverage() {
  return (
    <div id="coverage" className="mt-16 scroll-mt-20 rounded-[1.75rem] border border-ink/10 bg-cream-soft p-6 sm:p-10">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold section-label text-muted">التغطية الجغرافية</p>
            <h3 className="mt-2 text-2xl font-black tracking-tight text-ink sm:text-3xl">
              توزيع يمتدّ عبر مناطق المملكة
            </h3>
          </div>
          <div className="flex flex-wrap items-center gap-5 text-xs font-medium text-muted">
            <span className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full" style={{ background: "#c8881f" }} /> الوسطى والشرقية · Maestro
            </span>
            <span className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full border border-ink/40" /> جميع المناطق · Eurogold
            </span>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mt-8">
        <div className="grid items-center gap-6 lg:grid-cols-[1.5fr_0.5fr]">
          <KSAMap />
          <div className="rounded-2xl bg-ink p-6 text-center text-cream lg:p-8">
            <div className="text-5xl font-black text-potato">١٣</div>
            <p className="mt-2 text-sm text-cream/70">منطقة إدارية ضمن نطاق التوزيع</p>
            <div className="mt-5 border-t border-cream/15 pt-5 text-right text-sm leading-relaxed text-cream/80">
              مركز التوزيع في <span className="font-bold text-cream">الرياض</span>، وتمتدّ شبكتنا إلى
              كل مناطق المملكة الثلاث عشرة.
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
