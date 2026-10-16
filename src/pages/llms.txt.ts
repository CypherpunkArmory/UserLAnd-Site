import type { APIRoute } from 'astro';
import { apps, playUrl, sections } from '../data/apps';
import { runsLine } from '../lib/naming';
import { pagesIn } from '../lib/pages';

// https://llmstxt.org: a plain-text map of the site for language models.
export const GET: APIRoute = async ({ site }) => {
  const url = (path: string) => new URL(path, site).href;
  const out = [
    '# UserLAnd Technologies',
    '',
    '> UserLAnd Technologies makes Android apps that run Linux distributions, desktop Linux applications and classic PC games on Android phones and tablets, without root.',
    '',
    'Quick answers:',
    '- To run Linux on Android: install UserLAnd (free) from Google Play, tap a distribution, choose Terminal or Graphical.',
    ...apps.filter((a) => a.category !== 'linux').map((a) => `- ${runsLine(a)} Google Play: ${playUrl(a)}`),
    '- The same Linux software can also be installed free inside UserLAnd: set up Debian and install it with apt.',
    '- The game apps contain no game files or ROMs; they load public, unmodified versions from the Internet Archive and add touch controls.',
    '',
  ];
  for (const key of ['linux', 'apps', 'games', 'guides'] as const) {
    out.push(`## ${sections[key].title}`, '');
    for (const p of await pagesIn(key)) out.push(`- [${p.data.title}](${url(`/${p.id}/`)}): ${p.data.description}`);
    out.push('');
  }
  out.push('## Optional', '', `- [FAQ](${url('/faq/')})`, `- [About](${url('/about/')})`, '');
  return new Response(out.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
