import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/postcss';
import fs from 'node:fs';

const SITE_URL = 'https://www.andresvalerio.com';

/** Fechas REALES de cada pieza de contenido, para el `lastmod` del sitemap.
 *
 *  Antes se declaraba `lastmod: new Date()`, así que las 33 URLs decían haberse
 *  modificado en el instante del build. Es una señal de frescura falsa: cuando el
 *  `lastmod` no es fiable Google deja de tenerlo en cuenta en TODO el dominio, y
 *  eso penaliza justo donde más falta hace (dominio joven, piezas esperando
 *  indexación). Aquí solo se declara donde hay una fecha verificable en el
 *  frontmatter; el resto de páginas se quedan sin `lastmod`, que es opcional. */
function fechasDeContenido() {
  const mapa = new Map();

  for (const coleccion of ['blog', 'recetas']) {
    const carpeta = new URL(`./src/content/${coleccion}/`, import.meta.url);
    let ficheros = [];
    try {
      ficheros = fs.readdirSync(carpeta).filter((f) => f.endsWith('.md'));
    } catch {
      continue; // colección ausente: el sitemap sigue generándose igual
    }

    const fechas = [];
    for (const fichero of ficheros) {
      const crudo = fs.readFileSync(new URL(fichero, carpeta), 'utf8');
      const frontmatter = crudo.split(/^---\s*$/m)[1] ?? '';
      if (/^draft:\s*true\s*$/m.test(frontmatter)) continue;

      const pub = frontmatter.match(/^pubDate:\s*['"]?(\d{4}-\d{2}-\d{2})/m)?.[1];
      const act = frontmatter.match(/^updatedDate:\s*['"]?(\d{4}-\d{2}-\d{2})/m)?.[1];
      const fecha = act ?? pub;
      if (!fecha) continue;

      mapa.set(`/${coleccion}/${fichero.replace(/\.md$/, '')}/`, fecha);
      fechas.push(fecha);
    }

    // El índice de la colección sí cambia de verdad cuando entra una pieza nueva.
    if (fechas.length) mapa.set(`/${coleccion}/`, fechas.sort().at(-1));
  }

  return mapa;
}

const LASTMOD = fechasDeContenido();

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
      // OJO: `serialize` debe devolver SIEMPRE el item. Si devuelve undefined,
      // la URL desaparece del sitemap.
      serialize(item) {
        let ruta;
        try {
          ruta = new URL(item.url).pathname;
        } catch {
          return item;
        }
        const fecha = LASTMOD.get(ruta);
        if (fecha) item.lastmod = new Date(`${fecha}T12:00:00Z`).toISOString();
        else delete item.lastmod;
        return item;
      },
    }),
  ],
  // i18n eliminado: no hay contenido /en todavía y generaba un bucle de redirección
  // infinito en /en/. Reintroducir junto con las traducciones reales.
});
