import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-12 gap-8 items-start"
        >
          <div className="md:col-span-7">
            <h2 className="text-3xl md:text-4xl font-bold text-white">About</h2>
            <p className="mt-3 text-slate-300 leading-relaxed">
              I’m an undergraduate in Computer Science and Engineering at CUHKSZ with a deep interest in algorithms,
              systems, and data. I enjoy turning ambiguous problems into precise solutions — from designing efficient
              data structures to building robust software that scales.
            </p>
            <p className="mt-3 text-slate-300 leading-relaxed">
              Outside of coursework, I explore competitive programming, contribute to open-source, and prototype tools
              that enhance developer productivity.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 text-sky-300">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm">Problem-solving • Analysis • Craftsmanship</span>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-fuchsia-500/10 via-transparent to-sky-400/10" />
              <h3 className="relative z-10 text-white font-semibold">Highlights</h3>
              <ul className="relative z-10 mt-3 space-y-2 text-sm text-slate-300">
                <li>• Top performance in algorithms and systems courses</li>
                <li>• Built interactive visual tools for teaching CS concepts</li>
                <li>• Experience with C/C++, Python, Rust, and modern web</li>
                <li>• Comfortable across backend, frontend, and tooling</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
