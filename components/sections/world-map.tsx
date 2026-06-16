"use client";

import { useMemo } from "react";
import DottedMap from "dotted-map";
import { motion } from "framer-motion";
import { routes } from "@/lib/sourcing";

const W = 800;
const H = 400;

const project = ([lat, lon]: [number, number]) => ({
  x: (lon + 180) * (W / 360),
  y: (90 - lat) * (H / 180),
});

const curve = (a: { x: number; y: number }, b: { x: number; y: number }) => {
  const midX = (a.x + b.x) / 2;
  const midY = Math.min(a.y, b.y) - 60;
  return `M ${a.x} ${a.y} Q ${midX} ${midY} ${b.x} ${b.y}`;
};

export function WorldMap() {
  const svgMap = useMemo(() => {
    const map = new DottedMap({ height: 100, grid: "diagonal" });
    return map.getSVG({
      radius: 0.28,
      color: "#ffffff55",
      shape: "circle",
      backgroundColor: "transparent",
    });
  }, []);

  const pts = routes.map((r) => ({ ...r, a: project(r.from), b: project(r.to) }));

  return (
    <div className="relative w-full aspect-[2/1]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        alt="World map"
        draggable={false}
        className="pointer-events-none absolute inset-0 h-full w-full object-fill [mask-image:linear-gradient(to_bottom,transparent,white_12%,white_88%,transparent)]"
      />

      <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="arcGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#fc5454" />
            <stop offset="100%" stopColor="#fc9018" />
          </linearGradient>
        </defs>
        {pts.map((p, i) => (
          <g key={p.id}>
            <motion.path
              d={curve(p.a, p.b)}
              fill="none"
              stroke="url(#arcGrad)"
              strokeWidth={1.4}
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: i * 0.22, ease: "easeInOut" }}
            />
            {[
              { pt: p.a, c: "#fc9018" },
              { pt: p.b, c: "#fc5454" },
            ].map(({ pt, c }, j) => (
              <g key={j}>
                <circle cx={pt.x} cy={pt.y} r={2.4} fill={c} />
                <circle cx={pt.x} cy={pt.y} r={2.4} fill="none" stroke={c} strokeWidth={0.8}>
                  <animate
                    attributeName="r"
                    from="2.4"
                    to="9"
                    dur="1.8s"
                    begin={`${i * 0.22}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.7"
                    to="0"
                    dur="1.8s"
                    begin={`${i * 0.22}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            ))}
          </g>
        ))}
      </svg>

      {/* Route labels — anchored at each ORIGIN, alternating above/below, kept inside the map */}
      {pts.map((p, i) => {
        const xPct = (p.a.x / W) * 100;
        const yPct = (p.a.y / H) * 100;
        // keep edge labels inside: extend left near the right edge, right near the left edge
        const tx = xPct > 62 ? "calc(-100% - 8px)" : xPct < 32 ? "8px" : "-50%";
        const below = i % 2 === 1;
        const ty = below ? "12px" : "calc(-100% - 12px)";
        // manual separation for the tightly-clustered Oceania pair
        const nudge: Record<string, { dx: number; dy: number }> = {
          "au-ryd": { dx: -40, dy: -14 },
          "nz-dmm": { dx: 44, dy: 30 },
        };
        const { dx, dy } = nudge[p.id] ?? { dx: 0, dy: 0 };
        return (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 + i * 0.18, duration: 0.45 }}
            className="absolute z-10 whitespace-nowrap rounded-full border border-white/15 bg-stone-900/90 px-2.5 py-1 text-[10px] font-semibold shadow-lg backdrop-blur sm:text-xs"
            style={{
              left: `${xPct}%`,
              top: `${yPct}%`,
              transform: `translate(calc(${tx} + ${dx}px), calc(${ty} + ${dy}px))`,
            }}
          >
            <span className="text-brand-orange">{p.originShort}</span>
            <span className="text-stone-500"> → </span>
            <span className="text-brand-red">{p.destCity}</span>
          </motion.div>
        );
      })}
    </div>
  );
}
