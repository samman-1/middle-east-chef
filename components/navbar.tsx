"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Transparent (light text) only over the dark hero at the top of the home page.
  const transparent = isHome && !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        transparent
          ? "bg-transparent"
          : "border-b border-black/5 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70"
      )}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label="Middle East Chef home" onClick={() => setOpen(false)}>
          <Logo subTextClassName={transparent ? "text-white/80" : "text-slate-500"} />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  transparent
                    ? "text-white/85 hover:text-white"
                    : "text-slate-600 hover:text-brand-red",
                  active && (transparent ? "text-white" : "text-brand-red")
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.03] hover:bg-brand-red/90"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "md:hidden",
            transparent ? "text-white" : "text-slate-800"
          )}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-black/5 bg-white md:hidden">
          <div className="flex flex-col px-5 py-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "py-3 text-base font-medium text-slate-700",
                  pathname === link.href && "text-brand-red"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-brand-red px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
