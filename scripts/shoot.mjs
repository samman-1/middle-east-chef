import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const OUT = "C:/Users/elyas/Downloads/Claude_Website_MEC/shots";
mkdirSync(OUT, { recursive: true });

const base = "http://localhost:3000";
const browser = await chromium.launch({ args: ["--use-gl=angle", "--use-angle=swiftshader", "--ignore-gpu-blocklist"] });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

// Scroll through the whole page so all whileInView (once) reveals fire, then return to top.
async function triggerReveals() {
  await page.evaluate(async () => {
    const step = Math.round(window.innerHeight * 0.6);
    for (let y = 0; y <= document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 180));
    }
    window.scrollTo(0, 0);
  });
  await wait(600);
}

// Home — hero (top)
await page.goto(base + "/", { waitUntil: "networkidle" });
await wait(6500); // let WebGL render + 3D model load + intro finish
await page.screenshot({ path: `${OUT}/01-home-hero.png` });

// Home — "Why" section
await page.evaluate(() => {
  const el = [...document.querySelectorAll("h2")].find((h) =>
    h.textContent?.includes("Quality you can taste")
  );
  el?.scrollIntoView({ block: "center" });
});
await wait(1200);
await page.screenshot({ path: `${OUT}/02-home-why.png` });

// Home — product preview
await page.evaluate(() => {
  const el = [...document.querySelectorAll("h2")].find((h) =>
    h.textContent?.includes("full catalogue")
  );
  el?.scrollIntoView({ block: "center" });
});
await wait(1200);
await page.screenshot({ path: `${OUT}/03-home-products.png` });

// Home — CTA (bottom)
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await wait(1200);
await page.screenshot({ path: `${OUT}/04-home-cta.png` });

// Products (full page)
await page.goto(base + "/products", { waitUntil: "networkidle" });
await triggerReveals();
await page.screenshot({ path: `${OUT}/05-products.png`, fullPage: true });

// About (full page)
await page.goto(base + "/about", { waitUntil: "networkidle" });
await triggerReveals();
await page.screenshot({ path: `${OUT}/06-about.png`, fullPage: true });

// Contact (full page)
await page.goto(base + "/contact", { waitUntil: "networkidle" });
await triggerReveals();
await page.screenshot({ path: `${OUT}/07-contact.png`, fullPage: true });

await browser.close();
console.log("done");
