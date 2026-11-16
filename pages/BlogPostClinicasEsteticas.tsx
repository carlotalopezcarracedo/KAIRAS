import React from 'react';
import BlogPostLayout from '../components/BlogPostLayout';

const BlogPostClinicasEsteticas: React.FC = () => {
  return (
    <BlogPostLayout
      tags={['Clínicas esteticas', 'Consultas', 'Seguimiento']}
      title="Automatización para clínicas esteticas: primera consulta, revisiones y seguimiento"
      dateLabel="4 junio 2026"
      readTime="8 min de lectura"
      ctaEyebrow="Tu clínica estética pierde tiempo entre consultas, revisiones y WhatsApp?"
      ctaLabel="Ordenar mi clínica"
      relatedResources={[
        { href: '/automatizacion-clinicas/', label: 'Automatización para clínicas' },
        { href: '/blog/seguimiento-pacientes-clinicas-antes-despues-cita/', label: 'Seguimiento de pacientes' },
      ]}
    >
      <p className="text-lg text-slate-300 leading-relaxed">
        En una clínica estética, la experiencia del paciente empieza antes de la primera cita.
        Empieza cuando pregunta por un tratamiento, envía una duda por WhatsApp, pide precio o necesita saber si su caso encaja.
      </p>

      <p>
        La automatización para clínicas esteticas no debe sustituir la valoración profesional.
        Debe ordenar la parte repetitiva: primera respuesta, datos previos, recordatorios, revisiones y seguimiento posterior.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        Dónde se pierde tiempo en una clínica estética
      </h2>

      <p>
        El equipo suele recibir preguntas parecidas cada semana:
        horarios, precios orientativos, cuidados previos, disponibilidad, tratamientos recomendados o revisiones.
        Si todo se responde a mano, recepción se satura y el seguimiento se vuelve irregular.
      </p>

      <ul className="space-y-2 pl-4 border-l border-cyber-purple/30">
        <li>Consultas por WhatsApp que no quedan registradas.</li>
        <li>Pacientes interesados sin siguiente paso claro.</li>
        <li>Recordatorios de cita enviados manualmente.</li>
        <li>Instrucciones previas o posteriores repetidas una a una.</li>
        <li>Revisiones pendientes que dependen de memoria del equipo.</li>
      </ul>

      <p>
        Este problema conecta con el seguimiento general que explicamos en <a href="/blog/seguimiento-pacientes-clinicas-antes-despues-cita/" className="text-cyber-purple underline decoration-cyber-purple/50">pacientes antes y después de la cita</a>,
        pero en estética hay un matiz importante: la confianza y el contexto importan tanto como la rapidez.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        Qué se puede automatizar sin perder trato personal
      </h2>

      <h3 className="text-base font-black uppercase tracking-wider text-white/80 pt-2">
        Primera respuesta cualificada
      </h3>
      <p>
        El sistema puede recoger tratamiento de interés, disponibilidad, si ya es paciente, canal de entrada y dudas principales.
        Así el equipo no empieza cada conversación desde cero.
      </p>

      <h3 className="text-base font-black uppercase tracking-wider text-white/80 pt-2">
        Recordatorios e instrucciones
      </h3>
      <p>
        Hay mensajes que conviene enviar siempre: confirmación de cita, preparación previa, cuidados posteriores y aviso de revisión.
        Automatizarlos reduce carga manual y evita olvidos.
      </p>

      <h3 className="text-base font-black uppercase tracking-wider text-white/80 pt-2">
        Seguimiento posterior
      </h3>
      <p>
        Después de una cita, el sistema puede crear una tarea de revisión, enviar una pauta validada por la clínica o avisar si el paciente necesita contacto humano.
        La decisión clínica sigue siendo humana.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        WhatsApp es canal, no sistema
      </h2>

      <p>
        WhatsApp ayuda porque el paciente lo usa a diario.
        Pero si la información se queda solo en chats, la clínica pierde control.
        Lo recomendable es conectar WhatsApp con un <a href="/crm-pymes-seguimiento-clientes/" className="text-cyber-purple underline decoration-cyber-purple/50">CRM de seguimiento para pymes</a>
        donde cada paciente tenga estado, responsable y próximo paso.
      </p>

      <p>
        La guía sobre <a href="/blog/conectar-whatsapp-crm-sin-crear-mas-trabajo/" className="text-cyber-purple underline decoration-cyber-purple/50">conectar WhatsApp con tu CRM</a>
        explica por que no conviene sincronizarlo todo, sino solo lo que cambia el proceso.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        Ejemplo de flujo para primera consulta
      </h2>

      <p>
        Una persona pregunta por un tratamiento.
        El sistema responde con información base, pide datos mínimos y ofrece disponibilidad.
        Si confirma cita, se envía recordatorio y preparación previa.
        Después de la cita, se crea una tarea de revisión y, si procede, una comunicación de cuidados posteriores.
      </p>

      <p>
        El equipo no pierde cercania.
        Gana contexto y deja de repetir instrucciones manualmente.
        Ese es el tipo de <a href="/automatizacion-clinicas/" className="text-cyber-purple underline decoration-cyber-purple/50">automatización para clínicas</a>
        que tiene sentido: clara, limitada y orientada a reducir fricción.
      </p>
    </BlogPostLayout>
  );
};

export default BlogPostClinicasEsteticas;
