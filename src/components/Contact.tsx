import { Phone, MessageCircle, MapPin } from "lucide-react";
import { company } from "../data/catalog";
import { Reveal } from "./Reveal";
import { Logo } from "./Logo";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-cream-soft py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="text-xs font-bold section-label text-muted">تواصل معنا</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-ink sm:text-5xl">
              للطلبات والمبيعات
            </h2>
            <p className="mt-4 max-w-md text-lg text-muted">
              فريق المبيعات جاهز لخدمتك، تواصل مباشرةً عبر الهاتف أو واتساب لطلب عرض سعر مخصّص
              لمنشأتك.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {company.contacts.map((c) => (
                <div key={c.tel} className="rounded-2xl border border-ink/10 bg-cream p-6">
                  <span className="font-latin text-[11px] font-semibold section-label text-meat">{c.roleEn}</span>
                  <h3 className="mt-1 text-xl font-bold text-ink">{c.name}</h3>
                  <p className="mt-1 text-sm text-muted">{c.role}</p>
                  <p dir="ltr" className="font-latin mt-4 text-lg font-bold tracking-wide text-ink">{c.phone}</p>
                  <div className="mt-4 flex gap-2">
                    <a
                      href={`https://wa.me/${c.tel.replace("+", "")}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-produce px-4 py-2.5 text-sm font-bold text-cream transition-transform hover:scale-[1.03]"
                    >
                      <MessageCircle size={15} /> واتساب
                    </a>
                    <a
                      href={`tel:${c.tel}`}
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-ink/15 px-4 py-2.5 text-sm font-bold text-ink transition-colors hover:bg-cream-deep"
                    >
                      <Phone size={15} /> اتصال
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-muted">
              <MapPin size={16} className="text-potato" /> {company.countryAr}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col items-center justify-center rounded-[2rem] border border-ink/10 bg-ink p-10 text-center text-cream">
              <img src="/pdf/mec-mark-color.png" alt="MEC" className="h-24 w-auto" />
              <p className="mt-6 text-2xl font-black">{company.nameAr}</p>
              <p className="mt-2 text-sm text-cream/70">{company.taglineAr}</p>
              <p className="mt-1 text-sm text-cream/50">{company.countryAr}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
