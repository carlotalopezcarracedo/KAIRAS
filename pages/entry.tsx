import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';

type PageModule = { default: React.FC };
type PageLoader = () => Promise<PageModule>;

const pageMap: Record<string, PageLoader> = {
  servicios: () => import('./Servicios'),
  contacto: () => import('./ContactoPage'),
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
  'blog-whatsapp-manual': () => import('./BlogPostWhatsAppManual'),
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
};

const rootEl = document.getElementById('root')!;
const pageName = rootEl.dataset.page ?? '';
const loadPage = pageMap[pageName];
const LazyPage = loadPage ? React.lazy(loadPage) : null;

const root = ReactDOM.createRoot(rootEl);
root.render(
  <React.StrictMode>
    <Suspense fallback={null}>
      {LazyPage ? <LazyPage /> : null}
    </Suspense>
  </React.StrictMode>
);
