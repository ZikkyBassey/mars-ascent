import { useReveal } from "@/hooks/useReveal";

const phases = [
  { tag: "Phase 01", title: "Touchdown", items: ["Stealth launch", "Liquidity burn", "Martian Genesis NFTs", "1,000 holders"] },
  { tag: "Phase 02", title: "Colonization", items: ["CEX listings", "Staking vaults live", "War-room launches", "Martian merch drop"] },
  { tag: "Phase 03", title: "Domination", items: ["Cross-chain bridges", "Martian Launchpad v1", "Strategic partnerships", "100k Martians"] },
  { tag: "Phase 04", title: "Empire", items: ["DAO activation", "Martian Ventures fund", "Real-world expansion", "Global takeover"] },
];

const PhaseRow = ({ p, i }: { p: typeof phases[number]; i: number }) => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`md:grid md:grid-cols-2 md:gap-16 items-center ${i % 2 ? "" : "md:[&>*:first-child]:order-2"}`}
    >
      <div
        className={`glass-panel rounded-2xl p-7 relative ${i % 2 ? "md:text-right" : ""} hover:shadow-[var(--glow-red)] hover:-translate-y-1 transition-all duration-500 ${
          visible ? (i % 2 ? "animate-fade-up" : "animate-fade-up") : "opacity-0"
        }`}
      >
        <div
          className="absolute top-1/2 -translate-y-1/2 hidden md:block"
          style={{ [i % 2 ? "left" : ("right" as any)]: "-3rem" }}
        >
          <div className="h-4 w-4 rounded-full bg-mars-ember shadow-[0_0_20px_hsl(var(--mars-ember))] animate-pulse-glow" />
        </div>
        <div className="text-xs uppercase tracking-[0.4em] text-mars-ember">{p.tag}</div>
        <h3 className="mt-2 font-display text-3xl font-bold">{p.title}</h3>
        <ul className={`mt-5 space-y-2 text-foreground/75 ${i % 2 ? "md:list-none" : ""}`}>
          {p.items.map((it) => (
            <li key={it} className="flex items-center gap-3 md:justify-start group">
              <span className="h-1 w-6 bg-mars-crimson group-hover:w-10 group-hover:bg-mars-ember transition-all duration-300" />
              {it}
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden md:block" />
    </div>
  );
};

const Roadmap = () => {
  const head = useReveal<HTMLDivElement>();
  return (
    <section id="roadmap" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-mars-crimson/10 blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="container relative z-10">
        <div ref={head.ref} className={`text-center max-w-2xl mx-auto ${head.visible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="text-xs uppercase tracking-[0.4em] text-mars-ember">// Mission Timeline</span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl font-black">
            The <span className="text-gradient-mars">Conquest</span>
          </h2>
        </div>

        <div className="mt-20 relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-mars-crimson/60 to-transparent hidden md:block" />

          <div className="space-y-10">
            {phases.map((p, i) => (
              <PhaseRow key={p.tag} p={p} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
