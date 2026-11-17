import React from 'react';
import BlogPostLayout from '../components/BlogPostLayout';

const BlogPostIAAutomatizacionJuntas: React.FC = () => {
  return (
    <BlogPostLayout
      tags={['IA', 'Automatizacion', 'Criterio']}
      title="IA y automatización: como trabajan juntas sin complicar la empresa"
      dateLabel="5 junio 2026"
      readTime="7 min de lectura"
      ctaEyebrow="Quieres unir IA y automatización con sentido operativo?"
      ctaLabel="Ver mi proceso"
      relatedResources={[
        { href: '/blog/diferencia-digitalizacion-automatizacion-ia-pymes/', label: 'Diferencias clave' },
        { href: '/ia-empresas/', label: 'IA para empresas' },
      ]}
    >
      <p className="text-lg text-slate-300 leading-relaxed">
        IA y automatización trabajan juntas cuando la IA interpreta información y la automatización convierte esa interpretación en acciones dentro del proceso.
      </p>

      <p>
        Separarlas ayuda a decidir mejor.
        La IA no debería hacerlo todo.
        La automatización tampoco puede entender todos los matices si solo usa reglas fijas.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        Qué aporta la automatización
      </h2>

      <p>
        La automatización aporta orden y continuidad.
        Sirve para mover datos, crear tareas, enviar avisos, actualizar estados y mantener un proceso funcionando aunque nadie lo recuerde manualmente.
      </p>

      <p>
        Es especialmente útil en seguimiento de clientes, agenda, recordatorios, presupuestos y documentación.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        Qué aporta la IA
      </h2>

      <p>
        La IA aporta lectura e interpretación.
        Puede resumir una conversación, clasificar una solicitud, extraer datos de un documento o preparar un borrador de respuesta.
      </p>

      <p>
        Pero necesita datos, límites y contexto.
        Por eso no conviene introducirla antes de ordenar la base, como explicamos en <a href="/blog/preparar-datos-empresa-automatizar-ia/" className="text-cyber-purple underline decoration-cyber-purple/50">preparar datos antes de automatizar con IA</a>.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        Cómo se combinan en un flujo real
      </h2>

      <p>
        Entra una consulta.
        La IA detecta el tema y resume el mensaje.
        La automatización crea el registro, asigna responsable y programa seguimiento.
        Si el caso es delicado, avisa al equipo.
      </p>

      <p>
        El resultado no es una empresa en piloto automático.
        Es un equipo con menos carga manual y más contexto para actuar.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        Dónde se suelen confundir
      </h2>

      <p>
        Se confunden cuando se llama IA a cualquier automatización o cuando se espera que una IA arregle un proceso sin definir.
        Una cosa es enviar un recordatorio automático.
        Otra es interpretar una conversación y decidir qué tipo de seguimiento necesita.
      </p>

      <p>
        Para una explicación más amplia, lee <a href="/blog/diferencia-digitalizacion-automatizacion-ia-pymes/" className="text-cyber-purple underline decoration-cyber-purple/50">diferencia entre digitalización, automatización e IA</a>.
        Si ya tienes claro el concepto, la página de <a href="/ia-empresas/" className="text-cyber-purple underline decoration-cyber-purple/50">IA para empresas</a>
        muestra el enfoque de KAIRAS.
      </p>
    </BlogPostLayout>
  );
};

export default BlogPostIAAutomatizacionJuntas;
