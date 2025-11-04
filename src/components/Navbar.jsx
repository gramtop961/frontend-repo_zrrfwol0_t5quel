import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLink = (href, label) => (
    <a
      key={href}
      href={href}
      onClick={() => setOpen(false)}
      className="px-4 py-2 rounded-md text-sm md:text-base text-slate-200 hover:text-white hover:bg-white/5 transition-colors"
    >
      {label}
    </a>
  );

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-slate-900/60 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="font-semibold tracking-tight text-white text-lg">
            Jonathan • CSE @ CUHKSZ
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLink('#about', 'About')}
            {navLink('#projects', 'Projects')}
            {navLink('#contact', 'Contact')}
          </nav>

          <button
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-md hover:bg-white/10"
            onClick={() => setOpen(v => !v)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-1">
            {navLink('#about', 'About')}
            {navLink('#projects', 'Projects')}
            {navLink('#contact', 'Contact')}
          </div>
        )}
      </div>
    </header>
  );
}
