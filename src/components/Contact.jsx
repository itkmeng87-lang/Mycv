import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', msg: '' });

  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-24 border-t border-slate-900">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-3 mb-16"
      >
        <h2 className="text-3xl font-bold tracking-tight text-white">Get In Touch</h2>
        <div className="w-12 h-1 bg-cyan-500 mx-auto rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 max-w-4xl mx-auto items-start">
        <div className="md:col-span-5 space-y-6">
          <div className="p-5 rounded-xl border border-slate-800/60 bg-slate-900/20 backdrop-blur-sm">
            <h4 className="text-slate-500 font-mono text-xs uppercase tracking-wider mb-1">Direct Channels</h4>
            <p className="text-white font-medium text-sm">hello@rivers.dev</p>
            <p className="text-slate-400 text-xs mt-1">+1 (555) 019-2834</p>
          </div>
          <div className="p-5 rounded-xl border border-slate-800/60 bg-slate-900/20 backdrop-blur-sm">
            <h4 className="text-slate-500 font-mono text-xs uppercase tracking-wider mb-2">Connect Externally</h4>
            <div className="flex gap-4 text-xs font-mono text-cyan-400">
              <a href="#" className="hover:underline">GitHub</a>
              <a href="#" className="hover:underline">LinkedIn</a>
              <a href="#" className="hover:underline">Twitter</a>
            </div>
          </div>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="md:col-span-7 space-y-4 p-6 rounded-xl border border-slate-800/80 bg-slate-900/30 backdrop-blur-md">
          <div>
            <label className="block font-mono text-[11px] uppercase tracking-wider text-slate-400 mb-1">Identity</label>
            <input type="text" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} required className="w-full bg-slate-950 border border-slate-800/80 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-cyan-500 transition text-sm" placeholder="John Doe" />
          </div>
          <div>
            <label className="block font-mono text-[11px] uppercase tracking-wider text-slate-400 mb-1">Email Endpoint</label>
            <input type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} required className="w-full bg-slate-950 border border-slate-800/80 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-cyan-500 transition text-sm" placeholder="john@example.com" />
          </div>
          <div>
            <label className="block font-mono text-[11px] uppercase tracking-wider text-slate-400 mb-1">Project Scope</label>
            <textarea rows="4" value={form.msg} onChange={(e) => setForm({...form, msg: e.target.value})} required className="w-full bg-slate-950 border border-slate-800/80 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-cyan-500 transition text-sm resize-none" placeholder="Describe the deployment guidelines..." />
          </div>
          <button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold py-2.5 rounded-lg text-sm tracking-wide transition duration-150">
            Transmit Message
          </button>
        </form>
      </div>
    </section>
  );
}