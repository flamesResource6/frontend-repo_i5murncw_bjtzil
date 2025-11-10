import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative bg-slate-950 py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Let’s build something remarkable
        </motion.h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-300/90">
          Have an idea or a role in mind? I’m open to opportunities and collaborations.
        </p>
        <div className="mx-auto mt-8 max-w-md rounded-2xl border border-white/10 bg-white/5 p-2 shadow-xl backdrop-blur">
          <a
            href="mailto:hello@yourdomain.dev"
            className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-5 py-3 font-semibold text-slate-900 shadow-lg"
          >
            <Mail className="h-5 w-5" />
            hello@yourdomain.dev
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
