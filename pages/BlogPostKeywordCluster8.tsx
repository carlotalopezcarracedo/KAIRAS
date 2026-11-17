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
  'blog-kit-digital-automatizacion-ia': {
    tags: ['Kit Digital', 'IA', 'Procesos'],
    title: 'Kit Digital y automatización con IA para pymes: que revisar antes de invertir',
    dateLabel: '5 septiembre 2026',
    readTime: '10 min de lectura',
    ctaEyebrow: 'Quieres convertir la ayuda en un proceso que funcione?',
    ctaLabel: 'Revisar mi caso',
    relatedResources: [
      { href: '/blog/cuanto-cuesta-automatizar-procesos-pyme/', label: 'Coste de automatizar' },
      { href: '/blog/cuanto-cuesta-automatizar-procesos-pyme/', label: 'Piloto con IA' },
    ],
    body: (
      <>
        <p className="text-lg text-slate-300 leading-relaxed">
          Kit Digital y automatización con IA pueden encajar en una pyme cuando la ayuda se usa para ordenar un
          proceso real: gestión de clientes, gestión de procesos, analítica o tareas administrativas con datos
          claros. El error es empezar por la subvención y no por el cuello de botella.
        </p>

        <p>
          Muchas empresas buscan "Kit Digital automatización IA" porque quieren aprovechar una oportunidad de
          digitalización. Tiene sentido, pero conviene bajar la decisión a tierra: que proceso se repite, que datos
          entran, que herramienta lo sostiene y donde debe intervenir una persona.
        </p>

        <h2 className={headingClass}>¿Qué cubre Kit Digital cuando hablamos de automatización con IA?</h2>

        <p className={answerClass}>
          Kit Digital es un programa publico de ayudas para que pymes y autónomos adopten soluciones de
          digitalización. En automatización con IA, la lectura práctica es revisar si el proyecto encaja en
          categorías como gestión de procesos, gestión de clientes, business intelligence o soluciones con IA
          asociada, siempre comprobando las condiciones vigentes en fuentes oficiales.
        </p>

        <p>
          La referencia debe ser siempre oficial. El
          {' '}<a href="https://www.kitdigital.red.es/" className={linkClass}>portal oficial de Kit Digital</a>
          {' '}y su página de
          {' '}<a href="https://kitdigital.red.es/evaluacion-de-impacto" className={linkClass}>evaluación de impacto</a>
          {' '}recogen categorías relacionadas con gestión de procesos, clientes, analítica y capacidades de IA.
          Aun así, la elección técnica debería salir del mapa operativo de la empresa, no solo del catalogo.
        </p>

        <h2 className={headingClass}>¿La pregunta SEO también es operativa: que problema buscas resolver?</h2>

        <p>
          La automatización financiada solo tiene retorno si ataca un trabajo repetido. Si una academia recibe
          consultas por WhatsApp, formularios y email, el proyecto puede ser registrar cada contacto, clasificarlo y
          activar seguimiento. Si una asesoría recibe documentos, el valor puede estar en ordenar vencimientos y
          avisos. Si una clínica pierde citas, puede estar en recordatorios y confirmaciones.
        </p>

        <p>
          Antes de pedir presupuestos, conviene leer
          {' '}<a href="/blog/como-saber-que-proceso-automatizar-primero/" className={linkClass}>como saber que proceso automatizar primero</a>
          {' '}y la guía de
          {' '}<a href="/blog/tipos-automatizacion-empresa-reglas-ia-rpa/" className={linkClass}>diferencia entre digitalización, automatización e IA</a>.
          Así evitas comprar una solución que digitaliza una parte pero deja el seguimiento igual de manual.
        </p>

        <h2 className={headingClass}>Checklist antes de usar Kit Digital para automatización IA</h2>

        <ul className={listClass}>
          <li>Define el proceso concreto: entrada, pasos, responsable, salida y excepciones.</li>
          <li>Comprueba si hay datos suficientes para que la IA clasifique, resuma o proponga una acción.</li>
          <li>Decide que se automatiza y que queda con revisión humana.</li>
          <li>Valora si la solución se integra con CRM, email, calendario, WhatsApp o documentos.</li>
          <li>Pregunta por mantenimiento, permisos, trazabilidad y plan de fallo.</li>
          <li>Contrasta la categoria de ayuda con la convocatoria vigente antes de firmar.</li>
        </ul>

        <p>
          Si el proyecto implica datos de clientes, documentos o mensajes sensibles, revisa antes el checklist de
          {' '}<a href="/blog/seguridad-datos-automatizacion-ia-pymes/" className={linkClass}>seguridad de datos en automatizaciones con IA</a>.
          En proyectos financiados también hace falta pensar en el día dos: quien revisa el sistema cuando ya esta
          funcionando.
        </p>

        <h2 className={headingClass}>Categorias que suelen conectar con automatización e IA</h2>

        <div className={tableWrapClass}>
          <table className={tableClass}>
            <thead>
              <tr>
                <th className={thClass}>Categoria</th>
                <th className={thClass}>Encaje operativo</th>
                <th className={thClass}>Riesgo habitual</th>
                <th className={thClass}>Criterio KAIRAS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={tdClass}>Gestión de procesos</td>
                <td className={tdClass}>Tareas internas, partes, estados, avisos y aprobaciones.</td>
                <td className={tdClass}>Automatizar un proceso que nadie ha documentado.</td>
                <td className={tdClass}>Mapear primero y automatizar después.</td>
              </tr>
              <tr>
                <td className={tdClass}>Gestión de clientes</td>
                <td className={tdClass}>Leads, CRM, seguimiento, recordatorios y oportunidades.</td>
                <td className={tdClass}>Guardar datos sin crear siguiente paso.</td>
                <td className={tdClass}>Conectar captación con responsable y cadencia.</td>
              </tr>
              <tr>
                <td className={tdClass}>BI y analítica</td>
                <td className={tdClass}>Indicadores, informes y lectura de datos para decidir mejor.</td>
                <td className={tdClass}>Crear cuadros bonitos con datos poco fiables.</td>
                <td className={tdClass}>Empezar por datos limpios y preguntas de negocio.</td>
              </tr>
              <tr>
                <td className={tdClass}>IA asociada</td>
                <td className={tdClass}>Resumen, clasificación, extracción o ayuda a decisiones repetidas.</td>
                <td className={tdClass}>Delegar criterio sensible en automático.</td>
                <td className={tdClass}>Usar IA con límites y revisión.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className={headingClass}>Cómo convertir la ayuda en un proyecto que no se quede a medias</h2>

        <p>
          Un buen proyecto no empieza con "quiero IA". Empieza con una frase más concreta: "cada semana copiamos
          consultas desde tres canales", "perdemos presupuestos sin seguimiento" o "recepción dedica horas a
          confirmar citas". Desde ahí se decide si hace falta IA, reglas, CRM, formularios, integraciones o una mezcla.
        </p>

        <p>
          KAIRAS trabaja esa parte desde
          {' '}<a href="/automatizacion-procesos/" className={linkClass}>automatización de procesos para pymes</a>,
          {' '}<a href="/ia-empresas/" className={linkClass}>IA aplicada a empresas</a>
          {' '}y <a href="/crm-pymes-seguimiento-clientes/" className={linkClass}>CRM y seguimiento de clientes</a>.
          El objetivo no es solo cumplir con una ayuda: es que el equipo trabaje con menos fricción.
        </p>

        <h2 className={headingClass}>Primer piloto recomendado</h2>

        <p>
          Si una pyme quiere usar Kit Digital para automatización con IA, el primer piloto debería ser pequeño y
          medible: elegir un flujo con volumen, registrar el antes, automatizar la parte repetida, mantener revisión
          humana y comparar tiempo recuperado, errores evitados y oportunidades no perdidas.
        </p>

        <p>
          La guía de
          {' '}<a href="/blog/cuanto-cuesta-automatizar-procesos-pyme/" className={linkClass}>proyecto piloto de automatización con IA</a>
          {' '}te ayuda a poner límites antes de ampliar. Mejor un flujo que funciona que cinco promesas sin uso diario.
        </p>

        <h2 className={headingClass}>Preguntas frecuentes</h2>

        <h3 className={questionClass}>¿Kit Digital sirve para automatización con IA?</h3>
        <p>
          Puede servir si el proyecto encaja en una categoria vigente de digitalización y resuelve un proceso real.
          Conviene confirmar siempre las condiciones oficiales antes de contratar o solicitar la ayuda.
        </p>

        <h3 className={questionClass}>¿Qué proceso conviene automatizar primero con una ayuda?</h3>
        <p>
          El mejor primer proceso suele ser repetitivo, medible y de bajo riesgo: seguimiento de leads, avisos,
          documentos, agenda, confirmaciones o tareas administrativas con reglas claras.
        </p>

        <h3 className={questionClass}>¿La IA debería estar en todo el proyecto?</h3>
        <p>
          No. La IA aporta valor cuando hay que interpretar texto, clasificar, resumir o extraer datos. Para pasos
          simples y predecibles, una regla o integración suele ser más estable.
        </p>
      </>
    ),
  },
};

const getCurrentPage = () => {
  if (typeof document === 'undefined') {
    return 'blog-kit-digital-automatizacion-ia';
  }

  return document.getElementById('root')?.dataset.page ?? 'blog-kit-digital-automatizacion-ia';
};

const BlogPostKeywordCluster8: React.FC = () => {
  const article = ARTICLES[getCurrentPage()] ?? ARTICLES['blog-kit-digital-automatizacion-ia'];

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

export default BlogPostKeywordCluster8;
