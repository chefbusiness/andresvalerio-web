# Handoff — andresvalerio.com · sesión 2026-06-03/04

Marca personal del **Chef Andrés Valerio** (Santo Domingo, RD). Astro 6 + Tailwind v4, salida estática, deploy en Netlify.
Repo: `chefbusiness/andresvalerio-web` (rama `main`). Working dir: `web/`.
**Último commit: `a1efebf`** — todo pusheado y sincronizado con origin. 22 páginas. Site: `andresvalerio-web.netlify.app` / dominio `andresvalerio.com`.

> Esta sesión recuperó el trabajo tras un apagón térmico y avanzó muchísimo. Lee también la memoria en `~/.claude/projects/-Users-johnguerrero-andres-valerio-web/memory/` (MEMORY.md indexa todo).

---

## ✅ Hecho esta sesión

### Home (`index.astro`)
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
3. **BBQ y Burger Master Academy** tendrán **web dedicada propia** (dominio/nombre pendientes) → al recibirlos, sustituir el placeholder "Próximamente" por el enlace.
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
