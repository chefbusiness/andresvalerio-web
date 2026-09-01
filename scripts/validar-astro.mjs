/**
 * Valida ficheros .astro SIN build local.
 *
 * POR QUÉ EXISTE: el Mac se apaga por encima de ~65 °C y `astro build` es
 * justo lo que lo calienta, así que el build de verdad se hace en Netlify. Pero
 * empujar un .astro roto y descubrirlo en el deploy cuesta una vuelta entera
 * (pasó el 2026-08-25). Esto compila la plantilla con el propio compilador de
 * Astro —que es quien casca de verdad cuando el JSX está mal balanceado o el
 * frontmatter no parsea— y pasa el TS resultante por esbuild. Tarda milisegundos
 * y no levanta Vite, ni Sharp, ni el grafo de contenido.
 *
 * NO sustituye al build: no resuelve imports, ni alias, ni colecciones de
 * contenido. Caza errores de SINTAXIS, que son el 90 % de los deploys rotos.
 *
 *   node scripts/validar-astro.mjs src/**\/*.astro
 *   npm run check
 */
import { transform } from '@astrojs/compiler';
import * as esbuild from 'esbuild';
import { readFile } from 'node:fs/promises';
import { glob } from 'node:fs/promises';

const args = process.argv.slice(2);
const ficheros = args.length
  ? args
  : await Array.fromAsync(glob('src/**/*.astro')).then((f) => f.sort());

let fallos = 0;
for (const f of ficheros) {
  const src = await readFile(f, 'utf-8');
  try {
    const out = await transform(src, { filename: f, sourcemap: false });
    // severity 1 = error; los warnings (2) no rompen el deploy.
    const errores = (out.diagnostics ?? []).filter((d) => d.severity === 1);
    if (errores.length) {
      fallos++;
      console.log(`✗ ${f}`);
      for (const d of errores) console.log(`   ${d.text}  (línea ${d.location?.line})`);
      continue;
    }
    await esbuild.transform(out.code, { loader: 'ts' });
    console.log(`✓ ${f}`);
  } catch (e) {
    fallos++;
    console.log(`✗ ${f}\n   ${e.message ?? e}`);
  }
}
console.log(fallos ? `\n${fallos} fichero(s) con errores` : `\n${ficheros.length} ficheros, todo compila`);
process.exit(fallos ? 1 : 0);
