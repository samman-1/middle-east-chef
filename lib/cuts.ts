export type Cut = {
  name: string;
  origin: string;
  flag: string;
  note: string;
  x: number; // % position over the animal silhouette
  y: number;
};

export type AnimalKey = "beef" | "lamb";

export const animals: Record<
  AnimalKey,
  { label: string; short: string; svg: string; cuts: Cut[] }
> = {
  beef: {
    label: "Beef",
    short: "Cow",
    svg: "/cow.svg",
    cuts: [
      { name: "Chuck", origin: "USA", flag: "🇺🇸", note: "Rich, hearty cuts for braising and mince.", x: 64, y: 41 },
      { name: "Ribeye", origin: "Brazil", flag: "🇧🇷", note: "Beautifully marbled — the steakhouse favourite.", x: 53, y: 38 },
      { name: "Tenderloin", origin: "Japan", flag: "🇯🇵", note: "Wagyu-grade tenderness, melt-in-the-mouth.", x: 43, y: 36 },
      { name: "Rump & Round", origin: "Australia", flag: "🇦🇺", note: "Lean, versatile cuts for roasting and grilling.", x: 25, y: 41 },
      { name: "Brisket", origin: "Argentina", flag: "🇦🇷", note: "Grass-fed, perfect for slow-cooking and smoking.", x: 62, y: 56 },
      { name: "Short Rib", origin: "India", flag: "🇮🇳", note: "Deep flavour, ideal for low-and-slow dishes.", x: 47, y: 55 },
    ],
  },
  lamb: {
    label: "Lamb",
    short: "Sheep",
    svg: "/sheep.svg",
    cuts: [
      { name: "Shoulder", origin: "Australia", flag: "🇦🇺", note: "Tender and rich — great for slow roasts.", x: 62, y: 47 },
      { name: "Rack", origin: "New Zealand", flag: "🇳🇿", note: "Grass-fed, elegant frenched rack of lamb.", x: 50, y: 43 },
      { name: "Loin", origin: "Australia", flag: "🇦🇺", note: "Prime loin chops, lean and tender.", x: 41, y: 43 },
      { name: "Leg", origin: "New Zealand", flag: "🇳🇿", note: "The classic centrepiece roast.", x: 26, y: 49 },
    ],
  },
};
