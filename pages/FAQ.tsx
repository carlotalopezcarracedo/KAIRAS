import React from 'react';
import { ArrowRight, ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CONTACT_EMAIL = 'carlota.kairas@gmail.com';

type FAQItem = {
  question: string;
  answer: string;
};

type FAQGroup = {
  eyebrow: string;
  title: string;
  intro: string;
  items: FAQItem[];
};

const FAQ_GROUPS: FAQGroup[] = [
  {
    eyebrow: 'Base',
    title: 'Sobre KAIRAS',
    intro: 'Lo esencial antes de hablar de herramientas, IA o automatizaciones concretas.',
    items: [
      {
        question: 'Que es KAIRAS?',
        answer:
          'KAIRAS es una marca de optimizacion operativa, automatizacion e IA aplicada para pymes de servicios. Ayuda a recuperar tiempo, reducir carga manual y ordenar procesos con sistemas utiles, no con tecnologia por espectaculo.',
      },
      {
        question: 'Para que tipo de empresas tiene mas sentido?',
        answer:
          'Trabajamos sobre todo con pymes de servicios: clinicas, academias, gimnasios, inmobiliarias, asesorias, despachos, reformas, instaladoras y servicios profesionales con alta carga operativa. El punto comun es que el negocio pierde tiempo en tareas repetidas, seguimiento manual o herramientas desconectadas.',
      },
      {
        question: 'KAIRAS vende software o herramientas cerradas?',
        answer:
          'No. El trabajo empieza entendiendo como funciona tu negocio. Despues se disena e implementa un sistema con las herramientas que encajen: calendario, email, CRM, WhatsApp, formularios, automatizaciones o IA. La herramienta es el medio, no el producto principal.',
      },
      {
        question: 'Necesito saber de IA o automatizacion para trabajar con KAIRAS?',
        answer:
          'No. La parte tecnica se traduce a decisiones operativas claras: que problema hay, que flujo conviene ordenar, que datos hacen falta, que se puede automatizar y donde debe intervenir una persona.',
      },
    ],
  },
  {
    eyebrow: 'Diagnostico',
    title: 'Como empezamos',
    intro: 'Antes de construir nada, revisamos donde se esta perdiendo tiempo y que merece prioridad.',
    items: [
      {
        question: 'Por donde se empieza una automatizacion?',
        answer:
          'Se empieza por un diagnostico operativo. Revisamos cuellos de botella, tareas repetitivas, volumen, impacto y facilidad de implantacion. La primera automatizacion suele ser la que recupera tiempo cada semana sin obligar al equipo a cambiarlo todo de golpe.',
      },
      {
        question: 'Que se revisa en el diagnostico?',
        answer:
          'Revisamos como entran los leads, como se atienden WhatsApp, email o formularios, que tareas se repiten, donde se pierde seguimiento, que datos estan dispersos y que herramientas ya usa el equipo. El objetivo es decidir el siguiente paso con criterio.',
      },
      {
        question: 'Hay que cambiar todas las herramientas actuales?',
        answer:
          'Normalmente no. KAIRAS intenta integrar sobre lo que ya funciona para reducir friccion de adopcion. Si una herramienta actual bloquea el proceso, se plantea una alternativa, pero no se cambia por cambiar.',
      },
      {
        question: 'Cuanto tarda en notarse una mejora?',
        answer:
          'Depende del proceso y del volumen real. En flujos acotados, como recordatorios, seguimiento comercial o respuestas frecuentes, el impacto puede empezar a verse en pocas semanas. Sistemas mas completos requieren mas fases, pruebas y ajustes.',
      },
    ],
  },
  {
    eyebrow: 'Sistemas',
    title: 'Que se puede automatizar',
    intro: 'Los casos mas habituales tienen que ver con atencion, agenda, CRM, seguimiento y datos.',
    items: [
      {
        question: 'Que procesos conviene automatizar primero?',
        answer:
          'Suelen tener prioridad los procesos repetidos y visibles: seguimiento de leads, respuestas frecuentes, agenda y citas, recordatorios, presupuestos, onboarding de clientes, registro en CRM, avisos internos y reporting operativo.',
      },
      {
        question: 'Que puede hacer un sistema de WhatsApp automatizado?',
        answer:
          'Puede responder preguntas frecuentes, filtrar conversaciones, clasificar leads, agendar citas, enviar recordatorios, registrar informacion en CRM y derivar al equipo humano cuando hace falta criterio o sensibilidad.',
      },
      {
        question: 'Como ayuda KAIRAS con CRM y seguimiento de clientes?',
        answer:
          'Ordenamos el pipeline, definimos etapas, activamos recordatorios por inactividad, automatizamos secuencias de seguimiento y registramos interacciones para que cada oportunidad tenga contexto, responsable y siguiente paso.',
      },
      {
        question: 'Que automatizaciones tienen sentido para clinicas?',
        answer:
          'En clinicas suelen aportar mucho las confirmaciones de cita, recordatorios previos, mensajes post-consulta, seguimiento de revisiones, reactivacion de pacientes y derivacion interna de incidencias con contexto completo.',
      },
    ],
  },
  {
    eyebrow: 'IA aplicada',
    title: 'Cuando usar IA y cuando no',
    intro: 'La IA entra cuando resuelve un problema concreto y tiene fuentes, limites y revision adecuados.',
    items: [
      {
        question: 'La IA sustituye al equipo?',
        answer:
          'No es el objetivo. KAIRAS usa IA para liberar al equipo de tareas repetitivas: clasificar, resumir, responder dudas frecuentes, preparar borradores o extraer datos. Las decisiones sensibles y el trato que requiere criterio humano siguen teniendo salida a persona.',
      },
      {
        question: 'En que casos tiene sentido aplicar IA en una pyme?',
        answer:
          'Tiene sentido cuando hay informacion repetida, preguntas frecuentes, documentos que revisar, leads que clasificar, reuniones que resumir o datos internos que cruzar. Si el proceso no esta claro, primero se ordena el proceso.',
      },
      {
        question: 'Como se evitan respuestas poco fiables?',
        answer:
          'Definiendo alcance, fuentes de informacion, criterios de respuesta, limites y reglas de derivacion. Donde hay riesgo, se disena revision humana, trazabilidad y pruebas con casos reales antes de desplegar.',
      },
      {
        question: 'Automatizacion e IA son lo mismo?',
        answer:
          'No. La automatizacion ejecuta pasos definidos; la IA ayuda cuando hay lenguaje, clasificacion, resumen o interpretacion dentro de limites. Muchas mejoras empiezan con automatizacion simple y solo incorporan IA si aporta valor real.',
      },
    ],
  },
  {
    eyebrow: 'Trabajo',
    title: 'Proceso, alcance y contacto',
    intro: 'Como se organiza el trabajo con KAIRAS y que puedes esperar despues de contactar.',
    items: [
      {
        question: 'Como es el proceso de implementacion?',
        answer:
          'El proceso habitual pasa por diagnostico, diseno del flujo, construccion, integraciones, pruebas, entrega, formacion y seguimiento de indicadores. La idea es construir por fases para validar antes de escalar.',
      },
      {
        question: 'Que recibo despues de contactar?',
        answer:
          'Recibes una revision del caso y una recomendacion concreta sobre el siguiente paso operativo: que conviene automatizar, por que, en que orden y que informacion haria falta para avanzar.',
      },
      {
        question: 'Trabajais solo en Galicia?',
        answer:
          'KAIRAS tiene foco especial en Galicia y pymes gallegas, pero tambien trabaja con empresas de servicios en Espana. El enfoque local ayuda cuando hace falta cercania y contexto operativo.',
      },
      {
        question: 'Cuanto cuesta automatizar procesos con KAIRAS?',
        answer:
          'Depende del alcance, herramientas, integraciones, volumen y nivel de soporte. KAIRAS no parte de paquetes genericos: primero se delimita el problema y despues se plantea una propuesta realista por fases.',
      },
    ],
  },
];

const QUICK_LINKS = [
  { title: 'Servicios', href: '/servicios/' },
  { title: 'Automatizacion de procesos', href: '/automatizacion-procesos/' },
  { title: 'WhatsApp automatizado', href: '/automatizacion-whatsapp-empresas/' },
  { title: 'CRM y seguimiento', href: '/crm-pymes-seguimiento-clientes/' },
  { title: 'Automatizacion de clinicas', href: '/automatizacion-clinicas/' },
  { title: 'Blog', href: '/blog/' },
];

const FAQ: React.FC = () => {
  return (
    <div className="relative min-h-[100svh]">
      <div className="hidden md:block fixed inset-0 grainy-overlay z-50 pointer-events-none" />
      <div className="fixed inset-0 mesh-gradient -z-10" />
      <Navbar />

      <main id="main-content">
        <section className="min-h-[70svh] px-6 pt-32 pb-20 relative overflow-hidden flex items-center">
          <div className="absolute top-0 right-0 w-[640px] h-[640px] bg-cyber-purple/10 blur-[130px] -z-10 rounded-full" />
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
              <HelpCircle className="w-4 h-4 text-cyber-purple" />
              <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-white/60">FAQ KAIRAS</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
              Preguntas frecuentes sobre automatizacion e IA para pymes
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 font-light max-w-3xl mx-auto leading-relaxed">
              Respuestas claras sobre como trabaja KAIRAS, que procesos se pueden ordenar y cuando tiene sentido
              aplicar automatizacion o IA en una empresa de servicios.
            </p>
          </div>
        </section>

        <section className="px-6 pb-16">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-4">
            {[
              {
                title: 'Problema primero',
                desc: 'Antes de elegir herramientas, identificamos donde se pierde tiempo y que impacto tendria resolverlo.',
              },
              {
                title: 'Sistemas utiles',
                desc: 'El objetivo no es sumar tecnologia, sino reducir carga manual, ordenar procesos y ganar control operativo.',
              },
              {
                title: 'Implementacion por fases',
                desc: 'Empezamos por un flujo con retorno claro y escalamos cuando el sistema ya esta probado.',
              },
            ].map((card) => (
              <div key={card.title} className="glass-card p-6 rounded-2xl border-white/10">
                <h2 className="text-sm font-black uppercase tracking-wider mb-3">{card.title}</h2>
                <p className="text-sm text-slate-400 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="max-w-5xl mx-auto space-y-12">
            {FAQ_GROUPS.map((group, groupIndex) => (
              <section key={group.title} aria-labelledby={`faq-group-${groupIndex}`}>
                <div className="mb-6">
                  <p className="text-xs font-bold tracking-[0.4em] uppercase text-cyber-purple mb-3">{group.eyebrow}</p>
                  <h2 id={`faq-group-${groupIndex}`} className="text-3xl sm:text-4xl font-black tracking-tighter uppercase mb-3">
                    {group.title}
                  </h2>
                  <p className="text-sm text-slate-500 leading-relaxed max-w-2xl">{group.intro}</p>
                </div>

                <div className="space-y-4">
                  {group.items.map((item, itemIndex) => (
                    <details
                      key={item.question}
                      className="group glass-card rounded-2xl border-white/10 open:border-cyber-purple/30 open:bg-white/[0.04] transition-all"
                      open={groupIndex === 0 && itemIndex === 0}
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-6 [&::-webkit-details-marker]:hidden">
                        <span className="text-base sm:text-lg font-black uppercase tracking-tight leading-tight">{item.question}</span>
                        <ChevronDown className="w-5 h-5 text-cyber-purple shrink-0 transition-transform group-open:rotate-180" />
                      </summary>
                      <div className="px-6 pb-6 -mt-2">
                        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">{item.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-slate-500 mb-8">Explora tambien</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {QUICK_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="glass-card p-6 rounded-2xl flex items-center justify-between gap-4 group hover:border-cyber-purple/30 hover:bg-white/5 transition-all border-white/10"
                >
                  <span className="text-sm font-bold uppercase tracking-wider">{link.title}</span>
                  <ArrowRight className="w-4 h-4 text-cyber-purple group-hover:translate-x-1 transition-transform shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-32">
          <div className="max-w-4xl mx-auto glass-card p-10 sm:p-12 rounded-[2rem] border-white/10 text-center">
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-cyber-purple mb-4">Siguiente paso</p>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tighter uppercase leading-tight mb-6">
              Si tu pregunta real es por donde empezar, empezamos por ahi.
            </h2>
            <p className="text-slate-400 font-light max-w-2xl mx-auto mb-8 leading-relaxed">
              Cuentanos como funciona tu negocio y revisamos que parte de la operativa puede recuperar tiempo
              antes, sin sobredimensionar el proyecto.
            </p>
            <a
              href="/contacto/"
              className="inline-flex items-center justify-center gap-3 bg-white text-black px-8 sm:px-10 py-5 rounded-xl font-black text-xs uppercase tracking-[0.2em] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 transition-all"
            >
              Enviar y revisar mi caso
              <ArrowRight className="w-4 h-4" />
            </a>
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

export default FAQ;
