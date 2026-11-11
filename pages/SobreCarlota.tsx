import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LINKEDIN_URL = 'https://www.linkedin.com/in/carlota-l%C3%B3pez-carracedo-562ab1220/';

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
