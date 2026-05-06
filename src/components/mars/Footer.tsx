const socials = [
  { label: "Twitter / X", href: "https://x.com/STARBOUND___" },
  { label: "Telegram", href: "https://t.me/martiannation" },
  { label: "DexScreener", href: "https://dexscreener.com/solana/CY6TDv7zr7McU8Sz3H65Hz9n8i4m4G5D7PeemfAimoon" },
];

const Footer = () => (
  <footer id="community" className="relative pt-28 pb-12 overflow-hidden">
    {/* Top border glow */}
    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-mars-crimson/40 to-transparent" />
    <div className="absolute top-0 inset-x-0 h-32 pointer-events-none"
         style={{ background: "radial-gradient(ellipse 60% 100% at 50% 0%, hsl(6 80% 30% / 0.12), transparent)" }} />
    <div className="absolute inset-0 pointer-events-none"
         style={{ background: "radial-gradient(ellipse 80% 50% at 50% 100%, hsl(6 80% 22% / 0.2), transparent 70%)" }} />

    <div className="container relative z-10 px-5 md:px-8">
      {/* CTA */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-mars-ember animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/70">Signal Open</span>
        </div>
        <h3 className="font-display text-5xl md:text-7xl font-black text-gradient-mars text-glow leading-none">
          Join the<br />Martians
        </h3>
        <p className="mt-6 text-foreground/60 max-w-md mx-auto leading-relaxed">
          The colony is growing. Plant your flag before the next ascent.
        </p>
      </div>

      {/* Social links */}
      <div className="mt-12 flex flex-wrap justify-center gap-3">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-6 py-3 text-[10px] uppercase tracking-[0.3em] font-semibold rounded-full border border-white/[0.08] glass-panel hover:border-mars-ember/50 hover:shadow-[var(--glow-red)] hover:-translate-y-0.5 transition-all duration-400"
          >
            <span className="text-foreground/55 group-hover:text-foreground/90 transition-colors">{s.label}</span>
          </a>
        ))}
      </div>

      {/* Divider */}
      <div className="mt-20 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-foreground/30">
        <span>© 2025 · $MARS</span>
        <span className="text-foreground/20">CY6TDv7zr7McU8Sz3H65Hz9n8i4m4G5D7PeemfAimoon</span>
        <span>Built on Solana</span>
      </div>
    </div>
  </footer>
);

export default Footer;
