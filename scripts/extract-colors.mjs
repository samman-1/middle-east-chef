import { Jimp } from "jimp";

const img = await Jimp.read("MEC.JPG");
const { data, width, height } = img.bitmap;

const counts = new Map();
const q = (v) => Math.round(v / 12) * 12; // quantize

for (let i = 0; i < data.length; i += 4) {
  const r = data[i],
    g = data[i + 1],
    b = data[i + 2];
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const sat = max === 0 ? 0 : (max - min) / max;
  // skip near-white, near-black, and grays (we want the saturated brand colors)
  if (max > 240 && min > 230) continue; // white
  if (max < 40) continue; // black
  if (sat < 0.25) continue; // gray-ish
  const key = `${q(r)},${q(g)},${q(b)}`;
  counts.set(key, (counts.get(key) || 0) + 1);
}

const top = [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 24);
const hex = (r, g, b) =>
  "#" + [r, g, b].map((x) => Math.min(255, x).toString(16).padStart(2, "0")).join("");

console.log(`image ${width}x${height}`);
for (const [key, n] of top) {
  const [r, g, b] = key.split(",").map(Number);
  console.log(`${hex(r, g, b)}  rgb(${r},${g},${b})  count=${n}`);
}
