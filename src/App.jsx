import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  // បង្កើត State សម្រាប់គ្រប់គ្រងភាសាទូទាំង Website (លំនាំដើមគឺ 'EN')
  const [currentLang, setCurrentLang] = useState('EN');

  return (
    <div className={`bg-slate-950 text-slate-100 min-h-screen antialiased selection:bg-cyan-500/30 selection:text-cyan-200 scroll-smooth transition-all duration-300 ${
  currentLang === 'KH' ? 'font-khmer' : ''
}`}>
      {/* Background Neon Gradients */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[150px]" />
      </div>

      <div className="relative z-10">
        {/* បោះ currentLang និង setCurrentLang ទៅឱ្យ Navbar ដើម្បីចុចប្តូរភាសា */}
        <Navbar currentLang={currentLang} setCurrentLang={setCurrentLang} />
        
        <main>
          {/* បោះ currentLang ទៅឱ្យរាល់ Sections ទាំងអស់ដើម្បីដូរទិន្នន័យអក្សរ */}
          <Hero currentLang={currentLang} />
          <About currentLang={currentLang} />
          <Skills currentLang={currentLang} />
          <Projects currentLang={currentLang} />
          <Services currentLang={currentLang} />
          <Contact currentLang={currentLang} />
        </main>
        
        <footer className="relative z-10">
          <Footer currentLang={currentLang} />
        </footer>
        <ScrollToTop currentLang={currentLang} />
      </div>
    </div>
  );
}