import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CONTACT_EMAIL = 'carlota.kairas@gmail.com';

const POSTS = [
  {
    slug: '/blog/por-que-las-pymes-pierden-clientes-antes-de-firmar/',
    title: 'Por que las pymes pierden clientes antes de firmar',
    date: '2026-04-28',
    dateLabel: '28 abril 2026',
    desc: 'Fugas comerciales reales en pymes de servicios y como cerrar el tramo entre primer contacto y firma.',
    tags: ['Leads', 'CRM', 'Seguimiento'],
  },
  {
    slug: '/blog/dejar-de-gestionar-whatsapp-empresa-a-mano/',
    title: 'Como dejar de gestionar el WhatsApp de empresa a mano',
    date: '2026-04-28',
    dateLabel: '28 abril 2026',
    desc: 'Estructura minima para responder antes, filtrar mejor y seguir conversaciones sin saturar al equipo.',
    tags: ['WhatsApp', 'Atencion', 'Proceso'],
  },
  {
    slug: '/blog/como-saber-que-proceso-automatizar-primero/',
    title: 'Como saber que proceso automatizar primero en tu empresa',
    date: '2026-04-28',
    dateLabel: '28 abril 2026',
    desc: 'Metodo practico para priorizar automatizaciones por impacto real y facilidad de implantacion.',
    tags: ['Procesos', 'Priorizacion', 'Operativa'],
  },
  {
    slug: '/blog/reducir-ausencias-clinicas-recordatorios-automaticos/',
    title: 'Como reducir ausencias en clinicas con recordatorios automaticos',
    date: '2026-04-28',
    dateLabel: '28 abril 2026',
    desc: 'Como bajar ausencias con confirmaciones y recordatorios en el canal correcto, sin mas carga manual.',
    tags: ['Clinicas', 'Recordatorios', 'Agenda'],
  },
  {
    slug: '/blog/automatizaciones-que-recuperan-tiempo-pymes/',
    title: 'Las automatizaciones que mas tiempo recuperan en una pyme de servicios',
    date: '2026-04-28',
    dateLabel: '28 abril 2026',
    desc: 'Hay tareas que se repiten cada semana y consumen horas sin aportar valor nuevo. Estas son las mas rentables para empezar.',
    tags: ['Automatizacion', 'Pymes', 'Productividad'],
  },
];

const Blog: React.FC = () => {
  return (
    <div className="relative min-h-[100svh]">
      <div className="hidden md:block fixed inset-0 grainy-overlay z-50 pointer-events-none" />
      <div className="fixed inset-0 mesh-gradient -z-10" />
      <Navbar />

      <main id="main-content">
        <section className="min-h-[60vh] px-6 pt-32 pb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyber-purple/10 blur-[130px] -z-10 rounded-full" />
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-cyber-purple mb-6">KAIRAS</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
              Blog
            </h1>
            <p className="text-xl text-slate-400 font-light max-w-2xl leading-relaxed">
              Ideas y recursos sobre automatizacion e IA para pymes de servicios. Sin relleno.
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col gap-6">
              {POSTS.map((post) => (
                <a
                  key={post.slug}
                  href={post.slug}
                  className="glass-card p-8 rounded-3xl border-white/10 hover:border-cyber-purple/30 hover:bg-white/5 transition-all group"
                >
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-cyber-purple bg-cyber-purple/10 border border-cyber-purple/20 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter leading-tight mb-3 group-hover:text-cyber-purple transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{post.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-600 font-mono">{post.dateLabel}</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-cyber-purple flex items-center gap-2 group-hover:gap-3 transition-all">
                      Leer <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <div className="fixed bottom-6 right-6 z-[110]">
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="w-16 h-16 bg-white text-black rounded-full shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center active:scale-95 transition-all"
          aria-label="Enviar email"
        >
          <MessageCircle size={28} />
        </a>
      </div>
    </div>
  );
};

export default Blog;