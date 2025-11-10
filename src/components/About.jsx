import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative bg-slate-950 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-slate-900">
            <Sparkles className="h-5 w-5" />
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">About</h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 text-slate-200 shadow-2xl backdrop-blur"
        >
          <p className="text-lg leading-relaxed">
            I merge product thinking, human-centered design, and strong engineering fundamentals to craft experiences that feel fast and intuitive. My toolkit spans modern web frameworks, design systems, and motion—always with a focus on clarity and polish.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {['Performance-first mindset', 'Elegant, accessible interfaces', 'Scalable architecture', 'Thoughtful micro-interactions'].map((item) => (
              <li key={item} className="flex items-center gap-3 text-slate-300/95">
                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
