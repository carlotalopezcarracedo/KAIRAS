import React from 'react';
import BlogPostLayout from '../components/BlogPostLayout';

const BlogPostDocumentarProcesos: React.FC = () => {
  return (
    <BlogPostLayout
      tags={['Procesos', 'Organizacion', 'Operativa']}
      title="Como documentar procesos en una pyme sin complicarse"
      dateLabel="26 mayo 2026"
      readTime="8 min de lectura"
      ctaEyebrow="Tu operativa depende de instrucciones que nadie tiene por escrito?"
      ctaLabel="Ordenar mis procesos"
      relatedResources={[
        { href: '/optimizacion-operativa-pymes/', label: 'Optimizacion operativa' },
        { href: '/blog/todo-depende-de-una-sola-persona/', label: 'Dependencia de una persona' },
      ]}
    >
      <p className="text-lg text-slate-300 leading-relaxed">
        Documentar procesos no deberia significar crear manuales eternos que nadie abre.
        En una pyme, documentar bien significa que otra persona pueda ejecutar una tarea critica sin tener que preguntar cada paso.
      </p>

      <p>
        Si el proceso esta solo en la cabeza de alguien, el negocio funciona mientras esa persona esta disponible.
        Cuando se satura, se va de vacaciones o cambia de prioridad, todo se ralentiza.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        Que procesos merece la pena documentar primero
      </h2>

      <p>
        No hace falta documentarlo todo.
        De hecho, intentarlo suele bloquear.
        Empieza por procesos que cumplan tres condiciones:
      </p>

      <ul className="space-y-2 pl-4 border-l border-cyber-purple/30">
        <li>Se repiten con frecuencia.</li>
        <li>Si fallan, afectan a clientes, ventas o agenda.</li>
        <li>Ahora mismo dependen de una persona concreta.</li>
      </ul>

      <p>
        Esta seleccion conecta con el problema de <a href="/blog/todo-depende-de-una-sola-persona/" className="text-cyber-purple underline decoration-cyber-purple/50">cuando todo depende de una sola persona</a>.
        Documentar no es burocracia. Es reducir riesgo operativo.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        La plantilla minima que funciona
      </h2>

      <p>
        Para una pyme, un proceso documentado puede tener solo cinco partes:
      </p>

      <ul className="space-y-3 pl-4 border-l border-cyber-purple/30">
        <li><span className="text-white font-medium">Objetivo:</span> para que existe este proceso.</li>
        <li><span className="text-white font-medium">Cuándo se activa:</span> que evento lo pone en marcha.</li>
        <li><span className="text-white font-medium">Pasos:</span> que se hace, en que orden y con que herramienta.</li>
        <li><span className="text-white font-medium">Criterios:</span> que decisiones puede tomar la persona y cuando debe escalar.</li>
        <li><span className="text-white font-medium">Resultado esperado:</span> como saber que la tarea esta cerrada.</li>
      </ul>

      <p>
        Si no cabe en una pagina, probablemente estas mezclando varios procesos.
        Divide antes de documentar.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        Ejemplo aplicado: seguimiento de un presupuesto
      </h2>

      <p>
        Objetivo: que ningun presupuesto enviado quede sin seguimiento.
        Activador: se envia una propuesta al cliente.
        Pasos: registrar fecha, importe, responsable y proximo contacto.
        Criterio: si no responde en tres dias, enviar recordatorio; si no responde tras dos intentos, pasar a seguimiento de largo plazo.
        Resultado: presupuesto aceptado, rechazado o clasificado como frio.
      </p>

      <p>
        Este proceso despues puede automatizarse.
        Pero si no esta documentado, cualquier automatizacion sera confusa.
        Por eso, antes de crear flujos, conviene revisar <a href="/blog/automatizar-presupuestos-seguimiento-pymes/" className="text-cyber-purple underline decoration-cyber-purple/50">como automatizar presupuestos y seguimiento</a>.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        Errores comunes al documentar
      </h2>

      <ul className="space-y-2 pl-4 border-l border-cyber-purple/30">
        <li>Documentar el proceso ideal, no el real.</li>
        <li>Escribir demasiado y hacerlo imposible de mantener.</li>
        <li>No incluir quien es responsable.</li>
        <li>No definir que pasa cuando hay una excepcion.</li>
        <li>Guardar el documento en un sitio que nadie usa.</li>
      </ul>

      <p>
        El documento tiene que vivir cerca de la tarea.
        Si el equipo trabaja en CRM, gestor de tareas o carpeta compartida, el proceso debe estar ahi.
        Si hay que buscarlo durante cinco minutos, no se usara.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        Como conectar documentacion y automatizacion
      </h2>

      <p>
        Documentar te ayuda a separar lo que requiere criterio de lo que solo requiere ejecucion.
        Lo primero se forma y se supervisa.
        Lo segundo se puede automatizar.
      </p>

      <p>
        Por ejemplo, decidir si una propuesta encaja con un cliente requiere criterio.
        Crear una tarea de seguimiento tres dias despues no.
        Esa diferencia es la base de una <a href="/automatizacion-procesos/" className="text-cyber-purple underline decoration-cyber-purple/50">automatizacion de procesos</a> bien planteada.
      </p>

      <p>
        Empieza pequeño: un proceso critico, una pagina, una persona responsable y una revision mensual.
        Con eso ya puedes reducir dependencia y preparar el terreno para automatizar con sentido.
      </p>
    </BlogPostLayout>
  );
};

export default BlogPostDocumentarProcesos;
