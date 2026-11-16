import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// En producción el hero llega prerenderizado (scripts/prerender.mjs): se hidrata
// en lugar de volver a pintarlo, así el LCP es el HTML inicial.
if (rootElement.dataset.prerendered === 'true') {
  ReactDOM.hydrateRoot(rootElement, app);
} else {
  ReactDOM.createRoot(rootElement).render(app);
}
