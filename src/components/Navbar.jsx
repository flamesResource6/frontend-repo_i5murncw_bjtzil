import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

const Navbar = () => {
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-xl backdrop-blur-xl">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-slate-900 shadow-lg">
              <Rocket className="h-5 w-5" />
            </span>
            <span className="text-lg font-semibold tracking-tight text-white">Your Name</span>
          </a>

          <nav className="hidden gap-6 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-slate-200/90 transition hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-slate-900 shadow-md md:inline-block"
          >
            Let’s Talk
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
