import React from 'react';
import BlogPostLayout from '../components/BlogPostLayout';

const BlogPostComoFuncionaAutomatizacionIA: React.FC = () => {
  return (
    <BlogPostLayout
      tags={['IA', 'Procesos', 'Sistema']}
      title="Como funciona la automatización con IA en una empresa de servicios"
      dateLabel="5 junio 2026"
      readTime="7 min de lectura"
      ctaEyebrow="Quieres ver como funcionaria un flujo con IA en tu empresa?"
      ctaLabel="Diseñar mi flujo"
      relatedResources={[
        { href: '/automatizacion-procesos/', label: 'Automatización de procesos' },
        { href: '/blog/automatizacion-procesos-con-ia-pymes/', label: 'Procesos con IA' },
      ]}
    >
      <p className="text-lg text-slate-300 leading-relaxed">
        La automatización con IA funciona conectando una entrada de información, una interpretación inteligente y una acción dentro del proceso.
        Lo importante es que cada paso tenga sentido operativo.
      </p>

      <p>
        En una pyme de servicios, esa entrada puede ser un mensaje de WhatsApp, un formulario web, un email, un documento o una cita.
        La IA interpreta parte del contenido y el sistema ejecuta el siguiente paso.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        Cómo funciona la automatización con IA paso a paso
      </h2>

      <ul className="space-y-2 pl-4 border-l border-cyber-purple/30">
        <li><span className="text-white font-medium">Entrada:</span> llega una consulta, documento, email o formulario.</li>
        <li><span className="text-white font-medium">Lectura:</span> la IA resume, clasifica o extrae datos.</li>
        <li><span className="text-white font-medium">Regla:</span> el sistema decide que acción corresponde según el proceso.</li>
        <li><span className="text-white font-medium">Acción:</span> se crea una tarea, se envía un mensaje o se actualiza el CRM.</li>
        <li><span className="text-white font-medium">Control:</span> el equipo revisa los casos que necesitan criterio humano.</li>
      </ul>

      <p>
        Este reparto es clave: la IA interpreta, pero la automatización ordena el trabajo.
        Si no hay proceso definido, la tecnología queda suelta.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        Ejemplo: consulta por WhatsApp
      </h2>

      <p>
        Una persona pregunta por un servicio.
        La IA detecta si habla de precio, disponibilidad o una duda técnica.
        Después el sistema crea el lead, guarda el resumen, asigna responsable y marca un siguiente paso.
      </p>

      <p>
        Si la consulta es simple, puede enviarse una respuesta aprobada.
        Si hay matices, el sistema avisa al equipo.
        Esto conecta directamente con <a href="/blog/chatbot-ia-atencion-cliente-pymes/" className="text-cyber-purple underline decoration-cyber-purple/50">chatbot con IA para atención al cliente</a>.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        Qué datos necesita para funcionar
      </h2>

      <p>
        La IA necesita fuentes fiables: textos aprobados, estados de CRM, reglas internas, documentos base y límites claros.
        Si aprende de información desordenada, dara respuestas poco útiles.
      </p>

      <p>
        Por eso antes de implantar flujos conviene revisar <a href="/blog/preparar-datos-empresa-automatizar-ia/" className="text-cyber-purple underline decoration-cyber-purple/50">como preparar los datos de tu empresa antes de automatizar con IA</a>.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        Dónde suele fallar
      </h2>

      <p>
        Suele fallar cuando se automatiza antes de decidir quien responde, que datos se guardan, que excepciones existen y que se considera una respuesta correcta.
        La IA no arregla una operativa sin orden.
      </p>

      <p>
        En KAIRAS empezamos por el proceso y después elegimos tecnología.
        Esa es la forma de que la automatización con IA sea útil, medible y mantenible.
      </p>
    </BlogPostLayout>
  );
};

export default BlogPostComoFuncionaAutomatizacionIA;
