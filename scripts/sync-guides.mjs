// Keeps each blog guide's HTML shell (title, meta, dates and JSON-LD) in sync
// with its data file in lib/guides/*.ts. Runs before the AEO/GEO optimizer.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const ROOT = path.resolve(import.meta.dirname, '..');
const GUIDES_DIR = path.join(ROOT, 'lib', 'guides');
const { default: diagrams } = await import(pathToFileURL(path.join(ROOT, 'lib', 'guideDiagrams.ts')).href);

const attr = (value) =>
  String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const setMeta = (html, selector, value) => {
  const re = new RegExp(`(<meta\\s+${selector}\\s+content=")[^"]*(")`, 'i');
  if (!re.test(html)) throw new Error(`Falta <meta ${selector}>`);
  return html.replace(re, `$1${attr(value)}$2`);
};

const isoDate = (value) => (value.length === 10 ? `${value}T00:00:00+01:00` : value);

let synced = 0;
for (const file of fs.readdirSync(GUIDES_DIR).filter((f) => f.endsWith('.ts')).sort()) {
  const { default: guide } = await import(pathToFileURL(path.join(GUIDES_DIR, file)).href);
  const htmlPath = path.join(ROOT, 'blog', guide.slug, 'index.html');
  if (!fs.existsSync(htmlPath)) throw new Error(`No existe ${htmlPath} para la guía ${file}`);
  let html = fs.readFileSync(htmlPath, 'utf8');

  if (!html.includes(`data-page="${guide.key}"`)) {
    throw new Error(`${htmlPath} no usa data-page="${guide.key}"`);
  }

  const fullTitle = `${guide.seoTitle} | KAIRAS`;
  html = html.replace(/<title>[^<]*<\/title>/i, `<title>${attr(fullTitle)}</title>`);
  html = setMeta(html, 'name="description"', guide.description);
  html = setMeta(html, 'property="og:title"', guide.title);
  html = setMeta(html, 'property="og:description"', guide.description);
  html = setMeta(html, 'name="twitter:title"', guide.seoTitle);
  html = setMeta(html, 'name="twitter:description"', guide.description);
  html = setMeta(html, 'property="article:published_time"', guide.published);

  const diagram = diagrams[guide.slug];
  const imageUrl = diagram ? `https://kairas.es/blog/diagramas/${guide.slug}.png` : null;
  if (imageUrl) {
    if (!fs.existsSync(path.join(ROOT, 'public', 'blog', 'diagramas', `${guide.slug}.png`))) {
      throw new Error(`Falta el diagrama de ${guide.slug}: ejecuta npm run diagrams`);
    }
    const alt = `Diagrama: ${diagram.title}`;
    html = setMeta(html, 'property="og:image"', imageUrl);
    html = setMeta(html, 'name="twitter:image"', imageUrl);
    html = setMeta(html, 'property="og:image:alt"', alt);
    html = setMeta(html, 'name="twitter:image:alt"', alt);
    if (!/<meta\s+property="og:image:width"/i.test(html)) {
      html = html.replace(
        /(<meta\s+property="og:image"[^>]*\/>)/i,
        '$1\n    <meta property="og:image:width" content="1200" />\n    <meta property="og:image:height" content="675" />',
      );
    }
  }

  const modified = isoDate(guide.updated);
  if (/<meta\s+property="article:modified_time"/i.test(html)) {
    html = setMeta(html, 'property="article:modified_time"', modified);
  } else {
    html = html.replace(
      /(<meta\s+property="article:published_time"[^>]*\/>)/i,
      `$1\n    <meta property="article:modified_time" content="${modified}" />`,
    );
  }

  const ldMatch = html.match(/(<script type="application\/ld\+json">\s*)([\s\S]*?)(\s*<\/script>)/i);
  if (!ldMatch) throw new Error(`Sin JSON-LD en ${htmlPath}`);
  const data = JSON.parse(ldMatch[2]);
  const graph = data['@graph'] ?? [data];
  const canonical = `https://kairas.es/blog/${guide.slug}/`;
  const post = graph.find((node) => [].concat(node['@type']).includes('BlogPosting'));
  if (!post) throw new Error(`Sin BlogPosting en ${htmlPath}`);
  Object.assign(post, {
    headline: guide.title,
    description: guide.description,
    datePublished: guide.published,
    dateModified: modified,
    keywords: guide.keywords,
    articleSection: 'Guías',
    ...(imageUrl
      ? { image: { '@type': 'ImageObject', url: imageUrl, width: 1200, height: 675, caption: diagram.caption } }
      : {}),
    wordCount: `${guide.answer} ${guide.body} ${guide.faq.map((f) => `${f.q} ${f.a}`).join(' ')}`.split(/\s+/).length,
  });
  const withoutFaq = graph.filter((node) => ![].concat(node['@type']).includes('FAQPage'));
  if (guide.faq.length) {
    withoutFaq.push({
      '@type': 'FAQPage',
      '@id': `${canonical}#faq`,
      mainEntity: guide.faq.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    });
  }
  const nextLd = JSON.stringify({ '@context': 'https://schema.org', '@graph': withoutFaq });
  html = html.replace(ldMatch[0], `${ldMatch[1]}${nextLd}${ldMatch[3]}`);

  // Lightweight no-JS fallback inside #root (the prerender replaces it with the full article).
  html = html.replace(
    /(<div id="root" data-page="[^"]+">)[\s\S]*?(<\/div>\s*<script type="module")/i,
    `$1<main id="main-content" style="background:#0d0d12;color:#fff;font-family:'Plus Jakarta Sans',sans-serif;padding:6rem 1.5rem 4rem"><article style="max-width:42rem;margin:0 auto"><h1 style="font-size:clamp(1.9rem,5vw,2.8rem);font-weight:900;line-height:1.05;letter-spacing:0;margin:0 0 1rem">${attr(guide.title)}</h1><p style="color:#94a3b8;line-height:1.8">${attr(guide.answer)}</p></article></main>$2`,
  );

  fs.writeFileSync(htmlPath, html, 'utf8');
  synced += 1;
}

console.log(`Synced ${synced} blog guides.`);
