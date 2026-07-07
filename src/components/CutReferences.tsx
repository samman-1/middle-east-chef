import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { beefCuts } from "../data/catalog";
import { Reveal } from "./Reveal";
import { BeefChart } from "./BeefChart";

const ACCENT = "#c0392b";

export function CutReferences() {
  const [active, setActive] = useState(3);
  const cut = beefCuts[active];

  return (
    <Reveal className="mt-14">
      <div className="rounded-[1.75rem] border border-ink/10 bg-cream-soft p-6 sm:p-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-latin text-xs font-semibold section-label" style={{ color: ACCENT }}>
              CUT REFERENCES
            </p>
            <h3 className="mt-2 text-2xl font-black tracking-tight text-ink sm:text-3xl">
              خريطة القطعيات التشريحية
            </h3>
            <p className="mt-2 text-sm text-muted">مرّر فوق القطعة لمعرفة موضعها على الذبيحة.</p>
          </div>
          <span className="h-1.5 w-24 rounded-full" style={{ background: ACCENT }} />
        </div>

        <div className="mt-8 grid items-center gap-8 lg:grid-cols-[1.45fr_1fr]">
          {/* professional butcher chart */}
          <div className="rounded-3xl border border-ink/10 bg-cream p-4 sm:p-7">
            <div className="aspect-[511/301] w-full">
              <BeefChart active={active} onPick={setActive} />
            </div>
          </div>

          {/* detail + pills */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 16 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-ink/10 bg-cream p-7"
              >
                <div className="flex items-center gap-2 text-sm font-bold" style={{ color: ACCENT }}>
                  <MapPin size={16} /> {cut.en}
                </div>
                <div className="mt-2 text-3xl font-black tracking-tight text-ink">{cut.ar}</div>
                <p className="mt-3 leading-relaxed text-muted">{cut.note}</p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-5 flex flex-wrap gap-2">
              {beefCuts.map((c, i) => (
                <button
                  key={c.en}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="rounded-full border px-4 py-2 text-sm font-bold transition-colors"
                  style={
                    i === active
                      ? { borderColor: ACCENT, background: `${ACCENT}14`, color: ACCENT }
                      : { borderColor: "#1e1b1722", color: "#6b635a" }
                  }
                >
                  {c.ar}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
