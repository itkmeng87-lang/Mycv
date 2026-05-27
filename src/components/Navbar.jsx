import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { title } from 'framer-motion/client';

// ១. ត្រូវប្តូរ Parameter ត្រង់នេះពី { currentLang, setLang } ទៅជា { currentLang, setCurrentLang }
export default function Navbar({ currentLang, setCurrentLang }) {
  const [isOpen, setIsOpen] = useState(false);

  // ទិន្នន័យ Menu ពីរភាសា

 

const menuTranslations = {
  EN: [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Services', id: 'services' },
    { name: 'Contact', id: 'contact' },

  ],
  KH: [
    { name: 'អំពីខ្ញុំ', id: 'about' },
    { name: 'ជំនាញ', id: 'skills' },
    { name: 'គម្រោង', id: 'projects' },
    { name: 'សេវាកម្ម', id: 'services' },
    { name: 'ទំនាក់ទំនង', id: 'contact' },
  ]
};

const navLinks = menuTranslations[currentLang];

return (
  <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-800/60">
    <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
      >
        Portfolio.
      </motion.span>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
        {navLinks.map((link, index) => (
          <motion.a
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            key={link.id}
            href={`#${link.id}`}
            className="text-slate-300 hover:text-cyan-400 transition-colors relative group py-2"
          >
            {link.name}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all group-hover:w-full" />
          </motion.a>
        ))}

        {/* ២. កែប្រែត្រង់នេះទៅជា setCurrentLang */}
        <button
          onClick={() => setCurrentLang(currentLang === 'EN' ? 'KH' : 'EN')}
          className="ml-2 border border-slate-800 bg-slate-900/50 px-3 py-1.5 rounded-xl text-xs font-mono font-bold text-cyan-400 hover:border-cyan-500/40 transition-colors flex items-center gap-1.5"
        >
          <span>{currentLang === 'EN' ? 'KH' : 'EN'}</span> 🌐
        </button>
      </div>

      {/* Mobile View */}
      <div className="flex items-center gap-4 md:hidden">
        {/* ៣. កែប្រែត្រង់នេះទៅជា setCurrentLang ដូចគ្នា */}
        <button
          onClick={() => setCurrentLang(currentLang === 'EN' ? 'KH' : 'EN')}
          className="border border-slate-800 bg-slate-900/50 px-2.5 py-1.5 rounded-xl text-xs font-mono font-bold text-cyan-400 flex items-center gap-1.5"
        >
          <span>{currentLang === 'EN' ? 'KH' : 'EN'}</span> 🌐
        </button>

        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-cyan-400 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
    </div>

    {/* Mobile Drawer */}
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-lg px-4 py-4 space-y-3"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setIsOpen(false)}
              className="block text-slate-300 hover:text-cyan-400 text-base font-medium py-2"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  </nav>
);
}