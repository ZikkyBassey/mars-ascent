import { useEffect, useState } from "react";
import astronaut from "@/assets/astronaut.png";
import marsBg from "@/assets/mars-bg.jpg";
import DustParticles from "./DustParticles";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // parallax + camera orbit feel
  const bgShift = scrollY * 0.25;
  const astroShift = scrollY * 0.15;
  const astroRotate = Math.min(scrollY * 0.04, 8);
  const astroScale = 1 + Math.min(scrollY * 0.0004, 0.15);
  const titleShift = scrollY * 0.4;

  return (
    <section className="relative min-h-screen w-full overflow-hidden vignette">
      {/* Sky / horizon background */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          backgroundImage: `url(${marsBg})`,
          backgroundSize: "cover",
          backgroundPosition: `center ${30 - bgShift * 0.05}%`,
          transform: `translate3d(0, ${bgShift * 0.3}px, 0) scale(1.1)`,
          filter: "saturate(1.15) contrast(1.05)",
        }}
      />

      {/* Atmospheric overlays */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 mars-grid opacity-40" />
      <div className="absolute inset-x-0 bottom-0 h-1/3" style={{ background: "var(--gradient-horizon)" }} />

      {/* Glowing horizon sun */}
      <div
        className="absolute left-1/2 -translate-x-1/2 rounded-full pointer-events-none animate-pulse-glow"
        style={{
          bottom: `${20 - scrollY * 0.02}%`,
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, hsl(18 100% 60% / 0.5) 0%, hsl(6 90% 45% / 0.2) 30%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      {/* Dust */}
      <DustParticles count={50} />

      {/* Astronaut */}
      <div
        className="absolute left-1/2 bottom-0 w-[min(85vw,640px)] will-change-transform pointer-events-none"
        style={{
          transform: `translate3d(-50%, ${-astroShift}px, 0) rotate(${astroRotate}deg) scale(${astroScale})`,
          transition: "transform 0.05s linear",
        }}
      >
        <div className="absolute inset-0 -z-10 blur-3xl opacity-70"
             style={{ background: "radial-gradient(ellipse at center 60%, hsl(6 100% 50% / 0.6), transparent 60%)" }} />
        <img
          src={astronaut}
          alt="Futuristic Martian astronaut in red and black armored suit standing on Mars"
          className="w-full h-auto select-none drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
          draggable={false}
        />
      </div>

      {/* Title content */}
      <div
        className="relative z-10 container min-h-screen flex flex-col items-center justify-center text-center pt-32 will-change-transform"
        style={{ transform: `translate3d(0, ${-titleShift}px, 0)`, opacity: Math.max(1 - scrollY / 600, 0) }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel mb-8 animate-fade-in">
          <span className="h-1.5 w-1.5 rounded-full bg-mars-ember animate-pulse" />
          <span className="text-xs uppercase tracking-[0.3em] text-foreground/80">Transmission · Sol 001</span>
        </div>

        <h1 className="font-display font-black text-[clamp(5rem,18vw,16rem)] leading-none text-gradient-mars text-glow-anim animate-bounce-in">
          $MARS
        </h1>

        <p className="mt-6 text-lg md:text-2xl tracking-[0.3em] uppercase text-foreground/85 font-light animate-fade-up" style={{ animationDelay: "400ms" }}>
          Built on Mars. Driven by Martians.
        </p>

        <div id="cta" className="mt-12 flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "700ms" }}>
          <a
            href="#about"
            className="group relative inline-flex items-center justify-center px-9 py-4 rounded-full font-semibold uppercase tracking-[0.2em] text-sm text-primary-foreground overflow-hidden transition-all duration-500 hover:scale-105 animate-glow-pulse shine-sweep"
            style={{ background: "var(--gradient-button)" }}
          >
            <span className="relative z-10">Launch Mission</span>
            <span className="absolute inset-0 bg-gradient-to-r from-mars-ember to-mars-crimson opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
          <a
            href="#community"
            className="inline-flex items-center justify-center px-9 py-4 rounded-full font-semibold uppercase tracking-[0.2em] text-sm border border-mars-crimson/50 text-foreground glass-panel shine-sweep hover:border-mars-ember hover:shadow-[var(--glow-red)] hover:-translate-y-0.5 transition-all duration-500"
          >
            Join the Martians
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/50">
          <span className="text-[10px] uppercase tracking-[0.4em]">Scroll to descend</span>
          <span className="block h-10 w-px bg-gradient-to-b from-mars-ember to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
