"use client";

import { useState } from "react";

/**
 * Brand logo. Renders the real /logo.png if the user has added it to /public,
 * otherwise falls back to an on-brand "MEC — MIDDLE EAST CHEF" wordmark so the
 * site is always complete. Drop a logo.png into /public to use the real mark.
 */
export function Logo({
  className = "",
  subTextClassName = "",
}: {
  className?: string;
  subTextClassName?: string;
}) {
  const [imgOk, setImgOk] = useState(true);

  if (imgOk) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/logo.png"
        alt="Middle East Chef"
        className={`h-12 w-auto object-contain ${className}`}
        onError={() => setImgOk(false)}
      />
    );
  }

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-red via-brand-orange to-brand-teal text-lg font-black text-white shadow-sm">
        M
      </span>
      <span className="flex flex-col leading-none">
        <span className="bg-gradient-to-r from-brand-red via-brand-orange to-brand-teal bg-clip-text text-xl font-black tracking-tight text-transparent">
          MEC
        </span>
        <span
          className={`mt-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] ${subTextClassName}`}
        >
          Middle East Chef
        </span>
      </span>
    </span>
  );
}
