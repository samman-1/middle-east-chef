import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/logo";

const nav = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative z-10 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <Logo subTextClassName="text-slate-400" className="brightness-110" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            Premium meat distribution you can trust — quality cuts, reliable cold-chain delivery,
            and service built for restaurants, retailers, and wholesalers.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Explore</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-slate-400 transition-colors hover:text-brand-orange">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li className="flex items-start gap-3">
              <Phone size={16} className="mt-0.5 shrink-0 text-brand-orange" />
              <span>+000 000 0000</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={16} className="mt-0.5 shrink-0 text-brand-orange" />
              <span>info@middleeastchef.com</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-brand-orange" />
              <span>Your business address here</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-6 text-center text-xs text-slate-500 sm:px-8">
          © {new Date().getFullYear()} Middle East Chef. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
