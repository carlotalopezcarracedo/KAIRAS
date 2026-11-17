import type { BlogGuideData } from '../guideTypes';

const guide: BlogGuideData = {
  key: 'blog-chatbot-ia-atencion',
  slug: 'chatbot-ia-atencion-cliente-pymes',
  title: 'Chatbot y asistente de IA para atención al cliente en pymes: guía y comparativa',
  seoTitle: 'Chatbot con IA para atención al cliente en pymes',
  description: 'Qué puede resolver un chatbot o asistente de IA en atención al cliente, comparativa de opciones (Tidio, ManyChat, WhatsApp API, a medida), límites legales y cómo conectarlo al CRM.',
  listDesc: 'Qué resuelve y qué no, comparativa de Tidio, ManyChat, WhatsApp API y soluciones a medida, escalado humano, obligaciones legales y métricas.',
  tags: ['Guía', 'Chatbot IA', 'Atención al cliente'],
  keywords: ['chatbot con ia para atención al cliente', 'asistente de ia atención al cliente', 'comparativa chatbot ia', 'tidio chatbot', 'manychat', 'automatización atención al cliente'],
  published: '2026-06-05T00:00:00+02:00',
  updated: '2026-11-18',
  answer:
    'Un chatbot con IA resuelve bien las preguntas repetidas (horarios, servicios, precios publicados, estado de una cita), recoge datos y propone el siguiente paso. No debe dar diagnósticos, cerrar precios ni gestionar quejas sin una persona. Su valor real aparece cuando está conectado al CRM o a la agenda y pasa los casos complejos con un resumen.',
  body: `## Qué puede resolver y qué no

| Resuelve bien | Debe pasar a una persona |
| --- | --- |
| Horarios, ubicación, servicios | Quejas y clientes molestos |
| Precios ya publicados | Presupuestos a medida y descuentos |
| Pedir, cambiar o confirmar citas | Temas de salud, legales o fiscales |
| Recoger datos de un lead | Negociaciones |
| Estado de un pedido o trámite | Cualquier caso que el bot no entienda a la segunda |
| Preguntas frecuentes del servicio | Datos personales sensibles |

Un asistente que intenta resolverlo todo genera más trabajo del que ahorra: respuestas incorrectas, clientes frustrados y conversaciones que alguien tiene que rehacer.

## Chatbot de reglas, asistente de IA o agente

- **Chatbot de reglas (menús y botones)**: el cliente elige opciones. Es predecible y barato, pero rígido.
- **Asistente de IA**: entiende lo que el cliente escribe con sus palabras y responde con la información que le das. Es lo más útil para pymes de servicios.
- **Agente**: además de responder, ejecuta acciones (crear la cita, actualizar el CRM). Ver [agentes de IA para procesos](/blog/agentes-ia-automatizacion-procesos-pymes/).

Lo habitual es un asistente de IA con algunas acciones concretas y un botón claro de «hablar con una persona».

## Comparativa de opciones

| Opción | Canal principal | Ventajas | Límites | Encaja en |
| --- | --- | --- | --- | --- |
| Tidio | Chat web, email, redes | Rápido de montar, IA incluida, bandeja compartida | Menos flexible para procesos propios | Webs con tráfico y consultas frecuentes |
| ManyChat | Instagram, Facebook, WhatsApp | Muy bueno para redes y campañas | Pensado para marketing más que para operaciones | Negocios que captan por Instagram |
| WhatsApp Business App | WhatsApp | Gratis, respuestas rápidas y mensajes de ausencia | Sin IA real ni integraciones | Volumen bajo |
| WhatsApp Business API con proveedor | WhatsApp | Varios agentes, IA, conexión con CRM | Coste por mensaje y plantillas aprobadas | Volumen medio o alto |
| A medida (Make, n8n + IA) | Cualquiera | Se adapta a tu proceso y tus herramientas | Requiere diseño y mantenimiento | Procesos propios o varios canales |

Si WhatsApp es tu canal principal, lee antes [WhatsApp Business App vs API](/blog/whatsapp-business-app-vs-api-pymes/).

## Lo que de verdad decide el resultado: la información que le das

Un asistente de IA responde con lo que sabe. Antes de activarlo, prepara:

1. **Preguntas frecuentes reales**: revisa los últimos 100 mensajes y apunta las 20 preguntas que más se repiten.
2. **Respuestas aprobadas**: horarios, servicios, precios publicados, políticas de cancelación, formas de pago.
3. **Lo que no debe decir nunca**: precios no publicados, diagnósticos, promesas de plazos.
4. **Cuándo escalar**: palabras o situaciones que pasan directamente a una persona (queja, urgencia, «quiero hablar con alguien»).

## Escalado humano: cómo hacerlo bien

El momento más delicado es el paso a una persona. Debe cumplir tres cosas:

- **El cliente no repite nada**: la persona recibe un resumen con lo que pidió y los datos recogidos.
- **Se avisa en un sitio que alguien mira**: el CRM, una bandeja compartida o una notificación al responsable.
- **Se dice un plazo realista**: «te responde una persona del equipo hoy antes de las 18:00», no «en breve».

## Conectarlo al CRM: donde está el valor

Un chatbot aislado solo contesta. Conectado al CRM o a la agenda:

- Cada conversación crea o actualiza la ficha del cliente.
- Las citas quedan en la agenda sin copiarlas.
- Los leads llegan clasificados y con su siguiente paso.
- Puedes medir cuántas consultas se convierten en clientes.

Lo explicamos en [cómo conectar WhatsApp con tu CRM sin crear más trabajo](/blog/conectar-whatsapp-crm-sin-crear-mas-trabajo/) y en [CRM y seguimiento de clientes](/crm-pymes-seguimiento-clientes/).

## Obligaciones legales que no conviene olvidar

- **Avisar de que es IA**: desde agosto de 2026, el [Reglamento europeo de IA](https://eur-lex.europa.eu/eli/reg/2024/1689/oj) obliga a informar a las personas de que están interactuando con un sistema de IA, salvo que sea evidente.
- **Protección de datos**: informa de qué datos recoges y para qué, y firma un contrato de encargado de tratamiento con el proveedor del chatbot. La [AEPD](https://www.aepd.es/) tiene guías específicas.
- **WhatsApp**: para escribir primero a un cliente por la API necesitas su consentimiento y plantillas aprobadas por Meta.

## Métricas para saber si funciona

- Porcentaje de conversaciones resueltas sin intervención.
- Tiempo hasta la primera respuesta (debería bajar a segundos).
- Porcentaje escalado a una persona y motivos más frecuentes.
- Valoración del cliente o quejas sobre el asistente.
- Consultas que acaban en cita o venta.

Revisa cada semana una muestra de conversaciones durante el primer mes. Es la forma más rápida de detectar respuestas mejorables.

## Errores típicos

1. Activarlo sin preparar las respuestas aprobadas.
2. Esconder la opción de hablar con una persona.
3. No conectarlo con nada y seguir copiando datos a mano.
4. Medir solo «conversaciones atendidas» en vez de problemas resueltos.
5. Usarlo para enviar mensajes promocionales que el cliente no pidió. Ver [mensajes automáticos: cuándo ayudan y cuándo molestan](/blog/mensajes-automaticos-clientes-cuando-ayudan-molestan/).

Si quieres un asistente conectado a tu WhatsApp, agenda o CRM, puedes ver cómo trabajamos en [automatización de WhatsApp para empresas](/automatizacion-whatsapp-empresas/).`,
  faq: [
    {
      q: '¿Qué diferencia hay entre un chatbot y un asistente de IA?',
      a: 'Un chatbot clásico funciona con menús y respuestas fijas. Un asistente de IA entiende lo que el cliente escribe con sus palabras y responde con la información que le has dado. Para pymes de servicios, el asistente suele dar mejor experiencia.',
    },
    {
      q: '¿Es obligatorio avisar de que el chatbot es una IA?',
      a: 'Sí. El Reglamento europeo de IA obliga, desde agosto de 2026, a informar a las personas de que interactúan con un sistema de IA, salvo que sea evidente por el contexto. Basta con un mensaje claro al inicio de la conversación.',
    },
    {
      q: '¿Qué chatbot es mejor para una pyme, Tidio o ManyChat?',
      a: 'Tidio encaja mejor si las consultas llegan por la web y quieres una bandeja compartida. ManyChat encaja mejor si captas clientes por Instagram o Facebook. Si tu proceso es propio o usa varios canales, una solución a medida conectada a tu CRM suele dar más valor.',
    },
    {
      q: '¿Un chatbot puede dar precios?',
      a: 'Puede dar precios ya publicados o rangos aprobados. Los presupuestos a medida, descuentos y condiciones especiales deben pasar por una persona.',
    },
  ],
  related: [
    { href: '/blog/dejar-de-gestionar-whatsapp-empresa-a-mano/', label: 'Automatizar WhatsApp sin perder trato humano' },
    { href: '/blog/whatsapp-business-app-vs-api-pymes/', label: 'WhatsApp Business App vs API' },
    { href: '/blog/agentes-ia-automatizacion-procesos-pymes/', label: 'Agentes de IA para procesos' },
    { href: '/automatizacion-whatsapp-empresas/', label: 'Automatización de WhatsApp' },
  ],
  ctaEyebrow: '¿Quieres un asistente que atienda sin perder el trato humano?',
  ctaLabel: 'Hablar de mi caso',
};

export default guide;
