import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Published to GitHub Pages at the root of kwts13.github.io (used for RSS + sitemap).
  site: 'https://kwts13.github.io',
  integrations: [sitemap()],
  devToolbar: { enabled: false },
  markdown: { shikiConfig: { themes: { light: 'github-light', dark: 'github-dark-dimmed' }, defaultColor: false } },
});
