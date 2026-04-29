import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CONTACT_EMAIL = 'carlota.kairas@gmail.com';

const BlogPostConfirmacionCitas: React.FC = () => {
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
              {['Clínicas', 'WhatsApp', 'Automatización'].map((tag) => (
                <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-cyber-purple bg-cyber-purple/10 border border-cyber-purple/20 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter uppercase leading-[0.95] mb-6">
              Confirmación de citas por WhatsApp en clínicas: sin depender del teléfono
            </h1>

            <p className="text-slate-500 text-xs font-mono mb-12">29 abril 2026 · 5 min de lectura</p>

            <div className="prose-kairas space-y-8 text-slate-300 text-base leading-relaxed font-light">

              <p className="text-lg text-slate-300 leading-relaxed">
                La mayoría de clínicas confirman citas de una de estas dos formas: llamando por teléfono o enviando un WhatsApp a mano. Las dos funcionan. Y las dos tienen el mismo problema: dependen de que alguien tenga tiempo para hacerlo en ese momento.
              </p>

              <p>
                Cuando hay presión en consulta, cuando el equipo está ocupado atendiendo o cuando llega el pico de agenda de fin de semana, las confirmaciones se retrasan. Y un paciente que no recibe confirmación suele dudar, no aparece, o llama para preguntar. Lo que genera más carga, no menos.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Por qué las confirmaciones manuales fallan justo cuando más se necesitan
              </h2>

              <p>
                En períodos de alta demanda —septiembre, enero, antes de vacaciones—, el volumen de citas aumenta pero los recursos no. Es exactamente cuando más se necesita un sistema que funcione sin intervención manual.
              </p>

              <p>Los problemas habituales cuando las confirmaciones son manuales:</p>

              <ul className="space-y-2 pl-4 border-l border-cyber-purple/30">
                <li>Se envían tarde o se olvidan cuando hay mucho trabajo en consulta</li>
                <li>No hay registro de a quién se confirmó y a quién no</li>
                <li>Cada persona del equipo lo hace de forma diferente, con textos distintos</li>
                <li>Los pacientes que no reciben nada llaman para preguntar, generando más trabajo</li>
              </ul>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Qué permite hacer WhatsApp para confirmaciones automáticas
              </h2>

              <p>
                Un sistema de <a href="/automatizacion-whatsapp-empresas/" className="text-cyber-purple underline decoration-cyber-purple/50">automatización de WhatsApp para clínicas y empresas de servicios</a> puede encargarse de:
              </p>

              <ul className="space-y-2 pl-4 border-l border-cyber-purple/30">
                <li>Enviar un mensaje de confirmación en el momento en que se registra la cita</li>
                <li>Mandar un recordatorio 24 o 48 horas antes con los detalles de la cita</li>
                <li>Pedir confirmación de asistencia y registrar la respuesta del paciente</li>
                <li>Gestionar cancelaciones o cambios de cita por el mismo canal</li>
              </ul>

              <h3 className="text-base font-black uppercase tracking-wider text-white/80 pt-2">
                Qué diferencia una confirmación automática de un mensaje genérico
              </h3>

              <p>
                El mensaje debe incluir el nombre del paciente, la fecha y hora, el nombre del profesional y, si aplica, la dirección o sala. Sin esos datos, el mensaje parece un envío masivo y genera desconfianza en lugar de tranquilidad.
              </p>

              <p>
                El tono tiene que ser cercano, no robótico. Y el canal debe permitir que el paciente responda: si el número no puede recibir mensajes, el sistema no funciona en ambas direcciones y pierde gran parte de su utilidad.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Cuándo tiene sentido implementarlo (y cuándo no)
              </h2>

              <p>Tiene sentido cuando:</p>

              <ul className="space-y-2 pl-4 border-l border-cyber-purple/30">
                <li>La clínica gestiona más de 20 citas semanales</li>
                <li>Hay ausencias recurrentes que se podrían evitar con un aviso previo</li>
                <li>El equipo invierte tiempo real en hacer confirmaciones manualmente</li>
                <li>WhatsApp ya es el canal principal de comunicación con pacientes</li>
              </ul>

              <p>No tiene sentido cuando:</p>

              <ul className="space-y-2 pl-4 border-l border-cyber-purple/30">
                <li>El volumen de citas es muy bajo y el contacto personal es parte diferencial del servicio</li>
                <li>Los pacientes esperan hablar con alguien antes de confirmar por el tipo de tratamiento</li>
              </ul>

              <p>
                Si el objetivo principal es reducir el número de ausencias, hay más variables en juego además de la confirmación. Lee sobre <a href="/blog/reducir-ausencias-clinicas-recordatorios-automaticos/" className="text-cyber-purple underline decoration-cyber-purple/50">cómo reducir ausencias en clínicas con recordatorios automáticos</a> para ver el sistema completo.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Qué necesitas para que funcione en tu clínica
              </h2>

              <p>
                El requisito básico es un número de WhatsApp Business dedicado, distinto del personal o del que usa el equipo para otras comunicaciones. A partir de ahí, la decisión depende del volumen y del nivel de automatización que necesitas:
              </p>

              <ul className="space-y-3 pl-4 border-l border-cyber-purple/30">
                <li><span className="text-white font-medium">WhatsApp Business App:</span> Suficiente si el volumen es moderado y hay alguien que puede revisar respuestas. Las respuestas automáticas son básicas pero cubren los mensajes de confirmación más sencillos.</li>
                <li><span className="text-white font-medium">WhatsApp API:</span> Necesaria si quieres flujos automatizados reales: confirmación en el momento de crear la cita, recordatorio 24h antes y gestión de respuestas sin intervención manual. La <a href="/blog/whatsapp-business-app-vs-api-pymes/" className="text-cyber-purple underline decoration-cyber-purple/50">diferencia entre WhatsApp Business App y la API</a> explica cuándo merece la pena dar el salto.</li>
              </ul>

              <p>
                En cualquier caso, lo que hace que el sistema funcione es la conexión con tu agenda de citas. Si la confirmación se genera manualmente desde el número de WhatsApp sin vincular los datos de la agenda, el proceso no es automático: es un paso menos, no una solución al problema.
              </p>

              <p>
                Para una visión completa de todo lo que se puede automatizar en el día a día de una clínica, visita nuestra página sobre <a href="/automatizacion-clinicas/" className="text-cyber-purple underline decoration-cyber-purple/50">automatización para clínicas</a>.
              </p>

            </div>

            <div className="mt-16 pt-12 border-t border-white/10">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">¿Tu equipo confirma citas manualmente cada semana?</p>
              <a
                href="/contacto/"
                className="inline-flex items-center justify-center gap-3 bg-white text-black px-10 py-5 rounded-xl font-black text-sm tracking-widest uppercase hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 transition-all"
              >
                Analizamos tu caso
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </article>

        <section className="py-16 px-6 border-t border-white/5">
          <div className="max-w-2xl mx-auto">
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-slate-500 mb-6">Más recursos</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <a href="/automatizacion-clinicas/" className="glass-card p-6 rounded-2xl flex items-center justify-between group hover:border-cyber-purple/30 hover:bg-white/5 transition-all border-white/10">
                <span className="text-sm font-bold uppercase tracking-wider">Automatización para clínicas</span>
                <ArrowRight className="w-4 h-4 text-cyber-purple group-hover:translate-x-1 transition-transform shrink-0" />
              </a>
              <a href="/blog/reducir-ausencias-clinicas-recordatorios-automaticos/" className="glass-card p-6 rounded-2xl flex items-center justify-between group hover:border-cyber-purple/30 hover:bg-white/5 transition-all border-white/10">
                <span className="text-sm font-bold uppercase tracking-wider">Reducir ausencias en clínicas</span>
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

export default BlogPostConfirmacionCitas;
