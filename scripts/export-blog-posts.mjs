// Writes one simple Blogger post per app, built from the same content as the website pages.
// Usage: node scripts/export-blog-posts.mjs [outDir]   (default: ~/blog/posts)
// Each file is the HTML body to paste into Blogger's HTML view; the title and labels are in the top comment.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import yaml from 'js-yaml';
import { apps, playUrl } from '../src/data/apps.ts';

const SITE = 'https://userland.tech';
const outDir = process.argv[2] ?? join(homedir(), 'blog', 'posts');
mkdirSync(outDir, { recursive: true });

// Posts whose page covers more than one app, or whose title should differ from the page's.
const overrides = {
  userland: { title: 'How to Run Linux on Android' },
  gnuplot: { title: 'How to Run gnuplot on Android' },
  ogcarmen: { title: 'How to Play Where in the World Is Carmen Sandiego? on Android' },
  ogtrailplus: {
    title: 'How to Play The Oregon Trail Deluxe on Android',
    answer:
      'Install <strong>OG Trail+</strong> from Google Play. OG Trail+ runs The Oregon Trail Deluxe, the unmodified 1992 edition, on your Android phone or tablet, with an on-screen trackpad mouse and a keyboard you can show or hide.',
    steps: [
      { name: 'Install OG Trail+ from Google Play', text: 'Search Google Play for OG Trail+ by UserLAnd Technologies.' },
      { name: 'Open it once with internet', text: 'The first launch loads the game from the Internet Archive. After that it can play offline.' },
      { name: 'Play with the on-screen mouse', text: 'Drag on the on-screen trackpad to move the mouse and tap to click. Show or hide the keyboard when you need to type.' },
    ],
    features: [
      'The unmodified 1992 Deluxe edition',
      'An on-screen emulated mouse (trackpad-style drag; tap to click)',
      'An on-screen keyboard you can show or hide',
      'Plays offline after the first load',
    ],
  },
};

const SMALL = new Set(['a', 'an', 'and', 'as', 'at', 'for', 'in', 'of', 'on', 'or', 'to', 'with']);
const titleCase = (s) =>
  s.split(' ').map((w, i) => (i > 0 && SMALL.has(w) ? w : w.charAt(0).toUpperCase() + w.slice(1))).join(' ');

// Site-relative links become absolute so they work on blog.userland.tech, and references to the
// page's install buttons are dropped (posts link to Google Play at the end instead).
const absolute = (html) =>
  html
    .replace(/href="\//g, `href="${SITE}/`)
    .replace(/, or use the button on this page/g, '')
    .replace(/Use the buttons? on this page, or search/g, 'Search');

function readPage(id) {
  const text = readFileSync(join('src/content/pages', `${id}.md`), 'utf8');
  return yaml.load(text.split(/^---$/m)[1]);
}

const list = (tag, items) => `<${tag}>\n${items.map((i) => `  <li>${absolute(i)}</li>`).join('\n')}\n</${tag}>`;

const written = [];
for (const app of apps) {
  const page = { ...readPage(app.page), ...overrides[app.id] };
  const title = overrides[app.id]?.title ?? titleCase(page.title);
  const pageUrl = `${SITE}/${app.page}/`;
  const labels = ['Android', app.category === 'games' ? 'Games' : app.category === 'apps' ? 'Linux apps' : 'Linux', app.name];

  const parts = [
    `<!-- Title: ${title} -->`,
    `<!-- Labels: ${labels.join(', ')} -->`,
    '',
    `<p>${absolute(page.answer)}</p>`,
  ];
  if (page.steps?.length) {
    parts.push('', '<h3>How to do it</h3>', list('ol', page.steps.map((s) => `<strong>${s.name}.</strong> ${s.text}`)));
  }
  if (page.features?.length) parts.push('', '<h3>What you get</h3>', list('ul', page.features));
  if (page.requirements?.length) parts.push('', '<h3>What you need</h3>', list('ul', page.requirements));
  if (page.freeInUserland) parts.push('', '<h3>Prefer free?</h3>', `<p>${absolute(page.freeInUserland)}</p>`);
  if (app.disclaimer) parts.push('', `<p><em>${app.disclaimer}</em></p>`);
  parts.push(
    '',
    `<p><a href="${playUrl(app)}">Get ${app.name} on Google Play</a> (${app.price}) · <a href="${pageUrl}">Full guide and FAQ on userland.tech</a></p>`,
    '',
  );

  const file = `${app.page.split('/')[1]}${app.id === 'ogtrailplus' ? '-deluxe' : ''}.html`;
  writeFileSync(join(outDir, file), parts.join('\n'));
  written.push(`${file}\t${title}`);
}

writeFileSync(join(outDir, 'INDEX.txt'), written.join('\n') + '\n');
console.log(`${written.length} posts written to ${outDir}`);
console.log(written.join('\n'));
