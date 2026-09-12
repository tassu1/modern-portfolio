import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CommandPalette from './components/CommandPalette';
import Footer from './components/Footer';
import Hero from './pages/Hero';
import Approach from './pages/Approach';
import Projects from './pages/Projects';
import Capabilities from './pages/Capabilities';
import TechStack from './pages/TechStack';
import Experience from './pages/Experience';
import ProofAndFocus from './pages/ProofAndFocus';
import About from './pages/About';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsPaletteOpen((prev) => !prev);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar onOpenPalette={() => setIsPaletteOpen(true)} />
      <CommandPalette isOpen={isPaletteOpen} onClose={() => setIsPaletteOpen(false)} />

      <Hero />
      <Approach />
      <Projects />
      <Capabilities />
      <TechStack />
      <Experience />
      <ProofAndFocus />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
