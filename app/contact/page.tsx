import type { Metadata } from "next";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Middle East Chef for quotes, wholesale enquiries, and orders. Premium meat distribution for restaurants, retailers, and wholesalers.",
};

const details = [
  { icon: Phone, label: "Phone", value: "+000 000 0000" },
  { icon: Mail, label: "Email", value: "info@middleeastchef.com" },
  { icon: MapPin, label: "Address", value: "Your business address here" },
  { icon: Clock, label: "Hours", value: "Sun – Fri, 8:00 – 18:00" },
];

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-stone-200 bg-stone-50 pt-36 pb-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
              Contact
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
              Let&apos;s talk about your order
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-stone-600">
              Send us your requirements and our team will get back to you with a tailored quote.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Details */}
          <Reveal>
            <h2 className="text-2xl font-bold text-stone-900">Get in touch</h2>
            <p className="mt-3 text-stone-600">
              Reach us directly, or fill in the form and we&apos;ll come back to you shortly.
            </p>
            <ul className="mt-8 space-y-5">
              {details.map((d) => (
                <li key={d.label} className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-red/10 text-brand-red">
                    <d.icon size={20} />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                      {d.label}
                    </div>
                    <div className="mt-0.5 font-medium text-stone-800">{d.value}</div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 overflow-hidden rounded-2xl border border-stone-200">
              <div className="flex h-48 items-center justify-center bg-stone-100 text-sm text-stone-400">
                Map placeholder — add your location
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-stone-200 bg-white p-7 shadow-sm sm:p-9">
              <h2 className="text-xl font-bold text-stone-900">Send an enquiry</h2>
              <p className="mt-2 text-sm text-stone-600">
                Tell us what you need and we&apos;ll prepare a quote.
              </p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
