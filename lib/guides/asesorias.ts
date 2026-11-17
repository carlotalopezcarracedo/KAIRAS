import type { BlogGuideData } from '../guideTypes';

const guide: BlogGuideData = {
  key: 'blog-asesorias',
  slug: 'automatizacion-asesorias-vencimientos-documentos-clientes',
  title: 'Automatización para asesorías: documentación, vencimientos y recordatorios sin perseguir clientes',
  seoTitle: 'Automatización para asesorías y gestorías con IA',
  description: 'Cómo automatizar una asesoría o gestoría: recogida de documentación trimestral, clasificación con IA, calendario de vencimientos, recordatorios a clientes y control de pendientes.',
  listDesc: 'Recogida de documentación, clasificación con IA, calendario fiscal, recordatorios escalonados y panel de pendientes por cliente.',
  tags: ['Guía', 'Asesorías', 'Sector'],
  keywords: ['automatización asesorías', 'automatización gestorías', 'recordatorios documentación clientes', 'vencimientos fiscales automatización', 'ia para asesorías'],
  published: '2026-05-26T00:00:00+02:00',
  updated: '2026-11-18',
  answer:
    'En una asesoría, lo que más tiempo consume es pedir y ordenar documentación. Automatizarlo significa tener un canal único de entrada, clasificar los documentos con IA por cliente y tipo, saber en todo momento qué falta a cada cliente y enviar recordatorios escalonados antes de cada vencimiento. Los gestores dedican el tiempo a revisar y asesorar.',
  body: `## El problema de cada trimestre

Cada trimestre se repite la escena: semanas antes de los vencimientos, el equipo empieza a pedir facturas, extractos y justificantes; los clientes los envían por email, WhatsApp o en mano, incompletos y a última hora; alguien los descarga, renombra y archiva; y los últimos días son una carrera. El trabajo técnico (revisar, calcular, presentar) queda comprimido.

## El sistema en cinco piezas

| Pieza | Qué hace | Regla o IA |
| --- | --- | --- |
| Canal único de entrada | Un email, un portal o un formulario por cliente | Regla |
| Clasificación | Identifica cliente, tipo de documento y periodo | IA |
| Archivo | Guarda con nombre normalizado en la carpeta del cliente y periodo | Regla |
| Control de pendientes | Compara lo recibido con lo esperado de cada cliente | Regla |
| Recordatorios | Avisa a cada cliente solo de lo que le falta | Regla + IA para el mensaje |

## Canal único de entrada

El primer cambio, y el que más orden aporta: que toda la documentación llegue por un solo sitio. Opciones habituales:

- Una dirección de email solo para documentación.
- Un portal o carpeta compartida por cliente.
- Un formulario de subida con el nombre del cliente.

Lo que llegue por WhatsApp o en mano se reenvía o fotografía a ese mismo canal. Así el sistema ve todo.

## Clasificación con IA

Para cada documento, la IA determina:

- **Cliente** (por el NIF, el nombre o el remitente).
- **Tipo**: factura emitida, factura recibida, extracto bancario, nómina, contrato, notificación, justificante.
- **Periodo** al que corresponde.
- **Datos clave** si es una factura: proveedor, importes, IVA.

Lo dudoso pasa a una cola de revisión. Ver [gestión documental con IA](/blog/gestion-documental-ia-automatizacion-pymes/) y [automatización de facturas](/blog/automatizacion-facturas-ia-pymes/).

## Saber qué falta a cada cliente

La pieza que más tiempo ahorra. Para cada cliente se define qué documentación se espera cada periodo (por ejemplo, facturas emitidas y recibidas, extractos de sus cuentas, nóminas si tiene empleados). El sistema compara con lo recibido y mantiene un panel:

| Cliente | Facturas emitidas | Facturas recibidas | Extractos | Estado |
| --- | --- | --- | --- | --- |
| Cliente A | Recibidas | Recibidas | Falta octubre | Pendiente |
| Cliente B | Recibidas | Recibidas | Recibidos | Completo |
| Cliente C | Faltan | Recibidas | Faltan | Pendiente |

## Recordatorios escalonados según el calendario fiscal

Los vencimientos los marca el [calendario del contribuyente de la Agencia Tributaria](https://sede.agenciatributaria.gob.es/). A partir de él:

| Momento | Mensaje |
| --- | --- |
| Inicio del periodo de presentación | Lista personalizada de lo que necesitamos y cómo enviarlo |
| 10 días antes del cierre interno | Recordatorio solo de lo que falta |
| 5 días antes | Recordatorio más directo |
| 3 días antes | Aviso al gestor para llamar |

Fija un **cierre interno** varios días antes del vencimiento oficial para tener margen. Los recordatorios se envían solo a quien le falta algo y dicen exactamente qué.

## Otros procesos que conviene automatizar

- **Alta de clientes nuevos**: contrato, lista de documentación inicial, carpeta y ficha. Ver [onboarding de clientes automatizado](/blog/onboarding-clientes-pymes-servicios-automatizado/).
- **Notificaciones**: registro de cada notificación recibida con tarea y aviso al gestor responsable.
- **Renovaciones y vencimientos** de certificados digitales, seguros o contratos de los clientes.
- **Consultas frecuentes**: respuestas aprobadas a dudas habituales, siempre revisadas cuando implican criterio fiscal.

## Lo que no se automatiza

- La revisión técnica y la presentación de declaraciones.
- El asesoramiento fiscal, laboral o contable.
- Las decisiones sobre casos dudosos.

## Protección de datos

Una asesoría trata datos económicos y personales muy sensibles. Usa herramientas con contrato de encargado de tratamiento, no subas documentos a asistentes de IA de consumo y limita los accesos por cliente. Ver [seguridad de datos y RGPD con IA](/blog/seguridad-datos-automatizacion-ia-pymes/).

## Qué medir

- Porcentaje de clientes con documentación completa en la fecha de cierre interno.
- Horas del equipo dedicadas a pedir y ordenar documentación.
- Declaraciones presentadas en los últimos dos días.

> El objetivo es que el último día del trimestre sea un día normal. Eso se consigue sabiendo, cada día, qué falta y a quién.

Si quieres montar este sistema en tu asesoría, puedes ver cómo trabajamos en [automatización de procesos](/automatizacion-procesos/) y [optimización operativa](/optimizacion-operativa-pymes/).`,
  faq: [
    {
      q: '¿Qué puede automatizar una asesoría o gestoría?',
      a: 'La recepción y clasificación de documentación, el control de lo que falta a cada cliente, los recordatorios antes de cada vencimiento, el alta de clientes nuevos, el registro de notificaciones y las respuestas a consultas frecuentes.',
    },
    {
      q: '¿Cómo dejo de perseguir a los clientes por la documentación?',
      a: 'Con un canal único de entrada, una lista de lo que se espera de cada cliente en cada periodo y recordatorios automáticos que se envían solo a quien le falta algo, indicando exactamente qué, con un cierre interno anterior al vencimiento oficial.',
    },
    {
      q: '¿Puede la IA clasificar las facturas y documentos de mis clientes?',
      a: 'Sí. Puede identificar el cliente, el tipo de documento, el periodo y los datos clave de las facturas, con una cola de revisión para los casos dudosos. Es importante usar herramientas profesionales con garantías de protección de datos.',
    },
  ],
  related: [
    { href: '/blog/gestion-documental-ia-automatizacion-pymes/', label: 'Gestión documental con IA' },
    { href: '/blog/automatizacion-facturas-ia-pymes/', label: 'Automatización de facturas con IA' },
    { href: '/blog/onboarding-clientes-pymes-servicios-automatizado/', label: 'Onboarding de clientes automatizado' },
    { href: '/automatizacion-procesos/', label: 'Automatización de procesos' },
  ],
  ctaEyebrow: '¿Cada trimestre es una carrera para reunir documentación?',
  ctaLabel: 'Ordenar mi asesoría',
};

export default guide;
