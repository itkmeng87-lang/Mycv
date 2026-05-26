import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-900 bg-slate-950/40 backdrop-blur-md py-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-slate-500">
        <div className="flex gap-6">
          <a href="#about" className="hover:text-cyan-400 transition">About</a>
          <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
        </div>
        <div>
          © 2026 Alex Rivers. Built with React & Tailwind.
        </div>
      </div>
    </footer>
  );
}