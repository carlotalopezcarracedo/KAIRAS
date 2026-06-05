import React from 'react';
import BlogPostLayout from '../components/BlogPostLayout';

const BlogPostSistemaAutomatizadoIA: React.FC = () => {
  return (
    <BlogPostLayout
      tags={['Sistema', 'IA', 'Operativa']}
      title="Que es un sistema automatizado de IA y como se disena en una pyme"
      dateLabel="5 junio 2026"
      readTime="7 min de lectura"
      ctaEyebrow="Quieres pasar de herramientas sueltas a un sistema claro?"
      ctaLabel="Ordenar mi sistema"
      relatedResources={[
        { href: '/optimizacion-operativa-pymes/', label: 'Optimizacion operativa' },
        { href: '/crm-pymes-seguimiento-clientes/', label: 'CRM y seguimiento' },
      ]}
    >
      <p className="text-lg text-slate-300 leading-relaxed">
        Un sistema automatizado de IA es un conjunto de herramientas, reglas, datos y controles que trabajan juntos para reducir tareas manuales.
        No es una unica app ni un asistente aislado.
      </p>

      <p>
        En una pyme, la palabra sistema importa.
        Si la IA responde pero no registra nada, si el CRM no se actualiza o si nadie sabe que pasa despues, no hay sistema: hay una herramienta suelta.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        Que incluye un sistema automatizado de IA
      </h2>

      <ul className="space-y-2 pl-4 border-l border-cyber-purple/30">
        <li>Una entrada clara: formulario, WhatsApp, email, calendario o documento.</li>
        <li>Una fuente de datos fiable: CRM, base de conocimiento o expediente.</li>
        <li>Reglas de proceso: estados, responsables y siguientes pasos.</li>
        <li>IA para interpretar, resumir o clasificar informacion.</li>
        <li>Control humano para excepciones y decisiones sensibles.</li>
      </ul>

      <p>
        La combinacion de esas piezas es lo que convierte una automatizacion en algo util para el negocio.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        Ejemplo: sistema de seguimiento comercial
      </h2>

      <p>
        Entra un lead por WhatsApp.
        La IA resume la conversacion y detecta el servicio.
        El CRM crea el contacto, asigna responsable y programa seguimiento.
        Si el lead no responde, el sistema crea una tarea o envia un mensaje aprobado.
      </p>

      <p>
        Esto encaja con la pagina de <a href="/crm-pymes-seguimiento-clientes/" className="text-cyber-purple underline decoration-cyber-purple/50">CRM para pymes y seguimiento de clientes</a>.
        La IA aporta contexto, pero el CRM mantiene trazabilidad.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        Por que no conviene empezar por la herramienta
      </h2>

      <p>
        Si empiezas por la herramienta, acabas adaptando el negocio a lo que esa herramienta permite.
        Si empiezas por el sistema, eliges tecnologia segun lo que tu operativa necesita.
      </p>

      <p>
        Muchas pymes tienen ya el problema descrito en <a href="/blog/herramientas-desconectadas-equipo-va-tarde/" className="text-cyber-purple underline decoration-cyber-purple/50">herramientas desconectadas</a>.
        Introducir IA sin ordenar esa base puede agravar el ruido.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        Como lo disenaria KAIRAS
      </h2>

      <p>
        Primero identificamos el proceso.
        Despues definimos datos, reglas, responsables y limites.
        Solo entonces decidimos que parte puede automatizarse con reglas y que parte necesita IA.
      </p>

      <p>
        Ese enfoque viene de la <a href="/optimizacion-operativa-pymes/" className="text-cyber-purple underline decoration-cyber-purple/50">optimizacion operativa para pymes</a>:
        menos carga manual, mas claridad y un sistema que el equipo pueda usar sin depender de una sola persona.
      </p>
    </BlogPostLayout>
  );
};

export default BlogPostSistemaAutomatizadoIA;
