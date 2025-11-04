import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

function ContactPage() {
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
          Contact
        </motion.h1>
        <p className="mt-4 text-white/70 max-w-2xl">
          I’m open to collaboration, internships, and interesting problems. Feel free to reach out — I’ll get back to you soon.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a href="mailto:jonathan@example.com" className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition inline-flex items-center gap-3">
            <Mail className="w-5 h-5 text-indigo-400" />
            <div>
              <div className="font-semibold">Email</div>
              <div className="text-sm text-white/70">jonathan@example.com</div>
            </div>
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition inline-flex items-center gap-3">
            <Github className="w-5 h-5 text-indigo-400" />
            <div>
              <div className="font-semibold">GitHub</div>
              <div className="text-sm text-white/70">github.com/</div>
            </div>
          </a>
          <a href="https://linkedin.com/in/" target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition inline-flex items-center gap-3">
            <Linkedin className="w-5 h-5 text-indigo-400" />
            <div>
              <div className="font-semibold">LinkedIn</div>
              <div className="text-sm text-white/70">linkedin.com/in/</div>
            </div>
          </a>
        </div>
      </main>
    </div>
  );
}

export default ContactPage;
