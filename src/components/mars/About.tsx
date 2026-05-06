import marsGround from "@/assets/mars-ground.jpg";
import { useReveal } from "@/hooks/useReveal";

const About = () => {
  const left = useReveal<HTMLDivElement>();
  const right = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative py-24 md:py-36 overflow-hidden">
      {/* Section top fade */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-mars-black to-transparent pointer-events-none z-10" />

      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url(${marsGround})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          filter: "blur(3px) saturate(0.7)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-mars-black/95 via-mars-black/80 to-mars-black/95" />

      <div className="container relative z-10 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center px-5 md:px-8">
        <div ref={left.ref} className={left.visible ? "animate-fade-up" : "opacity-0"}>
          <span className="inline-block text-[10px] uppercase tracking-[0.45em] text-mars-ember mb-5 border-l-2 border-mars-ember pl-3">
            Origin Protocol
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05]">
            A new <span className="text-gradient-mars">civilization</span><br className="hidden sm:block" /> on the red frontier.
          </h2>
          <div className="mt-8 space-y-4 text-[17px] text-foreground/65 max-w-xl leading-relaxed">
            <p>
              $MARS is more than a token — it's the economic core of an interplanetary movement.
              Forged by code, fueled by belief, commanded by the Martians.
            </p>
            <p>The earth chapter is closing. The red one begins now.</p>
          </div>
        </div>

        <div
          ref={right.ref}
          className={`relative ${right.visible ? "animate-scale-in" : "opacity-0"}`}
          style={{ animationDelay: "150ms" }}
        >
          <div className="glass-panel rounded-3xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-mars-crimson/20 blur-3xl animate-pulse-glow pointer-events-none" />
            <div className="text-[10px] uppercase tracking-[0.4em] text-foreground/40 mb-6">Token Info</div>
            <div className="grid grid-cols-2 gap-3 relative">
              {[
                { k: "Total Supply", v: "977,000,000" },
                { k: "Network", v: "Solana" },
                { k: "Buy / Sell Tax", v: "0% / 0%" },
                { k: "Liquidity", v: "Burned 🔥" },
                { k: "Mint Authority", v: "Revoked ✓" },
                { k: "Freeze Auth", v: "Revoked ✓" },
              ].map((s, i) => (
                <div
                  key={s.k}
                  className={`border border-white/[0.07] rounded-xl p-4 bg-white/[0.02] hover:border-mars-ember/40 hover:-translate-y-0.5 transition-all duration-400 ${right.visible ? "animate-fade-up" : "opacity-0"}`}
                  style={{ animationDelay: `${300 + i * 80}ms` }}
                >
                  <div className="text-[9px] uppercase tracking-[0.3em] text-foreground/40 mb-1.5">{s.k}</div>
                  <div className="font-display text-sm sm:text-base font-bold text-foreground/90 break-words">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
