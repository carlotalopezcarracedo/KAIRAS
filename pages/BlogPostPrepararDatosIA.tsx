import React from 'react';
import BlogPostLayout from '../components/BlogPostLayout';

const BlogPostPrepararDatosIA: React.FC = () => {
  return (
    <BlogPostLayout
      tags={['IA', 'Datos', 'Procesos']}
      title="Como preparar los datos de tu empresa antes de automatizar con IA"
      dateLabel="4 junio 2026"
      readTime="8 min de lectura"
      ctaEyebrow="Quieres aplicar IA pero tus datos estan dispersos?"
      ctaLabel="Preparar mi base"
      relatedResources={[
        { href: '/ia-empresas/', label: 'IA para empresas' },
        { href: '/blog/diferencia-digitalizacion-automatizacion-ia-pymes/', label: 'Digitalizacion, automatizacion e IA' },
      ]}
    >
      <p className="text-lg text-slate-300 leading-relaxed">
        La IA no funciona bien si la informacion de la empresa esta dispersa, desactualizada o escrita de cualquier forma.
        Antes de automatizar con IA, una pyme necesita preparar sus datos y decidir que puede usar el sistema con seguridad.
      </p>

      <p>
        Esto no significa crear un proyecto tecnico enorme.
        Significa ordenar lo minimo: fuentes, reglas, permisos, contexto y limites.
        Sin esa base, la IA puede responder mal, duplicar errores o generar mas trabajo al equipo.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
        Que datos necesita una IA para ayudar de verdad
      </h2>

      <p>
        Depende del caso, pero en pymes de servicios suelen repetirse estas fuentes:
      </p>

      <ul className="space-y-2 pl-4 border-l border-cyber-purple/30">
        <li>Servicios, condiciones, precios orientativos y horarios.</li>
        <li>Preguntas frecuentes reales de clientes.</li>
        <li>Estados de leads, clientes o expedientes.</li>
        <li>Plantillas de respuesta y tono de marca.</li>
        <li>Reglas de escalado a una persona.</li>
      </ul>

      <p>
        Si esta informacion no esta clara, conviene empezar por ordenarla.
        La diferencia entre <a href="/blog/diferencia-digitalizacion-automatizacion-ia-pymes/" className="text-cyber-purple underline decoration-cyber-purple/50">digitalizacion, automatizacion e IA</a>
        ayuda a decidir si tu empresa esta preparada para esta capa.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
        Paso 1: identificar las fuentes fiables
      </h2>

      <p>
        No todo lo que tiene la empresa sirve como fuente.
        Hay documentos antiguos, conversaciones incompletas y hojas que nadie actualiza.
        Antes de conectar IA, decide que fuentes son oficiales y quien las mantiene.
      </p>

      <p>
        Ejemplo: una clinica puede tener protocolos, horarios, servicios y preguntas frecuentes.
        Si esos documentos no estan actualizados, el asistente puede dar informacion incorrecta.
        Primero se limpia la base. Despues se automatiza.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
        Paso 2: separar datos, reglas y criterio humano
      </h2>

      <p>
        La IA puede usar datos y reglas.
        Pero no deberia decidir asuntos sensibles sin supervision.
        Por eso conviene clasificar:
      </p>

      <ul className="space-y-3 pl-4 border-l border-cyber-purple/30">
        <li><span className="text-white font-medium">Datos:</span> horarios, servicios, estados, documentos y respuestas base.</li>
        <li><span className="text-white font-medium">Reglas:</span> cuando responder, cuando crear tarea y cuando escalar.</li>
        <li><span className="text-white font-medium">Criterio humano:</span> decisiones comerciales, clinicas, legales o excepciones.</li>
      </ul>

      <p>
        Este limite es clave para que la IA sea util y no se convierta en un riesgo.
        Ya lo trabajamos en <a href="/blog/ia-para-pymes-cuando-tiene-sentido/" className="text-cyber-purple underline decoration-cyber-purple/50">cuando tiene sentido aplicar IA en pymes</a>.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
        Paso 3: ordenar el CRM antes de automatizar
      </h2>

      <p>
        Si la IA va a clasificar leads, preparar respuestas o resumir conversaciones, necesita estados claros.
        Nuevo, cualificado, propuesta, seguimiento, pendiente de cliente o cerrado.
        Si cada persona usa estados distintos, el sistema no puede ayudar bien.
      </p>

      <p>
        Por eso muchas implantaciones de IA empiezan realmente por <a href="/crm-pymes-seguimiento-clientes/" className="text-cyber-purple underline decoration-cyber-purple/50">ordenar CRM y seguimiento</a>.
        La tecnologia avanzada necesita una base sencilla y estable.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
        Paso 4: probar con un caso pequeno
      </h2>

      <p>
        No empieces conectando toda la empresa.
        Elige un caso:
        resumir conversaciones, clasificar consultas, preparar respuestas frecuentes o detectar documentos pendientes.
        Mide si reduce carga y si el equipo confia en el resultado.
      </p>

      <p>
        Si funciona, amplias.
        Si no, ajustas fuentes, reglas o limites.
        La IA debe crecer desde un proceso real, no desde una promesa generica.
      </p>

      <p>
        En KAIRAS, la <a href="/ia-empresas/" className="text-cyber-purple underline decoration-cyber-purple/50">IA para empresas</a>
        empieza por esta pregunta: que informacion necesita el sistema para ayudar sin inventar, sin molestar y sin crear mas trabajo?
      </p>
    </BlogPostLayout>
  );
};

export default BlogPostPrepararDatosIA;
