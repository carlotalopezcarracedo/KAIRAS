import React from 'react';
import BlogPostLayout from '../components/BlogPostLayout';

const BlogPostTiposIAPymes: React.FC = () => {
  return (
    <BlogPostLayout
      tags={['Tipos IA', 'Pymes', 'Decisión']}
      title="Tipos de IA que una pyme debe conocer antes de automatizar"
      dateLabel="5 junio 2026"
      readTime="7 min de lectura"
      ctaEyebrow="Quieres saber qué tipo de IA encaja con tu proceso?"
      ctaLabel="Evaluar mi proceso"
      relatedResources={[
        { href: '/blog/ia-para-pymes-cuando-tiene-sentido/', label: 'IA para pymes' },
        { href: '/blog/gestion-documental-ia-automatizacion-pymes/', label: 'IA documental' },
      ]}
    >
      <p className="text-lg text-slate-300 leading-relaxed">
        Hay muchos tipos de IA, pero una pyme no necesita aprender teoría avanzada para tomar mejores decisiones.
        Necesita saber qué tipo encaja con su problema operativo.
      </p>

      <p>
        Para KAIRAS, los tipos más útiles son cuatro: IA generativa, IA conversacional, IA documental e IA predictiva o de clasificación.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        IA generativa
      </h2>

      <p>
        Sirve para redactar, resumir, transformar textos o preparar borradores.
        Puede ayudar en respuestas comerciales, emails, instrucciones o documentos internos.
      </p>

      <p>
        No debería publicar ni enviar mensajes sensibles sin revisión.
        Su valor está en reducir el tiempo de preparación.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        IA conversacional
      </h2>

      <p>
        Es la que se usa en asistentes y chatbots.
        Puede responder preguntas frecuentes, recoger datos y dirigir la conversación hacia el siguiente paso correcto.
      </p>

      <p>
        Si este tema te interesa, revisa <a href="/blog/asistente-ia-atencion-cliente-pymes/" className="text-cyber-purple underline decoration-cyber-purple/50">asistente de IA para atención al cliente</a>.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        IA documental
      </h2>

      <p>
        Ayuda a clasificar, extraer y resumir documentos.
        Es especialmente interesante para asesorías, despachos, clínicas y servicios que reciben archivos de clientes.
      </p>

      <p>
        Tienes una guía especifica en <a href="/blog/gestion-documental-ia-automatizacion-pymes/" className="text-cyber-purple underline decoration-cyber-purple/50">gestión documental con IA</a>.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        IA de clasificación o predicción
      </h2>

      <p>
        Puede ayudar a detectar prioridades, agrupar leads, identificar temas frecuentes o señalar oportunidades que llevan demasiado tiempo paradas.
      </p>

      <p>
        Para usarla bien necesitas datos históricos o, al menos, registros consistentes.
        Sin eso, la predicción suele ser ruido.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        Cómo elegir el tipo correcto
      </h2>

      <p>
        Si necesitas redactar o resumir, generativa.
        Si necesitas conversar, conversacional.
        Si necesitas documentos, documental.
        Si necesitas priorizar patrones, clasificación.
      </p>

      <p>
        Antes de elegir, lee <a href="/blog/ia-para-pymes-cuando-tiene-sentido/" className="text-cyber-purple underline decoration-cyber-purple/50">cuando tiene sentido aplicar IA en una pyme</a>.
        La pregunta importante no es que IA existe, sino que proceso quieres mejorar.
      </p>
    </BlogPostLayout>
  );
};

export default BlogPostTiposIAPymes;
