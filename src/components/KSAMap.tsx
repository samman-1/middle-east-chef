import { useMemo } from "react";
import DottedMap from "dotted-map";
import { motion } from "framer-motion";
import { regions, regionHub, ksaRegionBounds } from "../data/catalog";

const GOLD = "#c8881f";

export function KSAMap({ dark = false }: { dark?: boolean }) {
  const { svg, W, H, pins, hub } = useMemo(() => {
    const map = new DottedMap({
      height: 60,
      grid: "diagonal",
      region: ksaRegionBounds,
      countries: ["SAU"],
    });
    const svg = map.getSVG({
      radius: 0.32,
      color: dark ? "#ffffff2e" : "#1e1b1726",
      shape: "circle",
      backgroundColor: "transparent",
    });
    const img = map.image;
    const pins = regions.map((r) => ({ r, p: map.getPin({ lat: r.coord[0], lng: r.coord[1] }) }));
    const hub = map.getPin({ lat: regionHub[0], lng: regionHub[1] });
    return { svg, W: img.width, H: img.height, pins, hub };
  }, [dark]);

  const curve = (a: { x: number; y: number }, b: { x: number; y: number }) => {
    const midX = (a.x + b.x) / 2;
    const dist = Math.hypot(a.x - b.x, a.y - b.y);
    const midY = Math.min(a.y, b.y) - dist * 0.22;
    return `M ${a.x} ${a.y} Q ${midX} ${midY} ${b.x} ${b.y}`;
  };

  return (
    <div className="relative mx-auto w-full" style={{ aspectRatio: `${W} / ${H}` }}>
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svg)}`}
        alt="خريطة المملكة العربية السعودية"
        draggable={false}
        className="pointer-events-none absolute inset-0 h-full w-full object-contain"
      />

      <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 h-full w-full overflow-visible">
        <defs>
          <linearGradient id="ksaArc" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#c0392b" />
            <stop offset="100%" stopColor={GOLD} />
          </linearGradient>
        </defs>

        {hub &&
          pins.map(({ r, p }, i) =>
            p && (r.coord[0] !== regionHub[0] || r.coord[1] !== regionHub[1]) ? (
              <motion.path
                key={r.ar}
                d={curve(hub, p)}
                fill="none"
                stroke="url(#ksaArc)"
                strokeWidth={0.18}
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.85 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, delay: i * 0.08, ease: "easeInOut" }}
              />
            ) : null
          )}

        {pins.map(({ r, p }) =>
          p ? (
            <g key={r.ar}>
              <circle cx={p.x} cy={p.y} r={r.both ? 0.95 : 0.62} fill={r.both ? GOLD : dark ? "#f4efe6" : "#1e1b17"} />
              {r.both && (
                <circle cx={p.x} cy={p.y} r={0.95} fill="none" stroke={GOLD} strokeWidth={0.18}>
                  <animate attributeName="r" from="0.95" to="3" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.7" to="0" dur="2s" repeatCount="indefinite" />
                </circle>
              )}
            </g>
          ) : null
        )}

        {hub && (
          <circle cx={hub.x} cy={hub.y} r={1.2} fill={GOLD} stroke={dark ? "#15110d" : "#f4efe6"} strokeWidth={0.3} />
        )}
      </svg>

      {/* labels */}
      {pins.map(({ r, p }, i) =>
        p ? (
          <motion.div
            key={r.ar}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.05, duration: 0.4 }}
            className={`absolute z-10 -translate-x-1/2 whitespace-nowrap rounded-full px-2 py-0.5 text-[10px] font-bold shadow-sm ${
              r.both
                ? "text-cream"
                : dark
                ? "border border-cream/15 bg-ink-card/90 text-cream"
                : "border border-ink/10 bg-cream-soft/95 text-ink"
            }`}
            style={{
              left: `${(p.x / W) * 100}%`,
              top: `${(p.y / H) * 100}%`,
              transform: `translate(-50%, ${i % 2 === 0 ? "-150%" : "60%"})`,
              ...(r.both ? { background: GOLD } : {}),
            }}
          >
            {r.ar}
          </motion.div>
        ) : null
      )}
    </div>
  );
}
