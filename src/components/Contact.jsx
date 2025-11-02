import React from 'react';
import { Mail, MessageSquare, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full bg-gradient-to-b from-[#070709] to-black py-20 text-white">
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-white/70">
          <MessageSquare className="h-4 w-4" />
          Let’s build something remarkable
        </div>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Get in Touch</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/80">
          I’m open to new opportunities, collaborations, and interesting problems. Email me and I’ll reply within 24–48 hours.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:you@example.com"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black shadow/40 shadow-white/10 transition hover:shadow-lg hover:shadow-white/20"
          >
            <Mail className="h-4 w-4" /> Email Me
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

export default Contact;
