import type { BlogGuideData } from '../guideTypes';

const guide: BlogGuideData = {
  key: 'blog-cobros-recordatorios',
  slug: 'automatizar-cobros-recordatorios-pago-pymes',
  title: 'Automatizar cobros y recordatorios de pago en pymes de servicios',
  seoTitle: 'Automatizar cobros y recordatorios de pago en pymes',
  description: 'Cómo automatizar el cobro en una pyme de servicios: calendario de recordatorios, plantillas por etapa, canales, pagos con enlace, cuándo pasar a una persona y qué medir.',
  listDesc: 'Calendario de recordatorios, plantillas por etapa, enlace de pago, cuándo llamar y qué medir para cobrar antes sin dañar la relación.',
  tags: ['Guía', 'Cobros', 'Administración'],
  keywords: ['automatizar cobros', 'recordatorios de pago', 'reclamar facturas impagadas', 'gestión de cobros pymes', 'mensajes de recordatorio de pago'],
  published: '2026-06-04T00:00:00+02:00',
  updated: '2026-11-18',
  answer:
    'Automatizar los cobros consiste en enviar recordatorios en momentos fijos (antes del vencimiento, el día del vencimiento y a los 7 días), con un enlace o datos de pago claros, registrar cada aviso y pasar a una persona los impagos que superan un plazo o un importe. La automatización envía lo rutinario; la conversación delicada sigue siendo humana.',
  body: `## Por qué se cobra tarde

En la mayoría de pymes de servicios, los retrasos no se deben a clientes que no quieren pagar, sino a olvidos: la factura se perdió en el correo, no estaba claro cómo pagar o nadie la reclamó a tiempo. Reclamar a mano es incómodo y se va posponiendo. Por eso un sistema automático y amable suele mejorar mucho los plazos de cobro.

## El calendario de recordatorios

| Momento | Mensaje | Canal | Quién |
| --- | --- | --- | --- |
| 3 días antes del vencimiento | Aviso amable con importe, fecha y forma de pago | Email | Automático |
| Día del vencimiento | Recordatorio con enlace o datos de pago | Email o WhatsApp | Automático |
| 7 días después | Segundo recordatorio con la factura adjunta | Email | Automático |
| 15 días después | Mensaje más directo, pide confirmar fecha de pago | Email o WhatsApp | Automático con revisión |
| 20-30 días después | Llamada | Teléfono | Persona |

Ajusta los plazos a tu sector. En servicios recurrentes (cuotas mensuales) conviene acortar; en proyectos con pagos por hitos, alinear con cada hito.

## Plantillas por etapa

**Antes del vencimiento**: «Hola, Laura. Te recordamos que la factura 2026-145 de 320 € vence el día 15. Puedes pagarla por transferencia a [IBAN] o con este enlace. Cualquier duda, responde a este mensaje».

**Día del vencimiento**: breve, con el enlace de pago visible.

**Tras 7 días**: «Es posible que se te haya pasado la factura 2026-145. Te la adjuntamos de nuevo. Si ya la has pagado, ignora este mensaje».

**Tras 15 días**: «Seguimos sin registrar el pago de la factura 2026-145. ¿Nos confirmas cuándo podrás realizarlo?».

La IA puede adaptar el tono según el historial del cliente (un cliente de años con un retraso puntual no recibe el mismo mensaje que uno con retrasos habituales), pero el mensaje debe partir de estas plantillas aprobadas.

## Facilitar el pago es la mitad del trabajo

- **Enlace de pago** con tarjeta o Bizum cuando sea posible.
- **Datos de transferencia** completos y la referencia a indicar.
- **Domiciliación** para servicios recurrentes.
- **Factura adjunta** o accesible con un clic.

Cuanto menos tenga que buscar el cliente, antes paga.

## Cómo se monta el flujo

1. El programa de facturación registra la factura emitida y su vencimiento.
2. Un flujo (Make, n8n, Power Automate o la propia herramienta de facturación) revisa cada día las facturas pendientes.
3. Según los días respecto al vencimiento, envía el recordatorio correspondiente.
4. Cuando se registra el pago (conciliación bancaria o marca manual), el flujo deja de enviar.
5. Los casos que pasan del día 20, o superan cierto importe, crean una tarea para que alguien llame.

El paso 4 es crítico: no hay nada peor que reclamar una factura ya pagada. Por eso la conciliación debe estar al día. Más en [automatización de facturas y procesos contables con IA](/blog/automatizacion-facturas-ia-pymes/).

## Cuándo debe intervenir una persona

- Clientes estratégicos o con relación delicada.
- Importes altos.
- Clientes que responden con una queja o una disputa sobre el servicio.
- Retrasos que superan el plazo que hayas definido.

## Qué medir

- **Días medios de cobro** (desde la emisión hasta el pago).
- Porcentaje de facturas cobradas en plazo.
- Importe pendiente a más de 30 días.
- Tiempo que dedica el equipo a reclamar.

Medir antes y después permite calcular el valor del sistema: cobrar antes mejora la tesorería aunque no cambie la facturación.

## Aspectos legales básicos

Los recordatorios de pago a clientes son comunicaciones relacionadas con un contrato y no publicidad, pero cuida el tono y la frecuencia, y no compartas datos de la deuda con terceros. Si usas WhatsApp, recuerda que la API exige plantillas aprobadas para iniciar conversación. Ver [mensajes automáticos: cuándo ayudan y cuándo molestan](/blog/mensajes-automaticos-clientes-cuando-ayudan-molestan/).

> Un buen sistema de cobro no persigue: recuerda a tiempo, facilita el pago y deja a las personas solo los casos que necesitan conversación.

Si quieres montar este flujo sobre tu programa de facturación, puedes ver cómo trabajamos en [automatización de procesos](/automatizacion-procesos/).`,
  faq: [
    {
      q: '¿Cuándo enviar recordatorios de pago?',
      a: 'Una pauta habitual es avisar 3 días antes del vencimiento, el mismo día, a los 7 días y a los 15 días, y llamar a partir de los 20-30 días. Ajusta los plazos a tu sector y al tipo de servicio.',
    },
    {
      q: '¿Se pueden automatizar los recordatorios de pago por WhatsApp?',
      a: 'Sí, con la API de WhatsApp y plantillas aprobadas por Meta para iniciar la conversación. Es un canal eficaz para importes pequeños y clientes particulares; para empresas, el email con la factura adjunta suele ser más adecuado.',
    },
    {
      q: '¿Cómo evito reclamar una factura que ya está pagada?',
      a: 'Conectando el flujo con la conciliación bancaria o con el estado de pago en tu programa de facturación, de modo que el recordatorio se cancele en cuanto se registra el pago. Revisa esa conexión antes de activar los envíos.',
    },
  ],
  related: [
    { href: '/blog/automatizacion-facturas-ia-pymes/', label: 'Automatización de facturas con IA' },
    { href: '/blog/mensajes-automaticos-clientes-cuando-ayudan-molestan/', label: 'Mensajes automáticos a clientes' },
    { href: '/blog/automatizacion-tareas-administrativas-ia-pymes/', label: 'Tareas administrativas con IA' },
    { href: '/automatizacion-procesos/', label: 'Automatización de procesos' },
  ],
  ctaEyebrow: '¿Se te acumulan facturas pendientes de cobro?',
  ctaLabel: 'Ordenar mis cobros',
};

export default guide;
