import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PressSection from '../components/PressSection';

const Prensa: React.FC = () => {
  return (
    <div className="relative min-h-[100svh]">
      <div className="hidden md:block fixed inset-0 grainy-overlay z-50 pointer-events-none" />
      <div className="fixed inset-0 mesh-gradient -z-10" />
      <Navbar />

      <main id="main-content">
        <header className="px-6 pb-16 pt-36 sm:pb-20 sm:pt-44">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.4em] text-[#A78BFA]">Prensa</p>
            <h1 className="text-4xl font-black uppercase leading-[0.94] tracking-tighter text-[#E1E8F0] sm:text-5xl lg:text-7xl">
              KAIRAS en los medios
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-base font-light leading-7 text-slate-400 sm:text-lg sm:leading-8">
              Conversaciones sobre automatización, inteligencia artificial y cómo mejorar la operativa de pequeñas y medianas empresas.
            </p>
          </div>
        </header>

        <PressSection />

        <section className="px-4 pb-28 sm:px-6" aria-labelledby="datos-medios">
          <div className="mx-auto max-w-4xl border-t border-white/10 pt-12">
            <h2 id="datos-medios" className="mb-6 text-3xl font-black uppercase tracking-tight">Datos para medios</h2>
            <p className="mb-8 max-w-3xl font-light leading-relaxed text-slate-300">
              KAIRAS es un servicio de automatización e inteligencia artificial aplicada para pymes de servicios, fundado en Galicia por Carlota López Carracedo. Ayuda a clínicas, academias, inmobiliarias, asesorías y otros negocios de servicios a ordenar procesos, automatizar WhatsApp y el seguimiento de clientes, y reducir tareas manuales con control humano.
            </p>
            <dl className="grid gap-4 sm:grid-cols-2">
              {[
                ['Nombre', 'KAIRAS'],
                ['Fundadora', 'Carlota López Carracedo'],
                ['Ubicación', 'Galicia, España'],
                ['Ámbito', 'Pymes de servicios de Galicia y del resto de España'],
                ['Especialidad', 'Automatización de procesos, WhatsApp, CRM y seguimiento de clientes, IA aplicada'],
                ['Contacto de prensa', 'carlota.kairas@gmail.com'],
              ].map(([label, value]) => (
                <div key={label} className="glass-card rounded-2xl border-white/10 p-5">
                  <dt className="mb-1 text-xs font-bold uppercase tracking-widest text-cyber-purple">{label}</dt>
                  <dd className="text-sm text-slate-200">{value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-8 text-sm text-slate-400">
              Más información: <a href="/sobre-carlota/" className="text-cyber-purple underline underline-offset-4 hover:text-white">perfil de Carlota López Carracedo</a> y <a href="/servicios/" className="text-cyber-purple underline underline-offset-4 hover:text-white">servicios de KAIRAS</a>.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Prensa;
