import React from 'react';
import { motion } from 'framer-motion';

export default function Projects({ currentLang }) {
  // ១. រៀបចំទិន្នន័យចំណងជើង និងគម្រោងនីមួយៗជា ២ ភាសា
  const translations = {
    EN: {
      sectionTitle: "Featured Projects",
      btnCode: "Codebase",
      btnLive: "Live View",
      projects: [
        {
          title: 'Nexus AI Dashboard',
          description: 'An advanced real-time interface built to monitor metrics and automated robot activities natively.',
          tags: ['React', 'Tailwind', 'Context API'],
        },
        {
          title: 'E-Commerce Storefront',
          description: 'A production modular online marketplace application emphasizing clean payment architecture layers.',
          tags: ['Next.js', 'TypeScript', 'Tailwind'],
        }
      ]
    },
    KH: {
      sectionTitle: "គម្រោងលេចធ្លោ",
      btnCode: "កូដប្រភព",
      btnLive: "មើលផ្ទាល់",
      projects: [
        {
          title: 'Admin Dashboard ',
          description: 'ផ្ទាំងគ្រប់គ្រងកម្រិតខ្ពស់ដំណើរការភ្លាមៗ (Real-time) សម្រាប់តាមដានទិន្នន័យ និងសកម្មភាពរ៉ូបូតស្វ័យប្រវត្តិ។',
          tags: ['React', 'Tailwind', 'Context API'],
        },
        {
          title: 'E-Commerce Storefront',
          description: 'កម្មវិធីហាងទំនិញអនឡាញលក្ខណៈម៉ូឌុលស្ដង់ដារ ដែលផ្ដោតសំខាន់លើប្រព័ន្ធទូទាត់ប្រាក់ប្រកបដោយសុវត្ថិភាព។',
          tags: ['Next.js', 'TypeScript', 'Tailwind'],
        }
      ]
    }
  };

  const content = translations[currentLang] || translations.EN;

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-24 border-t border-slate-900">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-3 mb-16"
      >
        {/* ប្តូរចំណងជើងធំតាមភាសា */}
        <h2 className="text-3xl font-bold tracking-tight text-white">
          {content.sectionTitle}
        </h2>
        <div className="w-12 h-1 bg-cyan-500 mx-auto rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {content.projects.map((project, index) => (
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
                <h3 className="text-xl  text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs  bg-slate-950 border border-slate-800 text-cyan-400/80 px-2 py-1 hover:text-cyan-200/80 rounded-xl">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* ប្តូរអក្សរលើប៊ូតុងទាំងពីរទៅតាមភាសា */}
              <div className="flex gap-4 pt-6 border-t border-slate-800/60 mt-6">
                <a href="https://null-byte404.vercel.app/" className="flex-1 text-center py-2 rounded-md border border-slate-800 bg-slate-950/50 hover:bg-slate-950 text-xs  text-slate-300 hover:text-cyan-400 transition duration-200">
                  {content.btnCode}
                </a>
                <a href="#" className="flex-1 text-center py-2 rounded-md bg-cyan-500 hover:bg-cyan-600 text-xs text-slate-950 transition duration-200">
                  {content.btnLive}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}