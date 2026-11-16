import React, { useEffect, useState } from 'react';
import Results from './Results';
import Manifesto from './Manifesto';
import Automations from './Automations';
import Integrations from './Integrations';
import Services from './Services';
import Soluciones from './Soluciones';
import Process from './Process';
import About from './About';
import PressHome from './PressHome';
import HomeFAQ from './HomeFAQ';
import Contact from './Contact';

const SECTIONS: React.FC[] = [
  Results,
  Manifesto,
  Automations,
  Integrations,
  Services,
  Soluciones,
  Process,
  About,
  PressHome,
  HomeFAQ,
  Contact,
];

const scheduleNext = (cb: () => void): (() => void) => {
  if (typeof window.requestIdleCallback === 'function') {
    const id = window.requestIdleCallback(cb, { timeout: 500 });
    return () => window.cancelIdleCallback(id);
  }
  const id = window.setTimeout(cb, 16);
  return () => window.clearTimeout(id);
};

// Monta las secciones de una en una (una tarea corta por sección) para no bloquear
// el hilo principal con un único render enorme en móviles.
// `renderAll`: el prerender del build pinta todas las secciones de golpe (HTML
// estático para buscadores e IAs); en el navegador se montan de una en una.
const HomeBelowFold: React.FC<{ onReady?: () => void; renderAll?: boolean }> = ({ onReady, renderAll = false }) => {
  const [count, setCount] = useState(() =>
    renderAll || (typeof window !== 'undefined' && window.location.hash.length > 1) ? SECTIONS.length : 1,
  );
  const done = count >= SECTIONS.length;

  useEffect(() => {
    if (done) return;
    return scheduleNext(() => setCount((c) => c + 1));
  }, [count, done]);

  useEffect(() => {
    if (!done) return;
    onReady?.();
    // Si se entra con un ancla (/#como-funciona), saltar a ella cuando ya existe.
    const { hash } = window.location;
    if (hash) document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
  }, [done, onReady]);

  return (
    <>
      {SECTIONS.slice(0, count).map((Section, i) => (
        <Section key={i} />
      ))}
    </>
  );
};

export default HomeBelowFold;
