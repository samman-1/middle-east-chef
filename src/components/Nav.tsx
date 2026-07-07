import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { href: "#about", label: "عن الشركة" },
  { href: "#products", label: "المنتجات" },
  { href: "#coverage", label: "التغطية" },
  { href: "#quality", label: "الجودة" },
  { href: "#contact", label: "تواصل" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-ink/10 bg-cream/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#top" aria-label="MEC">
          <Logo className="h-9" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-cream transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            <Phone size={15} /> للتواصل
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 text-ink md:hidden"
            aria-label="القائمة"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-ink/10 bg-cream px-5 py-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink hover:bg-cream-deep"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
