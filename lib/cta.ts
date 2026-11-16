// Ruta única de conversión (WhatsApp) + eventos de medición (GTM dataLayer).
// Recepción SIEMPRE humana: este enlace no inicia ningún bot.

export const WHATSAPP_NUMBER = '34622262076';

const DEFAULT_MESSAGE = 'Hola, Carlota. Quiero revisar una parte de la operativa de mi negocio.';

type EventParams = Record<string, string | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function pushEvent(event: string, params: EventParams = {}): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  const clean: Record<string, string> = {};
  Object.entries(params).forEach(([k, v]) => {
    if (v) clean[k] = v;
  });
  window.dataLayer.push({ event, ...clean });
}

// Identificador de origen legible dentro del propio mensaje: permite saber
// desde qué página/campaña llegó la conversación aunque WhatsApp no acepte UTM.
//
// El href se genera SIN leer la URL (igual en el prerender y en el navegador):
// si dependiera de window, la hidratación conservaría el href del servidor y se
// perderían los UTM. La campaña se añade en el momento del clic (ver abajo).
const ORIGIN_PREFIX = '(Vengo de la web: ';

export function whatsappUrl(page: string, message: string = DEFAULT_MESSAGE): string {
  const text = `${message} ${ORIGIN_PREFIX}${page})`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function withCampaign(href: string): string {
  const utm = new URLSearchParams(window.location.search);
  const extra = [utm.get('utm_source'), utm.get('utm_campaign')].filter(Boolean);
  if (extra.length === 0) return href;
  try {
    const url = new URL(href);
    const text = url.searchParams.get('text') ?? '';
    const start = text.lastIndexOf(ORIGIN_PREFIX);
    if (start < 0 || text.includes(extra.join(' · '))) return href;
    const end = text.indexOf(')', start);
    const label = text.slice(start + ORIGIN_PREFIX.length, end < 0 ? undefined : end);
    url.searchParams.set('text', `${text.slice(0, start)}${ORIGIN_PREFIX}${[label, ...extra].join(' · ')})`);
    return url.toString();
  } catch {
    return href;
  }
}

// Un único listener para todos los enlaces de WhatsApp (cualquier componente):
// añade utm_source / utm_campaign al mensaje justo antes de abrir WhatsApp.
if (typeof document !== 'undefined' && typeof document.addEventListener === 'function') {
  document.addEventListener(
    'click',
    (event) => {
      const link = (event.target as Element | null)?.closest?.('a[href^="https://wa.me/"]') as HTMLAnchorElement | null;
      if (link) link.href = withCampaign(link.href);
    },
    { capture: true },
  );
}

export function trackWhatsappClick(page: string, cta: string): void {
  const utm = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
  pushEvent('click_whatsapp', {
    page,
    cta,
    utm_source: utm?.get('utm_source') ?? undefined,
    utm_campaign: utm?.get('utm_campaign') ?? undefined,
  });
}
