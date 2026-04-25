import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <>
      <Nav />
      <main className="pt-14">
        <section className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-32">

          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-8 bg-accent" />
            <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted">Contact</span>
          </div>

          <div className="max-w-lg">
            <h1 className="font-serif text-6xl md:text-8xl font-light text-ink mb-10 leading-none">
              Get in<br />Touch
            </h1>
            <p className="font-sans text-sm text-muted leading-loose mb-14">
              Available for freelance, contract, and full-time opportunities in print production,
              packaging design, and brand collateral.
            </p>

            <div className="space-y-0">
              <div className="py-8 border-t border-rule">
                <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted mb-3">Email</p>
                <Link
                  href="mailto:hello@aspooner.com"
                  className="font-serif text-3xl font-light text-ink hover:text-accent transition-colors"
                >
                  hello@aspooner.com
                </Link>
              </div>

              <div className="py-8 border-t border-rule">
                <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted mb-3">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/annaspooner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-3xl font-light text-ink hover:text-accent transition-colors"
                >
                  linkedin.com/in/annaspooner
                </a>
              </div>

              <div className="py-8 border-t border-b border-rule">
                <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted mb-3">Location</p>
                <p className="font-serif text-3xl font-light text-ink">San Francisco Bay Area</p>
              </div>
            </div>
          </div>

        </section>
        <Footer />
      </main>
    </>
  );
}
