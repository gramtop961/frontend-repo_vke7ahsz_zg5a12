import React from 'react';
import { Brain, Code, Cpu, Database } from 'lucide-react';

const skills = [
  { icon: Brain, title: 'AI/ML', items: ['LLMs', 'Embeddings', 'RAG', 'Prompt Design'] },
  { icon: Code, title: 'Frontend', items: ['React', 'TypeScript', 'Tailwind', 'Vite'] },
  { icon: Cpu, title: 'Backend', items: ['FastAPI', 'Node', 'Auth', 'REST'] },
  { icon: Database, title: 'Data', items: ['MongoDB', 'SQL', 'Pipelines', 'ETL'] },
];

const Skills = () => {
  return (
    <section id="skills" className="w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-10 text-2xl font-semibold tracking-tight sm:text-3xl">Skills</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ icon: Icon, title, items }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 transition hover:from-white/10">
              <div className="mb-3 inline-flex rounded-lg border border-white/10 bg-white/5 p-3">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <ul className="mt-2 space-y-1 text-sm text-white/70">
                {items.map((it) => (
                  <li key={it}>• {it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
