import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { pressItems, formatPressDate } from '../lib/press';

const LINKEDIN_URL = 'https://www.linkedin.com/in/carlota-l%C3%B3pez-carracedo-562ab1220/';

const AUTHOR_TOPICS = [
  { topic: 'Automatización e IA para pymes', title: 'Qué es la automatización con IA', href: '/blog/que-es-automatizacion-con-ia-pymes/' },
  { topic: 'Procesos', title: 'Cómo saber qué proceso automatizar primero', href: '/blog/como-saber-que-proceso-automatizar-primero/' },
  { topic: 'WhatsApp', title: 'WhatsApp Business App vs API', href: '/blog/whatsapp-business-app-vs-api-pymes/' },
  { topic: 'CRM y seguimiento', title: 'El CRM no falla: falla el proceso', href: '/blog/crm-no-falla-falla-el-proceso/' },
  { topic: 'Clínicas', title: 'Reducir ausencias con recordatorios automáticos', href: '/blog/reducir-ausencias-clinicas-recordatorios-automaticos/' },
  { topic: 'Herramientas', title: 'n8n vs Make para pymes', href: '/blog/n8n-vs-make-automatizacion-ia-pymes/' },
  { topic: 'Coste y retorno', title: 'Cuánto cuesta automatizar procesos en una pyme', href: '/blog/cuanto-cuesta-automatizar-procesos-pyme/' },
  { topic: 'Galicia', title: 'Automatización para empresas en Vigo', href: '/blog/automatizacion-empresas-vigo-pymes-servicios/' },
];

const SobreCarlota: React.FC = () => {
  return (
    <div className="relative min-h-[100svh]">
      <div className="hidden md:block fixed inset-0 grainy-overlay z-50 pointer-events-none" />
      <div className="fixed inset-0 mesh-gradient -z-10" />
      <Navbar />

      <main id="main-content" className="px-6 pt-36 pb-24">
        <article className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-[0.35em] uppercase text-cyber-purple mb-6">
            Fundadora de KAIRAS
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.95] mb-8">
            Carlota López Carracedo
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 font-light leading-relaxed max-w-3xl mb-12">
            Diseño sistemas de automatización e inteligencia artificial aplicada para que las pymes de servicios trabajen con más orden, menos carga manual y mayor continuidad comercial.
          </p>

          <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-8 mb-16">
            <section className="glass-card rounded-3xl p-8 border-white/10">
              <h2 className="text-2xl font-black uppercase tracking-tight mb-5">Cómo trabajo</h2>
              <div className="space-y-5 text-slate-300 font-light leading-relaxed">
                <p>
                  Trabajo con negocios de Galicia y del resto de España que necesitan convertir tareas, mensajes, datos y seguimientos dispersos en un sistema operativo claro.
                </p>
                <p>
                  El proceso empieza por entender el flujo real del negocio. Después se prioriza la automatización con más impacto, se definen controles humanos y se mide el resultado con indicadores comprensibles.
                </p>
                <p>
                  KAIRAS no parte de una herramienta concreta: parte del problema, de las personas que lo gestionan y del nivel de control que el negocio necesita conservar.
                </p>
              </div>
            </section>

            <aside className="glass-card rounded-3xl p-8 border-white/10">
              <h2 className="text-xl font-black uppercase tracking-tight mb-5">Áreas de trabajo</h2>
              <ul className="space-y-3 text-sm text-slate-300">
                <li>Automatización de procesos</li>
                <li>IA aplicada a pymes</li>
                <li>WhatsApp y atención</li>
                <li>CRM y seguimiento comercial</li>
                <li>Integración de herramientas</li>
                <li>Optimización operativa</li>
              </ul>
            </aside>
          </div>

          <section className="border-t border-white/10 pt-12 mb-16">
            <h2 className="text-3xl font-black uppercase tracking-tight mb-6">Autoría y apariciones</h2>
            <p className="text-slate-300 font-light leading-relaxed mb-7 max-w-3xl">
              Carlota es la autora y responsable editorial de los contenidos de KAIRAS sobre automatización, IA aplicada y operación de pymes. Puedes consultar las entrevistas y apariciones recopiladas en la página de prensa.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/prensa/" className="inline-flex items-center gap-2 rounded-xl bg-white text-black px-6 py-3 text-xs font-black uppercase tracking-wider">
                Ver prensa <ArrowRight className="w-4 h-4" />
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="me noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 text-xs font-black uppercase tracking-wider hover:border-cyber-purple/50 transition-colors">
                Perfil de LinkedIn <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </section>

          <section className="border-t border-white/10 pt-12 mb-16">
            <h2 className="text-3xl font-black uppercase tracking-tight mb-6">Apariciones en medios</h2>
            <ul className="space-y-4">
              {pressItems.map((item) => (
                <li key={item.id} className="glass-card rounded-2xl p-6 border-white/10">
                  <p className="text-xs font-bold uppercase tracking-widest text-cyber-purple mb-2">
                    {item.outlet} · {formatPressDate(item.date)}
                  </p>
                  {item.url ? (
                    <a href={item.url} target="_blank" rel="noopener" className="text-base font-bold hover:text-cyber-purple transition-colors">
                      {item.title}
                    </a>
                  ) : (
                    <a href="/prensa/" className="text-base font-bold hover:text-cyber-purple transition-colors">{item.title}</a>
                  )}
                </li>
              ))}
            </ul>
          </section>

          <section className="border-t border-white/10 pt-12 mb-16">
            <h2 className="text-3xl font-black uppercase tracking-tight mb-6">Principios de trabajo</h2>
            <ul className="space-y-4 text-slate-300 font-light leading-relaxed list-disc pl-5 max-w-3xl">
              <li><strong className="text-white font-bold">Primero el proceso, después la herramienta.</strong> Antes de elegir software se entiende cómo trabaja el equipo y dónde se pierde tiempo.</li>
              <li><strong className="text-white font-bold">Control humano en lo sensible.</strong> La automatización se encarga de lo repetitivo y estructurado; las decisiones delicadas siguen en manos de personas.</li>
              <li><strong className="text-white font-bold">IA solo donde aporta.</strong> Clasificar, resumir, extraer datos o redactar borradores; si una regla simple lo resuelve, no hace falta IA.</li>
              <li><strong className="text-white font-bold">Empezar pequeño y medir.</strong> Un primer flujo acotado, indicadores sencillos y decisiones con datos antes de ampliar.</li>
              <li><strong className="text-white font-bold">Sin humo.</strong> La IA no se presenta como sustituta de las personas ni como solución mágica.</li>
            </ul>
          </section>

          <section className="border-t border-white/10 pt-12 mb-16">
            <h2 className="text-3xl font-black uppercase tracking-tight mb-6">Sobre qué escribe Carlota</h2>
            <p className="text-slate-300 font-light leading-relaxed mb-8 max-w-3xl">
              Los artículos del blog de KAIRAS están escritos para dueños y responsables de pymes de servicios, no para perfiles técnicos. Estos son los temas principales y un artículo de referencia de cada uno:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {AUTHOR_TOPICS.map((topic) => (
                <a key={topic.href} href={topic.href} className="glass-card rounded-2xl p-6 border-white/10 hover:border-cyber-purple/50 hover:bg-white/5 transition-all">
                  <p className="text-xs font-bold uppercase tracking-widest text-cyber-purple mb-2">{topic.topic}</p>
                  <p className="text-sm font-bold">{topic.title}</p>
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm text-slate-400">
              Todos los artículos: <a href="/blog/" className="text-cyber-purple underline underline-offset-4 hover:text-white">blog de KAIRAS</a>.
            </p>
          </section>

          <section className="glass-card rounded-3xl p-8 sm:p-10 border-cyber-purple/20">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyber-purple mb-4">¿Tienes un proceso atascado?</p>
            <h2 className="text-3xl font-black uppercase tracking-tight mb-6">Cuéntame cómo funciona hoy.</h2>
            <a href="/contacto/" className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-wider hover:text-cyber-purple transition-colors">
              Solicitar diagnóstico <ArrowRight className="w-4 h-4" />
            </a>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default SobreCarlota;
