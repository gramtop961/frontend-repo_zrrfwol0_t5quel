import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, Code2, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-[#0b0f1a]/70 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/70">
            <Link to="/about" className="hover:text-white transition">About</Link>
            <Link to="/projects" className="hover:text-white transition">Projects</Link>
            <Link to="/contact" className="hover:text-white transition">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold"
        >
          About Me
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-white/70 max-w-3xl"
        >
          I’m Jonathan, a Computer Science and Engineering undergraduate at CUHKSZ. I’m passionate about algorithms, systems design, and building polished user experiences. My approach blends analytical rigor with creativity — whether I’m optimizing performance, structuring data, or crafting interactive visuals.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[{
            icon: Brain,
            title: 'Analytical Thinking',
            desc: 'Breaking down complex problems into clear, solvable steps with measurable outcomes.'
          }, {
            icon: Code2,
            title: 'Engineering Craft',
            desc: 'Clean, maintainable code with a focus on performance and reliability.'
          }, {
            icon: BarChart3,
            title: 'Impact & Insights',
            desc: 'Data‑informed decisions and careful evaluation to maximize real‑world impact.'
          }].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-xl border border-white/10 bg-white/5 p-6"
            >
              <item.icon className="w-5 h-5 text-indigo-400" />
              <h3 className="mt-3 font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-white/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default AboutPage;
