import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Servicios', href: '/#automatizaciones' },
  { label: 'Cómo funciona', href: '/#como-funciona' },
  { label: 'Resultados', href: '/#resultados' },
];

const afterResources = [
  { label: 'Sobre Carlota', href: '/sobre-carlota/' },
  { label: 'Contacto', href: '/#contacto' },
];

// Always rendered in the HTML (only hidden with CSS) so crawlers see them on every page.
const resources = [
  { label: 'Blog', desc: 'Guías de automatización e IA', href: '/blog/' },
  { label: 'Calculadora', desc: 'Horas y coste de tus tareas manuales', href: '/calculadora-tareas-manuales/' },
  { label: 'Preguntas frecuentes', desc: 'Dudas habituales sobre KAIRAS', href: '/faq/' },
];

const linkCls = 'text-[10px] font-bold tracking-widest uppercase hover:text-cyber-purple transition-colors';

const Navbar: React.FC = () => {
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const resourcesRef = useRef<HTMLDivElement>(null);
  // With a mouse the menu opens on hover, so a click while hovering must not close it.
  const hovering = useRef(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setResourcesOpen(false);
        setMobileOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (resourcesRef.current && !resourcesRef.current.contains(e.target as Node)) setResourcesOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <nav aria-label="Navegación principal" className="fixed top-4 left-0 right-0 z-[100] px-4 sm:px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="glass-card nav-glass rounded-3xl border-white/20 px-4 sm:px-6 py-3 sm:py-4 shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
          <div className="flex items-center justify-between gap-3">
            <a href="/#inicio" className="inline-flex items-center shrink-0" aria-label="KAIRAS, ir al inicio">
              <img
                src={`${import.meta.env.BASE_URL}logo-kairas-horizontal-blanco-480.webp`}
                alt="KAIRAS"
                className="h-7 sm:h-8 w-auto"
                width="160"
                height="32"
              />
            </a>

            <div className="hidden xl:flex items-center gap-6">
              {navLinks.map((item) => (
                <a key={item.label} className={linkCls} href={item.href}>
                  {item.label}
                </a>
              ))}

              <div
                ref={resourcesRef}
                className="relative group"
                onMouseEnter={() => {
                  hovering.current = true;
                  setResourcesOpen(true);
                }}
                onMouseLeave={() => {
                  hovering.current = false;
                  setResourcesOpen(false);
                }}
              >
                <button
                  type="button"
                  className={`${linkCls} inline-flex items-center gap-1`}
                  aria-expanded={resourcesOpen}
                  aria-controls="menu-recursos"
                  onClick={() => setResourcesOpen((v) => (hovering.current ? true : !v))}
                >
                  Recursos
                  <ChevronDown className={`w-3 h-3 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                {/* pt-4 bridges the gap so the menu doesn't close while the pointer moves down */}
                <div
                  id="menu-recursos"
                  className={`absolute left-1/2 -translate-x-1/2 top-full pt-4 w-72 transition-opacity ${
                    resourcesOpen ? 'visible opacity-100' : 'invisible opacity-0 group-focus-within:visible group-focus-within:opacity-100'
                  }`}
                >
                  <ul className="rounded-2xl border border-white/15 bg-[#0d0d12] p-2 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                    {resources.map((r) => (
                      <li key={r.href}>
                        <a href={r.href} className="block rounded-xl px-4 py-3 hover:bg-white/5 transition-colors">
                          <span className="block text-[11px] font-bold tracking-widest uppercase text-white">{r.label}</span>
                          <span className="block text-xs text-slate-400 mt-1">{r.desc}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {afterResources.map((item) => (
                <a key={item.label} className={linkCls} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <a
                href="/#contacto"
                className="inline-flex items-center justify-center bg-white text-black px-4 sm:px-5 py-2.5 rounded-full text-[10px] font-extrabold uppercase hover:bg-slate-200 transition-all whitespace-nowrap"
              >
                <span className="sm:hidden">Diagnóstico</span>
                <span className="hidden sm:inline">Quiero mi diagnóstico</span>
              </a>
              <button
                type="button"
                className="xl:hidden p-2 -mr-1 text-white"
                aria-expanded={mobileOpen}
                aria-controls="menu-movil"
                aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
                onClick={() => setMobileOpen((v) => !v)}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div id="menu-movil" className={`xl:hidden ${mobileOpen ? 'block' : 'hidden'} mt-4 pt-4 border-t border-white/10 max-h-[70svh] overflow-y-auto`}>
            <ul className="space-y-1">
              {[...navLinks, ...afterResources].map((item) => (
                <li key={item.label}>
                  <a href={item.href} onClick={() => setMobileOpen(false)} className="block py-2.5 text-xs font-bold tracking-widest uppercase hover:text-cyber-purple">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 mb-1 text-[10px] font-bold tracking-[0.3em] uppercase text-cyber-purple">Recursos</p>
            <ul className="space-y-1">
              {resources.map((r) => (
                <li key={r.href}>
                  <a href={r.href} onClick={() => setMobileOpen(false)} className="block py-2.5">
                    <span className="block text-xs font-bold tracking-widest uppercase">{r.label}</span>
                    <span className="block text-xs text-slate-400 mt-0.5">{r.desc}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
