import { Rocket, Shield, Coins, Radio } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const items = [
  { icon: Rocket, title: "Mission Launchpad", desc: "Early access to every Martian-incubated project, airdrops, and IDO allocations." },
  { icon: Shield, title: "Colony Staking", desc: "Stake $MARS to earn ember rewards and unlock governance over the colony." },
  { icon: Coins, title: "On-chain Economy", desc: "A circular utility loop powering merch, NFTs, and partner ecosystems." },
  { icon: Radio, title: "Martian Comms", desc: "Token-gated war room with alpha drops, signals, and direct ops with the team." },
];

const Utility = () => {
  const head = useReveal<HTMLDivElement>();
  const grid = useReveal<HTMLDivElement>();

  return (
    <section id="utility" className="relative py-20 md:py-32">
      <div className="absolute inset-0 mars-grid opacity-30" />
      <div className="container relative z-10 px-5 md:px-8">
        <div
          ref={head.ref}
          className={`text-center max-w-2xl mx-auto ${head.visible ? "animate-fade-up" : "opacity-0"}`}
        >
          <span className="text-xs uppercase tracking-[0.4em] text-mars-ember">// Power Systems</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
            The <span className="text-gradient-mars">Utility</span> Stack
          </h2>
          <p className="mt-6 text-foreground/70 text-lg">
            Every module is engineered to compound value for those who hold the red flag.
          </p>
        </div>

        <div ref={grid.ref} className="mt-12 md:mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`group glass-panel rounded-2xl p-7 relative overflow-hidden hover:-translate-y-2 hover:rotate-[0.5deg] transition-all duration-500 hover:border-mars-ember/60 hover:shadow-[var(--glow-red)] ${grid.visible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                   style={{ background: "radial-gradient(circle at top, hsl(var(--mars-crimson) / 0.25), transparent 70%)" }} />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-mars-crimson/15 border border-mars-crimson/40 text-mars-ember group-hover:shadow-[var(--glow-red)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm text-foreground/65 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Utility;
