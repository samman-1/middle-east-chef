export type Geo = [number, number]; // [lat, lon]

export type SourceRoute = {
  id: string;
  origin: string; // "São Paulo, Brazil"
  originShort: string; // "Brazil"
  product: string; // what we source there
  from: Geo;
  destCity: string; // "Jeddah"
  to: Geo;
};

// Saudi Arabia destinations (Middle East Chef hubs)
export const destinations: Record<string, Geo> = {
  Jeddah: [21.4858, 39.1925],
  Dammam: [26.4207, 50.0888],
  Riyadh: [24.7136, 46.6753],
};

export const routes: SourceRoute[] = [
  {
    id: "br-jed",
    origin: "São Paulo, Brazil",
    originShort: "Brazil",
    product: "Premium beef",
    from: [-23.5505, -46.6333],
    destCity: "Jeddah",
    to: destinations.Jeddah,
  },
  {
    id: "ar-jed",
    origin: "Buenos Aires, Argentina",
    originShort: "Argentina",
    product: "Grass-fed beef",
    from: [-34.6037, -58.3816],
    destCity: "Jeddah",
    to: destinations.Jeddah,
  },
  {
    id: "au-ryd",
    origin: "Sydney, Australia",
    originShort: "Australia",
    product: "Lamb & beef",
    from: [-33.8688, 151.2093],
    destCity: "Riyadh",
    to: destinations.Riyadh,
  },
  {
    id: "nz-dmm",
    origin: "Auckland, New Zealand",
    originShort: "New Zealand",
    product: "Grass-fed lamb",
    from: [-36.8485, 174.7633],
    destCity: "Dammam",
    to: destinations.Dammam,
  },
  {
    id: "jp-dmm",
    origin: "Tokyo, Japan",
    originShort: "Japan",
    product: "Wagyu",
    from: [35.6762, 139.6503],
    destCity: "Dammam",
    to: destinations.Dammam,
  },
  {
    id: "in-ryd",
    origin: "New Delhi, India",
    originShort: "India",
    product: "Buffalo & poultry",
    from: [28.6139, 77.209],
    destCity: "Riyadh",
    to: destinations.Riyadh,
  },
  {
    id: "us-ryd",
    origin: "Chicago, USA",
    originShort: "USA",
    product: "Prime beef",
    from: [41.8781, -87.6298],
    destCity: "Riyadh",
    to: destinations.Riyadh,
  },
];

// Markers: every origin + the three KSA hubs (hubs slightly larger)
export const globeMarkers = [
  ...routes.map((r) => ({ id: r.id, location: r.from, label: r.originShort })),
  ...Object.entries(destinations).map(([city, loc]) => ({
    id: `ksa-${city}`,
    location: loc,
    label: city,
  })),
];

export const globeArcs = routes.map((r) => ({
  id: r.id,
  from: r.from,
  to: r.to,
  label: `${r.originShort} → ${r.destCity}`,
}));
