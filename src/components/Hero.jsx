import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import profilecv from '../assets/profileCV.jpg';

export default function Hero() {
  const nameText = "Vun Khemra";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const typingSpeed = 150; 
  const deletingSpeed = 75; 

  useEffect(() => {
    let ticker = setTimeout(() => {
      handleTyping();
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(ticker);
  }, [displayText, isDeleting]);
  const handleTyping = () => {
    const fullText = nameText;
    
    if (!isDeleting) {
      setDisplayText(fullText.substring(0, displayText.length + 1));
      if (displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2500);
      }
    } else {
      setDisplayText(fullText.substring(0, displayText.length - 1));
      
      if (displayText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-4 pt-20 pb-24 md:py-32 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 space-y-6 text-center md:text-left"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-mono tracking-wider">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          WELCOME TO MY PORTFOLIO
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white min-h-[48px] sm:min-h-[60px] md:min-h-[72px]">
          Dear, I am{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 inline-flex select-none">
            {displayText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
              className="text-cyan-400 ml-1 font-normal"
            >
              |
            </motion.span>
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">
          A dynamic web developer dedicated to bridging the gap between clean code architectural systems and high-converting, scalable digital platforms.
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
          <a href="#contact" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold rounded-lg shadow-lg shadow-cyan-500/20 transition-all duration-200 transform hover:-translate-y-0.5">
            Get In Touch
          </a>
          <a href="#" className="px-6 py-3 border border-slate-700 hover:border-cyan-500/50 bg-slate-900/40 text-slate-300 hover:text-cyan-400 rounded-lg transition-all duration-200 transform hover:-translate-y-0.5 backdrop-blur-sm">
            Download CV
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex-1 flex justify-center"
      >
        <div className="relative group">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 opacity-30 blur-xl group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
          
          <div className="relative w-64 sm:w-72 aspect-[3/4] rounded-2xl bg-slate-900 border border-slate-800/80 overflow-hidden flex items-center justify-center">
            <img 
              className="w-full h-full object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-500" 
              src={profilecv} 
              alt="Vun Khemra" 
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}