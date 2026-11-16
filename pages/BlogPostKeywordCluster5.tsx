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
const listClass = 'space-y-2 pl-4 border-l border-cyber-purple/30';

const ARTICLES: Record<string, Article> = {
  'blog-tiktok-ia-pymes': {
    tags: ['TikTok', 'IA', 'Captacion'],
    title: 'Automatización de TikTok con IA para pymes: del video al seguimiento',
    dateLabel: '11 agosto 2026',
    readTime: '9 min de lectura',
    ctaEyebrow: 'TikTok te trae consultas que luego se pierden?',
    ctaLabel: 'Ordenar mi captación',
    relatedResources: [
      { href: '/blog/automatizacion-redes-sociales-ia-pymes/', label: 'Redes sociales con IA' },
      { href: '/crm-pymes-seguimiento-clientes/', label: 'CRM y seguimiento' },
    ],
    body: (
      <>
        <p className="text-lg text-slate-300 leading-relaxed">
          La automatización de TikTok con IA no consiste en publicar más videos ni en dejar que una herramienta
          responda todo por ti. Para una pyme de servicios, el valor esta en convertir ideas, comentarios,
          mensajes y formularios en información accionable para ventas, atención y seguimiento.
        </p>

        <p>
          TikTok puede generar demanda muy rápido, pero también puede crear ruido: consultas sueltas, preguntas
          repetidas, personas que piden precio por mensaje y oportunidades que nadie registra. Si el equipo
          depende de mirar la app cada pocas horas, la captación acaba siendo frágil.
        </p>

        <h2 className={headingClass}>Automatización TikTok IA no es solo programar videos</h2>

        <p>
          Programar contenido ayuda, pero no arregla el problema principal. El punto critico esta después del
          contenido: que pasa cuando alguien comenta, escribe por privado, pide información o llega a una landing.
          Ahí la automatización debe conectar TikTok con el sistema comercial.
        </p>

        <ul className={listClass}>
          <li>Extraer ideas de videos, preguntas frecuentes y comentarios reales.</li>
          <li>Convertir guiones largos en piezas cortas revisables por el equipo.</li>
          <li>Detectar comentarios con intención comercial o dudas repetidas.</li>
          <li>Crear tareas de seguimiento cuando una persona pide información.</li>
          <li>Registrar origen, tema y contexto antes de enviar el lead al CRM.</li>
        </ul>

        <p>
          Este enfoque complementa la guía de
          {' '}<a href="/blog/automatizacion-redes-sociales-ia-pymes/" className={linkClass}>automatización de redes sociales con IA</a>,
          pero aquí el foco esta en TikTok como canal de descubrimiento y captación rápida.
        </p>

        <h2 className={headingClass}>Qué flujo necesita una pyme de servicios</h2>

        <p>
          Una pyme no necesita una maquina de contenido infinita. Necesita un flujo que conecte contenido,
          conversación y siguiente paso. Por ejemplo: una clínica publica un video educativo, una persona pregunta
          por disponibilidad, la IA resume la duda, clasifica el interés y crea una tarea para que recepción
          responda con criterio.
        </p>

        <p>
          En una academia, el mismo sistema puede distinguir entre preguntas sobre horarios, edad, modalidad o
          matrícula. En una empresa de reformas, puede separar curiosidad general de solicitudes que ya contienen
          zona, tipo de trabajo y urgencia.
        </p>

        <p>
          Si TikTok forma parte de una estrategia más amplia, conviene unirlo con la
          {' '}<a href="/blog/automatizacion-ia-marketing-digital-pymes/" className={linkClass}>automatización IA para marketing digital</a>.
          El objetivo no es que cada canal trabaje aislado, sino que todos alimenten el mismo seguimiento.
        </p>

        <h2 className={headingClass}>De comentario a lead con contexto</h2>

        <p>
          El mayor error es tratar todos los mensajes igual. Un comentario tipo "precio?" no requiere el mismo
          flujo que un mensaje donde una persona explica su problema, su zona, su fecha limite y su presupuesto.
          La IA puede ayudar a clasificar intención, urgencia y datos disponibles.
        </p>

        <p>
          Desde ahí, la automatización puede crear una ficha o tarea en
          {' '}<a href="/crm-pymes-seguimiento-clientes/" className={linkClass}>CRM para pymes y seguimiento de clientes</a>,
          con origen TikTok, resumen del mensaje, enlace a la conversación y responsable asignado.
          Ese pequeño cambio evita que la oportunidad viva solo en la bandeja de entrada.
        </p>

        <h2 className={headingClass}>Ideas, guiones y reutilización sin perder criterio</h2>

        <p>
          La IA también puede ayudar antes de publicar. Puede transformar preguntas frecuentes en guiones,
          resumir articulos largos, proponer hooks o convertir un caso de cliente en una estructura de video.
          Pero la experiencia del negocio debe seguir mandando.
        </p>

        <p>
          Un buen flujo editorial separa tres cosas: generación de borradores, revisión humana y publicación.
          Así evitas publicar contenido genérico que no representa la forma de vender, atender o explicar de la
          empresa.
        </p>

        <h2 className={headingClass}>Cuándo usar ManyChat u otras capas de mensajeria</h2>

        <p>
          Si TikTok deriva conversaciones hacia Instagram, WhatsApp o formularios, puede tener sentido usar una
          capa de mensajeria. La clave es no dejarla aislada. Un bot que responde pero no registra el lead solo
          desplaza el problema.
        </p>

        <p>
          Para esa parte, revisa la guía sobre
          {' '}<a href="/blog/manychat-automatizacion-ia-pymes/" className={linkClass}>ManyChat y automatización con IA</a>.
          Puede encajar bien como entrada, siempre que después exista CRM, tareas y control.
        </p>

        <h2 className={headingClass}>Riesgos: tono, privacidad y respuestas automáticas</h2>

        <p>
          No conviene automatizar respuestas sensibles, precios cerrados, reclamaciones, datos de salud ni
          promesas comerciales. En esos casos, la IA debe preparar contexto y una respuesta sugerida, pero una
          persona debe validar.
        </p>

        <p>
          La frontera entre ayuda y molestia se parece mucho a la que explicamos en
          {' '}<a href="/blog/mensajes-automaticos-clientes-cuando-ayudan-molestan/" className={linkClass}>mensajes automáticos a clientes</a>.
          Rapidez sin criterio puede danar la confianza.
        </p>

        <h2 className={headingClass}>Primer piloto recomendado</h2>

        <p>
          Empieza con un flujo pequeño: detectar mensajes o formularios procedentes de TikTok, resumirlos,
          clasificarlos y crear una tarea de seguimiento. Durante dos semanas mide tiempo de respuesta,
          leads registrados y oportunidades que antes se quedaban sin continuidad.
        </p>

        <p>
          Si funciona, amplia a ideas de contenido, respuestas sugeridas y panel de preguntas frecuentes.
          Si no funciona, revisa primero el proceso comercial. La automatización de TikTok con IA no sustituye
          al criterio de venta; lo hace más visible y más fácil de ejecutar.
        </p>
      </>
    ),
  },
  'blog-excel-ia-tareas-pymes': {
    tags: ['Excel', 'IA', 'Tareas'],
    title: 'Excel, IA y automatización de tareas: cuando una hoja ya no basta',
    dateLabel: '11 agosto 2026',
    readTime: '9 min de lectura',
    ctaEyebrow: 'Tu empresa vive en hojas que nadie quiere tocar?',
    ctaLabel: 'Ordenar mis procesos',
    relatedResources: [
      { href: '/blog/automatizacion-tareas-administrativas-ia-pymes/', label: 'Tareas administrativas con IA' },
      { href: '/automatizacion-procesos/', label: 'Automatización de procesos' },
    ],
    body: (
      <>
        <p className="text-lg text-slate-300 leading-relaxed">
          Excel, IA y automatización de tareas pueden convivir muy bien si se usan con criterio. El problema no es
          tener hojas de calculo. El problema aparece cuando una hoja se convierte en CRM, agenda, gestor de tareas,
          panel de cobros y memoria operativa de toda la empresa.
        </p>

        <p>
          Muchas pymes empiezan con Excel porque es rápido, flexible y conocido. Durante un tiempo funciona.
          Después llegan versiones duplicadas, celdas sin actualizar, responsables que no saben que cambiar y
          decisiones que dependen de copiar datos a mano.
        </p>

        <h2 className={headingClass}>Excel IA automatización de tareas: cuando tiene sentido</h2>

        <p>
          La IA tiene sentido en Excel cuando hay información variable que interpretar: descripciones de clientes,
          notas comerciales, emails copiados, incidencias, conceptos de factura o comentarios de seguimiento.
          La automatización tiene sentido cuando una acción se repite: crear una tarea, avisar, actualizar un estado
          o mover datos a otra herramienta.
        </p>

        <ul className={listClass}>
          <li>Clasificar filas según prioridad, estado o tipo de solicitud.</li>
          <li>Detectar datos incompletos antes de enviar una propuesta.</li>
          <li>Crear recordatorios cuando una fecha vence o un lead queda parado.</li>
          <li>Resumir observaciones largas en campos útiles para el equipo.</li>
          <li>Enviar cambios relevantes al CRM, calendario o gestor de tareas.</li>
        </ul>

        <p>
          Este tema se cruza con la
          {' '}<a href="/blog/automatizacion-tareas-administrativas-ia-pymes/" className={linkClass}>automatización de tareas administrativas con IA</a>,
          pero aquí el foco esta en empresas que ya tienen parte del trabajo atrapado en hojas.
        </p>

        <h2 className={headingClass}>Cuándo Excel ya no es suficiente</h2>

        <p>
          Una hoja deja de ser suficiente cuando varias personas necesitan actuar sobre el mismo dato, cuando hay
          estados que cambian cada día o cuando el error de una celda provoca llamadas, retrasos o perdida de
          clientes.
        </p>

        <p>
          La señal más clara es esta: el equipo habla más de "actualizar la hoja" que de avanzar el trabajo.
          En ese momento, la hoja ya no es soporte. Es un cuello de botella.
        </p>

        <p>
          Si además usas Gmail, Drive, Calendar o Sheets, revisa también la guía de
          {' '}<a href="/blog/automatizacion-google-workspace-ia-pymes/" className={linkClass}>automatización con IA en Google Workspace</a>.
          Muchas automatizaciones nacen ahí, aunque el origen historico haya sido Excel.
        </p>

        <h2 className={headingClass}>Qué automatizar sin romper la forma de trabajar</h2>

        <p>
          No hace falta eliminar Excel de golpe. A veces el mejor primer paso es mantener la hoja como interfaz
          temporal y automatizar lo que ocurre alrededor: avisos, validaciones, tareas, actualizaciones y reportes.
        </p>

        <p>
          Por ejemplo, una asesoría puede detectar vencimientos y crear tareas internas. Una academia puede avisar
          de alumnos pendientes de matrícula. Una empresa de mantenimiento puede detectar partes incompletos y pedir
          información antes de facturar.
        </p>

        <h2 className={headingClass}>De hoja a sistema: el dato debe tener dueno</h2>

        <p>
          La automatización falla cuando nadie sabe cual es la fuente correcta. Si el cliente esta en Excel, el
          estado en el CRM, la fecha en el calendario y la conversación en WhatsApp, cada herramienta cuenta una
          versión distinta del negocio.
        </p>

        <p>
          Antes de automatizar, decide que dato vive donde. La guía sobre
          {' '}<a href="/blog/preparar-datos-empresa-automatizar-ia/" className={linkClass}>preparar los datos de la empresa para automatizar con IA</a>
          ayuda a ordenar esa base antes de conectar herramientas.
        </p>

        <h2 className={headingClass}>Casos útiles en pymes de servicios</h2>

        <p>
          En ventas, una hoja puede disparar avisos cuando un presupuesto lleva demasiados días sin respuesta.
          En operaciones, puede crear tareas cuando una fila cambia de estado. En administración, puede detectar
          facturas pendientes, datos incompletos o fechas limite.
        </p>

        <p>
          Si el flujo toca email, agenda y CRM, el siguiente paso natural es revisar
          {' '}<a href="/blog/integrar-calendario-email-crm-pymes/" className={linkClass}>como integrar calendario, email y CRM</a>.
          La hoja puede seguir existiendo, pero no debería ser el único mecanismo de coordinación.
        </p>

        <h2 className={headingClass}>Controles mínimos antes de poner IA</h2>

        <p>
          La IA no debe modificar datos críticos sin revisión. Para empezar, usala para sugerir clasificaciones,
          detectar errores, resumir texto y preparar borradores. Las acciones irreversibles, los cambios de precio
          o las comunicaciones sensibles deben tener validación humana.
        </p>

        <p>
          También conviene registrar cambios y errores. Una automatización opaca sobre una hoja importante puede
          crear más trabajo del que quita.
        </p>

        <h2 className={headingClass}>Primer piloto recomendado</h2>

        <p>
          Elige una hoja que el equipo ya use cada semana. Define una sola salida: crear tareas, avisar de datos
          incompletos o actualizar un estado. Prueba con una copia, mide errores y solo después pasalo a uso real.
        </p>

        <p>
          Si la hoja existe porque las herramientas no se hablan, lee
          {' '}<a href="/blog/herramientas-desconectadas-equipo-va-tarde/" className={linkClass}>herramientas desconectadas: cuando el equipo siempre va tarde</a>.
          Muchas veces Excel no es el problema; es el sintoma de un proceso sin dueno.
        </p>
      </>
    ),
  },
  'blog-negocios-ia-pymes': {
    tags: ['Negocios', 'IA', 'Procesos'],
    title: 'Automatización de negocios con IA: que ordenar antes de conectar herramientas',
    dateLabel: '11 agosto 2026',
    readTime: '10 min de lectura',
    ctaEyebrow: 'Quieres automatizar sin crear más ruido operativo?',
    ctaLabel: 'Mapear mi negocio',
    relatedResources: [
      { href: '/blog/automatizacion-con-ia-empresas-pymes-servicios/', label: 'IA para empresas' },
      { href: '/blog/como-saber-que-proceso-automatizar-primero/', label: 'Elegir primer proceso' },
    ],
    body: (
      <>
        <p className="text-lg text-slate-300 leading-relaxed">
          La automatización de negocios con IA no empieza comprando herramientas. Empieza entendiendo como entra el
          trabajo, quien lo atiende, donde se guarda la información, que decisiones se repiten y que tareas hacen
          que el equipo pierda tiempo cada semana.
        </p>

        <p>
          Para una pyme de servicios, automatizar el negocio significa ordenar ventas, atención, operaciones y
          administración para que funcionen como un sistema. La IA solo aporta valor si ese sistema tiene reglas,
          datos y responsables claros.
        </p>

        <h2 className={headingClass}>Automatización con IA para negocios: no empieces por la herramienta</h2>

        <p>
          La pregunta "que herramienta de IA necesito?" suele llegar demasiado pronto. Antes conviene responder
          otras preguntas: que proceso se repite, que información falta, que error se repite y que resultado
          concreto debe producir la automatización.
        </p>

        <p>
          Si buscas una base conceptual, la guía de
          {' '}<a href="/blog/automatizacion-con-ia-empresas-pymes-servicios/" className={linkClass}>automatización con IA para empresas y pymes de servicios</a>
          explica el marco general. Este artículo baja un nivel más: como mirarlo desde el negocio completo.
        </p>

        <h2 className={headingClass}>Las cuatro áreas donde una pyme nota el cambio</h2>

        <p>
          Un negocio no se automatiza de una vez. Se automatizan tramos concretos que luego se conectan.
          En pymes de servicios, normalmente aparecen cuatro áreas.
        </p>

        <ul className={listClass}>
          <li>Captación: formularios, mensajes, redes sociales, llamadas y leads entrantes.</li>
          <li>Ventas: seguimiento, presupuestos, recordatorios y priorización de oportunidades.</li>
          <li>Operación: tareas internas, agenda, partes, documentos e incidencias.</li>
          <li>Administración: cobros, facturas, vencimientos, datos incompletos y reportes.</li>
        </ul>

        <p>
          Cada area puede mejorar por separado, pero el salto real aparece cuando la información pasa de una a
          otra sin depender de copias manuales.
        </p>

        <h2 className={headingClass}>Primero mapa, después automatización</h2>

        <p>
          Antes de conectar herramientas, dibuja el recorrido de un cliente o trabajo real: de donde llega,
          quien lo recibe, donde se registra, que pasos siguen, que documentos aparecen y cuando se considera
          terminado.
        </p>

        <p>
          Ese mapa evita automatizar síntomas. Si no sabes por que se pierden leads, no empieces por un bot.
          Empieza por revisar el seguimiento. Si no sabes donde se atascan los trabajos, no empieces por un panel.
          Empieza por documentar el proceso.
        </p>

        <p>
          Para elegir el primer tramo, usa la guía de
          {' '}<a href="/blog/como-saber-que-proceso-automatizar-primero/" className={linkClass}>como saber que proceso automatizar primero</a>.
          Es una de las decisiones que más protege el retorno.
        </p>

        <h2 className={headingClass}>Dónde entra la IA y donde bastan reglas</h2>

        <p>
          La IA ayuda cuando hay lenguaje, documentos o contexto: resumir emails, clasificar solicitudes,
          interpretar una descripción, extraer datos o preparar una respuesta. Las reglas ayudan cuando hay estados,
          fechas, responsables y condiciones claras.
        </p>

        <p>
          Un sistema maduro combina ambas cosas. Si todo se resuelve con IA, el flujo puede volverse caro y difícil
          de auditar. Si todo se resuelve con reglas, el sistema puede romperse ante cualquier mensaje escrito de
          forma distinta.
        </p>

        <p>
          Esta diferencia se desarrolla más en
          {' '}<a href="/blog/automatizacion-procesos-con-ia-pymes/" className={linkClass}>automatización de procesos con IA para pymes</a>.
        </p>

        <h2 className={headingClass}>Qué mantener humano</h2>

        <p>
          La automatización no debe absorber decisiones sensibles sin control. Negociaciones, conflictos,
          excepciones, precios especiales, datos delicados y comunicaciones importantes deben mantener revisión
          humana.
        </p>

        <p>
          Una buena automatización prepara contexto, detecta prioridades y reduce trabajo repetitivo.
          No debería esconder decisiones ni enviar mensajes que nadie ha validado cuando hay riesgo comercial o
          legal.
        </p>

        <h2 className={headingClass}>Errores frecuentes al automatizar un negocio</h2>

        <p>
          El primer error es querer automatizarlo todo a la vez. El segundo es elegir una herramienta porque esta
          de moda. El tercero es conectar aplicaciones sin decidir quien mantiene el flujo cuando cambian los datos,
          las personas o el proceso.
        </p>

        <p>
          Antes de avanzar, revisa los
          {' '}<a href="/blog/errores-automatizar-empresa-primera-vez/" className={linkClass}>errores al automatizar una empresa por primera vez</a>
          y la guía de
          {' '}<a href="/blog/seguridad-datos-automatizacion-ia-pymes/" className={linkClass}>seguridad de datos en automatizaciones con IA</a>.
          Automatizar bien también significa saber que no tocar todavía.
        </p>

        <h2 className={headingClass}>Plan de 30 días para empezar</h2>

        <p>
          La primera semana, lista tareas repetidas y puntos de perdida: leads sin seguimiento, citas que se olvidan,
          documentos que faltan, presupuestos sin respuesta o informes hechos a mano. La segunda semana, elige un
          solo proceso y define entrada, salida, responsable y metrica.
        </p>

        <p>
          La tercera semana, monta un piloto con revisión humana. La cuarta, mide tiempo ahorrado, errores evitados
          y oportunidades recuperadas. Para cuantificarlo mejor, puedes apoyarte en
          {' '}<a href="/blog/calcular-roi-automatizacion-ia/" className={linkClass}>como calcular el ROI de una automatización con IA</a>.
        </p>

        <p>
          En KAIRAS trabajamos la automatización de negocios con IA como una mejora operativa, no como una colección
          de trucos. Primero ordenamos el flujo. Después conectamos tecnología. Así la IA deja de ser una promesa y
          se convierte en una forma más clara de trabajar.
        </p>
      </>
    ),
  },
};

const getCurrentPage = () => {
  if (typeof document === 'undefined') {
    return 'blog-tiktok-ia-pymes';
  }

  return document.getElementById('root')?.dataset.page ?? 'blog-tiktok-ia-pymes';
};

const BlogPostKeywordCluster5: React.FC = () => {
  const article = ARTICLES[getCurrentPage()] ?? ARTICLES['blog-tiktok-ia-pymes'];

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

export default BlogPostKeywordCluster5;
