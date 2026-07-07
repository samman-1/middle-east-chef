import { cowPath, regionPaths } from "./beefPaths";
import { beefCuts } from "../data/catalog";

const INK = "#241c17";
const BASE = "#e9d6ad";
const ACTIVE = "#c0392b";
const SEP = "#241c17";

/* lookup: region id -> cut index */
const idToIdx: Record<string, number> = {};
beefCuts.forEach((c, i) => (idToIdx[c.id] = i));

export function BeefChart({ active, onPick }: { active: number; onPick: (i: number) => void }) {
  return (
    <svg viewBox="0 0 511 301" className="h-full w-full" role="img" aria-label="خريطة قطعيات اللحم البقري">
      {/* dark silhouette (head, legs, tail, outline) */}
      <path d={cowPath} fill={INK} />

      {/* cut regions */}
      {regionPaths.map(({ id, d }) => {
        const i = idToIdx[id];
        const on = i === active;
        return (
          <path
            key={id}
            d={d}
            fill={on ? ACTIVE : BASE}
            stroke={SEP}
            strokeWidth={2}
            strokeLinejoin="round"
            style={{ cursor: "pointer", transition: "fill .25s ease" }}
            onMouseEnter={() => i != null && onPick(i)}
            onClick={() => i != null && onPick(i)}
          />
        );
      })}

      {/* centered labels (site font) */}
      {beefCuts.map((c, i) => {
        const on = i === active;
        const words = c.stack ? c.short.split(" ") : [c.short];
        const fontSize = c.fs ?? (c.rot ? 7.5 : c.stack ? 8 : 9);
        return (
          <text
            key={c.id}
            x={c.cx}
            y={c.cy}
            textAnchor="middle"
            dominantBaseline="middle"
            transform={c.rot ? `rotate(-90 ${c.cx} ${c.cy})` : undefined}
            fontSize={fontSize}
            fontWeight={on ? 800 : 700}
            fill={on ? "#fff" : "#2a211a"}
            style={{
              fontFamily: "inherit",
              pointerEvents: "none",
              paintOrder: "stroke",
              stroke: on ? "#7a1f17" : "#f4efe6",
              strokeWidth: fontSize <= 7 ? 0.9 : 2,
              strokeOpacity: on ? 0.5 : 0.7,
              strokeLinejoin: "round",
            }}
          >
            {words.length > 1
              ? words.map((w, k) => (
                  <tspan key={k} x={c.cx} dy={k === 0 ? "-0.55em" : "1.1em"}>
                    {w}
                  </tspan>
                ))
              : c.short}
          </text>
        );
      })}
    </svg>
  );
}
