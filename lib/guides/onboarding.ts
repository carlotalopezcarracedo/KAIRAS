import type { BlogGuideData } from '../guideTypes';

const guide: BlogGuideData = {
  key: 'blog-onboarding-clientes',
  slug: 'onboarding-clientes-pymes-servicios-automatizado',
  title: 'Onboarding de clientes automatizado en pymes de servicios (sin que resulte frío)',
  seoTitle: 'Automatizar el onboarding de clientes en una pyme',
  description: 'Cómo automatizar el alta de clientes nuevos en una pyme de servicios: bienvenida, contrato, documentación, accesos y primera reunión, manteniendo el trato personal.',
  listDesc: 'Bienvenida, contrato, documentación, accesos y primera reunión automatizados, con un calendario de 14 días y los puntos que deben seguir siendo personales.',
  tags: ['Guía', 'Clientes', 'Onboarding'],
  keywords: ['onboarding de clientes', 'automatizar alta de clientes', 'bienvenida clientes automatizada', 'proceso de alta cliente', 'experiencia de cliente pymes'],
  published: '2026-06-04T00:00:00+02:00',
  updated: '2026-11-18',
  answer:
    'Automatizar el onboarding de clientes consiste en que, al confirmarse una venta, se envíen solos la bienvenida, el contrato para firmar, la lista de documentación y el enlace para la primera reunión, se creen la ficha y la carpeta del cliente y se recuerde lo que falte. La llamada de bienvenida y la primera reunión siguen siendo personales.',
  body: `## Por qué el onboarding importa tanto

Los primeros días después de contratar son cuando el cliente decide si ha acertado. Si recibe información clara, sabe qué tiene que hacer y siente que alguien se ocupa de él, la relación empieza bien. Si tiene que perseguir el contrato, no sabe qué documentos enviar o nadie le llama, empiezan las dudas. En muchas pymes de servicios esto depende de que una persona se acuerde de cada paso.

## Qué automatizar y qué no

| Paso | Automatizar | Personal |
| --- | --- | --- |
| Email o WhatsApp de bienvenida con próximos pasos | Sí | |
| Contrato para firma electrónica | Sí | |
| Lista de documentación o información necesaria | Sí | |
| Crear ficha, carpeta y accesos | Sí | |
| Recordatorios de lo pendiente | Sí | |
| Llamada de bienvenida | | Sí |
| Primera reunión o sesión | Agendado automático | La reunión, sí |
| Revisión a los 30 días | Recordatorio interno | La conversación, sí |

La regla: **automatiza la logística, personaliza los momentos importantes**.

## Calendario de onboarding de 14 días

| Día | Qué ocurre | Cómo |
| --- | --- | --- |
| 0 | Bienvenida con próximos pasos y persona de contacto | Automático al confirmarse la venta |
| 0 | Contrato para firmar y lista de documentación | Automático |
| 0 | Ficha, carpeta y tarea para el responsable | Automático |
| 1 | Llamada de bienvenida | Persona |
| 2 | Enlace para agendar la primera reunión | Automático |
| 3 | Recordatorio de documentos pendientes | Automático, solo si falta algo |
| 7 | Segundo recordatorio y aviso interno si sigue faltando | Automático |
| 7-10 | Primera reunión o sesión | Persona |
| 14 | Resumen de lo hecho y próximos pasos | Borrador con IA, revisado y enviado por una persona |

Adáptalo a tu sector: en una clínica serán días; en una asesoría o una consultoría, semanas.

## El mensaje de bienvenida

Un buen mensaje de bienvenida, aunque sea automático, debe:

- Usar el nombre del cliente y el servicio contratado.
- Decir **quién** será su persona de contacto, con nombre.
- Explicar los **próximos pasos** con fechas.
- Indicar qué necesitas de él y cómo enviarlo.
- Ofrecer un canal directo para dudas.

Ejemplo: «Hola, Marta. Gracias por confiar en nosotros para la gestión fiscal de tu empresa. Soy Laura y voy a ser tu persona de contacto. Esta semana te llamaré para conocerte; mientras tanto, aquí tienes el contrato para firmar y la lista de documentos que necesitamos. Si te surge cualquier duda, responde a este mensaje».

## Cómo se monta

1. **Disparador**: el presupuesto se marca como aceptado en el CRM, se firma o se registra el primer pago.
2. **Flujo** (Make, n8n, Power Automate o el propio CRM): envía la bienvenida, el contrato y la lista; crea la ficha, la carpeta y las tareas.
3. **Seguimiento**: cada día revisa qué falta y envía recordatorios solo a quien le falta algo.
4. **Panel**: lista de clientes en onboarding con su estado.

La IA aporta en dos puntos: revisar que los documentos recibidos son los correctos (ver [gestión documental con IA](/blog/gestion-documental-ia-automatizacion-pymes/)) y preparar el resumen del día 14.

## Errores que hacen que resulte frío

- Mensajes genéricos sin nombre ni persona de contacto.
- Demasiados emails seguidos el primer día.
- Recordatorios a quien ya ha enviado todo.
- Sustituir la llamada de bienvenida por un email.
- No avisar internamente cuando un cliente se atasca.

## Qué medir

- Días hasta completar el alta.
- Porcentaje de clientes con la documentación completa al día 7.
- Dudas o incidencias en las primeras semanas.
- Satisfacción a los 30 días.

> El cliente no percibe la automatización; percibe que todo llega a tiempo y que alguien le conoce. Ese es el objetivo.

Para documentar tu proceso de alta antes de automatizarlo, usa la plantilla de [cómo documentar procesos sin complicarse](/blog/documentar-procesos-pyme-sin-complicarse/). Si quieres que lo diseñemos contigo, mira [CRM y seguimiento de clientes](/crm-pymes-seguimiento-clientes/).`,
  faq: [
    {
      q: '¿Qué es el onboarding de clientes?',
      a: 'Es el proceso de alta de un cliente nuevo: bienvenida, contrato, recogida de información o documentación, accesos y primera reunión. Su objetivo es que el cliente empiece bien y sepa qué esperar.',
    },
    {
      q: '¿Qué parte del onboarding conviene automatizar?',
      a: 'La logística: mensajes de bienvenida, envío del contrato, lista de documentación, creación de ficha y carpeta, agenda de la primera reunión y recordatorios de lo pendiente. La llamada de bienvenida y la primera reunión deben ser personales.',
    },
    {
      q: '¿Cómo evito que un onboarding automatizado resulte frío?',
      a: 'Personalizando los mensajes con el nombre del cliente y de su persona de contacto, evitando enviar demasiados mensajes seguidos y manteniendo una llamada personal en los primeros días.',
    },
  ],
  related: [
    { href: '/blog/documentar-procesos-pyme-sin-complicarse/', label: 'Documentar procesos sin complicarse' },
    { href: '/blog/mensajes-automaticos-clientes-cuando-ayudan-molestan/', label: 'Mensajes automáticos a clientes' },
    { href: '/blog/gestion-documental-ia-automatizacion-pymes/', label: 'Gestión documental con IA' },
    { href: '/crm-pymes-seguimiento-clientes/', label: 'CRM y seguimiento de clientes' },
  ],
  ctaEyebrow: '¿Tus clientes nuevos tienen que perseguirte para empezar?',
  ctaLabel: 'Diseñar mi onboarding',
};

export default guide;
