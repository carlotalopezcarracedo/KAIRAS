import React from 'react';
import BlogPostLayout from '../components/BlogPostLayout';

const BlogPostConsultoriaAutomatizacionIA: React.FC = () => {
  return (
    <BlogPostLayout
      tags={['Consultoria', 'IA', 'Procesos']}
      title="Servicios de consultoría de automatización IA: que incluye un proyecto serio"
      dateLabel="5 junio 2026"
      readTime="8 min de lectura"
      ctaEyebrow="Necesitas saber que debería incluir un proyecto de automatización?"
      ctaLabel="Ver mi caso"
      relatedResources={[
        { href: '/optimizacion-operativa-pymes/', label: 'Optimización operativa' },
        { href: '/automatizacion-procesos/', label: 'Automatización de procesos' },
      ]}
    >
      <p className="text-lg text-slate-300 leading-relaxed">
        Los servicios de consultoría de automatización IA no deberian limitarse a configurar herramientas.
        Un proyecto serio empieza entendiendo como trabaja la empresa hoy.
      </p>

      <p>
        En pymes de servicios, la diferencia entre una automatización útil y una capa más de complejidad suele estar en el análisis previo.
        La tecnología llega después.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        Qué incluye una buena consultoría de automatización IA
      </h2>

      <p>
        La consultoría debe convertir una operativa dispersa en un mapa claro.
        No hace falta un documento enorme, pero si entender entradas, salidas, responsables, excepciones y datos.
      </p>

      <ul className="space-y-2 pl-4 border-l border-cyber-purple/30">
        <li>Diagnóstico de procesos actuales.</li>
        <li>Priorización por impacto, urgencia y facilidad.</li>
        <li>Definición de automatizaciones por reglas e IA.</li>
        <li>Diseño de flujos, responsables y puntos de control.</li>
        <li>Implementación, pruebas y ajustes con el equipo.</li>
      </ul>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        Fase 1: diagnóstico operativo
      </h2>

      <p>
        Antes de automatizar conviene mirar donde se pierde tiempo:
        conversaciones repetidas, leads sin seguimiento, datos duplicados, documentos pendientes o tareas que dependen de memoria.
      </p>

      <p>
        Esta fase se parece a lo que explicamos en <a href="/blog/documentar-procesos-pyme-sin-complicarse/" className="text-cyber-purple underline decoration-cyber-purple/50">como documentar procesos en una pyme</a>,
        pero con foco en decidir que parte se puede convertir en sistema.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        Fase 2: diseño del sistema
      </h2>

      <p>
        Aquí se define que herramientas se conectan, que datos se guardan, que mensajes se envían y cuando debe intervenir una persona.
        También se decide donde la IA aporta valor real.
      </p>

      <p>
        Por ejemplo, en un despacho o asesoría puede servir para ordenar documentos recibidos.
        En una clínica puede preparar contexto antes de una cita.
        En una inmobiliaria puede clasificar leads de portales.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        Fase 3: implementación y control
      </h2>

      <p>
        Un proyecto no termina al activar el flujo.
        Hay que probarlo, revisar errores, formar al equipo y medir si el proceso mejora.
        Sin esto, la automatización puede quedarse como una pieza técnica que nadie usa bien.
      </p>

      <p>
        La página de <a href="/optimizacion-operativa-pymes/" className="text-cyber-purple underline decoration-cyber-purple/50">optimización operativa para pymes</a>
        explica este enfoque desde el lado del negocio.
        Si quieres aplicarlo a un proceso concreto, en KAIRAS podemos ayudarte a priorizarlo y llevarlo a tierra.
      </p>
    </BlogPostLayout>
  );
};

export default BlogPostConsultoriaAutomatizacionIA;
