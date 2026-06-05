import React from 'react';
import BlogPostLayout from '../components/BlogPostLayout';

const BlogPostClinicasEsteticas: React.FC = () => {
  return (
    <BlogPostLayout
      tags={['Clinicas esteticas', 'Consultas', 'Seguimiento']}
      title="Automatizacion para clinicas esteticas: primera consulta, revisiones y seguimiento"
      dateLabel="4 junio 2026"
      readTime="8 min de lectura"
      ctaEyebrow="Tu clinica estetica pierde tiempo entre consultas, revisiones y WhatsApp?"
      ctaLabel="Ordenar mi clinica"
      relatedResources={[
        { href: '/automatizacion-clinicas/', label: 'Automatizacion para clinicas' },
        { href: '/blog/seguimiento-pacientes-clinicas-antes-despues-cita/', label: 'Seguimiento de pacientes' },
      ]}
    >
      <p className="text-lg text-slate-300 leading-relaxed">
        En una clinica estetica, la experiencia del paciente empieza antes de la primera cita.
        Empieza cuando pregunta por un tratamiento, envia una duda por WhatsApp, pide precio o necesita saber si su caso encaja.
      </p>

      <p>
        La automatizacion para clinicas esteticas no debe sustituir la valoracion profesional.
        Debe ordenar la parte repetitiva: primera respuesta, datos previos, recordatorios, revisiones y seguimiento posterior.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        Donde se pierde tiempo en una clinica estetica
      </h2>

      <p>
        El equipo suele recibir preguntas parecidas cada semana:
        horarios, precios orientativos, cuidados previos, disponibilidad, tratamientos recomendados o revisiones.
        Si todo se responde a mano, recepcion se satura y el seguimiento se vuelve irregular.
      </p>

      <ul className="space-y-2 pl-4 border-l border-cyber-purple/30">
        <li>Consultas por WhatsApp que no quedan registradas.</li>
        <li>Pacientes interesados sin siguiente paso claro.</li>
        <li>Recordatorios de cita enviados manualmente.</li>
        <li>Instrucciones previas o posteriores repetidas una a una.</li>
        <li>Revisiones pendientes que dependen de memoria del equipo.</li>
      </ul>

      <p>
        Este problema conecta con el seguimiento general que explicamos en <a href="/blog/seguimiento-pacientes-clinicas-antes-despues-cita/" className="text-cyber-purple underline decoration-cyber-purple/50">pacientes antes y despues de la cita</a>,
        pero en estetica hay un matiz importante: la confianza y el contexto importan tanto como la rapidez.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        Que se puede automatizar sin perder trato personal
      </h2>

      <h3 className="text-base font-black uppercase tracking-wider text-white/80 pt-2">
        Primera respuesta cualificada
      </h3>
      <p>
        El sistema puede recoger tratamiento de interes, disponibilidad, si ya es paciente, canal de entrada y dudas principales.
        Asi el equipo no empieza cada conversacion desde cero.
      </p>

      <h3 className="text-base font-black uppercase tracking-wider text-white/80 pt-2">
        Recordatorios e instrucciones
      </h3>
      <p>
        Hay mensajes que conviene enviar siempre: confirmacion de cita, preparacion previa, cuidados posteriores y aviso de revision.
        Automatizarlos reduce carga manual y evita olvidos.
      </p>

      <h3 className="text-base font-black uppercase tracking-wider text-white/80 pt-2">
        Seguimiento posterior
      </h3>
      <p>
        Despues de una cita, el sistema puede crear una tarea de revision, enviar una pauta validada por la clinica o avisar si el paciente necesita contacto humano.
        La decision clinica sigue siendo humana.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        WhatsApp es canal, no sistema
      </h2>

      <p>
        WhatsApp ayuda porque el paciente lo usa a diario.
        Pero si la informacion se queda solo en chats, la clinica pierde control.
        Lo recomendable es conectar WhatsApp con un <a href="/crm-pymes-seguimiento-clientes/" className="text-cyber-purple underline decoration-cyber-purple/50">CRM de seguimiento para pymes</a>
        donde cada paciente tenga estado, responsable y proximo paso.
      </p>

      <p>
        La guia sobre <a href="/blog/conectar-whatsapp-crm-sin-crear-mas-trabajo/" className="text-cyber-purple underline decoration-cyber-purple/50">conectar WhatsApp con tu CRM</a>
        explica por que no conviene sincronizarlo todo, sino solo lo que cambia el proceso.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        Ejemplo de flujo para primera consulta
      </h2>

      <p>
        Una persona pregunta por un tratamiento.
        El sistema responde con informacion base, pide datos minimos y ofrece disponibilidad.
        Si confirma cita, se envia recordatorio y preparacion previa.
        Despues de la cita, se crea una tarea de revision y, si procede, una comunicacion de cuidados posteriores.
      </p>

      <p>
        El equipo no pierde cercania.
        Gana contexto y deja de repetir instrucciones manualmente.
        Ese es el tipo de <a href="/automatizacion-clinicas/" className="text-cyber-purple underline decoration-cyber-purple/50">automatizacion para clinicas</a>
        que tiene sentido: clara, limitada y orientada a reducir friccion.
      </p>
    </BlogPostLayout>
  );
};

export default BlogPostClinicasEsteticas;
