# Handoff — andresvalerio.com · sesión 2026-06-24 (clúster blog SEO: food cost + permisos)

Marca personal del **Chef Andrés Valerio** (Santo Domingo, RD). Astro 6 + Tailwind v4, salida estática, deploy en Netlify.
Repo: `chefbusiness/andresvalerio-web` (rama `main`). Working dir: `web/`.
**Último commit de contenido: `9973598`** (clúster blog) — pusheado a `main`, **deploy Netlify `ready`/verde y live** (3 URLs del clúster responden 200). 24 páginas (3 posts de blog). Site: `andresvalerio-web.netlify.app` / dominio `andresvalerio.com`.

> Esta sesión recuperó el trabajo tras un apagón térmico y avanzó muchísimo. Lee también la memoria en `~/.claude/projects/-Users-johnguerrero-andres-valerio-web/memory/` (MEMORY.md indexa todo).

---

## ✅ Hecho 2026-06-24 (clúster de blog SEO — food cost + permisos)

Sesión de **contenidos** (regla capital: keyword research + SERP → bridge.py DeepSeek → Nano Banana → ensamblar → interenlazar). El blog tenía **solo el post pilar**; se montó un clúster:

- **Post nuevo `food-cost-restaurante-republica-dominicana`** (cat. "Rentabilidad", ~1.700 palabras). KW: "food cost restaurante república dominicana". Diferenciador RD$/ITBIS/ingredientes locales/mermas + 2 tablas (escandallo + food cost ideal). Hero + 2 imágenes de cuerpo (balanza, merma) Nano Banana oscuras fast-good. FAQ ×5. Enlaza a pilar + /consultoria/diagnostico + /consultoria/desarrollo-carta. Mapea a **diagnóstico**.
- **Post nuevo `permisos-abrir-restaurante-republica-dominicana`** (cat. "Negocio gastronómico", ~1.900 palabras). KW: "permisos para abrir un restaurante república dominicana". Diferenciador: incluye la **Licencia de Turismo (MITUR)** que el pilar omitía + tabla resumen (permiso/entidad/tiempo/costo orientativo con disclaimer). Hero + 2 imágenes de cuerpo (planos, cocina-inspección). FAQ ×5. Enlaza a pilar + food-cost + /consultoria/apertura. Mapea a **apertura**.
- **Pilar actualizado**: `related` → ambos posts + 2 enlaces contextuales salientes (§3 permisos, §5 food cost). Clúster cerrado, sin huérfanas.
- **Template blog** (`[...slug].astro`): añadida regla CSS `.prose img` (responsive) para imágenes de cuerpo (antes no existía → habrían desbordado en móvil).
- Imágenes en `public/images/blog/` (6 nuevas, 145–225 KB c/u). Verificadas con Read, estética oscura VBC (override del maestro), sin mediterráneo/aceite de oliva.
- **Validación estática verde** (YAML, slugs `related`, enlaces internos, imágenes en disco) y **desplegado**: commit `9973598` pusheado a `main` → **deploy Netlify `ready`/verde**, verificado en producción (H1, 2 imágenes de cuerpo, FAQ, tablas y enlaces internos renderizan; 3 URLs 200). No se hizo build local por regla térmica; el build completo lo hizo Netlius en la nube. Temp 52–60°C durante toda la sesión.

Contenido 100% con `bridge.py` (deepseek-v4-pro, `--max-tokens 11000`, system propio voz Andrés Valerio); imágenes con Nano Banana vía curl. Temp se mantuvo 58–62°C, sin builds locales ni Playwright.

## ✅ Hecho esta sesión (2026-06-08)

### Rebranding BBQ Parrilla Events → **Bestia Fire**
- El proyecto BBQ ahora es la marca **Bestia Fire** (slogan *"Parrillas BBQ & Events"*), con **web propia ya publicada: `https://bestiafire.pro/`**. El slug se mantiene `/proyectos/bbq-parrilla-events/` por SEO.
- `proyectos.ts`: nuevo campo reutilizable **`sitioDedicado` { url, nombre, slogan }** (sustituye a `sitioProximamente` cuando la web ya existe). BBQ pasó de `sitioProximamente` a `sitioDedicado`. `nombre` → "Bestia Fire", tagline/resumen ajustados.
- `[slug].astro`: hero con doble CTA ("Visitar Bestia Fire →" externo + "Pedir presupuesto"); el bloque "Próximamente" se convierte en bloque **"Web dedicada"** activo cuando hay `sitioDedicado` (Burger Master Academy sigue con "Próximamente").
- **Contenido regenerado con bridge.py** (DeepSeek v4-pro): meta, heroTitle/Lead, intro, paraQuien, carnes.intro y las 6 FAQ → voz Bestia Fire, conservando a Chef Andrés Valerio como el chef detrás y TODOS los datos estructurados (9 formatos con precios, 8 cortes). Footer + meta de /proyectos también dicen "Bestia Fire".
- ⚠️ **Imágenes siguen siendo las genéricas** de `public/images/proyectos/bbq/` — pendiente generar las de Bestia Fire con Nano Banana (hero, formatos, cortes).

### Home (`index.astro`) — sesiones previas (2026-06-03/04)
- **Hero a sangre** con foto REAL de Andrés (chaqueta blanca + corte de carne, `andres-hero.jpg`). NO tarjeta (rechazada por John).
- Bloque **Valerio Burger Club** con foto real del burger (`andres-burger.jpg`) integrada.
- **Banda de contexto** clara (IA street-food "SMASH BURGERS") tras la intro. Eliminada la mediterránea (olio d'oliva) por off-brand.
- Quitada la mención a **The Crime** en la intro.
- **CTA final con fondo de fuego + parallax** (componente `CtaFinal.astro`).

### Sección Proyectos (NUEVA, completa) — `/proyectos/` + `[slug].astro` dinámico
- Nav en Header + Footer. Hub con tarjetas + 4 landings:
  - **BBQ Parrilla Events**: hero parrillero, cinta equipamiento, intro, para quién, **9 formatos con precios RD$/US$** (orientativos, ver research abajo), sección **"Nuestra carne"** (8 cortes con thumbnails), qué incluye, galería, FAQ, **placeholder de web dedicada futura** (dominio/nombre pendientes que pasará John).
  - **Valerio Burger Club**: contenido + galería de fotos reales + enlace externo a valerioburgerclub.com.
  - **Burger Master Academy**: 5 cursos (Perfecta Hamburguesa I/II, Maestría Carnes Premium, Hot Dogs Gourmet *muy pronto*, Pastrami Perfection *muy pronto*) con thumbnails, hero real, placeholder web futura. **SIN marca The Crime** (fuente: thecrimesc.com/burger-master-academy-cursos).
  - **Catering Fast Good**: contenido + hero + 4 formatos con thumbnails.
- Contenido en `src/data/proyectos-contenido.ts` (generado con **bridge.py/DeepSeek**). Datos/imágenes en `src/data/proyectos.ts`. Imágenes Nano Banana + reales en `public/images/proyectos/<slug>/`.

### Otros
- **CTA de fuego (`CtaFinal.astro`) en TODAS las páginas** (home, consultoría, sobre-mí, proyectos, ServiceLanding ×4, recetas, blog).
- **Auditoría responsive (P0/P1 corregidos)**: tablas de prosa con scroll, burger nav 44px, heros móvil sobre-mi/consultoria, padding contacto.
- **Páginas legales** `/legal/terminos`, `/legal/privacidad`, `/legal/cookies` (`LegalPage.astro`, adaptadas de valerioburgerclub.com, ley 172-13). Footer con enlaces legales + **"Desarrollado por GastroSEO"** (gastroseo.com).

---

## ⏳ Pendiente

### Cliente / datos
1. **Legales**: falta **razón social + domicilio fiscal** exactos del titular (ahora "Andrés Valerio, Santo Domingo, RD" + email). Validar.
2. **Precios BBQ**: son **orientativos "desde"** (research de mercado RD: catering RD$1,500–5,000/persona; ribeye Angus súper RD$700–900/lb). Validar cifras finales con Andrés. Tabla en `proyectos-contenido.ts` (bbq formatos).
3. ✅ **BBQ → Bestia Fire** (`bestiafire.pro`) YA enlazado (2026-06-08). **Burger Master Academy** sigue con web dedicada pendiente (`sitioProximamente`) → al recibir dominio/nombre, pasar a `sitioDedicado` igual que Bestia Fire. **Pendiente Bestia Fire: imágenes reales de marca** (Nano Banana) para reemplazar el stock genérico.
4. Teléfono `wa.me/18098847605` (dominicano) — confirmar con Valerio (provisional en producción).

### Infra
5. **Dominio**: fijar **www.andresvalerio.com como primario** en Netlify (el cert SSL ya cubre apex+www; el código ya apunta a www). Luego verificar en GSC + enviar sitemap `https://www.andresvalerio.com/sitemap-index.xml`.
6. **Env vars analytics** en Netlify: `PUBLIC_GA_ID`, `PUBLIC_MICROSOFT_CLARITY_ID`, `PUBLIC_GSC_VERIFICATION`, `PUBLIC_WHATSAPP`, `PUBLIC_CONTACT_EMAIL`.

### Mejoras (P2)
7. Pulir P2 responsive (mínimos de `clamp()` de algún h1 grandes en 320px).
8. Revisar en móvil real las páginas de proyectos nuevas.

---

## 🔧 Cómo retomar / comandos

```bash
cd /Users/johnguerrero/andres-valerio-web/web
git pull
npm run dev          # desarrollo local
npm run build        # Astro ~4s, trivial térmicamente; push a main = deploy en la nube (preferir)
```

- **Contenido**: SIEMPRE `bridge.py` (DeepSeek) — `python3 /Users/johnguerrero/chefbusiness-ai/bridge.py --task content --domain chefbusiness --lang es --system "<str>" --prompt "<str>" --max-tokens 9000+ --output <archivo>`. ⚠️ deepseek-v4-pro es de razonamiento: usar `--max-tokens` alto (9000–12000) o devuelve JSON truncado/vacío. Pedir JSON estricto.
- **Imágenes**: skill `generate-images` / Nano Banana (Gemini). Endpoint y patrón en la skill; key en `~/.claude/skills/generate-images/secrets.env`. Usar `curl` (Python tiene bug SSL en macOS). Estética: oscura, fast-good, producto/fuego — **NUNCA mediterráneo/aceite de oliva ni The Crime**.

## ⚠️ Reglas (memorizadas)
- **Térmica**: el Mac apaga a ~65°C. Monitorear `istats cpu temp`; preferir builds en la nube; **no Playwright**.
- **Estética Valerio**: fast-good / street food / cocina de producto RD, oscura (VBC). Fotos reales para hero/persona. Ver memoria `valerio-brand-aesthetic.md`.
- **Contenido**: bridge.py + Nano Banana; SERP antes; enriquecido (FAQ, tablas, imágenes); interenlazado; sin huérfanas.
