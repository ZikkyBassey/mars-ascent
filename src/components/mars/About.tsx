import marsGround from "@/assets/mars-ground.jpg";
import { useReveal } from "@/hooks/useReveal";

const About = () => {
  const left = useReveal<HTMLDivElement>();
  const right = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${marsGround})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(2px)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-mars-black via-mars-black/95 to-mars-black" />

      <div className="container relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div
          ref={left.ref}
          className={left.visible ? "animate-fade-up" : "opacity-0"}
        >
          <span className="text-xs uppercase tracking-[0.4em] text-mars-ember">// Origin Protocol</span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl font-black leading-tight">
            A new <span className="text-gradient-mars">civilization</span><br />on the red frontier.
          </h2>
          <p className="mt-8 text-lg text-foreground/75 max-w-xl leading-relaxed">
            $MARS is more than a token — it's the economic core of an interplanetary movement.
            Forged by code, fueled by belief, and commanded by the Martians, we are building
            the dominant on-chain empire of the next decade.
          </p>
          <p className="mt-4 text-lg text-foreground/75 max-w-xl leading-relaxed">
            The earth chapter is closing. The red one begins now.
          </p>
        </div>

        <div
          ref={right.ref}
          className={`relative ${right.visible ? "animate-scale-in" : "opacity-0"}`}
          style={{ animationDelay: "150ms" }}
        >
          <div className="glass-panel rounded-3xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-mars-crimson/30 blur-3xl animate-pulse-glow" />
            <div className="grid grid-cols-2 gap-6 relative">
              {[
                { k: "Total Supply", v: "1,000,000,000" },
                { k: "Network", v: "Solana" },
                { k: "Tax", v: "0 / 0" },
                { k: "Liquidity", v: "Burned 🔥" },
              ].map((s, i) => (
                <div
                  key={s.k}
                  className={`border border-mars-crimson/20 rounded-xl p-5 bg-mars-black/40 hover:border-mars-ember/60 hover:-translate-y-1 hover:shadow-[var(--glow-red)] transition-all duration-500 ${right.visible ? "animate-fade-up" : "opacity-0"}`}
                  style={{ animationDelay: `${300 + i * 100}ms` }}
                >
                  <div className="text-[10px] uppercase tracking-[0.3em] text-mars-ember">{s.k}</div>
                  <div className="mt-2 font-display text-xl font-bold">{s.v}</div>
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
