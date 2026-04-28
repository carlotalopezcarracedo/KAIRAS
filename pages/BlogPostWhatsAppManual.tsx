import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CONTACT_EMAIL = 'carlota.kairas@gmail.com';

const BlogPostWhatsAppManual: React.FC = () => {
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
              {['WhatsApp', 'Atencion', 'Seguimiento'].map((tag) => (
                <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-cyber-purple bg-cyber-purple/10 border border-cyber-purple/20 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter uppercase leading-[0.95] mb-6">
              Como dejar de gestionar el WhatsApp de empresa a mano
            </h1>

            <p className="text-slate-500 text-xs font-mono mb-12">28 abril 2026 · 10 min de lectura</p>

            <div className="prose-kairas space-y-7 text-slate-300 text-base leading-relaxed font-light">
              <p className="text-lg text-slate-300 leading-relaxed">
                Si tu equipo vive pegado al movil, interrumpiendo tareas para responder mensajes, no tienes un problema de actitud.
                Tienes un problema de sistema.
                Gestionar WhatsApp de empresa a mano puede funcionar con poco volumen, pero deja de funcionar cuando crece la demanda.
              </p>

              <p>
                Lo mas peligroso es que el caos se normaliza rapido: mensajes sin contestar en horario pico, conversaciones repetidas,
                oportunidades que se enfrían, y clientes que perciben poca continuidad.
                Desde fuera parece "mucho trabajo". Desde dentro es un canal critico sin estructura.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Por que WhatsApp se convierte en cuello de botella
              </h2>

              <p>
                WhatsApp concentra casi todo: primeras consultas, dudas de precio, envio de documentos, cambios de cita y seguimiento comercial.
                El canal no es el problema. El problema es tratarlo como una bandeja personal en vez de tratarlo como un proceso de negocio.
              </p>

              <p>
                Cuando no hay reglas claras, cada miembro del equipo responde como puede.
                Eso genera tres costes directos: tiempos de respuesta irregulares, experiencia inconsistente y cero trazabilidad.
                Traducido: pierdes conversion y gastas energia operativa en tareas que podrian estar automatizadas.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Senales de que ya no puedes seguir gestionandolo a mano
              </h2>

              <h3 className="text-lg font-black uppercase tracking-wider text-white">Respondes tarde aunque trabajes mas horas</h3>
              <p>
                Si el equipo hace esfuerzo extra pero el tiempo medio de respuesta no mejora, el problema no es "ponerle ganas".
                El problema es que todo depende de intervencion manual y prioridad del momento.
              </p>

              <h3 className="text-lg font-black uppercase tracking-wider text-white">Siempre se repiten las mismas preguntas</h3>
              <p>
                Horarios, disponibilidad, precios base, pasos para reservar.
                Si esas consultas consumen gran parte del dia, necesitas respuestas estructuradas y activacion automatica del primer tramo.
              </p>

              <h3 className="text-lg font-black uppercase tracking-wider text-white">No sabes que conversacion esta en riesgo</h3>
              <p>
                Sin alertas ni estado por oportunidad, todo parece urgente y a la vez nada queda realmente priorizado.
                El resultado es que se atiende lo que hace mas ruido, no lo que tiene mas valor comercial.
              </p>

              <h3 className="text-lg font-black uppercase tracking-wider text-white">WhatsApp no conecta con tu seguimiento</h3>
              <p>
                Si una conversacion termina en promesa de "te escribo luego" y no aterriza en un sistema de seguimiento,
                ese lead entra en zona de riesgo.
                Para evitarlo necesitas unir canal y proceso, no solo responder rapido.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Que deberias automatizar primero (sin perder cercania)
              </h2>

              <p>
                Automatizar WhatsApp no significa convertir todo en respuestas frias.
                Significa separar lo repetitivo de lo sensible.
                Lo repetitivo lo resuelve el sistema. Lo sensible lo lleva una persona con contexto.
              </p>

              <h3 className="text-lg font-black uppercase tracking-wider text-white">1. Primera respuesta y clasificacion inicial</h3>
              <p>
                El primer mensaje debe llegar siempre, incluso fuera de horario.
                Esa respuesta inicial sirve para dar contexto, pedir datos clave y clasificar la consulta por tipo.
                Solo con este paso ya reduces mucha friccion en el arranque de la conversacion.
              </p>

              <h3 className="text-lg font-black uppercase tracking-wider text-white">2. Preguntas frecuentes con salida clara a humano</h3>
              <p>
                Puedes automatizar respuestas de base sin encerrar al cliente en un menu infinito.
                La clave es definir cuando escalar a persona: casos complejos, objeciones comerciales o decisiones de compra.
              </p>

              <h3 className="text-lg font-black uppercase tracking-wider text-white">3. Recordatorios y siguientes pasos</h3>
              <p>
                Confirmaciones de cita, documentos pendientes, seguimiento tras propuesta.
                Este tramo es donde mas se cae la continuidad cuando todo va a mano.
                Con automatizacion bien diseñada, se ejecuta en tiempo y forma sin perseguir tareas.
              </p>

              <h3 className="text-lg font-black uppercase tracking-wider text-white">4. Registro en CRM y alertas de inactividad</h3>
              <p>
                Si WhatsApp queda aislado, repites el problema en otra capa.
                Necesitas que las interacciones importantes alimenten el
                <a href="/crm-pymes-seguimiento-clientes/" className="text-cyber-purple underline decoration-cyber-purple/50"> CRM y seguimiento de clientes</a>
                para saber que esta vivo, que esta parado y que requiere accion humana.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Error comun: empezar por la herramienta y no por el flujo
              </h2>

              <p>
                Muchas pymes prueban soluciones rapidas y concluyen que "no funciona".
                Normalmente el problema no es la plataforma, sino que no se definio antes el flujo operativo.
                Si no sabes que quieres que pase en cada etapa, cualquier herramienta termina pareciendo ruido.
              </p>

              <p>
                Por eso conviene tratar WhatsApp como parte de la
                <a href="/automatizacion-procesos/" className="text-cyber-purple underline decoration-cyber-purple/50"> automatizacion de procesos</a>
                general del negocio, no como parche aislado.
                El objetivo es continuidad comercial con carga operativa controlada.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Como se ve una operativa ordenada en el dia a dia
              </h2>

              <p>
                Cuando el sistema esta bien montado, el equipo deja de vivir en modo reaccion.
                Se responde antes, se filtra mejor y se dedica tiempo humano a conversaciones de valor.
                El cliente nota rapidez y claridad.
                El equipo nota menos interrupciones y mas control.
              </p>

              <p>
                Eso no significa perder trato personal.
                Significa reservar el trato personal para cuando aporta de verdad.
                La parte mecanica se ejecuta sola. La parte relacional se trabaja mejor.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Que hacer esta semana para dejar de improvisar
              </h2>

              <p>
                Paso uno: lista las tres consultas que mas se repiten.
                Paso dos: define el tiempo maximo de primera respuesta.
                Paso tres: marca que conversaciones deben entrar siempre en seguimiento.
                Con eso ya tienes base para un flujo de
                <a href="/automatizacion-whatsapp-empresas/" className="text-cyber-purple underline decoration-cyber-purple/50"> automatizacion de WhatsApp para empresas</a>
                que realmente mejore conversion y no solo "responda mensajes".
              </p>

              <p>
                Si ademas conectas ese flujo con CRM y reglas simples de seguimiento, el canal deja de ser una carga caotica
                y pasa a ser una pieza estable de tu sistema comercial.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Mini plan de implantacion en 30 dias
              </h2>

              <p>
                Semana 1: mapea conversaciones y define categorias de entrada.
                Semana 2: automatiza primera respuesta, FAQs clave y derivacion.
                Semana 3: conecta seguimiento y alertas de inactividad.
                Semana 4: revisa tiempos de respuesta, tasa de recuperacion y puntos de bloqueo.
              </p>

              <p>
                Este enfoque evita proyectos largos sin retorno visible.
                En lugar de apostar a una gran configuracion inicial, vas validando mejoras concretas con el equipo en operativa real.
                Si algo no aporta claridad o continuidad, se ajusta y listo.
              </p>
            </div>

            <div className="mt-16 pt-12 border-t border-white/10">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">Si WhatsApp te esta comiendo tiempo y oportunidades, lo revisamos contigo.</p>
              <a
                href="/contacto/"
                className="inline-flex items-center justify-center gap-3 bg-white text-black px-10 py-5 rounded-xl font-black text-sm tracking-widest uppercase hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 transition-all"
              >
                Solicitar diagnostico de WhatsApp
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

export default BlogPostWhatsAppManual;
