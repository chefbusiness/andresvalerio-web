# Handoff — andresvalerio.com · sesión 2026-07-27 (estrategia RD + ejecución)

Marca personal del **Chef Andrés Valerio** (Santo Domingo y Santiago, RD). Astro 6 + Tailwind v4, salida estática, deploy en Netlify.
Repo: `chefbusiness/andresvalerio-web` (rama `main`). **26 páginas**, todas live y verdes.
Site: `andresvalerio-web.netlify.app` / dominio `www.andresvalerio.com` (el apex redirige 301 a www).

> **Objetivo declarado por John (2026-07-27): dominar la SERP de RD y generar el máximo de clientes potenciales para Andrés en su mercado.**
> La hoja de ruta vive en **`ESTRATEGIA-RD-CONSULTORIA.md`** (estudio de mercado, keywords, competencia y plan de 90 días). Léelo antes de tocar contenido o arquitectura.

---

## ⚠️ El entorno cambió: esto ya no es el Mac

Se trabaja en una **VM Linux** (`/root/andres-valerio-web`), no en el MacBook. Implicaciones:

- **No hay `node`/`npm`** → no se puede `npm run dev` ni `astro build` en local. **Se despliega por push a `main`** y se verifica por HTTP contra producción. El build lo hace Netlify en la nube (~30 s).
- **La regla térmica del Mac no aplica aquí**, pero se mantiene la costumbre de no hacer builds locales porque directamente no se puede.
- El toolkit viaja en el sistema **claude-cockpit** (`~/.claude`, ver su `README.md`): tres repos (cockpit, skills, memoria) + `bin/secrets-pull` para restaurar los `.env`. Los proyectos se traen con **`~/.claude/bin/traer-proyecto <repo>`**.
- **`bridge.py` está en `/root/chefbusiness-ai`** (se trajo con `traer-proyecto`). Ubuntu no traía `pip`; hay un venv propio:
  ```bash
  cd /root/chefbusiness-ai
  .venv/bin/python bridge.py --task content --domain chefbusiness --lang es \
    --system "<str>" --prompt "<str>" --max-tokens 12000 --output <archivo>
  ```
  **Ojo: aquí es `.venv/bin/python`, no `python3`.**
- **Imágenes**: Nano Banana vía `curl` con la key de `~/.claude/skills/generate-images/secrets.env`. En Linux **no hay `sips`**: se optimiza con Pillow (`python3-pil`), 1200 px de ancho y calidad 76-78 → 95-120 KB.
- **`BRAVE_API_KEY` está INVÁLIDA** (`SUBSCRIPTION_TOKEN_INVALID`). El research de SERP se hace con WebSearch mientras no se renueve y se haga `secrets-push`.
- **Keywords Everywhere no segmenta por país**: `country=do` devuelve el volumen **global en español** (idéntico a `mx` y a la consulta global). Solo `us` segmenta; `es` devuelve ceros. Los volúmenes sirven para **comparar términos entre sí**, no como previsión de tráfico. Detalle en §2 del estudio.

---

## ✅ Hecho 2026-07-27

### Contenido — clúster de rentabilidad cerrado
- **Post nuevo `ingenieria-de-menu-restaurante-republica-dominicana`** (~2.400 palabras, cat. "Rentabilidad" → `/consultoria/desarrollo-carta/`). Matriz estrella/caballo/puzzle/perro, ejemplo con 8 platos de hamburguesería de Santo Domingo (**aritmética verificada**: unidades, popularidades, márgenes, umbral 8,75% y las 8 clasificaciones cuadran), sección propia sobre comisiones de delivery (20-30%) que obliga a una matriz por canal. Hero + 2 imágenes de cuerpo. FAQ ×5.
- **Fix de contenido en el pilar**: `abrir-restaurante-republica-dominicana` tenía **puzzles y caballos de batalla intercambiados** en sus definiciones (llevaba así en producción desde su publicación). Corregido.
- Clúster de 4 posts interenlazado con enlaces contextuales cruzados, sin huérfanas.
- El post se optimizó después con la variante **"menu engineering"** (6.600 de volumen relativo frente a 880 de la castellana).

### Estrategia — `ESTRATEGIA-RD-CONSULTORIA.md`
Estudio completo de mercado, competencia, keywords y plan de 90 días. Hallazgos que condicionan todo el trabajo futuro:
1. **La categoría geolocalizada NO se busca**: "consultoría gastronómica república dominicana" y todas sus variantes dan **cero**, incluso midiendo todo el mundo hispano. El SEO capta por **dolor operativo**, no por nombre de categoría; los clientes llegan por reputación, prensa y referencias.
2. **La matriz {rol}×{concepto} no existe**: "consultor de cafeterías", "asesor de pizzerías"… **51 de 54 combinaciones por debajo de 50/mes**. No crear páginas de "consultor de X".
3. **La escala está en {tarea}×{concepto}** ("cómo montar una hamburguesería" 260 con competencia 0,02) y en los **conceptos transversales de operación**: escandallo 6.600 (comp. 0,05), brigada de cocina 2.900 (comp. 0,00).
4. **Franquicias es el segmento de mayor ticket y menor competencia**: *estandarización de recetas* (0,00) y *fichas técnicas de cocina* (0,01).
5. Arquitectura en 3 niveles: pocas páginas de servicio (nomenclatura cabeza) + 5-8 pilares de operación + decenas de piezas de cola larga.

### Nomenclatura (§7 del estudio, ya desplegado)
Se sumó nomenclatura de búsqueda **sin tocar URLs, sin renombrar servicios y sin eliminar nada**:
- **Home**: el `<h1>` era solo "Andrés Valerio". Ahora incluye "Consultor gastronómico en República Dominicana" como `.h1-kicker` dentro del propio h1 (cuerpo menor, no compite con la foto a sangre). Eyebrow → geo.
- **Hub `/consultoria/`**: el h1 usaba "chef consultor" (40/mes) en vez de **"consultoría gastronómica"** (720). Corregido. Meta description ya no duplica la de la home.
- **`/consultoria/desarrollo-carta/`**: el title suma "carta de restaurante" (5.400).
- **`/sobre-mi/`**: title y description con la categoría.
- **`/consultoria/diagnostico/` se dejó INTACTO a propósito**: es la **puerta de entrada comercial** que cualifica al cliente, no una página de captación. Su nombre es parte del método (igual que el diagnóstico de ChefBusiness), y su meta description ya recoge el dolor. **Regla de John: hay servicios que nadie busca y aun así tienen que estar.**

### Servicio nuevo — `/consultoria/franquicias/`
Primer servicio del plan. `franquicias.json` (bridge.py) + `franquicias.astro` (patrón `ServiceLanding`) + imagen de contexto (Nano Banana). Enlazado desde el hub y desde el **footer** (site-wide). Delimita que la parte legal y financiera la lleva un abogado.
⚠️ El lead generado afirmaba que Andrés "ha replicado sus marcas con éxito"; **no consta que tenga sucursales**, se sustituyó por lo verificable (opera tres marcas a la vez). **Vigilar este tipo de afirmaciones en todo lo que genere el bridge.**

---

## ⏳ Pendiente

### 🔴 Crítico
1. **Analítica sin configurar.** No hay GA4, ni Clarity, ni verificación de GSC en producción: el sitio lleva **más de dos meses publicando a ciegas**. El código ya lo soporta (`BaseLayout.astro:42-44`), faltan las env vars en Netlify: `PUBLIC_GA_ID`, `PUBLIC_MICROSOFT_CLARITY_ID`, `PUBLIC_GSC_VERIFICATION`, `PUBLIC_WHATSAPP`, `PUBLIC_CONTACT_EMAIL`. **Sin esto no se puede medir nada del plan.** Luego: verificar en GSC y enviar `https://www.andresvalerio.com/sitemap-index.xml`.

### Siguiente en el plan (mes 1-2 del estudio)
2. **Casos de éxito con cifras** — es lo que convierte y hoy no existe ninguno. Empezar por sus propios negocios.
3. **Schema `Person` con `sameAs`** completo + enlazado entre sus tres negocios y la web personal. Hoy el cross-promo de Bestia Fire es **solo de ida**: andresvalerio.com promociona bestiafire.pro (barra, banner, popup) y no recibe nada de vuelta.
4. **Post "cómo montar una hamburguesería"** (260, competencia 0,02): mejor ratio del estudio y el único que solo Andrés puede firmar.
5. **Pilar de escandallo** (6.600, competencia 0,05), enlazado al de food cost.
6. **Página de consultoría hotelera / F&B** (140, el CPC más alto: $1,45) — Punta Cana.
7. **Septiembre es el Mes de la Gastronomía Dominicana (ADERES)**: ventana de PR con fecha. Preparar contenido y acercamiento en agosto.

### Cliente / datos a validar con Andrés
8. **Precios de franquicias** recién publicados (180.000 / 60.000 / 25.000 RD$) — orientativos, **sin validar**.
9. Precios BBQ/Bestia Fire, razón social y domicilio fiscal para los legales, y el teléfono `wa.me/18098847605` (sigue provisional en producción).
10. **Imágenes reales de Bestia Fire** para `/proyectos/bbq-parrilla-events/` (siguen las genéricas).

### Higiene del entorno
11. `~/.claude/bin` no está en el `PATH` (paso 5 del README del cockpit).
12. El repo está **clonado dos veces**: `/root/andres-valerio-web` (el que se usa) y `/root/andresvalerio-web`, árboles idénticos. Y sobra `web/` dentro del working dir (copia del maestro de imágenes de la migración).
13. `serp_research.py` de `chefbusiness-ai` tiene un fix **sin commitear**: la ruta del intérprete del Mac estaba hardcodeada, ahora usa `sys.executable` con override por `BRIDGE_PYTHON`.
14. `astro.config.mjs:32` usa `lastmod: new Date()` → las 26 URLs del sitemap declaran la misma fecha (la del build). Señal de frescura falsa.

---

## 🔧 Cómo retomar

```bash
cd /root/andres-valerio-web && git pull
# NO hay node: no se puede build local. Se despliega por push:
git push origin main          # Netlify compila y publica en ~30 s
curl -s -o /dev/null -w '%{http_code}' https://www.andresvalerio.com/<ruta>/   # verificar
```

## ⚠️ Reglas del proyecto
- **Contenido**: SIEMPRE `bridge.py` (nunca redactar a mano). Keyword research + SERP **antes**. Enriquecido: tablas, datos, FAQ, ≥2 imágenes en el cuerpo + 1 destacada distinta. Interenlazado, sin huérfanas.
- **Verificar lo que genera el bridge**: ha metido errores conceptuales (llamó "perro" a un caballo de batalla), voseo rioplatense en vez de tuteo dominicano, y afirmaciones no verificables sobre la trayectoria de Andrés. **Auditar aritmética y hechos antes de publicar.**
- **Estética**: fast-good / street food / cocina de producto RD, oscura (VBC). Fotos reales para hero/persona. **Nunca** mediterráneo, aceite de oliva ni The Crime. Sin emojis como iconografía.
- **Nomenclatura vs producto**: las páginas de captación se nombran como busca el mercado; las de producto/método (diagnóstico, mentoría) conservan su nombre y solo **suman** señales. No se elimina ni se renombra nada de lo ya publicado.
- **andresvalerio.com y consultoresgastronomicos.pro son entes independientes.** Andrés tiene ficha contratada en el directorio; eso es off-page (citation + backlink), no un canal estratégico ni fuente de canibalización.
