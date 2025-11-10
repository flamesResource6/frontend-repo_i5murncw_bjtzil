import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-slate-950/60 py-8 text-center text-sm text-slate-400">
        <p>© {new Date().getFullYear()} Your Name — Crafted with passion and precision.</p>
      </footer>
    </div>
  );
}

export default App;
