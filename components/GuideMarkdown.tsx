import React, { type ReactNode } from 'react';

// Minimal, dependency-free markdown renderer for blog guides.
// Supports: ## / ### headings, paragraphs, - lists, 1. lists, | tables |,
// > callouts, **bold** and [links](url). Output is identical on server and client.

const linkClass = 'text-cyber-purple underline decoration-cyber-purple/50 hover:text-white';
const h2Class = 'text-xl sm:text-2xl font-black uppercase tracking-normal text-white pt-4 scroll-mt-28';
const h3Class = 'text-lg font-bold text-white pt-2';
const listClass = 'space-y-2 pl-4 border-l border-cyber-purple/30';
const olClass = 'space-y-2 pl-6 list-decimal marker:text-cyber-purple';

export const slugifyHeading = (text: string) =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export const guideHeadings = (markdown: string) =>
  markdown
    .split('\n')
    .filter((line) => line.startsWith('## '))
    .map((line) => {
      const text = line.slice(3).trim();
      return { id: slugifyHeading(text), text };
    });

function inline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let i = 0;
  while ((match = pattern.exec(text))) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    if (match[1]) {
      nodes.push(<strong key={`${keyPrefix}-b${i}`} className="font-semibold text-white">{match[1]}</strong>);
    } else {
      const href = match[3];
      const external = /^https?:\/\//.test(href);
      nodes.push(
        <a
          key={`${keyPrefix}-a${i}`}
          href={href}
          className={linkClass}
          {...(external ? { target: '_blank', rel: 'noopener' } : {})}
        >
          {match[2]}
        </a>,
      );
    }
    last = match.index + match[0].length;
    i += 1;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

const splitRow = (line: string) =>
  line
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((cell) => cell.trim());

export const GuideMarkdown: React.FC<{ source: string }> = ({ source }) => {
  const lines = source.replace(/\r/g, '').split('\n');
  const blocks: ReactNode[] = [];
  let i = 0;
  let k = 0;

  while (i < lines.length) {
    const line = lines[i];
    const key = `blk${k++}`;

    if (!line.trim()) {
      i += 1;
      continue;
    }

    if (line.startsWith('## ')) {
      const text = line.slice(3).trim();
      blocks.push(<h2 key={key} id={slugifyHeading(text)} className={h2Class}>{text}</h2>);
      i += 1;
      continue;
    }

    if (line.startsWith('### ')) {
      blocks.push(<h3 key={key} className={h3Class}>{inline(line.slice(4).trim(), key)}</h3>);
      i += 1;
      continue;
    }

    if (line.startsWith('|')) {
      const rows: string[][] = [];
      while (i < lines.length && lines[i].startsWith('|')) {
        if (!/^\|[\s:|-]+\|?$/.test(lines[i].trim())) rows.push(splitRow(lines[i]));
        i += 1;
      }
      const [head, ...body] = rows;
      blocks.push(
        <div key={key} className="overflow-x-auto -mx-2 px-2">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                {head.map((cell, c) => (
                  <th key={c} scope="col" className="text-left align-bottom font-bold text-white border-b border-white/20 py-2 pr-4">
                    {inline(cell, `${key}h${c}`)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {body.map((row, r) => (
                <tr key={r} className="border-b border-white/10">
                  {row.map((cell, c) => (
                    <td key={c} className="align-top py-2 pr-4 text-slate-300">{inline(cell, `${key}r${r}c${c}`)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
      continue;
    }

    if (line.startsWith('> ')) {
      const parts: string[] = [];
      while (i < lines.length && lines[i].startsWith('> ')) {
        parts.push(lines[i].slice(2));
        i += 1;
      }
      blocks.push(
        <div key={key} className="border-l-4 border-cyber-purple bg-cyber-purple/10 rounded-r-xl px-5 py-4 text-slate-200">
          {inline(parts.join(' '), key)}
        </div>,
      );
      continue;
    }

    if (/^- /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^- /.test(lines[i])) {
        items.push(lines[i].slice(2));
        i += 1;
      }
      blocks.push(
        <ul key={key} className={listClass}>
          {items.map((item, n) => <li key={n}>{inline(item, `${key}-${n}`)}</li>)}
        </ul>,
      );
      continue;
    }

    if (/^\d+\. /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\. /.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\. /, ''));
        i += 1;
      }
      blocks.push(
        <ol key={key} className={olClass}>
          {items.map((item, n) => <li key={n}>{inline(item, `${key}-${n}`)}</li>)}
        </ol>,
      );
      continue;
    }

    const para: string[] = [];
    while (i < lines.length && lines[i].trim() && !/^(## |### |\||> |- |\d+\. )/.test(lines[i])) {
      para.push(lines[i].trim());
      i += 1;
    }
    blocks.push(<p key={key}>{inline(para.join(' '), key)}</p>);
  }

  return <>{blocks}</>;
};

export default GuideMarkdown;
