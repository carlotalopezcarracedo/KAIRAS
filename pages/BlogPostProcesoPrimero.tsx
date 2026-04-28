import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CONTACT_EMAIL = 'carlota.kairas@gmail.com';

const BlogPostProcesoPrimero: React.FC = () => {
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
              {['Procesos', 'Priorizacion', 'Operativa'].map((tag) => (
                <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-cyber-purple bg-cyber-purple/10 border border-cyber-purple/20 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter uppercase leading-[0.95] mb-6">
              Como saber que proceso automatizar primero en tu empresa
            </h1>

            <p className="text-slate-500 text-xs font-mono mb-12">28 abril 2026 · 10 min de lectura</p>

            <div className="prose-kairas space-y-7 text-slate-300 text-base leading-relaxed font-light">
              <p className="text-lg text-slate-300 leading-relaxed">
                Si te preguntas por donde empezar, ya estas mejor que la mayoria.
                El error habitual no es "ir lento", es automatizar lo que suena moderno en lugar de automatizar lo que hoy te frena.
                Cuando eso pasa, se invierte tiempo y dinero y el negocio sigue igual de atascado.
              </p>

              <p>
                Elegir bien el primer proceso es una decision estrategica.
                Ese primer movimiento define si el equipo gana confianza y continuidad o si aparece rechazo porque la mejora no se nota.
                Por eso conviene usar criterio operativo, no entusiasmo tecnologico.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                La pregunta correcta no es "que se puede automatizar"
              </h2>

              <p>
                Casi todo se puede automatizar de una forma u otra.
                La pregunta util es otra: que proceso, si mejora, libera mas carga y mejora continuidad comercial en menos tiempo.
                Esa pregunta te obliga a mirar impacto real, no solo posibilidad tecnica.
              </p>

              <p>
                En la practica, tu primer proceso debe cumplir tres condiciones:
                ocurre con frecuencia,
                consume tiempo manual repetitivo,
                y su mejora tiene efecto directo en ingresos o servicio.
                Si falta una de esas tres, suele ser mala candidata para empezar.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Matriz simple para priorizar sin complicarte
              </h2>

              <p>
                Puedes tomar decisiones mucho mejores con una matriz de dos ejes:
                impacto en negocio y facilidad de implementacion.
                No hace falta un documento eterno; con una tabla sencilla y datos reales del dia a dia basta.
              </p>

              <h3 className="text-lg font-black uppercase tracking-wider text-white">Impacto alto + facilidad alta</h3>
              <p>
                Aqui suele estar el primer proceso.
                Ejemplos comunes: primera respuesta comercial, recordatorios de cita, seguimiento de propuestas, traspaso de datos entre canales.
              </p>

              <h3 className="text-lg font-black uppercase tracking-wider text-white">Impacto alto + facilidad media</h3>
              <p>
                Buena segunda fase.
                Requiere algo mas de diseno, pero ya con el primer caso funcionando el equipo lo adopta mejor.
              </p>

              <h3 className="text-lg font-black uppercase tracking-wider text-white">Impacto bajo + facilidad alta</h3>
              <p>
                Puede esperar.
                Son automatizaciones "bonitas" que ahorran algo de tiempo, pero no mueven indicadores clave.
              </p>

              <h3 className="text-lg font-black uppercase tracking-wider text-white">Impacto bajo + facilidad baja</h3>
              <p>
                Descartar por ahora.
                Si empiezas aqui, lo normal es desgaste del equipo y poca mejora percibida.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Cuatro criterios practicos para elegir el primer proceso
              </h2>

              <h3 className="text-lg font-black uppercase tracking-wider text-white">1. Volumen semanal real</h3>
              <p>
                Si pasa una vez al mes, no es prioridad.
                El primer proceso debe repetirse mucho: cuanto mas frecuencia, mas retorno del cambio.
              </p>

              <h3 className="text-lg font-black uppercase tracking-wider text-white">2. Coste de no hacerlo bien</h3>
              <p>
                Pregunta directa: que pierdes cuando ese proceso falla?
                Tiempo, leads, citas, cobros, experiencia cliente.
                Donde la perdida sea mayor, ahi esta la prioridad.
              </p>

              <h3 className="text-lg font-black uppercase tracking-wider text-white">3. Dependencia de una persona concreta</h3>
              <p>
                Si el proceso solo funciona cuando una persona esta encima, tienes riesgo operativo.
                Es una buena senal de proceso candidato para automatizar primero.
              </p>

              <h3 className="text-lg font-black uppercase tracking-wider text-white">4. Tiempo de implantacion razonable</h3>
              <p>
                El primer caso debe poder implementarse sin paralizar al equipo.
                Mejor una mejora visible en semanas que una gran reforma que nadie termina de adoptar.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Ejemplos de buen primer proceso en pymes de servicios
              </h2>

              <p>
                No hay receta unica, pero hay patrones recurrentes.
                En negocios con entrada continua de consultas, el primer proceso suele estar en atencion y seguimiento.
                En negocios con agenda, suele estar en confirmaciones y recordatorios.
                En negocios con propuestas, suele estar en secuencias de seguimiento comercial.
              </p>

              <p>
                Todos esos casos se conectan con la
                <a href="/automatizacion-procesos/" className="text-cyber-purple underline decoration-cyber-purple/50"> automatizacion de procesos</a>
                como pilar.
                No porque sea una etiqueta, sino porque ordena la ejecucion diaria y evita que el sistema dependa de urgencias.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Error que sale caro: automatizar herramientas, no procesos
              </h2>

              <p>
                Comprar una herramienta nueva no arregla un flujo confuso.
                Si no defines estados, responsables, tiempos y disparadores, solo cambias de interfaz.
                El caos sigue, pero con otra pantalla.
              </p>

              <p>
                Por eso tiene sentido alinear el primer paso con el contexto comercial y local de la empresa.
                En muchos casos, sobre todo en pymes de servicios en Galicia,
                conviene cruzar esa priorizacion con la realidad de mercado que trabajas en
                <a href="/automatizacion-empresas-galicia/" className="text-cyber-purple underline decoration-cyber-purple/50"> automatizacion para empresas en Galicia</a>:
                equipos ajustados, volumen variable y mucha dependencia de atencion directa.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Check-list para decidir en una tarde
              </h2>

              <p>
                Uno: lista 5 procesos que hoy consumen mas tiempo.
                Dos: mide frecuencia semanal y coste de fallo.
                Tres: marca cuales dependen de memoria humana.
                Cuatro: selecciona uno con impacto alto y ejecucion razonable.
                Cinco: define como mediras mejora en 30 dias.
              </p>

              <p>
                Si necesitas contexto completo antes de decidir, revisa tambien tus
                <a href="/servicios/" className="text-cyber-purple underline decoration-cyber-purple/50"> servicios prioritarios</a>
                y vincula la decision a una meta concreta:
                responder mas rapido, perder menos leads, reducir ausencias o bajar carga administrativa.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Como evitar bloqueos internos al empezar
              </h2>

              <p>
                El mejor proceso puede fracasar si la implantacion se comunica mal.
                Antes de tocar herramientas, explica al equipo tres cosas: que problema concreto se corrige,
                que cambia en su rutina y como se medira si funciona.
                Cuando estas tres respuestas son claras, la adopcion mejora mucho.
              </p>

              <p>
                Tambien ayuda definir un responsable operativo del piloto.
                No para centralizar todo, sino para mantener criterio unico durante la fase inicial.
                Sin esa figura, aparecen versiones distintas del mismo flujo y se vuelve a la improvisacion.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Ejemplo de priorizacion bien ejecutada
              </h2>

              <p>
                Imagina una pyme de servicios que recibe muchos contactos, pero tarda en responder y pierde propuestas.
                En vez de automatizar facturas primero, decide empezar por primera respuesta y seguimiento comercial.
                En pocas semanas consigue mas continuidad en conversaciones y mas visibilidad del pipeline.
                Con ese resultado, el equipo acepta mejor la segunda fase: integraciones internas y reportes.
              </p>

              <p>
                Este orden no es casual. Primero se interviene donde duele mas y donde el retorno se nota antes.
                Luego se amplian automatizaciones de soporte.
                Esa secuencia reduce riesgo y convierte la automatizacion en una disciplina operativa, no en un experimento aislado.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Cierre
              </h2>

              <p>
                El mejor primer proceso no es el mas avanzado.
                Es el que desbloquea operativa, mejora continuidad y da confianza al equipo para la siguiente fase.
                Si aciertas aqui, el resto de automatizaciones se vuelve mucho mas facil de priorizar y ejecutar.
              </p>
            </div>

            <div className="mt-16 pt-12 border-t border-white/10">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">Quieres que te ayudemos a elegir ese primer proceso con criterio de negocio?</p>
              <a
                href="/contacto/"
                className="inline-flex items-center justify-center gap-3 bg-white text-black px-10 py-5 rounded-xl font-black text-sm tracking-widest uppercase hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 transition-all"
              >
                Analizar mi primer proceso
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

export default BlogPostProcesoPrimero;
