import React from 'react';
import BlogPostLayout from '../components/BlogPostLayout';

const BlogPostComoFuncionaAutomatizacionIA: React.FC = () => {
  return (
    <BlogPostLayout
      tags={['IA', 'Procesos', 'Sistema']}
      title="Como funciona la automatizacion con IA en una empresa de servicios"
      dateLabel="5 junio 2026"
      readTime="7 min de lectura"
      ctaEyebrow="Quieres ver como funcionaria un flujo con IA en tu empresa?"
      ctaLabel="Disenar mi flujo"
      relatedResources={[
        { href: '/automatizacion-procesos/', label: 'Automatizacion de procesos' },
        { href: '/blog/automatizacion-procesos-con-ia-pymes/', label: 'Procesos con IA' },
      ]}
    >
      <p className="text-lg text-slate-300 leading-relaxed">
        La automatizacion con IA funciona conectando una entrada de informacion, una interpretacion inteligente y una accion dentro del proceso.
        Lo importante es que cada paso tenga sentido operativo.
      </p>

      <p>
        En una pyme de servicios, esa entrada puede ser un mensaje de WhatsApp, un formulario web, un email, un documento o una cita.
        La IA interpreta parte del contenido y el sistema ejecuta el siguiente paso.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        Como funciona la automatizacion con IA paso a paso
      </h2>

      <ul className="space-y-2 pl-4 border-l border-cyber-purple/30">
        <li><span className="text-white font-medium">Entrada:</span> llega una consulta, documento, email o formulario.</li>
        <li><span className="text-white font-medium">Lectura:</span> la IA resume, clasifica o extrae datos.</li>
        <li><span className="text-white font-medium">Regla:</span> el sistema decide que accion corresponde segun el proceso.</li>
        <li><span className="text-white font-medium">Accion:</span> se crea una tarea, se envia un mensaje o se actualiza el CRM.</li>
        <li><span className="text-white font-medium">Control:</span> el equipo revisa los casos que necesitan criterio humano.</li>
      </ul>

      <p>
        Este reparto es clave: la IA interpreta, pero la automatizacion ordena el trabajo.
        Si no hay proceso definido, la tecnologia queda suelta.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        Ejemplo: consulta por WhatsApp
      </h2>

      <p>
        Una persona pregunta por un servicio.
        La IA detecta si habla de precio, disponibilidad o una duda tecnica.
        Despues el sistema crea el lead, guarda el resumen, asigna responsable y marca un siguiente paso.
      </p>

      <p>
        Si la consulta es simple, puede enviarse una respuesta aprobada.
        Si hay matices, el sistema avisa al equipo.
        Esto conecta directamente con <a href="/blog/chatbot-ia-atencion-cliente-pymes/" className="text-cyber-purple underline decoration-cyber-purple/50">chatbot con IA para atencion al cliente</a>.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        Que datos necesita para funcionar
      </h2>

      <p>
        La IA necesita fuentes fiables: textos aprobados, estados de CRM, reglas internas, documentos base y limites claros.
        Si aprende de informacion desordenada, dara respuestas poco utiles.
      </p>

      <p>
        Por eso antes de implantar flujos conviene revisar <a href="/blog/preparar-datos-empresa-automatizar-ia/" className="text-cyber-purple underline decoration-cyber-purple/50">como preparar los datos de tu empresa antes de automatizar con IA</a>.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        Donde suele fallar
      </h2>

      <p>
        Suele fallar cuando se automatiza antes de decidir quien responde, que datos se guardan, que excepciones existen y que se considera una respuesta correcta.
        La IA no arregla una operativa sin orden.
      </p>

      <p>
        En KAIRAS empezamos por el proceso y despues elegimos tecnologia.
        Esa es la forma de que la automatizacion con IA sea util, medible y mantenible.
      </p>
    </BlogPostLayout>
  );
};

export default BlogPostComoFuncionaAutomatizacionIA;
