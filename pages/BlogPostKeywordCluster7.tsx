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
const tableClass = 'w-full min-w-[660px] text-sm';
const thClass = 'px-4 py-3 text-left font-black uppercase tracking-widest text-white border-b border-white/10';
const tdClass = 'px-4 py-3 align-top border-b border-white/5 text-slate-300';

const ARTICLES: Record<string, Article> = {
  'blog-hubspot-ia-pymes': {
    tags: ['HubSpot', 'CRM', 'IA'],
    title: 'HubSpot con IA para pymes: CRM, seguimiento y automatización con criterio',
    dateLabel: '24 agosto 2026',
    readTime: '9 min de lectura',
    ctaEyebrow: 'Tu CRM registra datos, pero no empuja el seguimiento?',
    ctaLabel: 'Ordenar mi CRM',
    relatedResources: [
      { href: '/crm-pymes-seguimiento-clientes/', label: 'CRM y seguimiento' },
      { href: '/blog/lead-scoring-ia-pymes/', label: 'Lead scoring con IA' },
    ],
    body: (
      <>
        <p className="text-lg text-slate-300 leading-relaxed">
          HubSpot con IA para pymes puede ser útil cuando el CRM deja de ser una simple base de datos y empieza a
          sostener seguimiento, prioridades, tareas y contexto comercial. Pero no arregla por si solo un proceso de
          ventas que nadie cumple.
        </p>

        <p>
          En muchas pymes de servicios, el problema no es que falte información. Es que la información llega por
          WhatsApp, formularios, email, llamadas y notas sueltas. Si el CRM no ordena esa entrada y no activa
          siguientes pasos, el equipo acaba persiguiendo oportunidades a mano.
        </p>

        <h2 className={headingClass}>¿Qué significa usar HubSpot con IA en una pyme?</h2>

        <p className={answerClass}>
          Usar HubSpot con IA en una pyme significa apoyarse en CRM, automatizaciones y asistencia inteligente para
          ordenar contactos, conversaciones, tareas y oportunidades. El valor no está en tener más datos, sino en
          convertirlos en seguimiento claro: quien responde, cuando insiste y que información falta.
        </p>

        <p>
          Si todavía dudas de si el problema es la herramienta o el proceso, revisa
          {' '}<a href="/blog/crm-no-falla-falla-el-proceso/" className={linkClass}>tu CRM no falla: falla el proceso que hay detrás</a>.
          HubSpot puede ayudar, pero necesita un flujo comercial definido.
        </p>

        <h2 className={headingClass}>Dónde encaja HubSpot dentro del sistema</h2>

        <p>
          HubSpot encaja especialmente bien cuando la empresa quiere centralizar contactos, conversaciones,
          oportunidades y tareas comerciales. La IA puede ayudar a resumir contexto, clasificar leads o preparar
          respuestas, pero la parte critica sigue siendo operativa.
        </p>

        <ul className={listClass}>
          <li>Registrar leads de formularios, llamadas, WhatsApp o email.</li>
          <li>Crear tareas cuando una oportunidad queda sin siguiente paso.</li>
          <li>Priorizar leads por encaje, urgencia o información disponible.</li>
          <li>Resumir conversaciones para que el equipo responda con contexto.</li>
          <li>Medir que canales generan contactos que avanzan de verdad.</li>
        </ul>

        <p>
          Este enfoque se conecta con la página de
          {' '}<a href="/crm-pymes-seguimiento-clientes/" className={linkClass}>CRM para pymes y seguimiento de clientes</a>,
          donde el foco está en que ninguna oportunidad se quede sin responsable.
        </p>

        <h2 className={headingClass}>HubSpot con IA no sustituye el proceso comercial</h2>

        <p>
          El CRM puede recordar, organizar y sugerir. Pero alguien debe decidir que estados existen, que significa
          un lead cualificado, cuando se insiste, cuando se para y que datos son obligatorios antes de preparar una
          propuesta.
        </p>

        <p>
          Sin esa definición, cualquier CRM se convierte en una lista cara. La IA puede hacer la lista más comoda,
          pero no la convierte automáticamente en ventas ordenadas.
        </p>

        <h2 className={headingClass}>HubSpot, hoja de calculo o CRM simple: como decidir</h2>

        <div className={tableWrapClass}>
          <table className={tableClass}>
            <thead>
              <tr>
                <th className={thClass}>Opción</th>
                <th className={thClass}>Encaja cuando</th>
                <th className={thClass}>Riesgo</th>
                <th className={thClass}>Siguiente paso</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={tdClass}>Hoja de calculo</td>
                <td className={tdClass}>Hay pocos leads y una sola persona gestiona todo.</td>
                <td className={tdClass}>Versiones duplicadas y seguimiento manual.</td>
                <td className={tdClass}>Definir estados y responsables.</td>
              </tr>
              <tr>
                <td className={tdClass}>CRM simple</td>
                <td className={tdClass}>Hace falta ordenar contactos y tareas sin mucha complejidad.</td>
                <td className={tdClass}>Quedarse corto si entran muchos canales.</td>
                <td className={tdClass}>Automatizar recordatorios basicos.</td>
              </tr>
              <tr>
                <td className={tdClass}>HubSpot con IA</td>
                <td className={tdClass}>Se necesita conectar marketing, ventas, atención y seguimiento.</td>
                <td className={tdClass}>Sobredimensionar sin proceso ni adopción del equipo.</td>
                <td className={tdClass}>Mapear el embudo antes de configurar.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className={headingClass}>Casos útiles en pymes de servicios</h2>

        <p>
          Una clínica puede registrar primeras consultas, resumir la necesidad del paciente y activar recordatorios
          antes de la cita. Una academia puede seguir familias interesadas por curso, edad y fecha de matrícula.
          Una inmobiliaria puede separar leads de portales por zona, presupuesto y urgencia.
        </p>

        <p>
          En todos los casos, el valor aparece cuando el CRM conecta con el seguimiento. Para profundizar, lee
          {' '}<a href="/blog/seguimiento-leads-pymes-cuando-insistir/" className={linkClass}>seguimiento de leads en pymes</a>
          y <a href="/blog/lead-scoring-ia-pymes/" className={linkClass}>lead scoring con IA para pymes</a>.
        </p>

        <h2 className={headingClass}>Primer piloto recomendado</h2>

        <p>
          No empieces configurando todo el CRM. Empieza por un flujo: entrada de lead, resumen, estado, responsable,
          proxima acción y recordatorio si no hay respuesta. Si ese flujo se cumple, después puedes ampliar a
          automatizaciones más avanzadas.
        </p>

        <p>
          Si la entrada principal es WhatsApp, revisa
          {' '}<a href="/blog/conectar-whatsapp-crm-sin-crear-mas-trabajo/" className={linkClass}>como conectar WhatsApp con tu CRM</a>.
          Un CRM fuerte pierde valor si las conversaciones importantes se quedan fuera.
        </p>

        <h2 className={headingClass}>Preguntas frecuentes</h2>

        <h3 className={questionClass}>¿HubSpot con IA es buena opción para una pyme?</h3>
        <p>
          Puede ser buena opción si la pyme necesita ordenar leads, CRM, tareas y seguimiento en un sistema común.
          Si solo hay pocas oportunidades y poco volumen, puede bastar una solución más simple antes de crecer.
        </p>

        <h3 className={questionClass}>¿Qué debería configurar primero en HubSpot?</h3>
        <p>
          Primero configura el proceso comercial mínimo: origen del lead, estado, responsable, proxima acción y
          fecha de seguimiento. La IA y las automatizaciones deben apoyar ese flujo, no sustituirlo.
        </p>

        <h3 className={questionClass}>¿Cuándo HubSpot puede ser demasiado para una pyme?</h3>
        <p>
          Puede ser demasiado si la empresa no tiene claro su embudo, si el equipo no va a actualizar estados o si
          solo necesita registrar pocas oportunidades. En ese caso conviene simplificar antes de implantar más capas.
        </p>
      </>
    ),
  },
};

const getCurrentPage = () => {
  if (typeof document === 'undefined') {
    return 'blog-hubspot-ia-pymes';
  }

  return document.getElementById('root')?.dataset.page ?? 'blog-hubspot-ia-pymes';
};

const BlogPostKeywordCluster7: React.FC = () => {
  const article = ARTICLES[getCurrentPage()] ?? ARTICLES['blog-hubspot-ia-pymes'];

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

export default BlogPostKeywordCluster7;
