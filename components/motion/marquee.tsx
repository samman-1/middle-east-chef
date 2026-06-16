import type { ReactNode } from "react";

/**
 * Lightweight CSS marquee. Renders its children twice and scrolls them
 * seamlessly (see `@keyframes marquee` in globals.css). Pauses on hover.
 */
export function Marquee({
  children,
  speed = 30,
  className = "",
}: {
  children: ReactNode;
  speed?: number; // seconds per loop
  className?: string;
}) {
  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <div
        className="flex w-max gap-10 group-hover:[animation-play-state:paused]"
        style={{ animation: `marquee ${speed}s linear infinite` }}
      >
        <div className="flex shrink-0 items-center gap-10">{children}</div>
        <div className="flex shrink-0 items-center gap-10" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
