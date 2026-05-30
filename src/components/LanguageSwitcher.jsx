import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function LanguageSwitcher({ onLanguageChange }) {
  const [currentLang, setCurrentLang] = useState('EN'); 

  const toggleLanguage = () => {
    const nextLang = currentLang === 'EN' ? 'KH' : 'EN';
    setCurrentLang(nextLang);
    if (onLanguageChange) {
      onLanguageChange(nextLang); 
    }
  };
  return (
    <div className="flex items-center gap-2">
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={toggleLanguage}
        className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-md hover:border-cyan-500/40 text-xs font-mono font-bold tracking-wider text-slate-300 hover:text-cyan-400 transition-colors duration-300"
      >
        <svg 
          className="w-3.5 h-3.5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.5 3a17 17 0 000 18M12.5 3a17 17 0 000 18" />
        </svg>
        <span>{currentLang === 'EN' ? 'EN' : 'KH'}</span>
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
      </motion.button>
    </div>
  );
}