import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CONTACT_EMAIL = 'carlota.kairas@gmail.com';

const BlogPostCRMNoProceso: React.FC = () => {
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
              {['CRM', 'Procesos', 'Operativa'].map((tag) => (
                <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-cyber-purple bg-cyber-purple/10 border border-cyber-purple/20 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter uppercase leading-[0.95] mb-6">
              Tu CRM no falla: falla el proceso que hay detrás
            </h1>

            <p className="text-slate-500 text-xs font-mono mb-12">29 abril 2026 · 6 min de lectura</p>

            <div className="prose-kairas space-y-8 text-slate-300 text-base leading-relaxed font-light">

              <p className="text-lg text-slate-300 leading-relaxed">
                Cuando los leads se pierden o el seguimiento no funciona, la solución favorita suele ser cambiar de CRM. Se busca uno nuevo, se configura, se forma al equipo. Y tres meses después el problema sigue siendo el mismo. Los datos están desactualizados, nadie sabe en qué estado está cada lead, y las oportunidades siguen cayéndose.
              </p>

              <p>
                El CRM nuevo tampoco funciona. Porque el problema no era el CRM.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Por qué la mayoría de negocios culpan al CRM cuando el problema es otro
              </h2>

              <p>
                Un CRM es una herramienta. Organiza información, registra actividad y muestra el estado de cada contacto. Pero no define quién actualiza qué ni cuándo. No decide cuándo hacer seguimiento a un lead. Y no le dice a nadie qué paso dar después de una llamada.
              </p>

              <p>
                Sin un proceso claro detrás, cualquier herramienta fallará. Los síntomas —leads sin actualizar, seguimientos perdidos, estados sin sentido— los muestra el CRM. Pero la causa es que nadie definió cómo debe funcionar el proceso que alimenta esa herramienta.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Las señales de que el problema es el proceso, no la herramienta
              </h2>

              <ul className="space-y-2 pl-4 border-l border-cyber-purple/30">
                <li>Hay leads en estado "sin clasificar" desde hace semanas o meses</li>
                <li>Nadie sabe cuál es el siguiente paso para cada lead sin abrir el historial completo</li>
                <li>La misma información existe en el CRM, en el email y en WhatsApp, y ninguna versión está al día</li>
                <li>El equipo anota cosas en papel o en el móvil "para luego pasarlo al CRM"</li>
                <li>Nadie revisa el CRM a primera hora porque no hay criterio para saber qué mirar primero</li>
              </ul>

              <p>
                Esto no lo soluciona cambiar de herramienta. Muchas de estas situaciones son síntomas del mismo patrón que aparece en las <a href="/blog/tareas-manuales-que-frenan-tu-negocio/" className="text-cyber-purple underline decoration-cyber-purple/50">tareas manuales que frenan el negocio cada semana</a>: la herramienta no falla, falta el proceso que debería apoyarse en ella.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Lo que un proceso definido aporta que ninguna herramienta puede hacer sola
              </h2>

              <p>Un proceso de seguimiento bien definido responde preguntas concretas:</p>

              <ul className="space-y-2 pl-4 border-l border-cyber-purple/30">
                <li>¿Qué hace que un contacto sea un lead activo y qué hace que pase a frío?</li>
                <li>¿Quién es responsable de cada lead y cuándo debe contactarle?</li>
                <li>¿Qué ocurre si un lead no responde después de dos intentos?</li>
                <li>¿Cuándo se descarta un lead y quién toma esa decisión?</li>
              </ul>

              <p>
                Cuando estas preguntas tienen respuesta, el CRM empieza a funcionar. No porque sea mejor herramienta, sino porque quien lo usa sabe exactamente qué tiene que hacer y cuándo. Para eso, hay que tener criterio sobre el <a href="/blog/seguimiento-leads-pymes-cuando-insistir/" className="text-cyber-purple underline decoration-cyber-purple/50">seguimiento de leads: cuándo insistir y cuándo parar</a>.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Cómo corregir el proceso antes de cambiar el CRM
              </h2>

              <p>No hace falta rediseñar todo. Estos cinco pasos ordenan la mayor parte del problema:</p>

              <ul className="space-y-3 pl-4 border-l border-cyber-purple/30">
                <li><span className="text-white font-medium">1. Mapea el flujo actual:</span> desde que llega un lead hasta que convierte o se descarta. No el ideal: el real, con sus agujeros.</li>
                <li><span className="text-white font-medium">2. Identifica dónde se rompe:</span> en qué momento se pierden leads y por qué. Suele ser siempre en los mismos puntos.</li>
                <li><span className="text-white font-medium">3. Define los estados del pipeline con criterio real:</span> qué significa cada etapa y qué condición hace que un lead pase de una a otra.</li>
                <li><span className="text-white font-medium">4. Asigna responsable y próximo paso:</span> cada lead debe tener siempre una persona y una acción con fecha.</li>
                <li><span className="text-white font-medium">5. Configura el CRM para que soporte ese proceso:</span> solo entonces. No al revés.</li>
              </ul>

              <p>
                Con el proceso definido, un <a href="/crm-pymes-seguimiento-clientes/" className="text-cyber-purple underline decoration-cyber-purple/50">CRM para pymes de servicios</a> deja de ser una herramienta que hay que rellenar y se convierte en el sistema que sostiene el seguimiento comercial del negocio.
              </p>

            </div>

            <div className="mt-16 pt-12 border-t border-white/10">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">¿Tu CRM tiene datos pero el seguimiento sigue sin funcionar?</p>
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
              <a href="/crm-pymes-seguimiento-clientes/" className="glass-card p-6 rounded-2xl flex items-center justify-between group hover:border-cyber-purple/30 hover:bg-white/5 transition-all border-white/10">
                <span className="text-sm font-bold uppercase tracking-wider">CRM para pymes</span>
                <ArrowRight className="w-4 h-4 text-cyber-purple group-hover:translate-x-1 transition-transform shrink-0" />
              </a>
              <a href="/blog/seguimiento-leads-pymes-cuando-insistir/" className="glass-card p-6 rounded-2xl flex items-center justify-between group hover:border-cyber-purple/30 hover:bg-white/5 transition-all border-white/10">
                <span className="text-sm font-bold uppercase tracking-wider">Seguimiento de leads en pymes</span>
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

export default BlogPostCRMNoProceso;
