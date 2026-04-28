import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CONTACT_EMAIL = 'carlota.kairas@gmail.com';

const BlogPostAusenciasClinicas: React.FC = () => {
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
              {['Clinicas', 'Recordatorios', 'Agenda'].map((tag) => (
                <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-cyber-purple bg-cyber-purple/10 border border-cyber-purple/20 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter uppercase leading-[0.95] mb-6">
              Como reducir ausencias en clinicas con recordatorios automaticos
            </h1>

            <p className="text-slate-500 text-xs font-mono mb-12">28 abril 2026 · 10 min de lectura</p>

            <div className="prose-kairas space-y-7 text-slate-300 text-base leading-relaxed font-light">
              <p className="text-lg text-slate-300 leading-relaxed">
                Una ausencia en agenda no es solo un hueco.
                Es tiempo del equipo perdido, una friccion para recepcion y, muchas veces, una continuidad asistencial que se debilita.
                Cuando esto se repite cada semana, la clinica entra en modo reactivo: confirmar, recolocar, llamar y apagar fuegos.
              </p>

              <p>
                El problema no se resuelve con mas llamadas manuales.
                Se resuelve con un sistema de confirmacion y recordatorio que funcione siempre,
                en el canal que el paciente realmente usa.
                En muchas clinicas ese canal es WhatsApp.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Por que se producen tantas ausencias aunque el equipo lo intente
              </h2>

              <p>
                Porque la confirmacion depende de tareas manuales y tiempos variables.
                Un dia se confirma todo. Otro dia hay saturacion y se queda a medias.
                Un paciente cambia de planes y no avisa. Otro no ve el email a tiempo.
                El resultado es una agenda con incertidumbre.
              </p>

              <p>
                Ademas, muchas clinicas no separan tipos de cita ni nivel de riesgo de ausencia.
                Se comunica igual a todos, cuando no todos los pacientes necesitan el mismo flujo.
                Eso genera ruido en unos casos y falta de insistencia en otros.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Que hace un sistema de recordatorios automaticos bien disenado
              </h2>

              <h3 className="text-lg font-black uppercase tracking-wider text-white">Confirma con antelacion util</h3>
              <p>
                Un recordatorio enviado con margen permite reaccionar: confirmar, reagendar o liberar hueco para otro paciente.
                El objetivo no es solo avisar. Es dar tiempo operativo a recepcion para reorganizar agenda.
              </p>

              <h3 className="text-lg font-black uppercase tracking-wider text-white">Reduce olvidos sin saturar mensajes</h3>
              <p>
                Demasiados avisos cansan. Muy pocos no llegan.
                El equilibrio suele estar en una secuencia corta y clara: recordatorio principal y, segun tipo de cita,
                un refuerzo en el mismo dia.
              </p>

              <h3 className="text-lg font-black uppercase tracking-wider text-white">Deja trazabilidad para tomar decisiones</h3>
              <p>
                No basta con enviar mensajes.
                Necesitas saber quien confirmo, quien no respondio y donde se concentran las ausencias.
                Sin ese dato, no puedes ajustar politica de agenda ni carga de recepcion.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Estructura recomendada para clinicas de servicios
              </h2>

              <p>
                Esta estructura funciona bien en la mayoria de centros pequenos y medianos:
              </p>

              <p>
                Paso 1: mensaje de confirmacion al registrar la cita.
                Paso 2: recordatorio con 24-48 horas de margen.
                Paso 3: refuerzo el mismo dia en citas de mayor riesgo.
                Paso 4: si no hay respuesta, alerta interna para accion del equipo.
              </p>

              <p>
                Esta secuencia puede adaptarse por especialidad, tipo de tratamiento y perfil de paciente.
                Lo importante es que quede definida como proceso, no como tarea improvisada.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Donde encaja WhatsApp y donde encaja el equipo humano
              </h2>

              <p>
                WhatsApp funciona muy bien para confirmaciones y cambios simples.
                No sustituye el trato clinico ni conversaciones sensibles.
                Por eso conviene diseñar el flujo con dos capas:
                automatizacion para lo repetitivo y derivacion humana cuando hace falta criterio.
              </p>

              <p>
                Esa combinacion suele dar mejores resultados que intentar resolver todo con llamadas manuales o con un bot rigido.
                Si quieres ver el marco tecnico de canal,
                puedes apoyarte en la pagina de
                <a href="/automatizacion-whatsapp-empresas/" className="text-cyber-purple underline decoration-cyber-purple/50"> automatizacion de WhatsApp para empresas</a>
                y adaptarlo a contexto clinico.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Como evitar que el sistema se quede en "enviar mensajes"
              </h2>

              <p>
                Un error frecuente es implementar recordatorios sin conectar datos.
                Si no registras respuestas ni estado de cita, sigues trabajando a ciegas.
                Por eso es clave unir agenda, mensajeria y seguimiento en un unico criterio operativo.
              </p>

              <p>
                Aqui entra la logica de
                <a href="/crm-pymes-seguimiento-clientes/" className="text-cyber-purple underline decoration-cyber-purple/50"> CRM y seguimiento de clientes</a>:
                no para burocratizar la clinica, sino para tener continuidad y medir donde se producen las ausencias.
                Cuando ese dato existe, puedes ajustar horarios, reforzar ciertos tramos y mejorar ocupacion.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Indicadores minimos para saber si mejora
              </h2>

              <p>
                Para no quedarse en sensaciones, define tres indicadores simples:
                porcentaje de citas confirmadas,
                porcentaje de ausencias sobre agenda total,
                y tiempo de reaccion cuando aparece un hueco.
              </p>

              <p>
                Con estos tres datos ya puedes comparar antes y despues.
                Si bajan las ausencias y mejora la capacidad de recolocar, el sistema esta funcionando.
                Si no mejora, toca revisar frecuencia, redaccion de mensajes y reglas de escalado.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Que cambia en la operativa de la clinica
              </h2>

              <p>
                Cuando el flujo esta bien resuelto, recepcion deja de ir siempre tarde.
                El equipo clinico trabaja con agenda mas estable.
                Los pacientes reciben instrucciones mas claras y consistentes.
                Y la direccion gana visibilidad para decidir con criterio, no con intuicion.
              </p>

              <p>
                En resumen: menos ausencias, menos carga manual y mejor continuidad asistencial.
                Esto conecta directo con el enfoque de
                <a href="/automatizacion-clinicas/" className="text-cyber-purple underline decoration-cyber-purple/50"> automatizacion para clinicas</a>,
                donde el objetivo no es meter tecnologia por meter,
                sino proteger tiempo operativo y calidad de servicio.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Nota sobre no-shows
              </h2>

              <p>
                En muchos entornos se usa el termino no-shows para hablar de ausencias.
                Da igual la etiqueta: el impacto operativo es el mismo.
                Lo importante es tener un sistema que prevenga olvidos y permita reaccionar rapido cuando una cita se cae.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Errores comunes que conviene evitar desde el inicio
              </h2>

              <p>
                Error uno: copiar mensajes de otro centro sin adaptar tono, especialidad y tipo de paciente.
                El recordatorio tiene que sonar a tu clinica y ser claro para tu operativa real.
              </p>

              <p>
                Error dos: automatizar confirmaciones, pero no definir que pasa cuando no hay respuesta.
                Sin regla de escalado, el sistema se queda corto justo en los casos de mayor riesgo.
              </p>

              <p>
                Error tres: medir solo \"mensajes enviados\".
                Lo que importa no es enviar, sino confirmar citas, reducir ausencias y mejorar capacidad de recolocar agenda.
                Si esos tres indicadores no mejoran, toca ajustar flujo, no enviar mas avisos.
              </p>

              <p>
                Un ajuste pequeno en el momento de envio puede mover mucho resultado.
                Por eso conviene revisar datos cada semana al principio y afinar rapido,
                en lugar de esperar meses para corregir una secuencia que ya sabias que no estaba cerrando bien.
              </p>
            </div>

            <div className="mt-16 pt-12 border-t border-white/10">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">Si tu clinica tiene huecos semanales por ausencias, podemos revisarlo contigo.</p>
              <a
                href="/contacto/"
                className="inline-flex items-center justify-center gap-3 bg-white text-black px-10 py-5 rounded-xl font-black text-sm tracking-widest uppercase hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 transition-all"
              >
                Revisar ausencias de mi clinica
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

export default BlogPostAusenciasClinicas;
