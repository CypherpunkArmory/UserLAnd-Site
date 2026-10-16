// The one place that phrases how an app relates to the software or game it runs.
//
// Rule for game pages (from the owner): "OG Trail runs The Oregon Trail on Android" is fine.
// "OG Trail is The Oregon Trail", or calling the app by the original title, is not.
// assertTitleSafe() fails the build if a page title breaks that rule.

import type { App } from '../data/apps';

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** "OG Trail runs The Oregon Trail (1990 MS-DOS edition) on Android." */
export function runsLine(app: App): string {
  return `${app.name} runs ${app.runs} on Android.`;
}

/** Card subtitle: "Runs The Oregon Trail". */
export function runsShortLine(app: App): string {
  return `Runs ${app.runsShort}`;
}

export function assertTitleSafe(title: string, related: App[]): void {
  const t = title.trim().toLowerCase();
  for (const app of related) {
    if (app.category !== 'games') continue;
    const original = app.runsShort.toLowerCase();
    if (t === original || t === app.runs.toLowerCase()) {
      throw new Error(`Title "${title}" is just the original game title. Phrase it as "How to play ${app.runsShort} on Android".`);
    }
    const claim = new RegExp(`${escape(app.name)}\\s+(is|=)\\s+${escape(app.runsShort)}`, 'i');
    if (claim.test(title)) {
      throw new Error(`Title "${title}" says ${app.name} *is* ${app.runsShort}. Say it *runs* it instead.`);
    }
  }
}
