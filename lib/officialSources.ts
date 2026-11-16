// Documentación oficial que respalda lo que explica cada post. Se elige por
// coincidencia con el título y las etiquetas del artículo. Solo URLs oficiales
// comprobadas (respuesta 200) a 2026-11-16; revisar si alguna cambia.

export type OfficialSource = { label: string; href: string };

const SOURCES: { match: RegExp; sources: OfficialSource[] }[] = [
  { match: /whatsapp/i, sources: [
    { label: 'WhatsApp Business App (Meta)', href: 'https://business.whatsapp.com/products/business-app' },
    { label: 'WhatsApp Business Platform / API (Meta)', href: 'https://business.whatsapp.com/products/business-platform' },
    { label: 'Documentación para desarrolladores de WhatsApp', href: 'https://developers.facebook.com/docs/whatsapp/' },
  ] },
  { match: /\bn8n\b/i, sources: [
    { label: 'Documentación oficial de n8n', href: 'https://docs.n8n.io/' },
    { label: 'n8n: IA y agentes', href: 'https://docs.n8n.io/advanced-ai/' },
  ] },
  { match: /\bmake\b/i, sources: [{ label: 'Centro de ayuda de Make', href: 'https://help.make.com/' }] },
  { match: /zapier/i, sources: [{ label: 'Centro de ayuda de Zapier', href: 'https://help.zapier.com/' }] },
  { match: /power automate|power platform|microsoft|copilot/i, sources: [
    { label: 'Documentación de Power Automate (Microsoft Learn)', href: 'https://learn.microsoft.com/power-automate/' },
    { label: 'Documentación de Power Platform (Microsoft Learn)', href: 'https://learn.microsoft.com/power-platform/' },
    { label: 'Documentación de Copilot Studio (Microsoft Learn)', href: 'https://learn.microsoft.com/microsoft-copilot-studio/' },
  ] },
  { match: /hubspot/i, sources: [{ label: 'Base de conocimiento de HubSpot', href: 'https://knowledge.hubspot.com/' }] },
  { match: /tidio/i, sources: [{ label: 'Centro de ayuda de Tidio', href: 'https://help.tidio.com/' }] },
  { match: /wordpress/i, sources: [{ label: 'Documentación oficial de WordPress', href: 'https://wordpress.org/documentation/' }] },
  { match: /google workspace|gmail|calendar|calendario/i, sources: [
    { label: 'Ayuda de Google Workspace', href: 'https://support.google.com/a/' },
    { label: 'Ayuda de Google Calendar', href: 'https://support.google.com/calendar/' },
  ] },
  { match: /excel|macro/i, sources: [{ label: 'Soporte oficial de Excel (Microsoft)', href: 'https://support.microsoft.com/es-es/excel' }] },
  { match: /kit digital|ayuda|subvenci/i, sources: [{ label: 'Kit Digital (Acelera pyme, Gobierno de España)', href: 'https://www.acelerapyme.gob.es/kit-digital' }] },
  { match: /factura|contab|cobro/i, sources: [{ label: 'Sede electrónica de la Agencia Tributaria', href: 'https://sede.agenciatributaria.gob.es/' }] },
  { match: /youtube/i, sources: [{ label: 'Ayuda de YouTube', href: 'https://support.google.com/youtube/' }] },
  { match: /seguridad|datos|rgpd|privacidad|cl[ií]nica|paciente|documental|ia local/i, sources: [
    { label: 'Agencia Española de Protección de Datos (AEPD)', href: 'https://www.aepd.es/' },
  ] },
  { match: /\bia\b|inteligencia artificial|agente|chatbot|asistente|generativa/i, sources: [
    { label: 'Reglamento europeo de Inteligencia Artificial (UE 2024/1689)', href: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
  ] },
];

/** Devuelve hasta 4 fuentes oficiales pertinentes para un artículo, sin duplicados. */
export function officialSourcesFor(text: string, max = 4): OfficialSource[] {
  const out: OfficialSource[] = [];
  for (const { match, sources } of SOURCES) {
    if (!match.test(text)) continue;
    for (const s of sources) if (!out.some((o) => o.href === s.href)) out.push(s);
  }
  return out.slice(0, max);
}
