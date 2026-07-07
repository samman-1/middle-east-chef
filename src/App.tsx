import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { CategorySection } from "./components/CategorySection";
import { Coverage } from "./components/Coverage";
import { CutReferences } from "./components/CutReferences";
import { Standards } from "./components/Standards";
import { WhyMEC } from "./components/WhyMEC";
import { Suppliers } from "./components/Suppliers";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { categories } from "./data/catalog";
import { Reveal } from "./components/Reveal";

const extras: Record<string, React.ReactNode> = {
  potatoes: <Coverage />,
  meats: <CutReferences />,
};

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />

        {/* مقدّمة المنتجات */}
        <section id="products" className="scroll-mt-20 pt-24">
          <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
            <Reveal className="mx-auto max-w-2xl">
              <p className="text-xs font-bold section-label text-muted">فئات المنتجات</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-ink sm:text-5xl">
                منظومة متكاملة من الأغذية المجمّدة
              </h2>
              <p className="mt-4 text-lg text-muted">
                من اللحوم المستوردة إلى البطاطس والخضار والفواكه والدواجن — ضمن منظومة توزيع واحدة.
              </p>
            </Reveal>
          </div>
        </section>

        {categories.map((cat, i) => (
          <CategorySection key={cat.id} cat={cat} index={i} extra={extras[cat.id]} />
        ))}

        <Standards />
        <WhyMEC />
        <Suppliers />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
