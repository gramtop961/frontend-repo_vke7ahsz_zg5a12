import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Contact />
      <footer className="border-t border-white/10 bg-black py-8 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Your Name — Crafted with React, Tailwind & a touch of AI
      </footer>
    </div>
  );
}

export default App;
