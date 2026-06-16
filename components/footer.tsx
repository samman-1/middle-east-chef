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
    <footer className="relative z-10 border-t border-stone-200 bg-stone-50 text-stone-600">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <Logo subTextClassName="text-stone-500" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone-600">
            Premium meat distribution you can trust — quality cuts, reliable cold-chain delivery,
            and service built for restaurants, retailers, and wholesalers.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-900">Explore</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-stone-600 transition-colors hover:text-brand-red">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-900">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-stone-600">
            <li className="flex items-start gap-3">
              <Phone size={16} className="mt-0.5 shrink-0 text-brand-red" />
              <span>+000 000 0000</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={16} className="mt-0.5 shrink-0 text-brand-red" />
              <span>info@middleeastchef.com</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-brand-red" />
              <span>Your business address here</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-stone-200">
        <div className="mx-auto max-w-7xl px-5 py-6 text-center text-xs text-stone-500 sm:px-8">
          © {new Date().getFullYear()} Middle East Chef. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
