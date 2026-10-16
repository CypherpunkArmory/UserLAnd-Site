import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://userland.tech',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
