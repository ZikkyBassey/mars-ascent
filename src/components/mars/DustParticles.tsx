import { useMemo } from "react";

const DustParticles = ({ count = 40 }: { count?: number }) => {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 18 + 12,
        delay: Math.random() * -25,
        opacity: Math.random() * 0.5 + 0.2,
        streak: Math.random() > 0.6,
      })),
    [count]
  );

  // Meteors: fast diagonal streaks
  const meteors = useMemo(
    () =>
      Array.from({ length: 6 }).map((_, i) => ({
        id: i,
        top: Math.random() * 60,
        left: Math.random() * 80,
        duration: Math.random() * 1.5 + 0.8,
        delay: Math.random() * 8 + i * 2.5,
        size: Math.random() * 2 + 1,
      })),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Dust / ember particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute animate-drift"
          style={{
            top: `${p.top}%`,
            width: p.streak ? `${p.size * 6}px` : `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: p.streak ? "9999px" : "50%",
            background: p.streak
              ? `linear-gradient(90deg, hsl(var(--mars-ember) / 0.9), transparent)`
              : `hsl(var(--mars-ember))`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            boxShadow: `0 0 ${p.size * 4}px hsl(var(--mars-ember) / 0.6)`,
          }}
        />
      ))}

      {/* Meteor streaks */}
      {meteors.map((m) => (
        <span
          key={`meteor-${m.id}`}
          className="absolute animate-meteor"
          style={{
            top: `${m.top}%`,
            left: `${m.left}%`,
            width: `${80 + m.size * 30}px`,
            height: `${m.size}px`,
            borderRadius: "9999px",
            background: "linear-gradient(90deg, hsl(18 100% 80% / 0.95), hsl(6 100% 60% / 0.5), transparent)",
            boxShadow: `0 0 6px hsl(18 100% 70% / 0.8)`,
            animationDuration: `${m.duration}s`,
            animationDelay: `${m.delay}s`,
            animationIterationCount: "infinite",
          }}
        />
      ))}
    </div>
  );
};

export default DustParticles;
