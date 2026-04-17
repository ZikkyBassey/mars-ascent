import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#utility", label: "Utility" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#stats", label: "Live Stats" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 backdrop-blur-xl bg-mars-black/70 border-b border-mars-crimson/20" : "py-6"
      }`}
    >
      <nav className="container flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="relative inline-flex h-3 w-3">
            <span className="absolute inset-0 rounded-full bg-mars-crimson animate-ping opacity-60" />
            <span className="relative rounded-full h-3 w-3 bg-mars-ember shadow-[0_0_15px_hsl(var(--mars-ember))]" />
          </span>
          <span className="font-display font-black tracking-widest text-lg text-gradient-mars">$MARS</span>
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm uppercase tracking-[0.2em] font-medium text-foreground/70 hover:text-foreground transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 hover:after:w-full after:bg-mars-ember after:transition-all after:duration-500"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#cta"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-xs uppercase tracking-[0.25em] font-semibold rounded-full border border-mars-crimson/40 text-foreground hover:bg-mars-crimson/10 hover:border-mars-ember hover:shadow-[var(--glow-red)] transition-all duration-300"
        >
          Connect Wallet
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
