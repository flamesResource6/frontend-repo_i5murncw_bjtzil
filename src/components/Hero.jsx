import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[85vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Decorative gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 md:flex-row md:gap-10">
        {/* Copy */}
        <motion.div
          className="z-10 order-2 w-full md:order-1 md:w-1/2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="bg-gradient-to-b from-white to-slate-300 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            Building delightful software experiences
          </motion.h1>
          <motion.p
            className="mt-5 max-w-xl text-base leading-relaxed text-slate-300/90 sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            I’m a full‑stack engineer crafting elegant, performant interfaces and scalable systems. Blending code, 3D, and motion to make technology feel effortless.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-5 py-3 text-slate-900 shadow-lg shadow-cyan-500/20 transition hover:shadow-fuchsia-500/20"
            >
              <Rocket className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
              <span className="font-semibold">View Projects</span>
            </a>
            <a
              href="https://github.com" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white backdrop-blur transition hover:border-white/20 hover:bg-white/10"
            >
              <Github className="h-5 w-5" /> GitHub
            </a>
            <a
              href="https://linkedin.com" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white backdrop-blur transition hover:border-white/20 hover:bg-white/10"
            >
              <Linkedin className="h-5 w-5" /> LinkedIn
            </a>
          </motion.div>
        </motion.div>

        {/* 3D Spline Scene */}
        <motion.div
          className="relative order-1 h-[380px] w-full md:order-2 md:h-[520px] md:w-1/2"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 shadow-2xl backdrop-blur-sm" />
          <div className="relative z-10 h-full w-full overflow-hidden rounded-3xl">
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          {/* Subtle overlay for depth without blocking interactions */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
