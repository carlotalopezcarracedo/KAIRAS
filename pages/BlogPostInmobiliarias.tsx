import React from 'react';
import BlogPostLayout from '../components/BlogPostLayout';

const BlogPostInmobiliarias: React.FC = () => {
  return (
    <BlogPostLayout
      tags={['Inmobiliarias', 'Leads', 'CRM']}
      title="Automatizacion para inmobiliarias: como no perder leads de portales y WhatsApp"
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
        En una inmobiliaria, el lead rara vez entra por un unico sitio.
        Puede venir de un portal, de WhatsApp, de una llamada, de la web o de una recomendacion.
        El problema aparece cuando cada canal se atiende por separado y nadie tiene una vision completa.
      </p>

      <p>
        La automatizacion para inmobiliarias no va de responder como una maquina.
        Va de asegurar que cada interesado queda registrado, cualificado y seguido antes de que pierda interes o contacte con otra agencia.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
        Por que se pierden tantos leads inmobiliarios
      </h2>

      <p>
        El mercado inmobiliario exige velocidad, pero tambien contexto.
        Responder rapido sin registrar nada no basta.
        Registrar datos sin seguimiento tampoco.
      </p>

      <ul className="space-y-2 pl-4 border-l border-cyber-purple/30">
        <li>El lead pregunta por una vivienda concreta y nadie registra preferencias.</li>
        <li>La conversacion queda en el movil de una persona.</li>
        <li>No hay recordatorio para volver a contactar si no responde.</li>
        <li>El equipo no sabe si ya se le envio informacion o visita.</li>
        <li>Los leads de portales se mezclan con consultas de baja prioridad.</li>
      </ul>

      <p>
        Este patron se parece mucho al de las pymes que <a href="/blog/por-que-las-pymes-pierden-clientes-antes-de-firmar/" className="text-cyber-purple underline decoration-cyber-purple/50">pierden clientes antes de firmar</a>:
        no falta interes, falta continuidad.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
        Que deberia pasar cuando entra un lead
      </h2>

      <p>
        Un flujo minimo para inmobiliarias deberia hacer cinco cosas:
        identificar el origen, registrar el inmueble o tipo de busqueda, pedir datos clave, asignar responsable y programar el siguiente paso.
      </p>

      <p>
        Datos utiles desde el inicio:
      </p>

      <ul className="space-y-2 pl-4 border-l border-cyber-purple/30">
        <li>Tipo de operacion: compra, alquiler, venta o valoracion.</li>
        <li>Zona de interes.</li>
        <li>Presupuesto o rango aproximado.</li>
        <li>Urgencia y disponibilidad para visita.</li>
        <li>Canal de entrada y propiedad consultada.</li>
      </ul>

      <p>
        Si esto entra directamente en un <a href="/crm-pymes-seguimiento-clientes/" className="text-cyber-purple underline decoration-cyber-purple/50">CRM para pymes de servicios</a>,
        el equipo puede priorizar mejor y no depender de mensajes sueltos.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
        Donde encaja WhatsApp
      </h2>

      <p>
        WhatsApp es muy util para confirmar visitas, enviar informacion breve y mantener contacto.
        Pero no deberia ser el archivo principal de la oportunidad.
        Si un lead pregunta por una vivienda y despues cambia de criterio, ese dato debe quedar en el sistema.
      </p>

      <p>
        Una buena integracion permite que WhatsApp actualice estados:
        visita solicitada, visita confirmada, documentacion enviada, seguimiento pendiente o lead frio.
        La guia sobre <a href="/blog/conectar-whatsapp-crm-sin-crear-mas-trabajo/" className="text-cyber-purple underline decoration-cyber-purple/50">conectar WhatsApp con tu CRM</a>
        explica como hacerlo sin duplicar tareas.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
        Automatizaciones utiles para empezar
      </h2>

      <ul className="space-y-3 pl-4 border-l border-cyber-purple/30">
        <li><span className="text-white font-medium">Lead nuevo:</span> crear contacto y oportunidad al entrar desde portal, web o WhatsApp.</li>
        <li><span className="text-white font-medium">Cualificacion:</span> pedir zona, presupuesto y disponibilidad antes de asignar.</li>
        <li><span className="text-white font-medium">Visitas:</span> enviar confirmacion y recordatorio sin llamada manual.</li>
        <li><span className="text-white font-medium">Seguimiento:</span> activar recordatorio si no responde despues de una visita o propuesta.</li>
        <li><span className="text-white font-medium">Reactivacion:</span> recuperar contactos que buscaron hace meses con nueva informacion relevante.</li>
      </ul>

      <p>
        No hace falta empezar por todo.
        Si hoy el mayor problema es que entran leads y no se contestan a tiempo, empieza por primera respuesta.
        Si el problema es que las visitas no avanzan, empieza por seguimiento posterior.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
        Como evitar parecer insistente
      </h2>

      <p>
        En inmobiliaria, insistir sin aportar valor cansa rapido.
        El seguimiento debe tener contexto:
        una vivienda similar, una bajada de precio, una nueva disponibilidad o una pregunta concreta para ajustar la busqueda.
      </p>

      <p>
        La automatizacion no debe perseguir al lead.
        Debe recordarte cuando tiene sentido escribir y con que motivo.
        Para definir esa cadencia, puedes apoyarte en el criterio de <a href="/blog/seguimiento-leads-pymes-cuando-insistir/" className="text-cyber-purple underline decoration-cyber-purple/50">cuando insistir y cuando parar con un lead</a>.
      </p>
    </BlogPostLayout>
  );
};

export default BlogPostInmobiliarias;
