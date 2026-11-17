import type { BlogGuideData } from '../guideTypes';

const guide: BlogGuideData = {
  key: 'blog-whatsapp-manual',
  slug: 'dejar-de-gestionar-whatsapp-empresa-a-mano',
  title: 'Cómo dejar de gestionar el WhatsApp de empresa a mano (con IA y sin perder trato humano)',
  seoTitle: 'Automatizar WhatsApp de empresa con IA, paso a paso',
  description: 'Guía paso a paso para dejar de gestionar el WhatsApp de empresa a mano: ordenar mensajes, responder con IA, conectar con el CRM y mantener el trato humano.',
  listDesc: 'Guía paso a paso: diagnóstico del canal, respuestas con IA, flujos con Make o n8n, conexión al CRM, normas de Meta y métricas.',
  tags: ['Guía', 'WhatsApp', 'Automatización IA'],
  keywords: ['gestionar whatsapp empresa', 'automatización whatsapp con ia', 'whatsapp business automatizar', 'make whatsapp ia', 'whatsapp empresa a mano'],
  published: '2026-04-28T00:00:00+02:00',
  updated: '2026-11-18',
  answer:
    'Para dejar de gestionar el WhatsApp de empresa a mano hay que hacer cuatro cosas: centralizar el canal en una bandeja compartida, clasificar los mensajes entrantes (con reglas o con IA), responder lo repetido con información aprobada y registrar cada conversación en el CRM. Las personas se quedan con lo que necesita criterio.',
  body: `## Las señales de que el WhatsApp se ha vuelto un problema

- El WhatsApp de empresa está en el móvil de una sola persona.
- Hay mensajes sin responder del fin de semana cada lunes.
- Nadie sabe si a un cliente ya se le contestó o quién lo hizo.
- Los datos de los leads se quedan en el chat y nunca llegan al CRM ni a una hoja.
- Respondéis las mismas cinco preguntas veinte veces al día.

Si te reconoces en dos o más, el canal ya está costando clientes. Responder tarde es una de las principales causas por las que [las pymes pierden clientes antes de firmar](/blog/por-que-las-pymes-pierden-clientes-antes-de-firmar/).

## Paso 1: mide cómo está el canal hoy

Antes de tocar nada, durante una semana anota (vale una hoja sencilla):

| Qué medir | Por qué |
| --- | --- |
| Mensajes nuevos al día | Para dimensionar la solución |
| Tipos de mensaje (cita, precio, duda, queja, otros) | Para saber qué automatizar |
| Tiempo medio hasta la primera respuesta | Es la cifra que más vas a mejorar |
| Mensajes que se quedaron sin respuesta | Son clientes perdidos |
| Quién responde y desde dónde | Para ver la dependencia de una persona |

Con esa semana sabrás si la mayoría de mensajes son repetidos (automatizables) o variados (necesitan IA o personas).

## Paso 2: elige la base, App o API

- **WhatsApp Business App** (gratis): mensajes de ausencia, respuestas rápidas, etiquetas y catálogo. Sirve para volumen bajo y un equipo muy pequeño.
- **WhatsApp Business Platform (API)**: varias personas a la vez, conexión con CRM, IA y automatizaciones. Tiene coste por mensaje según la categoría de la plantilla y exige plantillas aprobadas para escribir primero al cliente. Las condiciones están en la [documentación de precios de Meta](https://developers.facebook.com/docs/whatsapp/pricing/).

Si recibes más de 20-30 conversaciones al día o hay más de una persona atendiendo, la API suele compensar. La comparativa completa está en [WhatsApp Business App vs API](/blog/whatsapp-business-app-vs-api-pymes/).

## Paso 3: ordena antes de automatizar

1. **Una bandeja compartida**: todo el equipo ve las mismas conversaciones, con responsable asignado y estado (nuevo, en curso, resuelto).
2. **Etiquetas por tipo**: cita, presupuesto, duda, cliente actual, queja.
3. **Respuestas aprobadas**: escribe las respuestas a las 10-20 preguntas más frecuentes. Esta es la base que usará la IA.
4. **Horario y compromiso**: qué se responde fuera de horario y en qué plazo contesta una persona.

## Paso 4: automatiza lo repetido

Flujos que suelen dar resultado desde la primera semana:

- **Bienvenida con opciones** para orientar la conversación.
- **Respuesta fuera de horario** que recoge los datos y promete un plazo realista.
- **Confirmación y recordatorio de citas** (un caso muy desarrollado en [confirmación de citas por WhatsApp en clínicas](/blog/confirmacion-citas-whatsapp-clinicas/)).
- **Seguimiento de presupuestos** a los pocos días de enviarlos.

## Paso 5: añade IA donde hace falta entender

La IA aporta cuando el cliente escribe libremente:

- **Clasifica** el mensaje (cita, precio, duda, queja) y lo asigna a quien corresponde.
- **Extrae datos**: nombre, servicio, día preferido, zona.
- **Redacta la respuesta** con las respuestas aprobadas, o un borrador para que lo revise una persona.
- **Resume** conversaciones largas antes de pasarlas.

Un flujo típico con Make o n8n: llega el mensaje por la API → la IA lo clasifica y extrae datos → se busca o crea el contacto en el CRM → si es una pregunta frecuente se responde; si no, se asigna a una persona con un resumen. Las diferencias entre plataformas están en [n8n vs Make vs Zapier](/blog/n8n-vs-make-automatizacion-ia-pymes/).

> El trato humano no se pierde por automatizar, sino por automatizar mal: respuestas genéricas, sin salida a una persona y sin contexto. Si el cliente no tiene que repetir nada cuando le atiende alguien, el sistema está bien diseñado.

## Paso 6: conecta con el CRM

Cada conversación debería dejar rastro en la ficha del cliente: qué pidió, qué se le respondió y cuál es el siguiente paso. Sin eso seguirás dependiendo de la memoria de alguien. Lo explicamos en [cómo conectar WhatsApp con tu CRM sin crear más trabajo](/blog/conectar-whatsapp-crm-sin-crear-mas-trabajo/).

## Normas de WhatsApp que no conviene saltarse

- Para escribir primero a un cliente con la API necesitas su **consentimiento** y una **plantilla aprobada** por Meta.
- Dentro de las 24 horas siguientes al último mensaje del cliente puedes responder libremente; fuera de esa ventana, solo con plantillas.
- Los envíos masivos sin consentimiento pueden acabar en bloqueos del número. Revisa la [política de WhatsApp Business](https://business.whatsapp.com/policy).
- Si usas IA para responder, informa de que es un asistente automático.

## Cómo medir la mejora

Repite las mediciones del paso 1 a las cuatro semanas:

- Tiempo hasta la primera respuesta.
- Mensajes sin responder.
- Porcentaje resuelto sin intervención.
- Leads registrados en el CRM frente a conversaciones recibidas.

Si quieres ayuda con el diseño, en KAIRAS montamos sistemas de WhatsApp con IA y control humano para pymes de servicios: [automatización de WhatsApp para empresas](/automatizacion-whatsapp-empresas/).`,
  faq: [
    {
      q: '¿Se puede automatizar WhatsApp Business gratis?',
      a: 'Con la app gratuita puedes configurar mensajes de bienvenida, de ausencia, respuestas rápidas y etiquetas. Para usar IA, varias personas a la vez o conectarlo con un CRM necesitas la API de WhatsApp, que tiene coste por mensaje según la categoría.',
    },
    {
      q: '¿Puedo usar ChatGPT para responder el WhatsApp de mi empresa?',
      a: 'No directamente desde la app. Se hace conectando la API de WhatsApp con una plataforma como Make o n8n y un modelo de IA, que responde con la información que tú apruebas y pasa a una persona lo que no debe resolver.',
    },
    {
      q: '¿Cómo mantengo el trato humano si automatizo WhatsApp?',
      a: 'Automatiza solo lo repetido, ofrece siempre la opción de hablar con una persona, pasa los casos con un resumen para que el cliente no repita nada y revisa cada semana una muestra de conversaciones.',
    },
    {
      q: '¿Cuántos mensajes al día justifican automatizar?',
      a: 'No hay una cifra fija, pero a partir de unas 20-30 conversaciones diarias, o cuando más de una persona atiende el canal, ordenar y automatizar suele ahorrar varias horas a la semana y reducir clientes perdidos.',
    },
  ],
  related: [
    { href: '/blog/whatsapp-business-app-vs-api-pymes/', label: 'WhatsApp Business App vs API' },
    { href: '/blog/conectar-whatsapp-crm-sin-crear-mas-trabajo/', label: 'Conectar WhatsApp con el CRM' },
    { href: '/blog/chatbot-ia-atencion-cliente-pymes/', label: 'Chatbot con IA para atención al cliente' },
    { href: '/automatizacion-whatsapp-empresas/', label: 'Automatización de WhatsApp' },
  ],
  ctaEyebrow: '¿Tu WhatsApp de empresa depende de una sola persona?',
  ctaLabel: 'Ordenar mi WhatsApp',
};

export default guide;
