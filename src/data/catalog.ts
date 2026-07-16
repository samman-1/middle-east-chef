// المصدر الوحيد للمحتوى — مستخرَج مباشرةً من بروفايل "طاهي الشرق الأوسط (MEC)".
// Single source of truth — taken directly from the MEC portfolio PDF.

export const company = {
  nameAr: "طاهي الشرق الأوسط",
  nameEn: "Middle East Chef",
  short: "MEC",
  taglineAr: "استيراد وتوزيع الأغذية المجمّدة",
  taglineEn: "Frozen Food Import & Distribution",
  countryAr: "المملكة العربية السعودية",
  aboutTitleAr: "شركة سعودية متخصّصة في استيراد وتوزيع الأغذية المجمّدة",
  aboutBodyAr:
    "تجمع طاهي الشرق الأوسط بين الفهم العميق للسوق المحلّي وقدرات التوريد الدولية، لتقدّم لعملائها من قطاع خدمات الطعام والجملة منظومة متكاملة من المنتجات المجمّدة عالية الجودة في جميع مناطق المملكة العربية السعودية.",
  contacts: [
    { name: "محمود سلامة", role: "المبيعات", roleEn: "SALES", phone: "+966 56 789 8136", tel: "+966567898136" },
    { name: "تامر النجار", role: "المبيعات", roleEn: "SALES", phone: "+966 54 525 6007", tel: "+966545256007" },
    { name: "عبدالله الهطلاني", role: "مدير العمليات", roleEn: "OPERATIONS", phone: "+966 50 001 1528", tel: "+966500011528" },
  ],
};

export const aboutPillars = [
  { titleAr: "توريد دولي", textAr: "علاقات مباشرة مع كبار الموردين العالميين." },
  { titleAr: "تغطية وطنية", textAr: "توزيع يمتدّ إلى مناطق المملكة كافة." },
  { titleAr: "جودة مضمونة", textAr: "سلسلة تبريد محكومة من المصدر إلى العميل." },
];

export type Product = { ar: string; en: string; img: string };
export type Brand = { en: string; ar: string; origin?: string; note?: string };

export type Category = {
  id: string;
  ar: string;
  en: string;
  accent: string;
  blurbAr: string;
  hero: string;
  products: Product[];
  brands: Brand[];
  fit?: "cover" | "contain";
  aspect?: string;
};

export const categories: Category[] = [
  {
    id: "meats",
    ar: "اللحوم المستوردة",
    en: "Imported Frozen Meats",
    accent: "#c0392b",
    blurbAr:
      "لحوم بقرية مجمّدة عالية الجودة بمواصفات حلال، ضمن سلسلة تبريد محكومة من المصدر حتى التسليم، مستوردة من أربعة مناشئ عالمية.",
    hero: "/pdf/meat-hero.jpg",
    products: [
      { ar: "الهند", en: "INDIA", img: "/pdf/meat-india.jpg" },
      { ar: "البرازيل", en: "BRAZIL", img: "/pdf/meat-brazil.jpg" },
      { ar: "نيوزيلندا", en: "NEW ZEALAND", img: "/pdf/meat-nz.jpg" },
      { ar: "أستراليا", en: "AUSTRALIA", img: "/pdf/meat-au.jpg" },
    ],
    brands: [
      { en: "Thamrah", ar: "ثمرة", origin: "INDIA" },
      { en: "Al Kamil", ar: "الكامل", origin: "INDIA" },
      { en: "Allana", ar: "ألانا", origin: "INDIA" },
      { en: "Al Tamam", ar: "التمام", origin: "INDIA" },
      { en: "Minerva", ar: "مينيرفا", origin: "BRAZIL" },
      { en: "Friboi", ar: "فريبوي", origin: "BRAZIL" },
      { en: "AFFCO", ar: "أفكو", origin: "NEW ZEALAND" },
      { en: "Alliance", ar: "ألاينس", origin: "NEW ZEALAND" },
      { en: "M.C. Herd", ar: "إم سي هيرد", origin: "AUSTRALIA" },
    ],
  },
  {
    id: "potatoes",
    ar: "البطاطس المجمّدة",
    en: "Frozen Potatoes",
    accent: "#c8881f",
    fit: "contain",
    blurbAr:
      "طاهي الشرق الأوسط هي الوكيل الحصري لتوزيع بطاطس مايسترو في المنطقتين الوسطى والشرقية، وموزّع معتمد لمنتجات يوروجولد في جميع مناطق المملكة العربية السعودية.",
    hero: "/pdf/potatoes-hero.jpg",
    products: [
      { ar: "بطاطس اكسترا كرسبي", en: "EXTRA CRISPY · 9×9MM", img: "/pdf/fries-extracrispy.png" },
      { ar: "أصابع كلاسيكية", en: "CLASSIC · 10MM", img: "/pdf/fries-classic.jpg" },
      { ar: "أصابع رفيعة", en: "SHOESTRING · 7×7MM", img: "/pdf/fries-shoestring.jpg" },
      { ar: "بطاطس ويدجز", en: "WEDGES", img: "/pdf/fries-wedges.jpg" },
    ],
    brands: [
      { en: "Eurogold", ar: "يوروجولد", note: "موزّع معتمد في جميع مناطق المملكة" },
      { en: "Maestro", ar: "مايسترو", note: "الوكيل الحصري في المنطقتين الوسطى والشرقية" },
      { en: "Agristo", ar: "أغريستو", note: "مُصنّع عالمي رائد للبطاطس المجمّدة" },
    ],
  },
  {
    id: "produce",
    ar: "الخضار والفواكه",
    en: "Frozen Vegetables & Fruits",
    accent: "#4e7a3f",
    blurbAr:
      "خضار وفواكه مجمّدة بمعايير تجارية، منتجات طازجة وعالية الجودة لقطاع خدمات الطعام والجملة، بالشراكة مع Damaco Group.",
    hero: "/pdf/veg-mixed.jpg",
    products: [
      { ar: "فواكه مجمّدة", en: "MANGO", img: "/pdf/fruit-mango.jpg" },
      { ar: "جوافة", en: "GUAVA", img: "/pdf/fruit-guava.jpg" },
      { ar: "خضار مشكّلة", en: "MIXED VEG", img: "/pdf/veg-mixed.jpg" },
      { ar: "بازلاء خضراء", en: "GREEN PEAS", img: "/pdf/veg-peas.jpg" },
    ],
    brands: [
      { en: "Damaco Group", ar: "مجموعة دماكو", note: "مجموعة عالمية متخصّصة في الأغذية المجمّدة من الخضار والفواكه" },
    ],
  },
  {
    id: "poultry",
    ar: "الدواجن المجمّدة",
    en: "Frozen Poultry",
    accent: "#b9543f",
    blurbAr:
      "منتجات دواجن مجمّدة عالية الجودة بعبوات تشغيلية تناسب المطاعم والفنادق وشركات التموين.",
    hero: "/pdf/poultry-cuts.jpg",
    products: [
      { ar: "قطع دواجن", en: "POULTRY CUTS", img: "/pdf/poultry-cuts.jpg" },
      { ar: "صدور دجاج مجمّدة", en: "CHICKEN BREAST", img: "/pdf/poultry-breast.jpg" },
      { ar: "شاورما دجاج مجمّدة", en: "CHICKEN SHAWARMA", img: "/pdf/poultry-shawarma.jpg" },
    ],
    brands: [
      { en: "AJC", ar: "إيه جي سي" },
      { en: "LARA", ar: "لارا" },
    ],
  },
];

// مرجع القطعيات — Beef cut references (pages 11–12). x/y = موضع على رسم البقرة (%)
export type Cut = { en: string; ar: string; note: string; x: number; y: number };
export const cutReferences: Cut[] = [
  { en: "Shoulder", ar: "الكتف", note: "قطع غنية مناسبة للطهي البطيء والتصنيع.", x: 62, y: 40 },
  { en: "Beef Tenderloin", ar: "فيليه البقر", note: "أنعم قطع اللحم البقري، طري ولذيذ.", x: 46, y: 37 },
  { en: "Veal Tenderloin", ar: "فيليه العجل", note: "فيليه العجل الطري، خيار راقٍ للقوائم المميّزة.", x: 53, y: 39 },
  { en: "Rump Steak", ar: "ستيك الردة", note: "قطع الردة الخالية من الدهون للشوي والتحمير.", x: 28, y: 39 },
  { en: "Topside", ar: "الموزة الداخلية", note: "الموزة الداخلية، قطع رئيسية بمواصفات ثابتة.", x: 23, y: 49 },
  { en: "Thick Flank", ar: "الموزة الخارجية", note: "الموزة الخارجية، مثالية للتقطيع والتشغيل.", x: 29, y: 56 },
];

// خريطة القطعيات التشريحية الكاملة — full anatomical butcher chart.
// id = معرّف المنطقة في الرسم، cx/cy = مركز المنطقة (viewBox 0 0 511 301)
export type BeefCut = {
  id: string;
  ar: string;
  short: string;
  en: string;
  note: string;
  cx: number;
  cy: number;
  rot?: boolean;
  stack?: boolean;
  fs?: number;
};
export const beefCuts: BeefCut[] = [
  { id: "Neck_Clod", ar: "الرقبة", short: "الرقبة", en: "Neck / Clod", cx: 116, cy: 59,
    note: "لحم الرقبة غنيّ بالنكهة ويحتوي على نسيج ضامّ يمنحه قواماً متماسكاً. مثاليّ للطهي البطيء والشوربات واليخنات. يُنتج مرقاً غنيّاً بعد الطهي الطويل." },
  { id: "Chuck_Blade", ar: "الكتف", short: "الكتف", en: "Chuck", cx: 174, cy: 66,
    note: "قطعة الكتف من مقدّمة الذبيحة، متوازنة بين اللحم والدهن. ممتازة للفرم والطهي البطيء واليخنات. تمنح الأطباق نكهة عميقة وقواماً طريّاً." },
  { id: "ForeRib", ar: "الضلوع الأمامية", short: "ضلوع", en: "Fore Rib", cx: 231, cy: 67,
    note: "الضلوع الأمامية من أكثر القطع نكهةً بفضل تخلّلها الدهنيّ. تصلح للشوي والتحمير وأطباق الريش. قوامها العصيريّ يجعلها مفضّلة لدى الطهاة." },
  { id: "Sirloin", ar: "الانتركوت", short: "الانتركوت", en: "Sirloin", cx: 320, cy: 71,
    note: "الانتركوت من القطعات الفاخرة، طريّ ومتخلّل بالدهن. مثاليّ لستيك الشواء على حرارة عالية. يقدّم تجربة غنيّة وعصيريّة لا تُقاوم." },
  { id: "Rump", ar: "الكولاتة", short: "الكولاتة", en: "Rump", cx: 410, cy: 53,
    note: "الكولاتة قطعة خلفية خالية نسبيّاً من الدهن وطريّة. تصلح للشوي والتحمير وتقطيع الستيك. توازن جيّد بين الطراوة والنكهة." },
  { id: "Topside", ar: "الموزة الداخلية", short: "داخلية", en: "Topside", cx: 483, cy: 60, fs: 6,
    note: "الموزة الداخلية قطعة كبيرة خالية من الدهن وطريّة نسبيّاً. مثالية للروست بيف والشرائح الرقيقة. تعطي شرائح متناسقة ومظهراً أنيقاً على الطبق." },
  { id: "Silverside", ar: "الموزة الخارجية", short: "خارجية", en: "Silverside", cx: 457, cy: 63, fs: 6,
    note: "الموزة الخارجية من الفخذ، خالية من الدهون وذات ألياف طويلة. مناسبة للروست والسلق والتقطيع البارد. اقتصاديّة وغنيّة بالبروتين." },
  { id: "ThickFlank", ar: "السمانة", short: "السمانة", en: "Thick Flank", cx: 461, cy: 133,
    note: "السمانة قطعة من الفخذ متوسّطة الطراوة وقليلة الدهن. تصلح للتحمير البطيء واليخنات والفرم. غنيّة بالنكهة واقتصاديّة للاستخدام اليوميّ." },
  { id: "Leg", ar: "الموزة الخلفية", short: "موزة خلفية", en: "Hind Shank", cx: 461, cy: 184, stack: true,
    note: "الموزة الخلفية غنيّة بالكولاجين والنسيج الضامّ. مثالية للطهي البطيء وأطباق الأوسوبوكو والمرق. تذوب طراوةً بعد الطهي الطويل." },
  { id: "Flank", ar: "دقائق البطن", short: "البطن", en: "Flank", cx: 318, cy: 154,
    note: "لحم البطن قطعة مسطّحة ذات ألياف واضحة ونكهة قويّة. تُفضّل للتتبيل والشوي السريع وتُقطّع عكس اتجاه الألياف. خيار رائج في المطابخ العصرية." },
  { id: "ThinRib", ar: "الضلع الرفيع", short: "ضلع رفيع", en: "Thin Rib", cx: 227, cy: 125, stack: true,
    note: "الضلع الرفيع قطعة متوسّطة التخلّل الدهنيّ ومتعدّدة الاستخدام. تصلح للشوي والطهي البطيء وأطباق الباربكيو. نكهتها غنيّة وقوامها مُرضٍ." },
  { id: "path7361", ar: "الضلع السميك", short: "ضلع سميك", en: "Thick Rib", cx: 143, cy: 132, stack: true,
    note: "الضلع السميك من المقدّمة، غنيّ باللحم والدهن المتداخل. مثاليّ للطهي البطيء والبرزقة والفرم. يمنح الأطباق قواماً طريّاً ونكهة دسمة." },
  { id: "Brisket", ar: "الصدر", short: "الصدر", en: "Brisket", cx: 245, cy: 167,
    note: "الصدر قطعة كبيرة ذات ألياف طويلة ودهن سطحيّ. ملك أطباق التدخين والطهي البطيء والباسطرمة. يحتاج وقتاً طويلاً ليصبح طريّاً وعصيريّاً." },
  { id: "Shin", ar: "الموزة الأمامية", short: "موزة أمامية", en: "Fore Shank", cx: 179, cy: 196, stack: true,
    note: "الموزة الأمامية غنيّة بالكولاجين والنكهة العميقة. الأنسب للشوربات والمرق والطهي البطيء الطويل. تمنح المرق قواماً جيلاتينيّاً غنيّاً." },
];

// التغطية الجغرافية — distribution coverage (page 7). coord = [lat, lng]
export type Region = { ar: string; brands: string; both: boolean; coord: [number, number] };
export const regionHub: [number, number] = [24.7, 46.72]; // الرياض — مركز التوزيع
export const regions: Region[] = [
  { ar: "الرياض", brands: "Maestro · Eurogold", both: true, coord: [24.7, 46.72] },
  { ar: "القصيم", brands: "Maestro · Eurogold", both: true, coord: [26.33, 43.97] },
  { ar: "المنطقة الشرقية", brands: "Maestro · Eurogold", both: true, coord: [26.42, 49.98] },
  { ar: "مكة المكرمة", brands: "Eurogold", both: false, coord: [21.43, 39.83] },
  { ar: "المدينة المنورة", brands: "Eurogold", both: false, coord: [24.47, 39.61] },
  { ar: "عسير", brands: "Eurogold", both: false, coord: [18.22, 42.5] },
  { ar: "تبوك", brands: "Eurogold", both: false, coord: [28.38, 36.57] },
  { ar: "حائل", brands: "Eurogold", both: false, coord: [27.52, 41.69] },
  { ar: "الجوف", brands: "Eurogold", both: false, coord: [29.97, 40.21] },
  { ar: "الحدود الشمالية", brands: "Eurogold", both: false, coord: [30.98, 41.04] },
  { ar: "جازان", brands: "Eurogold", both: false, coord: [16.89, 42.55] },
  { ar: "نجران", brands: "Eurogold", both: false, coord: [17.49, 44.13] },
  { ar: "الباحة", brands: "Eurogold", both: false, coord: [20.01, 41.47] },
];
export const ksaRegionBounds = { lat: { min: 16, max: 33 }, lng: { min: 34, max: 56 } };

// الجودة والثقة — standards (page 15)
export const standards = [
  { en: "CONTINUOUS SUPPLY", ar: "توريد مستمر", textAr: "نوفّر استمراريّة في الإمداد وتوفّراً منتظماً للمنتجات، لتلبية احتياجات العملاء دون انقطاع.", icon: "refresh", accent: "#4e7a3f" },
  { en: "CLOSE TO YOU", ar: "تواجد قريب من منطقتك", textAr: "شبكة توزيع قريبة من مناطق عملائنا، تضمن سرعة الوصول ومرونة أعلى في الخدمة.", icon: "pin", accent: "#c8881f" },
  { en: "RELIABLE DISTRIBUTION", ar: "توزيع موثوق", textAr: "الالتزام بالكميات والمواعيد عبر مناطق المملكة، مع متابعة دقيقة لكل شحنة.", icon: "share", accent: "#c0392b" },
];

// لماذا طاهي الشرق الأوسط (page 17)
export const whyMEC = [
  { n: "01", titleAr: "شراكات حصرية", textAr: "وكالة حصرية لعلامات بطاطس عالمية في المملكة." },
  { n: "02", titleAr: "تغطية وطنية", textAr: "توزيع يصل إلى مناطق المملكة الثلاث عشرة." },
  { n: "03", titleAr: "منظومة متكاملة", textAr: "بطاطس ولحوم ودواجن وخضار وفواكه من مصدر واحد." },
  { n: "04", titleAr: "التزام تجاري", textAr: "فريق سعودي يلتزم بالجودة والكميات والمواعيد." },
];

export const stats = [
  { value: "٤", label: "مناشئ عالمية" },
  { value: "١٣", label: "منطقة إدارية" },
  { value: "+١٥", label: "علامة تجارية" },
  { value: "٧", label: "فئات منتجات" },
];

// شبكة الموردين والشركاء (page 16)
export const supplierGroups = [
  { ar: "اللحوم المستوردة", en: "IMPORTED MEATS", accent: "#c0392b", brands: ["Friboi", "Allana", "Al Tamam", "Thamrah", "Al Kamil", "AFFCO", "Alliance", "M.C. Herd", "Minerva"] },
  { ar: "البطاطس", en: "POTATOES", accent: "#c8881f", brands: ["Eurogold", "Maestro", "Agristo"] },
  { ar: "الدواجن", en: "POULTRY", accent: "#b9543f", brands: ["AJC", "LARA"] },
  { ar: "الخضار والفواكه", en: "VEG & FRUITS", accent: "#4e7a3f", brands: ["Damaco Group"] },
];
