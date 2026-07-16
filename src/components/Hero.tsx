import { motion } from "framer-motion";
import { ArrowLeft, Snowflake } from "lucide-react";
import { company, stats } from "../data/catalog";
import { Dashes } from "./Logo";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="pointer-events-none absolute -top-32 left-0 h-[34rem] w-[34rem] rounded-full bg-potato/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-[30rem] w-[30rem] rounded-full bg-meat/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:pb-24">
        <div className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
            <Dashes />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease }}
            className="mt-6 text-4xl font-black leading-[1.14] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            المنظومة المتكاملة
            <br />
            <span className="text-potato">للأغذية المجمّدة</span>
            <br />
            في المملكة
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16, ease }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            {company.aboutBodyAr}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24, ease }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#products"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ink px-7 text-sm font-bold text-cream transition-transform hover:scale-[1.03]"
            >
              تصفّح المنتجات <ArrowLeft size={17} />
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-ink/20 bg-cream-soft px-7 text-sm font-bold text-ink transition-colors hover:border-ink"
            >
              تواصل معنا
            </a>
          </motion.div>

          <div className="mt-10 grid max-w-lg grid-cols-4 gap-4 border-t border-ink/10 pt-6">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-black text-ink">{s.value}</div>
                <div className="mt-0.5 text-[11px] font-medium text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-ink/10 shadow-2xl shadow-ink/10">
            <img src="/pdf/meat-hero.jpg" alt="منتجات مجمّدة" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl border border-ink/10 bg-cream-soft/95 px-5 py-3.5 shadow-xl backdrop-blur sm:-left-8">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-produce/15 text-produce">
              <Snowflake size={18} />
            </span>
            <div>
              <div className="text-sm font-bold text-ink">سلسلة تبريد محكومة</div>
              <div className="text-xs text-muted">من المصدر حتى التسليم</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
