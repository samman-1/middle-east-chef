import { Jimp } from "jimp";

const img = await Jimp.read("MEC.JPG");
const { data } = img.bitmap;

for (let i = 0; i < data.length; i += 4) {
  const r = data[i],
    g = data[i + 1],
    b = data[i + 2];
  const min = Math.min(r, g, b);
  if (r > 236 && g > 236 && b > 236) {
    // near-white background -> fully transparent
    data[i + 3] = 0;
  } else if (min > 212) {
    // soft edge halo -> partial transparency to avoid a white fringe
    const t = (min - 212) / (236 - 212); // 0..1
    data[i + 3] = Math.round(255 * (1 - t));
  }
}

await img.write("public/logo.png");
console.log("logo.png written with transparent background");
