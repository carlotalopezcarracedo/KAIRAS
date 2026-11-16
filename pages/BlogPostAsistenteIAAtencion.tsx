import React from 'react';
import BlogPostLayout from '../components/BlogPostLayout';

const BlogPostAsistenteIAAtencion: React.FC = () => {
  return (
    <BlogPostLayout
      tags={['IA', 'Atencion', 'WhatsApp']}
      title="Asistente de IA para atención al cliente: que puede resolver y que no"
      dateLabel="19 mayo 2026"
      readTime="8 min de lectura"
      ctaEyebrow="Tu equipo responde demasiadas consultas repetidas cada semana?"
      ctaLabel="Revisar atención con KAIRAS"
      relatedResources={[
        { href: '/blog/ia-para-pymes-cuando-tiene-sentido/', label: 'IA para pymes' },
        { href: '/automatizacion-whatsapp-empresas/', label: 'WhatsApp automatizado' },
      ]}
    >
      <p className="text-lg text-slate-300 leading-relaxed">
        Un asistente de IA en atención al cliente no debería intentar sustituir al equipo.
        Su trabajo es resolver lo repetitivo, ordenar la entrada de consultas y pasar a una persona solo lo que realmente necesita criterio humano.
      </p>

      <p>
        Bien diseñado, reduce interrupciones y mejora tiempos de respuesta.
        Mal diseñado, se convierte en una capa fria que frustra a clientes y genera más trabajo al equipo.
        La diferencia esta en el flujo, no en la herramienta.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        Qué puede hacer bien un asistente de IA
      </h2>

      <p>
        Un asistente funciona especialmente bien cuando trabaja con información estable y reglas claras.
        No necesita inventar nada.
        Necesita saber que responder, que preguntar y cuando derivar.
      </p>

      <ul className="space-y-2 pl-4 border-l border-cyber-purple/30">
        <li>Responder dudas frecuentes sobre horarios, servicios, precios orientativos o disponibilidad.</li>
        <li>Pedir datos iniciales para que el equipo no tenga que empezar desde cero.</li>
        <li>Clasificar el motivo de contacto antes de asignarlo a una persona.</li>
        <li>Indicar los siguientes pasos de forma clara y consistente.</li>
        <li>Preparar un resumen de la conversación para CRM o seguimiento.</li>
      </ul>

      <p>
        Esto conecta directamente con el problema de <a href="/blog/dejar-de-gestionar-whatsapp-empresa-a-mano/" className="text-cyber-purple underline decoration-cyber-purple/50">gestionar WhatsApp de empresa a mano</a>.
        Cuando cada consulta interrumpe al equipo, el asistente puede filtrar y ordenar sin perder cercania.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        Lo que no debería hacer
      </h2>

      <p>
        Hay decisiones que no conviene dejar en manos de una automatización.
        No por miedo a la IA, sino por responsabilidad operativa.
        Una pyme gana más definiendo límites claros que intentando automatizar conversaciones que necesitan matices.
      </p>

      <ul className="space-y-2 pl-4 border-l border-cyber-purple/30">
        <li>No debería cerrar acuerdos con condiciones especiales sin validación humana.</li>
        <li>No debería resolver quejas sensibles sin escalar al equipo.</li>
        <li>No debería dar asesoramiento tecnico, legal o clinico si requiere profesional cualificado.</li>
        <li>No debería esconder la opción de hablar con una persona.</li>
      </ul>

      <p>
        Un buen asistente no encierra al cliente en un menu.
        Le da una respuesta útil o lo envía al lugar correcto con contexto.
        Esa es la diferencia entre automatizar atención y crear una barrera.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        Dónde colocarlo dentro de la operativa
      </h2>

      <p>
        El asistente suele funcionar mejor en la primera capa de contacto:
        web, formulario, WhatsApp o chat de entrada.
        Su objetivo no es llevar toda la relación, sino ordenar la puerta de entrada.
      </p>

      <p>
        En una clínica puede recoger motivo de consulta, preferencia horaria y datos basicos antes de que recepción intervenga.
        En una academia puede identificar curso, nivel y disponibilidad.
        En una empresa de reformas puede pedir ubicación, tipo de trabajo y urgencia antes de preparar una respuesta.
      </p>

      <p>
        Para que el sistema no se quede aislado, conviene conectarlo con un
        <a href="/crm-pymes-seguimiento-clientes/" className="text-cyber-purple underline decoration-cyber-purple/50"> CRM y seguimiento de clientes</a>.
        Si el asistente responde pero no registra nada, solo estas moviendo el caos a otro sitio.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        Qué información necesita antes de empezar
      </h2>

      <p>
        Antes de configurar un asistente, hay que preparar una base mínima.
        No hace falta un manual enorme, pero si una fuente fiable que diga que puede responder y que no.
      </p>

      <ul className="space-y-3 pl-4 border-l border-cyber-purple/30">
        <li><span className="text-white font-medium">Servicios:</span> que ofrece la empresa, que incluye y que queda fuera.</li>
        <li><span className="text-white font-medium">Preguntas frecuentes:</span> dudas reales que el equipo ya responde cada semana.</li>
        <li><span className="text-white font-medium">Reglas de derivación:</span> cuando debe pasar a una persona y con que prioridad.</li>
        <li><span className="text-white font-medium">Tono:</span> como habla la empresa para que la respuesta no parezca generica.</li>
      </ul>

      <p>
        Si esa información no existe, el primer trabajo no es configurar IA.
        Es ordenar conocimiento interno.
        La guía sobre <a href="/blog/ia-para-pymes-cuando-tiene-sentido/" className="text-cyber-purple underline decoration-cyber-purple/50">cuando tiene sentido aplicar IA en una pyme</a>
        ayuda a decidir si estas listo para esta capa.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        Cómo medir si esta funcionando
      </h2>

      <p>
        No midas solo conversaciones atendidas.
        Mide si el sistema reduce carga y mejora continuidad.
        Tres indicadores sencillos bastan para empezar:
      </p>

      <ul className="space-y-2 pl-4 border-l border-cyber-purple/30">
        <li>Tiempo medio de primera respuesta.</li>
        <li>Porcentaje de consultas resueltas sin intervención humana.</li>
        <li>Número de leads o solicitudes que llegan al equipo con datos completos.</li>
      </ul>

      <p>
        Si baja la carga manual pero suben las quejas o las conversaciones confusas, el asistente no esta bien diseñado.
        Si el equipo recibe menos interrupciones y mejores contextos, vas en buena dirección.
      </p>

      <p>
        En canales como WhatsApp, también importa elegir bien la base técnica.
        La comparativa entre <a href="/blog/whatsapp-business-app-vs-api-pymes/" className="text-cyber-purple underline decoration-cyber-purple/50">WhatsApp Business App y API</a>
        explica cuando una pyme puede quedarse con respuestas básicas y cuando necesita una integración más seria.
      </p>
    </BlogPostLayout>
  );
};

export default BlogPostAsistenteIAAtencion;
