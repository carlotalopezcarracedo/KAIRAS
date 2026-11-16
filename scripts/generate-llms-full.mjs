import fs from 'node:fs';
import path from 'node:path';

// Genera public/llms-full.txt: versión completa de llms.txt para agentes que
// prefieren un único archivo con todo el contexto (convención de llmstxt.org).
// Se construye con los archivos que ya se mantienen a mano, así no se desincroniza.

const ROOT = process.cwd();
const PUBLIC = path.join(ROOT, 'public');
const SOURCES = [
  'llms.txt',
  'respuestas.md',
  'answers.md',
  'pricing.md',
  'okf/company.md',
  'okf/services.md',
  'okf/faq.md',
  'okf/blog-clusters.md',
];

const sections = SOURCES.filter((file) => fs.existsSync(path.join(PUBLIC, file))).map((file) => {
  const body = fs.readFileSync(path.join(PUBLIC, file), 'utf8').trim()
    // Bajar un nivel los títulos de cada archivo para que solo haya un H1.
    .replace(/^(#{1,5}) /gm, '#$1 ');
  return `<!-- Source: https://kairas.es/${file} -->\n\n${body}`;
});

const today = new Date().toISOString().slice(0, 10);
const output = [
  '# KAIRAS: full context for AI systems',
  '',
  '> Complete reference about KAIRAS, automation and applied AI for service SMEs in Galicia and Spain. Short version: [llms.txt](https://kairas.es/llms.txt).',
  '',
  `Generated: ${today}`,
  '',
  ...sections.flatMap((section) => [section, '', '---', '']),
].join('\n');

fs.writeFileSync(path.join(PUBLIC, 'llms-full.txt'), output, 'utf8');
console.log(`Generated public/llms-full.txt from ${sections.length} sources (${output.length} chars).`);
