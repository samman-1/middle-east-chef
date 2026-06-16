"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

/**
 * Front-end-only enquiry form. No backend is wired yet — on submit it shows a
 * confirmation. To actually deliver messages, connect a service such as Formspree
 * (set the form `action`) or a serverless route.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-brand-green/30 bg-brand-green/10 p-10 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-green text-white">
          <Check size={28} />
        </span>
        <h3 className="mt-4 text-xl font-semibold text-stone-900">Thank you!</h3>
        <p className="mt-2 max-w-sm text-sm text-stone-600">
          Your enquiry has been received. Our team will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-sm font-medium text-brand-red hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" placeholder="Your name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input id="company" name="company" placeholder="Restaurant / business" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="you@example.com" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" placeholder="+000 000 0000" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">How can we help?</Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us what products you need, quantities, and delivery location…"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-brand-red px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.01] hover:bg-brand-red/90 sm:w-auto sm:px-10"
      >
        Send enquiry
      </button>
    </form>
  );
}
