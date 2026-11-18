// Renders the flow diagram of each blog guide (lib/guideDiagrams.ts) to
// public/blog/diagramas/<slug>.webp (in-page) and .png (og:image).
// Run manually with `npm run diagrams` and commit the output: text rendering
// depends on system fonts, so it is not part of the Vercel build.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import sharp from 'sharp';

const ROOT = path.resolve(import.meta.dirname, '..');
const OUT = path.join(ROOT, 'public', 'blog', 'diagramas');
const { default: diagrams } = await import(pathToFileURL(path.join(ROOT, 'lib', 'guideDiagrams.ts')).href);

const W = 1200;
const H = 675;
const FONT = "Arial, 'Segoe UI', Helvetica, sans-serif";
const KIND = {
  regla: { label: 'Automático', color: '#94A3B8' },
  ia: { label: 'IA', color: '#8B5CF6' },
  persona: { label: 'Persona', color: '#F8FAFC' },
};

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const wrap = (text, max) => {
  const lines = [];
  let line = '';
  for (const word of String(text).split(/\s+/)) {
    if (line && (line + ' ' + word).length > max) {
      lines.push(line);
      line = word;
    } else {
      line = line ? `${line} ${word}` : word;
    }
  }
  if (line) lines.push(line);
  return lines;
};

const tspans = (lines, x, lineHeight) =>
  lines.map((l, i) => `<tspan x="${x}" dy="${i === 0 ? 0 : lineHeight}">${esc(l)}</tspan>`).join('');

const render = (d) => {
  const cardW = 250;
  const gap = 26;
  const left = (W - (cardW * 4 + gap * 3)) / 2;
  const top = 240;
  const cardH = 300;
  const titleLines = wrap(d.title, 38);

  const cards = d.steps
    .map((s, i) => {
      const x = left + i * (cardW + gap);
      const k = KIND[s.k];
      const label = wrap(s.t, 13).slice(0, 2);
      const detail = wrap(s.d, 21).slice(0, 3);
      const detailY = top + 112 + (label.length - 1) * 32 + 38;
      const arrow =
        i < d.steps.length - 1
          ? `<path d="M${x + cardW + 5} ${top + cardH / 2} h${gap - 12}" stroke="#8B5CF6" stroke-width="3"/><path d="M${x + cardW + gap - 9} ${top + cardH / 2 - 7} l8 7 l-8 7" fill="none" stroke="#8B5CF6" stroke-width="3"/>`
          : '';
      return `
  <rect x="${x}" y="${top}" width="${cardW}" height="${cardH}" rx="22" fill="#16161F" stroke="#2A2A38" stroke-width="2"/>
  <rect x="${x + 22}" y="${top}" width="${cardW - 44}" height="4" rx="2" fill="${k.color}"/>
  <circle cx="${x + 38}" cy="${top + 50}" r="18" fill="none" stroke="#8B5CF6" stroke-width="2"/>
  <text x="${x + 38}" y="${top + 57}" text-anchor="middle" font-family="${FONT}" font-size="19" font-weight="700" fill="#C4B5FD">${i + 1}</text>
  <text x="${x + 22}" y="${top + 112}" font-family="${FONT}" font-size="27" font-weight="700" fill="#FFFFFF">${tspans(label, x + 22, 32)}</text>
  <text x="${x + 22}" y="${detailY}" font-family="${FONT}" font-size="19" fill="#CBD5E1">${tspans(detail, x + 22, 26)}</text>
  <rect x="${x + 22}" y="${top + cardH - 50}" width="${k.label.length * 9 + 30}" height="30" rx="15" fill="none" stroke="${k.color}" stroke-width="1.5"/>
  <text x="${x + 36}" y="${top + cardH - 29}" font-family="${FONT}" font-size="15" font-weight="700" fill="${k.color}">${k.label}</text>
  ${arrow}`;
    })
    .join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <radialGradient id="glow" cx="85%" cy="0%" r="70%">
      <stop offset="0%" stop-color="#4F46E5" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#0D0D12" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="#0D0D12"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <text x="${left}" y="78" font-family="${FONT}" font-size="17" font-weight="700" letter-spacing="5" fill="#8B5CF6">KAIRAS · GUÍA</text>
  <text x="${left}" y="${titleLines.length > 1 ? 136 : 150}" font-family="${FONT}" font-size="46" font-weight="700" fill="#FFFFFF">${tspans(titleLines, left, 54)}</text>
  ${cards}
  <text x="${left}" y="${H - 42}" font-family="${FONT}" font-size="17" fill="#94A3B8">Quién hace cada paso:  <tspan fill="#94A3B8" font-weight="700">Automático</tspan>  ·  <tspan fill="#A78BFA" font-weight="700">IA</tspan>  ·  <tspan fill="#F8FAFC" font-weight="700">Persona</tspan></text>
  <text x="${W - left}" y="${H - 42}" text-anchor="end" font-family="${FONT}" font-size="19" font-weight="700" fill="#FFFFFF">kairas.es</text>
</svg>`;
};

fs.mkdirSync(OUT, { recursive: true });
let count = 0;
for (const [slug, d] of Object.entries(diagrams)) {
  if (d.steps.length !== 4) throw new Error(`${slug}: el diagrama debe tener 4 pasos`);
  const svg = Buffer.from(render(d));
  await sharp(svg).webp({ quality: 86 }).toFile(path.join(OUT, `${slug}.webp`));
  await sharp(svg).png({ compressionLevel: 9, palette: true }).toFile(path.join(OUT, `${slug}.png`));
  count += 1;
}
console.log(`Rendered ${count} guide diagrams to public/blog/diagramas/.`);
