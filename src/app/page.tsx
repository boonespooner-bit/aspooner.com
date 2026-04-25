import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import DebugLogger from "@/components/DebugLogger";

export default function Home() {
  return (
    <>
      <DebugLogger />
      <Nav />
      <main className="flex flex-col min-h-screen">

        {/* Hero */}
        <section className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-14">
          <div className="max-w-3xl mx-auto space-y-5">

            {/* Label-style ornament */}
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-10 bg-rule" />
              <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted">Portfolio</span>
              <div className="h-px w-10 bg-rule" />
            </div>

            <h1 className="font-serif text-[clamp(4rem,14vw,9rem)] font-light text-ink leading-none tracking-tight">
              Anna<br />Spooner
            </h1>

            {/* Accent rule + title */}
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-8 bg-accent" />
              <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-muted">
                Design Manager · Senior Production Artist
              </p>
              <div className="h-px w-8 bg-accent" />
            </div>

            <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-muted/70">
              Print · Packaging · Labels · Brand Collateral
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/work"
                className="font-sans text-[11px] tracking-[0.2em] uppercase px-8 py-3 bg-ink text-cream hover:bg-accent transition-colors"
              >
                View Work
              </Link>
              <Link
                href="/about"
                className="font-sans text-[11px] tracking-[0.2em] uppercase px-8 py-3 border border-rule text-ink hover:border-ink transition-colors"
              >
                About
              </Link>
            </div>
          </div>
        </section>

        {/* Intro strip */}
        <section className="border-t border-rule mt-20">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-14 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 md:divide-x divide-rule">
            {[
              {
                label: "Specialty",
                heading: "Label & Packaging",
                body: "FDA-compliant label development for food, supplement, and consumer product brands.",
              },
              {
                label: "Experience",
                heading: "20+ Years",
                body: "San Francisco Bay Area print and production design, from catalog to shelf.",
              },
              {
                label: "Scope",
                heading: "Print to Digital",
                body: "Product labels, tradeshow systems, vehicle wraps, catalogs, and social campaigns.",
              },
            ].map(({ label, heading, body }) => (
              <div key={label} className="space-y-2 md:px-10 first:pl-0 last:pr-0">
                <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-accent">{label}</p>
                <p className="font-serif text-2xl font-light text-ink">{heading}</p>
                <p className="font-sans text-sm text-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
