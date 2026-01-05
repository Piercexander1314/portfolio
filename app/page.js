import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ToolsCarousel from "./components/ToolsCarousel";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Badges from "./components/Badges";
import Certificates from "./components/Certificates";

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-white dark:bg-[#0B1120]">
      <Header />
      <Hero />
      <Projects />
      <div id="tools">
        <ToolsCarousel />
      </div>
      <div id="badges">
        <Badges />
      </div>
      <div id="certificates">
        <Certificates />
      </div>
      <Testimonials />
      <Contact />
      <footer className="border-t border-mist px-6 py-8 dark:border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 text-sm text-slate md:flex-row md:items-center dark:text-white">
          <p>Available for fractional automation consulting and build-outs.</p>
          <p>(c) 2023 Pierce Xander Giron. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
