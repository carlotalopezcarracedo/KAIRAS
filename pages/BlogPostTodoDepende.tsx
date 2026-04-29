import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CONTACT_EMAIL = 'carlota.kairas@gmail.com';

const BlogPostTodoDepende: React.FC = () => {
  return (
    <div className="relative min-h-[100svh]">
      <div className="hidden md:block fixed inset-0 grainy-overlay z-50 pointer-events-none" />
      <div className="fixed inset-0 mesh-gradient -z-10" />
      <Navbar />

      <main id="main-content">
        <article className="px-6 pt-32 pb-20">
          <div className="max-w-2xl mx-auto">

            <p className="text-xs font-bold tracking-[0.4em] uppercase text-cyber-purple mb-6">
              <a href="/" className="hover:text-white transition-colors">KAIRAS</a>
              <span className="mx-2 opacity-40">/</span>
              <a href="/blog/" className="hover:text-white transition-colors">Blog</a>
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {['Operativa', 'Procesos', 'Organización'].map((tag) => (
                <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-cyber-purple bg-cyber-purple/10 border border-cyber-purple/20 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter uppercase leading-[0.95] mb-6">
              Cuando todo depende de una sola persona: el cuello de botella más habitual en pymes
            </h1>

            <p className="text-slate-500 text-xs font-mono mb-12">29 abril 2026 · 6 min de lectura</p>

            <div className="prose-kairas space-y-8 text-slate-300 text-base leading-relaxed font-light">

              <p className="text-lg text-slate-300 leading-relaxed">
                Hay un patrón que aparece en casi todas las pymes de servicios que llegan a un punto de bloqueo. No siempre se ve desde fuera. A veces ni quien está dentro lo ha puesto por escrito. Pero cuando una sola persona concentra demasiado —sabe dónde está cada cosa, recuerda los detalles de cada cliente, es la referencia para cualquier decisión—, el negocio tiene un problema estructural aunque en apariencia funcione bien.
              </p>

              <p>
                Cuando esa persona está, todo funciona. Cuando no está, todo espera.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Por qué la dependencia de una persona es un riesgo real
              </h2>

              <p>
                No es solo un problema de organización interna. Es un riesgo operativo con consecuencias concretas.
              </p>

              <p>
                Si esa persona cae enferma, la operativa se ralentiza o se paraliza. Si se va de vacaciones, algunas cosas quedan en espera hasta que vuelva. Si decide dejar el negocio, se lleva consigo información, procesos y contexto que no están documentados en ningún sitio.
              </p>

              <p>
                Los clientes también lo notan. Preguntan por esa persona específicamente para cualquier gestión. Esperan que sea ella quien responda, quien confirme, quien resuelva. Eso es una señal de que el servicio está personalizado en una sola persona, no en la empresa.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Cómo se llega a esta situación (sin que nadie lo decida así)
              </h2>

              <p>
                Suele empezar siendo eficiente. La persona más competente asume más responsabilidades porque es más rápido que explicárselas a alguien. No hay documentación porque "es más sencillo hacerlo yo". El negocio crece, se añaden clientes, pero no se añade estructura.
              </p>

              <p>
                El proceso acaba viviendo en la cabeza de alguien. Lo que significa que si esa persona no está, el proceso tampoco existe.
              </p>

              <h3 className="text-base font-black uppercase tracking-wider text-white/80 pt-2">
                La trampa de lo urgente
              </h3>

              <p>
                Cuando hay mucho trabajo, documentar parece un lujo. Delegar parece más lento que hacerlo uno mismo. Y siempre hay algo más urgente que ordenar cómo funciona el negocio. El resultado es un sistema que funciona mientras la persona clave está presente y disponible. Ese sistema tiene un techo invisible: no puede crecer más de lo que esa persona puede gestionar.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Las señales de que ya estás en esa situación
              </h2>

              <ul className="space-y-2 pl-4 border-l border-cyber-purple/30">
                <li>Hay tareas críticas que solo sabe hacer una persona en el equipo</li>
                <li>Cuando esa persona no está, algunas cosas quedan en espera o se hacen de forma diferente</li>
                <li>Delegar algo requiere tanta explicación que parece más rápido hacerlo uno mismo</li>
                <li>Los clientes preguntan específicamente por esa persona para cualquier gestión</li>
                <li>La agenda, los contactos o el estado de los proyectos están en el móvil o en la cabeza de alguien, no en un sistema compartido</li>
              </ul>

              <p>
                Ese último punto suele ir acompañado de otro problema paralelo: las herramientas que usa el equipo no comparten información. Si quieres entender cómo eso amplifica la dependencia, lee sobre <a href="/blog/herramientas-desconectadas-equipo-va-tarde/" className="text-cyber-purple underline decoration-cyber-purple/50">herramientas desconectadas que hacen que el equipo vaya siempre tarde</a>.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Por dónde empezar a reducir esa dependencia
              </h2>

              <p>No hace falta documentarlo todo de golpe. Hay un punto de partida más sencillo:</p>

              <ul className="space-y-3 pl-4 border-l border-cyber-purple/30">
                <li><span className="text-white font-medium">1. Identifica las tres tareas más críticas</span> que solo puede hacer esa persona y que pararían el negocio si ella no estuviera.</li>
                <li><span className="text-white font-medium">2. Documenta brevemente cómo se hacen,</span> aunque sea en un Google Doc básico. No hace falta que sea perfecto: basta con que otra persona pueda seguirlo.</li>
                <li><span className="text-white font-medium">3. Separa lo que requiere criterio real</span> de lo que es simplemente un proceso repetitivo. El criterio necesita formación. Lo repetitivo necesita un sistema.</li>
                <li><span className="text-white font-medium">4. Delega progresivamente,</span> empezando por tareas con bajo riesgo de error y alta frecuencia.</li>
              </ul>

              <h3 className="text-base font-black uppercase tracking-wider text-white/80 pt-2">
                Qué puede hacer la automatización aquí
              </h3>

              <p>
                La <a href="/automatizacion-procesos/" className="text-cyber-purple underline decoration-cyber-purple/50">automatización de procesos</a> no reemplaza a las personas. Lo que hace es reducir la dependencia de que alguien se acuerde de ejecutar tareas repetitivas en el momento correcto.
              </p>

              <p>
                Un recordatorio automático no necesita que nadie lo active. Un registro centralizado no depende de que una persona lo mantenga actualizado. Un flujo de seguimiento no requiere que nadie recuerde cuándo es el momento de volver a contactar.
              </p>

              <p>
                Cuando eso está en un sistema, la persona clave puede dedicar su tiempo a lo que realmente requiere su criterio. Y el negocio puede funcionar con independencia de que ella esté o no ese día.
              </p>

              <p>
                Para ver cómo ordenar la operativa más allá de la dependencia personal, visita la guía sobre <a href="/optimizacion-operativa-pymes/" className="text-cyber-purple underline decoration-cyber-purple/50">optimización operativa para pymes</a>.
              </p>

            </div>

            <div className="mt-16 pt-12 border-t border-white/10">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">¿Tu negocio depende demasiado de que una persona esté presente?</p>
              <a
                href="/contacto/"
                className="inline-flex items-center justify-center gap-3 bg-white text-black px-10 py-5 rounded-xl font-black text-sm tracking-widest uppercase hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 transition-all"
              >
                Hablamos sin compromiso
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </article>

        <section className="py-16 px-6 border-t border-white/5">
          <div className="max-w-2xl mx-auto">
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-slate-500 mb-6">Más recursos</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <a href="/optimizacion-operativa-pymes/" className="glass-card p-6 rounded-2xl flex items-center justify-between group hover:border-cyber-purple/30 hover:bg-white/5 transition-all border-white/10">
                <span className="text-sm font-bold uppercase tracking-wider">Optimización operativa</span>
                <ArrowRight className="w-4 h-4 text-cyber-purple group-hover:translate-x-1 transition-transform shrink-0" />
              </a>
              <a href="/blog/herramientas-desconectadas-equipo-va-tarde/" className="glass-card p-6 rounded-2xl flex items-center justify-between group hover:border-cyber-purple/30 hover:bg-white/5 transition-all border-white/10">
                <span className="text-sm font-bold uppercase tracking-wider">Herramientas desconectadas</span>
                <ArrowRight className="w-4 h-4 text-cyber-purple group-hover:translate-x-1 transition-transform shrink-0" />
              </a>
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

export default BlogPostTodoDepende;
