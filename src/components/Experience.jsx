import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Senior AI Engineer',
    company: 'NovaTech',
    period: '2023 — Present',
    points: [
      'Built generative features that reduced task time by 45%.',
      'Designed retrieval pipelines and embeddings-driven search.',
      'Led performance work that cut inference costs 30%.',
    ],
  },
  {
    role: 'Full‑Stack Developer',
    company: 'Orbit Systems',
    period: '2021 — 2023',
    points: [
      'Shipped dashboards for real-time analytics at scale.',
      'Created design systems and component libraries.',
      'Mentored juniors and improved CI/CD workflows.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Freelance',
    period: '2019 — 2021',
    points: [
      'Delivered web apps for startups and indie founders.',
      'Automated data pipelines and reporting systems.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="w-full bg-gradient-to-b from-black to-[#070709] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <Briefcase className="h-5 w-5 text-sky-400" />
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Experience</h2>
        </div>
        <ol className="relative border-l border-white/10 pl-6">
          {experiences.map((exp, idx) => (
            <li key={idx} className="mb-10">
              <div className="absolute -left-2.5 mt-1.5 h-5 w-5 rounded-full border border-white/20 bg-white/10" />
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold">
                    {exp.role} • <span className="text-white/70">{exp.company}</span>
                  </h3>
                  <span className="text-sm text-white/60">{exp.period}</span>
                </div>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-white/80">
                  {exp.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
