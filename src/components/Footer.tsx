import { Link } from "react-router-dom";
import { company, categories } from "../data/catalog";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-cream">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Logo className="h-12" withText />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              شركة سعودية متخصّصة في استيراد وتوزيع الأغذية المجمّدة عالية الجودة لقطاع خدمات
              الطعام والجملة في جميع مناطق المملكة.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold section-label text-muted">المنتجات</p>
            <ul className="mt-4 space-y-2.5 text-sm text-ink/80">
              {categories.map((c) => (
                <li key={c.id}>
                  <Link to={`/#${c.id}`} className="hover:text-potato">{c.ar}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold section-label text-muted">للطلبات</p>
            <ul className="mt-4 space-y-2.5 text-sm text-ink/80">
              {company.contacts.map((c) => (
                <li key={c.tel} className="flex items-center justify-between gap-3">
                  <span>{c.name}</span>
                  <span dir="ltr" className="font-latin text-muted">{c.phone}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-ink/10 pt-6 text-xs text-muted">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:justify-start">
            <Link to="/privacy" className="font-semibold hover:text-potato">سياسة الخصوصية</Link>
            <span className="text-ink/20">·</span>
            <Link to="/terms" className="font-semibold hover:text-potato">الشروط والأحكام</Link>
          </div>
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <span>© ٢٠٢٦ {company.nameAr} · جميع الحقوق محفوظة</span>
            <span className="font-latin">Middle East Chef · Frozen Food Import &amp; Distribution</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
