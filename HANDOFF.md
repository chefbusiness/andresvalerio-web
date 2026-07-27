# Handoff — andresvalerio.com · sesión 2026-07-27 (estrategia RD + ejecución + primeros datos de GSC)

Marca personal del **Chef Andrés Valerio** (Santo Domingo y Santiago, RD). Astro 6 + Tailwind v4, salida estática, deploy en Netlify.
Repo: `chefbusiness/andresvalerio-web` (rama `main`). **30 páginas** (8 posts de blog), todas live y verdes.
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

## ✅ Hecho 2026-07-27 (tarde) — GSC operativo, primeros datos reales y post de hamburguesería

### Search Console: acceso resuelto y línea base medida
**El MCP `gscServer` ya funciona desde la VM.** Las credenciales están en el cockpit (`mcp-gsc/client_secrets.json` y `token.json` en el `secrets.manifest`), el servidor está instalado como `gsc-mcp` y la propiedad es **`sc-domain:andresvalerio.com`** (`siteOwner`). Se usan las herramientas `mcp__gscServer__*` directamente; no hace falta `gsc_report.py`. Ojo: las herramientas destructivas están bloqueadas salvo `GSC_ALLOW_DESTRUCTIVE=true`.

**Línea base en RD (2026-04-28 → 07-26, filtrando `country=dom`): 607 impresiones, 7 clics, posición media 7,8.** El sitio entró en el índice el **2026-06-02** y sube de ~4 impresiones/día en junio a ~15-20/día a finales de julio. Hallazgos:
1. **El 30% de la visibilidad en RD es marca ajena y no convierte**: `/proyectos/valerio-burger-club/` se lleva 177 de las 607 impresiones con **0 clics** (pos. 8,7), por consultas "valerio burger club". Quien busca eso quiere el restaurante y hace clic en valerioburgerclub.com. La visibilidad real de la consultoría es casi cero.
2. **Donde hay contenido de dolor operativo, rankea rápido y sin autoridad**: el post de permisos está en **posición 6,2**. Confirma la tesis 3 del estudio: el cuello de botella es **cantidad de contenido**, no capacidad de rankear.
3. **La hamburguesa es su tracción real**: "curso de hamburguesas presencial" en posición 3 y uno de los 7 clics.
4. **Corrección al handoff anterior**: en RD "andres valerio" está en **posición 1,6**, no 8,6 (la cifra global la diluyen otros Valerios de Chile y México). El schema `Person` sigue mereciendo la pena por entidad, pero **no es urgencia de marca**.
5. Las recetas solo traen tráfico mexicano de "salsa roja para tacos" en posiciones 27-47. Ni daña ni aporta.

### 🔴 Sitemap: defecto encontrado y corregido
El único sitemap registrado en GSC era `https://andresvalerio.com/sitemap_index.xml` — **guion bajo**, en el apex, herencia de una época WordPress —, que devuelve **404** y no se rastreaba desde **2024-06-26** (estado "Has errors"). El sitemap real de Astro es `https://www.andresvalerio.com/sitemap-index.xml` (**guion**), estaba bien declarado en `robots.txt` pero **nunca se había enviado**. Se envió: ahora figura **`Valid`, 0 errores**, rastreado al instante.
⚠️ **Queda borrar el fantasma de 2024** (requiere `GSC_ALLOW_DESTRUCTIVE=true`). Lección: comprobar el sitemap *registrado* contra el que *existe*; que responda 200 en `robots.txt` no basta.

### Contenido — primer post del nivel 3
**Post nuevo `como-montar-una-hamburgueseria-republica-dominicana`** (~3.850 palabras, cat. "Negocio gastronómico" → `/consultoria/apertura/`). Es la keyword de mejor ratio del estudio (260, competencia 0,02) y la única que solo Andrés puede firmar. **El hueco es real: toda la SERP está escrita para España o Argentina, en euros.**
- 4 tablas: inversión inicial a dos escenarios (barra para llevar vs. local con salón), equipamiento imprescindible vs. aplazable, escandallo de una hamburguesa y costos fijos. Más punto de equilibrio, FAQ ×5, hero + 2 imágenes de cuerpo.
- **Aritmética verificada con script**: las 4 sumas de la tabla de inversión, el escandallo (115), el margen (275), el food cost (29,5%), el equilibrio (472,7 → 473/mes ≈ 16/día) y el ejemplo de delivery cuadran exactos.
- **Contradicción entre posts detectada y resuelta**: el borrador daba un food cost del 32,9% y declaraba sano el rango 28-35%, pero el post de food cost ya afirma **25-30%** para una hamburguesería. Se recalculó el ejemplo a **RD$390** para que caiga dentro. *Revisar siempre la coherencia numérica con los posts hermanos, no solo dentro del propio artículo.*
- Clúster cerrado con enlaces de ida y vuelta (pilar, food cost, ingeniería de menú, permisos) y CTA a `/consultoria/apertura/`.

### Contenido — segundo pilar de operación
**Post nuevo `escandallo-de-cocina-costo-real-por-plato`** (~4.220 palabras, cat. "Rentabilidad" → `/consultoria/desarrollo-carta/`). Keyword **"escandallo"** (6.600, competencia 0,05), el mayor activo transversal sin explotar del estudio. La SERP está escrita **entera en España, con kilos y euros**; aquí se compra por **libras** y se cocina en gramos, y ese salto (1 lb = 454 g, no 500) es donde se cuelan los errores de cálculo.
- **Cómo se evitó canibalizar el post de food cost**: ese post explica *qué es* la merma, pero su tabla de escandallo costea con el precio de compra directo, sin aplicar rendimiento. Este pilar es **el método completo**, con el factor de rendimiento ingrediente por ingrediente. La frontera queda dicha explícitamente en el texto: *el food cost es el porcentaje; el escandallo es el documento*.
- 3 tablas (comparativa receta/escandallo/ficha técnica, rendimientos de ingredientes dominicanos, y el escandallo completo de un churrasco), FAQ ×5, hero + 2 imágenes.
- **31 comprobaciones aritméticas verificadas con script** y todas correctas.
- **Incoherencia lógica detectada y corregida**: el texto afirmaba que la salsa entraba en la tabla del churrasco, pero no estaba y el precio de venta se calculaba sin ella. Ahora suma explícita (235,44 → 236,82) y precio recalculado.
- **FAQ corregida**: usaba la fórmula del *margen deseado* mientras el cuerpo usaba *food cost objetivo*. Equivalentes pero contradictorias en forma.
- Cubre las **elaboraciones intermedias** (sub-recetas), que ninguna guía de la SERP explica, y enlaza escandallo → ficha técnica → `/consultoria/franquicias/`.

### Contenido — tercer pilar de operación
**Post nuevo `ficha-tecnica-de-cocina-estandarizar-platos`** (~4.595 palabras, cat. "Negocio gastronómico" → `/consultoria/franquicias/`). Keyword **"ficha técnica de cocina"** (320, competencia 0,01): junto con *estandarización de recetas* es el entregable real de una consultoría de franquicias, el segmento de mayor ticket del estudio.
- **La frontera de los tres documentos queda dicha en el texto**: el food cost es el *porcentaje*, el escandallo es el documento que da el *costo*, y la ficha técnica es el que garantiza la *ejecución*. Aquí no se reexplica el rendimiento: se remite al pilar de escandallo.
- **El ángulo que ninguna guía de la SERP cubre** (toda española, con kilos y euros): *cómo conseguir que la cocina la use de verdad* — soporte que aguante grasa y calor, ubicada donde se ejecuta el plato y no en la oficina, usada como material de formación, y **auditada pesando un plato ya montado en hora pico**. Ese es el ángulo de operador, no de consultor.
- Ficha completa de ejemplo (mofongo con camarones) con cabecera, ingredientes y costo, procedimiento, montaje, alérgenos y conservación. Suma verificada (188).
- **🔴 Trampa factual evitada**: las guías españolas presentan los alérgenos como **obligación legal** (normativa UE). **En RD no consta equivalente**, así que se instruyó al bridge para no afirmar obligación legal ni citar normativa dominicana; el texto los trata como buena práctica. Verificado con grep en el resultado. **Repetir esta salvaguarda siempre que se traduzca a RD un tema regulado en Europa** (alérgenos, etiquetado, APPCC, protección de datos).
- Correcciones aplicadas: errata `Desterra` → `Destierra`; **68 °C como "término medio" → 71 °C**, que es el punto seguro en carne molida; y una contradicción de tiempos de plancha dentro del propio artículo.

### Contenido — cuarto pilar: cierra el paquete de franquicias
**Post nuevo `estandarizacion-de-recetas-carta-consistente`** (~4.976 palabras, cat. "Negocio gastronómico" → `/consultoria/franquicias/`). Keyword **"estandarización de recetas"** (320, competencia **0,00**, la más limpia del estudio).
- **El hueco es de fondo**: toda la SERP confunde estandarizar con la ficha técnica y explica *el documento de un plato*. Estandarizar una carta entera es un **proyecto** con fases, prioridades, responsables, formación y auditoría. **Frontera con el post de ficha técnica: la ficha es el DOCUMENTO, la estandarización es la OBRA.**
- 4 tablas (las cinco fases, priorización por ventas, auditoría de consistencia y elaboraciones base), FAQ ×5, hero + 1 imagen.
- **19 comprobaciones aritméticas verificadas**: los 6 porcentajes de priorización suman 100,0%, el top 3 da el 75%, y las 5 desviaciones de la auditoría con sus 5 veredictos de tolerancia al 5% cuadran. El gramaje de hamburguesa (150 g) coincide con el escandallo del post de hamburguesería.
- 🔴 **El bridge coló una PALABROTA en el cuerpo** ("todos los putos días"). Se detectó en la auditoría y se eliminó. **Añadir siempre un grep de palabrotas a la revisión previa a publicar**; el system prompt no lo previene.
- Otras correcciones: errata "No documents" → "No documentes"; una FAQ describía la ficha técnica como "un documento que registra ingredientes y cantidades", infravalorándola y **contradiciendo al post publicado horas antes**; y tres referencias vagas ("búscalas en el blog") convertidas en enlaces reales.

⚠️ **Aprendizaje de imágenes**: el primer hero se descartó en la verificación visual por **texto ilegible inventado, símbolo de libra esterlina y kg** (moneda y unidad equivocadas, justo lo contrario de lo que defiende el artículo) y **cacerolas de cobre**, prohibidas por el maestro. **Al pedir imágenes con documentos o básculas, decir explícitamente "no text, no labels, no copper"**, y verificar siempre con Read antes de optimizar.

⚠️ **Aprendizaje de `bridge.py`**: a `--max-tokens 14000` la respuesta de OpenRouter llegó **truncada** (`Expecting value: line 2703`) tras 10+ min, dos veces. **Generar los artículos largos en dos mitades de ~11.000 tokens** y concatenar. Ojo al concatenar: si la primera mitad no termina en salto de línea, el primer `##` de la segunda se pega al párrafo anterior y deja de ser encabezado.

---

## ✅ Hecho 2026-07-27 (mañana)

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

### Atribución de leads (sustituye a la analítica)
`src/utils/contacto.ts` es la **única fuente de verdad** del teléfono y el email (ya no hay ninguno hardcodeado en `src/`) y construye las URLs de WhatsApp y mailto con el origen dentro del mensaje. En `/consultoria/desarrollo-carta/` el origen se resuelve en build; en `/contacto/` —por donde pasan casi todos los CTA— se deduce del `document.referrer` en cliente. Andrés recibe *"Hola Andrés, te escribo desde la página de franquicias de tu web"*. En los legales el número va sin `?text=` (ahí es dato del titular).
⚠️ **Al crear una página nueva, añadir su ruta al mapa `ORIGENES`** o sus leads llegarán con el mensaje genérico.

### Servicio nuevo — `/consultoria/franquicias/`
Primer servicio del plan. `franquicias.json` (bridge.py) + `franquicias.astro` (patrón `ServiceLanding`) + imagen de contexto (Nano Banana). Enlazado desde el hub y desde el **footer** (site-wide). Delimita que la parte legal y financiera la lleva un abogado.
⚠️ El lead generado afirmaba que Andrés "ha replicado sus marcas con éxito"; **no consta que tenga sucursales**, se sustituyó por lo verificable (opera tres marcas a la vez). **Vigilar este tipo de afirmaciones en todo lo que genere el bridge.**

---

## ⏳ Pendiente

### 🔴 Crítico
1. **Medición.** **No se usa GA4 ni Clarity: es una decisión deliberada de John**, todo el seguimiento técnico se hace en **Google Search Console**. No hay que instalar analítica ni rellenar `PUBLIC_GA_ID` / `PUBLIC_MICROSOFT_CLARITY_ID` / `PUBLIC_GSC_VERIFICATION`.
   - **La propiedad YA está verificada en GSC por DNS**: `andresvalerio.com` tiene el TXT `google-site-verification=YZPRMYv8hg9…` en el apex. Cubre apex y www, así que la meta de verificación es innecesaria. El sitemap está declarado en `robots.txt` y responde 200.
   - **No hay acceso a GSC desde esta VM.** Hay un MCP `gscServer` en `~/.claude.json`, pero apunta a `/Users/johnguerrero/mcp-gsc/` (rutas del Mac). El repo `mcp-gsc` **no está en la organización de GitHub** y las credenciales **no viajan en el cockpit** (`secrets.manifest` no contiene nada de Google/GSC). Para trabajar con datos de GSC desde aquí hace falta: subir `mcp-gsc` a GitHub (o indicar de dónde clonarlo), meter su fichero de credenciales en el cockpit con `secrets-push`, y corregir la ruta del MCP en `.claude.json`.
   - **Punto ciego, ya cubierto (2026-07-27):** GSC mide adquisición, no conversión. Se añadió **atribución del origen del lead** sin analítica ni cookies: `src/utils/contacto.ts` es ahora la única fuente de verdad del teléfono y el email, y construye las URLs de WhatsApp y mailto con el origen dentro del propio mensaje. En `/consultoria/desarrollo-carta/` el origen se resuelve en build; en `/contacto/` (por donde pasan casi todos los CTA) se deduce del `document.referrer` en cliente. Andrés recibe *"Hola Andrés, te escribo desde la página de franquicias de tu web"*. **Al crear páginas nuevas, añadir su ruta al mapa `ORIGENES`.**
   - **Cómo leer los resultados en GSC:** filtrar siempre **por país = República Dominicana**. El tráfico hispano global infla impresiones sin traer clientes.

### Siguiente en el plan (mes 1-2 del estudio)
2. **Casos de éxito con cifras** — es lo que convierte y hoy no existe ninguno. Empezar por sus propios negocios. **Bloqueado: hacen falta datos reales de Andrés.**
3. **Schema `Person` con `sameAs`** completo + enlazado entre sus tres negocios y la web personal. Hoy el cross-promo de Bestia Fire es **solo de ida**: andresvalerio.com promociona bestiafire.pro (barra, banner, popup) y no recibe nada de vuelta. *(Menos urgente de lo que parecía: en RD ya es posición 1,6 por su nombre.)*
4. ✅ **Post "cómo montar una hamburguesería"** — publicado y live (2026-07-27).
5. ✅ **Pilar de escandallo** — publicado y live (2026-07-27).
6. ✅ **Ficha técnica de cocina** — publicada y live (2026-07-27).
7. ✅ **Estandarización de recetas** — publicada y live (2026-07-27). Con ella queda **cerrado el clúster de franquicias**: escandallo → ficha técnica → estandarización, los tres enlazando a `/consultoria/franquicias/`.
   **Siguientes pilares pendientes**: *brigada de cocina* (2.900, comp. **0,00**, el de más volumen que queda y encaja con mentoría) y *manual de operaciones restaurante* (110, comp. 0,07, que continuaría el clúster de franquicias). Después, el clúster de **formación / manipulación de alimentos**, que es el mayor volumen del mapa.
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

## ▶️ Lo primero al retomar

El acceso a GSC ya está resuelto (ver arriba). Lo siguiente, por orden de valor:

1. **Vigilar los cuatro posts del 2026-07-27** (hamburguesería, escandallo, ficha técnica y estandarización): Google todavía no los conoce. Comprobar indexación y primeras posiciones a los 7-10 días:
   ```
   mcp__gscServer__check_indexing_issues  (site sc-domain:andresvalerio.com)
   mcp__gscServer__get_advanced_search_analytics  (dimensions page, filtro country=dom)
   ```
   Es la primera prueba real de la tesis del estudio: si una pieza de cola larga bien hecha rankea rápido, se replica el patrón con el resto del nivel 3.
2. **Pilar de escandallo** (punto 5 de pendientes), que es el mayor activo transversal sin explotar.
3. **Borrar el sitemap fantasma de 2024** en GSC (necesita `GSC_ALLOW_DESTRUCTIVE=true`).

Recordatorio al leer GSC: **filtrar siempre por país = República Dominicana**. El tráfico hispano global infla impresiones sin traer clientes, y el 30% de lo que hay hoy es marca de Valerio Burger Club que no convierte.

⚠️ En `/root/chefbusiness-ai` siguen **dos cambios sin commitear**: el fix de `serp_research.py` (ruta del intérprete del Mac hardcodeada → `sys.executable`) y `gsc_report.py`. Decidir si se suben a ese repo.

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
