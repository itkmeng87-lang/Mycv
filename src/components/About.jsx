import React from 'react';
import { motion } from 'framer-motion';
// Import your portrait image file here
import profileImg from '../assets/image.png'; 

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-4 py-24 border-t border-slate-900">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        
        {/* Left Column: Perfect Square Profile Image Wrapper */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5 flex justify-center"
        >
          <div className="relative w-full max-w-[360px] aspect-square rounded-[1.5rem] overflow-hidden border border-slate-800 bg-slate-900 group">
            {/* Ambient Backlight Glow effect to simulate the pink/blue backdrop */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
            
            <img 
              src={profileImg} 
              alt="Vun Khemra" 
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </motion.div>

        {/* Right Column: Clean Structural Typography Layout */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-7 space-y-5"
        >
          {/* Bold Minimalist Section Header */}
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white uppercase font-sans">
            About Me
          </h2>

          {/* Subheading Branding String */}
          <h3 className="text-sm font-mono tracking-widest uppercase text-cyan-400 font-bold">
            Vun Khemra — Web Developer
          </h3>

          {/* Refined Professional Description Scripts */}
          <div className="space-y-4 text-slate-400 leading-relaxed text-sm sm:text-base font-normal">
            <p>
              Hello! I am a passionate, detail-driven web developer committed to engineering smooth digital solutions. My approach combines clean, logical structural programming with pixel-perfect responsive layouts to create highly intuitive user interfaces.
            </p>
            <p>
              By bridging advanced modern design frameworks with organized core coding methodologies, I focus on building accessible platforms that achieve fast loading metrics and flawless real-world operations.
            </p>
          </div>

          {/* Core Trait Pill Nodes */}
          <div className="flex flex-wrap gap-2 pt-3">
            {['Clean Code Structure', 'Responsive Layouts', 'Logic Architecture'].map((trait) => (
              <span 
                key={trait} 
                className="text-[11px] font-mono font-semibold bg-slate-900 border border-slate-800 text-slate-300 px-4 py-1.5 rounded-full hover:border-cyan-500/30 hover:text-cyan-400 transition-colors duration-300"
              >
                {trait}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}