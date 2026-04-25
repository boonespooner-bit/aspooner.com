import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const experience = [
  {
    title: "Design Manager / Senior Production Artist",
    company: "Alternative Biologics — The Makers of GYM WEED",
    period: "2020 – Present",
    type: "Full-time · Hybrid",
    description:
      "Digital production and design of product labels, wraps, shrinks, trays, cartons, POS, sell sheets, web banners, eblasts, evites, social media posts, product innovation renders, vehicle wraps, tradeshow graphics, and brand merchandise.",
  },
  {
    title: "Art Department Manager / Senior Production Artist",
    company: "CytoSport, Inc.",
    period: "2014 – 2019",
    type: "Full-time",
    description:
      "Team leader and brand champion. Oversaw the careers of Art Directors, Project Coordinators, Graphic Designers, and Production Artists. Directly managed the packaging creation process with detailed adherence to FDA labeling requirements. Developed and refined creative and production workflows.",
  },
  {
    title: "Production Artist",
    company: "CytoSport, Inc.",
    period: "2012 – 2014",
    type: "Full-time",
    description:
      "Digital production of product labels, wraps, shrinks, trays, cartons, booth graphics, displays, wearables, vehicle wraps, POS, sell sheets, web banners, eblasts, and print/web ads. Organized archival files into an accessible storage system.",
  },
  {
    title: "Graphic Designer",
    company: "Athleta",
    period: "2012",
    type: "Contract",
    description:
      "Digital production of catalog and implementation of proofing revisions. File preparation of marketing collateral including magazine ads, promotional posters, banners, and digital tablet ads.",
  },
  {
    title: "Catalog Production Manager",
    company: "Title Nine",
    period: "2010 – 2012",
    type: "Full-time",
    description:
      "Photo studio management, talent booking, and creation of yearly catalog production calendar. Coordination of photo samples, shot lists, and scheduling of all meetings pertaining to the catalog process.",
  },
  {
    title: "Senior Production Designer",
    company: "TravelSmith Outfitters, Inc.",
    period: "2005 – 2010",
    type: "Full-time",
    description:
      "Catalog production — layout, photo placement, copy formatting and flowing. Refined and managed proofing process. Marketing collateral production. Managed freelance designers.",
  },
  {
    title: "Graphic Designer / Advertising Production Manager",
    company: "Any Mountain Ltd.",
    period: "1996 – 2004",
    type: "Full-time",
    description:
      "Design and layout for newspapers, national magazines, product fact tags, and billboards. Supported retail stores through POS displays, event flyers, and direct mail. Responsible for all printed pieces from inception to press, including print quotes and press checks.",
  },
];

const specialties = [
  "Label & Packaging Design",
  "FDA Labeling Compliance",
  "Print Production",
  "Shrink Wraps & Film",
  "Tradeshow Graphics",
  "Vehicle Wraps",
  "POS & Retail Displays",
  "Brand Collateral",
  "Catalog Production",
  "Art Department Management",
  "Team Leadership",
  "Digital Marketing",
];

export default function About() {
  return (
    <>
      <Nav />
      <main className="pt-14">

        {/* Page header */}
        <section className="border-b border-rule">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-28">
            <div className="flex items-center gap-4 mb-5">
              <div className="h-px w-8 bg-accent" />
              <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted">Designer</span>
            </div>
            <div className="max-w-3xl">
              <h1 className="font-serif text-6xl md:text-8xl font-light text-ink mb-10">About Anna</h1>
              <p className="font-sans text-base leading-loose text-muted">
                With over 20 years in the San Francisco Bay Area, Anna Spooner is a Design Manager and
                Senior Production Artist specializing in print production, packaging design, and
                FDA-compliant label development for consumer brands. Her career spans food and supplement
                packaging, retail catalogs, tradeshow systems, and brand identity — always with a
                commitment to craft, precision, and getting it right all the way to press.
              </p>
            </div>
          </div>
        </section>

        {/* Specialties */}
        <section className="border-b border-rule">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
            <h2 className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted mb-6">Specialties</h2>
            <div className="flex flex-wrap gap-2">
              {specialties.map((s) => (
                <span
                  key={s}
                  className="font-sans text-[11px] tracking-wide px-3 py-1.5 border border-rule text-ink hover:border-accent hover:text-accent transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Experience timeline */}
        <section className="max-w-6xl mx-auto px-6 md:px-12 py-16">
          <h2 className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted mb-12">Experience</h2>
          <div>
            {experience.map((job, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 md:gap-12 py-10 border-b border-rule last:border-0"
              >
                <div className="pt-0.5">
                  <p className="font-sans text-xs tracking-[0.1em] uppercase text-muted">{job.period}</p>
                  <p className="font-sans text-[11px] text-accent/80 tracking-wide mt-1">{job.type}</p>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-light text-ink leading-snug">{job.title}</h3>
                  <p className="font-sans text-[11px] tracking-[0.12em] uppercase text-muted mt-1 mb-4">
                    {job.company}
                  </p>
                  <p className="font-sans text-sm text-muted leading-loose">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
