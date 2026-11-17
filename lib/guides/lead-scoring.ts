import type { BlogGuideData } from '../guideTypes';

const guide: BlogGuideData = {
  key: 'blog-lead-scoring-ia',
  slug: 'lead-scoring-ia-pymes',
  title: 'Lead scoring con IA para pymes: cómo priorizar oportunidades paso a paso',
  seoTitle: 'Lead scoring con IA para pymes: guía práctica',
  description: 'Qué es el lead scoring, cómo crear un modelo de puntuación sencillo para una pyme de servicios, qué aporta la IA y cómo conectarlo al CRM y al seguimiento comercial.',
  listDesc: 'Qué es, cómo diseñar una puntuación de 0 a 100 con criterios de encaje e interés, qué aporta la IA y cómo usarla en el CRM.',
  tags: ['Guía', 'Leads', 'CRM'],
  keywords: ['lead scoring', 'lead scoring con ia', 'puntuación de leads', 'priorizar leads pymes', 'cualificación de leads'],
  published: '2026-06-20T00:00:00+02:00',
  updated: '2026-11-18',
  answer:
    'El lead scoring es una puntuación que indica qué contactos tienen más probabilidad de convertirse en clientes, para atenderlos primero. En una pyme basta con combinar criterios de encaje (servicio, zona, tamaño) e interés (urgencia, respuestas, visitas). La IA ayuda a extraer esos datos de mensajes libres y a detectar señales de intención.',
  body: `## Para qué sirve en una pyme de servicios

Cuando llegan más contactos de los que se pueden atender bien, el equipo suele responder por orden de llegada o por intuición. Eso hace que un cliente con presupuesto y urgencia espere detrás de alguien que solo pedía información general. El lead scoring ordena la cola: **primero quien más probabilidad tiene de comprar y más valor aporta**.

No necesitas miles de leads para que sirva. Con 30-50 contactos al mes ya compensa tener un criterio claro.

## Las dos dimensiones de la puntuación

| Dimensión | Qué mide | Ejemplos de criterios |
| --- | --- | --- |
| Encaje | Si el contacto es el tipo de cliente que atiendes bien | Servicio que pide, zona, tamaño del negocio, sector |
| Interés | Cuánta intención de compra muestra ahora | Urgencia, pide precio o cita, responde rápido, vuelve a escribir |

Un lead con mucho encaje y poco interés se nutre con seguimiento. Uno con mucho interés y poco encaje se atiende con rapidez pero sin invertir demasiado. El que tiene ambos, se llama hoy.

## Cómo crear tu primer modelo (sin IA todavía)

1. **Mira tus últimos 20-30 clientes ganados**: ¿qué tenían en común? Servicio, zona, cómo llegaron, qué preguntaron.
2. **Mira 20-30 contactos que no compraron**: ¿qué los diferenciaba?
3. **Elige 5-7 criterios** que de verdad distingan a unos de otros.
4. **Asigna puntos** con una escala sencilla hasta 100.

Ejemplo para una clínica de fisioterapia:

| Criterio | Puntos |
| --- | --- |
| Pide un servicio principal (fisioterapia, suelo pélvico, deportiva) | +25 |
| Vive o trabaja a menos de 20 minutos | +15 |
| Menciona dolor actual o fecha concreta | +20 |
| Pide cita o precio directamente | +20 |
| Viene por recomendación | +10 |
| Responde al primer mensaje en menos de un día | +10 |
| Solo pide información general, sin servicio claro | −10 |

5. **Define umbrales**: más de 70, se atiende el mismo día; 40-70, seguimiento en 48 horas; menos de 40, secuencia automática de información.

## Qué aporta la IA

El problema práctico del lead scoring en pymes es que la información llega en texto libre: un WhatsApp, un formulario con un campo abierto o un email. La IA permite:

- **Extraer los criterios** del mensaje: servicio, zona, urgencia, si pide precio o cita.
- **Detectar intención**: diferenciar «solo quería saber precios» de «necesito empezar la semana que viene».
- **Resumir** el contacto para quien lo atiende.
- **Proponer la puntuación** según tus reglas.

Importante: la IA aplica **tus** criterios. No conviene que invente la puntuación por su cuenta, porque no sabrás por qué un contacto tiene 80 y otro 30.

## Cómo integrarlo en el CRM

El flujo habitual:

1. Llega el contacto (web, WhatsApp, email, redes).
2. La IA extrae los datos y propone la puntuación con su justificación.
3. Se guarda en el CRM: puntuación, criterios y resumen.
4. Según el umbral, se asigna a una persona con aviso o entra en una secuencia.
5. La puntuación se actualiza con nuevas interacciones (responde, pide cita, deja de responder).

Herramientas como [HubSpot](/blog/hubspot-ia-crm-pymes/) tienen puntuación integrada; en otros CRM se hace con un flujo de Make o n8n. La parte de captura está en [automatización web con IA](/blog/automatizacion-web-ia-leads-pymes/).

## Errores comunes

- **Demasiados criterios**: con más de 8-10, nadie entiende la puntuación.
- **No revisarlo nunca**: cada trimestre, compara la puntuación con quién compró de verdad y ajusta.
- **Usarlo para descartar**: un lead con puntuación baja también merece una respuesta, aunque sea automática.
- **Ignorar el tiempo**: un lead de hace tres semanas sin respuesta no vale lo mismo que uno de hoy. Resta puntos con la inactividad.

## Cómo saber si funciona

- Porcentaje de conversión de los leads de puntuación alta frente a los de baja. Si no hay diferencia clara, los criterios no discriminan.
- Tiempo de respuesta a los leads de puntuación alta.
- Ventas cerradas por mes antes y después.

> El lead scoring no sustituye al seguimiento: lo ordena. Si después no hay un sistema para insistir con criterio, la puntuación solo te dirá a quién estás perdiendo.

Para el siguiente paso, revisa [seguimiento de leads: cuándo insistir y cuándo parar](/blog/seguimiento-leads-pymes-cuando-insistir/) y [CRM y seguimiento de clientes](/crm-pymes-seguimiento-clientes/).`,
  faq: [
    {
      q: '¿Qué es el lead scoring?',
      a: 'Es asignar una puntuación a cada contacto según su encaje con tu cliente ideal y su interés de compra, para atender primero a quienes tienen más probabilidad de convertirse en clientes.',
    },
    {
      q: '¿Una pyme pequeña necesita lead scoring?',
      a: 'Si recibes más contactos de los que puedes atender con calma, sí. Con 30-50 contactos al mes ya ayuda a no dejar esperando a los más interesados. Puede empezar como una tabla de criterios sencilla.',
    },
    {
      q: '¿Cómo ayuda la IA al lead scoring?',
      a: 'Lee los mensajes libres de WhatsApp, formularios o emails y extrae los criterios (servicio, zona, urgencia, intención) para aplicar tu puntuación de forma automática y explicar por qué cada contacto tiene esa nota.',
    },
  ],
  related: [
    { href: '/blog/seguimiento-leads-pymes-cuando-insistir/', label: 'Seguimiento de leads' },
    { href: '/blog/reactivar-leads-frios-sin-perseguir/', label: 'Reactivar leads fríos' },
    { href: '/blog/hubspot-ia-crm-pymes/', label: 'HubSpot con IA para pymes' },
    { href: '/crm-pymes-seguimiento-clientes/', label: 'CRM y seguimiento de clientes' },
  ],
  ctaEyebrow: '¿Llegan leads que no sabes cómo priorizar?',
  ctaLabel: 'Ordenar mis leads',
};

export default guide;
