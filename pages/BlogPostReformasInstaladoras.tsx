import React from 'react';
import BlogPostLayout from '../components/BlogPostLayout';

const BlogPostReformasInstaladoras: React.FC = () => {
  return (
    <BlogPostLayout
      tags={['Reformas', 'Presupuestos', 'Operativa']}
      title="Automatizacion para reformas e instaladoras: presupuestos, visitas y seguimiento"
      dateLabel="4 junio 2026"
      readTime="8 min de lectura"
      ctaEyebrow="Tus presupuestos y visitas dependen demasiado del seguimiento manual?"
      ctaLabel="Ordenar mis presupuestos"
      relatedResources={[
        { href: '/blog/automatizar-presupuestos-seguimiento-pymes/', label: 'Presupuestos y seguimiento' },
        { href: '/automatizacion-procesos/', label: 'Automatizacion de procesos' },
      ]}
    >
      <p className="text-lg text-slate-300 leading-relaxed">
        En reformas, instaladoras y servicios tecnicos, la oportunidad suele perderse entre la visita, el presupuesto y el seguimiento.
        No porque falte interes, sino porque cada paso exige datos, agenda, criterio y continuidad.
      </p>

      <p>
        La automatizacion para reformas e instaladoras no sustituye la visita ni el criterio tecnico.
        Ayuda a que cada solicitud avance con orden: datos completos, cita programada, presupuesto enviado y siguiente paso claro.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        Por que se enfria una solicitud de reforma o instalacion
      </h2>

      <p>
        Una persona pide informacion, se agenda una visita, falta una medida, el presupuesto queda pendiente y el seguimiento se deja para otro dia.
        Si el equipo tiene mucho trabajo, esa oportunidad puede quedarse sin ritmo.
      </p>

      <ul className="space-y-2 pl-4 border-l border-cyber-purple/30">
        <li>Solicitudes que llegan por WhatsApp, llamada, web o recomendacion.</li>
        <li>Visitas sin datos previos suficientes.</li>
        <li>Presupuestos que se preparan desde cero una y otra vez.</li>
        <li>Propuestas enviadas sin recordatorio de seguimiento.</li>
        <li>Clientes que preguntan por estado porque nadie actualizo el proceso.</li>
      </ul>

      <p>
        Este tramo ya esta relacionado con el contenido sobre <a href="/blog/automatizar-presupuestos-seguimiento-pymes/" className="text-cyber-purple underline decoration-cyber-purple/50">automatizar presupuestos y seguimiento</a>,
        pero en reformas e instalaciones hay un matiz clave: la visita tecnica condiciona todo el flujo.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        Que datos conviene recoger antes de la visita
      </h2>

      <p>
        Cuanto mejor llega preparada la visita, menos vueltas necesita el presupuesto.
        Un formulario o flujo inicial puede recoger informacion sin hacer perder tiempo al cliente ni al equipo.
      </p>

      <ul className="space-y-2 pl-4 border-l border-cyber-purple/30">
        <li>Tipo de trabajo: reforma, instalacion, mantenimiento o reparacion.</li>
        <li>Zona y disponibilidad para visita.</li>
        <li>Fotos, medidas o documentos necesarios.</li>
        <li>Urgencia aproximada y limitaciones de horario.</li>
        <li>Persona responsable y canal preferido de contacto.</li>
      </ul>

      <p>
        No se trata de pedirlo todo.
        Se trata de pedir lo suficiente para que la visita no empiece desde cero.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        El flujo minimo que ordena la operativa
      </h2>

      <p>
        Para una instaladora o empresa de reformas, un flujo sencillo puede tener estas etapas:
      </p>

      <ul className="space-y-3 pl-4 border-l border-cyber-purple/30">
        <li><span className="text-white font-medium">Solicitud nueva:</span> registrar origen, servicio y datos basicos.</li>
        <li><span className="text-white font-medium">Cualificacion:</span> confirmar si encaja, si falta informacion y si requiere visita.</li>
        <li><span className="text-white font-medium">Agenda:</span> proponer o confirmar visita tecnica.</li>
        <li><span className="text-white font-medium">Presupuesto:</span> crear tarea y fecha limite de envio.</li>
        <li><span className="text-white font-medium">Seguimiento:</span> recordar al responsable cuando toca revisar respuesta.</li>
      </ul>

      <p>
        Si estas etapas viven en un <a href="/crm-pymes-seguimiento-clientes/" className="text-cyber-purple underline decoration-cyber-purple/50">sistema de CRM y seguimiento</a>,
        el equipo puede saber que oportunidades estan paradas y por que.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        Donde no conviene automatizar
      </h2>

      <p>
        Hay partes que deben seguir siendo humanas.
        Valorar una obra, detectar un riesgo tecnico, decidir si un trabajo compensa o negociar condiciones requiere criterio.
        Automatizar bien tambien es respetar esos limites.
      </p>

      <p>
        Lo que si puede automatizarse es la continuidad alrededor de ese criterio:
        pedir datos, confirmar cita, recordar documentos, crear tareas, actualizar estados y avisar si una propuesta lleva demasiados dias sin respuesta.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        Como evitar que el seguimiento parezca insistente
      </h2>

      <p>
        En reformas e instalaciones, el seguimiento debe aportar contexto.
        No basta con "te interesa?".
        Es mejor recordar el alcance, resolver una duda habitual, confirmar si falta algo o proponer una decision concreta.
      </p>

      <p>
        Para definir esa cadencia, ayuda revisar <a href="/blog/seguimiento-leads-pymes-cuando-insistir/" className="text-cyber-purple underline decoration-cyber-purple/50">cuando insistir y cuando parar con un lead</a>.
        El objetivo no es perseguir al cliente, sino que ninguna oportunidad quede abandonada por olvido.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        Por donde empezar
      </h2>

      <p>
        Empieza por el punto que mas friccion genera hoy.
        Si faltan datos, automatiza la recogida.
        Si se retrasan visitas, ordena agenda.
        Si los presupuestos se envian tarde, crea tareas y plantillas.
        Si se pierden propuestas, automatiza seguimiento.
      </p>

      <p>
        La <a href="/automatizacion-procesos/" className="text-cyber-purple underline decoration-cyber-purple/50">automatizacion de procesos</a> funciona mejor cuando se aplica a un tramo concreto.
        En empresas de reformas e instaladoras, ese tramo suele estar entre solicitud, visita, presupuesto y decision.
      </p>
    </BlogPostLayout>
  );
};

export default BlogPostReformasInstaladoras;
