# Handoff — andresvalerio.com · sesión 2026-06-03

Marca personal del **Chef Andrés Valerio** (Santo Domingo, RD). Astro + Tailwind v4, salida estática, deploy en Netlify.
Repo: `chefbusiness/andresvalerio-web` (rama `main`). Working dir: `web/`.
Último commit: `59a4ab2` (todo pusheado y sincronizado con origin).

> Contexto: este desarrollo se empezó con OpenCode/Qwen3.7; Claude Code tomó el control esta sesión, lo auditó y lo completó.

---

## ✅ Hecho esta sesión

1. **Navegación arreglada** — quitados Recetas/Blog del Header/Footer (eran Fase 2; causaban 404).
2. **3 landings de consultoría nuevas**: `/consultoria/apertura/`, `/mentoria/`, `/diagnostico/`.
   - Contenido generado con `bridge.py` (DeepSeek) tras keyword research + SERP.
   - Componente reutilizable `src/components/ServiceLanding.astro` + datos en `src/data/servicios/*.json`.
   - Cada una: hero → para quién → método → qué incluye → ejemplo → precios RD$/US$ → autoridad → FAQ → otros servicios → CTA.
3. **Imágenes reales** optimizadas con `sips` (de `../Fotos Andrés`, `../imagenes-2026`, `../imagenes-2024`):
   - `public/images/chef/`: andres-retrato, andres-pie, andres-emplatando, andres-cocina
   - `public/images/platos/valerio-burger.jpg`
   - `public/og/og-default.jpg` (1200×630, recorte de foto de cocina)
   - Colocadas en: home (hero), sobre-mí (retrato), secciones de autoridad de las landings.
4. **SEO/infra**:
   - Schema.org: `Person/Chef` (sobre-mí) + `Service/Offer/FAQPage` (las 4 landings, incl. desarrollo-carta). Util: `src/utils/schema.ts`.
   - GA4 + Microsoft Clarity + verificación GSC condicionales en `BaseLayout.astro` (solo si existen las env vars).
   - `canonical` cableado (prop `canonicalPath` BaseLayout→SEO) + slot `head` en BaseLayout para inyectar JSON-LD.
   - Interenlazado reforzado: añadido bloque "otros servicios" a la landing estrella (ya no queda aislada).
5. **Honestidad de contenido**: los `ejemplo.quote` salían como testimonios de clientes inventados → reescritos como escenarios típicos narrados por el chef.
6. **Build verificado**: 8 páginas, 0 enlaces internos rotos, todas las imágenes existen, sitemap correcto.

---

## ⏳ Pendiente / para mañana

### Bloqueado por el cliente (John/Andrés) — confirmar datos
1. **Contacto real de Andrés**: hoy se usa `wa.me/18098847605` y `hola@andresvalerio.com` (en `contacto.astro`, `Footer.astro` y `desarrollo-carta.astro`). La guía maestra §9 avisa: NO usar datos de ChefBusiness/John. **Verificar y reemplazar si procede.**
2. **Precios** de apertura/mentoría/diagnóstico: puestos como "orientativos desde" (de guía §7). Validar cifras finales (guía §11).

### Deploy
3. **Confirmar conexión repo↔Netlify (CI/CD)**. Si no está enlazado: Netlify UI → Site config → Build & deploy → Continuous deployment. Base dir `web`, build `npm run build`, publish `web/dist`.
4. **Env vars en Netlify** para activar analytics: `PUBLIC_GA_ID`, `PUBLIC_MICROSOFT_CLARITY_ID`, `PUBLIC_GSC_VERIFICATION`, `PUBLIC_WHATSAPP`, `PUBLIC_CONTACT_EMAIL`.
5. **Dominio**: conectar `andresvalerio.com` (recomprado, en Hostinger) a Netlify. Redirect apex→www ya está en `netlify.toml`.

### Fase 2 (contenido)
6. **Recetas** (`/recetas`) y **Blog** (`/blog`) — content collections de Astro. Quitados del menú; volver a añadirlos al construirlos. Recuperar contenido de la web vieja: `../capturas-web-vieja/` (carpetas Blog, recetas, sobre mi, galerias).
7. Versión **EN** (`/en/...`) — i18n ya configurado en `astro.config.mjs`, contenido pendiente.
8. Opcional: imagen real `andres-cocina.jpg` (toma horizontal de cocina) está optimizada pero sin colocar; candidata para fondos/secciones.

---

## 🔧 Cómo retomar / comandos clave

```bash
cd /Users/johnguerrero/andres-valerio-web/web
git pull
npm run dev          # desarrollo local
npm run build        # ⚠️ CALIENTA CPU — ver regla térmica abajo
```

- **Contenido**: SIEMPRE `bridge.py` (DeepSeek) → `python3 /Users/johnguerrero/chefbusiness-ai/bridge.py --task content --domain chefbusiness --lang es --system <archivo> --prompt <archivo> --output <archivo>`. Prompts de ejemplo usados: estaban en `/tmp/avimg/` (temporales, pueden no persistir).
- **Imágenes**: skill `generate-images` (Nano Banana 2) para huecos; fotos reales en `../Fotos Andrés`, `../imagenes-2026`, `../imagenes-2024`. Maestro de prompts: `IMAGENES_MAESTRO_ANDRESVALERIO.md`.
- **Guía maestra del proyecto**: `../claude-desktop-guide-web-andresvalerio/GUIA-MAESTRA-andresvalerio.md` (fuente de verdad de diseño, contenido, precios y mapa del sitio).

## ⚠️ Reglas de la sesión (memorizadas)
- **Térmica**: la CPU del Mac apaga el equipo si supera **65°C** (verano, Madrid). Monitorear con `istats cpu temp`; ralentizar/espaciar tareas; **preferir builds en la nube** (Netlify), no locales repetidos; **no usar Playwright**.
- **Contenido**: bridge.py + nano-banana; keyword research + SERP ANTES; contenido enriquecido (tablas, datos, FAQ, mín. 2 imágenes en cuerpo + 1 destacada distinta); ortografía perfecta, tono humano; **sin páginas huérfanas**, interenlazado claro hacia conversión.
