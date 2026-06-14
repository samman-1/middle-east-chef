export type ProductCategory = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  items: string[];
  /** Brand accent color (hex) used for the category card gradient. */
  color: string;
};

/**
 * Placeholder catalog for Middle East Chef. Replace items / descriptions with the
 * real product range when available.
 */
export const productCategories: ProductCategory[] = [
  {
    slug: "beef",
    name: "Beef",
    tagline: "Tender, well-marbled cuts",
    description:
      "From everyday mince to premium steakhouse cuts, our beef is selected for consistency, marbling, and flavour.",
    items: ["Ribeye & Sirloin", "Tenderloin", "Brisket & Chuck", "Minced Beef", "Bone-in Short Ribs"],
    color: "#f25c54",
  },
  {
    slug: "lamb",
    name: "Lamb & Mutton",
    tagline: "Regional favourites",
    description:
      "Whole carcasses and portioned cuts of lamb and mutton, ideal for grills, slow-cooking, and traditional dishes.",
    items: ["Lamb Chops", "Leg of Lamb", "Shoulder", "Lamb Mince", "Mutton Cuts"],
    color: "#f7941d",
  },
  {
    slug: "poultry",
    name: "Poultry",
    tagline: "Fresh & frozen",
    description:
      "Whole birds and portioned poultry, available fresh or frozen, prepared to your specification.",
    items: ["Whole Chicken", "Breast Fillet", "Thighs & Drumsticks", "Wings", "Marinated Cuts"],
    color: "#6cc04a",
  },
  {
    slug: "veal",
    name: "Veal",
    tagline: "Delicate & lean",
    description:
      "Premium veal cuts for refined menus — mild in flavour and tender in texture.",
    items: ["Veal Escalope", "Veal Shank (Osso Buco)", "Veal Chops", "Minced Veal"],
    color: "#38a9c9",
  },
  {
    slug: "processed",
    name: "Processed & Marinated",
    tagline: "Ready to cook",
    description:
      "Value-added, kitchen-ready products marinated and portioned to save your team prep time.",
    items: ["Kebabs & Skewers", "Burger Patties", "Sausages", "Marinated Mixes"],
    color: "#3e6fb0",
  },
  {
    slug: "frozen",
    name: "Frozen Range",
    tagline: "Long shelf life",
    description:
      "Blast-frozen products handled through a strict cold chain to lock in quality and freshness.",
    items: ["Frozen Cuts", "Bulk Packs", "Portion-Controlled", "Wholesale Cases"],
    color: "#f25c54",
  },
];
