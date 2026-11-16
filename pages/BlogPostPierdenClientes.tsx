import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogAuthorMeta from '../components/BlogAuthorMeta';

const CONTACT_EMAIL = 'carlota.kairas@gmail.com';

const BlogPostPierdenClientes: React.FC = () => {
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
              {['Leads', 'CRM', 'Seguimiento'].map((tag) => (
                <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-cyber-purple bg-cyber-purple/10 border border-cyber-purple/20 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-normal uppercase leading-[0.95] mb-6">
              Por qué las pymes pierden clientes antes de firmar
            </h1>

            <BlogAuthorMeta>28 abril 2026 · 9 min de lectura</BlogAuthorMeta>

            <div className="prose-kairas space-y-7 text-slate-300 text-base leading-relaxed font-light">
              <p className="text-lg text-slate-300 leading-relaxed">
                Te escriben. Piden información. Quieren precio. Te dicen que encaja. Y luego desaparecen.
                No es casualidad. En la mayoría de pymes de servicios, la perdida de clientes antes de firmar no pasa por falta de demanda.
                Pasa por falta de sistema entre el primer contacto y la decisión.
              </p>

              <p>
                El patrón se repite: entra un lead, alguien responde cuando puede, se manda propuesta, se promete seguimiento y el día a día se lo lleva por delante.
                Al final no se pierden clientes por una gran decisión equivocada, sino por diez pequeños fallos operativos acumulados.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
                El problema no es "captar más", es convertir mejor lo que ya entra
              </h2>

              <p>
                Muchas empresas enfocan todo en traer más trafico, más anuncios o más visitas a la web.
                Pero si el seguimiento es irregular, más volumen solo significa más oportunidades perdidas.
                Antes de meter más presupuesto en captación, merece la pena revisar que pasa desde que alguien levanta la mano hasta que firma.
              </p>

              <p>
                Cuando ese tramo no esta definido, el resultado es previsible: cada comercial o cada persona de atención actúa con su propio criterio,
                los tiempos cambian según la carga del día y el lead nota que no hay continuidad.
                En un entorno competitivo, esa falta de continuidad se paga con ventas que se enfrían.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
                Cinco fugas habituales que explican por que se caen los leads
              </h2>

              <h3 className="text-lg font-black uppercase tracking-wider text-white">1. La primera respuesta llega tarde</h3>
              <p>
                Si el primer contacto tarda horas, ya llegas en desventaja.
                No porque tu servicio sea peor, sino porque el cliente sigue comparando y otro negocio le responde antes.
                Una parte importante de la venta se juega en velocidad y claridad durante las primeras interacciones.
              </p>

              <h3 className="text-lg font-black uppercase tracking-wider text-white">2. No hay un siguiente paso definido</h3>
              <p>
                "Te escribo la semana que viene" no es un proceso.
                Si no queda programado quien contacta, cuando y con que objetivo, ese seguimiento compite contra urgencias reales del equipo.
                Y cuando compite, casi siempre pierde.
              </p>

              <h3 className="text-lg font-black uppercase tracking-wider text-white">3. WhatsApp y CRM no se hablan</h3>
              <p>
                Una parte de la conversación vive en WhatsApp, otra en email, otra en notas sueltas.
                Sin integración, nadie tiene el contexto completo y se repiten preguntas, se olvidan compromisos y se enfría la oportunidad.
                Por eso la automatización de <a href="/automatizacion-whatsapp-empresas/" className="text-cyber-purple underline decoration-cyber-purple/50">WhatsApp para empresas</a> no va de "poner un bot", va de ordenar la continuidad comercial.
              </p>

              <h3 className="text-lg font-black uppercase tracking-wider text-white">4. Las propuestas salen sin cadencia de seguimiento</h3>
              <p>
                Enviar propuesta no es cerrar venta.
                Sin una secuencia corta y clara de seguimiento posterior, muchos presupuestos se quedan en tierra de nadie.
                El cliente no siempre responde al primer envio, y eso no significa "no le interesa".
                A menudo significa que nadie guio la decisión.
              </p>

              <h3 className="text-lg font-black uppercase tracking-wider text-white">5. Todo depende de memoria humana</h3>
              <p>
                Cuando el sistema es "acordarse", el sistema falla.
                Si una persona se satura, se ausenta o cambia de prioridad, se cae la cadena completa.
                Es ahí donde un proceso automatizado marca diferencia: no sustituye el criterio comercial, pero garantiza la ejecución base.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
                Cómo diagnosticar si tu pyme esta perdiendo clientes por seguimiento
              </h2>

              <p>
                No hace falta una auditoria eterna para detectarlo.
                Con cuatro preguntas puedes tener una foto bastante real:
              </p>

              <p>
                Uno: cuanto tarda tu primera respuesta real en horario normal.
                Dos: cuantas oportunidades tienen siguiente paso asignado en el mismo día.
                Tres: cuantas propuestas enviadas se revisan con un seguimiento activo durante los 7 días siguientes.
                Cuatro: en cuantos casos puedes ver todo el historial en un único sitio sin pedir contexto a otra persona.
              </p>

              <p>
                Si dos o más respuestas son "depende", no hay sistema estable.
                Y si no hay sistema, el crecimiento depende de heroicidades del equipo, no de una operativa repetible.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
                Qué cambia cuando pasas a un sistema de CRM y seguimiento
              </h2>

              <p>
                Un buen sistema de <a href="/crm-pymes-seguimiento-clientes/" className="text-cyber-purple underline decoration-cyber-purple/50">CRM y seguimiento de clientes</a>
                no es una lista de contactos bonita.
                Es una forma de asegurar que cada lead avanza por etapas claras, con tiempos definidos y acciones que no dependen de memoria.
              </p>

              <p>
                En la practica, esto significa:
                primer contacto más rápido,
                siguiente paso siempre visible,
                alertas cuando una oportunidad se enfría,
                y trazabilidad para saber donde se caen las ventas.
                Lo importante no es la herramienta aislada, sino el proceso que diseñas sobre ella.
              </p>

              <p>
                Cuando ese proceso esta bien montado, no necesitas perseguir clientes ni vivir pendiente de improvisar.
                El equipo trabaja con un ritmo comercial más estable y con menos fricción diaria.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
                Por dónde empezar sin complicar al equipo
              </h2>

              <p>
                No intentes automatizar todo de golpe.
                Empieza por el tramo donde más se pierden oportunidades: primera respuesta, seguimiento de propuesta o reactivación de leads parados.
                Ese primer paso suele conectar con la <a href="/automatizacion-procesos/" className="text-cyber-purple underline decoration-cyber-purple/50">automatización de procesos</a> que más retorno da en menos tiempo.
              </p>

              <p>
                La regla es simple: primero continuidad, después sofisticación.
                Primero asegurar que el lead no se pierde, después optimizar detalle.
                Si inviertes este orden, acabas con tecnología nueva y el mismo problema operativo de siempre.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
                Cierre
              </h2>

              <p>
                Si tu empresa siente que "llegan contactos pero no se cierran", no asumas que el problema es marketing.
                Muchas veces el cuello de botella esta en seguimiento, tiempos de respuesta y falta de sistema entre canales.
                Corregir eso no requiere humo ni proyectos interminables. Requiere criterio operativo y ejecución.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
                Tres preguntas para cerrar esta semana con claridad
              </h2>

              <p>
                Primera: cuanto dinero aproximado se queda fuera cada mes por oportunidades que no llegan a segunda conversación.
                Aunque sea una estimación, poner número al problema ayuda a priorizar sin autoengano.
              </p>

              <p>
                Segunda: que parte del proceso depende hoy de una sola persona.
                Si esa persona se satura, el sistema cae. Si esa persona se va, el conocimiento se pierde.
                Ese es el punto exacto donde conviene intervenir primero.
              </p>

              <p>
                Tercera: que cambio podrias notar en 30 días si tu seguimiento fuera constante.
                Menos propuestas sin respuesta, más reuniones de avance, más conversión sobre el mismo volumen de leads.
                Si esa mejora tiene impacto real, ya tienes foco para la primera fase.
              </p>
            </div>

            <div className="mt-16 pt-12 border-t border-white/10">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">Quieres detectar donde se pierden tus leads antes de firmar?</p>
              <a
                href="/contacto/"
                className="inline-flex items-center justify-center gap-3 bg-white text-black px-10 py-5 rounded-xl font-black text-sm tracking-widest uppercase hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 transition-all"
              >
                Revisar mi caso con KAIRAS
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </article>
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

export default BlogPostPierdenClientes;
