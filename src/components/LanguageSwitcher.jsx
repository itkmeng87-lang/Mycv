import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function LanguageSwitcher({ onLanguageChange }) {
  const [currentLang, setCurrentLang] = useState('EN'); // EN ជាភាសាលំនាំដើម

  const toggleLanguage = () => {
    const nextLang = currentLang === 'EN' ? 'KH' : 'EN';
    setCurrentLang(nextLang);
    if (onLanguageChange) {
      onLanguageChange(nextLang); // បញ្ជូនភាសាដែលបានប្តូរទៅ Component ធំ
    }
  };

  return (
    <div className="flex items-center gap-2">
      {/* ប៊ូតុងប្តូរភាសាស្ទីល Minimalist Glassmorphism */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={toggleLanguage}
        className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-md hover:border-cyan-500/40 text-xs font-mono font-bold tracking-wider text-slate-300 hover:text-cyan-400 transition-colors duration-300"
      >
        {/* រូបលោកិយ (Global Icon SVG) */}
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

        {/* បង្ហាញអក្សរ EN ឬ KH */}
        <span>{currentLang === 'EN' ? 'EN' : 'KH'}</span>

        {/* គ្រាប់ចុចមូលតូចប្រាប់ស្ថានភាព */}
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
      </motion.button>
    </div>
  );
}