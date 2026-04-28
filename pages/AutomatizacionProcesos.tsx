import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CONTACT_EMAIL = 'carlota.kairas@gmail.com';

const RELATED = [
  { title: 'Automatización de WhatsApp', href: '/automatizacion-whatsapp-empresas/' },
  { title: 'Seguimiento de clientes', href: '/automatizacion-seguimiento-clientes/' },
  { title: 'Empresas en Galicia', href: '/automatizacion-ia-empresas-galicia/' },
];

const processes = [
  {
    title: 'Respuesta a leads y primeros contactos',
    desc: 'La primera respuesta a alguien interesado en tus servicios es la que más pesa en la decisión de quedarse o irse. Configuramos respuestas automáticas que llegan en segundos, adaptadas al canal y al tipo de consulta. Sin sonar a bot frío.',
  },
  {
    title: 'Recordatorios de cita y seguimiento de clientes',
    desc: 'Un recordatorio automático por WhatsApp o email reduce cancelaciones de última hora sin que nadie tenga que enviarlos uno a uno. En clínicas, academias y centros de cualquier tipo, este suele ser el primer proceso que se automatiza.',
  },
  {
    title: 'Seguimiento de leads que no responden',
    desc: 'El seguimiento manual no se hace. Siempre hay algo más urgente. Montamos secuencias que se activan cuando un lead lleva días sin actividad, sin que tú tengas que estar encima ni recordarlo.',
  },
  {
    title: 'Comunicaciones internas repetitivas',
    desc: 'Avisos al equipo, notificaciones cuando ocurre algo relevante, resúmenes de fin de día. Lo que ahora necesita que alguien lo ejecute o lo compruebe puede configurarse para que ocurra en el momento correcto, solo.',
  },
  {
    title: 'Herramientas que no hablan entre sí',
    desc: 'CRM por un lado. Formulario de contacto por otro. WhatsApp por otro. Alguien copiando y pegando entre aplicaciones porque no están conectadas. Conectamos lo que ya usas para que la información fluya sola.',
  },
  {
    title: 'Presupuestos y documentos automáticos',
    desc: 'El cliente rellena un formulario. El sistema genera el documento y lo envía en segundos, sin intervención de nadie del equipo.',
  },
];

const signals = [
  'Se repite más de tres veces por semana con los mismos pasos.',
  'Siempre lo hace la misma persona, y si falta, el proceso se para.',
  'La información que genera acaba siempre en el mismo sitio: un email, una hoja, un WhatsApp.',
  'Sigue una lógica predecible: si ocurre A, siempre hace falta B.',
  'No requiere criterio especial para ejecutarse: cualquiera con instrucciones claras podría hacerlo.',
];

const steps = [
  {
    n: '01',
    title: 'Entendemos cómo funciona tu operativa',
    desc: 'Antes de proponer nada, analizamos qué herramientas usas, qué hace tu equipo día a día, dónde se acumula el trabajo y dónde se pierde información. Sin este diagnóstico, cualquier automatización es un parche.',
  },
  {
    n: '02',
    title: 'Identificamos qué merece automatizarse primero',
    desc: 'No todo se automatiza a la vez. Priorizamos los procesos que más tiempo consumen, los que más impacto tienen en la experiencia de tus clientes y los que menos riesgo tienen de tocar algo que ya funciona bien.',
  },
  {
    n: '03',
    title: 'Montamos el flujo adaptado a tu negocio',
    desc: 'No usamos plantillas genéricas. El flujo de una clínica que gestiona citas no es el mismo que el de una inmobiliaria con leads entrantes. Diseñamos y configuramos partiendo de cómo trabajas tú.',
  },
  {
    n: '04',
    title: 'Lo probamos contigo antes de dejarlo solo',
    desc: 'Antes de funcionar en modo real, revisamos todos los casos de uso, comprobamos que los mensajes tienen el tono correcto y ajustamos lo que no encaje. No dejamos nada funcionando que no hayamos visto funcionar bien primero.',
  },
  {
    n: '05',
    title: 'Seguimiento después de la implementación',
    desc: 'No desaparecemos cuando el sistema está montado. Revisamos que funciona durante las primeras semanas y ajustamos si algo no está saliendo como esperábamos.',
  },
];

const faqs = [
  {
    q: '¿Hace falta cambiar todas las herramientas que ya uso?',
    a: 'En la mayoría de los casos, no. Trabajamos con las herramientas que ya tienes o añadimos las mínimas necesarias para conectar lo que ya existe. El objetivo es simplificar, no añadir complejidad nueva.',
  },
  {
    q: '¿Cuánto tiempo tarda en estar funcionando?',
    a: 'Depende del proceso. Los flujos más habituales —respuesta a leads, recordatorios de cita, seguimiento automático— suelen estar funcionando en dos o tres semanas desde el diagnóstico. Procesos más complejos pueden tardar más.',
  },
  {
    q: '¿Funciona para empresas pequeñas?',
    a: 'Funciona especialmente bien para empresas pequeñas, donde una persona hace el trabajo de tres. No hace falta un equipo grande: hace falta tener tareas repetitivas, y esas existen en cualquier negocio desde el primer empleado.',
  },
  {
    q: '¿Qué pasa si algo falla después de implementarlo?',
    a: 'Los sistemas automáticos también pueden fallar. Por eso incluimos un periodo de seguimiento. Si algo deja de funcionar, lo detectamos y lo corregimos. Y te explicamos cómo funciona para que no dependas de nosotros para el mantenimiento básico.',
  },
];

const AutomatizacionProcesos: React.FC = () => {
  return (
    <div className="relative min-h-[100svh]">
      <div className="hidden md:block fixed inset-0 grainy-overlay z-50 pointer-events-none" />
      <div className="fixed inset-0 mesh-gradient -z-10" />
      <Navbar />

      <main id="main-content">

        {/* Hero */}
        <section className="min-h-[90svh] px-6 pt-32 pb-20 relative overflow-hidden flex items-center">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyber-purple/10 blur-[130px] -z-10 rounded-full" />
          <div className="max-w-4xl mx-auto text-center w-full">
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-cyber-purple mb-6">
              <a href="/" className="hover:text-white transition-colors">KAIRAS</a>
              <span className="mx-2 opacity-40">/</span>
              Automatización de procesos
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
              Automatización de procesos para pymes:{' '}
              <span className="text-cyber-purple italic">deja de repetir lo que ya puede ir solo</span>
            </h1>
            <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto mb-4 leading-relaxed">
              Hay tareas en tu negocio que ocurren todos los días de la misma manera. Siempre alguien dedicando tiempo a lo que debería ir solo.
            </p>
            <p className="text-lg text-white/50 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
              Identificamos esas tareas, las configuramos para que ocurran sin intervención manual y te devolvemos tu tiempo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contacto" className="inline-flex items-center justify-center bg-white text-black px-10 py-5 rounded-xl font-black text-sm tracking-widest uppercase hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 transition-all">
                Analizamos dónde estás perdiendo tiempo
              </a>
              <a href="/" className="glass-card inline-flex items-center justify-center gap-2 px-10 py-5 rounded-xl font-black text-sm tracking-widest uppercase border-white/10 hover:border-cyber-purple/50 transition-all hover:bg-white/5">
                Volver al inicio
              </a>
            </div>
          </div>
        </section>

        {/* What it means */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs font-bold tracking-[0.4em] uppercase text-cyber-purple mb-4">Qué significa</p>
                <h2 className="text-4xl sm:text-5xl font-black tracking-tighter uppercase mb-8 leading-tight">
                  Automatizar un proceso no es cambiar todas tus herramientas
                </h2>
                <p className="text-lg text-slate-400 font-light leading-relaxed mb-6">
                  Es identificar un patrón que se repite en tu operativa —siempre el mismo tipo de acción, siempre el mismo desencadenante— y configurarlo para que ocurra solo cuando tiene que ocurrir.
                </p>
                <p className="text-lg text-slate-400 font-light leading-relaxed mb-6">
                  Cuando llega un lead: que reciba respuesta en minutos, no al día siguiente. Cuando se confirma una cita: que el cliente reciba el recordatorio sin que nadie lo envíe. Cuando un lead lleva días sin actividad: que el sistema lo detecte y actúe.
                </p>
                <p className="text-base text-white/40 font-light leading-relaxed">
                  No elimina el trabajo de tu equipo. Libera a tu equipo de lo mecánico para que haga lo que solo una persona puede hacer.
                </p>
              </div>
              <div className="space-y-4">
                <div className="glass-card p-6 rounded-2xl border-white/10">
                  <p className="text-xs font-bold tracking-[0.3em] uppercase text-cyber-purple mb-2">La diferencia</p>
                  <p className="text-sm text-slate-400 leading-relaxed">Automatizar no es digitalizar. Digitalizar es pasar de papel a pantalla. Automatizar es que la pantalla haga el trabajo sola.</p>
                </div>
                <div className="glass-card p-6 rounded-2xl border-white/10">
                  <p className="text-xs font-bold tracking-[0.3em] uppercase text-cyber-purple mb-2">El resultado</p>
                  <p className="text-sm text-slate-400 leading-relaxed">Menos dependencia de personas concretas. Menos cosas que se hacen solo si alguien se acuerda. Más procesos que funcionan aunque tú no estés mirando.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Processes that can go automatic */}
        <section className="py-24 px-6 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-cyber-purple mb-4">Qué puede ir solo</p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter uppercase mb-6 leading-tight max-w-3xl">
              Los procesos que más tiempo consumen en pymes de servicios
            </h2>
            <p className="text-lg text-slate-400 font-light mb-16 max-w-2xl leading-relaxed">
              No todo merece automatizarse de golpe. Pero hay patrones que se repiten en casi todos los negocios de servicios y que tienen un retorno inmediato cuando se automatizan bien.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processes.map((item) => (
                <div key={item.title} className="glass-card p-8 rounded-3xl flex flex-col gap-4 hover:bg-white/5 hover:-translate-y-1 transition-all border-white/10">
                  <h3 className="text-base font-bold uppercase tracking-wider text-white">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mid CTA */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-slate-400 font-light mb-6">¿Reconoces alguno de estos procesos en tu negocio?</p>
            <a
              href="/#contacto"
              className="inline-flex items-center justify-center gap-3 bg-white text-black px-10 py-5 rounded-xl font-black text-sm tracking-widest uppercase hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 transition-all"
            >
              Analizamos dónde estás perdiendo tiempo
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Signals */}
        <section className="py-24 px-6 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-xs font-bold tracking-[0.4em] uppercase text-cyber-purple mb-4">Cómo saberlo</p>
                <h2 className="text-4xl sm:text-5xl font-black tracking-tighter uppercase mb-8 leading-tight">
                  Señales de que un proceso debería ir solo
                </h2>
                <p className="text-lg text-slate-400 font-light leading-relaxed mb-8">
                  Antes de proponer nada, trabajamos desde el diagnóstico. Estas son las señales que indican que un proceso es candidato claro a automatizarse:
                </p>
                <p className="text-base text-white/40 font-light leading-relaxed">
                  Si hay muchas variaciones o el proceso requiere criterio propio cada vez, puede que necesite estructura antes que automatización. Eso también lo trabajamos: primero ordenamos, después automatizamos.
                </p>
              </div>
              <div className="space-y-4">
                {signals.map((text, i) => (
                  <div key={i} className="glass-card p-6 rounded-2xl flex items-start gap-4 border-white/10 hover:bg-white/5 transition-all">
                    <span className="w-6 h-6 rounded-full border border-cyber-purple/40 bg-cyber-purple/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[9px] font-mono text-cyber-purple">{i + 1}</span>
                    </span>
                    <p className="text-sm text-slate-300 leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How we work */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-xs font-bold tracking-[0.4em] uppercase text-cyber-purple mb-4">Cómo trabajamos</p>
                <h2 className="text-4xl sm:text-5xl font-black tracking-tighter uppercase mb-8 leading-tight">
                  No llegamos con una solución.<br />Llegamos con preguntas.
                </h2>
                <p className="text-lg text-slate-400 font-light leading-relaxed mb-8">
                  Antes de tocar nada, entendemos cómo funciona tu operativa. Sin este paso, cualquier automatización es un parche que puede generar más problemas de los que resuelve.
                </p>
                <a href="/#contacto" className="inline-flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider hover:text-cyber-purple transition-colors">
                  Solicita un diagnóstico operativo
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="space-y-8">
                {steps.map((step) => (
                  <div key={step.n} className="flex gap-6 items-start">
                    <div className="w-8 h-8 rounded-full border border-cyber-purple/40 bg-cyber-purple/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[9px] font-mono text-cyber-purple tracking-widest">{step.n}</span>
                    </div>
                    <div>
                      <h3 className="text-base font-bold uppercase tracking-wider mb-2">{step.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6 bg-black/30">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-cyber-purple mb-4">Preguntas frecuentes</p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter uppercase mb-12 leading-tight">
              Lo que más preguntan antes de empezar
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="glass-card p-8 rounded-3xl border-white/10">
                  <h3 className="text-base font-bold uppercase tracking-wider mb-4 text-white">{faq.q}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related pages */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-slate-500 mb-8">Explora también</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {RELATED.map((page) => (
                <a
                  key={page.href}
                  href={page.href}
                  className="glass-card p-6 rounded-2xl flex items-center justify-between group hover:border-cyber-purple/30 hover:bg-white/5 transition-all border-white/10"
                >
                  <span className="text-sm font-bold uppercase tracking-wider">{page.title}</span>
                  <ArrowRight className="w-4 h-4 text-cyber-purple group-hover:translate-x-1 transition-transform shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl lg:text-6xl font-black tracking-tighter uppercase mb-6 leading-tight">
              Tu negocio tiene procesos que llevan meses haciéndose a mano.
            </h2>
            <p className="text-xl text-slate-400 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
              El momento de analizarlos es ahora, antes de que sigan costando tiempo que podrías usar en otra cosa.
            </p>
            <a
              href="/#contacto"
              className="inline-flex items-center justify-center gap-3 bg-white text-black px-12 py-6 rounded-xl font-black text-sm tracking-widest uppercase hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 transition-all"
            >
              Analizamos dónde estás perdiendo tiempo
              <ArrowRight className="w-5 h-5" />
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

export default AutomatizacionProcesos;
