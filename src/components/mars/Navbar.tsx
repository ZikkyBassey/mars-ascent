import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#utility", label: "Utility" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#stats", label: "Live Stats" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "py-3 backdrop-blur-2xl bg-[hsl(2_8%_4%/0.85)] border-b border-white/[0.06] shadow-[0_1px_0_hsl(6_100%_50%/0.08)]"
          : "py-6"
      }`}
    >
      <nav className="container flex items-center justify-between px-5 md:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="relative inline-flex h-2.5 w-2.5">
            <span className="absolute inset-0 rounded-full bg-mars-crimson animate-ping opacity-50" />
            <span className="relative rounded-full h-2.5 w-2.5 bg-mars-ember" style={{ boxShadow: "0 0 12px hsl(var(--mars-ember)), 0 0 24px hsl(var(--mars-ember)/0.4)" }} />
          </span>
          <span className="font-display font-black tracking-widest text-base text-gradient-mars">$MARS</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-[11px] uppercase tracking-[0.22em] font-semibold text-foreground/55 hover:text-foreground/90 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 hover:after:w-full after:bg-mars-ember after:transition-all after:duration-400"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-px w-6 bg-foreground/70 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-px w-6 bg-foreground/70 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-foreground/70 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass-panel mx-4 mt-2 rounded-2xl p-5 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-[11px] uppercase tracking-[0.25em] font-semibold text-foreground/70 hover:text-mars-ember transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
