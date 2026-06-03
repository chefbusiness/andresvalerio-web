import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/postcss';

const SITE_URL = 'https://www.andresvalerio.com';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  vite: {
    css: {
      postcss: {
        plugins: [tailwindcss()],
      },
    },
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  // i18n eliminado: no hay contenido /en todavía y generaba un bucle de redirección
  // infinito en /en/. Reintroducir junto con las traducciones reales.
});
