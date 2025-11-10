import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Cpu } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Dashboard',
    description: 'Streaming analytics with live charts and micro-interactions.',
    icon: Globe,
    tags: ['Next.js', 'WebSockets', 'Tailwind'],
  },
  {
    title: 'Design System',
    description: 'A scalable UI kit with tokens, theming, and accessibility.',
    icon: Cpu,
    tags: ['React', 'Radix', 'Storybook'],
  },
  {
    title: 'Code Playground',
    description: 'Interactive editor executing code in the browser securely.',
    icon: Code2,
    tags: ['Monaco', 'WASM', 'Workers'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Selected Work</h2>
            <p className="mt-2 text-slate-300/80">A few favorites blending performance, craft, and clarity.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-5 shadow-xl"
            >
              <div className="mb-4 inline-flex rounded-xl bg-white/10 p-3 text-white">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-300/90">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-200/90">
                    {t}
                  </span>
                ))}
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100" style={{background:"radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(255,255,255,0.08), transparent 40%)"}} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
