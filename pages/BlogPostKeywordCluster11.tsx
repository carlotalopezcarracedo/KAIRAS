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
const tableClass = 'w-full min-w-[720px] text-sm';
const thClass = 'px-4 py-3 text-left font-black uppercase tracking-widest text-white border-b border-white/10';
const tdClass = 'px-4 py-3 align-top border-b border-white/5 text-slate-300';

const ARTICLES: Record<string, Article> = {
  'blog-agentes-ia-n8n-pymes': {
    tags: ['n8n', 'Agentes IA', 'Procesos'],
    title: 'Agentes de IA con n8n para pymes: cuando usarlos y cuando no',
    dateLabel: '30 septiembre 2026',
    readTime: '9 min de lectura',
    ctaEyebrow: 'Quieres usar agentes de IA sin crear otro sistema fragil?',
    ctaLabel: 'Revisar mi flujo',
    relatedResources: [
      { href: '/blog/automatizacion-con-ia-n8n-pymes/', label: 'n8n para pymes' },
      { href: '/blog/agentes-ia-automatizacion-procesos-pymes/', label: 'Agentes de IA' },
    ],
    body: (
      <>
        <p className="text-lg text-slate-300 leading-relaxed">
          Los agentes de IA con n8n pueden ayudar a una pyme cuando un flujo necesita interpretar informacion variable,
          consultar varias fuentes y proponer el siguiente paso. No son necesarios para cada automatizacion.
        </p>

        <p>
          El error frecuente es llamar agente a cualquier automatizacion con ChatGPT. Un flujo que mueve datos de un
          formulario al CRM no necesita un agente. Un proceso que debe leer contexto, clasificar una solicitud y decidir
          que ruta seguir puede necesitar una capa de IA mas flexible.
        </p>

        <h2 className={headingClass}>Respuesta directa: cuando usar agentes de IA con n8n?</h2>

        <p className={answerClass}>
          Usa agentes de IA con n8n cuando el proceso necesita razonar sobre texto, documentos, prioridades o contexto
          de cliente antes de ejecutar una accion. No los uses para pasos simples, repetibles y predecibles. En esos
          casos, un workflow normal con reglas suele ser mas estable, barato y facil de mantener.
        </p>

        <p>
          Si estas valorando n8n desde cero, empieza por
          {' '}<a href="/blog/automatizacion-con-ia-n8n-pymes/" className={linkClass}>automatizacion con IA y n8n para pymes</a>.
          Si el problema es comparar opciones, revisa tambien
          {' '}<a href="/blog/n8n-vs-make-automatizacion-ia-pymes/" className={linkClass}>n8n vs Make para automatizacion con IA</a>.
        </p>

        <h2 className={headingClass}>Diferencia entre workflow, IA y agente</h2>

        <div className={tableWrapClass}>
          <table className={tableClass}>
            <thead>
              <tr>
                <th className={thClass}>Capa</th>
                <th className={thClass}>Que hace</th>
                <th className={thClass}>Ejemplo util</th>
                <th className={thClass}>Riesgo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={tdClass}>Workflow</td>
                <td className={tdClass}>Ejecuta pasos definidos con reglas claras.</td>
                <td className={tdClass}>Crear una tarea cuando entra un formulario.</td>
                <td className={tdClass}>Querer resolver excepciones complejas solo con condiciones.</td>
              </tr>
              <tr>
                <td className={tdClass}>IA</td>
                <td className={tdClass}>Resume, clasifica, extrae datos o redacta una propuesta.</td>
                <td className={tdClass}>Clasificar un email como soporte, venta o administracion.</td>
                <td className={tdClass}>Tratar una respuesta probable como si fuera una verdad cerrada.</td>
              </tr>
              <tr>
                <td className={tdClass}>Agente</td>
                <td className={tdClass}>Evalua contexto, consulta herramientas y propone una ruta de accion.</td>
                <td className={tdClass}>Revisar una solicitud, consultar CRM y sugerir el siguiente paso.</td>
                <td className={tdClass}>Dar demasiada autonomia sin revision ni limites.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className={headingClass}>Casos donde si tiene sentido</h2>

        <ul className={listClass}>
          <li>Leads que llegan con texto libre y necesitan prioridad, categoria y responsable.</li>
          <li>Correos con documentos adjuntos que deben revisarse antes de crear una tarea.</li>
          <li>Incidencias de clientes que requieren consultar historial y proponer una respuesta.</li>
          <li>Procesos comerciales donde el siguiente paso depende del contexto del CRM.</li>
          <li>Flujos internos donde hay excepciones frecuentes y una regla fija se queda corta.</li>
        </ul>

        <p>
          Para una pyme, el criterio no es "tener agentes". El criterio es reducir carga manual sin perder control. Por
          eso conviene conectar este tema con
          {' '}<a href="/blog/ia-automatizacion-flujos-trabajo-pymes/" className={linkClass}>automatizacion de flujos de trabajo con IA</a>
          {' '}y con <a href="/blog/mantenimiento-automatizaciones-ia-pymes/" className={linkClass}>mantenimiento de automatizaciones con IA</a>.
        </p>

        <h2 className={headingClass}>Como limitar el riesgo</h2>

        <p>
          Un agente no deberia tener libertad total desde el primer dia. Conviene acotar herramientas, fuentes de datos,
          permisos y decisiones. En muchas pymes, el agente deberia preparar una recomendacion y una persona validar la
          accion sensible.
        </p>

        <p>
          Tambien hay que guardar trazabilidad: que recibio el agente, que interpreto, que accion propuso y quien la
          aprobo. Sin esa trazabilidad, el sistema puede parecer inteligente durante la demo y volverse dificil de
          mantener despues.
        </p>

        <h2 className={headingClass}>Primer piloto recomendado</h2>

        <p>
          Elige un proceso con entrada variable pero bajo riesgo: clasificacion de solicitudes, resumen de correos,
          priorizacion de leads o propuesta de tareas internas. Mide si reduce pasos manuales y si las recomendaciones
          son utiles. Si no mejora el proceso, no amplias autonomia.
        </p>

        <h2 className={headingClass}>Preguntas frecuentes</h2>

        <h3 className={questionClass}>n8n sirve para crear agentes de IA?</h3>
        <p>
          Si. n8n puede coordinar llamadas a modelos de IA, herramientas, bases de datos y sistemas como CRM o email.
          La clave es disenar limites y revisiones, no solo conectar nodos.
        </p>

        <h3 className={questionClass}>Un agente de IA sustituye a un workflow?</h3>
        <p>
          No. Un agente puede formar parte de un workflow, pero no debe sustituir las reglas, estados y controles que
          hacen que el proceso sea estable.
        </p>

        <h3 className={questionClass}>Que proceso deberia probar primero?</h3>
        <p>
          Empieza por una tarea donde la IA aporte lectura o criterio, pero donde una respuesta incorrecta no afecte a
          clientes ni a dinero sin revision humana.
        </p>
      </>
    ),
  },
  'blog-make-whatsapp-ia-pymes': {
    tags: ['Make', 'WhatsApp', 'IA'],
    title: 'Make, WhatsApp e IA para pymes: flujos utiles sin perder control',
    dateLabel: '30 septiembre 2026',
    readTime: '8 min de lectura',
    ctaEyebrow: 'Tu WhatsApp recibe mensajes que luego nadie sigue bien?',
    ctaLabel: 'Ordenar WhatsApp',
    relatedResources: [
      { href: '/blog/automatizacion-con-ia-make-pymes/', label: 'Make para pymes' },
      { href: '/automatizacion-whatsapp-empresas/', label: 'Automatizacion WhatsApp' },
    ],
    body: (
      <>
        <p className="text-lg text-slate-300 leading-relaxed">
          Make, WhatsApp e IA pueden ordenar mensajes de una pyme cuando el problema no es responder mas rapido, sino
          convertir cada conversacion en contexto, tarea, responsable y siguiente paso.
        </p>

        <p>
          El riesgo esta en automatizar respuestas sin sistema. Si WhatsApp contesta, pero el CRM no se actualiza, el
          lead no tiene responsable o nadie sabe cuando insistir, la pyme solo ha cambiado una tarea manual por otra.
        </p>

        <h2 className={headingClass}>Respuesta directa: que flujos tienen sentido?</h2>

        <p className={answerClass}>
          Los flujos mas utiles con Make, WhatsApp e IA son clasificar consultas, crear tareas en CRM, avisar al equipo,
          resumir conversaciones, pedir datos faltantes y activar seguimiento. La IA debe ayudar a interpretar el
          mensaje. Make debe mover la informacion. WhatsApp no debe quedarse aislado.
        </p>

        <p>
          Para entender la parte de herramienta, revisa
          {' '}<a href="/blog/automatizacion-con-ia-make-pymes/" className={linkClass}>automatizacion con IA y Make</a>.
          Para el criterio de canal, empieza por
          {' '}<a href="/automatizacion-whatsapp-empresas/" className={linkClass}>automatizacion de WhatsApp para empresas</a>.
        </p>

        <h2 className={headingClass}>Flujos recomendados para empezar</h2>

        <div className={tableWrapClass}>
          <table className={tableClass}>
            <thead>
              <tr>
                <th className={thClass}>Flujo</th>
                <th className={thClass}>Que resuelve</th>
                <th className={thClass}>Donde entra la IA</th>
                <th className={thClass}>Control necesario</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={tdClass}>Consulta nueva</td>
                <td className={tdClass}>Evita que un mensaje quede solo en WhatsApp.</td>
                <td className={tdClass}>Clasifica motivo, urgencia y tipo de cliente.</td>
                <td className={tdClass}>Responsable en CRM o tarea interna.</td>
              </tr>
              <tr>
                <td className={tdClass}>Datos faltantes</td>
                <td className={tdClass}>Reduce idas y vueltas para presupuestar o agendar.</td>
                <td className={tdClass}>Detecta que informacion falta.</td>
                <td className={tdClass}>Mensaje revisado o plantilla aprobada.</td>
              </tr>
              <tr>
                <td className={tdClass}>Resumen de conversacion</td>
                <td className={tdClass}>Da contexto al equipo antes de llamar o responder.</td>
                <td className={tdClass}>Resume necesidades, objeciones y siguiente paso.</td>
                <td className={tdClass}>Historial guardado con fecha y fuente.</td>
              </tr>
              <tr>
                <td className={tdClass}>Seguimiento comercial</td>
                <td className={tdClass}>Evita que presupuestos o dudas se enfrien.</td>
                <td className={tdClass}>Propone cadencia segun estado del lead.</td>
                <td className={tdClass}>Limites para no insistir de mas.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className={headingClass}>Cuando no conviene automatizar la respuesta</h2>

        <p>
          No todos los mensajes deberian recibir una respuesta automatica. Si hay quejas, datos sensibles, dudas
          economicas complejas o decisiones que afectan a una relacion comercial, la automatizacion debe preparar el
          contexto y pasar a una persona.
        </p>

        <p>
          Esta diferencia ya aparece en
          {' '}<a href="/blog/mensajes-automaticos-clientes-cuando-ayudan-molestan/" className={linkClass}>mensajes automaticos que ayudan o molestan</a>
          {' '}y en <a href="/blog/whatsapp-business-app-vs-api-pymes/" className={linkClass}>WhatsApp Business App vs API</a>.
          Make puede coordinar el flujo, pero la politica de respuesta tiene que estar definida antes.
        </p>

        <h2 className={headingClass}>Como conectarlo con CRM</h2>

        <p>
          El salto importante es que cada conversacion tenga estado. Un lead puede estar pendiente de datos, pendiente
          de presupuesto, pendiente de llamada o descartado. Sin estados, la IA no sabe que hacer y el equipo tampoco.
        </p>

        <p>
          Por eso un flujo con Make deberia conectar WhatsApp con CRM, email, calendario o tareas. La guia de
          {' '}<a href="/blog/conectar-whatsapp-crm-sin-crear-mas-trabajo/" className={linkClass}>conectar WhatsApp con CRM</a>
          {' '}explica esta parte con mas detalle.
        </p>

        <h2 className={headingClass}>Preguntas frecuentes</h2>

        <h3 className={questionClass}>Make puede automatizar WhatsApp con IA?</h3>
        <p>
          Si, siempre que WhatsApp este conectado mediante una via adecuada y el flujo respete permisos, plantillas,
          datos y revision. Make coordina pasos. La IA interpreta el mensaje.
        </p>

        <h3 className={questionClass}>Es mejor Make o ManyChat para WhatsApp?</h3>
        <p>
          Depende del caso. ManyChat puede encajar en conversaciones y automatizaciones de canal. Make suele encajar
          mejor cuando WhatsApp debe conectarse con CRM, hojas, email, calendario o tareas internas.
        </p>

        <h3 className={questionClass}>La IA debe contestar sola por WhatsApp?</h3>
        <p>
          Solo en consultas simples y controladas. Para situaciones sensibles, la IA deberia resumir, clasificar y
          preparar la respuesta para que una persona la revise.
        </p>
      </>
    ),
  },
  'blog-consultoria-ia-gestion-documental-pymes': {
    tags: ['Documentos', 'Consultoria', 'IA'],
    title: 'Consultoria de IA para gestion documental: cuando compensa en una pyme',
    dateLabel: '30 septiembre 2026',
    readTime: '8 min de lectura',
    ctaEyebrow: 'Tus documentos estan repartidos entre correo, carpetas y WhatsApp?',
    ctaLabel: 'Ordenar documentos',
    relatedResources: [
      { href: '/blog/gestion-documental-ia-automatizacion-pymes/', label: 'Gestion documental con IA' },
      { href: '/blog/servicios-consultoria-automatizacion-ia-pymes/', label: 'Consultoria de automatizacion IA' },
    ],
    body: (
      <>
        <p className="text-lg text-slate-300 leading-relaxed">
          La consultoria de IA para gestion documental compensa cuando una pyme pierde tiempo buscando documentos,
          revisando adjuntos, copiando datos o recordando vencimientos que deberian estar bajo control.
        </p>

        <p>
          No todo problema documental necesita IA. A veces basta con ordenar carpetas, nombres, responsables y estados.
          La IA entra cuando hay texto variable, documentos heterogeneos o informacion que debe extraerse y revisarse
          antes de seguir.
        </p>

        <h2 className={headingClass}>Respuesta directa: cuando contratar consultoria?</h2>

        <p className={answerClass}>
          Contrata consultoria de IA para gestion documental si los documentos afectan a clientes, cobros, expedientes,
          vencimientos o decisiones internas y el equipo dedica tiempo recurrente a buscarlos, leerlos o transcribirlos.
          El objetivo no es guardar mas archivos. Es convertir documentos en datos, tareas y control.
        </p>

        <p>
          Si buscas una guia operativa, lee primero
          {' '}<a href="/blog/gestion-documental-ia-automatizacion-pymes/" className={linkClass}>gestion documental con IA para pymes</a>.
          Si quieres entender el alcance de un proyecto, revisa
          {' '}<a href="/blog/servicios-consultoria-automatizacion-ia-pymes/" className={linkClass}>servicios de consultoria de automatizacion IA</a>.
        </p>

        <h2 className={headingClass}>Problemas documentales que si merecen atencion</h2>

        <ul className={listClass}>
          <li>Facturas, presupuestos o contratos llegan por varios canales y nadie sabe su estado.</li>
          <li>Una asesoria persigue documentos de clientes cada mes.</li>
          <li>Un despacho guarda expedientes, citas y adjuntos sin una vista unica.</li>
          <li>Una clinica recibe consentimientos, informes o solicitudes que requieren revision.</li>
          <li>El equipo copia datos de PDFs o emails a hojas y CRM todas las semanas.</li>
        </ul>

        <h2 className={headingClass}>Que deberia incluir el proyecto</h2>

        <div className={tableWrapClass}>
          <table className={tableClass}>
            <thead>
              <tr>
                <th className={thClass}>Fase</th>
                <th className={thClass}>Objetivo</th>
                <th className={thClass}>Resultado esperado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={tdClass}>Mapa documental</td>
                <td className={tdClass}>Entender que documentos entran, por donde y quien los usa.</td>
                <td className={tdClass}>Tipos, fuentes, responsables y riesgos claros.</td>
              </tr>
              <tr>
                <td className={tdClass}>Datos minimos</td>
                <td className={tdClass}>Definir que campos se extraen o validan.</td>
                <td className={tdClass}>Menos copia manual y menos campos inutiles.</td>
              </tr>
              <tr>
                <td className={tdClass}>IA y reglas</td>
                <td className={tdClass}>Separar lectura inteligente de decisiones fijas.</td>
                <td className={tdClass}>Clasificacion, resumen, extraccion y rutas con control.</td>
              </tr>
              <tr>
                <td className={tdClass}>Revision humana</td>
                <td className={tdClass}>Determinar que no debe aprobar la IA sola.</td>
                <td className={tdClass}>Alertas, excepciones y responsables definidos.</td>
              </tr>
              <tr>
                <td className={tdClass}>Mantenimiento</td>
                <td className={tdClass}>Evitar que el sistema se rompa cuando cambian formatos.</td>
                <td className={tdClass}>Pruebas, registros y ajustes periodicos.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className={headingClass}>Donde la IA aporta y donde no</h2>

        <p>
          La IA aporta cuando hay que leer contenido no estructurado: emails largos, PDFs, contratos, partes, informes o
          documentos con formatos distintos. Puede extraer datos, resumir, detectar faltantes y sugerir categorias.
        </p>

        <p>
          No aporta tanto cuando el problema es puro orden. Si nadie sabe donde guardar el documento, quien debe
          revisarlo o que estado tiene, primero hay que definir el proceso. Despues se automatiza. La guia sobre
          {' '}<a href="/blog/preparar-datos-empresa-automatizar-ia/" className={linkClass}>preparar datos antes de automatizar</a>
          {' '}ayuda a evitar ese error.
        </p>

        <h2 className={headingClass}>Seguridad y control</h2>

        <p>
          La gestion documental toca informacion sensible. Por eso hay que revisar permisos, carpetas, acceso a modelos,
          registros y plan de fallo. Si la IA extrae mal un dato, el proceso debe detectarlo antes de enviar, aprobar o
          facturar algo.
        </p>

        <p>
          Antes de conectar documentos reales, revisa tambien
          {' '}<a href="/blog/seguridad-datos-automatizacion-ia-pymes/" className={linkClass}>seguridad de datos en automatizaciones con IA</a>.
        </p>

        <h2 className={headingClass}>Preguntas frecuentes</h2>

        <h3 className={questionClass}>La IA puede leer documentos de empresa?</h3>
        <p>
          Si, puede leer, resumir, clasificar y extraer datos de documentos. La pregunta importante es que datos puede
          tratar, donde se guardan y quien revisa los resultados.
        </p>

        <h3 className={questionClass}>Hace falta cambiar todo el sistema documental?</h3>
        <p>
          No siempre. Muchas pymes pueden empezar ordenando entrada, estados y responsables, y despues conectar IA solo
          donde haya lectura o extraccion repetida.
        </p>

        <h3 className={questionClass}>Que documentos conviene automatizar primero?</h3>
        <p>
          Empieza por documentos recurrentes, con campos claros y bajo riesgo: facturas, solicitudes, formularios,
          justificantes o documentos pendientes de revision.
        </p>
      </>
    ),
  },
};

const getCurrentPage = () => {
  if (typeof document === 'undefined') {
    return 'blog-agentes-ia-n8n-pymes';
  }

  return document.getElementById('root')?.dataset.page ?? 'blog-agentes-ia-n8n-pymes';
};

const BlogPostKeywordCluster11: React.FC = () => {
  const article = ARTICLES[getCurrentPage()] ?? ARTICLES['blog-agentes-ia-n8n-pymes'];

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

export default BlogPostKeywordCluster11;
