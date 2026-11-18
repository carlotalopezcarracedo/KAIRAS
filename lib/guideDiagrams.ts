// One flow diagram per blog guide. scripts/build-guide-diagrams.mjs renders each
// one to public/blog/diagramas/<slug>.{webp,png}; BlogGuide shows it as a figure
// and sync-guides uses the PNG as og:image and BlogPosting image.
// k: who does the step -> 'regla' (fixed automation), 'ia' (AI), 'persona' (human).

export type DiagramStep = { t: string; d: string; k: 'regla' | 'ia' | 'persona' };
export type GuideDiagram = { title: string; caption: string; steps: DiagramStep[] };

const diagrams: Record<string, GuideDiagram> = {
  'agencia-automatizacion-ia-como-elegir': {
    title: 'Cómo elegir agencia de automatización',
    caption: 'Proceso recomendado para elegir proveedor: de las preguntas previas al piloto con métricas.',
    steps: [
      { t: 'Preguntas', d: '12 preguntas antes de pedir presupuesto', k: 'persona' },
      { t: 'Señales', d: 'Descarta promesas sin método ni métricas', k: 'persona' },
      { t: 'Comparar', d: 'Alcance, propiedad, soporte y coste total', k: 'persona' },
      { t: 'Piloto', d: 'Un proceso, plazo corto y resultado medible', k: 'regla' },
    ],
  },
  'agentes-ia-automatizacion-procesos-pymes': {
    title: 'Cómo funciona un agente de IA',
    caption: 'Ciclo de un agente de IA con límites: objetivo, decisión, acción con herramientas permitidas y revisión humana.',
    steps: [
      { t: 'Objetivo', d: 'Tarea concreta y datos que puede usar', k: 'persona' },
      { t: 'Decide', d: 'Elige el siguiente paso según el contexto', k: 'ia' },
      { t: 'Actúa', d: 'Solo con herramientas y permisos acotados', k: 'regla' },
      { t: 'Revisión', d: 'Una persona aprueba lo sensible', k: 'persona' },
    ],
  },
  'automatizacion-asesorias-vencimientos-documentos-clientes': {
    title: 'Documentación de clientes en una asesoría',
    caption: 'Sistema para asesorías: canal único, clasificación con IA, control de pendientes y recordatorios antes del cierre.',
    steps: [
      { t: 'Canal único', d: 'Email, portal o formulario por cliente', k: 'regla' },
      { t: 'Clasifica', d: 'Cliente, tipo de documento y periodo', k: 'ia' },
      { t: 'Pendientes', d: 'Compara lo recibido con lo esperado', k: 'regla' },
      { t: 'Recuerda', d: 'Solo a quien le falta algo, y qué', k: 'regla' },
    ],
  },
  'chatbot-ia-atencion-cliente-pymes': {
    title: 'Asistente de IA con escalado humano',
    caption: 'Flujo de atención con IA: entiende la consulta, responde con información aprobada, pasa a una persona y registra en el CRM.',
    steps: [
      { t: 'Consulta', d: 'Web, WhatsApp o Instagram', k: 'regla' },
      { t: 'Entiende', d: 'Responde con información aprobada', k: 'ia' },
      { t: 'Escala', d: 'Pasa a una persona con el resumen', k: 'persona' },
      { t: 'Registra', d: 'Contacto y conversación en el CRM', k: 'regla' },
    ],
  },
  'automatizacion-clinicas-esteticas-primera-consulta-seguimiento': {
    title: 'Recorrido del paciente en una clínica estética',
    caption: 'Los cuatro momentos donde una clínica estética pierde pacientes y cómo se automatiza cada uno.',
    steps: [
      { t: 'Consulta', d: 'Respuesta en minutos con hueco propuesto', k: 'ia' },
      { t: 'Valoración', d: 'Confirmación y recordatorio 24-48 h', k: 'regla' },
      { t: 'Presupuesto', d: 'Seguimiento a 3, 7, 14 y 30 días', k: 'persona' },
      { t: 'Revisión', d: 'Cuidados, revisión y mantenimiento', k: 'regla' },
    ],
  },
  'automatizar-cobros-recordatorios-pago-pymes': {
    title: 'Calendario de recordatorios de cobro',
    caption: 'Secuencia de cobro: aviso previo, recordatorio al vencer, seguimiento y llamada de una persona.',
    steps: [
      { t: 'Antes', d: 'Aviso amable con enlace de pago', k: 'regla' },
      { t: 'Vence', d: 'Recordatorio el mismo día', k: 'regla' },
      { t: '+7 días', d: 'Mensaje más directo y factura adjunta', k: 'regla' },
      { t: '+15 días', d: 'Llamada de una persona', k: 'persona' },
    ],
  },
  'cuanto-cuesta-automatizar-procesos-pyme': {
    title: 'Cómo calcular el ROI de una automatización',
    caption: 'Fórmula para estimar el retorno: horas recuperadas por coste hora frente a inversión y mantenimiento.',
    steps: [
      { t: 'Horas', d: 'Tiempo semanal de la tarea manual', k: 'persona' },
      { t: 'Coste', d: 'Horas × coste por hora × 52 semanas', k: 'regla' },
      { t: 'Inversión', d: 'Proyecto + herramientas + mantenimiento', k: 'regla' },
      { t: 'Retorno', d: 'Meses hasta recuperar la inversión', k: 'regla' },
    ],
  },
  'automatizacion-despachos-abogados-expedientes-clientes': {
    title: 'Automatización en un despacho de abogados',
    caption: 'Del primer contacto al aviso de plazos: lo que se automatiza y lo que confirma siempre el abogado.',
    steps: [
      { t: 'Consulta', d: 'Formulario con materia y urgencia', k: 'regla' },
      { t: 'Expediente', d: 'Clasifica y resume cada documento', k: 'ia' },
      { t: 'Plazo', d: 'El abogado confirma el cómputo', k: 'persona' },
      { t: 'Avisos', d: 'A 10, 5 y 2 días, con suplente', k: 'regla' },
    ],
  },
  'documentar-procesos-pyme-sin-complicarse': {
    title: 'Documentar un proceso en una página',
    caption: 'Método para documentar procesos: grabar, ordenar con IA, revisar con quien lo hace y mantener al día.',
    steps: [
      { t: 'Graba', d: 'Quien lo hace lo explica mientras trabaja', k: 'persona' },
      { t: 'Ordena', d: 'La IA lo pasa a la plantilla de 8 apartados', k: 'ia' },
      { t: 'Revisa', d: 'Pasos, responsables y excepciones', k: 'persona' },
      { t: 'Mantén', d: 'Revisión trimestral de 15 minutos', k: 'regla' },
    ],
  },
  'ejemplos-automatizacion-ia-atencion-ventas-administracion': {
    title: 'Dónde aplicar la automatización con IA',
    caption: 'Las cuatro áreas con más ejemplos útiles de automatización con IA en pymes de servicios.',
    steps: [
      { t: 'Atención', d: 'Respuestas, citas y derivaciones', k: 'ia' },
      { t: 'Ventas', d: 'Seguimiento de leads y presupuestos', k: 'regla' },
      { t: 'Gestión', d: 'Administración: facturas, documentos y cobros', k: 'ia' },
      { t: 'Operaciones', d: 'Partes, tareas y avisos internos', k: 'regla' },
    ],
  },
  'automatizacion-email-ia-pymes': {
    title: 'Del correo a la tarea',
    caption: 'Flujo de email con IA: clasificar, extraer la tarea, preparar un borrador y revisar antes de enviar.',
    steps: [
      { t: 'Entra', d: 'Correo en Gmail u Outlook', k: 'regla' },
      { t: 'Clasifica', d: 'Tipo, urgencia y responsable', k: 'ia' },
      { t: 'Tarea', d: 'Crea la tarea con fecha y enlace', k: 'regla' },
      { t: 'Borrador', d: 'Una persona revisa y envía', k: 'persona' },
    ],
  },
  'excel-ia-automatizacion-tareas-pymes': {
    title: 'Cuándo una hoja de cálculo ya no basta',
    caption: 'Evolución típica de una tarea en Excel: fórmulas, macros, flujo automatizado y base de datos conectada.',
    steps: [
      { t: 'Fórmulas', d: 'La IA ayuda a escribirlas y revisarlas', k: 'ia' },
      { t: 'Macros', d: 'Tareas repetidas dentro del archivo', k: 'regla' },
      { t: 'Flujo', d: 'Conecta la hoja con otras herramientas', k: 'regla' },
      { t: 'Base de datos', d: 'Varios usuarios, permisos e historial', k: 'regla' },
    ],
  },
  'automatizacion-facturas-ia-pymes': {
    title: 'Flujo de facturas recibidas con IA',
    caption: 'Automatización de facturas: recepción, extracción de datos con IA, validación y registro contable.',
    steps: [
      { t: 'Recibe', d: 'Buzón único de facturas', k: 'regla' },
      { t: 'Extrae', d: 'Proveedor, fecha, base, IVA y total', k: 'ia' },
      { t: 'Valida', d: 'Lo dudoso pasa a revisión', k: 'persona' },
      { t: 'Registra', d: 'Contabilidad y carpeta del periodo', k: 'regla' },
    ],
  },
  'gestion-documental-ia-automatizacion-pymes': {
    title: 'Sistema documental automatizado',
    caption: 'Los pasos de un sistema documental con IA: captura, clasificación, extracción, archivo y búsqueda.',
    steps: [
      { t: 'Captura', d: 'Email, escáner o carpeta de entrada', k: 'regla' },
      { t: 'Clasifica', d: 'Tipo de documento y datos clave', k: 'ia' },
      { t: 'Archiva', d: 'Nombre normalizado y carpeta correcta', k: 'regla' },
      { t: 'Revisa', d: 'Cola de casos dudosos', k: 'persona' },
    ],
  },
  'automatizacion-google-workspace-ia-pymes': {
    title: 'Automatización en Google Workspace',
    caption: 'Tres niveles de automatización en Google Workspace: Gemini, Apps Script y plataformas externas.',
    steps: [
      { t: 'Gemini', d: 'Redactar, resumir y buscar', k: 'ia' },
      { t: 'Apps Script', d: 'Gmail, Drive, Sheets y Calendar', k: 'regla' },
      { t: 'Make o n8n', d: 'Conectar con herramientas externas', k: 'regla' },
      { t: 'Permisos', d: 'Revisión de accesos y datos', k: 'persona' },
    ],
  },
  'herramientas-automatizacion-ia-pymes': {
    title: 'Cómo elegir herramientas de automatización',
    caption: 'Criterios para elegir herramientas de IA y automatización: necesidad, coste por uso, datos y prueba.',
    steps: [
      { t: 'Necesidad', d: 'Qué proceso y qué volumen', k: 'persona' },
      { t: 'Precio', d: 'Cómo cobra: tareas, operaciones o usuarios', k: 'regla' },
      { t: 'Datos', d: 'Dónde se guardan y contrato RGPD', k: 'persona' },
      { t: 'Prueba', d: 'Un flujo real antes de decidir', k: 'regla' },
    ],
  },
  'automatizacion-industrial-ia-pymes': {
    title: 'Del parte de trabajo a la factura',
    caption: 'Caso industrial con más retorno: parte digital, extracción con IA, revisión y facturación.',
    steps: [
      { t: 'Parte', d: 'Formulario, foto o audio del técnico', k: 'regla' },
      { t: 'Extrae', d: 'Horas, materiales e incidencias', k: 'ia' },
      { t: 'Revisa', d: 'El responsable valida el parte', k: 'persona' },
      { t: 'Factura', d: 'Albarán y factura sin teclear', k: 'regla' },
    ],
  },
  'lead-scoring-ia-pymes': {
    title: 'Lead scoring paso a paso',
    caption: 'Modelo de puntuación de leads: encaje del perfil, señales de interés, puntuación y acción comercial.',
    steps: [
      { t: 'Encaje', d: 'Sector, tamaño y necesidad', k: 'regla' },
      { t: 'Interés', d: 'Respuestas, visitas y mensajes', k: 'ia' },
      { t: 'Puntúa', d: 'Prioridad A, B o C en el CRM', k: 'regla' },
      { t: 'Acción', d: 'Llamada hoy, seguimiento o nutrir', k: 'persona' },
    ],
  },
  'mantenimiento-automatizaciones-ia-pymes': {
    title: 'Rutina de mantenimiento de automatizaciones',
    caption: 'Mantenimiento de un sistema automatizado: registro, alertas, revisión periódica y ajustes.',
    steps: [
      { t: 'Registro', d: 'Cada ejecución queda anotada', k: 'regla' },
      { t: 'Alertas', d: 'Aviso cuando algo falla', k: 'regla' },
      { t: 'Revisión', d: 'Mensual: errores y calidad de la IA', k: 'persona' },
      { t: 'Ajuste', d: 'Cambios documentados en la ficha', k: 'persona' },
    ],
  },
  'n8n-vs-make-automatizacion-ia-pymes': {
    title: 'n8n, Make o Zapier según tu caso',
    caption: 'Guía rápida para elegir plataforma de automatización según volumen, complejidad y control de datos.',
    steps: [
      { t: 'Zapier', d: 'Flujos simples y rapidez de montaje', k: 'regla' },
      { t: 'Make', d: 'Flujos visuales con más lógica', k: 'regla' },
      { t: 'n8n', d: 'Volumen alto, IA y control de datos', k: 'regla' },
      { t: 'Decide', d: 'Precio por uso y quién lo mantiene', k: 'persona' },
    ],
  },
  'onboarding-clientes-pymes-servicios-automatizado': {
    title: 'Onboarding de clientes en 14 días',
    caption: 'Calendario de onboarding: bienvenida automática, llamada personal, recordatorios y primera reunión.',
    steps: [
      { t: 'Día 0', d: 'Bienvenida, contrato y documentación', k: 'regla' },
      { t: 'Día 1', d: 'Llamada de bienvenida', k: 'persona' },
      { t: 'Días 3-7', d: 'Recordatorios solo de lo pendiente', k: 'regla' },
      { t: 'Día 14', d: 'Resumen con IA, revisado y enviado', k: 'ia' },
    ],
  },
  'power-automate-ia-microsoft-365-pymes': {
    title: 'Automatización en Microsoft 365',
    caption: 'Piezas de automatización en Microsoft 365: Outlook y Teams, Power Automate, Copilot Studio y revisión.',
    steps: [
      { t: 'Disparador', d: 'Correo, formulario o archivo', k: 'regla' },
      { t: 'Power Automate', d: 'Flujo entre apps de Microsoft', k: 'regla' },
      { t: 'Copilot Studio', d: 'Agente con datos internos', k: 'ia' },
      { t: 'Aprobación', d: 'Una persona valida en Teams', k: 'persona' },
    ],
  },
  'preparar-datos-empresa-automatizar-ia': {
    title: 'Preparar los datos antes de automatizar',
    caption: 'Pasos para preparar los datos de una pyme: inventario, fuente de verdad, limpieza y permisos.',
    steps: [
      { t: 'Inventario', d: 'Dónde está cada dato hoy', k: 'persona' },
      { t: 'Fuente única', d: 'Una herramienta manda por dato', k: 'regla' },
      { t: 'Limpieza', d: 'Duplicados, formatos y campos', k: 'ia' },
      { t: 'Permisos', d: 'Quién ve qué y datos personales', k: 'persona' },
    ],
  },
  'que-es-automatizacion-con-ia-pymes': {
    title: 'Cómo funciona un sistema automatizado',
    caption: 'Las piezas de una automatización con IA: disparador, entender con IA, acción automática y control humano.',
    steps: [
      { t: 'Disparador', d: 'Llega un mensaje, un correo o una fecha', k: 'regla' },
      { t: 'Entiende', d: 'La IA clasifica y extrae datos', k: 'ia' },
      { t: 'Actúa', d: 'Responde, registra y crea tareas', k: 'regla' },
      { t: 'Controla', d: 'Una persona revisa las excepciones', k: 'persona' },
    ],
  },
  'automatizacion-redes-sociales-ia-pymes': {
    title: 'Del contenido al cliente',
    caption: 'Flujo de marketing con IA: idea, publicación programada, respuesta a mensajes y seguimiento en el CRM.',
    steps: [
      { t: 'Idea', d: 'Calendario y borradores con IA', k: 'ia' },
      { t: 'Publica', d: 'Programación en cada red', k: 'regla' },
      { t: 'Responde', d: 'Comentarios y mensajes directos', k: 'persona' },
      { t: 'Seguimiento', d: 'El interesado entra en el CRM', k: 'regla' },
    ],
  },
  'seguridad-datos-automatizacion-ia-pymes': {
    title: 'Checklist de datos en automatizaciones con IA',
    caption: 'Controles básicos de seguridad y RGPD para automatizaciones con IA en una pyme.',
    steps: [
      { t: 'Datos', d: 'Qué datos usa cada flujo', k: 'persona' },
      { t: 'Contrato', d: 'Encargado de tratamiento y servidores', k: 'regla' },
      { t: 'Accesos', d: 'Mínimos permisos y registro', k: 'regla' },
      { t: 'IA local', d: 'Para datos muy sensibles', k: 'ia' },
    ],
  },
  'automatizacion-tareas-administrativas-ia-pymes': {
    title: 'Por dónde empezar a automatizar la administración',
    caption: 'Método para automatizar tareas administrativas: medir, priorizar, describir y automatizar con controles.',
    steps: [
      { t: 'Mide', d: 'Horas y errores de cada tarea', k: 'persona' },
      { t: 'Prioriza', d: 'Impacto frente a dificultad', k: 'persona' },
      { t: 'Describe', d: 'Pasos, datos y excepciones', k: 'persona' },
      { t: 'Automatiza', d: 'Con revisión de lo dudoso', k: 'ia' },
    ],
  },
  'tipos-automatizacion-empresa-reglas-ia-rpa': {
    title: 'Tipos de automatización e IA',
    caption: 'De menos a más autonomía: reglas e integraciones, RPA, IA de clasificación y generativa, y agentes.',
    steps: [
      { t: 'Reglas', d: 'Si pasa X, hacer Y entre apps', k: 'regla' },
      { t: 'RPA', d: 'Imita clics donde no hay conexión', k: 'regla' },
      { t: 'IA', d: 'Clasifica, extrae, resume y redacta', k: 'ia' },
      { t: 'Agentes', d: 'Deciden pasos con límites y revisión', k: 'ia' },
    ],
  },
  'automatizacion-web-ia-leads-pymes': {
    title: 'De la visita al lead atendido',
    caption: 'Flujo de captación web: formulario, respuesta inmediata, cualificación con IA y aviso al equipo.',
    steps: [
      { t: 'Formulario', d: 'Pocas preguntas, bien elegidas', k: 'regla' },
      { t: 'Responde', d: 'Confirmación y próximos pasos al momento', k: 'regla' },
      { t: 'Cualifica', d: 'Necesidad, urgencia y encaje', k: 'ia' },
      { t: 'Contacta', d: 'El equipo llama a los prioritarios', k: 'persona' },
    ],
  },
  'dejar-de-gestionar-whatsapp-empresa-a-mano': {
    title: 'WhatsApp de empresa sin gestionarlo a mano',
    caption: 'Pasos para ordenar el WhatsApp de empresa: base técnica, respuestas automáticas, IA y conexión con el CRM.',
    steps: [
      { t: 'Base', d: 'WhatsApp Business App o API', k: 'regla' },
      { t: 'Automatiza', d: 'Horarios, citas y preguntas repetidas', k: 'regla' },
      { t: 'IA', d: 'Entiende y clasifica cada mensaje', k: 'ia' },
      { t: 'Persona', d: 'Atiende lo importante, con el CRM', k: 'persona' },
    ],
  },
};

export default diagrams;
