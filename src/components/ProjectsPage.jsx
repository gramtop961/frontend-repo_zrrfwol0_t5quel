import { Link } from 'react-router-dom';
import { ArrowLeft, Code2, Cpu, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Algorithm Visualizer',
    icon: Code2,
    desc: 'Interactive visualizations for classic algorithms with complexity insights.',
    tags: ['React', 'D3', 'Algorithms'],
    href: '#'
  },
  {
    title: 'Systems Dashboard',
    icon: Cpu,
    desc: 'Real‑time metrics and alerting for distributed services.',
    tags: ['FastAPI', 'WebSockets', 'Tailwind'],
    href: '#'
  },
  {
    title: 'Launch Planner',
    icon: Rocket,
    desc: 'Plan milestones and track progress across multi‑disciplinary teams.',
    tags: ['TypeScript', 'Vite', 'Framer Motion'],
    href: '#'
  }
];

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white">
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

      <main className="max-w-6xl mx-auto px-6 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Projects
        </motion.h1>
        <p className="mt-4 text-white/70 max-w-3xl">
          A selection of work that highlights my approach to problem‑solving, performance, and user experience.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
            >
              <p.icon className="w-6 h-6 text-indigo-400" />
              <h3 className="mt-3 font-semibold text-lg">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/10">{t}</span>
                ))}
              </div>
              <div className="mt-4 text-sm text-indigo-300 opacity-0 group-hover:opacity-100 transition">Open ↗</div>
            </motion.a>
          ))}
        </div>
      </main>
    </div>
  );
}

export default ProjectsPage;
