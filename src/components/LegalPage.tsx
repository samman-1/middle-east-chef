import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { Footer } from "./Footer";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <>
      <header className="border-b border-ink/10 bg-cream-soft">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Link to="/" aria-label="الصفحة الرئيسية">
            <Logo className="h-10" withText />
          </Link>
          <Link
            to="/"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-ink transition-colors hover:text-potato"
          >
            العودة للرئيسية
            <ArrowRight size={16} />
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <h1 className="text-3xl font-black tracking-tight text-ink sm:text-4xl">{title}</h1>
        {updated && <p className="mt-3 text-sm text-muted">آخر تحديث: {updated}</p>}
        <div className="legal-body mt-8">{children}</div>
      </main>

      <Footer />
    </>
  );
}
