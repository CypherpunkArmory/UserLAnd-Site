// schema.org JSON-LD builders. Search engines and LLM crawlers read these to understand each page.
import { playUrl, type App } from '../data/apps';

export const SITE = 'https://userland.tech';
export const ORG = {
  '@type': 'Organization',
  '@id': `${SITE}/#org`,
  name: 'UserLAnd Technologies',
  url: `${SITE}/`,
  logo: `${SITE}/userland-logo.png`,
  sameAs: [
    'https://github.com/CypherpunkArmory',
    'https://twitter.com/userlandtech',
    'https://play.google.com/store/apps/developer?id=UserLAnd+Technologies',
  ],
};

export function softwareApp(app: App) {
  return {
    '@type': app.category === 'games' ? ['SoftwareApplication', 'VideoGame'] : 'SoftwareApplication',
    name: app.name,
    description: app.blurb,
    operatingSystem: 'Android',
    applicationCategory: app.playCategory,
    installUrl: playUrl(app),
    downloadUrl: playUrl(app),
    image: `${SITE}/icons/${app.playId}.png`,
    publisher: { '@id': ORG['@id'] },
    offers: { '@type': 'Offer', price: app.priceValue.toFixed(2), priceCurrency: 'USD', url: playUrl(app) },
    ...(app.category === 'games' ? { gamePlatform: 'Android' } : {}),
  };
}

export function howTo(name: string, description: string, steps: { name: string; text: string }[], url: string) {
  return {
    '@type': 'HowTo',
    name,
    description,
    url,
    step: steps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text })),
  };
}

export function faqPage(faq: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: `${SITE}${c.path}` })),
  };
}

export function itemList(list: App[]) {
  return {
    '@type': 'ItemList',
    itemListElement: list.map((a, i) => ({ '@type': 'ListItem', position: i + 1, url: `${SITE}/${a.page}/`, name: a.name })),
  };
}

