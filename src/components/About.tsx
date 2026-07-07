import { company } from "../data/catalog";
import { Reveal } from "./Reveal";
import { Dashes } from "./Logo";

export function About() {
  return (
    <section id="about" className="bg-cream-soft py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-ink/10 shadow-xl shadow-ink/5">
              <img src="/pdf/about-freezer.jpg" alt="ثلاجات العرض" className="h-full w-full object-cover" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-xs font-bold section-label text-muted">نبذة عن الشركة</p>
            <h2 className="mt-4 text-3xl font-black leading-snug tracking-tight text-ink sm:text-4xl">
              {company.aboutTitleAr}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">{company.aboutBodyAr}</p>
            <div className="mt-8"><Dashes /></div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
