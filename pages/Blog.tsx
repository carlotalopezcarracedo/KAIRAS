import React, { useMemo, useState } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CONTACT_EMAIL = 'carlota.kairas@gmail.com';

type BlogCategoryId = 'crm' | 'whatsapp' | 'procesos' | 'clinicas' | 'ia' | 'sectores';

type BlogCategory = {
  id: BlogCategoryId;
  label: string;
  shortLabel: string;
  desc: string;
  serviceUrl: string;
};

type BlogPost = {
  slug: string;
  title: string;
  date: string;
  dateLabel: string;
  desc: string;
  tags: string[];
  category: BlogCategoryId;
};

const CATEGORIES: BlogCategory[] = [
  {
    id: 'crm',
    label: 'CRM y seguimiento de clientes',
    shortLabel: 'CRM y seguimiento',
    desc: 'Para negocios que pierden oportunidades por falta de continuidad comercial.',
    serviceUrl: '/crm-pymes-seguimiento-clientes/',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp y atención automatizada',
    shortLabel: 'WhatsApp',
    desc: 'Para equipos que responden tarde o gestionan mensajes sin estructura.',
    serviceUrl: '/automatizacion-whatsapp-empresas/',
  },
  {
    id: 'procesos',
    label: 'Automatización de procesos',
    shortLabel: 'Procesos',
    desc: 'Para pymes con tareas repetitivas, cuellos de botella y operativa manual.',
    serviceUrl: '/automatizacion-procesos/',
  },
  {
    id: 'clinicas',
    label: 'Automatización para clínicas',
    shortLabel: 'Clínicas',
    desc: 'Para clínicas que quieren reducir ausencias y ordenar agenda y seguimiento.',
    serviceUrl: '/automatizacion-clinicas/',
  },
  {
    id: 'ia',
    label: 'IA aplicada a pymes',
    shortLabel: 'IA aplicada',
    desc: 'Para empresas que quieren usar IA con criterio operativo, no como herramienta suelta.',
    serviceUrl: '/ia-empresas/',
  },
  {
    id: 'sectores',
    label: 'Automatización por sectores',
    shortLabel: 'Sectores',
    desc: 'Para academias, inmobiliarias, asesorías y negocios con flujos muy concretos.',
    serviceUrl: '/servicios/',
  },
];

const POSTS = [
  {
    slug: '/blog/automatizacion-web-ia-leads-pymes/',
    title: 'Automatización web con IA para pymes: de la visita al lead atendido (también en WordPress)',
    date: '2026-11-18',
    dateLabel: '18 noviembre 2026',
    desc: 'Formularios, respuesta inmediata, cualificación con IA, CRM y seguimiento; cómo hacerlo en WordPress y qué plugins y conexiones usar.',
    tags: ['Guía', 'Web', 'WordPress', 'Leads'],
    category: 'crm',
  },
  {
    slug: '/blog/kit-digital-automatizacion-ia-pymes/',
    title: 'Kit Digital y automatización con IA para pymes: que revisar antes de invertir',
    date: '2026-09-05',
    dateLabel: '5 septiembre 2026',
    desc: 'Como usar una ayuda de digitalización para ordenar procesos, clientes y datos con IA sin empezar por la subvención.',
    tags: ['Kit Digital', 'IA', 'Procesos'],
    category: 'ia',
  },
  {
    slug: '/blog/hubspot-ia-crm-pymes/',
    title: 'HubSpot con IA para pymes: CRM, seguimiento y automatización con criterio',
    date: '2026-08-24',
    dateLabel: '24 agosto 2026',
    desc: 'Como valorar HubSpot con IA para ordenar leads, tareas, seguimiento y CRM sin sobredimensionar.',
    tags: ['HubSpot', 'CRM', 'IA'],
    category: 'crm',
  },
  {
    slug: '/blog/excel-ia-automatizacion-tareas-pymes/',
    title: 'Excel, macros e IA: cómo automatizar tareas y cuándo una hoja ya no basta',
    date: '2026-11-18',
    dateLabel: '18 noviembre 2026',
    desc: 'Fórmulas, macros, scripts y Copilot en Excel; señales de que la hoja se queda corta y cómo pasar a un CRM o base de datos sin perder nada.',
    tags: ['Guía', 'Excel', 'Macros'],
    category: 'procesos',
  },
  {
    slug: '/blog/automatizacion-redes-sociales-ia-pymes/',
    title: 'Automatización de marketing y redes sociales con IA para pymes: Instagram, TikTok y YouTube',
    date: '2026-11-18',
    dateLabel: '18 noviembre 2026',
    desc: 'Del contenido al cliente: qué automatizar en Instagram, TikTok y YouTube, cómo reutilizar contenido con IA y cómo no perder los leads que llegan de redes.',
    tags: ['Guía', 'Marketing', 'Redes sociales'],
    category: 'crm',
  },
  {
    slug: '/blog/automatizacion-google-workspace-ia-pymes/',
    title: 'Automatización con IA en Google Workspace: Gmail, Drive, Sheets y Calendar',
    date: '2026-11-18',
    dateLabel: '18 noviembre 2026',
    desc: 'Gemini, Apps Script, Make y n8n sobre Gmail, Drive, Sheets, Calendar y Forms: qué usar para cada caso y 8 flujos útiles para pymes.',
    tags: ['Guía', 'Google Workspace', 'Gmail'],
    category: 'procesos',
  },
  {
    slug: '/blog/automatizacion-industrial-ia-pymes/',
    title: 'Automatización industrial y logística con IA para pymes: casos útiles y límites',
    date: '2026-11-18',
    dateLabel: '18 noviembre 2026',
    desc: 'Partes de trabajo, incidencias, mantenimiento, albaranes, rutas y avisos: casos útiles para pymes industriales y de logística y sus límites.',
    tags: ['Guía', 'Industria', 'Logística'],
    category: 'sectores',
  },
  {
    slug: '/blog/n8n-vs-make-automatizacion-ia-pymes/',
    title: 'n8n vs Make vs Zapier: cuál elegir para automatizar con IA en una pyme',
    date: '2026-11-18',
    dateLabel: '18 noviembre 2026',
    desc: 'Comparativa completa: cómo cobra cada una, cuál es más fácil, cuál tiene mejores agentes de IA y cuál conviene según tu caso.',
    tags: ['Comparativa', 'n8n', 'Make', 'Zapier'],
    category: 'procesos',
  },
  {
    slug: '/blog/power-automate-ia-microsoft-365-pymes/',
    title: 'Power Automate, Copilot Studio y agentes de IA en Microsoft 365 para pymes',
    date: '2026-11-18',
    dateLabel: '18 noviembre 2026',
    desc: 'Power Automate, AI Builder, Copilot Studio y agentes: qué incluye tu licencia, qué es premium y cuándo compensa frente a Make o n8n.',
    tags: ['Guía', 'Microsoft 365', 'Power Platform'],
    category: 'procesos',
  },
  {
    slug: '/blog/automatizacion-email-ia-pymes/',
    title: 'Automatización de email con IA: convertir correos en tareas, respuestas y seguimiento',
    date: '2026-11-18',
    dateLabel: '18 noviembre 2026',
    desc: 'Clasificar correos, convertirlos en tareas, borradores de respuesta, adjuntos al archivo y seguimiento; con Gmail u Outlook y sin perder control.',
    tags: ['Guía', 'Email', 'Productividad'],
    category: 'procesos',
  },
  {
    slug: '/blog/automatizacion-facturas-ia-pymes/',
    title: 'Automatización de facturas y procesos contables con IA en una pyme',
    date: '2026-11-18',
    dateLabel: '18 noviembre 2026',
    desc: 'Facturas recibidas y emitidas, conciliación, cobros y cierre: qué automatizar con IA, qué controles poner y qué cambia con VERI*FACTU.',
    tags: ['Guía', 'Facturas', 'Contabilidad'],
    category: 'procesos',
  },
  {
    slug: '/blog/lead-scoring-ia-pymes/',
    title: 'Lead scoring con IA para pymes: cómo priorizar oportunidades paso a paso',
    date: '2026-11-18',
    dateLabel: '18 noviembre 2026',
    desc: 'Qué es, cómo diseñar una puntuación de 0 a 100 con criterios de encaje e interés, qué aporta la IA y cómo usarla en el CRM.',
    tags: ['Guía', 'Leads', 'CRM'],
    category: 'crm',
  },
  {
    slug: '/blog/seguridad-datos-automatizacion-ia-pymes/',
    title: 'Seguridad de datos y RGPD en automatizaciones con IA: checklist para pymes (e IA local)',
    date: '2026-11-18',
    dateLabel: '18 noviembre 2026',
    desc: 'Checklist completa: RGPD, contrato de encargado, Reglamento de IA, permisos, cuentas, registros, datos sensibles y cuándo compensa la IA local.',
    tags: ['Guía', 'Seguridad', 'RGPD'],
    category: 'ia',
  },
  {
    slug: '/blog/mantenimiento-automatizaciones-ia-pymes/',
    title: 'Mantenimiento de automatizaciones con IA: quién revisa el sistema después',
    date: '2026-11-18',
    dateLabel: '18 noviembre 2026',
    desc: 'Por qué se rompen las automatizaciones, rutina de revisión semanal, mensual y trimestral, avisos de error y cuánto cuesta mantenerlas.',
    tags: ['Guía', 'Mantenimiento', 'Control'],
    category: 'procesos',
  },
  {
    slug: '/blog/automatizacion-tareas-administrativas-ia-pymes/',
    title: 'Automatización de tareas administrativas con IA en pymes: por dónde empezar',
    date: '2026-11-18',
    dateLabel: '18 noviembre 2026',
    desc: 'Las 12 tareas administrativas más automatizables, cómo medir su coste, matriz para elegir la primera y controles para no perder el control.',
    tags: ['Guía', 'Administración', 'Productividad'],
    category: 'procesos',
  },
  {
    slug: '/blog/agentes-ia-automatizacion-procesos-pymes/',
    title: 'Agentes de IA para automatizar procesos en una pyme: qué son y cuándo usarlos',
    date: '2026-11-18',
    dateLabel: '18 noviembre 2026',
    desc: 'Qué es un agente de IA, diferencias con flujos y chatbots, casos donde compensa, límites de seguridad y cómo montar el primero.',
    tags: ['Guía', 'Agentes IA', 'Procesos'],
    category: 'ia',
  },
  {
    slug: '/blog/que-es-automatizacion-con-ia-pymes/',
    title: 'Qué es la automatización con IA y cómo funciona en una pyme',
    date: '2026-11-18',
    dateLabel: '18 noviembre 2026',
    desc: 'Guía completa: qué es, cómo funciona un flujo con IA, diferencias con la automatización clásica y primeros pasos para pymes sin perfil técnico.',
    tags: ['Guía', 'Automatización IA', 'Principiantes'],
    category: 'ia',
  },
  {
    slug: '/blog/tipos-automatizacion-empresa-reglas-ia-rpa/',
    title: 'Tipos de automatización e IA: reglas, RPA, IA generativa y agentes',
    date: '2026-11-18',
    dateLabel: '18 noviembre 2026',
    desc: 'Reglas, RPA, IA generativa, documental y agentes comparados: cuándo usar cada uno, cuánto mantenimiento piden y cómo combinarlos.',
    tags: ['Guía', 'Tipos de IA', 'Decisión'],
    category: 'procesos',
  },
  {
    slug: '/blog/ejemplos-automatizacion-ia-atencion-ventas-administracion/',
    title: '25 ejemplos de automatización con IA en pymes de servicios',
    date: '2026-11-18',
    dateLabel: '18 noviembre 2026',
    desc: '25 ejemplos por área (atención, ventas, administración, operaciones) con qué hace la IA, qué hace la regla y qué revisa una persona.',
    tags: ['Guía', 'Ejemplos', 'Aplicaciones IA'],
    category: 'ia',
  },
  {
    slug: '/blog/agencia-automatizacion-ia-como-elegir/',
    title: 'Cómo elegir agencia o consultoría de automatización con IA (sin comprar humo)',
    date: '2026-11-18',
    dateLabel: '18 noviembre 2026',
    desc: 'Qué incluye un proyecto serio, 12 preguntas antes de contratar, señales de alerta, cláusulas del contrato y cuándo formarte en vez de delegar.',
    tags: ['Guía', 'Contratar', 'Decisión'],
    category: 'ia',
  },
  {
    slug: '/blog/herramientas-automatizacion-ia-pymes/',
    title: 'Herramientas de automatización con IA para pymes: cómo elegir en 2026',
    date: '2026-11-18',
    dateLabel: '18 noviembre 2026',
    desc: 'Mapa de herramientas (no-code, IA integrada, asistentes, RPA), ChatGPT frente a otras IA, opciones gratis y sus riesgos, y una checklist para elegir.',
    tags: ['Guía', 'Herramientas IA', 'Decisión'],
    category: 'ia',
  },
  {
    slug: '/blog/gestion-documental-ia-automatizacion-pymes/',
    title: 'Gestión documental con IA en pymes: cómo automatizar documentos paso a paso',
    date: '2026-11-18',
    dateLabel: '18 noviembre 2026',
    desc: 'Recepción, clasificación, extracción, archivo y recordatorios de documentos con IA; estructura de carpetas, precisión esperada y cuándo contratar consultoría.',
    tags: ['Guía', 'Gestión documental', 'IA'],
    category: 'ia',
  },
  {
    slug: '/blog/chatbot-ia-atencion-cliente-pymes/',
    title: 'Chatbot y asistente de IA para atención al cliente en pymes: guía y comparativa',
    date: '2026-11-18',
    dateLabel: '18 noviembre 2026',
    desc: 'Qué resuelve y qué no, comparativa de Tidio, ManyChat, WhatsApp API y soluciones a medida, escalado humano, obligaciones legales y métricas.',
    tags: ['Guía', 'Chatbot IA', 'Atención al cliente'],
    category: 'whatsapp',
  },
  {
    slug: '/blog/automatizacion-clinicas-esteticas-primera-consulta-seguimiento/',
    title: 'Automatización para clínicas estéticas: primera consulta, revisiones y seguimiento',
    date: '2026-11-18',
    dateLabel: '18 noviembre 2026',
    desc: 'De la consulta al tratamiento: respuesta rápida, valoración, seguimiento de presupuestos, recordatorios, revisiones y fidelización, con cuidado de los datos de salud.',
    tags: ['Guía', 'Clínicas estéticas', 'Sector'],
    category: 'clinicas',
  },
  {
    slug: '/blog/automatizacion-despachos-abogados-expedientes-clientes/',
    title: 'Automatización para despachos de abogados: consultas, expedientes, plazos y documentos',
    date: '2026-11-18',
    dateLabel: '18 noviembre 2026',
    desc: 'Entrada de consultas, hoja de encargo, expedientes, documentos, plazos y comunicación con clientes, con las cautelas del secreto profesional.',
    tags: ['Guía', 'Despachos', 'Sector'],
    category: 'sectores',
  },
  {
    slug: '/blog/onboarding-clientes-pymes-servicios-automatizado/',
    title: 'Onboarding de clientes automatizado en pymes de servicios (sin que resulte frío)',
    date: '2026-11-18',
    dateLabel: '18 noviembre 2026',
    desc: 'Bienvenida, contrato, documentación, accesos y primera reunión automatizados, con un calendario de 14 días y los puntos que deben seguir siendo personales.',
    tags: ['Guía', 'Clientes', 'Onboarding'],
    category: 'procesos',
  },
  {
    slug: '/blog/automatizar-cobros-recordatorios-pago-pymes/',
    title: 'Automatizar cobros y recordatorios de pago en pymes de servicios',
    date: '2026-11-18',
    dateLabel: '18 noviembre 2026',
    desc: 'Calendario de recordatorios, plantillas por etapa, enlace de pago, cuándo llamar y qué medir para cobrar antes sin dañar la relación.',
    tags: ['Guía', 'Cobros', 'Administración'],
    category: 'crm',
  },
  {
    slug: '/blog/preparar-datos-empresa-automatizar-ia/',
    title: 'Cómo preparar los datos de tu empresa antes de automatizar con IA',
    date: '2026-11-18',
    dateLabel: '18 noviembre 2026',
    desc: 'Inventario de datos, limpieza, campos y nombres comunes, información aprobada para la IA, permisos y una checklist de 15 puntos.',
    tags: ['Guía', 'Datos', 'Preparación'],
    category: 'ia',
  },
  {
    slug: '/blog/automatizacion-empresas-vigo-pymes-servicios/',
    title: 'Automatización para empresas en Vigo: procesos que una pyme puede ordenar primero',
    date: '2026-06-04',
    dateLabel: '4 junio 2026',
    desc: 'Guía local para pymes de servicios en Vigo que quieren recuperar tiempo sin sobredimensionar el proyecto.',
    tags: ['Vigo', 'Galicia', 'Procesos'],
    category: 'procesos',
  },
  {
    slug: '/blog/automatizacion-gimnasios-renovaciones-seguimiento-socios/',
    title: 'Automatización para gimnasios: altas, renovaciones y seguimiento de socios',
    date: '2026-06-04',
    dateLabel: '4 junio 2026',
    desc: 'Como ordenar consultas, altas, renovaciones y socios inactivos en gimnasios sin cargar a recepción.',
    tags: ['Gimnasios', 'Socios', 'Seguimiento'],
    category: 'sectores',
  },
  {
    slug: '/blog/automatizacion-reformas-instaladoras-presupuestos-visitas/',
    title: 'Automatización para reformas e instaladoras: presupuestos, visitas y seguimiento',
    date: '2026-06-04',
    dateLabel: '4 junio 2026',
    desc: 'Flujo para conectar solicitud, visita técnica, presupuesto y seguimiento en reformas, instaladoras y servicios técnicos.',
    tags: ['Reformas', 'Presupuestos', 'Operativa'],
    category: 'sectores',
  },
  {
    slug: '/blog/automatizacion-procesos-pontevedra-pymes-servicios/',
    title: 'Automatización de procesos en Pontevedra para pymes de servicios',
    date: '2026-06-04',
    dateLabel: '4 junio 2026',
    desc: 'Guía local para pymes de Pontevedra que quieren recuperar tiempo y ordenar procesos sin sobredimensionar el proyecto.',
    tags: ['Pontevedra', 'Procesos', 'Galicia'],
    category: 'procesos',
  },
  {
    slug: '/blog/cuanto-cuesta-automatizar-procesos-pyme/',
    title: 'Cuánto cuesta automatizar procesos en una pyme y cómo calcular el ROI',
    date: '2026-11-18',
    dateLabel: '18 noviembre 2026',
    desc: 'Desglose de costes (diseño, licencias, IA, mantenimiento), fórmula de ROI con ejemplo, piloto para validar y precios de referencia de KAIRAS.',
    tags: ['Guía', 'Coste', 'ROI'],
    category: 'procesos',
  },
  {
    slug: '/blog/integrar-calendario-email-crm-pymes/',
    title: 'Integrar calendario, email y CRM: el sistema mínimo para no perder seguimiento',
    date: '2026-06-04',
    dateLabel: '4 junio 2026',
    desc: 'Como conectar agenda, correo y CRM para que cada cliente tenga contexto, responsable y siguiente paso.',
    tags: ['CRM', 'Calendario', 'Email'],
    category: 'crm',
  },
  {
    slug: '/blog/automatizacion-academias-matriculas-seguimiento/',
    title: 'Automatización para academias: matrículas, WhatsApp y seguimiento sin caos',
    date: '2026-05-26',
    dateLabel: '26 mayo 2026',
    desc: 'Como ordenar consultas, matrículas, plazas y comunicaciones recurrentes en academias sin cargar a recepción.',
    tags: ['Academias', 'Matriculas', 'Seguimiento'],
    category: 'sectores',
  },
  {
    slug: '/blog/automatizacion-inmobiliarias-leads-portales-whatsapp/',
    title: 'Automatización para inmobiliarias: como no perder leads de portales y WhatsApp',
    date: '2026-05-26',
    dateLabel: '26 mayo 2026',
    desc: 'Sistema para registrar, cualificar y seguir leads inmobiliarios que llegan desde portales, WhatsApp, web o llamadas.',
    tags: ['Inmobiliarias', 'Leads', 'CRM'],
    category: 'sectores',
  },
  {
    slug: '/blog/automatizacion-asesorias-vencimientos-documentos-clientes/',
    title: 'Automatización para asesorías: documentación, vencimientos y recordatorios sin perseguir clientes',
    date: '2026-11-18',
    dateLabel: '18 noviembre 2026',
    desc: 'Recogida de documentación, clasificación con IA, calendario fiscal, recordatorios escalonados y panel de pendientes por cliente.',
    tags: ['Guía', 'Asesorías', 'Sector'],
    category: 'sectores',
  },
  {
    slug: '/blog/documentar-procesos-pyme-sin-complicarse/',
    title: 'Cómo documentar procesos en una pyme sin complicarse (con plantilla)',
    date: '2026-11-18',
    dateLabel: '18 noviembre 2026',
    desc: 'Método de una página por proceso, plantilla con 8 apartados, ejemplo completo, cómo ayudarte de la IA y cómo mantenerlo vivo.',
    tags: ['Guía', 'Procesos', 'Plantilla'],
    category: 'procesos',
  },
  {
    slug: '/blog/errores-automatizar-empresa-primera-vez/',
    title: 'Errores al automatizar una empresa por primera vez',
    date: '2026-05-26',
    dateLabel: '26 mayo 2026',
    desc: 'Los fallos más habituales al empezar con automatización y como evitarlos antes de comprar herramientas o montar flujos.',
    tags: ['Automatizacion', 'Errores', 'Procesos'],
    category: 'procesos',
  },
  {
    slug: '/blog/mensajes-automaticos-clientes-cuando-ayudan-molestan/',
    title: 'Mensajes automáticos a clientes: cuándo ayudan y cuándo molestan',
    date: '2026-05-26',
    dateLabel: '26 mayo 2026',
    desc: 'Como diseñar mensajes automáticos útiles, claros y con salida a humano para no convertir la automatización en fricción.',
    tags: ['WhatsApp', 'Clientes', 'Atención'],
    category: 'whatsapp',
  },
  {
    slug: '/blog/ia-para-pymes-cuando-tiene-sentido/',
    title: 'IA para pymes: cuando tiene sentido aplicarla y cuando no',
    date: '2026-05-19',
    dateLabel: '19 mayo 2026',
    desc: 'Guía honesta para decidir donde aplicar IA en una pyme sin convertirla en otra herramienta más.',
    tags: ['IA', 'Pymes', 'Procesos'],
    category: 'ia',
  },
  {
    slug: '/blog/conectar-whatsapp-crm-sin-crear-mas-trabajo/',
    title: 'Cómo conectar WhatsApp con tu CRM sin crear más trabajo al equipo',
    date: '2026-05-19',
    dateLabel: '19 mayo 2026',
    desc: 'Como integrar WhatsApp y CRM con criterio para registrar leads, estados y seguimientos sin duplicar tareas.',
    tags: ['WhatsApp', 'CRM', 'Integracion'],
    category: 'whatsapp',
  },
  {
    slug: '/blog/automatizar-presupuestos-seguimiento-pymes/',
    title: 'Automatizar presupuestos y seguimiento: donde muchas pymes pierden margen',
    date: '2026-05-19',
    dateLabel: '19 mayo 2026',
    desc: 'Como ordenar la recogida de datos, envio de presupuestos y cadencia comercial para que las propuestas no se enfríen.',
    tags: ['Presupuestos', 'CRM', 'Ventas'],
    category: 'crm',
  },
  {
    slug: '/blog/automatizacion-empresas-galicia-procesos-retorno/',
    title: 'Qué procesos suelen dar retorno antes al automatizar una pyme gallega',
    date: '2026-05-19',
    dateLabel: '19 mayo 2026',
    desc: 'Procesos de alto impacto para pymes gallegas que quieren automatizar sin sobredimensionar el proyecto.',
    tags: ['Galicia', 'Procesos', 'Pymes'],
    category: 'procesos',
  },
  {
    slug: '/blog/seguimiento-pacientes-clinicas-antes-despues-cita/',
    title: 'Seguimiento de pacientes en clínicas: antes y después de la cita',
    date: '2026-05-19',
    dateLabel: '19 mayo 2026',
    desc: 'Como automatizar confirmaciones, instrucciones y revisiones sin perder trato personal ni cargar a recepción.',
    tags: ['Clínicas', 'Pacientes', 'CRM'],
    category: 'clinicas',
  },
  {
    slug: '/blog/por-que-las-pymes-pierden-clientes-antes-de-firmar/',
    title: 'Por qué las pymes pierden clientes antes de firmar',
    date: '2026-04-28',
    dateLabel: '28 abril 2026',
    desc: 'Fugas comerciales reales en pymes de servicios y como cerrar el tramo entre primer contacto y firma.',
    tags: ['Leads', 'CRM', 'Seguimiento'],
    category: 'crm',
  },
  {
    slug: '/blog/dejar-de-gestionar-whatsapp-empresa-a-mano/',
    title: 'Cómo dejar de gestionar el WhatsApp de empresa a mano (con IA y sin perder trato humano)',
    date: '2026-11-18',
    dateLabel: '18 noviembre 2026',
    desc: 'Guía paso a paso: diagnóstico del canal, respuestas con IA, flujos con Make o n8n, conexión al CRM, normas de Meta y métricas.',
    tags: ['Guía', 'WhatsApp', 'Automatización IA'],
    category: 'whatsapp',
  },
  {
    slug: '/blog/como-saber-que-proceso-automatizar-primero/',
    title: 'Cómo saber qué proceso automatizar primero en tu empresa',
    date: '2026-04-28',
    dateLabel: '28 abril 2026',
    desc: 'Método práctico para priorizar automatizaciones por impacto real y facilidad de implantación.',
    tags: ['Procesos', 'Priorizacion', 'Operativa'],
    category: 'procesos',
  },
  {
    slug: '/blog/reducir-ausencias-clinicas-recordatorios-automaticos/',
    title: 'Cómo reducir ausencias en clínicas con recordatorios automáticos',
    date: '2026-04-28',
    dateLabel: '28 abril 2026',
    desc: 'Como bajar ausencias con confirmaciones y recordatorios en el canal correcto, sin más carga manual.',
    tags: ['Clínicas', 'Recordatorios', 'Agenda'],
    category: 'clinicas',
  },
  {
    slug: '/blog/automatizaciones-que-recuperan-tiempo-pymes/',
    title: 'Las automatizaciones que más tiempo recuperan en una pyme de servicios',
    date: '2026-04-28',
    dateLabel: '28 abril 2026',
    desc: 'Hay tareas que se repiten cada semana y consumen horas sin aportar valor nuevo. Estas son las más rentables para empezar.',
    tags: ['Automatizacion', 'Pymes', 'Productividad'],
    category: 'procesos',
  },
  {
    slug: '/blog/tareas-manuales-que-frenan-tu-negocio/',
    title: 'Qué tareas manuales están frenando tu negocio cada semana',
    date: '2026-04-29',
    dateLabel: '29 abril 2026',
    desc: 'Identifica las tareas que más tiempo consumen en tu negocio y por que son las primeras que deberías automatizar.',
    tags: ['Procesos', 'Operativa', 'Automatizacion'],
    category: 'procesos',
  },
  {
    slug: '/blog/seguimiento-leads-pymes-cuando-insistir/',
    title: 'Seguimiento de leads en pymes: cuando insistir y cuando parar',
    date: '2026-04-29',
    dateLabel: '29 abril 2026',
    desc: 'La mayoría de negocios pierde ventas por seguimiento irregular. Aprende cuando tiene sentido insistir y cuando un lead ya no va a convertir.',
    tags: ['Leads', 'CRM', 'Ventas'],
    category: 'crm',
  },
  {
    slug: '/blog/whatsapp-business-app-vs-api-pymes/',
    title: 'WhatsApp Business App vs API: que necesita tu pyme',
    date: '2026-04-29',
    dateLabel: '29 abril 2026',
    desc: 'Las diferencias reales entre la app gratuita y la API de WhatsApp, y cuando tiene sentido dar el salto para tu negocio.',
    tags: ['WhatsApp', 'API', 'Herramientas'],
    category: 'whatsapp',
  },
  {
    slug: '/blog/reactivar-leads-frios-sin-perseguir/',
    title: 'Cómo reactivar leads fríos sin perseguir a nadie',
    date: '2026-04-29',
    dateLabel: '29 abril 2026',
    desc: 'La mayoría de negocios tiene leads inactivos sin explotar. Como recuperarlos con un sistema que no agobie al lead ni a tu equipo.',
    tags: ['Leads', 'Reactivacion', 'CRM'],
    category: 'crm',
  },
  {
    slug: '/blog/confirmacion-citas-whatsapp-clinicas/',
    title: 'Confirmación de citas por WhatsApp en clínicas: sin depender del teléfono',
    date: '2026-04-29',
    dateLabel: '29 abril 2026',
    desc: 'La confirmación manual de citas depende de que alguien tenga tiempo. Como automatizarla con WhatsApp sin perder el trato cercano con el paciente.',
    tags: ['Clínicas', 'WhatsApp', 'Automatizacion'],
    category: 'clinicas',
  },
  {
    slug: '/blog/crm-no-falla-falla-el-proceso/',
    title: 'Tu CRM no falla: falla el proceso que hay detrás',
    date: '2026-04-29',
    dateLabel: '29 abril 2026',
    desc: 'Cambiar de CRM no soluciona los leads perdidos. El problema suele ser el proceso que hay detrás, no la herramienta.',
    tags: ['CRM', 'Procesos', 'Operativa'],
    category: 'crm',
  },
  {
    slug: '/blog/herramientas-desconectadas-equipo-va-tarde/',
    title: 'Herramientas desconectadas: por que tu equipo siempre va tarde',
    date: '2026-04-29',
    dateLabel: '29 abril 2026',
    desc: 'Cuando las herramientas no se hablan entre si, el equipo pierde tiempo copiando datos y toma decisiones con información desactualizada.',
    tags: ['Operativa', 'Herramientas', 'Procesos'],
    category: 'procesos',
  },
  {
    slug: '/blog/todo-depende-de-una-sola-persona/',
    title: 'Cuando todo depende de una sola persona',
    date: '2026-04-29',
    dateLabel: '29 abril 2026',
    desc: 'La dependencia de una sola persona es uno de los cuellos de botella más habituales en pymes de servicios. Como identificarlo y empezar a resolverlo.',
    tags: ['Operativa', 'Procesos', 'Organizacion'],
    category: 'procesos',
  },
] as BlogPost[];

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'todos' | BlogCategoryId>('todos');

  const postsByCategory = useMemo(
    () =>
      CATEGORIES.reduce(
        (acc, category) => {
          acc[category.id] = POSTS.filter((post) => post.category === category.id).length;
          return acc;
        },
        {} as Record<BlogCategoryId, number>
      ),
    []
  );

  const visiblePosts = useMemo(
    () => (activeCategory === 'todos' ? POSTS : POSTS.filter((post) => post.category === activeCategory)),
    [activeCategory]
  );

  const activeCategoryLabel = activeCategory === 'todos'
    ? 'Todos los contenidos'
    : CATEGORIES.find((category) => category.id === activeCategory)?.label ?? 'Contenidos';

  return (
    <div className="relative min-h-[100svh]">
      <div className="hidden md:block fixed inset-0 grainy-overlay z-50 pointer-events-none" />
      <div className="fixed inset-0 mesh-gradient -z-10" />
      <Navbar />

      <main id="main-content">
        <section className="min-h-[60vh] px-6 pt-32 pb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyber-purple/10 blur-[130px] -z-10 rounded-full" />
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-cyber-purple mb-6">Recursos KAIRAS</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-normal uppercase leading-[0.9] mb-8">
              Contenido para pymes que quieren dejar de operar a mano
            </h1>
            <p className="text-xl text-slate-300 font-light max-w-4xl leading-relaxed">
              Si tu negocio pierde leads, responde tarde por WhatsApp o vive atascado en tareas repetitivas,
              aquí tienes guias concretas para recuperar tiempo y ordenar procesos con criterio.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="/servicios/"
                className="inline-flex items-center justify-center bg-white text-black px-8 py-4 rounded-xl text-xs font-black uppercase tracking-[0.22em] hover:shadow-[0_0_28px_rgba(255,255,255,0.3)] transition-all"
              >
                Ver servicios
              </a>
              <a
                href="/contacto/"
                className="glass-card inline-flex items-center justify-center px-8 py-4 rounded-xl text-xs font-black uppercase tracking-[0.22em] border-white/15 hover:border-cyber-purple/40 hover:bg-white/5 transition-all"
              >
                Quiero priorizar mi caso
              </a>
            </div>
          </div>
        </section>

        <section className="px-6 pb-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {CATEGORIES.map((category) => (
                <a
                  key={category.id}
                  href={category.serviceUrl}
                  className="glass-card p-5 rounded-2xl border-white/10 hover:border-cyber-purple/35 hover:bg-white/5 transition-all group"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-cyber-purple mb-3">
                    Cluster
                  </p>
                  <h2 className="text-sm font-black uppercase tracking-wide leading-tight mb-3 group-hover:text-cyber-purple transition-colors">
                    {category.shortLabel}
                  </h2>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">{category.desc}</p>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest">
                    {postsByCategory[category.id]} {postsByCategory[category.id] === 1 ? 'post' : 'posts'} publicados
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-6">
          <div className="max-w-5xl mx-auto">
            <div className="glass-card rounded-2xl p-4 border-white/10">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-500 mb-3">
                Filtrar por tema
              </p>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setActiveCategory('todos')}
                  className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] border transition-all ${
                    activeCategory === 'todos'
                      ? 'text-black bg-white border-white'
                      : 'text-slate-300 border-white/15 hover:border-cyber-purple/40 hover:text-white'
                  }`}
                >
                  Todos
                </button>
                {CATEGORIES.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] border transition-all ${
                      activeCategory === category.id
                        ? 'text-black bg-white border-white'
                        : 'text-slate-300 border-white/15 hover:border-cyber-purple/40 hover:text-white'
                    }`}
                  >
                    {category.shortLabel}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between gap-4 mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-500">{activeCategoryLabel}</p>
              <p className="text-xs text-slate-500">{visiblePosts.length} resultados</p>
            </div>
            <div className="flex flex-col gap-6">
              {visiblePosts.map((post) => (
                <a
                  key={post.slug}
                  href={post.slug}
                  className="glass-card p-8 rounded-3xl border-white/10 hover:border-cyber-purple/30 hover:bg-white/5 transition-all group relative overflow-hidden"
                >
                  <div className="absolute -top-16 -right-12 w-44 h-44 bg-cyber-purple/10 blur-[70px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-cyber-purple bg-cyber-purple/10 border border-cyber-purple/20 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black uppercase tracking-normal leading-tight mb-3 group-hover:text-cyber-purple transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{post.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-600 font-mono">{post.dateLabel}</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-cyber-purple flex items-center gap-2 group-hover:gap-3 transition-all">
                      Leer <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <div className="fixed bottom-6 right-6 z-[110]">
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="w-16 h-16 bg-white text-black rounded-full shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center active:scale-95 transition-all"
          aria-label="Enviar email"
        >
          <MessageCircle size={28} />
        </a>
      </div>
    </div>
  );
};

export default Blog;
