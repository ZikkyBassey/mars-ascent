import { useEffect, useState } from "react";

const stats = [
  { label: "Market Cap", value: 42_800_000, prefix: "$", suffix: "" },
  { label: "Holders", value: 38420, prefix: "", suffix: "" },
  { label: "24h Volume", value: 6_120_000, prefix: "$", suffix: "" },
  { label: "Martians Online", value: 12734, prefix: "", suffix: "" },
];

const format = (n: number) => n.toLocaleString("en-US");

const Counter = ({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start: number | null = null;
    const dur = 1800;
    let raf = 0;
    const tick = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target]);
  return (
    <span className="font-display text-4xl md:text-5xl font-black text-gradient-mars text-glow">
      {prefix}{format(val)}{suffix}
    </span>
  );
};

const LiveStats = () => (
  <section id="stats" className="relative py-32">
    <div className="absolute inset-0 scanline opacity-30 pointer-events-none" />
    <div className="container relative z-10">
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel">
          <span className="h-2 w-2 rounded-full bg-mars-ember animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/80">Live · Mars Network</span>
        </div>
        <h2 className="mt-6 font-display text-5xl md:text-6xl font-black">
          Empire <span className="text-gradient-mars">Telemetry</span>
        </h2>
      </div>

      <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((s) => (
          <div key={s.label} className="glass-panel rounded-2xl p-7 text-center hover:shadow-[var(--glow-red)] transition-all duration-500">
            <div className="text-[10px] uppercase tracking-[0.4em] text-foreground/60">{s.label}</div>
            <div className="mt-4">
              <Counter target={s.value} prefix={s.prefix} suffix={s.suffix} />
            </div>
            <div className="mt-3 text-xs text-mars-ember">▲ +{(Math.random() * 12 + 2).toFixed(2)}%</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LiveStats;
