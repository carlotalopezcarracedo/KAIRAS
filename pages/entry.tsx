import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import '../index.css';

type PageModule = { default: React.FC };
type PageLoader = () => Promise<PageModule>;

// Blog guides are data files rendered by a shared component.
const guide = (data: Promise<{ default: import('../lib/guideTypes').BlogGuideData }>): Promise<PageModule> =>
  Promise.all([import('../components/BlogGuide'), data]).then(([view, mod]) => ({
    default: () => React.createElement(view.default, { guide: mod.default }),
  }));

export const pageMap: Record<string, PageLoader> = {
  home: () => import('../App'),
  servicios: () => import('./Servicios'),
  prensa: () => import('./Prensa'),
  'sobre-carlota': () => import('./SobreCarlota'),
  contacto: () => import('./ContactoPage'),
  faq: () => import('./FAQ'),
  'calculadora-tareas-manuales': () => import('./CalculadoraTareasManuales'),
  'automatizacion-procesos': () => import('./AutomatizacionProcesos'),
  'ia-empresas': () => import('./IAEmpresas'),
  'optimizacion-operativa-pymes': () => import('./OptimizacionOperativa'),
  'automatizacion-whatsapp-empresas': () => import('./AutomatizacionWhatsApp'),
  'automatizacion-seguimiento-clientes': () => import('./AutomatizacionSeguimiento'),
  'crm-pymes-seguimiento-clientes': () => import('./CRMPymesSeguimientoClientes'),
  'automatizacion-clinicas': () => import('./AutomatizacionClinicas'),
  'automatizacion-empresas-galicia': () => import('./Galicia'),
  'blog': () => import('./Blog'),
  'blog-post-1': () => import('./BlogPost1'),
  'blog-pierden-clientes': () => import('./BlogPostPierdenClientes'),
  'blog-whatsapp-manual': () => guide(import('../lib/guides/whatsapp-manual')),
  'blog-proceso-primero': () => import('./BlogPostProcesoPrimero'),
  'blog-ausencias-clinicas': () => import('./BlogPostAusenciasClinicas'),
  'blog-tareas-manuales': () => import('./BlogPostTareasManuales'),
  'blog-seguimiento-leads': () => import('./BlogPostSeguimientoLeads'),
  'blog-whatsapp-app-vs-api': () => import('./BlogPostWhatsAppAppVsAPI'),
  'blog-reactivar-leads': () => import('./BlogPostReactivarLeads'),
  'blog-confirmacion-citas-whatsapp': () => import('./BlogPostConfirmacionCitas'),
  'blog-crm-no-falla-proceso': () => import('./BlogPostCRMNoProceso'),
  'blog-herramientas-desconectadas': () => import('./BlogPostHerramientasDesconectadas'),
  'blog-todo-depende-persona': () => import('./BlogPostTodoDepende'),
  'blog-ia-pymes-sentido': () => import('./BlogPostIAPymesSentido'),
  'blog-whatsapp-crm': () => import('./BlogPostWhatsAppCRM'),
  'blog-presupuestos-seguimiento': () => import('./BlogPostPresupuestosSeguimiento'),
  'blog-automatizacion-galicia-retorno': () => import('./BlogPostAutomatizacionGaliciaRetorno'),
  'blog-seguimiento-pacientes-clinicas': () => import('./BlogPostSeguimientoPacientesClinicas'),
  'blog-academias': () => import('./BlogPostAcademias'),
  'blog-inmobiliarias': () => import('./BlogPostInmobiliarias'),
  'blog-asesorias': () => guide(import('../lib/guides/asesorias')),
  'blog-documentar-procesos': () => guide(import('../lib/guides/documentar-procesos')),
  'blog-errores-automatizar': () => import('./BlogPostErroresAutomatizar'),
  'blog-mensajes-automaticos': () => import('./BlogPostMensajesAutomaticos'),
  'blog-gimnasios': () => import('./BlogPostGimnasios'),
  'blog-reformas-instaladoras': () => import('./BlogPostReformasInstaladoras'),
  'blog-automatizacion-pontevedra': () => import('./BlogPostAutomatizacionPontevedra'),
  'blog-coste-automatizar': () => guide(import('../lib/guides/coste-roi')),
  'blog-calendario-email-crm': () => import('./BlogPostCalendarioEmailCRM'),
  'blog-clinicas-esteticas': () => guide(import('../lib/guides/clinicas-esteticas')),
  'blog-despachos-abogados': () => guide(import('../lib/guides/despachos-abogados')),
  'blog-onboarding-clientes': () => guide(import('../lib/guides/onboarding')),
  'blog-cobros-recordatorios': () => guide(import('../lib/guides/cobros')),
  'blog-preparar-datos-ia': () => guide(import('../lib/guides/preparar-datos')),
  'blog-automatizacion-vigo': () => import('./BlogPostAutomatizacionVigo'),
  'blog-agencia-automatizacion-ia': () => guide(import('../lib/guides/agencia-elegir')),
  'blog-herramientas-ia': () => guide(import('../lib/guides/herramientas-ia')),
  'blog-gestion-documental-ia': () => guide(import('../lib/guides/gestion-documental')),
  'blog-chatbot-ia-atencion': () => guide(import('../lib/guides/chatbot-atencion')),
  'blog-que-es-automatizacion-ia': () => guide(import('../lib/guides/que-es-automatizacion-ia')),
  'blog-tipos-automatizacion-empresa': () => guide(import('../lib/guides/tipos-automatizacion')),
  'blog-ejemplos-automatizacion-ia': () => guide(import('../lib/guides/ejemplos-automatizacion-ia')),
  'blog-tareas-administrativas-ia': () => guide(import('../lib/guides/tareas-administrativas')),
  'blog-agentes-ia-procesos': () => guide(import('../lib/guides/agentes-ia')),
  'blog-industrial-ia-pymes': () => guide(import('../lib/guides/industrial-logistica')),
  'blog-n8n-vs-make': () => guide(import('../lib/guides/n8n-make-zapier')),
  'blog-power-automate-ia': () => guide(import('../lib/guides/power-automate')),
  'blog-email-ia-pymes': () => guide(import('../lib/guides/email-ia')),
  'blog-facturas-ia-pymes': () => guide(import('../lib/guides/facturas')),
  'blog-lead-scoring-ia': () => guide(import('../lib/guides/lead-scoring')),
  'blog-seguridad-datos-ia': () => guide(import('../lib/guides/seguridad-datos')),
  'blog-mantenimiento-automatizaciones-ia': () => guide(import('../lib/guides/mantenimiento')),
  'blog-google-workspace-ia-pymes': () => guide(import('../lib/guides/google-workspace')),
  'blog-redes-sociales-ia-pymes': () => guide(import('../lib/guides/redes-marketing')),
  'blog-excel-ia-tareas-pymes': () => guide(import('../lib/guides/excel-macros')),
  'blog-hubspot-ia-pymes': () => import('./BlogPostKeywordCluster7'),
  'blog-kit-digital-automatizacion-ia': () => import('./BlogPostKeywordCluster8'),
  'blog-automatizacion-web-ia-leads': () => guide(import('../lib/guides/web-leads')),
};

async function mountPage() {
  const rootEl = document.getElementById('root');
  if (!rootEl) return;

  const pageName = rootEl.dataset.page ?? '';
  const loadPage = pageMap[pageName];
  if (!loadPage) return;

  const { default: Page } = await loadPage();
  const app = (
    <React.StrictMode>
      <Page />
    </React.StrictMode>
  );

  if (rootEl.dataset.prerendered === 'true') {
    hydrateRoot(rootEl, app);
    return;
  }

  createRoot(rootEl).render(app);
}

if (typeof document !== 'undefined') {
  void mountPage();
}
