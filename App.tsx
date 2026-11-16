import React, { Suspense, lazy, useCallback, useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { whatsappUrl, trackWhatsappClick } from './lib/cta';

// Todo lo que queda bajo el hero se carga en un chunk aparte (incluida la librería
// de animación), para que el primer render en móvil solo necesite Navbar + Hero.
const loadBelowFold = () => import('./components/HomeBelowFold');
const HomeBelowFold = lazy(loadBelowFold);
const Footer = lazy(() => import('./components/Footer'));

const App: React.FC = () => {
  const [belowFoldReady, setBelowFoldReady] = useState(false);
  const handleBelowFoldReady = useCallback(() => setBelowFoldReady(true), []);
  // Montar el bloque inferior cuando el navegador quede libre tras pintar el hero
  // (o antes si hay un ancla en la URL o la persona empieza a hacer scroll).
  // Empieza en false también en el cliente para que la hidratación coincida con el prerender.
  const [mountBelowFold, setMountBelowFold] = useState(false);

  useEffect(() => {
    if (mountBelowFold) return;
    void loadBelowFold(); // descarga el chunk en paralelo; se monta al quedar libre
    const mount = () => setMountBelowFold(true);
    if (window.location.hash.length > 1) {
      mount();
      return;
    }
    const idle = window.requestIdleCallback
      ? window.requestIdleCallback(mount, { timeout: 2000 })
      : window.setTimeout(mount, 200);
    window.addEventListener('scroll', mount, { once: true, passive: true });
    window.addEventListener('touchstart', mount, { once: true, passive: true });
    return () => {
      if (window.cancelIdleCallback) window.cancelIdleCallback(idle);
      else window.clearTimeout(idle);
      window.removeEventListener('scroll', mount);
      window.removeEventListener('touchstart', mount);
    };
  }, [mountBelowFold]);

  // El bloque de texto estático (para rastreadores sin JS) sobra cuando ya está la página real.
  useEffect(() => {
    if (belowFoldReady) document.getElementById('home-seo-fallback')?.remove();
  }, [belowFoldReady]);

  useEffect(() => {
    const hiddenElements = document.querySelectorAll('.reveal:not(.active), .reveal-scale:not(.active)');
    const isMobileViewport = window.matchMedia('(max-width: 768px)').matches;
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isMobileViewport || isCoarsePointer || prefersReducedMotion) {
      hiddenElements.forEach((el) => el.classList.add('active'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [belowFoldReady]);

  return (
    <div className="relative min-h-[100svh]">
      {/* Background Effects */}
      <div className="hidden md:block fixed inset-0 grainy-overlay z-50 pointer-events-none"></div>
      <div className="fixed inset-0 mesh-gradient -z-10 transition-opacity duration-1000"></div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main id="main-content">
        <Hero />
        {mountBelowFold ? (
          <Suspense fallback={<div className="min-h-[100svh]" aria-hidden="true" />}>
            <HomeBelowFold onReady={handleBelowFoldReady} />
          </Suspense>
        ) : null}
      </main>

      {/* Footer */}
      {mountBelowFold && (
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      )}

      {/* Floating Action Button — WhatsApp, recepción humana */}
      <div className="fixed bottom-6 right-6 z-[110]">
        <a
          href={whatsappUrl('home')}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsappClick('home', 'fab')}
          className="w-16 h-16 bg-white text-black rounded-full shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center group active:scale-95 transition-all"
          aria-label="Escribir por WhatsApp (te responde una persona)"
        >
          <MessageCircle size={28} />
        </a>
      </div>
    </div>
  );
};

export default App;
