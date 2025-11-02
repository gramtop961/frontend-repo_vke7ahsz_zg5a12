import React from 'react';
import Spline from '@splinetool/react-spline';
import { Download, Mail, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* subtle gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/90" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-purple-600/20 via-transparent to-transparent blur-2xl" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium tracking-wide text-white/80 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
          AI-first Engineer • Building with intelligence
        </p>
        <h1 className="text-balance bg-gradient-to-r from-purple-300 via-sky-200 to-orange-200 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl md:text-6xl">
          Hi, I’m Your Name — I build smart, human-centered software
        </h1>
        <p className="mt-5 max-w-2xl text-balance text-base text-white/80 sm:text-lg">
          AI and computer-themed portfolio that blends design, code, and machine intelligence. Explore my experience, skills, and selected work.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black shadow/40 shadow-white/10 transition hover:shadow-lg hover:shadow-white/20"
          >
            <Mail className="h-4 w-4" /> Contact Me
          </a>
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            <Download className="h-4 w-4" /> Download Resume
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
