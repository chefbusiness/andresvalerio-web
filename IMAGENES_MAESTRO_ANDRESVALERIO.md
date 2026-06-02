# Imágenes Maestro — Andrés Valerio Web

**Proyecto:** andresvalerio-web (marca personal Chef Andrés Valerio)
**Estilo:** Editorial claro, cálido, con autoridad
**Paleta:** Bone (#F3ECDD), Teal (#103330), Persimón (#DD5430), Brass (#BC9248)

---

## Estilo Visual

### Mood General
- **Editorial contemporáneo** — refinado pero accesible
- **Cálido y profesional** — marca "de día" del chef-autor
- **Contraste deliberado** con Valerio Burger Club (negro nocturno)
- **Textura de papel** sutil (grano, no glossy)

### Iluminación
- Luz natural de ventana (suave, direccional)
- Luz cálida de lámparas colgantes (pendant lights)
- Sin sombras duras, sin dramatismo excesivo
- Sin neón, sin cyberpunk, sin estudio fotográfico

### Materiales y Texturas
- Madera cálida (mesas, tablas de cortar)
- Acero inoxidable (superficies de cocina)
- Cerámica artesanal (platos, bowls)
- Lino, algodón (manteles, delantales)
- Papel texturizado (fondos, menús)

### Composición
- **Formato horizontal 16:9** (default para web)
- **Vertical 4:5** (para retratos del chef)
- **Cuadrado 1:1** (para OG images de redes)
- Profundidad de campo shallow (f/2.8-f/4)
- Encuadres limpios, espacio negativo generoso

---

## Paleta de Colores (Referencia)

| Token | Hex | Uso |
|-------|-----|-----|
| Bone | #F3ECDD | Fondos claros, papel |
| Bone-2 | #ECE3D0 | Secciones alternas |
| Paper | #FFFDF7 | Tarjetas, blanco cálido |
| Teal | #103330 | Bandas oscuras, texto sobre claro |
| Teal-2 | #16413C | Paneles teal elevados |
| Pers | #DD5430 | Acento primario (persimón) |
| Brass | #BC9248 | Detalles finos, premium |

---

## Palabras Prohibidas

NUNCA incluir en prompts:
- Candles, velas (a menos que sea contexto específico de cena)
- Dark shadows, sombras oscuras
- Gothic, gótico
- Baroque, barroco
- Neon, neón
- Cyberpunk
- Studio lighting, iluminación de estudio
- Posed portraits, retratos posados
- Faces shown directly (para personas) — usar candid, working, natural

---

## Fórmula de Prompt Base

```
[Escena específica], [materiales y texturas], [iluminación], [mood].
Shot on 35mm film, natural grain, shallow depth of field, muted warm tones —
cream, warm wood, soft black, touches of persimmon and brass.
[Formato: Horizontal 16:9 / Vertical 4:5 / Square 1:1]
```

---

## Lista de Imágenes

### 1. OG Image Principal (og-default.jpg)
**Uso:** Open Graph para compartir en redes sociales (1200x630)
**Prompt:**
```
Professional chef hands plating a gourmet dish on a warm wood table, ceramic plate with elegant food presentation, fresh herbs and microgreens, natural window light from the left, warm pendant lighting overhead, shallow depth of field, editorial food photography style. Cream and bone tones, touches of deep teal and persimmon accents in the background. Shot on 35mm film, natural grain, muted warm palette. Horizontal 16:9.
```
**Target:** `public/og/og-default.jpg`
**Dimensiones:** 1200x630px
**Calidad:** 80%

---

### 2. Hero Background — Desarrollo de Carta (hero-carta-bg.jpg)
**Uso:** Fondo sutil para hero de landing de consultoría
**Prompt:**
```
Overhead view of a chef's workspace with recipe notebooks open, handwritten notes in Spanish, fresh ingredients arranged (tomatoes, herbs, olive oil), ceramic bowls, wooden cutting board, natural window light casting soft shadows, warm and inviting atmosphere. Cream and bone paper tones, warm wood, touches of deep teal in notebook covers. Shot on 35mm film, natural grain, shallow depth of field. Horizontal 16:9.
```
**Target:** `public/images/hero/hero-carta-bg.jpg`
**Dimensiones:** 1920x1080px (se aplicará overlay CSS)
**Calidad:** 65% (background con overlay)

---

### 3. Chef en Acción (chef-working.jpg)
**Uso:** Sección "Sobre mí" o "Por qué Andrés"
**Prompt:**
```
Professional chef working in a modern kitchen, candid moment of plating or seasoning, hands focused on the dish, stainless steel surfaces, warm pendant lighting, natural window light from side. Chef wearing clean white or cream uniform, no face visible (shot from behind or side angle). Warm wood accents, cream tones, professional contemporary aesthetic. Shot on 35mm film, natural grain, shallow depth of field. Vertical 4:5.
```
**Target:** `public/images/chef/chef-working.jpg`
**Dimensiones:** 800x1000px
**Calidad:** 75%

---

### 4. Plato Gourmet — Hamburguesa de Autor (plato-burger.jpg)
**Uso:** Reforzar conexión con Valerio Burger Club
**Prompt:**
```
Gourmet burger on a ceramic plate, artisanal ingredients visible (caramelized onions, aged cheese, fresh lettuce, house-made sauce), rustic wooden board underneath, fresh herbs scattered, natural window light from the left, warm pendant lighting. Cream and bone background, warm wood tones, editorial food photography style. Shot on 35mm film, natural grain, shallow depth of field, muted warm palette. Horizontal 16:9.
```
**Target:** `public/images/platos/plato-burger.jpg`
**Dimensiones:** 1200x675px
**Calidad:** 75%

---

### 5. Ingredientes Frescos (ingredientes-frescos.jpg)
**Uso:** Sección de filosofía o método de trabajo
**Prompt:**
```
Fresh market ingredients arranged on a warm wood table — ripe tomatoes, fresh herbs (basil, thyme, rosemary), olive oil in glass bottle, sea salt, black peppercorns, garlic, natural window light casting soft shadows. Cream linen cloth partially visible, ceramic bowls, editorial still life photography. Shot on 35mm film, natural grain, shallow depth of field, warm muted tones. Horizontal 16:9.
```
**Target:** `public/images/platos/ingredientes-frescos.jpg`
**Dimensiones:** 1200x675px
**Calidad:** 75%

---

## Notas Técnicas

### API Key
Extraer de: `~/.claude/skills/generate-images/secrets.env`
```bash
source ~/.claude/skills/generate-images/secrets.env
```

### Generación en Batch
Generar de 2 en 2 para evitar rate limits:
```bash
# Tanda 1: og-default + hero-carta-bg
# Tanda 2: chef-working + plato-burger
# Tanda 3: ingredientes-frescos
```

### Optimización
```bash
# OG image (1200x630, 80%)
sips --resampleWidth 1200 --resampleHeight 630 -s format jpeg -s formatOptions 80 /tmp/og-default-raw.png --out public/og/og-default.jpg

# Hero background (1920x1080, 65%)
sips --resampleWidth 1920 --resampleHeight 1080 -s format jpeg -s formatOptions 65 /tmp/hero-carta-bg-raw.png --out public/images/hero/hero-carta-bg.jpg

# Chef working (800x1000, 75%)
sips --resampleWidth 800 --resampleHeight 1000 -s format jpeg -s formatOptions 75 /tmp/chef-working-raw.png --out public/images/chef/chef-working.jpg

# Platos (1200x675, 75%)
sips --resampleWidth 1200 --resampleHeight 675 -s format jpeg -s formatOptions 75 /tmp/plato-burger-raw.png --out public/images/platos/plato-burger.jpg
sips --resampleWidth 1200 --resampleHeight 675 -s format jpeg -s formatOptions 75 /tmp/ingredientes-frescos-raw.png --out public/images/platos/ingredientes-frescos.jpg
```

---

## Costos Estimados

- **5 imágenes × $0.0672 = $0.34 USD**
- Total batch: ~$0.35 USD

---

## Checklist de Generación

- [ ] Maestro file creado ✓
- [ ] API key extraída de secrets.env
- [ ] Directorios creados (`public/og/`, `public/images/hero/`)
- [ ] Tanda 1: og-default + hero-carta-bg
- [ ] Tanda 2: chef-working + plato-burger
- [ ] Tanda 3: ingredientes-frescos
- [ ] Todas las imágenes verificadas con Read tool
- [ ] Optimizadas y colocadas en proyecto
- [ ] Raw PNGs eliminados de /tmp/
- [ ] Commit con mensaje descriptivo
- [ ] Costos reportados al usuario
