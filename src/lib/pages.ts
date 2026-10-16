import { getCollection } from 'astro:content';

/** Answer pages in one section ("linux", "apps", "games", "guides"), in display order. */
export async function pagesIn(section: string) {
  const all = await getCollection('pages', (p) => p.id.startsWith(`${section}/`));
  return all.sort((a, b) => a.data.order - b.data.order);
}
