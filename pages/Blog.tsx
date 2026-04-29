import React, { useMemo, useState } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CONTACT_EMAIL = 'carlota.kairas@gmail.com';

type BlogCategoryId = 'crm' | 'whatsapp' | 'procesos' | 'clinicas';

type BlogCategory = {
  id: BlogCategoryId;
  label: string;
  shortLabel: string;
  desc: string;
  serviceUrl: string;
};

type BlogPost = {
  slug: string;
  title: string;
  date: string;
  dateLabel: string;
  desc: string;
  tags: string[];
  category: BlogCategoryId;
};

const CATEGORIES: BlogCategory[] = [
  {
    id: 'crm',
    label: 'CRM y seguimiento de clientes',
    shortLabel: 'CRM y seguimiento',
    desc: 'Para negocios que pierden oportunidades por falta de continuidad comercial.',
    serviceUrl: '/crm-pymes-seguimiento-clientes/',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp y atencion automatizada',
    shortLabel: 'WhatsApp',
    desc: 'Para equipos que responden tarde o gestionan mensajes sin estructura.',
    serviceUrl: '/automatizacion-whatsapp-empresas/',
  },
  {
    id: 'procesos',
    label: 'Automatizacion de procesos',
    shortLabel: 'Procesos',
    desc: 'Para pymes con tareas repetitivas, cuellos de botella y operativa manual.',
    serviceUrl: '/automatizacion-procesos/',
  },
  {
    id: 'clinicas',
    label: 'Automatizacion para clinicas',
    shortLabel: 'Clinicas',
    desc: 'Para clinicas que quieren reducir ausencias y ordenar agenda y seguimiento.',
    serviceUrl: '/automatizacion-clinicas/',
  },
];

const POSTS = [
  {
    slug: '/blog/por-que-las-pymes-pierden-clientes-antes-de-firmar/',
    title: 'Por que las pymes pierden clientes antes de firmar',
    date: '2026-04-28',
    dateLabel: '28 abril 2026',
    desc: 'Fugas comerciales reales en pymes de servicios y como cerrar el tramo entre primer contacto y firma.',
    tags: ['Leads', 'CRM', 'Seguimiento'],
    category: 'crm',
  },
  {
    slug: '/blog/dejar-de-gestionar-whatsapp-empresa-a-mano/',
    title: 'Como dejar de gestionar el WhatsApp de empresa a mano',
    date: '2026-04-28',
    dateLabel: '28 abril 2026',
    desc: 'Estructura minima para responder antes, filtrar mejor y seguir conversaciones sin saturar al equipo.',
    tags: ['WhatsApp', 'Atencion', 'Proceso'],
    category: 'whatsapp',
  },
  {
    slug: '/blog/como-saber-que-proceso-automatizar-primero/',
    title: 'Como saber que proceso automatizar primero en tu empresa',
    date: '2026-04-28',
    dateLabel: '28 abril 2026',
    desc: 'Metodo practico para priorizar automatizaciones por impacto real y facilidad de implantacion.',
    tags: ['Procesos', 'Priorizacion', 'Operativa'],
    category: 'procesos',
  },
  {
    slug: '/blog/reducir-ausencias-clinicas-recordatorios-automaticos/',
    title: 'Como reducir ausencias en clinicas con recordatorios automaticos',
    date: '2026-04-28',
    dateLabel: '28 abril 2026',
    desc: 'Como bajar ausencias con confirmaciones y recordatorios en el canal correcto, sin mas carga manual.',
    tags: ['Clinicas', 'Recordatorios', 'Agenda'],
    category: 'clinicas',
  },
  {
    slug: '/blog/automatizaciones-que-recuperan-tiempo-pymes/',
    title: 'Las automatizaciones que mas tiempo recuperan en una pyme de servicios',
    date: '2026-04-28',
    dateLabel: '28 abril 2026',
    desc: 'Hay tareas que se repiten cada semana y consumen horas sin aportar valor nuevo. Estas son las mas rentables para empezar.',
    tags: ['Automatizacion', 'Pymes', 'Productividad'],
    category: 'procesos',
  },
  {
    slug: '/blog/tareas-manuales-que-frenan-tu-negocio/',
    title: 'Que tareas manuales estan frenando tu negocio cada semana',
    date: '2026-04-29',
    dateLabel: '29 abril 2026',
    desc: 'Identifica las tareas que mas tiempo consumen en tu negocio y por que son las primeras que deberias automatizar.',
    tags: ['Procesos', 'Operativa', 'Automatizacion'],
    category: 'procesos',
  },
  {
    slug: '/blog/seguimiento-leads-pymes-cuando-insistir/',
    title: 'Seguimiento de leads en pymes: cuando insistir y cuando parar',
    date: '2026-04-29',
    dateLabel: '29 abril 2026',
    desc: 'La mayoria de negocios pierde ventas por seguimiento irregular. Aprende cuando tiene sentido insistir y cuando un lead ya no va a convertir.',
    tags: ['Leads', 'CRM', 'Ventas'],
    category: 'crm',
  },
  {
    slug: '/blog/whatsapp-business-app-vs-api-pymes/',
    title: 'WhatsApp Business App vs API: que necesita tu pyme',
    date: '2026-04-29',
    dateLabel: '29 abril 2026',
    desc: 'Las diferencias reales entre la app gratuita y la API de WhatsApp, y cuando tiene sentido dar el salto para tu negocio.',
    tags: ['WhatsApp', 'API', 'Herramientas'],
    category: 'whatsapp',
  },
  {
    slug: '/blog/reactivar-leads-frios-sin-perseguir/',
    title: 'Como reactivar leads frios sin perseguir a nadie',
    date: '2026-04-29',
    dateLabel: '29 abril 2026',
    desc: 'La mayoria de negocios tiene leads inactivos sin explotar. Como recuperarlos con un sistema que no agobie al lead ni a tu equipo.',
    tags: ['Leads', 'Reactivacion', 'CRM'],
    category: 'crm',
  },
  {
    slug: '/blog/confirmacion-citas-whatsapp-clinicas/',
    title: 'Confirmacion de citas por WhatsApp en clinicas: sin depender del telefono',
    date: '2026-04-29',
    dateLabel: '29 abril 2026',
    desc: 'La confirmacion manual de citas depende de que alguien tenga tiempo. Como automatizarla con WhatsApp sin perder el trato cercano con el paciente.',
    tags: ['Clinicas', 'WhatsApp', 'Automatizacion'],
    category: 'clinicas',
  },
  {
    slug: '/blog/crm-no-falla-falla-el-proceso/',
    title: 'Tu CRM no falla: falla el proceso que hay detras',
    date: '2026-04-29',
    dateLabel: '29 abril 2026',
    desc: 'Cambiar de CRM no soluciona los leads perdidos. El problema suele ser el proceso que hay detras, no la herramienta.',
    tags: ['CRM', 'Procesos', 'Operativa'],
    category: 'crm',
  },
  {
    slug: '/blog/herramientas-desconectadas-equipo-va-tarde/',
    title: 'Herramientas desconectadas: por que tu equipo siempre va tarde',
    date: '2026-04-29',
    dateLabel: '29 abril 2026',
    desc: 'Cuando las herramientas no se hablan entre si, el equipo pierde tiempo copiando datos y toma decisiones con informacion desactualizada.',
    tags: ['Operativa', 'Herramientas', 'Procesos'],
    category: 'procesos',
  },
  {
    slug: '/blog/todo-depende-de-una-sola-persona/',
    title: 'Cuando todo depende de una sola persona',
    date: '2026-04-29',
    dateLabel: '29 abril 2026',
    desc: 'La dependencia de una sola persona es uno de los cuellos de botella mas habituales en pymes de servicios. Como identificarlo y empezar a resolverlo.',
    tags: ['Operativa', 'Procesos', 'Organizacion'],
    category: 'procesos',
  },
] as BlogPost[];

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'todos' | BlogCategoryId>('todos');

  const postsByCategory = useMemo(
    () =>
      CATEGORIES.reduce(
        (acc, category) => {
          acc[category.id] = POSTS.filter((post) => post.category === category.id).length;
          return acc;
        },
        {} as Record<BlogCategoryId, number>
      ),
    []
  );

  const visiblePosts = useMemo(
    () => (activeCategory === 'todos' ? POSTS : POSTS.filter((post) => post.category === activeCategory)),
    [activeCategory]
  );

  const activeCategoryLabel = activeCategory === 'todos'
    ? 'Todos los contenidos'
    : CATEGORIES.find((category) => category.id === activeCategory)?.label ?? 'Contenidos';

  return (
    <div className="relative min-h-[100svh]">
      <div className="hidden md:block fixed inset-0 grainy-overlay z-50 pointer-events-none" />
      <div className="fixed inset-0 mesh-gradient -z-10" />
      <Navbar />

      <main id="main-content">
        <section className="min-h-[60vh] px-6 pt-32 pb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyber-purple/10 blur-[130px] -z-10 rounded-full" />
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-cyber-purple mb-6">Recursos KAIRAS</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
              Contenido para pymes que quieren dejar de operar a mano
            </h1>
            <p className="text-xl text-slate-300 font-light max-w-4xl leading-relaxed">
              Si tu negocio pierde leads, responde tarde por WhatsApp o vive atascado en tareas repetitivas,
              aqui tienes guias concretas para recuperar tiempo y ordenar procesos con criterio.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="/servicios/"
                className="inline-flex items-center justify-center bg-white text-black px-8 py-4 rounded-xl text-xs font-black uppercase tracking-[0.22em] hover:shadow-[0_0_28px_rgba(255,255,255,0.3)] transition-all"
              >
                Ver servicios
              </a>
              <a
                href="/contacto/"
                className="glass-card inline-flex items-center justify-center px-8 py-4 rounded-xl text-xs font-black uppercase tracking-[0.22em] border-white/15 hover:border-cyber-purple/40 hover:bg-white/5 transition-all"
              >
                Quiero priorizar mi caso
              </a>
            </div>
          </div>
        </section>

        <section className="px-6 pb-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {CATEGORIES.map((category) => (
                <a
                  key={category.id}
                  href={category.serviceUrl}
                  className="glass-card p-5 rounded-2xl border-white/10 hover:border-cyber-purple/35 hover:bg-white/5 transition-all group"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-cyber-purple mb-3">
                    Cluster
                  </p>
                  <h2 className="text-sm font-black uppercase tracking-wide leading-tight mb-3 group-hover:text-cyber-purple transition-colors">
                    {category.shortLabel}
                  </h2>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">{category.desc}</p>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest">
                    {postsByCategory[category.id]} {postsByCategory[category.id] === 1 ? 'post' : 'posts'} publicados
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-6">
          <div className="max-w-5xl mx-auto">
            <div className="glass-card rounded-2xl p-4 border-white/10">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-500 mb-3">
                Filtrar por tema
              </p>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setActiveCategory('todos')}
                  className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] border transition-all ${
                    activeCategory === 'todos'
                      ? 'text-black bg-white border-white'
                      : 'text-slate-300 border-white/15 hover:border-cyber-purple/40 hover:text-white'
                  }`}
                >
                  Todos
                </button>
                {CATEGORIES.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] border transition-all ${
                      activeCategory === category.id
                        ? 'text-black bg-white border-white'
                        : 'text-slate-300 border-white/15 hover:border-cyber-purple/40 hover:text-white'
                    }`}
                  >
                    {category.shortLabel}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between gap-4 mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-500">{activeCategoryLabel}</p>
              <p className="text-xs text-slate-500">{visiblePosts.length} resultados</p>
            </div>
            <div className="flex flex-col gap-6">
              {visiblePosts.map((post) => (
                <a
                  key={post.slug}
                  href={post.slug}
                  className="glass-card p-8 rounded-3xl border-white/10 hover:border-cyber-purple/30 hover:bg-white/5 transition-all group relative overflow-hidden"
                >
                  <div className="absolute -top-16 -right-12 w-44 h-44 bg-cyber-purple/10 blur-[70px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
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
