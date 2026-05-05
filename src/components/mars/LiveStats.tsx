import { useEffect, useRef, useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { useTokenStats } from "@/hooks/useTokenStats";

const CA = "CY6TDv7zr7McU8Sz3H65Hz9n8i4m4G5D7PeemfAimoon";

const fmt = (n: number, decimals = 0) => n.toLocaleString("en-US", { maximumFractionDigits: decimals });

function fmtCompact(n: number) {
  if (n >= 1_000_000_000) return `$${(n / 1_000_000_000).toFixed(2)}B`;
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(1)}K`;
  return `$${n.toFixed(2)}`;
}

function fmtPrice(n: number) {
  if (n === 0) return "$0";
  if (n < 0.000001) return `$${n.toExponential(3)}`;
  if (n < 0.01) return `$${n.toFixed(8)}`;
  return `$${n.toFixed(6)}`;
}

const Counter = ({ value, active }: { value: string; active: boolean }) => {
  const [display, setDisplay] = useState("—");
  useEffect(() => {
    if (active) setDisplay(value);
  }, [value, active]);
  return (
    <span className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-gradient-mars text-glow break-all">
      {display}
    </span>
  );
};

const LiveStats = () => {
  const head = useReveal<HTMLDivElement>();
  const grid = useReveal<HTMLDivElement>(0.2);
  const { stats, error, loading } = useTokenStats();
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  useEffect(() => {
    if (stats) setLastUpdated(new Date());
  }, [stats]);

  const statCards = stats
    ? [
        { label: "Price", value: fmtPrice(stats.price), change: stats.priceChange24h },
        { label: "Market Cap", value: fmtCompact(stats.marketCap), change: stats.priceChange24h },
        { label: "Liquidity", value: fmtCompact(stats.liquidity), change: null },
        { label: "24h Volume", value: fmtCompact(stats.volume24h), change: null },
        { label: "24h Txns", value: fmt(stats.txns24h), change: null },
      ]
    : Array(5).fill({ label: "—", value: "—", change: null });

  return (
    <section id="stats" className="relative py-20 md:py-32">
      <div className="absolute inset-0 scanline opacity-30 pointer-events-none" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-mars-ember to-transparent animate-scan-line"
          style={{ boxShadow: "0 0 20px hsl(var(--mars-ember))" }}
        />
      </div>

      <div className="container relative z-10 px-5 md:px-8">
        {/* Header */}
        <div ref={head.ref} className={`text-center max-w-2xl mx-auto ${head.visible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel">
            <span className={`h-2 w-2 rounded-full ${loading ? "bg-foreground/40" : error ? "bg-red-500" : "bg-mars-ember animate-pulse"}`} />
            <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/80">
              {loading ? "Connecting…" : error ? "Offline" : "Live · Mars Network"}
            </span>
          </div>
          <h2 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-black">
            Empire <span className="text-gradient-mars">Telemetry</span>
          </h2>
          {lastUpdated && (
            <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-foreground/40">
              Updated {lastUpdated.toLocaleTimeString()}
            </p>
          )}
        </div>

        {/* Stat cards */}
        <div ref={grid.ref} className="mt-10 md:mt-16 grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-5">
          {statCards.map((s, i) => (
            <div
              key={i}
              className={`glass-panel rounded-2xl p-4 sm:p-6 text-center magnetic shine-sweep hover:shadow-[var(--glow-red)] ${grid.visible ? "animate-bounce-in" : "opacity-0"}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.35em] text-foreground/60">
                {s.label}
              </div>
              <div className="mt-3">
                <Counter value={s.value} active={grid.visible} />
              </div>
              {s.change !== null && (
                <div className={`mt-2 text-xs font-semibold ${s.change >= 0 ? "text-mars-ember" : "text-red-400"}`}>
                  {s.change >= 0 ? "▲" : "▼"} {Math.abs(s.change).toFixed(2)}%
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CA + links */}
        <div className={`mt-10 flex flex-col items-center gap-4 ${head.visible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "600ms" }}>
          <div className="glass-panel rounded-xl px-4 py-2 flex items-center gap-3 max-w-full overflow-hidden">
            <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/50 shrink-0">CA</span>
            <span className="font-mono text-xs text-mars-ember truncate">{CA}</span>
            <button
              onClick={() => navigator.clipboard.writeText(CA)}
              className="shrink-0 text-[10px] uppercase tracking-widest text-foreground/50 hover:text-mars-ember transition-colors"
              title="Copy CA"
            >
              Copy
            </button>
          </div>
          <div className="flex gap-4 text-[10px] uppercase tracking-[0.2em]">
            <a
              href={`https://dexscreener.com/solana/${CA}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-mars-ember transition-colors"
            >
              DexScreener ↗
            </a>
            <a
              href={`https://birdeye.so/token/${CA}?chain=solana`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-mars-ember transition-colors"
            >
              Birdeye ↗
            </a>
            <a
              href={`https://solscan.io/token/${CA}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-mars-ember transition-colors"
            >
              Solscan ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveStats;
