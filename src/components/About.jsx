import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/image.png';
import { BiFontSize } from 'react-icons/bi';

export default function About({ currentLang }) {
  const translations = {
    EN: {
      title: "About Me",
      subtitle: "Vun Khemra — Web Developer",
      p1: "Hello! I am a passionate, detail-driven web developer committed to engineering smooth digital solutions. My approach combines clean, logical structural programming with pixel-perfect responsive layouts to create highly intuitive user interfaces.",
      // p2: "By bridging advanced modern design frameworks with organized core coding methodologies, I focus on building accessible platforms that achieve fast loading metrics and flawless real-world operations.",
      traits: ['Clean Code Structure', 'Responsive Layouts', 'Logic Architecture']
    },
    KH: {
      title: "អំពីខ្ញុំ",
      subtitle: "វុន ខេមរ៉ា — អ្នកអភិវឌ្ឍន៍គេហទំព័រ",
      p1: "សួស្តី! ខ្ញុំបាទគឺជាអ្នកអភិវឌ្ឍន៍គេហទំព័រម្នាក់ ដែលមានចំណាយពេល និងយកចិត្តទុកដាក់ខ្ពស់ក្នុងការបង្កើតដំណោះស្រាយឌីជីថលដ៏រលូន។ ការងាររបស់ខ្ញុំផ្តោតលើការសរសេរកូដដែលមានរចនាសម្ព័ន្ធច្បាស់លាស់ ផ្សារភ្ជាប់ជាមួយទម្រង់ Responsive ដ៏ឥតខ្ចោះ ដើម្បីបង្កើតផ្ទាំងកម្មវិធី (UI) ដែលងាយស្រួលប្រើប្រាស់។",
      // p2: "តាមរយៈការរួមបញ្ចូលគ្នារវាង Framework ទំនើបៗ និងវិធីសាស្ត្រកូដស្ដង់ដារ ខ្ញុំផ្តោតសំខាន់លើការបង្កើតគេហទំព័រដែលដំណើរការបានលឿន រហ័ស និងមានប្រសិទ្ធភាពខ្ពស់ក្នុងការប្រើប្រាស់ជាក់ស្តែង។",
      traits: ['រចនាសម្ព័ន្ធកូដស្អាត', 'ប្លង់ Responsive ឥតខ្ចោះ', 'កូដមាន Logic ច្បាស់លាស់']
    }
  };

  const content = translations[currentLang] || translations.EN;
  return (
    <section id="about" className="max-w-5xl mx-auto px-4 py-10 border-t border-slate-900">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -13 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5 flex justify-center w-full px-4 md:px-0"
        >
          <div className="relative w-50 max-w-[280px] sm:max-w-[320px] md:max-w-[360px] aspect-square rounded-[1.5rem] overflow-hidden border border-slate-800 bg-slate-900 group">
            {/* Ambient Backlight Glow effect to simulate the pink/blue backdrop */}
            <div className="absolute  inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
            <img
              src={profileImg}
              alt="Vun Khemra"
              className="w-full h-full  object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 13 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-7 space-y-5"
        >
          <h2 className="text-xl text-center sm:text-xl  tracking-tight text-white uppercase">
            {content.title}
          </h2>
          <div className="w-12 h-1 m-auto mb-5 bg-cyan-500  rounded-full" />

          <h3 className="text-sm ​ text-center tracking-widest uppercase text-cyan-400 ">
            {content.subtitle}
          </h3>

          <div className="space-y-4  border-l-4 border-cyan-500 pl-4 rounded-l-xl text-slate-400 text-left  leading-relaxed relative px-6 py-3 font-normal">
            <p className='text-[10px]'>
              {content.p1}
            </p>
            <p>
              {content.p2}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
  {/* <div className="flex flex-wrap gap-2 pt-3">
    {content.traits.map((trait) => (
      <span
        key={trait}
        className="text-[11px]  bg-slate-900 border border-slate-800 text-slate-300 px-4 py-1.5 rounded-full hover:border-cyan-500/30 hover:text-cyan-400 transition-colors duration-300"
      >
        {trait}
      </span>
    ))}
  </div> */}
}