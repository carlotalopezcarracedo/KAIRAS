import React from 'react';

export type ServiceDepthContent = {
  /** Respuesta directa (40-60 palabras) a "¿qué es este servicio?". */
  definition: { question: string; answer: string };
  audience: { title: string; items: string[] };
  steps: { title: string; desc: string }[];
  includes: string[];
  limits: string[];
  faqs: { q: string; a: string }[];
  related: { title: string; href: string }[];
};

/**
 * Bloque de profundidad para páginas de servicio: definición citable, para quién es,
 * proceso por fases, qué incluye, límites y preguntas frecuentes. Todo es HTML
 * estático en el prerender, legible para buscadores y motores de IA.
 */
const ServiceDepth: React.FC<{ content: ServiceDepthContent }> = ({ content }) => {
  const { definition, audience, steps, includes, limits, faqs, related } = content;

  return (
    <>
      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tighter uppercase mb-5">{definition.question}</h2>
          <p className="text-lg text-slate-300 font-light leading-relaxed">{definition.answer}</p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="glass-card p-8 rounded-3xl border-white/10">
            <h2 className="text-lg font-black uppercase tracking-wider mb-4">{audience.title}</h2>
            <ul className="text-sm text-slate-400 leading-relaxed space-y-3 list-disc pl-5">
              {audience.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div className="glass-card p-8 rounded-3xl border-white/10">
            <h2 className="text-lg font-black uppercase tracking-wider mb-4">Qué incluye el trabajo</h2>
            <ul className="text-sm text-slate-400 leading-relaxed space-y-3 list-disc pl-5">
              {includes.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 bg-black/20 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tighter uppercase mb-10">Cómo se trabaja, paso a paso</h2>
          <ol className="grid md:grid-cols-2 gap-6">
            {steps.map((step, i) => (
              <li key={step.title} className="glass-card p-8 rounded-3xl border-white/10">
                <p className="text-xs font-bold tracking-[0.3em] uppercase text-cyber-purple mb-3">Paso {i + 1}</p>
                <h3 className="text-base font-bold uppercase tracking-wider mb-3">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tighter uppercase mb-5">Lo que no hacemos</h2>
          <ul className="text-base text-slate-400 leading-relaxed space-y-3 list-disc pl-5">
            {limits.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tighter uppercase mb-8">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="glass-card p-6 rounded-2xl border-white/10">
                <h3 className="text-base font-bold mb-2">{faq.q}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-lg font-black uppercase tracking-wider mb-6">Relacionado</h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {related.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="glass-card block p-5 rounded-2xl border-white/10 text-sm font-bold hover:border-cyber-purple/50 hover:bg-white/5 transition-all">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default ServiceDepth;
