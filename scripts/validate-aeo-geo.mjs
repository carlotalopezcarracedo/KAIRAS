import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const IS_DIST = process.argv.includes('--dist');
const TARGET_ROOT = IS_DIST ? path.join(ROOT, 'dist') : ROOT;
const SITE_ORIGIN = 'https://kairas.es';
const EXCLUDED_DIRS = new Set(['.git', '.claude', 'node_modules', 'dist']);
const SOURCE_STATIC_FILES = [
  'public/llms.txt',
  'public/answers.md',
  'public/pricing.md',
  'public/okf/index.md',
  'public/okf/company.md',
  'public/okf/services.md',
  'public/okf/blog-clusters.md',
  'public/okf/faq.md'
];
const DIST_STATIC_FILES = SOURCE_STATIC_FILES.map((file) => file.replace(/^public\//, ''));
const REQUIRED_STATIC_FILES = TARGET_ROOT.endsWith(`${path.sep}dist`) ? DIST_STATIC_FILES : SOURCE_STATIC_FILES;

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.isDirectory() && EXCLUDED_DIRS.has(entry.name)) {
      continue;
    }

    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(fullPath));
      continue;
    }

    if (entry.isFile() && entry.name === 'index.html') {
      files.push(fullPath);
    }
  }

  return files;
}

function extract(html, pattern) {
  const match = html.match(pattern);
  return match ? match[1].trim() : '';
}

function isIndexable(html, canonical) {
  const robots = extract(html, /<meta\s+name=["']robots["']\s+content=["']([^"']+)["']/i).toLowerCase();
  return canonical.startsWith(SITE_ORIGIN) && !robots.includes('noindex') && (!robots || robots.includes('index'));
}

function jsonLdGraphs(html, filePath) {
  const graphs = [];
  const regex = /<script\b(?=[^>]*type=["']application\/ld\+json["'])[^>]*>([\s\S]*?)<\/script>/gi;
  let match;

  while ((match = regex.exec(html)) !== null) {
    const parsed = JSON.parse(match[1]);
    if (Array.isArray(parsed['@graph'])) {
      graphs.push(parsed['@graph']);
    } else {
      graphs.push([parsed]);
    }
  }

  if (graphs.length === 0) {
    throw new Error(`Missing JSON-LD in ${path.relative(ROOT, filePath)}`);
  }

  return graphs;
}

function hasType(graph, expectedType) {
  return graph.some((node) => {
    const type = node?.['@type'];
    return Array.isArray(type) ? type.includes(expectedType) : type === expectedType;
  });
}

function canonicalPath(canonical) {
  try {
    return new URL(canonical).pathname;
  } catch {
    return '';
  }
}

function visibleText(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&(?:[a-z]+|#\d+|#x[\da-f]+);/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function wordCount(html) {
  const text = visibleText(html);
  return text ? text.split(/\s+/).length : 0;
}

const errors = [];
let indexablePages = 0;
let pagesWithBreadcrumb = 0;
let pagesWithDiscoveryLinks = 0;
let pagesWithOrganization = 0;
let pagesWithWebSite = 0;
let prerenderedPages = 0;
let renderedBlogPosts = 0;
let internalLinksChecked = 0;
const canonicalOwners = new Map();

function internalTargetExists(href) {
  const rawPath = href.split('#')[0].split('?')[0];
  if (!rawPath || rawPath === '/') return fs.existsSync(path.join(TARGET_ROOT, 'index.html'));

  let decodedPath;
  try {
    decodedPath = decodeURIComponent(rawPath);
  } catch {
    return false;
  }

  const relativePath = decodedPath.replace(/^\/+/, '');
  const exactTarget = path.join(TARGET_ROOT, relativePath);
  const indexTarget = path.join(TARGET_ROOT, relativePath, 'index.html');
  return fs.existsSync(exactTarget) || fs.existsSync(indexTarget);
}

for (const filePath of walk(TARGET_ROOT)) {
  const html = fs.readFileSync(filePath, 'utf8');
  const canonical = extract(html, /<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);

  if (!isIndexable(html, canonical)) {
    continue;
  }

  indexablePages += 1;
  const pathname = canonicalPath(canonical);

  if (canonicalOwners.has(canonical)) {
    errors.push(`Duplicate canonical ${canonical} in ${path.relative(ROOT, filePath)} and ${canonicalOwners.get(canonical)}`);
  } else {
    canonicalOwners.set(canonical, path.relative(ROOT, filePath));
  }

  if (!/<meta\s+property=["']og:image:alt["']/i.test(html)) {
    errors.push(`Missing og:image:alt in ${path.relative(ROOT, filePath)}`);
  }
  if (!/<meta\s+name=["']twitter:card["']/i.test(html)) {
    errors.push(`Missing Twitter card in ${path.relative(ROOT, filePath)}`);
  }

  if (IS_DIST && /<div\b(?=[^>]*\bid=["']root["'])(?=[^>]*\bdata-page=)[^>]*>/i.test(html)) {
    if (/\bdata-prerendered=["']true["']/i.test(html)) prerenderedPages += 1;
    else errors.push(`Client-only React page in ${path.relative(ROOT, filePath)}`);
  }

  if (IS_DIST && pathname.startsWith('/blog/') && pathname !== '/blog/') {
    const words = wordCount(html);
    if (words < 200) errors.push(`Thin rendered blog page (${words} words) in ${path.relative(ROOT, filePath)}`);
    if (/activa JavaScript/i.test(html)) errors.push(`JavaScript fallback remains in ${path.relative(ROOT, filePath)}`);
    if (!html.includes('href="/sobre-carlota/"')) errors.push(`Missing visible author link in ${path.relative(ROOT, filePath)}`);
    renderedBlogPosts += 1;
  }

  if (IS_DIST && pathname === '/blog/') {
    const linkedPosts = new Set([...html.matchAll(/href=["'](\/blog\/[^"'#?]+\/)["']/gi)].map((match) => match[1]));
    if (linkedPosts.size < 100) errors.push(`Blog index exposes only ${linkedPosts.size} post links in rendered HTML`);
  }

  if (IS_DIST) {
    const hrefs = [...html.matchAll(/\bhref=["']([^"']+)["']/gi)].map((match) => match[1]);
    for (const href of hrefs) {
      if (!href.startsWith('/') || href.startsWith('//') || href.startsWith('/#')) continue;
      internalLinksChecked += 1;
      if (!internalTargetExists(href)) {
        errors.push(`Broken internal link ${href} in ${path.relative(ROOT, filePath)}`);
      }
    }
  }

  if (
    html.includes(`${SITE_ORIGIN}/llms.txt`) &&
    html.includes(`${SITE_ORIGIN}/answers.md`) &&
    html.includes(`${SITE_ORIGIN}/okf/index.md`)
  ) {
    pagesWithDiscoveryLinks += 1;
  } else {
    errors.push(`Missing AEO discovery links in ${path.relative(ROOT, filePath)}`);
  }

  try {
    const graph = jsonLdGraphs(html, filePath).flat();

    if (hasType(graph, 'BreadcrumbList')) pagesWithBreadcrumb += 1;
    else errors.push(`Missing BreadcrumbList in ${path.relative(ROOT, filePath)}`);

    if (graph.some((node) => hasType([node], 'Organization') || hasType([node], 'ProfessionalService'))) {
      pagesWithOrganization += 1;
    } else {
      errors.push(`Missing Organization/ProfessionalService in ${path.relative(ROOT, filePath)}`);
    }

    if (hasType(graph, 'WebSite')) pagesWithWebSite += 1;
    else errors.push(`Missing WebSite in ${path.relative(ROOT, filePath)}`);

    const person = graph.find((node) => hasType([node], 'Person'));
    if (!person?.url || !Array.isArray(person?.sameAs) || person.sameAs.length === 0) {
      errors.push(`Incomplete Person entity in ${path.relative(ROOT, filePath)}`);
    }

    const organization = graph.find((node) => hasType([node], 'Organization'));
    if (!organization?.telephone || !Array.isArray(organization?.sameAs) || organization.sameAs.length === 0) {
      errors.push(`Incomplete Organization entity in ${path.relative(ROOT, filePath)}`);
    }

    if (pathname === '/sobre-carlota/' && !hasType(graph, 'ProfilePage')) {
      errors.push(`Missing ProfilePage schema in ${path.relative(ROOT, filePath)}`);
    }
  } catch (error) {
    errors.push(error.message);
  }
}

for (const file of REQUIRED_STATIC_FILES) {
  if (!fs.existsSync(path.join(TARGET_ROOT, file))) {
    errors.push(`Missing static AEO/GEO resource: ${file}`);
  }
}

const summary = {
  indexablePages,
  pagesWithBreadcrumb,
  pagesWithDiscoveryLinks,
  pagesWithOrganization,
  pagesWithWebSite,
  prerenderedPages,
  renderedBlogPosts,
  internalLinksChecked,
  staticResources: REQUIRED_STATIC_FILES.length,
  errors: errors.length
};

console.log(JSON.stringify(summary, null, 2));

if (errors.length > 0) {
  for (const error of errors.slice(0, 20)) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}
