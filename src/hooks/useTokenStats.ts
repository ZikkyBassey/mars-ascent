import { useEffect, useState } from "react";

const CA = "CY6TDv7zr7McU8Sz3H65Hz9n8i4m4G5D7PeemfAimoon";
const REFRESH_MS = 30_000;

export interface TokenStats {
  price: number;
  marketCap: number;
  liquidity: number;
  volume24h: number;
  priceChange24h: number;
  txns24h: number;
  holders: number | null;
  pairAddress: string;
}

async function fetchStats(): Promise<TokenStats> {
  const res = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${CA}`);
  if (!res.ok) throw new Error("DexScreener fetch failed");
  const data = await res.json();

  // pick the pair with highest liquidity
  const pairs: any[] = data.pairs ?? [];
  if (!pairs.length) throw new Error("No pairs found");
  const pair = pairs.sort((a, b) => (b.liquidity?.usd ?? 0) - (a.liquidity?.usd ?? 0))[0];

  return {
    price: parseFloat(pair.priceUsd ?? "0"),
    marketCap: pair.marketCap ?? pair.fdv ?? 0,
    liquidity: pair.liquidity?.usd ?? 0,
    volume24h: pair.volume?.h24 ?? 0,
    priceChange24h: pair.priceChange?.h24 ?? 0,
    txns24h: (pair.txns?.h24?.buys ?? 0) + (pair.txns?.h24?.sells ?? 0),
    holders: null, // DexScreener doesn't expose holders; Solscan blocks bots
    pairAddress: pair.pairAddress ?? "",
  };
}

export function useTokenStats() {
  const [stats, setStats] = useState<TokenStats | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    const load = async () => {
      try {
        const s = await fetchStats();
        if (alive) { setStats(s); setError(null); }
      } catch (e: any) {
        if (alive) setError(e.message);
      } finally {
        if (alive) setLoading(false);
      }
    };
    load();
    const id = setInterval(load, REFRESH_MS);
    return () => { alive = false; clearInterval(id); };
  }, []);

  return { stats, error, loading };
}
