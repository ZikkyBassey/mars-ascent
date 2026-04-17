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
      })),
    [count]
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-mars-ember animate-drift"
          style={{
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            boxShadow: `0 0 ${p.size * 4}px hsl(var(--mars-ember) / 0.6)`,
          }}
        />
      ))}
    </div>
  );
};

export default DustParticles;
