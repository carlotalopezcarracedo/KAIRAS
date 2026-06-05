import React from 'react';
import BlogPostLayout from '../components/BlogPostLayout';

const BlogPostProcesosConIA: React.FC = () => {
  return (
    <BlogPostLayout
      tags={['Procesos', 'IA', 'Operativa']}
      title="Automatizacion de procesos con IA: cuando usar reglas y cuando usar inteligencia artificial"
      dateLabel="5 junio 2026"
      readTime="8 min de lectura"
      ctaEyebrow="Tu empresa quiere automatizar, pero no sabe donde entra la IA?"
      ctaLabel="Priorizar procesos"
      relatedResources={[
        { href: '/automatizacion-procesos/', label: 'Automatizacion de procesos' },
        { href: '/blog/como-saber-que-proceso-automatizar-primero/', label: 'Que automatizar primero' },
      ]}
    >
      <p className="text-lg text-slate-300 leading-relaxed">
        La automatizacion de procesos con IA no significa que todos los pasos de tu negocio deban pasar por inteligencia artificial.
        Significa usar IA solo donde una regla fija se queda corta.
      </p>

      <p>
        Esta distincion ahorra muchos errores.
        Hay tareas que se resuelven mejor con reglas simples, y otras donde la IA puede aportar contexto, lenguaje o capacidad de clasificacion.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
        Automatizacion de procesos con IA no es automatizarlo todo
      </h2>

      <p>
        Una regla sirve para acciones claras:
        si entra un formulario, crear un lead; si se acerca una cita, enviar un recordatorio;
        si falta un documento, avisar al cliente.
      </p>

      <p>
        La IA encaja cuando el contenido cambia y necesita interpretacion:
        resumir un email largo, clasificar una solicitud, detectar el tema de una conversacion o preparar una respuesta base.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
        Cuando usar reglas
      </h2>

      <ul className="space-y-2 pl-4 border-l border-cyber-purple/30">
        <li>El proceso tiene pocos caminos posibles.</li>
        <li>Los datos son estructurados y siempre llegan igual.</li>
        <li>La accion no necesita interpretar lenguaje natural.</li>
        <li>El riesgo de error debe ser minimo y controlado.</li>
      </ul>

      <p>
        Por ejemplo, confirmar una cita, mover un lead de estado o crear una tarea de seguimiento suele funcionar mejor con reglas.
        Es estable, trazable y facil de revisar.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
        Cuando usar IA
      </h2>

      <ul className="space-y-2 pl-4 border-l border-cyber-purple/30">
        <li>El mensaje del cliente llega con matices o en formato libre.</li>
        <li>Hay que resumir informacion antes de que la vea el equipo.</li>
        <li>Conviene detectar intencion, urgencia o categoria.</li>
        <li>El sistema necesita proponer, no decidir de forma automatica.</li>
      </ul>

      <p>
        Esta forma de trabajar conecta con la guia de <a href="/blog/ia-para-pymes-cuando-tiene-sentido/" className="text-cyber-purple underline decoration-cyber-purple/50">IA para pymes</a>:
        la IA debe entrar cuando mejora el proceso, no cuando complica la operativa.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
        Ejemplo sencillo: lead por WhatsApp
      </h2>

      <p>
        Imagina que una persona escribe a una clinica o academia.
        La IA puede detectar si pregunta por precio, disponibilidad o una duda tecnica.
        Despues, una regla crea el lead en el CRM, asigna estado y programa el siguiente paso.
      </p>

      <p>
        La IA interpreta.
        La automatizacion ejecuta.
        El equipo decide cuando el caso necesita criterio humano.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
        La pregunta antes de automatizar
      </h2>

      <p>
        Antes de montar cualquier flujo, conviene responder:
        que parte del proceso es repetitiva, que parte necesita contexto y que parte no deberia salir de manos humanas?
      </p>

      <p>
        Si no sabes por donde empezar, revisa <a href="/blog/como-saber-que-proceso-automatizar-primero/" className="text-cyber-purple underline decoration-cyber-purple/50">como saber que proceso automatizar primero</a>.
        A partir de ahi, KAIRAS puede ayudarte a convertir ese proceso en un sistema claro, medible y mantenible.
      </p>
    </BlogPostLayout>
  );
};

export default BlogPostProcesosConIA;
