import { motion } from 'framer-motion';
import { Code2, Brain, BarChart3, Cpu } from 'lucide-react';

const projects = [
  {
    title: 'Algorithm Visualizer',
    description:
      'Interactive visualizations for graph, DP, and greedy algorithms with step-by-step explanations and complexity insights.',
    tags: ['React', 'D3', 'Algorithms'],
    icon: Code2,
    link: '#',
  },
  {
    title: 'Competitive Programming Toolkit',
    description:
      'Curated template library and performance profiler for contest setups, with benchmarks and pattern search.',
    tags: ['C++', 'Rust', 'CLI'],
    icon: Brain,
    link: '#',
  },
  {
    title: 'Data Analysis Dashboard',
    description:
      'Exploratory dashboard for large datasets: filters, drill-downs, and statistical summaries with clean UX.',
    tags: ['Python', 'FastAPI', 'ECharts'],
    icon: BarChart3,
    link: '#',
  },
  {
    title: 'Systems Lab: RISC-V Kernel',
    description:
      'Minimal kernel with process scheduling, syscalls, and memory management built for a RISC-V learning platform.',
    tags: ['RISC-V', 'C', 'OS'],
    icon: Cpu,
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 md:py-28">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-sky-500/5 to-transparent" />
      <div className="relative max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
            <p className="mt-2 text-slate-300 max-w-2xl">
              A selection of work that blends strong analytical thinking with clean, pragmatic engineering.
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-400/10 via-transparent to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/10 border border-white/10">
                    <p.icon className="w-6 h-6 text-sky-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
