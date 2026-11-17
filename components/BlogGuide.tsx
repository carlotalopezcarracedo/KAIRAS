import React from 'react';
import BlogPostLayout from './BlogPostLayout';
import GuideMarkdown, { guideHeadings } from './GuideMarkdown';
import type { BlogGuideData } from '../lib/guideTypes';

const MONTHS = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

const formatDate = (iso: string) => {
  const [y, m, d] = iso.slice(0, 10).split('-').map(Number);
  return `${d} de ${MONTHS[m - 1]} de ${y}`;
};

const BlogGuide: React.FC<{ guide: BlogGuideData }> = ({ guide }) => {
  const headings = guideHeadings(guide.body);

  return (
    <BlogPostLayout
      tags={guide.tags}
      title={guide.title}
      dateLabel={`Actualizado el ${formatDate(guide.updated)}`}
      readTime=""
      ctaEyebrow={guide.ctaEyebrow}
      ctaLabel={guide.ctaLabel}
      relatedResources={guide.related}
    >
      <div className="border border-cyber-purple/30 bg-white/[0.03] rounded-2xl p-6">
        <p className="text-xs font-bold uppercase tracking-widest text-cyber-purple mb-3">Respuesta corta</p>
        <p className="text-lg text-slate-200 leading-relaxed">{guide.answer}</p>
      </div>

      {headings.length > 2 && (
        <nav aria-label="Índice de la guía" className="text-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">En esta guía</p>
          <ol className="space-y-1 pl-5 list-decimal marker:text-cyber-purple">
            {headings.map((h) => (
              <li key={h.id}>
                <a href={`#${h.id}`} className="text-slate-300 hover:text-cyber-purple">{h.text}</a>
              </li>
            ))}
            {guide.faq.length > 0 && (
              <li><a href="#preguntas-frecuentes" className="text-slate-300 hover:text-cyber-purple">Preguntas frecuentes</a></li>
            )}
          </ol>
        </nav>
      )}

      <GuideMarkdown source={guide.body} />

      {guide.faq.length > 0 && (
        <section aria-labelledby="preguntas-frecuentes" className="space-y-6">
          <h2 id="preguntas-frecuentes" className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4 scroll-mt-28">
            Preguntas frecuentes
          </h2>
          {guide.faq.map((item) => (
            <div key={item.q}>
              <h3 className="text-lg font-bold text-white mb-2">{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </section>
      )}
    </BlogPostLayout>
  );
};

export default BlogGuide;
