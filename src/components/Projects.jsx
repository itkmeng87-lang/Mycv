import React from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  const localProjects = [
    {
      title: ' Managents Dashboard',
      description: 'An advanced real-time interface built to monitor metrics and automated robot activities natively.',
      tags: ['React', 'Tailwind', 'Context API'],
    },
    {
      title: 'E-Commerce Storefront',
      description: 'A production modular online marketplace application emphasizing clean payment architecture layers.',
      tags: ['Next.js', 'TypeScript', 'Tailwind'],
    }
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-24 border-t border-slate-900">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-3 mb-16"
      >
        <h2 className="text-3xl font-bold tracking-tight text-white">Featured Projects</h2>
        <div className="w-12 h-1 bg-cyan-500 mx-auto rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {localProjects.map((project, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            key={project.title}
            className="group relative rounded-xl border border-slate-800/80 bg-slate-900/40 overflow-hidden backdrop-blur-md flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300"
          >
            {/* Graphic/Image Placeholder */}
            <div className="h-48 bg-slate-950 flex items-center justify-center border-b border-slate-900 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent z-10 opacity-60" />
              <span className="text-xs font-mono text-slate-600 group-hover:text-cyan-400/60 transition-colors z-20">[ PROJECT MEDIA ]</span>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono bg-slate-950 border border-slate-800 text-cyan-400/80 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-6 border-t border-slate-800/60 mt-6">
                <a href="#" className="flex-1 text-center py-2 rounded-md border border-slate-800 bg-slate-950/50 hover:bg-slate-950 text-xs font-semibold text-slate-300 hover:text-cyan-400 transition duration-200">
                  Codebase
                </a>
                <a href="#" className="flex-1 text-center py-2 rounded-md bg-cyan-500 hover:bg-cyan-600 text-xs font-bold text-slate-950 transition duration-200">
                  Live View
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}