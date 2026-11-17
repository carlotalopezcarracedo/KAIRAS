import type { BlogGuideData } from '../guideTypes';

const guide: BlogGuideData = {
  key: 'blog-preparar-datos-ia',
  slug: 'preparar-datos-empresa-automatizar-ia',
  title: 'Cómo preparar los datos de tu empresa antes de automatizar con IA',
  seoTitle: 'Preparar los datos de tu empresa para automatizar con IA',
  description: 'Checklist para preparar los datos de una pyme antes de automatizar con IA: dónde están, cómo limpiarlos, nombres y campos comunes, información aprobada y permisos.',
  listDesc: 'Inventario de datos, limpieza, campos y nombres comunes, información aprobada para la IA, permisos y una checklist de 15 puntos.',
  tags: ['Guía', 'Datos', 'Preparación'],
  keywords: ['preparar datos para ia', 'datos empresa automatización', 'limpieza de datos pymes', 'calidad de datos crm', 'base de conocimiento ia'],
  published: '2026-06-04T00:00:00+02:00',
  updated: '2026-11-18',
  answer:
    'Para automatizar con IA, los datos de la empresa deben estar localizados, sin duplicados, con campos y nombres comunes y en herramientas que se puedan conectar. Además, la IA necesita información aprobada (servicios, precios, horarios, políticas) en un documento actualizado. Preparar esto suele llevar unos días y evita la mayoría de errores.',
  body: `## Por qué los datos deciden el resultado

Una automatización con IA hace lo mismo que haría una persona nueva con la información que le das. Si los datos de clientes están repartidos en tres hojas con nombres distintos, o la lista de precios del documento no es la vigente, la IA cometerá exactamente esos errores, solo que más rápido. Preparar los datos no es un paso técnico: es poner orden en lo que ya tienes.

## Paso 1: inventario de dónde está cada dato

Haz una tabla sencilla:

| Dato | Dónde está hoy | Quién lo actualiza | ¿Se puede conectar? |
| --- | --- | --- | --- |
| Clientes | CRM, hoja de cálculo y agenda del móvil | Recepción | CRM sí, hoja sí, móvil no |
| Citas | Software de agenda | Recepción | Sí, con API |
| Presupuestos | Carpeta de Drive y email | Gerencia | Parcialmente |
| Precios | PDF de 2025 y web | Gerencia | Manual |
| Facturas | Programa de facturación | Administración | Sí |

En cuanto lo escribas verás duplicidades («¿cuál de las tres listas de clientes es la buena?») y huecos (datos que solo están en la cabeza de alguien).

## Paso 2: elige una fuente de verdad por dato

Para cada tipo de dato, decide **un** sitio oficial. Los clientes, en el CRM; las citas, en la agenda; los precios, en un documento concreto. El resto de copias se eliminan o pasan a alimentarse automáticamente de la fuente oficial.

## Paso 3: limpia lo imprescindible

No hace falta limpiar todo el histórico. Prioriza:

- **Duplicados** de clientes (mismo teléfono o email).
- **Formatos**: teléfonos con prefijo, fechas en un único formato, nombres en mayúsculas y minúsculas coherentes.
- **Campos vacíos** que el flujo va a necesitar (por ejemplo, el email si se van a enviar recordatorios).
- **Estados**: que cada cliente u oportunidad tenga un estado claro (nuevo, en curso, ganado, perdido).

La IA ayuda mucho en esta fase: puede unificar formatos, detectar posibles duplicados y completar categorías a partir de notas.

## Paso 4: nombres y campos comunes

Las automatizaciones se rompen cuando cada persona llama de forma distinta a lo mismo. Define:

- **Lista cerrada de servicios** con el mismo nombre en web, CRM, agenda y facturación.
- **Lista cerrada de estados** de clientes y oportunidades.
- **Origen del contacto**: web, WhatsApp, recomendación, redes, teléfono.
- **Nombres de archivo**: AAAA-MM-DD_Cliente_Tipo.

## Paso 5: la información aprobada para la IA

Si la IA va a responder a clientes o al equipo, necesita una base de conocimiento: un documento (o varios) con la información oficial.

- Servicios: qué incluye cada uno, para quién es, duración.
- Precios publicados o rangos aprobados.
- Horarios, ubicación, formas de contacto y de pago.
- Políticas: cancelaciones, devoluciones, plazos.
- Preguntas frecuentes con su respuesta.
- Lo que **no** se debe decir nunca.

Cada documento con su fecha de actualización y un responsable. Si cambia un precio, se cambia aquí el mismo día. Ver cómo se usa en [chatbot con IA para atención al cliente](/blog/chatbot-ia-atencion-cliente-pymes/).

## Paso 6: permisos y datos personales

- ¿Qué datos necesita realmente cada flujo? Envía a la IA solo esos.
- ¿Quién puede ver cada carpeta o tabla?
- ¿Hay datos especialmente protegidos (salud, datos económicos)?

La checklist completa está en [seguridad de datos en automatizaciones con IA](/blog/seguridad-datos-automatizacion-ia-pymes/).

## Checklist de 15 puntos

1. Inventario de datos hecho.
2. Una fuente de verdad por tipo de dato.
3. Duplicados de clientes eliminados.
4. Teléfonos y emails con formato correcto.
5. Fechas en un único formato.
6. Estados de clientes y oportunidades definidos.
7. Lista cerrada de servicios con nombres iguales en todas las herramientas.
8. Origen del contacto registrado.
9. Estructura de carpetas y nombres de archivo definida.
10. Documento de información aprobada creado y fechado.
11. Respuestas a las preguntas frecuentes escritas.
12. Lista de lo que la IA no debe decir.
13. Permisos revisados.
14. Datos sensibles identificados.
15. Responsable de mantener los datos al día.

> No necesitas datos perfectos para empezar. Necesitas que los datos que usa el primer flujo sean fiables. Empieza por ahí y ordena el resto poco a poco.

El siguiente paso es documentar el proceso que vas a automatizar: [cómo documentar procesos en una pyme sin complicarse](/blog/documentar-procesos-pyme-sin-complicarse/). Si quieres ayuda para ordenarlo, lo hacemos dentro del diagnóstico de [optimización operativa](/optimizacion-operativa-pymes/).`,
  faq: [
    {
      q: '¿Qué datos necesito para automatizar con IA?',
      a: 'Los que usa el proceso que vas a automatizar, en una fuente fiable y conectable: normalmente clientes, citas o pedidos y sus estados. Si la IA va a responder, además necesitas un documento con la información aprobada: servicios, precios, horarios y políticas.',
    },
    {
      q: '¿Tengo que limpiar todos mis datos antes de automatizar?',
      a: 'No. Basta con que los datos que usa el primer flujo sean fiables: sin duplicados, con formatos correctos y con estados claros. El resto se puede ordenar poco a poco, y la IA ayuda a hacerlo más rápido.',
    },
    {
      q: '¿Qué es una base de conocimiento para la IA?',
      a: 'Es el conjunto de documentos con la información oficial de la empresa que la IA usa para responder: servicios, precios, horarios, políticas y preguntas frecuentes. Debe tener fecha de actualización y un responsable.',
    },
  ],
  related: [
    { href: '/blog/documentar-procesos-pyme-sin-complicarse/', label: 'Documentar procesos sin complicarse' },
    { href: '/blog/como-saber-que-proceso-automatizar-primero/', label: 'Qué proceso automatizar primero' },
    { href: '/blog/seguridad-datos-automatizacion-ia-pymes/', label: 'Seguridad de datos con IA' },
    { href: '/optimizacion-operativa-pymes/', label: 'Optimización operativa' },
  ],
  ctaEyebrow: '¿Tus datos están repartidos en demasiados sitios?',
  ctaLabel: 'Ordenarlos conmigo',
};

export default guide;
