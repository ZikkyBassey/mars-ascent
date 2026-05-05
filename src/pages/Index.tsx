import Navbar from "@/components/mars/Navbar";
import Hero from "@/components/mars/Hero";
import About from "@/components/mars/About";
import Utility from "@/components/mars/Utility";
import Roadmap from "@/components/mars/Roadmap";
import LiveStats from "@/components/mars/LiveStats";
import Footer from "@/components/mars/Footer";
import DustParticles from "@/components/mars/DustParticles";

const Index = () => {
  return (
    <main className="relative min-h-screen bg-mars-black text-foreground overflow-hidden">
      {/* Global ambient dust */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <DustParticles count={20} />
      </div>

      <Navbar />
      <Hero />

      {/* Section divider */}
      <div className="relative h-px mx-auto max-w-4xl bg-gradient-to-r from-transparent via-mars-crimson/30 to-transparent" />

      <About />

      <div className="relative h-px mx-auto max-w-4xl bg-gradient-to-r from-transparent via-mars-crimson/20 to-transparent" />

      <Utility />

      <div className="relative h-px mx-auto max-w-4xl bg-gradient-to-r from-transparent via-mars-crimson/20 to-transparent" />

      <Roadmap />

      <div className="relative h-px mx-auto max-w-4xl bg-gradient-to-r from-transparent via-mars-crimson/20 to-transparent" />

      <LiveStats />
      <Footer />
    </main>
  );
};

export default Index;
