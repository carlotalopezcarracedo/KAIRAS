import type { ServiceDepthContent } from '../components/ServiceDepth';

// Contenido de profundidad de las páginas de servicio. Solo afirma lo que KAIRAS
// ya publica (okf/services.md, answers.md, pricing.md, /faq/): sin cifras de
// resultados ni casos inventados. Cuando haya casos reales, añadirlos aquí.

export const clinicas: ServiceDepthContent = {
  definition: {
    question: '¿Qué es la automatización para clínicas?',
    answer:
      'Es un sistema que se encarga de las tareas repetitivas alrededor de la cita: confirmar, recordar, reprogramar, enviar pautas después de la consulta y avisar de revisiones pendientes. Recepción deja de perseguir pacientes por teléfono y el equipo clínico recibe cada caso con el contexto necesario. Las decisiones clínicas y los casos delicados siguen en manos de personas.',
  },
  audience: {
    title: 'Para qué clínicas tiene sentido',
    items: [
      'Clínicas dentales, de fisioterapia, estética, psicología y centros de salud privados.',
      'Centros donde recepción dedica buena parte del día a confirmar citas y responder lo mismo.',
      'Clínicas con huecos en agenda por olvidos o cancelaciones de última hora.',
      'Equipos que pierden revisiones y tratamientos pendientes porque nadie hace el seguimiento.',
      'Centros que atienden por WhatsApp, teléfono y email sin un registro común.',
    ],
  },
  includes: [
    'Revisión de cómo entra hoy una cita y qué pasos se hacen a mano.',
    'Confirmaciones y recordatorios conectados con la agenda que ya usáis.',
    'Mensajes posteriores a la consulta con pautas y siguiente paso.',
    'Avisos de revisiones o tratamientos pendientes para reactivar pacientes.',
    'Derivación a una persona cuando el mensaje lo requiere, con el contexto completo.',
    'Revisión de qué datos circulan por cada canal, porque los datos de salud requieren un cuidado especial.',
  ],
  steps: [
    { title: 'Diagnóstico de la operativa', desc: 'Vemos cómo se gestionan hoy citas, confirmaciones, cancelaciones y seguimiento, y dónde se pierde más tiempo o más pacientes.' },
    { title: 'Elegir el primer flujo', desc: 'Empezamos por el proceso con más retorno, normalmente confirmaciones y recordatorios, en lugar de automatizarlo todo a la vez.' },
    { title: 'Implementar sobre tus herramientas', desc: 'Conectamos agenda, WhatsApp, email o software de gestión que ya utilizáis siempre que sea posible, con mensajes en el tono de la clínica.' },
    { title: 'Medir y ajustar', desc: 'Revisamos ausencias, reprogramaciones y carga de recepción para decidir si el flujo funciona y cuál es el siguiente.' },
  ],
  limits: [
    'No sustituimos el criterio clínico ni automatizamos diagnósticos o decisiones de tratamiento.',
    'No enviamos información clínica sensible por canales que no sean adecuados para ello.',
    'No imponemos un software nuevo si el que tenéis puede conectarse.',
  ],
  faqs: [
    { q: '¿Los pacientes notan que hablan con un sistema?', a: 'Los mensajes automáticos se usan para confirmar, recordar y dar información práctica. Cuando un paciente pregunta algo que requiere criterio, la conversación pasa a una persona del equipo con el historial a la vista.' },
    { q: '¿Funciona con el programa de gestión que ya usamos?', a: 'Depende de si el programa permite conectarse con otras herramientas. Lo revisamos en el diagnóstico; si no es posible, buscamos una alternativa que no obligue a duplicar el trabajo.' },
    { q: '¿Se puede usar WhatsApp para recordatorios de cita?', a: 'Sí, siempre que se haga con el consentimiento del paciente y desde una cuenta preparada para ello. Explicamos las diferencias entre WhatsApp Business y la API en nuestro blog.' },
    { q: '¿Por dónde empezamos?', a: 'Por el proceso que más tiempo consume o más citas hace perder. En la mayoría de clínicas son las confirmaciones y los recordatorios, seguidos del seguimiento de revisiones pendientes.' },
    { q: '¿Qué pasa con la protección de datos?', a: 'Los datos de salud son una categoría especial según el RGPD. Diseñamos los flujos para que circule solo la información necesaria y revisamos con la clínica dónde se almacena cada dato.' },
  ],
  related: [
    { title: 'Reducir ausencias con recordatorios automáticos', href: '/blog/reducir-ausencias-clinicas-recordatorios-automaticos/' },
    { title: 'Confirmación de citas por WhatsApp', href: '/blog/confirmacion-citas-whatsapp-clinicas/' },
    { title: 'Seguimiento de pacientes antes y después de la cita', href: '/blog/seguimiento-pacientes-clinicas-antes-despues-cita/' },
    { title: 'Clínicas estéticas: primera consulta y seguimiento', href: '/blog/automatizacion-clinicas-esteticas-primera-consulta-seguimiento/' },
    { title: 'WhatsApp Business App vs API', href: '/blog/whatsapp-business-app-vs-api-pymes/' },
    { title: 'Automatización de WhatsApp para empresas', href: '/automatizacion-whatsapp-empresas/' },
  ],
};

export const crm: ServiceDepthContent = {
  definition: {
    question: '¿Qué es un sistema de seguimiento de clientes para pymes?',
    answer:
      'Es la combinación de un CRM sencillo y unas reglas claras para que cada lead y cada cliente tenga contexto, una persona responsable, un siguiente paso y una fecha. La automatización se encarga de registrar, recordar y avisar; el equipo se encarga de hablar con el cliente. El objetivo es que ninguna oportunidad dependa de la memoria de alguien.',
  },
  audience: {
    title: 'Cuándo lo necesita una pyme',
    items: [
      'Los presupuestos se envían y nadie vuelve a llamar.',
      'Los leads llegan por WhatsApp, web, email y teléfono y no hay un sitio común.',
      'Hay un CRM contratado pero el equipo no lo actualiza.',
      'El seguimiento depende de una sola persona y se cae cuando no está.',
      'No sabéis cuántas oportunidades se pierden ni en qué punto.',
    ],
  },
  includes: [
    'Mapa de cómo entra un lead y qué le pasa hasta que firma o se descarta.',
    'Etapas del proceso comercial definidas con criterios que el equipo entiende.',
    'Registro automático de contactos desde formularios, WhatsApp o email.',
    'Recordatorios y tareas de seguimiento con responsable y fecha.',
    'Reactivación de oportunidades frías con mensajes cuidados.',
    'Un panel sencillo para ver qué está pendiente y dónde se pierden clientes.',
  ],
  steps: [
    { title: 'Entender el proceso comercial', desc: 'Revisamos de dónde llegan los leads, quién los atiende, qué se envía y cuándo se considera perdido un cliente.' },
    { title: 'Ordenar antes de automatizar', desc: 'Definimos etapas, campos mínimos y reglas de seguimiento. Un CRM sin proceso claro acaba abandonado.' },
    { title: 'Conectar canales y automatizar', desc: 'Llevamos los contactos al CRM sin copiar y pegar y programamos recordatorios, tareas y avisos sobre las herramientas que ya usáis cuando es posible.' },
    { title: 'Revisar con datos', desc: 'Miramos tiempos de respuesta, presupuestos sin seguimiento y oportunidades reactivadas para ajustar reglas y mensajes.' },
  ],
  limits: [
    'No vendemos licencias de CRM ni elegimos herramienta por moda.',
    'No automatizamos mensajes insistentes que dañen la relación con el cliente.',
    'No sustituimos la conversación comercial: preparamos el terreno para que ocurra a tiempo.',
  ],
  faqs: [
    { q: '¿Necesito cambiar de CRM?', a: 'Normalmente no. Primero revisamos si el que tenéis puede hacer lo necesario. Muchas veces el CRM no falla: falta un proceso claro y alguien responsable de cada paso.' },
    { q: '¿Qué CRM recomendáis para una pyme?', a: 'El que encaje con el volumen, los canales y lo que el equipo vaya a usar de verdad. Comparamos opciones como HubSpot u otras herramientas según cada caso, sin comisiones por recomendar.' },
    { q: '¿Cuántas veces conviene insistir a un lead?', a: 'Depende del tipo de venta, pero el seguimiento debe tener un ritmo definido y un final. Lo explicamos en detalle en el artículo sobre cuándo insistir a un lead.' },
    { q: '¿Se puede conectar WhatsApp con el CRM?', a: 'Sí. Las conversaciones relevantes pueden quedar registradas en la ficha del cliente para que cualquier persona del equipo sepa en qué punto está.' },
    { q: '¿Cómo sé si está funcionando?', a: 'Con indicadores sencillos: tiempo hasta la primera respuesta, presupuestos sin seguimiento, oportunidades reactivadas y tasa de cierre por etapa.' },
  ],
  related: [
    { title: 'El CRM no falla: falla el proceso', href: '/blog/crm-no-falla-falla-el-proceso/' },
    { title: 'Seguimiento de leads: cuándo insistir', href: '/blog/seguimiento-leads-pymes-cuando-insistir/' },
    { title: 'Reactivar leads fríos sin perseguir', href: '/blog/reactivar-leads-frios-sin-perseguir/' },
    { title: 'Automatizar presupuestos y su seguimiento', href: '/blog/automatizar-presupuestos-seguimiento-pymes/' },
    { title: 'Conectar WhatsApp y CRM', href: '/blog/conectar-whatsapp-crm-sin-crear-mas-trabajo/' },
    { title: 'HubSpot con IA para pymes', href: '/blog/hubspot-ia-crm-pymes/' },
  ],
};

export const procesos: ServiceDepthContent = {
  definition: {
    question: '¿Qué es la automatización de procesos en una pyme?',
    answer:
      'Es conseguir que las tareas repetitivas que siguen siempre los mismos pasos se hagan solas: pasar datos entre herramientas, crear tareas, enviar avisos, generar documentos o registrar información. Se empieza por entender el proceso y elegir el que más tiempo consume; después se conecta lo que ya usáis y se deja revisión humana donde hace falta criterio.',
  },
  audience: {
    title: 'Señales de que te conviene',
    items: [
      'Alguien copia datos de una herramienta a otra varias veces por semana.',
      'Las mismas tareas administrativas se repiten cada día sin aportar nada nuevo.',
      'Hay errores por pasos olvidados o información desactualizada.',
      'El proceso solo funciona cuando está una persona concreta.',
      'El equipo va tarde porque las herramientas no están conectadas.',
    ],
  },
  includes: [
    'Diagnóstico de procesos y priorización por tiempo recuperable e impacto.',
    'Documentación sencilla del proceso elegido antes de tocar nada.',
    'Diseño e implementación del flujo con herramientas como n8n, Make, Zapier o Power Automate, según encaje.',
    'Uso de IA solo donde aporta: clasificar, resumir, extraer datos o redactar borradores.',
    'Puntos de revisión humana y avisos cuando algo falla.',
    'Formación al equipo y criterios de mantenimiento.',
  ],
  steps: [
    { title: 'Diagnóstico', desc: 'Listamos las tareas repetitivas, cuánto tiempo consumen y qué riesgo tienen si fallan, para elegir por dónde empezar.' },
    { title: 'Piloto con un proceso', desc: 'Automatizamos primero un único proceso acotado para comprobar el impacto antes de ampliar.' },
    { title: 'Implementación y pruebas', desc: 'Conectamos las herramientas, probamos con casos reales y dejamos claro qué hace el sistema y qué sigue haciendo una persona.' },
    { title: 'Medición y siguiente paso', desc: 'Comparamos tiempo, errores y pasos manuales antes y después, y decidimos el siguiente proceso con datos.' },
  ],
  limits: [
    'No automatizamos un proceso que nadie entiende: primero se ordena.',
    'No metemos IA donde una regla simple lo resuelve mejor y más barato.',
    'No dejamos sistemas sin documentar que solo entiende quien los montó.',
  ],
  faqs: [
    { q: '¿Qué proceso debería automatizar primero?', a: 'El que combina más repetición, más tiempo invertido y reglas claras. Tenemos un artículo con el método que seguimos para elegirlo.' },
    { q: '¿Cuánto cuesta automatizar un proceso?', a: 'Depende del número de procesos, herramientas a conectar, volumen y nivel de soporte. Explicamos los factores que más influyen en el precio en nuestro artículo sobre el coste de automatizar.' },
    { q: '¿Qué herramientas usáis?', a: 'Las que encajen con vuestro caso y lo que ya tenéis: n8n, Make, Zapier, Power Automate, Google Workspace o Microsoft 365, entre otras. La herramienta se elige después de entender el proceso.' },
    { q: '¿Qué pasa si la automatización falla?', a: 'Diseñamos avisos para detectar errores y dejamos documentado cómo revisar el flujo. El mantenimiento forma parte del trabajo, no es un extra olvidado.' },
    { q: '¿Necesito un equipo técnico?', a: 'No. Trabajamos con pymes de servicios sin departamento técnico y dejamos el sistema explicado para que el equipo sepa usarlo.' },
  ],
  related: [
    { title: 'Cómo saber qué proceso automatizar primero', href: '/blog/como-saber-que-proceso-automatizar-primero/' },
    { title: 'Cuánto cuesta automatizar procesos en una pyme', href: '/blog/cuanto-cuesta-automatizar-procesos-pyme/' },
    { title: 'Errores al automatizar por primera vez', href: '/blog/errores-automatizar-empresa-primera-vez/' },
    { title: 'Documentar procesos sin complicarse', href: '/blog/documentar-procesos-pyme-sin-complicarse/' },
    { title: 'n8n vs Make para pymes', href: '/blog/n8n-vs-make-automatizacion-ia-pymes/' },
    { title: 'Optimización operativa para pymes', href: '/optimizacion-operativa-pymes/' },
  ],
};

export const servicios: ServiceDepthContent = {
  definition: {
    question: '¿Qué hace KAIRAS exactamente?',
    answer:
      'KAIRAS ayuda a pymes de servicios en Galicia y en el resto de España a automatizar procesos, WhatsApp, seguimiento de clientes y tareas operativas con IA aplicada. Primero identificamos el proceso con más retorno, después lo automatizamos sobre las herramientas que ya usáis cuando es posible, y medimos el impacto antes de seguir.',
  },
  audience: {
    title: 'Con quién trabajamos',
    items: [
      'Clínicas dentales, de fisioterapia, estética y centros de salud privados.',
      'Academias y centros de formación.',
      'Gimnasios y estudios de entrenamiento.',
      'Inmobiliarias, asesorías, despachos y empresas de servicios profesionales.',
      'Instaladoras, reformas y empresas de mantenimiento.',
    ],
  },
  includes: [
    'Diagnóstico de la operativa y priorización de lo que conviene automatizar.',
    'Diseño e implementación de flujos sobre tus herramientas.',
    'Conexión de WhatsApp, email, calendario, CRM y documentos.',
    'IA aplicada con revisión humana en los puntos sensibles.',
    'Medición del impacto con indicadores sencillos.',
    'Soporte y mantenimiento opcional después del lanzamiento.',
  ],
  steps: [
    { title: 'Diagnóstico', desc: 'Revisamos cómo entran los clientes, qué tareas se repiten y dónde se pierde tiempo u oportunidades.' },
    { title: 'Mapa y prioridades', desc: 'Ordenamos los procesos por impacto y dificultad y acordamos el primero.' },
    { title: 'Implementación', desc: 'Construimos el flujo, lo probamos con casos reales y formamos al equipo.' },
    { title: 'Seguimiento', desc: 'Medimos resultados y decidimos juntos si ampliar, ajustar o parar.' },
  ],
  limits: [
    'No vendemos software genérico con planes cerrados.',
    'No presentamos la IA como sustituta de las personas.',
    'No automatizamos decisiones sensibles sin revisión.',
  ],
  faqs: [
    { q: '¿Cuánto cuesta trabajar con KAIRAS?', a: 'El precio depende de los procesos, herramientas, canales y volumen. Como referencia pública, para centros de estética el mapa de fugas cuesta 240 € + IVA (descontable del proyecto) y los proyectos de seguimiento parten de 890 € + IVA según alcance.' },
    { q: '¿Trabajáis solo en Galicia?', a: 'KAIRAS está en Galicia y trabaja con pymes de servicios gallegas y del resto de España.' },
    { q: '¿Quién hace el trabajo?', a: 'Carlota López Carracedo, fundadora de KAIRAS, dirige cada proyecto y es quien responde cuando escribes por WhatsApp o email.' },
    { q: '¿Se puede financiar con ayudas como el Kit Digital?', a: 'En algunos casos, cuando las condiciones oficiales vigentes lo permiten. Lo revisamos caso a caso y explicamos los detalles en el blog.' },
    { q: '¿Cómo empezamos?', a: 'Escribiéndonos con el proceso que más os preocupa. Te respondemos para valorar si tiene sentido un diagnóstico.' },
  ],
  related: [
    { title: 'Automatización de procesos', href: '/automatizacion-procesos/' },
    { title: 'Automatización de WhatsApp', href: '/automatizacion-whatsapp-empresas/' },
    { title: 'CRM y seguimiento de clientes', href: '/crm-pymes-seguimiento-clientes/' },
    { title: 'Automatización para clínicas', href: '/automatizacion-clinicas/' },
    { title: 'Cómo elegir una agencia de automatización con IA', href: '/blog/agencia-automatizacion-ia-como-elegir/' },
    { title: 'Kit Digital y automatización con IA', href: '/blog/kit-digital-automatizacion-ia-pymes/' },
  ],
};
