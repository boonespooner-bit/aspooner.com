import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-rule mt-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted">
          Anna Spooner
        </span>
        <div className="flex items-center gap-6">
          <Link
            href="/contact"
            className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted hover:text-ink transition-colors"
          >
            Contact
          </Link>
          <span className="font-sans text-[10px] text-rule">·</span>
          <span className="font-sans text-[10px] text-muted">
            San Francisco Bay Area
          </span>
        </div>
      </div>
    </footer>
  );
}
