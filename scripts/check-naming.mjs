// Post-build check of the game-naming rule across every built page.
// Allowed: "OG Trail runs The Oregon Trail on Android". Not allowed: "OG Trail is The Oregon Trail",
// or a page whose <title>/<h1> is just the original game title.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const games = {
  'OG Trail\\+?': ['The Oregon Trail', 'Oregon Trail'],
  'OG Carmen': ['Carmen Sandiego', 'Where in the World Is Carmen Sandiego\\?'],
  'OG Munchers': ['Number Munchers'],
  'Z-Machine': ['Zork'],
  'OG Quest': ["King's Quest", "King's Quest I", 'Quest for the Crown'],
  'OG Shooter': ['Doom', 'Wolfenstein 3D'],
  'OG Fighter': ['Street Fighter II', 'Street Fighter', 'Mortal Kombat II', 'Mortal Kombat'],
};
const originals = Object.values(games).flat();

const files = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (name.endsWith('.html') || name.endsWith('.txt')) files.push(p);
  }
})('dist');

const problems = new Set();
for (const file of files) {
  const text = readFileSync(file, 'utf8').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
  for (const [app, titles] of Object.entries(games)) {
    for (const t of titles) {
      const claim = new RegExp(`\\b${app}\\s+(is|=|aka)\\s+(the\\s+)?${t}`, 'i');
      const m = text.match(claim);
      if (m) problems.add(`${file}: "${m[0]}"`);
    }
  }
  const html = readFileSync(file, 'utf8');
  for (const tag of ['title', 'h1']) {
    const m = html.match(new RegExp(`<${tag}[^>]*>([^<]*)</${tag}>`));
    if (!m) continue;
    const value = m[1].replace(/\s*\|\s*UserLAnd$/, '').trim();
    if (originals.some((t) => new RegExp(`^${t}$`, 'i').test(value))) problems.add(`${file}: <${tag}> is the bare game title "${value}"`);
  }
}

if (problems.size) {
  console.error('Game naming rule violations:\n' + [...problems].join('\n'));
  process.exit(1);
}
console.log(`naming check: ${files.length} files OK`);
