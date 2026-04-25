import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const categories = [
  {
    name: "Labels & Packaging",
    description: "FDA-compliant product labels, shrink wraps, cartons, and trays.",
    projects: [
      { id: "01", title: "GYM WEED Product Line", client: "Alternative Biologics" },
      { id: "02", title: "Supplement Label System", client: "CytoSport" },
      { id: "03", title: "Shrink Wrap Series", client: "CytoSport" },
      { id: "04", title: "Carton & Tray Design", client: "CytoSport" },
    ],
  },
  {
    name: "Print Collateral",
    description: "Sell sheets, POS displays, tradeshow booths, vehicle wraps, and brand merch.",
    projects: [
      { id: "05", title: "Tradeshow Booth System", client: "Alternative Biologics" },
      { id: "06", title: "Vehicle Wrap Campaign", client: "CytoSport" },
      { id: "07", title: "Retail POS Suite", client: "CytoSport" },
      { id: "08", title: "Brand Merchandise", client: "Alternative Biologics" },
    ],
  },
  {
    name: "Catalog & Digital",
    description: "Catalog production, web banners, eblasts, and social media campaigns.",
    projects: [
      { id: "09", title: "Annual Catalog", client: "Title Nine" },
      { id: "10", title: "Digital Catalog", client: "Athleta" },
      { id: "11", title: "Email Marketing Suite", client: "Alternative Biologics" },
      { id: "12", title: "Social Media Campaign", client: "Alternative Biologics" },
    ],
  },
];

export default function Work() {
  return (
    <>
      <Nav />
      <main className="pt-14">

        {/* Page header */}
        <section className="border-b border-rule">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-28">
            <div className="flex items-center gap-4 mb-5">
              <div className="h-px w-8 bg-accent" />
              <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted">Selected Work</span>
            </div>
            <h1 className="font-serif text-6xl md:text-8xl font-light text-ink">Portfolio</h1>
          </div>
        </section>

        {/* Category sections */}
        {categories.map((cat, i) => (
          <section key={cat.name} className="border-b border-rule last:border-0">
            <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">

              {/* Category header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-10">
                <div>
                  <h2 className="font-serif text-3xl font-light text-ink">{cat.name}</h2>
                  <p className="font-sans text-sm text-muted mt-1">{cat.description}</p>
                </div>
                <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-rule">
                  {String(i + 1).padStart(2, "0")} / {String(categories.length).padStart(2, "0")}
                </span>
              </div>

              {/* Project grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {cat.projects.map((p) => (
                  <div key={p.id} className="group cursor-pointer">
                    {/* Placeholder tile — replace with <Image> when assets arrive */}
                    <div className="aspect-[3/4] bg-rule/40 border border-rule group-hover:bg-rule/70 transition-colors flex items-end p-3">
                      <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted/50 group-hover:text-muted transition-colors">
                        {p.id}
                      </span>
                    </div>
                    <div className="mt-3 space-y-0.5">
                      <p className="font-sans text-xs tracking-wide text-ink">{p.title}</p>
                      <p className="font-sans text-[11px] text-muted">{p.client}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>
        ))}

        <Footer />
      </main>
    </>
  );
}
