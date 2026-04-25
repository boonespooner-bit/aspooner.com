import Link from "next/link";

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-rule">
      <nav className="max-w-6xl mx-auto px-6 md:px-12 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-sans text-[11px] tracking-[0.25em] uppercase text-ink font-medium hover:text-accent transition-colors"
        >
          Anna Spooner
        </Link>
        <div className="flex items-center gap-8">
          {[
            { href: "/work", label: "Work" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-sans text-[11px] tracking-[0.2em] uppercase text-muted hover:text-ink transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
