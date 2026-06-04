import React from 'react';
import BlogPostLayout from '../components/BlogPostLayout';

const BlogPostOnboardingClientes: React.FC = () => {
  return (
    <BlogPostLayout
      tags={['Onboarding', 'Clientes', 'Procesos']}
      title="Onboarding de clientes en pymes de servicios: como automatizarlo sin hacerlo frio"
      dateLabel="4 junio 2026"
      readTime="8 min de lectura"
      ctaEyebrow="Cada nuevo cliente empieza con correos, documentos y tareas improvisadas?"
      ctaLabel="Ordenar mi onboarding"
      relatedResources={[
        { href: '/optimizacion-operativa-pymes/', label: 'Optimizacion operativa' },
        { href: '/blog/documentar-procesos-pyme-sin-complicarse/', label: 'Documentar procesos' },
      ]}
    >
      <p className="text-lg text-slate-300 leading-relaxed">
        Conseguir un cliente no termina el proceso.
        Lo abre.
        Si el onboarding empieza con correos sueltos, documentos pendientes y dudas repetidas, la primera experiencia ya nace con friccion.
      </p>

      <p>
        Automatizar el onboarding de clientes en pymes de servicios no significa tratar a todos igual.
        Significa que lo repetitivo esta preparado y que el equipo puede centrarse en lo que requiere criterio.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
        Que suele fallar al incorporar un cliente
      </h2>

      <p>
        El problema aparece cuando cada alta se gestiona de una forma distinta.
        Un cliente recibe informacion por email, otro por WhatsApp, otro tiene documentos pendientes y nadie sabe que falta exactamente.
      </p>

      <ul className="space-y-2 pl-4 border-l border-cyber-purple/30">
        <li>No hay lista clara de datos o documentos iniciales.</li>
        <li>El equipo repite las mismas instrucciones manualmente.</li>
        <li>Las tareas internas no se crean siempre.</li>
        <li>El cliente no sabe que va a pasar despues de contratar.</li>
        <li>La informacion queda repartida entre correo, carpetas y memoria.</li>
      </ul>

      <p>
        Esto es optimizacion operativa pura.
        Si el alta de cliente no esta ordenada, despues es mas dificil cumplir plazos, medir carga y dar una buena experiencia.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
        Que partes del onboarding se pueden automatizar
      </h2>

      <ul className="space-y-3 pl-4 border-l border-cyber-purple/30">
        <li><span className="text-white font-medium">Mensaje de bienvenida:</span> explicar siguientes pasos, responsables y canales.</li>
        <li><span className="text-white font-medium">Recogida de datos:</span> pedir informacion inicial con un formulario claro.</li>
        <li><span className="text-white font-medium">Documentacion:</span> listar archivos pendientes y activar recordatorios.</li>
        <li><span className="text-white font-medium">Tareas internas:</span> crear acciones para equipo, fechas y responsables.</li>
        <li><span className="text-white font-medium">Seguimiento inicial:</span> comprobar que el cliente entiende el proceso y no queda bloqueado.</li>
      </ul>

      <p>
        El sistema debe ser claro, no excesivo.
        Si el cliente recibe diez mensajes el primer dia, la automatizacion genera ruido.
        Por eso conviene aplicar el criterio de <a href="/blog/mensajes-automaticos-clientes-cuando-ayudan-molestan/" className="text-cyber-purple underline decoration-cyber-purple/50">cuando los mensajes automaticos ayudan o molestan</a>.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
        La plantilla minima de onboarding
      </h2>

      <p>
        Un onboarding sencillo puede tener cinco bloques:
      </p>

      <ul className="space-y-2 pl-4 border-l border-cyber-purple/30">
        <li>Que hemos acordado y cual es el objetivo.</li>
        <li>Que necesitamos del cliente para empezar.</li>
        <li>Quien es responsable de cada parte.</li>
        <li>Que fechas o hitos vienen ahora.</li>
        <li>Como se comunicaran dudas, cambios o incidencias.</li>
      </ul>

      <p>
        Si esto no esta escrito, automatizarlo sera dificil.
        Antes conviene <a href="/blog/documentar-procesos-pyme-sin-complicarse/" className="text-cyber-purple underline decoration-cyber-purple/50">documentar el proceso sin complicarse</a>.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
        Ejemplo en una pyme de servicios
      </h2>

      <p>
        Una asesor para un nuevo cliente puede activar un flujo que envia bienvenida, solicita datos fiscales, crea tareas internas, agenda una primera revision y avisa si falta algun documento.
        Una academia puede hacer lo mismo con matricula, normas, calendario y pago.
      </p>

      <p>
        En ambos casos, el sistema no elimina el trato humano.
        Evita que el equipo tenga que acordarse de cada paso y permite que el cliente empiece con mas claridad.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
        Que medir
      </h2>

      <ul className="space-y-2 pl-4 border-l border-cyber-purple/30">
        <li>Tiempo desde contratacion hasta inicio real.</li>
        <li>Clientes con documentacion completa a la primera.</li>
        <li>Tareas internas creadas sin intervencion manual.</li>
        <li>Dudas repetidas durante los primeros dias.</li>
        <li>Bloqueos por falta de informacion.</li>
      </ul>

      <p>
        Un buen onboarding no busca impresionar.
        Busca que cliente y equipo sepan que toca hacer, quien lo hace y cuando.
        Ese es el tipo de <a href="/optimizacion-operativa-pymes/" className="text-cyber-purple underline decoration-cyber-purple/50">optimizacion operativa para pymes</a>
        que se nota desde el primer dia.
      </p>
    </BlogPostLayout>
  );
};

export default BlogPostOnboardingClientes;
