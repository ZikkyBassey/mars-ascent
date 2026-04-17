const Footer = () => (
  <footer id="community" className="relative pt-24 pb-10 overflow-hidden border-t border-mars-crimson/20">
    <div className="absolute inset-0 pointer-events-none"
         style={{ background: "radial-gradient(ellipse at bottom, hsl(6 80% 35% / 0.35), transparent 60%)" }} />

    <div className="container relative z-10 text-center">
      <h3 className="font-display text-4xl md:text-6xl font-black text-gradient-mars text-glow">
        Join the Martians
      </h3>
      <p className="mt-5 text-foreground/70 max-w-xl mx-auto">
        The signal is open. The colony is growing. Plant your flag before the next ascent.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {["Twitter / X", "Telegram", "Discord", "Dexscreener"].map((c) => (
          <a
            key={c}
            href="#"
            className="px-6 py-3 text-xs uppercase tracking-[0.3em] rounded-full border border-mars-crimson/40 glass-panel hover:border-mars-ember hover:shadow-[var(--glow-red)] hover:-translate-y-0.5 transition-all duration-500"
          >
            {c}
          </a>
        ))}
      </div>

      <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs uppercase tracking-[0.3em] text-foreground/40">
        <span>© Sol 2099 · $MARS Colony</span>
        <span>Built on Mars · Driven by Martians</span>
      </div>
    </div>
  </footer>
);

export default Footer;
