import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-slate-950/40 via-slate-950/30 to-slate-950" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 pt-28 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Jonathan
          </h1>
          <p className="mt-3 md:mt-4 text-lg md:text-xl text-slate-300">
            Computer Science & Engineering undergraduate at CUHKSZ. I love solving complex problems and building thoughtful, analytical solutions.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-white text-slate-900 px-5 py-3 font-medium shadow-sm hover:shadow transition-shadow"
            >
              View Projects
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 text-white px-5 py-3 font-medium hover:bg-white/10 transition-colors"
            >
              About Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
