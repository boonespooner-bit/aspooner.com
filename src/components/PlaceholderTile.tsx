// Soft gradient placeholders for work tiles that don't have images yet.
// Tones are pulled from the site palette (cream, rule, terracotta accent)
// plus a few muted companions — sage, mist, blush, butter — kept light.

const tones = {
  cream: "#F5F2EB",
  sand: "#EADFCB",
  linen: "#EFE8DC",
  blush: "#F1DCD2",
  peach: "#F3E0CC",
  clay: "#E6C9BA",
  terracotta: "#DDA894",
  butter: "#F2E8C9",
  sage: "#DCE2D2",
  moss: "#CDD5C1",
  mist: "#DCE3E3",
  lilac: "#E4DDE4",
};

const t = tones;

// Each variant layers one or more gradients. Order matters: first layer is on top.
const variants: string[] = [
  // Terracotta glow rising from the bottom
  `radial-gradient(120% 80% at 50% 110%, ${t.terracotta} 0%, ${t.blush} 40%, ${t.cream} 75%)`,
  // Sage to cream diagonal
  `linear-gradient(160deg, ${t.sage} 0%, ${t.linen} 55%, ${t.cream} 100%)`,
  // Butter wash with peach corner
  `radial-gradient(90% 70% at 100% 0%, ${t.peach} 0%, transparent 70%), linear-gradient(180deg, ${t.butter} 0%, ${t.cream} 100%)`,
  // Mist horizon
  `linear-gradient(180deg, ${t.mist} 0%, ${t.cream} 60%, ${t.sand} 100%)`,
  // Blush and lilac crossfade
  `linear-gradient(135deg, ${t.blush} 0%, ${t.lilac} 100%)`,
  // Sand dune — layered soft bands
  `radial-gradient(140% 60% at 0% 100%, ${t.clay} 0%, transparent 60%), radial-gradient(120% 70% at 100% 100%, ${t.sand} 0%, transparent 65%), ${t.cream}`,
  // Moss fading into linen
  `radial-gradient(100% 90% at 20% 20%, ${t.moss} 0%, ${t.sage} 30%, ${t.linen} 80%)`,
  // Peach sunrise
  `linear-gradient(0deg, ${t.peach} 0%, ${t.butter} 45%, ${t.cream} 100%)`,
  // Twin orbs — sage and blush
  `radial-gradient(60% 45% at 30% 35%, ${t.sage} 0%, transparent 70%), radial-gradient(60% 45% at 70% 70%, ${t.blush} 0%, transparent 70%), ${t.linen}`,
  // Clay to mist diagonal
  `linear-gradient(200deg, ${t.clay} 0%, ${t.linen} 50%, ${t.mist} 100%)`,
  // Lilac top light over sand
  `radial-gradient(110% 70% at 50% -10%, ${t.lilac} 0%, transparent 70%), linear-gradient(180deg, ${t.cream} 0%, ${t.sand} 100%)`,
  // Conic soft swirl
  `conic-gradient(from 210deg at 65% 40%, ${t.butter}, ${t.blush}, ${t.sage}, ${t.mist}, ${t.butter})`,
];

// Fine grain so the fades read like paper stock rather than flat CSS.
const grain =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.1 0 0 0 0 0.1 0 0 0 0 0.09 0 0 0 0.35 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export default function PlaceholderTile({ id }: { id: string }) {
  const index = (parseInt(id, 10) || 0) % variants.length;

  return (
    <div className="relative aspect-[3/4] overflow-hidden border border-rule">
      {/* Gradient layer — drifts slightly on hover */}
      <div
        className="absolute inset-0 scale-105 transition-transform duration-700 ease-out group-hover:scale-110"
        style={{ background: variants[index] }}
      />
      {/* Paper grain */}
      <div
        className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none"
        style={{ backgroundImage: grain }}
      />
      {/* Cream veil lifts on hover to bring the colour forward */}
      <div className="absolute inset-0 bg-cream/15 group-hover:bg-cream/0 transition-colors duration-500" />
      <span className="absolute bottom-3 left-3 font-sans text-[10px] tracking-[0.2em] uppercase text-muted/60 group-hover:text-muted transition-colors">
        {id}
      </span>
    </div>
  );
}
