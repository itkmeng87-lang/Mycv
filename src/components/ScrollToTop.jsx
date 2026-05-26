import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // 1. ចាប់ផ្តើមស្តាប់រាល់ពេលអ្នកប្រើប្រាស់ Scroll អេក្រង់
  useEffect(() => {
    const toggleVisibility = () => {
      // ប្រសិនបើអូសចុះក្រោមលើសពី 400px ឱ្យប៊ូតុងបង្ហាញខ្លួន
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    
    // សម្អាត Event ពេល component ត្រូវឈប់ប្រើ
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // 2. Function សម្រាប់រុញអេក្រង់ទៅខាងលើវិញយឺតៗ (Smooth Scroll)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-6 md:right-8 z-50 flex items-center justify-center w-12 h-12 rounded-full border border-cyan-500/40 bg-slate-950/60 backdrop-blur-md text-cyan-400 shadow-lg shadow-cyan-500/10 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-400 transition-colors duration-300 group"
          aria-label="Scroll to top"
        >
          {/* រូបព្រួញចង្អុលឡើងលើ (SVG) រត់ឡើងលើបន្តិចពេល Hover */}
          <svg
            className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}