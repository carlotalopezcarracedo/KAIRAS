import React from 'react';
import BlogPostLayout from '../components/BlogPostLayout';

const BlogPostAgenciaAutomatizacionIA: React.FC = () => {
  return (
    <BlogPostLayout
      tags={['Agencia IA', 'Decisión', 'Pymes']}
      title="Agencia de automatización IA: como elegir proveedor sin comprar humo"
      dateLabel="5 junio 2026"
      readTime="8 min de lectura"
      ctaEyebrow="Estas valorando una agencia de automatización IA?"
      ctaLabel="Hablar con KAIRAS"
      relatedResources={[
        { href: '/servicios/', label: 'Servicios KAIRAS' },
        { href: '/blog/cuanto-cuesta-automatizar-procesos-pyme/', label: 'Coste de automatizar' },
      ]}
    >
      <p className="text-lg text-slate-300 leading-relaxed">
        Buscar una agencia de automatización IA puede parecer sencillo hasta que todas prometen eficiencia,
        ahorro de tiempo y herramientas inteligentes sin explicar que van a tocar en tu negocio.
      </p>

      <p>
        Para una pyme de servicios, elegir proveedor no debería empezar por la herramienta.
        Debería empezar por entender si esa agencia sabe leer procesos, priorizar y decirte también que no conviene automatizar.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        Qué debe hacer una agencia de automatización IA antes de proponer nada
      </h2>

      <p>
        El primer trabajo es diagnosticar.
        Si alguien ofrece un bot, un CRM o un flujo sin preguntar como entran tus clientes, quien responde, donde se pierde información y que herramientas usas,
        probablemente esta vendiendo tecnología antes que solución.
      </p>

      <ul className="space-y-2 pl-4 border-l border-cyber-purple/30">
        <li>Mapear el proceso actual con pasos reales.</li>
        <li>Detectar tareas repetitivas y puntos de fricción.</li>
        <li>Separar automatización por reglas de automatización con IA.</li>
        <li>Definir responsables, datos necesarios y límites.</li>
        <li>Medir antes y después para saber si mejora.</li>
      </ul>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        Señales de alerta
      </h2>

      <p>
        Desconfia si el discurso gira solo alrededor de la herramienta.
        También si no hay una fase de análisis, si todo se resuelve con plantillas iguales o si prometen resultados garantizados sin conocer tu operativa.
      </p>

      <p>
        Muchas pymes ya tienen parte del problema descrito en <a href="/blog/herramientas-desconectadas-equipo-va-tarde/" className="text-cyber-purple underline decoration-cyber-purple/50">herramientas desconectadas</a>.
        Meter una herramienta más sin revisar el sistema puede aumentar el ruido.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        Preguntas que deberías hacer antes de contratar
      </h2>

      <ul className="space-y-2 pl-4 border-l border-cyber-purple/30">
        <li>¿Qué proceso concreto vamos a mejorar primero?</li>
        <li>¿Qué datos necesita el sistema para funcionar?</li>
        <li>¿Qué parte queda automatizada y que parte sigue siendo humana?</li>
        <li>¿Cómo se corrigen errores o cambios del proceso?</li>
        <li>¿Qué pasara si dejamos de usar una herramienta?</li>
      </ul>

      <p>
        También conviene revisar el presupuesto con criterio.
        En <a href="/blog/cuanto-cuesta-automatizar-procesos-pyme/" className="text-cyber-purple underline decoration-cyber-purple/50">cuanto cuesta automatizar procesos en una pyme</a>
        explicamos que factores cambian el alcance real.
      </p>

      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4">
        Cómo lo enfoca KAIRAS
      </h2>

      <p>
        KAIRAS trabaja como socio operativo: entendemos el negocio, elegimos una prioridad y montamos sistemas útiles.
        A veces la solución incluye IA.
        Otras veces basta conectar CRM, calendario, WhatsApp y email con reglas claras.
      </p>

      <p>
        Si estas comparando proveedores, revisa nuestros <a href="/servicios/" className="text-cyber-purple underline decoration-cyber-purple/50">servicios de automatización e IA aplicada</a>.
        Te ayudara a distinguir entre comprar una herramienta y ordenar una operativa.
      </p>
    </BlogPostLayout>
  );
};

export default BlogPostAgenciaAutomatizacionIA;
