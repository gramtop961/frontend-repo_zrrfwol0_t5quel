import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import Spline from '@splinetool/react-spline';

function Landing() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Interactive 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6nU8qUQq6b6f0mQF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay that does not block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-[#0b0f1a]/40 to-[#0b0f1a]" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm mb-6">
          <Sparkles className="w-4 h-4 text-indigo-300" />
          <span className="text-sm text-indigo-200">Jonathan · CSE @ CUHKSZ</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Problem solver crafting thoughtful systems and experiences
        </h1>
        <p className="mt-4 text-white/70 leading-relaxed md:text-lg">
          I love turning complex challenges into elegant, efficient solutions — from algorithms and systems to delightful user interactions.
        </p>

        {/* CTA buttons that navigate to dedicated subpages */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/about" className="w-full sm:w-auto px-6 py-3 rounded-md bg-white text-black font-medium hover:bg-white/90 transition">
            About Me
          </Link>
          <Link to="/projects" className="w-full sm:w-auto px-6 py-3 rounded-md bg-indigo-600 hover:bg-indigo-500 transition font-medium">
            View Projects
          </Link>
          <Link to="/contact" className="w-full sm:w-auto px-6 py-3 rounded-md bg-white/10 hover:bg-white/20 transition font-medium">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
