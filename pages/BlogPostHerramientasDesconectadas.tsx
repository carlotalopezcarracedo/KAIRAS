import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CONTACT_EMAIL = 'carlota.kairas@gmail.com';

const BlogPostHerramientasDesconectadas: React.FC = () => {
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
              {['Operativa', 'Herramientas', 'Procesos'].map((tag) => (
                <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-cyber-purple bg-cyber-purple/10 border border-cyber-purple/20 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter uppercase leading-[0.95] mb-6">
              Herramientas desconectadas: por qué tu equipo siempre va tarde
            </h1>

            <p className="text-slate-500 text-xs font-mono mb-12">29 abril 2026 · 5 min de lectura</p>

            <div className="prose-kairas space-y-8 text-slate-300 text-base leading-relaxed font-light">

              <p className="text-lg text-slate-300 leading-relaxed">
                En la mayoría de pymes de servicios hay un número parecido de herramientas: un CRM o algún registro de clientes, un calendario, WhatsApp, el correo electrónico y quizás algún gestor de tareas. Cada una hace su trabajo. El problema es que ninguna habla con las demás.
              </p>

              <p>
                El resultado siempre es el mismo: alguien del equipo hace de puente entre herramientas. Copia datos de un sitio a otro. Busca información en tres lugares distintos. Llega tarde a lo que importa porque estaba ocupado con lo urgente.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Qué ocurre cuando las herramientas no se hablan
              </h2>

              <p>
                Cuando los sistemas no están conectados, cada herramienta tiene su propia versión de la realidad. El CRM dice una cosa, el calendario otra, y WhatsApp tiene la conversación más reciente que nadie ha registrado en ningún sitio.
              </p>

              <p>
                El equipo trabaja con datos incompletos o desactualizados. No por falta de voluntad, sino porque el sistema no está diseñado para que la información fluya sola.
              </p>

              <h3 className="text-base font-black uppercase tracking-wider text-white/80 pt-2">
                El coste real no es el tiempo copiando datos
              </h3>

              <p>
                El coste visible es el tiempo que alguien dedica a pasar información de un sitio a otro. Pero el coste real es más alto: es el error que ocurre cuando los datos no coinciden, la decisión que se toma con información desactualizada, el cliente que nota que el equipo no está sincronizado.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Los tres puntos de fricción más habituales
              </h2>

              <h3 className="text-base font-black uppercase tracking-wider text-white/80 pt-2">
                El lead que entra por WhatsApp y nunca llega al CRM
              </h3>

              <p>
                El equipo responde desde el móvil, el lead muestra interés, pero nadie lo registra como lead activo en el sistema. Tres semanas después, nadie recuerda que existía. Esta es una de las <a href="/blog/tareas-manuales-que-frenan-tu-negocio/" className="text-cyber-purple underline decoration-cyber-purple/50">tareas manuales que más frenan el negocio</a>: trasladar información entre canales a mano, cada vez, sin sistema.
              </p>

              <h3 className="text-base font-black uppercase tracking-wider text-white/80 pt-2">
                La cita confirmada en un canal que no actualiza la agenda compartida
              </h3>

              <p>
                El cliente confirma por email, alguien lo anota en su calendario personal y el resto del equipo sigue viendo ese hueco como disponible. El resultado: solapamientos, confusión o la cita que alguien llama a confirmar sin saber que ya estaba confirmada.
              </p>

              <h3 className="text-base font-black uppercase tracking-wider text-white/80 pt-2">
                El presupuesto enviado del que nadie lleva seguimiento
              </h3>

              <p>
                Sale del correo de quien lo preparó, no queda registrado en ningún sistema compartido y el seguimiento depende de que esa persona recuerde hacerlo. Sin un registro central, es imposible saber qué presupuestos siguen abiertos y cuáles se perdieron sin dar respuesta.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Conectar herramientas no siempre es una integración técnica compleja
              </h2>

              <p>
                En muchos casos, el problema no se resuelve con una herramienta nueva que lo integre todo. Se resuelve con una decisión de proceso: quién actualiza qué, en qué sistema y cuándo. Sin eso, añadir más herramientas solo multiplica los puntos donde la información puede divergir.
              </p>

              <p>
                En otros casos, una <a href="/automatizacion-procesos/" className="text-cyber-purple underline decoration-cyber-purple/50">automatización de procesos</a> sencilla elimina el trabajo de puente sin necesidad de que nadie lo haga manualmente: cuando llega un mensaje nuevo con cierta condición, se crea un registro en el sistema. Cuando se confirma una cita, se actualiza la agenda. Sin intervención.
              </p>

              <p>
                El primer paso no es buscar la plataforma que lo integra todo. Es entender qué información necesita fluir entre qué sistemas y por qué no lo hace ahora.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Por dónde empezar si tienes este problema
              </h2>

              <ul className="space-y-3 pl-4 border-l border-cyber-purple/30">
                <li><span className="text-white font-medium">1. Identifica el punto de fricción con más impacto:</span> dónde se pierde más tiempo o más información en tu operativa actual.</li>
                <li><span className="text-white font-medium">2. Decide si es un problema de proceso o de integración:</span> ¿nadie sabe quién actualiza qué? Eso es proceso. ¿Los sistemas no se sincronizan aunque haya voluntad? Eso es integración técnica.</li>
                <li><span className="text-white font-medium">3. Resuelve el proceso primero.</span> Si aún así hay trabajo manual innecesario, entonces automatiza.</li>
                <li><span className="text-white font-medium">4. No añadas más herramientas como solución.</span> El problema rara vez es que falta una herramienta más.</li>
              </ul>

              <p>
                Con la operativa ordenada, la <a href="/optimizacion-operativa-pymes/" className="text-cyber-purple underline decoration-cyber-purple/50">optimización operativa del negocio</a> deja de depender de que cada persona sepa qué tiene que hacer y se convierte en algo que funciona con independencia de quién esté ese día.
              </p>

            </div>

            <div className="mt-16 pt-12 border-t border-white/10">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">¿Tu equipo pierde tiempo copiando datos entre herramientas?</p>
              <a
                href="/contacto/"
                className="inline-flex items-center justify-center gap-3 bg-white text-black px-10 py-5 rounded-xl font-black text-sm tracking-widest uppercase hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 transition-all"
              >
                Analizamos tu operativa
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
              <a href="/blog/tareas-manuales-que-frenan-tu-negocio/" className="glass-card p-6 rounded-2xl flex items-center justify-between group hover:border-cyber-purple/30 hover:bg-white/5 transition-all border-white/10">
                <span className="text-sm font-bold uppercase tracking-wider">Tareas manuales que frenan tu negocio</span>
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

export default BlogPostHerramientasDesconectadas;
