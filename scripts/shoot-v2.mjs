import { chromium } from "playwright";
const OUT="C:/Users/elyas/Downloads/Claude_Website_MEC/shots";
const b = await chromium.launch();
// desktop map
const p = await (await b.newContext({viewport:{width:1440,height:900}})).newPage();
await p.goto("http://localhost:3000/",{waitUntil:"networkidle"});
await p.evaluate(()=>{const h2=[...document.querySelectorAll("h2")].find(h=>h.textContent?.includes("to your kitchen")); h2?.closest("section")?.scrollIntoView({block:"center"});});
await new Promise(r=>setTimeout(r,3800));
await p.screenshot({path:`${OUT}/map-fixed.png`});
// mobile home
const m = await (await b.newContext({viewport:{width:390,height:844}, deviceScaleFactor:2, isMobile:true})).newPage();
await m.goto("http://localhost:3000/",{waitUntil:"networkidle"});
await new Promise(r=>setTimeout(r,3000));
await m.screenshot({path:`${OUT}/m-hero.png`});
await m.evaluate(()=>{const h2=[...document.querySelectorAll("h2")].find(h=>h.textContent?.includes("to your kitchen")); h2?.closest("section")?.scrollIntoView({block:"start"});});
await new Promise(r=>setTimeout(r,3000));
await m.screenshot({path:`${OUT}/m-map.png`});
await b.close(); console.log("done");
