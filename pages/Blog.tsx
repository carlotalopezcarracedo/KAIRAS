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
    slug: '/blog/agentes-ia-n8n-pymes/',
    title: 'Agentes de IA con n8n para pymes: cuando usarlos y cuando no',
    date: '2026-09-30',
    dateLabel: '30 septiembre 2026',
    desc: 'Como decidir si un proceso necesita agentes de IA con n8n o solo un workflow estable con reglas y revisión humana.',
    tags: ['n8n', 'Agentes IA', 'Procesos'],
    category: 'procesos',
  },
  {
    slug: '/blog/make-whatsapp-ia-pymes/',
    title: 'Make, WhatsApp e IA para pymes: flujos útiles sin perder control',
    date: '2026-09-30',
    dateLabel: '30 septiembre 2026',
    desc: 'Flujos para clasificar mensajes, crear tareas, actualizar CRM y activar seguimiento sin dejar WhatsApp aislado.',
    tags: ['Make', 'WhatsApp', 'IA'],
    category: 'whatsapp',
  },
  {
    slug: '/blog/consultoria-ia-gestion-documental-pymes/',
    title: 'Consultoría de IA para gestión documental: cuando compensa en una pyme',
    date: '2026-09-30',
    dateLabel: '30 septiembre 2026',
    desc: 'Cuando aplicar IA a documentos, adjuntos, datos y vencimientos para convertirlos en tareas y control operativo.',
    tags: ['Documentos', 'Consultoria', 'IA'],
    category: 'ia',
  },
  {
    slug: '/blog/plataformas-automatizacion-ia-pymes-espana/',
    title: 'Plataformas de automatización con IA para pymes en España: como elegir',
    date: '2026-09-24',
    dateLabel: '24 septiembre 2026',
    desc: 'Como elegir entre Make, n8n, Zapier, HubSpot, Power Platform, Tidio o ChatGPT según proceso, control y mantenimiento.',
    tags: ['Plataformas', 'IA', 'Pymes'],
    category: 'ia',
  },
  {
    slug: '/blog/contratar-servicios-automatizacion-ia-empresa/',
    title: 'Contratar servicios de automatización con IA: que revisar antes de pedir presupuesto',
    date: '2026-09-24',
    dateLabel: '24 septiembre 2026',
    desc: 'Que revisar antes de pedir presupuesto: proceso, datos, integraciones, revisión humana, mantenimiento y medición.',
    tags: ['Servicios', 'IA', 'Decisión'],
    category: 'ia',
  },
  {
    slug: '/blog/productividad-ia-automatizacion-negocios/',
    title: 'Productividad con IA y automatización: que medir en una pyme de servicios',
    date: '2026-09-24',
    dateLabel: '24 septiembre 2026',
    desc: 'Como medir si la IA y la automatización reducen carga manual, aceleran respuesta y mejoran seguimiento real.',
    tags: ['Productividad', 'IA', 'Procesos'],
    category: 'procesos',
  },
  {
    slug: '/blog/wordpress-automatizacion-ia-pymes/',
    title: 'WordPress y automatización con IA para pymes: de formularios a seguimiento',
    date: '2026-09-09',
    dateLabel: '9 septiembre 2026',
    desc: 'Como convertir formularios, reservas y mensajes de una web WordPress en CRM, tareas y avisos con control.',
    tags: ['WordPress', 'IA', 'CRM'],
    category: 'crm',
  },
  {
    slug: '/blog/automatizacion-web-ia-leads-pymes/',
    title: 'Automatización web con IA para pymes: de la visita al seguimiento',
    date: '2026-09-09',
    dateLabel: '9 septiembre 2026',
    desc: 'Como conectar formularios, chats y descargas con CRM, prioridades y responsables para no perder leads.',
    tags: ['Web', 'Leads', 'IA'],
    category: 'crm',
  },
  {
    slug: '/blog/macros-scripts-automatizacion-ia-pymes/',
    title: 'Macros, scripts y automatización con IA: cuando cambiar el enfoque',
    date: '2026-09-09',
    dateLabel: '9 septiembre 2026',
    desc: 'Como decidir entre macros de Excel, scripts puntuales, no-code o un sistema con IA mantenible.',
    tags: ['Macros', 'Scripts', 'IA'],
    category: 'procesos',
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
    slug: '/blog/ia-automatizacion-flujos-trabajo-pymes/',
    title: 'IA y automatización de flujos de trabajo: del dato al siguiente paso',
    date: '2026-09-05',
    dateLabel: '5 septiembre 2026',
    desc: 'Como conectar entradas, IA, reglas, responsables y control para que un proceso avance sin memoria manual.',
    tags: ['Flujos', 'IA', 'Operativa'],
    category: 'procesos',
  },
  {
    slug: '/blog/microsoft-power-platform-agentes-ia-pymes/',
    title: 'Microsoft Power Platform y agentes de IA: cuando tiene sentido en una pyme',
    date: '2026-09-05',
    dateLabel: '5 septiembre 2026',
    desc: 'Cuando Power Platform, Power Automate, Power Apps y Copilot Studio encajan en una pyme que ya trabaja en Microsoft.',
    tags: ['Microsoft', 'Agentes IA', 'Power Platform'],
    category: 'procesos',
  },
  {
    slug: '/blog/zapier-automatizacion-ia-pymes/',
    title: 'Zapier y automatización con IA para pymes: cuando encaja y cuando no',
    date: '2026-08-24',
    dateLabel: '24 agosto 2026',
    desc: 'Casos útiles, límites y comparativa con Make y n8n antes de conectar otra automatización no-code.',
    tags: ['Zapier', 'IA', 'No-code'],
    category: 'procesos',
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
    slug: '/blog/tidio-chatbot-ia-pymes/',
    title: 'Tidio y chatbot con IA para pymes: atención rápida sin perder control',
    date: '2026-08-24',
    dateLabel: '24 agosto 2026',
    desc: 'Cuando un chat con IA ayuda, cuando molesta y como conectarlo con WhatsApp, CRM y seguimiento.',
    tags: ['Tidio', 'Chatbot', 'Atención'],
    category: 'whatsapp',
  },
  {
    slug: '/blog/comparativa-automatizacion-ia-atencion-cliente-pymes/',
    title: 'Comparativa de soluciones de automatización IA para atención al cliente',
    date: '2026-08-24',
    dateLabel: '24 agosto 2026',
    desc: 'Que elegir entre chatbot, asistente, WhatsApp, CRM y revisión humana para atender mejor sin perder control.',
    tags: ['Atención', 'IA', 'Comparativa'],
    category: 'whatsapp',
  },
  {
    slug: '/blog/ia-local-automatizacion-procesos-pymes/',
    title: 'IA local para automatización de procesos: cuando proteger datos cambia el diseño',
    date: '2026-08-24',
    dateLabel: '24 agosto 2026',
    desc: 'Cuando una pyme debe valorar modelos locales, datos privados y revisión antes de conectar otra API.',
    tags: ['IA local', 'Datos', 'Procesos'],
    category: 'ia',
  },
  {
    slug: '/blog/automatizacion-tareas-ia-vs-procesos-pymes/',
    title: 'Automatización de tareas con IA vs procesos: que necesita tu pyme',
    date: '2026-08-24',
    dateLabel: '24 agosto 2026',
    desc: 'Como distinguir una tarea aislada de un proceso completo antes de automatizar con IA y evitar parches.',
    tags: ['Tareas', 'Procesos', 'IA'],
    category: 'procesos',
  },
  {
    slug: '/blog/automatizacion-tiktok-ia-pymes-servicios/',
    title: 'Automatización de TikTok con IA para pymes: del video al seguimiento',
    date: '2026-08-11',
    dateLabel: '11 agosto 2026',
    desc: 'Como convertir ideas, comentarios y mensajes de TikTok en contexto, tareas y leads sin vivir pendiente de la app.',
    tags: ['TikTok', 'IA', 'Captacion'],
    category: 'crm',
  },
  {
    slug: '/blog/excel-ia-automatizacion-tareas-pymes/',
    title: 'Excel, IA y automatización de tareas: cuando una hoja ya no basta',
    date: '2026-08-11',
    dateLabel: '11 agosto 2026',
    desc: 'Como pasar de hojas manuales a flujos con datos, alertas y revisión sin romper la forma de trabajar del equipo.',
    tags: ['Excel', 'IA', 'Tareas'],
    category: 'procesos',
  },
  {
    slug: '/blog/automatizacion-negocios-ia-pymes-servicios/',
    title: 'Automatización de negocios con IA: que ordenar antes de conectar herramientas',
    date: '2026-08-11',
    dateLabel: '11 agosto 2026',
    desc: 'Guía para pymes de servicios que quieren automatizar ventas, atención y administración sin crear más ruido.',
    tags: ['Negocios', 'IA', 'Procesos'],
    category: 'ia',
  },
  {
    slug: '/blog/automatizacion-redes-sociales-ia-pymes/',
    title: 'Automatización de redes sociales con IA: publicar menos a mano y seguir mejor',
    date: '2026-07-23',
    dateLabel: '23 julio 2026',
    desc: 'Como usar IA para ordenar contenido, comentarios, mensajes y leads sin crear más carga manual.',
    tags: ['Redes sociales', 'IA', 'CRM'],
    category: 'crm',
  },
  {
    slug: '/blog/automatizacion-logistica-ia-pymes-servicios/',
    title: 'Automatización logística con IA para pymes de servicios: rutas, partes e incidencias',
    date: '2026-07-23',
    dateLabel: '23 julio 2026',
    desc: 'Donde aplicar IA a avisos, rutas, partes e incidencias sin montar un sistema imposible.',
    tags: ['Logistica', 'IA', 'Procesos'],
    category: 'sectores',
  },
  {
    slug: '/blog/automatizacion-ia-principiantes-pymes/',
    title: 'Automatización con IA para principiantes: guía para pymes no técnicas',
    date: '2026-07-23',
    dateLabel: '23 julio 2026',
    desc: 'Como entender entradas, reglas, datos y revisión humana antes de comprar herramientas o hacer cursos.',
    tags: ['Principiantes', 'IA', 'Decisión'],
    category: 'ia',
  },
  {
    slug: '/blog/automatizacion-youtube-ia-pymes/',
    title: 'Automatización de YouTube con IA para pymes: contenido sin más carga manual',
    date: '2026-07-04',
    dateLabel: '4 julio 2026',
    desc: 'Como convertir videos, comentarios y formularios en tareas, CRM y seguimiento sin crear otro proceso manual.',
    tags: ['YouTube', 'IA', 'Captacion'],
    category: 'ia',
  },
  {
    slug: '/blog/automatizacion-google-workspace-ia-pymes/',
    title: 'Automatización con IA en Google Workspace: Gmail, Drive y Sheets con control',
    date: '2026-07-04',
    dateLabel: '4 julio 2026',
    desc: 'Flujos útiles con Gmail, Drive, Calendar y Sheets para ordenar tareas, documentos y seguimiento.',
    tags: ['Google Workspace', 'IA', 'Procesos'],
    category: 'procesos',
  },
  {
    slug: '/blog/manychat-automatizacion-ia-pymes/',
    title: 'ManyChat y automatización con IA: cuando usarlo en una pyme de servicios',
    date: '2026-07-04',
    dateLabel: '4 julio 2026',
    desc: 'Cuando ManyChat ayuda a ordenar conversaciones y cuando conviene conectarlo a CRM o revisión humana.',
    tags: ['ManyChat', 'IA', 'WhatsApp'],
    category: 'whatsapp',
  },
  {
    slug: '/blog/automatizacion-industrial-ia-pymes/',
    title: 'Automatización industrial con IA para pymes: casos útiles y límites',
    date: '2026-06-20',
    dateLabel: '20 junio 2026',
    desc: 'Casos concretos para aplicar IA a mantenimiento, partes e incidencias sin sobredimensionar el proyecto.',
    tags: ['Industria', 'IA', 'Procesos'],
    category: 'sectores',
  },
  {
    slug: '/blog/n8n-vs-make-automatizacion-ia-pymes/',
    title: 'n8n vs Make para automatización con IA: cual encaja mejor en una pyme',
    date: '2026-06-20',
    dateLabel: '20 junio 2026',
    desc: 'Comparativa por flexibilidad, facilidad visual, mantenimiento y capacidad técnica disponible.',
    tags: ['n8n', 'Make', 'Comparativa'],
    category: 'procesos',
  },
  {
    slug: '/blog/power-automate-ia-microsoft-365-pymes/',
    title: 'Power Automate con IA en Microsoft 365: cuando tiene sentido en una pyme',
    date: '2026-06-20',
    dateLabel: '20 junio 2026',
    desc: 'Como conectar Outlook, Teams, SharePoint y tareas con IA cuando la empresa ya trabaja en Microsoft 365.',
    tags: ['Power Automate', 'Microsoft 365', 'IA'],
    category: 'procesos',
  },
  {
    slug: '/blog/automatizacion-email-ia-pymes/',
    title: 'Automatización de email con IA: convertir correos en tareas y seguimiento',
    date: '2026-06-20',
    dateLabel: '20 junio 2026',
    desc: 'Como clasificar correos, extraer datos y crear siguientes pasos sin responder situaciones sensibles en automático.',
    tags: ['Email', 'IA', 'Seguimiento'],
    category: 'procesos',
  },
  {
    slug: '/blog/automatizacion-facturas-ia-pymes/',
    title: 'Automatización de facturas con IA: del documento recibido al control de pendientes',
    date: '2026-06-20',
    dateLabel: '20 junio 2026',
    desc: 'Extracción de datos, detección de duplicados, aprobaciones y vencimientos con revisión humana.',
    tags: ['Facturas', 'IA', 'Administracion'],
    category: 'procesos',
  },
  {
    slug: '/blog/lead-scoring-ia-pymes/',
    title: 'Lead scoring con IA para pymes: como priorizar oportunidades sin perder criterio',
    date: '2026-06-20',
    dateLabel: '20 junio 2026',
    desc: 'Como ordenar oportunidades por encaje y urgencia usando reglas, IA y un CRM con datos fiables.',
    tags: ['Lead scoring', 'CRM', 'IA'],
    category: 'crm',
  },
  {
    slug: '/blog/calcular-roi-automatizacion-ia/',
    title: 'Cómo calcular el ROI de una automatización con IA antes de invertir',
    date: '2026-06-20',
    dateLabel: '20 junio 2026',
    desc: 'Método para comparar costes, tiempo recuperado, errores y seguimiento usando escenarios conservadores.',
    tags: ['ROI', 'IA', 'Decisión'],
    category: 'ia',
  },
  {
    slug: '/blog/seguridad-datos-automatizacion-ia-pymes/',
    title: 'Seguridad de datos en automatizaciones con IA: checklist para pymes',
    date: '2026-06-20',
    dateLabel: '20 junio 2026',
    desc: 'Datos mínimos, permisos, registros, pruebas y plan de fallo antes de conectar IA a procesos reales.',
    tags: ['Seguridad', 'Datos', 'IA'],
    category: 'ia',
  },
  {
    slug: '/blog/mantenimiento-automatizaciones-ia-pymes/',
    title: 'Mantenimiento de automatizaciones con IA: quien revisa el sistema después',
    date: '2026-06-20',
    dateLabel: '20 junio 2026',
    desc: 'Que revisar después de publicar un flujo y como definir responsables, alertas y soporte.',
    tags: ['Mantenimiento', 'IA', 'Operativa'],
    category: 'procesos',
  },
  {
    slug: '/blog/piloto-automatizacion-ia-pymes/',
    title: 'Proyecto piloto de automatización con IA: como probar valor sin automatizarlo todo',
    date: '2026-06-20',
    dateLabel: '20 junio 2026',
    desc: 'Como elegir un proceso, limitar el alcance y medir resultados antes de ampliar una automatización.',
    tags: ['Piloto IA', 'Pruebas', 'Decisión'],
    category: 'ia',
  },
  {
    slug: '/blog/automatizacion-tareas-administrativas-ia-pymes/',
    title: 'Automatización de tareas administrativas con IA en pymes: por donde empezar',
    date: '2026-06-10',
    dateLabel: '10 junio 2026',
    desc: 'Como reducir trabajo manual en emails, documentos, agenda y CRM sin perder control del proceso.',
    tags: ['Administracion', 'IA', 'Procesos'],
    category: 'procesos',
  },
  {
    slug: '/blog/agentes-ia-automatizacion-procesos-pymes/',
    title: 'Agentes de IA para automatización de procesos: cuando tienen sentido en una pyme',
    date: '2026-06-10',
    dateLabel: '10 junio 2026',
    desc: 'Que es un agente de IA, que puede hacer en una pyme y donde conviene mantener revisión humana.',
    tags: ['Agentes IA', 'Procesos', 'Control'],
    category: 'ia',
  },
  {
    slug: '/blog/automatizacion-ia-whatsapp-pymes/',
    title: 'Automatización con IA en WhatsApp: como ordenar mensajes sin perder trato humano',
    date: '2026-06-10',
    dateLabel: '10 junio 2026',
    desc: 'Como usar IA en WhatsApp para clasificar consultas, registrar leads y responder mejor sin sonar frío.',
    tags: ['WhatsApp', 'IA', 'Atención'],
    category: 'whatsapp',
  },
  {
    slug: '/blog/automatizacion-con-ia-generativa-pymes/',
    title: 'Automatización con IA generativa en pymes: usos reales y límites',
    date: '2026-06-10',
    dateLabel: '10 junio 2026',
    desc: 'Donde usar IA generativa para resumir, clasificar y redactar sin dejar decisiones críticas en automático.',
    tags: ['IA generativa', 'Pymes', 'Criterio'],
    category: 'ia',
  },
  {
    slug: '/blog/automatizacion-con-ia-n8n-pymes/',
    title: 'Automatización con IA y n8n: cuando encaja en una pyme de servicios',
    date: '2026-06-10',
    dateLabel: '10 junio 2026',
    desc: 'Como usar n8n para conectar herramientas, IA y procesos sin convertir la operativa en un flujo imposible.',
    tags: ['n8n', 'IA', 'No-code'],
    category: 'procesos',
  },
  {
    slug: '/blog/automatizacion-con-ia-make-pymes/',
    title: 'Automatización con IA y Make: flujos útiles para pymes sin complicar el sistema',
    date: '2026-06-10',
    dateLabel: '10 junio 2026',
    desc: 'Cuando Make puede ayudar a conectar formularios, CRM, email e IA con flujos claros y mantenibles.',
    tags: ['Make', 'IA', 'Flujos'],
    category: 'procesos',
  },
  {
    slug: '/blog/automatizacion-procesos-contables-ia-pymes/',
    title: 'Automatización de procesos contables con IA: que puede hacer una pyme sin perder control',
    date: '2026-06-10',
    dateLabel: '10 junio 2026',
    desc: 'Como ordenar documentos, vencimientos y recordatorios contables con IA sin sustituir criterio profesional.',
    tags: ['Contabilidad', 'IA', 'Asesorias'],
    category: 'sectores',
  },
  {
    slug: '/blog/automatizacion-ia-marketing-digital-pymes/',
    title: 'Automatización IA para marketing digital: del lead al seguimiento real',
    date: '2026-06-10',
    dateLabel: '10 junio 2026',
    desc: 'Como conectar captación, respuesta, CRM y seguimiento para que los leads no se queden sin siguiente paso.',
    tags: ['Marketing', 'CRM', 'IA'],
    category: 'crm',
  },
  {
    slug: '/blog/automatizacion-ia-gratis-pymes-riesgos/',
    title: 'Automatización IA gratis: que puedes probar y donde empieza el riesgo en una pyme',
    date: '2026-06-10',
    dateLabel: '10 junio 2026',
    desc: 'Que tiene sentido probar gratis y cuando una pyme debería pasar de experimento a sistema con control.',
    tags: ['IA gratis', 'Herramientas', 'Riesgos'],
    category: 'ia',
  },
  {
    slug: '/blog/curso-automatizacion-ia-pymes-delegar/',
    title: 'Curso de automatización IA para pymes: cuando aprender y cuando delegar',
    date: '2026-06-10',
    dateLabel: '10 junio 2026',
    desc: 'Como decidir entre formarte, probar internamente o delegar un proyecto de automatización con IA.',
    tags: ['Curso IA', 'Decisión', 'Pymes'],
    category: 'ia',
  },
  {
    slug: '/blog/que-es-automatizacion-con-ia-pymes/',
    title: 'Qué es la automatización con IA y qué significa para una pyme de servicios',
    date: '2026-06-05',
    dateLabel: '5 junio 2026',
    desc: 'Definición clara de automatización con IA aplicada a procesos, reglas, datos y ejemplos reales en pymes.',
    tags: ['IA', 'Automatizacion', 'Pymes'],
    category: 'ia',
  },
  {
    slug: '/blog/como-funciona-automatizacion-con-ia-empresa/',
    title: 'Cómo funciona la automatización con IA en una empresa de servicios',
    date: '2026-06-05',
    dateLabel: '5 junio 2026',
    desc: 'Entrada, lectura, reglas, acción y control humano: el flujo real de una automatización con IA.',
    tags: ['IA', 'Procesos', 'Sistema'],
    category: 'ia',
  },
  {
    slug: '/blog/sistema-automatizado-ia-pyme/',
    title: 'Qué es un sistema automatizado de IA y cómo se diseña en una pyme',
    date: '2026-06-05',
    dateLabel: '5 junio 2026',
    desc: 'Como pasar de herramientas sueltas a un sistema con datos, reglas, CRM, IA y control humano.',
    tags: ['Sistema', 'IA', 'Operativa'],
    category: 'ia',
  },
  {
    slug: '/blog/tipos-automatizacion-empresa-reglas-ia-rpa/',
    title: 'Los 3 tipos de automatización que una pyme debe conocer antes de invertir',
    date: '2026-06-05',
    dateLabel: '5 junio 2026',
    desc: 'Reglas, integraciones, IA y RPA: como elegir el tipo correcto según el proceso y el nivel de control.',
    tags: ['Tipos', 'Procesos', 'IA'],
    category: 'procesos',
  },
  {
    slug: '/blog/ia-automatizacion-diferencias-trabajan-juntas/',
    title: 'IA y automatización: como trabajan juntas sin complicar la empresa',
    date: '2026-06-05',
    dateLabel: '5 junio 2026',
    desc: 'Que aporta la IA, que aporta la automatización y como combinarlas en procesos reales sin perder control.',
    tags: ['IA', 'Automatizacion', 'Criterio'],
    category: 'ia',
  },
  {
    slug: '/blog/ejemplos-automatizacion-ia-atencion-ventas-administracion/',
    title: 'Ejemplos de automatización mediante IA en atención, ventas y administración',
    date: '2026-06-05',
    dateLabel: '5 junio 2026',
    desc: 'Casos concretos para aplicar IA en atención, seguimiento comercial y gestión administrativa.',
    tags: ['Ejemplos', 'IA', 'Pymes'],
    category: 'ia',
  },
  {
    slug: '/blog/aplicaciones-ia-pymes-servicios/',
    title: 'Aplicaciones de la IA en pymes de servicios: donde aporta valor de verdad',
    date: '2026-06-05',
    dateLabel: '5 junio 2026',
    desc: 'Atención, CRM, documentos, agenda y operaciones: aplicaciones de IA que si tienen encaje operativo.',
    tags: ['Aplicaciones IA', 'Pymes', 'Procesos'],
    category: 'ia',
  },
  {
    slug: '/blog/tipos-ia-pymes-servicios/',
    title: 'Tipos de IA que una pyme debe conocer antes de automatizar',
    date: '2026-06-05',
    dateLabel: '5 junio 2026',
    desc: 'IA generativa, conversacional, documental y de clasificación explicadas para decisiones practicas.',
    tags: ['Tipos IA', 'Pymes', 'Decisión'],
    category: 'ia',
  },
  {
    slug: '/blog/ia-mas-usadas-empresas-pymes/',
    title: 'IA más usadas en empresas: como elegir sin perseguir la herramienta de moda',
    date: '2026-06-05',
    dateLabel: '5 junio 2026',
    desc: 'Como evaluar herramientas de IA por proceso, datos, integraciones y control, no por popularidad.',
    tags: ['Herramientas IA', 'Empresas', 'Decisión'],
    category: 'ia',
  },
  {
    slug: '/blog/chatgpt-vs-otras-ia-empresa/',
    title: 'Qué IA es mejor que ChatGPT para una empresa: depende del proceso',
    date: '2026-06-05',
    dateLabel: '5 junio 2026',
    desc: 'Cuando basta una herramienta general y cuando una empresa necesita un sistema integrado con IA.',
    tags: ['ChatGPT', 'IA', 'Herramientas'],
    category: 'ia',
  },
  {
    slug: '/blog/automatizacion-con-ia-empresas-pymes-servicios/',
    title: 'Automatización con IA para empresas: ejemplos útiles en pymes de servicios',
    date: '2026-06-05',
    dateLabel: '5 junio 2026',
    desc: 'Ejemplos concretos para aplicar IA a procesos, datos, CRM y atención sin convertirla en otra herramienta suelta.',
    tags: ['IA', 'Empresas', 'Procesos'],
    category: 'ia',
  },
  {
    slug: '/blog/automatizacion-procesos-con-ia-pymes/',
    title: 'Automatización de procesos con IA: cuando usar reglas y cuando usar inteligencia artificial',
    date: '2026-06-05',
    dateLabel: '5 junio 2026',
    desc: 'Como decidir que parte de un proceso necesita IA y que parte funciona mejor con reglas simples y control humano.',
    tags: ['Procesos', 'IA', 'Operativa'],
    category: 'ia',
  },
  {
    slug: '/blog/agencia-automatizacion-ia-como-elegir/',
    title: 'Agencia de automatización IA: como elegir proveedor sin comprar humo',
    date: '2026-06-05',
    dateLabel: '5 junio 2026',
    desc: 'Criterios para elegir una agencia de automatización IA que entienda procesos antes de vender herramientas.',
    tags: ['Agencia IA', 'Decisión', 'Pymes'],
    category: 'ia',
  },
  {
    slug: '/blog/servicios-consultoria-automatizacion-ia-pymes/',
    title: 'Servicios de consultoría de automatización IA: que incluye un proyecto serio',
    date: '2026-06-05',
    dateLabel: '5 junio 2026',
    desc: 'Diagnóstico, diseño, implementación y control: que debería incluir un proyecto de automatización IA para pymes.',
    tags: ['Consultoria', 'IA', 'Procesos'],
    category: 'ia',
  },
  {
    slug: '/blog/herramientas-automatizacion-ia-pymes/',
    title: 'Herramientas de automatización con IA para pymes: que mirar antes de elegir',
    date: '2026-06-05',
    dateLabel: '5 junio 2026',
    desc: 'Como comparar herramientas de automatización con IA sin acumular apps ni romper la operativa del equipo.',
    tags: ['Herramientas', 'IA', 'Decisión'],
    category: 'ia',
  },
  {
    slug: '/blog/automatizacion-no-code-flujos-ia-pymes/',
    title: 'Automatización no-code con IA: flujos útiles para pymes sin convertirlo en un laberinto',
    date: '2026-06-05',
    dateLabel: '5 junio 2026',
    desc: 'Como crear flujos no-code con IA para registrar, resumir y mover tareas sin depender de desarrollos enormes.',
    tags: ['No-code', 'IA', 'Flujos'],
    category: 'procesos',
  },
  {
    slug: '/blog/gestion-documental-ia-automatizacion-pymes/',
    title: 'Gestión documental con IA: como automatizar documentos en pymes de servicios',
    date: '2026-06-05',
    dateLabel: '5 junio 2026',
    desc: 'Como usar IA para clasificar, resumir y controlar documentos sin sustituir revisión profesional.',
    tags: ['Documentos', 'IA', 'Procesos'],
    category: 'ia',
  },
  {
    slug: '/blog/chatbot-ia-atencion-cliente-pymes/',
    title: 'Chatbot con IA para atención al cliente: límites, escalado humano y CRM',
    date: '2026-06-05',
    dateLabel: '5 junio 2026',
    desc: 'Como usar un chatbot con IA para responder mejor sin perder trato humano, contexto ni seguimiento.',
    tags: ['Chatbot IA', 'Atención', 'WhatsApp'],
    category: 'whatsapp',
  },
  {
    slug: '/blog/automatizacion-inteligente-tareas-repetitivas/',
    title: 'Automatización inteligente de tareas repetitivas: como decidir que merece IA',
    date: '2026-06-05',
    dateLabel: '5 junio 2026',
    desc: 'Matriz simple para decidir que tareas repetitivas necesitan reglas, IA o una combinación de ambas.',
    tags: ['Tareas repetitivas', 'IA', 'Operativa'],
    category: 'procesos',
  },
  {
    slug: '/blog/software-rpa-ia-pymes-antes-comprar/',
    title: 'Software RPA con IA para pymes: que revisar antes de comprar',
    date: '2026-06-05',
    dateLabel: '5 junio 2026',
    desc: 'Criterios para saber si necesitas RPA con IA, una integración más simple o rediseñar primero el proceso.',
    tags: ['RPA', 'IA', 'Software'],
    category: 'ia',
  },
  {
    slug: '/blog/automatizacion-clinicas-esteticas-primera-consulta-seguimiento/',
    title: 'Automatización para clínicas esteticas: primera consulta, revisiones y seguimiento',
    date: '2026-06-04',
    dateLabel: '4 junio 2026',
    desc: 'Como ordenar primera consulta, recordatorios, revisiones y seguimiento posterior sin perder trato personal.',
    tags: ['Clínicas esteticas', 'Consultas', 'Seguimiento'],
    category: 'clinicas',
  },
  {
    slug: '/blog/automatizacion-despachos-abogados-expedientes-clientes/',
    title: 'Automatización para despachos de abogados: expedientes, citas y documentos',
    date: '2026-06-04',
    dateLabel: '4 junio 2026',
    desc: 'Procesos administrativos que un despacho puede automatizar sin sustituir criterio juridico.',
    tags: ['Despachos', 'Documentos', 'Clientes'],
    category: 'sectores',
  },
  {
    slug: '/blog/onboarding-clientes-pymes-servicios-automatizado/',
    title: 'Onboarding de clientes en pymes de servicios: como automatizarlo sin hacerlo frío',
    date: '2026-06-04',
    dateLabel: '4 junio 2026',
    desc: 'Como preparar bienvenida, datos, documentos y tareas internas para que cada nuevo cliente empiece con orden.',
    tags: ['Onboarding', 'Clientes', 'Procesos'],
    category: 'procesos',
  },
  {
    slug: '/blog/automatizar-cobros-recordatorios-pago-pymes/',
    title: 'Automatizar cobros y recordatorios de pago en pymes de servicios',
    date: '2026-06-04',
    dateLabel: '4 junio 2026',
    desc: 'Como ordenar vencimientos, pagos pendientes y recordatorios sin incomodar al cliente ni cargar al equipo.',
    tags: ['Cobros', 'Recordatorios', 'CRM'],
    category: 'crm',
  },
  {
    slug: '/blog/preparar-datos-empresa-automatizar-ia/',
    title: 'Cómo preparar los datos de tu empresa antes de automatizar con IA',
    date: '2026-06-04',
    dateLabel: '4 junio 2026',
    desc: 'Fuentes, reglas, permisos y límites que una pyme debe ordenar antes de aplicar IA con sentido.',
    tags: ['IA', 'Datos', 'Procesos'],
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
    title: 'Cuánto cuesta automatizar procesos en una pyme',
    date: '2026-06-04',
    dateLabel: '4 junio 2026',
    desc: 'Factores que influyen en el coste de automatizar procesos y como saber si merece la pena invertir.',
    tags: ['Coste', 'Procesos', 'Decisión'],
    category: 'procesos',
  },
  {
    slug: '/blog/diferencia-digitalizacion-automatizacion-ia-pymes/',
    title: 'Diferencia entre digitalización, automatización e IA en pymes',
    date: '2026-06-04',
    dateLabel: '4 junio 2026',
    desc: 'Como saber si tu pyme necesita primero ordenar datos, automatizar reglas o aplicar IA con límites claros.',
    tags: ['Digitalizacion', 'Automatizacion', 'IA'],
    category: 'ia',
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
    title: 'Automatización para asesorías: vencimientos, documentos y recordatorios sin perseguir clientes',
    date: '2026-05-26',
    dateLabel: '26 mayo 2026',
    desc: 'Como reducir llamadas, correos repetidos y documentos pendientes en asesorías sin automatizar decisiones sensibles.',
    tags: ['Asesorias', 'Recordatorios', 'Documentos'],
    category: 'sectores',
  },
  {
    slug: '/blog/documentar-procesos-pyme-sin-complicarse/',
    title: 'Cómo documentar procesos en una pyme sin complicarse',
    date: '2026-05-26',
    dateLabel: '26 mayo 2026',
    desc: 'Plantilla simple para sacar procesos de la cabeza de una persona y prepararlos para delegar o automatizar.',
    tags: ['Procesos', 'Organizacion', 'Operativa'],
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
    slug: '/blog/asistente-ia-atencion-cliente-pymes/',
    title: 'Asistente de IA para atención al cliente: que puede resolver y que no',
    date: '2026-05-19',
    dateLabel: '19 mayo 2026',
    desc: 'Que tareas puede asumir un asistente de IA, cuando debe escalar a humano y como medir si realmente reduce carga.',
    tags: ['IA', 'Atención', 'WhatsApp'],
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
    title: 'Cómo dejar de gestionar el WhatsApp de empresa a mano',
    date: '2026-04-28',
    dateLabel: '28 abril 2026',
    desc: 'Estructura mínima para responder antes, filtrar mejor y seguir conversaciones sin saturar al equipo.',
    tags: ['WhatsApp', 'Atención', 'Proceso'],
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
