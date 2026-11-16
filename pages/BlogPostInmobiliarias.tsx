import React from 'react';
import BlogPostLayout from '../components/BlogPostLayout';

const BlogPostInmobiliarias: React.FC = () => {
  return (
    <BlogPostLayout
      tags={['Inmobiliarias', 'Leads', 'CRM']}
      title="Automatización para inmobiliarias: como no perder leads de portales y WhatsApp"
      dateLabel="26 mayo 2026"
      readTime="8 min de lectura"
      ctaEyebrow="Tus leads inmobiliarios entran por varios canales y se pierden por el camino?"
      ctaLabel="Ordenar mis leads"
      relatedResources={[
        { href: '/crm-pymes-seguimiento-clientes/', label: 'CRM para pymes' },
        { href: '/blog/seguimiento-leads-pymes-cuando-insistir/', label: 'Seguimiento de leads' },
      ]}
    >
      <p className="text-lg text-slate-300 leading-relaxed">
        En una inmobiliaria, el lead rara vez entra por un único sitio.
        Puede venir de un portal, de WhatsApp, de una llamada, de la web o de una recomendación.
        El problema aparece cuando cada canal se atiende por separado y nadie tiene una visión completa.
      </p>

      <p>
        La automatización para inmobiliarias no va de responder como una maquina.
        Va de asegurar que cada interesado queda registrado, cualificado y seguido antes de que pierda interés o contacte con otra agencia.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        Por qué se pierden tantos leads inmobiliarios
      </h2>

      <p>
        El mercado inmobiliario exige velocidad, pero también contexto.
        Responder rápido sin registrar nada no basta.
        Registrar datos sin seguimiento tampoco.
      </p>

      <ul className="space-y-2 pl-4 border-l border-cyber-purple/30">
        <li>El lead pregunta por una vivienda concreta y nadie registra preferencias.</li>
        <li>La conversación queda en el móvil de una persona.</li>
        <li>No hay recordatorio para volver a contactar si no responde.</li>
        <li>El equipo no sabe si ya se le envio información o visita.</li>
        <li>Los leads de portales se mezclan con consultas de baja prioridad.</li>
      </ul>

      <p>
        Este patrón se parece mucho al de las pymes que <a href="/blog/por-que-las-pymes-pierden-clientes-antes-de-firmar/" className="text-cyber-purple underline decoration-cyber-purple/50">pierden clientes antes de firmar</a>:
        no falta interés, falta continuidad.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        Qué debería pasar cuando entra un lead
      </h2>

      <p>
        Un flujo mínimo para inmobiliarias debería hacer cinco cosas:
        identificar el origen, registrar el inmueble o tipo de busqueda, pedir datos clave, asignar responsable y programar el siguiente paso.
      </p>

      <p>
        Datos útiles desde el inicio:
      </p>

      <ul className="space-y-2 pl-4 border-l border-cyber-purple/30">
        <li>Tipo de operación: compra, alquiler, venta o valoración.</li>
        <li>Zona de interés.</li>
        <li>Presupuesto o rango aproximado.</li>
        <li>Urgencia y disponibilidad para visita.</li>
        <li>Canal de entrada y propiedad consultada.</li>
      </ul>

      <p>
        Si esto entra directamente en un <a href="/crm-pymes-seguimiento-clientes/" className="text-cyber-purple underline decoration-cyber-purple/50">CRM para pymes de servicios</a>,
        el equipo puede priorizar mejor y no depender de mensajes sueltos.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        Dónde encaja WhatsApp
      </h2>

      <p>
        WhatsApp es muy útil para confirmar visitas, enviar información breve y mantener contacto.
        Pero no debería ser el archivo principal de la oportunidad.
        Si un lead pregunta por una vivienda y después cambia de criterio, ese dato debe quedar en el sistema.
      </p>

      <p>
        Una buena integración permite que WhatsApp actualice estados:
        visita solicitada, visita confirmada, documentación enviada, seguimiento pendiente o lead frío.
        La guía sobre <a href="/blog/conectar-whatsapp-crm-sin-crear-mas-trabajo/" className="text-cyber-purple underline decoration-cyber-purple/50">conectar WhatsApp con tu CRM</a>
        explica como hacerlo sin duplicar tareas.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        Automatizaciones útiles para empezar
      </h2>

      <ul className="space-y-3 pl-4 border-l border-cyber-purple/30">
        <li><span className="text-white font-medium">Lead nuevo:</span> crear contacto y oportunidad al entrar desde portal, web o WhatsApp.</li>
        <li><span className="text-white font-medium">Cualificación:</span> pedir zona, presupuesto y disponibilidad antes de asignar.</li>
        <li><span className="text-white font-medium">Visitas:</span> enviar confirmación y recordatorio sin llamada manual.</li>
        <li><span className="text-white font-medium">Seguimiento:</span> activar recordatorio si no responde después de una visita o propuesta.</li>
        <li><span className="text-white font-medium">Reactivación:</span> recuperar contactos que buscaron hace meses con nueva información relevante.</li>
      </ul>

      <p>
        No hace falta empezar por todo.
        Si hoy el mayor problema es que entran leads y no se contestan a tiempo, empieza por primera respuesta.
        Si el problema es que las visitas no avanzan, empieza por seguimiento posterior.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        Cómo evitar parecer insistente
      </h2>

      <p>
        En inmobiliaria, insistir sin aportar valor cansa rápido.
        El seguimiento debe tener contexto:
        una vivienda similar, una bajada de precio, una nueva disponibilidad o una pregunta concreta para ajustar la busqueda.
      </p>

      <p>
        La automatización no debe perseguir al lead.
        Debe recordarte cuando tiene sentido escribir y con que motivo.
        Para definir esa cadencia, puedes apoyarte en el criterio de <a href="/blog/seguimiento-leads-pymes-cuando-insistir/" className="text-cyber-purple underline decoration-cyber-purple/50">cuando insistir y cuando parar con un lead</a>.
      </p>
    </BlogPostLayout>
  );
};

export default BlogPostInmobiliarias;
