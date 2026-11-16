import React from 'react';
import { homeFaq } from '../lib/homeFaq';

const HomeFAQ: React.FC = () => (
  <section id="preguntas-frecuentes" className="py-24 px-6" aria-labelledby="home-faq-title">
    <div className="max-w-3xl mx-auto">
      <span className="text-cyber-purple font-mono text-xs tracking-[0.5em] uppercase mb-6 block">FAQ</span>
      <h2 id="home-faq-title" className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-12 leading-tight">
        Preguntas frecuentes
      </h2>
      <div className="space-y-4">
        {homeFaq.map((item) => (
          <details key={item.q} className="glass-card group rounded-2xl border-white/10 p-6 open:bg-white/5">
            <summary className="cursor-pointer list-none text-base font-bold flex items-start justify-between gap-4">
              <h3 className="text-base font-bold">{item.q}</h3>
              <span aria-hidden="true" className="text-cyber-purple transition-transform group-open:rotate-45 text-xl leading-none">+</span>
            </summary>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default HomeFAQ;
