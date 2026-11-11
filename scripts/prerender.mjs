import fs from 'node:fs';
import path from 'node:path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createServer } from 'vite';

const ROOT = process.cwd();
const DIST = path.join(ROOT, 'dist');

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(fullPath);
    return entry.isFile() && entry.name === 'index.html' ? [fullPath] : [];
  });
}

function rootBounds(html) {
  const openingMatch = /<div\b(?=[^>]*\bid=["']root["'])[^>]*>/i.exec(html);
  if (!openingMatch) return null;

  const openingStart = openingMatch.index;
  const openingEnd = openingStart + openingMatch[0].length;
  const tagPattern = /<div\b[^>]*>|<\/div\s*>/gi;
  tagPattern.lastIndex = openingEnd;
  let depth = 1;
  let tag;

  while ((tag = tagPattern.exec(html)) !== null) {
    depth += /^<\/div/i.test(tag[0]) ? -1 : 1;
    if (depth === 0) {
      return { openingStart, openingEnd, closingStart: tag.index, closingEnd: tagPattern.lastIndex };
    }
  }

  throw new Error('No se encontro el cierre de #root.');
}

function replaceRoot(html, markup) {
  const bounds = rootBounds(html);
  if (!bounds) return null;

  const opening = html.slice(bounds.openingStart, bounds.openingEnd);
  const pageMatch = opening.match(/\bdata-page=["']([^"']+)["']/i);
  if (!pageMatch) return null;

  const hydratedOpening = /\bdata-prerendered=/i.test(opening)
    ? opening.replace(/\bdata-prerendered=["'][^"']*["']/i, 'data-prerendered="true"')
    : opening.replace(/>$/, ' data-prerendered="true">');

  const nextHtml = [
    html.slice(0, bounds.openingStart),
    hydratedOpening,
    markup,
    html.slice(bounds.closingStart, bounds.closingEnd),
    html.slice(bounds.closingEnd),
  ].join('');

  return { pageName: pageMatch[1], html: nextHtml };
}

if (!fs.existsSync(DIST)) {
  throw new Error('No existe dist. Ejecuta Vite antes del prerender.');
}

const vite = await createServer({
  appType: 'custom',
  logLevel: 'error',
  server: { middlewareMode: true },
});

let rendered = 0;
let skipped = 0;

try {
  const { pageMap } = await vite.ssrLoadModule('/pages/entry.tsx');

  for (const filePath of walk(DIST)) {
    const html = fs.readFileSync(filePath, 'utf8');
    const root = rootBounds(html);
    if (!root) {
      skipped += 1;
      continue;
    }

    const opening = html.slice(root.openingStart, root.openingEnd);
    const pageName = opening.match(/\bdata-page=["']([^"']+)["']/i)?.[1];
    const loadPage = pageName ? pageMap[pageName] : null;
    if (!loadPage) {
      skipped += 1;
      continue;
    }

    const previousDocument = globalThis.document;
    globalThis.document = {
      getElementById: (id) => (id === 'root' ? { dataset: { page: pageName } } : null),
    };

    try {
      const { default: Page } = await loadPage();
      const markup = renderToString(React.createElement(Page));
      const result = replaceRoot(html, markup);
      if (!result) throw new Error(`No se pudo reemplazar #root en ${filePath}`);
      fs.writeFileSync(filePath, result.html, 'utf8');
      rendered += 1;
    } finally {
      if (previousDocument === undefined) delete globalThis.document;
      else globalThis.document = previousDocument;
    }
  }
} finally {
  await vite.close();
}

console.log(`Prerendered ${rendered} pages; skipped ${skipped} static pages.`);
