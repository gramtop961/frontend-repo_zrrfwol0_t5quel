import { Mail, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 mt-10">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-white">Let’s connect</h3>
            <p className="mt-2 text-slate-300 max-w-prose">
              Open to internships, research collaborations, and interesting engineering problems.
            </p>
          </div>
          <div className="flex items-center gap-3 md:justify-end">
            <a
              href="mailto:jonathan.cse@cuhksz.edu.cn"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
        <div className="mt-8 text-xs text-slate-400">© {new Date().getFullYear()} Jonathan. Built with care.</div>
      </div>
    </footer>
  );
}
