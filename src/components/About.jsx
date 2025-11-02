import React from 'react';
import { Cpu, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-black py-20 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <Sparkles className="h-5 w-5 text-purple-400" />
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">About Me</h2>
        </div>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-purple-600/30 via-sky-500/30 to-orange-400/30 p-5 shadow-lg shadow-purple-500/10">
              <div className="flex h-full w-full items-center justify-center rounded-xl bg-black/40 backdrop-blur">
                <Cpu className="h-12 w-12 text-purple-200" />
              </div>
            </div>
          </div>
          <div className="md:col-span-2">
            <p className="text-white/80">
              I’m a software engineer focused on crafting intelligent, user-centric experiences.
              My work blends modern web engineering with applied AI — from interactive interfaces
              to automation pipelines and model-driven features. I care about clarity, performance,
              and helping people do more with technology.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-white/60">Focus</p>
                <p className="mt-1 font-medium">AI-enhanced products, DX tooling, data visualization</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-white/60">Stack</p>
                <p className="mt-1 font-medium">React, TypeScript, Python, FastAPI, Node, MongoDB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
