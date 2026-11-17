import React, { type ReactNode } from 'react';
import BlogPostLayout from '../components/BlogPostLayout';

type Article = {
  tags: string[];
  title: string;
  dateLabel: string;
  readTime: string;
  ctaEyebrow: string;
  ctaLabel: string;
  relatedResources: { href: string; label: string }[];
  body: ReactNode;
};

const linkClass = 'text-cyber-purple underline decoration-cyber-purple/50';
const headingClass = 'text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4';
const questionClass = 'text-lg font-black text-white pt-2';
const listClass = 'space-y-2 pl-4 border-l border-cyber-purple/30';
const answerClass = 'rounded-xl border border-cyber-purple/25 bg-cyber-purple/10 p-5 text-slate-200';
const tableWrapClass = 'overflow-x-auto rounded-xl border border-white/10 bg-white/[0.03]';
const tableClass = 'w-full min-w-[640px] text-sm';
const thClass = 'px-4 py-3 text-left font-black uppercase tracking-widest text-white border-b border-white/10';
const tdClass = 'px-4 py-3 align-top border-b border-white/5 text-slate-300';

const ARTICLES: Record<string, Article> = {
  'blog-comparativa-atencion-ia': {
    tags: ['Atención', 'IA', 'Comparativa'],
    title: 'Comparativa de soluciones de automatización IA para atención al cliente',
    dateLabel: '24 agosto 2026',
    readTime: '10 min de lectura',
    ctaEyebrow: 'Tu equipo responde mucho, pero aun así se escapan consultas?',
    ctaLabel: 'Ordenar mi atención',
    relatedResources: [
      { href: '/blog/chatbot-ia-atencion-cliente-pymes/', label: 'Chatbot con IA' },
      { href: '/automatizacion-whatsapp-empresas/', label: 'Automatización WhatsApp' },
    ],
    body: (
      <>
        <p className="text-lg text-slate-300 leading-relaxed">
          Una comparativa de soluciones de automatización IA para atención al cliente debe empezar por una idea
          sencilla: no todas las consultas necesitan un chatbot. Algunas necesitan una respuesta rápida, otras un
          resumen para el equipo, otras una tarea en el CRM y otras una persona que decida.
        </p>

        <p>
          En pymes de servicios, el error habitual es elegir una herramienta antes de entender el tipo de atención
          que se quiere ordenar. Una clínica, una academia o una asesoría no necesitan "poner IA" en todos sus
          mensajes. Necesitan saber que entra, que puede resolverse solo, que debe escalarse y donde queda registrado.
        </p>

        <h2 className={headingClass}>¿Qué solución de automatización IA para atención al cliente necesita una pyme?</h2>

        <p className={answerClass}>
          La mejor solución de automatización IA para atención al cliente depende del punto de fricción. Si el
          problema son preguntas repetidas, encaja un chatbot. Si el problema es priorizar y resumir, encaja un
          asistente interno. Si el problema es perder seguimiento, lo importante es conectar WhatsApp, email o web
          con CRM y tareas.
        </p>

        <p>
          Esta pieza actúa como mapa. Si quieres profundizar en una opción concreta, tienes guias específicas sobre
          {' '}<a href="/blog/chatbot-ia-atencion-cliente-pymes/" className={linkClass}>chatbot con IA para atención al cliente</a>,
          {' '}<a href="/blog/asistente-ia-atencion-cliente-pymes/" className={linkClass}>asistente de IA para atención al cliente</a>
          y <a href="/automatizacion-whatsapp-empresas/" className={linkClass}>automatización de WhatsApp para empresas</a>.
        </p>

        <h2 className={headingClass}>Comparativa rápida de soluciones</h2>

        <div className={tableWrapClass}>
          <table className={tableClass}>
            <thead>
              <tr>
                <th className={thClass}>Solución</th>
                <th className={thClass}>Mejor para</th>
                <th className={thClass}>Riesgo principal</th>
                <th className={thClass}>Cuando elegirla</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={tdClass}>Chatbot con IA</td>
                <td className={tdClass}>Preguntas frecuentes, primer filtro y disponibilidad básica.</td>
                <td className={tdClass}>Responder sin contexto o sin escalado humano claro.</td>
                <td className={tdClass}>Cuando hay volumen repetido y respuestas aprobadas.</td>
              </tr>
              <tr>
                <td className={tdClass}>Asistente interno</td>
                <td className={tdClass}>Resumir conversaciones, clasificar urgencia y preparar respuestas.</td>
                <td className={tdClass}>Que el equipo confie demasiado en una sugerencia no revisada.</td>
                <td className={tdClass}>Cuando la decisión sigue siendo humana, pero falta contexto.</td>
              </tr>
              <tr>
                <td className={tdClass}>WhatsApp automatizado</td>
                <td className={tdClass}>Confirmaciones, recordatorios, preguntas iniciales y derivación.</td>
                <td className={tdClass}>Molestar al cliente con mensajes fríos o demasiado largos.</td>
                <td className={tdClass}>Cuando el canal principal de entrada ya es WhatsApp.</td>
              </tr>
              <tr>
                <td className={tdClass}>CRM con tareas</td>
                <td className={tdClass}>No perder leads, asignar responsables y medir seguimiento.</td>
                <td className={tdClass}>Comprar CRM sin definir el proceso comercial.</td>
                <td className={tdClass}>Cuando hay oportunidades que se quedan sin continuidad.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className={headingClass}>Chatbot, asistente o CRM: como decidir</h2>

        <p>
          Si la consulta se puede responder con información aprobada y poco riesgo, un chatbot puede ayudar. Por
          ejemplo: horarios, ubicación, pasos previos, documentación necesaria o estado de una solicitud.
        </p>

        <p>
          Si la consulta requiere leer contexto, resumir lo ocurrido y proponer una respuesta, suele encajar mejor
          un asistente interno. El asistente no habla por la empresa: prepara el trabajo para que el equipo responda
          con más rapidez y menos carga manual.
        </p>

        <p>
          Si el problema no es contestar, sino hacer seguimiento, la prioridad no es el bot. La prioridad es un
          sistema de <a href="/crm-pymes-seguimiento-clientes/" className={linkClass}>CRM y seguimiento de clientes</a>
          donde cada oportunidad tenga estado, responsable y siguiente paso.
        </p>

        <h2 className={headingClass}>Casos útiles por tipo de negocio</h2>

        <ul className={listClass}>
          <li>Clínica: preguntas frecuentes, recordatorios, solicitud de datos previos y escalado a recepción.</li>
          <li>Academia: información sobre plazas, horarios, matrícula y seguimiento de familias interesadas.</li>
          <li>Inmobiliaria: clasificación de leads por zona, presupuesto, urgencia y tipo de inmueble.</li>
          <li>Asesoría: recepción de documentos, avisos de vencimiento y resumen de solicitudes repetidas.</li>
        </ul>

        <p>
          En todos los casos, conviene separar respuesta automática de decisión. Un mensaje puede salir solo si es
          simple y aprobado. Una decisión comercial, sanitaria, legal o sensible debe pasar por una persona.
        </p>

        <h2 className={headingClass}>Errores que reducen confianza</h2>

        <p>
          El primer error es automatizar respuestas antes de definir límites. El segundo es prometer disponibilidad
          total sin tener a nadie revisando excepciones. El tercero es no registrar nada: el cliente recibe respuesta,
          pero el equipo no sabe que debe hacer después.
        </p>

        <p>
          Si ya has tenido dudas con el tono, revisa también la guía sobre
          {' '}<a href="/blog/mensajes-automaticos-clientes-cuando-ayudan-molestan/" className={linkClass}>mensajes automáticos a clientes</a>.
          La rapidez ayuda solo si mantiene claridad y trato humano.
        </p>

        <h2 className={headingClass}>Preguntas frecuentes</h2>

        <h3 className={questionClass}>¿Qué es mejor para atención al cliente: chatbot o asistente de IA?</h3>
        <p>
          Un chatbot es mejor cuando la empresa necesita responder preguntas repetidas con respuestas cerradas.
          Un asistente de IA es mejor cuando el equipo necesita resumir, clasificar o preparar respuestas antes de
          decidir. En muchas pymes, la combinación correcta es chatbot para lo simple y asistente interno para lo
          que requiere criterio.
        </p>

        <h3 className={questionClass}>¿La automatización IA puede atender clientes sin personas?</h3>
        <p>
          Puede resolver una parte de la atención, pero no debería sustituir completamente a las personas. Las
          quejas, excepciones, precios especiales, datos sensibles y decisiones comerciales importantes necesitan
          revisión humana para proteger la confianza y evitar errores.
        </p>

        <h3 className={questionClass}>¿Cuál es el primer paso para automatizar la atención al cliente?</h3>
        <p>
          El primer paso es listar las consultas repetidas, separar las que pueden responderse con una regla clara
          y decidir donde debe quedar registrado cada contacto. Después se elige la herramienta: WhatsApp, chatbot,
          asistente interno o CRM.
        </p>
      </>
    ),
  },
  'blog-ia-local-procesos': {
    tags: ['IA local', 'Datos', 'Procesos'],
    title: 'IA local para automatización de procesos: cuando proteger datos cambia el diseño',
    dateLabel: '24 agosto 2026',
    readTime: '9 min de lectura',
    ctaEyebrow: 'Automatizas con documentos o datos delicados?',
    ctaLabel: 'Revisar mis datos',
    relatedResources: [
      { href: '/blog/seguridad-datos-automatizacion-ia-pymes/', label: 'Seguridad de datos' },
      { href: '/blog/preparar-datos-empresa-automatizar-ia/', label: 'Preparar datos' },
    ],
    body: (
      <>
        <p className="text-lg text-slate-300 leading-relaxed">
          La IA local para automatización de procesos tiene sentido cuando una pyme necesita interpretar documentos,
          mensajes o datos internos sin enviar toda la información a servicios externos. No es la opción más simple
          para todos los casos, pero puede cambiar el diseño cuando hay privacidad, control o cumplimiento en juego.
        </p>

        <p>
          Muchas automatizaciones con IA se montan conectando una API externa. Eso puede ser correcto para tareas
          de bajo riesgo. Pero si el flujo toca historiales, contratos, expedientes, datos financieros o información
          sensible de clientes, conviene detenerse antes de conectar otra herramienta.
        </p>

        <h2 className={headingClass}>¿Qué es IA local aplicada a automatización?</h2>

        <p className={answerClass}>
          IA local es el uso de modelos o sistemas de inteligencia artificial ejecutados en infraestructura
          controlada por la empresa o por su proveedor técnico, en lugar de enviar cada consulta a una plataforma
          externa. En automatización, se usa para clasificar, resumir o extraer información manteniendo más control
          sobre los datos.
        </p>

        <p>
          No hay que convertir la IA local en una moda. A veces una API externa bien configurada, con permisos,
          minimización de datos y registros claros, es suficiente. Otras veces, el riesgo de exponer información
          hace que merezca la pena revisar opciones más controladas.
        </p>

        <h2 className={headingClass}>IA local vs IA en la nube para procesos de empresa</h2>

        <div className={tableWrapClass}>
          <table className={tableClass}>
            <thead>
              <tr>
                <th className={thClass}>Criterio</th>
                <th className={thClass}>IA local</th>
                <th className={thClass}>IA en la nube</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={tdClass}>Control de datos</td>
                <td className={tdClass}>Mayor control sobre donde se procesa la información.</td>
                <td className={tdClass}>Depende del proveedor, contrato, region y configuración.</td>
              </tr>
              <tr>
                <td className={tdClass}>Puesta en marcha</td>
                <td className={tdClass}>Más técnica y normalmente más lenta.</td>
                <td className={tdClass}>Más rápida para pilotos y casos simples.</td>
              </tr>
              <tr>
                <td className={tdClass}>Calidad del modelo</td>
                <td className={tdClass}>Puede ser suficiente para tareas acotadas y datos internos.</td>
                <td className={tdClass}>Suele ofrecer modelos más capaces y actualizados.</td>
              </tr>
              <tr>
                <td className={tdClass}>Mantenimiento</td>
                <td className={tdClass}>Exige supervisión técnica y control de rendimiento.</td>
                <td className={tdClass}>El proveedor gestiona gran parte de la infraestructura.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className={headingClass}>Cuándo una pyme debería valorar IA local</h2>

        <p>
          No todas las pymes necesitan IA local. Pero hay señales claras para considerarla: documentos sensibles,
          contratos con datos personales, información sanitaria, expedientes legales, datos financieros o procesos
          donde no se quiere enviar el contenido completo fuera del entorno controlado.
        </p>

        <ul className={listClass}>
          <li>Una clínica quiere resumir documentos sin exponer datos de pacientes más de lo necesario.</li>
          <li>Un despacho quiere clasificar expedientes manteniendo trazabilidad y control.</li>
          <li>Una asesoría quiere revisar documentos internos sin copiar información en herramientas sueltas.</li>
          <li>Una empresa de servicios quiere analizar partes, incidencias o contratos con reglas propias.</li>
        </ul>

        <p>
          Este análisis debe conectarse con la guía de
          {' '}<a href="/blog/seguridad-datos-automatizacion-ia-pymes/" className={linkClass}>seguridad de datos en automatizaciones con IA</a>,
          porque la arquitectura técnica solo tiene sentido si el proceso ya define permisos, responsables y límites.
        </p>

        <h2 className={headingClass}>La decisión no es solo técnica</h2>

        <p>
          Una automatización con IA local puede parecer más segura, pero si nadie controla accesos, versionado,
          errores o revisiones, el riesgo sigue existiendo. La seguridad no depende solo de donde se ejecuta la IA.
          Depende de que datos entran, que datos salen y quien puede ver cada resultado.
        </p>

        <p>
          Antes de elegir arquitectura, prepara fuentes y reglas. La guía sobre
          {' '}<a href="/blog/preparar-datos-empresa-automatizar-ia/" className={linkClass}>preparar los datos antes de automatizar con IA</a>
          ayuda a ordenar esa base.
        </p>

        <h2 className={headingClass}>Casos donde la nube sigue teniendo sentido</h2>

        <p>
          Para clasificar consultas comerciales, resumir formularios sin datos sensibles, generar borradores
          internos o crear ayudas de productividad, una solución en la nube bien configurada puede ser suficiente.
          La clave es no enviar más información de la necesaria.
        </p>

        <p>
          También puede ser buena opción para un
          {' '}<a href="/blog/piloto-automatizacion-ia-pymes/" className={linkClass}>proyecto piloto de automatización con IA</a>,
          siempre que el piloto use datos anonimizados o de bajo riesgo. Primero se prueba valor. Después se decide
          si hace falta una arquitectura más controlada.
        </p>

        <h2 className={headingClass}>Preguntas frecuentes</h2>

        <h3 className={questionClass}>¿La IA local es siempre más segura?</h3>
        <p>
          No siempre. La IA local puede dar más control sobre el procesamiento, pero sigue necesitando permisos,
          registros, mantenimiento y revisión. Un sistema local mal gestionado puede ser menos seguro que una
          solución externa bien configurada.
        </p>

        <h3 className={questionClass}>¿Qué procesos encajan mejor con IA local?</h3>
        <p>
          Encajan mejor los procesos con documentos internos, datos sensibles o información que no conviene enviar
          completa a terceros. Gestión documental, expedientes, partes técnicos, contratos y datos de clientes son
          casos donde merece la pena estudiarlo.
        </p>

        <h3 className={questionClass}>¿Cómo empezar sin sobredimensionar el proyecto?</h3>
        <p>
          Empieza por clasificar los datos por riesgo: bajo, medio y alto. Automatiza primero un tramo pequeño con
          datos de bajo riesgo o anonimizados. Si el valor es claro y el proceso toca información sensible, entonces
          revisa IA local o una arquitectura más controlada.
        </p>

        <p>
          Si el proceso incluye documentos, también conviene leer
          {' '}<a href="/blog/gestion-documental-ia-automatizacion-pymes/" className={linkClass}>gestión documental con IA</a>.
          Muchas decisiones de IA local empiezan ahí: en saber que documentos existen, quien los usa y que parte se
          puede automatizar sin perder control.
        </p>
      </>
    ),
  },
  'blog-tareas-vs-procesos-ia': {
    tags: ['Tareas', 'Procesos', 'IA'],
    title: 'Automatización de tareas con IA vs procesos: que necesita tu pyme',
    dateLabel: '24 agosto 2026',
    readTime: '9 min de lectura',
    ctaEyebrow: 'Estas automatizando parches o procesos completos?',
    ctaLabel: 'Elegir primer proceso',
    relatedResources: [
      { href: '/blog/automatizacion-tareas-administrativas-ia-pymes/', label: 'Tareas administrativas' },
      { href: '/automatizacion-procesos/', label: 'Automatización de procesos' },
    ],
    body: (
      <>
        <p className="text-lg text-slate-300 leading-relaxed">
          La automatización de tareas con IA ayuda cuando una acción concreta se repite: clasificar un email,
          resumir un documento, crear una tarea o preparar una respuesta. La automatización de procesos va un paso
          más allá: conecta varias tareas para que un trabajo avance con responsables, estados y control.
        </p>

        <p>
          Esta diferencia importa porque muchas pymes empiezan automatizando pequeñas tareas y después descubren que
          el cuello de botella sigue igual. La herramienta hizo algo, pero el proceso completo continua dependiendo
          de memoria, mensajes sueltos y hojas que nadie actualiza.
        </p>

        <h2 className={headingClass}>¿Cuál es la diferencia entre automatizar tareas con IA y automatizar procesos?</h2>

        <p className={answerClass}>
          Automatizar una tarea con IA significa resolver una acción puntual, como resumir un email o extraer datos
          de una factura. Automatizar un proceso significa ordenar una secuencia completa: entrada, decisión, tarea,
          responsable, seguimiento y cierre. Una pyme suele necesitar tareas para empezar y procesos para sostener
          el cambio.
        </p>

        <p>
          Si quieres una base práctica sobre tareas concretas, revisa
          {' '}<a href="/blog/automatizacion-tareas-administrativas-ia-pymes/" className={linkClass}>automatización de tareas administrativas con IA</a>.
          Si quieres ver el marco completo, la página pilar es
          {' '}<a href="/automatizacion-procesos/" className={linkClass}>automatización de procesos</a>.
        </p>

        <h2 className={headingClass}>Tareas vs procesos: comparativa práctica</h2>

        <div className={tableWrapClass}>
          <table className={tableClass}>
            <thead>
              <tr>
                <th className={thClass}>Criterio</th>
                <th className={thClass}>Automatizar tareas con IA</th>
                <th className={thClass}>Automatizar procesos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={tdClass}>Alcance</td>
                <td className={tdClass}>Una acción concreta y repetida.</td>
                <td className={tdClass}>Una secuencia de trabajo con varios pasos.</td>
              </tr>
              <tr>
                <td className={tdClass}>Ejemplo</td>
                <td className={tdClass}>Resumir emails de clientes.</td>
                <td className={tdClass}>Recibir lead, clasificarlo, crear tarea y hacer seguimiento.</td>
              </tr>
              <tr>
                <td className={tdClass}>Riesgo</td>
                <td className={tdClass}>Crear pequeños parches aislados.</td>
                <td className={tdClass}>Sobredimensionar si no se documenta bien.</td>
              </tr>
              <tr>
                <td className={tdClass}>Mejor primer paso</td>
                <td className={tdClass}>Pilotos rápidos de bajo riesgo.</td>
                <td className={tdClass}>Procesos frecuentes, medibles y con impacto en clientes.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className={headingClass}>Cuándo basta con automatizar una tarea</h2>

        <p>
          Basta con automatizar una tarea cuando el problema es pequeño, repetido y tiene una salida clara. Por
          ejemplo: convertir un formulario en una tarea, resumir un email largo, clasificar una solicitud o extraer
          datos de un documento.
        </p>

        <p>
          Estos casos son buenos para empezar porque tienen poco riesgo y permiten ver si la IA entiende el contexto.
          También ayudan a formar criterio interno antes de tocar procesos más delicados.
        </p>

        <h2 className={headingClass}>Cuándo necesitas automatizar el proceso completo</h2>

        <p>
          Necesitas automatizar el proceso completo cuando una tarea resuelta no elimina el problema. Si la IA resume
          un mensaje pero nadie responde, el proceso sigue roto. Si extrae datos pero nadie revisa el estado, el
          equipo sigue dependiendo de memoria.
        </p>

        <p>
          Un proceso completo define que entra, que decisión se toma, que responsable actúa, donde queda registrado
          y que ocurre si falta información. Por eso se conecta con
          {' '}<a href="/blog/como-saber-que-proceso-automatizar-primero/" className={linkClass}>como saber que proceso automatizar primero</a>.
        </p>

        <h2 className={headingClass}>Ejemplos en pymes de servicios</h2>

        <ul className={listClass}>
          <li>Clínica: una tarea resume solicitudes; el proceso confirma cita, pide datos y activa seguimiento.</li>
          <li>Academia: una tarea clasifica consultas; el proceso crea oportunidad, asigna responsable y avisa de plazas.</li>
          <li>Asesoría: una tarea extrae vencimientos; el proceso pide documentos, revisa estado y genera recordatorio.</li>
          <li>Reformas: una tarea resume un formulario; el proceso crea visita, presupuesto y seguimiento comercial.</li>
        </ul>

        <p>
          Si el trabajo vive en hojas de calculo, también puedes revisar
          {' '}<a href="/blog/excel-ia-automatizacion-tareas-pymes/" className={linkClass}>Excel, IA y automatización de tareas</a>.
          Muchas pymes empiezan ahí porque la hoja muestra donde se acumula el trabajo manual.
        </p>

        <h2 className={headingClass}>Preguntas frecuentes</h2>

        <h3 className={questionClass}>¿Es mejor automatizar tareas o procesos primero?</h3>
        <p>
          Depende del riesgo y del impacto. Si la pyme no ha automatizado antes, suele ser mejor empezar por una
          tarea concreta de bajo riesgo. Si el problema afecta a leads, citas, cobros o seguimiento, conviene pensar
          en el proceso completo desde el inicio.
        </p>

        <h3 className={questionClass}>¿La IA es necesaria para automatizar procesos?</h3>
        <p>
          No siempre. Muchas partes de un proceso se resuelven con reglas, estados y avisos. La IA encaja cuando
          hay texto variable, documentos, mensajes o información que debe interpretarse antes de decidir el siguiente
          paso.
        </p>

        <h3 className={questionClass}>¿Cómo saber si una automatización es solo un parche?</h3>
        <p>
          Es un parche si resuelve una acción pero no cambia el resultado del proceso. Si el equipo sigue copiando
          datos, preguntando estados o persiguiendo respuestas por WhatsApp, falta diseñar el flujo completo.
        </p>

        <p>
          En KAIRAS solemos empezar por una pregunta simple: que trabajo se repite y que debe pasar después para que
          no dependa de una persona concreta. Esa respuesta separa una automatización útil de un parche llamativo.
        </p>
      </>
    ),
  },
};

const getCurrentPage = () => {
  if (typeof document === 'undefined') {
    return 'blog-comparativa-atencion-ia';
  }

  return document.getElementById('root')?.dataset.page ?? 'blog-comparativa-atencion-ia';
};

const BlogPostKeywordCluster6: React.FC = () => {
  const article = ARTICLES[getCurrentPage()] ?? ARTICLES['blog-comparativa-atencion-ia'];

  return (
    <BlogPostLayout
      tags={article.tags}
      title={article.title}
      dateLabel={article.dateLabel}
      readTime={article.readTime}
      ctaEyebrow={article.ctaEyebrow}
      ctaLabel={article.ctaLabel}
      relatedResources={article.relatedResources}
    >
      {article.body}
    </BlogPostLayout>
  );
};

export default BlogPostKeywordCluster6;
