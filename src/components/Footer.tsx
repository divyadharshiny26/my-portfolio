import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center gap-6">
        
        {/* Quote */}
        <p className="text-sm font-medium italic text-slate-500 max-w-md">
          "The best way to predict the future is to create it."
        </p>

        {/* Social Icons Row */}
        <div className="flex items-center gap-5 text-slate-500">
          <a
            href="https://github.com/divyadharshiny26"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/></svg>
          </a>
          <a
            href="https://www.linkedin.com/in/divyadharshiny-v-125a79333/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9" rx="1"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a
            href="mailto:divya.dshiny26@gmail.com"
            className="hover:text-white transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Quick Links Row */}
        <div className="flex flex-wrap justify-center gap-6 text-xs font-bold uppercase tracking-wider text-slate-500">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Resume</a>
        </div>

        {/* Divider */}
        <div className="w-16 h-[1px] bg-slate-800" />

        {/* Credits */}
        <p className="text-xs text-slate-600">
          Designed &amp; Built with ❤️ by <span className="text-slate-500 font-bold">Divyadharshiny V</span> &copy; {new Date().getFullYear()}
        </p>

        {/* Scroll to Top floating action */}
        <button
          onClick={scrollToTop}
          className="absolute right-6 bottom-12 p-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-all shadow-lg hover:-translate-y-0.5 focus:outline-none"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>
    </footer>
  );
}
