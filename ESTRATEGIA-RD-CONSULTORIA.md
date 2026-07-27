# Estrategia de posicionamiento — Andrés Valerio como chef consultor en República Dominicana

**Fecha:** 2026-07-27 · **Encargo:** proyectar el perfil de Andrés Valerio como consultor gastronómico en RD (restaurantes, catering, franquicias, street food y hoteles), replicando el modelo de ChefBusiness.co (Chef John Guerrero) en España.

---

## 1. Resumen ejecutivo — los cinco hallazgos que cambian decisiones

1. **La categoría no se busca en Google.** "Consultoría gastronómica república dominicana", "consultor gastronómico santo domingo", "asesoría de restaurantes RD" y todas sus variantes geolocalizadas dan **volumen cero**, incluso midiendo sobre todo el mundo hispanohablante. Una estrategia que dependa de rankear para la categoría no traerá clientes, porque nadie la busca. Esto no invalida el SEO: **reubica su papel**.
2. **La demanda existe, pero en el dolor operativo, no en el servicio.** Los dueños de restaurante no buscan "consultor"; buscan *food cost*, *carta de restaurante*, *costos*, *administración de restaurantes*, *manipulación de alimentos*. Ahí es donde se capta, y desde ahí se convierte a consultoría.
3. **El mercado está en su mejor momento en años.** Hoteles, bares y restaurantes crecieron **5,9%** en el primer cuatrimestre de 2026 y **6,2%** en mayo; el país recibió **4,15 millones de turistas** en cinco meses (+10,8%) y el Banco Central proyecta **US$12.500 millones** de ingresos turísticos. El 84% de los turistas valora positivamente su experiencia gastronómica.
4. **El hueco competitivo digital está vacío.** No existe en RD ningún chef consultor con una web de autoridad comparable a ChefBusiness. Los que aparecen en la SERP son consultores internacionales con páginas programáticas por ciudad (Masterestaurant/Diego Parra) o chefs mediáticos sin oferta estructurada de consultoría (Juancho Ortiz, Leandro Díaz). **Nadie ocupa la posición de "el consultor de restaurantes dominicano".**
5. **Su ventaja competitiva no es replicable: opera y asesora a la vez.** Ningún consultor del mercado dominicano puede decir que dirige Valerio Burger Club, Bestia Fire y Catering Fast Good mientras asesora. Frente al consultor internacional que aterriza con una metodología de manual, él tiene la única credencial que no se compra: **negocios propios abiertos, con sus números**. Todo el posicionamiento debe colgar de ahí — no de "consultor gastronómico", sino de "el chef que opera y te enseña a operar".

**La tesis:** en un mercado donde la categoría no se busca, el negocio no lo trae el ranking, lo trae la **autoridad**. El SEO sirve para captar al que tiene un problema operativo y para sostener la credibilidad de quien ya oyó su nombre. La consultoría se vende por reputación, prensa, asociaciones y referencias — y la web es lo que valida esa reputación cuando el prospecto la busca.

---

## 2. Advertencia metodológica (importante para no tomar decisiones sobre datos falsos)

Los volúmenes de búsqueda proceden de Keywords Everywhere (fuente Google Keyword Planner). **La segmentación por país no funciona para República Dominicana en la cuenta del grupo**: consultando `country=do` se obtienen cifras idénticas a `country=mx` y a la consulta global (p. ej. "restaurante" = 24.900.000/mes, imposible en un país de 11 millones). Solo `us` segmenta correctamente; `es` devuelve ceros.

**Consecuencia:** las cifras de abajo son **volumen global en español**, no dominicano. Se usan para lo único que siguen siendo válidas — **comparar términos entre sí** dentro del mismo dataset — y no como previsión de tráfico. Como referencia de orden de magnitud, RD representa aproximadamente entre el 1% y el 3% del tráfico de búsqueda hispanohablante.

**Refuerza el hallazgo nº1:** si las keywords geolocalizadas de RD dan cero incluso contando todo el mundo hispano, la ausencia de demanda de la categoría es real, no un artefacto de segmentación.

> Pendiente técnico: `serp_research.py` en `chefbusiness-ai` pasa `country` a esta API dando por hecho que segmenta. Cualquier research previo del grupo que se apoyara en ese parámetro (fuera de EE. UU.) estaba usando volúmenes globales. Conviene revisarlo.

---

## 3. El mercado dominicano

### Macro

| Indicador | Dato | Fuente |
|---|---|---|
| Crecimiento hoteles, bares y restaurantes | +5,9% (ene-abr 2026); +6,2% (mayo 2026) | Banco Central |
| Turistas internacionales | 4.146.831 en 5 meses (+10,8%) | MITUR / Asonahores |
| Visitantes Q1 | 3,7 M (2,6 M turistas + 1,1 M cruceristas) | Asonahores |
| Ingresos turísticos proyectados 2026 | US$12.500 millones | Banco Central |
| Turistas que valoran positivamente la gastronomía | 84% (feb 2026) | MITUR |
| Inversión para abrir restaurante mediano (SD / Punta Cana) | 12–25 millones DOP | Research de mercado |

### Franquicias (segmento clave y poco atendido)

- **240 franquicias** operando: 150 internacionales (62,5%) y **90 dominicanas** (37,5%).
- Las marcas locales franquiciadas pasaron de **9 a 90 en diez años**, con unos **500 locales**.
- Los restaurantes son el **20%** del total de franquicias del país.
- Distribución: **44% Gran Santo Domingo**, **21% Norte (Santiago)**, 19% Este (Punta Cana), 16% Sur.

Lectura: hay 90 marcas dominicanas que ya franquician y decenas más que quieren hacerlo. Franquiciar exige justo lo que Andrés sabe hacer — estandarizar recetas, fichas técnicas, escandallos, manuales de operación, control de food cost replicable. **Es el segmento de mayor ticket y menor competencia.** Y su eje Santo Domingo–Santiago cubre el 65% del parque de franquicias.

### El sector se está profesionalizando (y eso es la oportunidad)

**ADERES** (Asociación Dominicana de Restaurantes) definió sus prioridades 2026–2027 en julio de 2026:

- Restaurant Week y Tapas Night con **más de 230 restaurantes** participantes (+30% respecto a ediciones previas).
- **Septiembre como Mes de la Gastronomía Dominicana.**
- **Primer Estudio Económico del Sector de Restaurantes y Bares** del país.
- Programas de **formación y profesionalización**, reforma educativa y empleabilidad.
- Participación en Meta RD 2036 y en FITUR.

Que la patronal del sector ponga la profesionalización en el centro es exactamente el viento de cola que necesita un consultor. **Septiembre es una ventana de PR con fecha, y estamos a tiempo de preparar contenido y presencia.**

### Los cuatro segmentos, por valor real

| Segmento | Tamaño / dinámica | Ticket | Dificultad de acceso | Prioridad |
|---|---|---|---|---|
| **Restaurantes independientes** | El grueso del mercado; alta mortalidad, poca gestión | Medio | Baja — llegan por contenido y referencia | **1 (base)** |
| **Franquicias y marcas en expansión** | 90 marcas locales, +500 locales, creciendo | **Alto** | Media — se accede por reputación y red | **2 (el dinero)** |
| **Hotelería / F&B** | Punta Cana-Bávaro: RIU (5 hoteles), Barceló, Occidental (11 restaurantes en uno solo) | **Muy alto** | **Alta** — compras corporativas, no buscan en Google | 3 (medio plazo) |
| **Street food / fast-good** | Chimis, food trucks, picapollos; sector en formalización | Bajo | Muy baja | 4 (posicionamiento, no ingreso) |

Sobre street food: es **su credencial diferencial, no su fuente de ingresos**. Ningún consultor dominicano puede decir que opera Valerio Burger Club, Bestia Fire y Catering Fast Good. Esa es la prueba de que sabe de lo que habla. El street food dominicano está pasando del triciclo al food truck, y él es el único que puede hablar de esa transición desde dentro. **Vende operación real, no diapositivas** — es justo el ángulo con el que Masterestaurant (consultor internacional que aterriza en 43 países) no puede competir.

---

## 4. Dónde está la demanda de búsqueda

Volumen global en español (ver §2). Ordenado por interés relativo:

| Keyword | Vol. relativo | Competencia | Lectura estratégica |
|---|---|---|---|
| curso de manipulación de alimentos | 40.500 | 0,45 | Intención formativa/trámite. Puerta de entrada masiva, monetizable con infoproducto |
| carnet de manipulador de alimentos | 33.100 | 0,37 | Ídem. Trámite obligatorio en RD |
| **food cost** | **12.100** | **0,07** | **Ya tiene el post. Su mayor activo. Competencia bajísima** |
| **menu engineering** | **6.600** | **0,07** | **7,5× más que "ingeniería de menú". Ver acción inmediata abajo** |
| carta de restaurante | 5.400 | 0,48 | Encaja directo con su servicio de desarrollo de carta |
| ingeniería de menú | 880 | 0,05 | El post recién publicado |
| **consultoría gastronómica** | **720** | 0,35 | Cabeza de categoría. Sin geo |
| administración de restaurantes | 590 | 0,56 | Intención formativa/gestión |
| gerente de alimentos y bebidas | 480 | 0,08 | **Puerta al segmento hotelero** |
| negocio de comida rápida | 480 | 0,06 | Street food / fast-good |
| franquicia de restaurante | 320 | 0,16 | Segmento de alto ticket |
| consultor gastronómico | 260 | 0,47 | Categoría |
| asesoría gastronómica | 260 | 0,45 | Categoría |
| gestión de restaurantes | 260 | 0,71 | Categoría |
| cómo abrir un restaurante | 210 | 0,20 | Su post pilar |
| catering santo domingo | 210 | 0,22 | Local y transaccional |
| comida callejera dominicana | 210 | 0,00 | Cultural. Marca, no venta |
| rentabilidad de un restaurante | 50 | 0,06 | Long tail de dolor |

**Volumen cero (todas las geolocalizadas):** consultoría gastronómica RD · consultor gastronómico RD · asesoría de restaurantes RD · cómo abrir un restaurante en RD · abrir un restaurante en Santo Domingo · permisos para abrir un restaurante RD · food cost RD · chef privado RD · catering para eventos Santo Domingo · street food RD · escuela de gastronomía Santo Domingo.

### Acción inmediata que sale de estos datos

**El post de ingeniería de menú publicado hoy ataca la variante de 880 y no la de 6.600.** "Menu engineering" es el término dominante en el mercado hispano y no aparece en el artículo. No conviene crear un segundo post — canibalizaría. La acción correcta es **añadir la variante al post existente**: incluirla en `keywords`, en un H2 o H3 ("La matriz de menu engineering paso a paso") y en la primera aparición del término en el cuerpo, aclarando que es el nombre en inglés de lo mismo.

Lo mismo con el post de food cost: es la keyword de mayor volumen y menor competencia de todo el mapa (0,07). Merece una revisión de optimización, no un post nuevo.

---

## 5. Competencia

| Competidor | Qué es | Amenaza | Cómo se le gana |
|---|---|---|---|
| **Masterestaurant** (Diego Parra) | Consultor internacional, metodología en 43 países. Páginas programáticas por ciudad, incluida Santo Domingo | **Alta en SEO** — ya rankea para las búsquedas de RD | Es un extranjero con landing genérica. Se le gana con lo que él no tiene: operación real en RD, precios en pesos, permisos dominicanos, suplidores locales |
| **Chefejecutivo, Salvist, TGJ, Foodtoring** | Consultoras hispanas genéricas | Media | Sin arraigo dominicano |
| **Juancho Ortiz, Leandro Díaz** | Chefs dominicanos con notoriedad y asesorías puntuales | Baja en digital, **alta en reputación** | Ellos tienen el nombre; Andrés puede tener el método y el sistema documentado |
| **Inés Páez Nin (Chef Tita)** | Máxima referente gastronómica del país | No compite (cocina de autor, no consultoría) | Aliada potencial, no rival |

**Conclusión:** el espacio digital está libre. Nadie es "el consultor de restaurantes dominicano" en Google ni en la conversación del sector. El riesgo no es la competencia, es que **la demanda de búsqueda de la categoría no existe** — por eso la estrategia no puede ser solo SEO.

> **Nota sobre los directorios.** Andrés tiene ficha contratada en `consultoresgastronomicos.pro/do/`. Eso aporta lo que aporta un buen directorio sectorial —una citation con NAP consistente y un enlace de nicho— y cuenta como una pieza más del off-page (§6, capa 3), igual que cualquier otro directorio de calidad en el que esté. No es un canal estratégico ni sustituye a nada de lo que se construya en andresvalerio.com: **este documento trata exclusivamente lo que se hace desde su marca personal y su web.**

---

## 6. Estrategia de posicionamiento: tres capas

### Capa 1 — Captación por dolor operativo (SEO)

No se persigue "consultor gastronómico". Se persigue al dueño con un problema. Cada contenido resuelve el problema de verdad y termina en el servicio que lo soluciona. Es el modelo de ChefBusiness ("Problemas" como eje de navegación, 19 problemas agrupados en gestionar / crecer / abrir-cerrar) y funciona porque **la gente busca su problema, no tu servicio**.

Clústeres a construir, por prioridad:

1. **Rentabilidad** *(ya existe, cerrado hoy)* — food cost · ingeniería de menú / menu engineering · costos. → `/consultoria/diagnostico/` y `/consultoria/desarrollo-carta/`
2. **Carta y concepto** — carta de restaurante · diseño de carta · cómo poner precios · rediseño de carta · fichas técnicas y escandallos. → `/consultoria/desarrollo-carta/`
3. **Apertura** *(ya existe el pilar)* — abrir restaurante · permisos · inversión inicial · punto de equilibrio · elegir local. → `/consultoria/apertura/`
4. **Franquicias** *(nuevo, alto valor)* — cómo franquiciar mi restaurante · manual de operaciones · estandarizar recetas para replicar · qué necesita una marca para franquiciar en RD · ADOFRA. → nuevo servicio
5. **Formación y cumplimiento** *(el volumen)* — manipulación de alimentos · carnet de manipulador · higiene e inocuidad · buenas prácticas de cocina. Es el mayor volumen del mapa. Puerta de entrada e infoproducto.
6. **F&B hotelero** *(medio plazo)* — gerente de alimentos y bebidas · costos en todo incluido · estandarización de buffets · control de mermas en hotelería. → nuevo servicio

### Capa 2 — Autoridad (esto es lo que de verdad vende)

En un mercado donde la categoría no se busca, el cliente llega por reputación. Palancas, por relación impacto/esfuerzo:

- **ADERES**: entrar en su órbita. Restaurant Week, Tapas Night, el Mes de la Gastronomía Dominicana (septiembre) y sus programas de profesionalización. Un consultor que forma parte de la conversación de la patronal tiene una credencial que no se compra con anuncios.
- **Prensa dominicana**: Diario Libre, Acento, El Dinero, Listín Diario y Arecoa cubren el sector con frecuencia. Un chef que aporta **datos** (food cost real, márgenes, costos de apertura en pesos) es una fuente cómoda para un periodista. Cuando ADERES publique su primer Estudio Económico del sector, tener análisis propio preparado es una oportunidad de citación.
- **LinkedIn**: es donde están los gerentes de F&B, los directores de hotel y los franquiciadores. Es el canal natural para el segmento de alto ticket, y hoy está desatendido en el nicho.
- **Casos con números**: ChefBusiness convierte con resultados medibles (+40% ticket medio, −35% mermas). Andrés necesita 3–5 casos propios cuantificados. Puede empezar por sus propios negocios: VBC, Bestia Fire y Catering Fast Good son laboratorio y prueba a la vez.
- **Docencia**: dar clases o talleres (escuelas de gastronomía, INFOTEP) genera autoridad y red comercial simultáneamente.

### Capa 3 — Entidad y off-page: que Google entienda quién es Andrés Valerio

Esta capa es la que convierte un nombre en una **entidad reconocible**. Importa el doble en un mercado que no busca la categoría: cuando alguien oye hablar de él y busca "Andrés Valerio chef", lo que aparece decide si la referencia cierra o se enfría. Y las respuestas de IA (que ya median muchas búsquedas de marca) se construyen exactamente con estas señales.

- **Schema `Person` consolidado y con `sameAs`**, enlazando todos sus perfiles y sus negocios (Valerio Burger Club, Bestia Fire, Catering Fast Good). Hoy la home ya tiene schema `Person`; falta que declare la red completa de perfiles y la relación con sus marcas. Es lo que permite que Google construya la entidad y, con el tiempo, un panel de conocimiento.
- **Consistencia NAP** (nombre, teléfono, dirección) idéntica en todas partes: su web, sus negocios, redes y directorios sectoriales en los que esté (entre ellos su ficha en consultoresgastronomicos.pro).
- **Perfil de Google Business** como consultor, además de los de sus locales.
- **Menciones de marca en prensa dominicana** — valen más que un enlace: son lo que sostiene la entidad y lo que citan los modelos de IA.
- **Sus tres negocios enlazando a su web personal**: bestiafire.pro y valerioburgerclub.com son activos propios que ya tienen tráfico y autoridad. Un enlace desde "el chef detrás de esta marca" hacia andresvalerio.com es la señal más natural y barata que existe, y hoy no se está aprovechando en ambas direcciones.

---

## 7. Arquitectura y nomenclatura: nombrar los servicios como los busca el mercado

**Distinción que hay que tener clarísima, porque confundirla arruina el SEO de una marca personal:**

- **Nomenclatura** = cómo llama el mercado a lo que necesita. Manda en la **URL, el `title`, el H1 y el menú**. No se negocia: es del mercado, no nuestra.
- **Propuesta de valor** ("el chef que opera") = por qué te eligen a ti y no a otro. Manda en el **subtítulo, el cuerpo, las pruebas y los casos**. Es lo que convierte una vez te han encontrado.

Nadie busca "el chef que opera". Buscan "consultor gastronómico" o "asesor de restaurantes" y **luego** deciden entre los que aparecen. Si la página no se llama como buscan, nunca llegan a leer lo que le diferencia. La regla operativa es: **título con la palabra del mercado, subtítulo con la palabra propia.**

### Cómo se llama la categoría (volumen global en español, ver §2)

| Nomenclatura | Vol. | CPC | Lectura |
|---|---|---|---|
| **consultoría gastronómica** | **720** | $0,36 | **Término cabeza indiscutible.** Debe mandar en el hub |
| asesor gastronómico | 320 | $0,41 | Variante "asesor" — la segunda familia |
| **consultoría para restaurantes** | **320** | $0,64 | Muy transaccional, CPC alto |
| asesoría gastronómica | 260 | $0,45 | Variante del cabeza |
| consultor gastronómico | 260 | $0,47 | Variante del cabeza |
| consultor / consultoría de restaurantes | 210 | $0,53 | Ya usado en `/consultoria/apertura/` |
| **consultor de franquicias** | **210** | $0,39 | **El segmento de alto ticket sí tiene nomenclatura propia** |
| **asesor de franquicias** | **170** | $0,46 | Suma 380 con la anterior |
| **consultoría hotelera** | **140** | **$1,45** | CPC alto = intención comercial fuerte. Punta Cana |
| asesor de restaurantes | 90 | $0,80 | |
| consultoría / asesoría hostelería | 70 | **$1,35–3,30** | **Ver aviso abajo** |
| asesor culinario | 50 | $0,11 | Marginal |
| chef consultor | 40 | $0,00 | **Es el H1 actual del hub. Casi sin demanda** |
| chef asesor · asesor hotelero · asesor de cocina | 10–20 | | Marginales |

**Volumen cero:** asesor en hostelería · consultor culinario · consultor de cocina · consultor para hoteles · consultor/asesor de alimentos y bebidas · **consultor/asesor/consultoría de catering** · experto en restaurantes · especialista en restaurantes.

**Dos avisos que salen de estos datos:**

1. **"Hostelería" es un término español, no dominicano.** Tiene los CPC más altos de toda la tabla ($1,35–3,30), lo que confirma demanda comercial real… en España. En RD no se dice "hostelería": se dice restaurantes, hotelería, alimentos y bebidas. **No usar "hostelería" en andresvalerio.com** — atraería tráfico español que nunca va a contratar a un consultor en Santo Domingo.
2. **"Consultor de catering" no lo busca nadie (cero).** El catering se busca como servicio final ("catering santo domingo", 210), no como consultoría. Conclusión: **el catering es una línea de negocio propia, no un servicio de consultoría que rentabilice una página**. Vender consultoría de catering por SEO no funciona; captar clientes de catering, sí.

### La cola larga: la matriz real y dónde está de verdad el volumen

Las variantes no son veinte: la nomenclatura se multiplica por cada tipo de negocio, de cocina y de modelo de explotación. Se barrieron ~330 combinaciones. El resultado es contundente y **desmonta la forma intuitiva de atacarlo**:

**1. La matriz {rol} × {concepto} no existe.** "Consultor de cafeterías", "asesor de pizzerías", "consultoría para bares", "asesor de panaderías"… **51 de 54 combinaciones por debajo de 50/mes**. Solo sobreviven las de "restaurante" (320 / 210 / 90), que ya están cubiertas. Crear una página por cada "consultor de X" produciría decenas de páginas sin demanda: *thin content* e *index bloat*, justo lo contrario de lo que se busca.

**2. La matriz {tarea} × {concepto} sí existe, pero fragmentada.** Nadie busca el rol; buscan la tarea aplicada a su negocio concreto:

| Keyword | Vol. | Comp. | Nota |
|---|---|---|---|
| **cómo montar una hamburguesería** | **260** | **0,02** | **Supera a "cómo abrir un restaurante". Es literalmente su negocio** |
| plan de negocios cafetería | 260 | 0,13 | |
| cómo abrir un restaurante | 210 | 0,30 | Ya tiene el post pilar |
| cómo abrir / montar una cafetería | 140 / 110 | 0,28 | El segundo concepto más buscado |
| costos de un hotel | 170 | 0,38 | Puerta al segmento hotelero |
| cuánto cuesta abrir una cafetería | 110 | 0,07 | |
| costos de un restaurante | 110 | 0,04 | |
| cómo abrir / montar un bar · cuánto cuesta montar un bar | 70–90 | 0,11 | |
| cómo montar una panadería · heladería · dark kitchen · buffet | 50–70 | 0,20 | Cada uno poco; **sumados, mucho** |

Ninguna pasa de 260, pero **hay decenas**. Ese es el patrón de la cola larga: se gana por acumulación, no por pieza.

**3. Donde de verdad hay volumen es en los conceptos transversales de operación:**

| Keyword | Vol. | Comp. | Valor para Andrés |
|---|---|---|---|
| ghost kitchen · dark kitchen · cocina oculta / fantasma | 74.000 · 40.500 · 1.900 / 1.300 | 0,05 | Enorme, pero **intención informativa** (qué es). Sirve para audiencia y autoridad, no para vender consultoría |
| **escandallo** | **6.600** | **0,05** | **Oro. Es exactamente lo que hace, y enlaza con el post de food cost que ya tiene** |
| brigada de cocina | 2.900 | 0,00 | Sin competencia. Encaja con su servicio de mentoría y formación de equipo |
| diseño de menú | 1.600 | 0,26 | Refuerza `/consultoria/desarrollo-carta/` |
| marketing gastronómico · para restaurantes | 1.000 · 880 | 0,33 | Adyacente; solo si lo ofrece de verdad |
| **estandarización de recetas** | **320** | **0,00** | **El paquete de franquicias** |
| **fichas técnicas de cocina** | **320** | **0,01** | **Ídem** |
| manual de operaciones restaurante | 110 | 0,07 | **Ídem** |
| escandallos de cocina · layout de cocina · procesos de cocina | 110–170 | 0,06–0,26 | |

> **Ojo con dos trampas de volumen.** "Food court" (550.000) es intención de consumidor buscando dónde comer, no B2B: **descartar**. Y "ghost kitchen"/"dark kitchen", pese a sus cifras, son búsquedas mayoritariamente informativas: valen para construir audiencia y autoridad, no para captar proyectos.

**El hallazgo accionable:** *estandarización de recetas* (320, competencia **0,00**) + *fichas técnicas de cocina* (320, competencia **0,01**) + *manual de operaciones* (110) son **exactamente el entregable de una consultoría de franquicias**, tienen demanda y **nadie compite por ellos**. Es la validación más fuerte de todo el estudio para priorizar `/consultoria/franquicias/`.

### El modelo de arquitectura que se deduce

No se ataca la cola larga con páginas de servicio, sino con tres niveles distintos:

| Nivel | Qué es | Cuántas | Se nombra con |
|---|---|---|---|
| **1. Servicios** | Páginas comerciales que convierten | **Pocas (5-6)** | Nomenclatura **cabeza**: consultoría gastronómica, consultoría para restaurantes, franquicias, hotelera |
| **2. Pilares de operación** | Guías profundas sobre lo transversal | 5-8 | Escandallo, fichas técnicas, brigada de cocina, ingeniería de menú, food cost |
| **3. Cola larga por concepto** | Un post por {tarea}×{concepto} | **Decenas, escalable** | "Cómo montar una hamburguesería", "cuánto cuesta abrir una cafetería", "plan de negocios para un bar"… |

El nivel 3 es donde vive la escala que intuías, y es **contenido, no páginas de servicio**: cada pieza vale 50–260/mes, se produce con el pipeline que ya tenemos (bridge + imágenes) y todas enlazan hacia el nivel 1. Es el mismo patrón hub-and-spoke del modelo de referencia, pero anclado a conceptos de negocio en vez de a barrios de Madrid.

**Por dónde empezar el nivel 3:** "cómo montar una hamburguesería" (260, competencia 0,02). Es el que mejor volumen tiene, el de menor competencia y el único que **solo él puede escribir con autoridad real** — lleva años operando Valerio Burger Club. Ahí la propuesta de valor y la intención de búsqueda por fin coinciden.

### Qué corregir en lo que ya existe

> **Principio: no se elimina ni se renombra nada. El SEO suma, no sustituye.**
>
> Hay servicios que **no se buscan y aun así tienen que estar**, porque son parte de la mecánica comercial: el **diagnóstico** es el producto de entrada con el que el consultor filtra al prospecto, entiende qué necesita y cobra por cualificar — es el mismo mecanismo que usa el modelo de referencia (diagnóstico desde 1.250 € como activador de toda la escalera). Su nombre es parte del método, no una decisión de SEO.
>
> Por eso hay que distinguir dos tipos de página, y tratarlas distinto:
>
> - **Páginas de captación** — existen para que las encuentren. Mandan la nomenclatura y el volumen (hub de consultoría, franquicias, hotelera, carta).
> - **Páginas de producto/método** — existen porque el negocio funciona así, se llegue a ellas por el menú, por un CTA o por recomendación. Su nombre lo decide el servicio (diagnóstico, mentoría). Se optimizan **añadiendo** señales de búsqueda en `title` y entradilla, nunca cambiando lo que son.
>
> Ninguna recomendación de este documento implica borrar trabajo ya hecho: todo es sumar capas sobre lo publicado.

| Página | Hoy | Debería | Por qué |
|---|---|---|---|
| **Home** | H1: "Andrés Valerio" | Nombre **+ categoría**: "Andrés Valerio · Consultor gastronómico en República Dominicana", con "el chef que opera" de subtítulo | Un H1 con solo el nombre no dice a Google de qué va la página, y el nombre aún no tiene volumen propio |
| **`/consultoria/`** | H1: "Chef consultor en República Dominicana" | H1 con **"Consultoría gastronómica"** (720); "chef consultor" al subtítulo | "Chef consultor" tiene 40/mes. El `title` ya acierta; el H1 tira la mejor keyword del mapa |
| **`/consultoria/desarrollo-carta/`** | "Desarrollo y renovación de carta" | Incorporar **"carta de restaurante"** (5.400) al title y al H1 | Es la segunda keyword con más volumen de todo el estudio y la página existe ya |
| **`/consultoria/diagnostico/`** | "Diagnóstico gastronómico" | **Mantener el producto y su nombre.** Sumar en el `title` y la entradilla el dolor que resuelve ("tu restaurante factura y no deja beneficio") sin tocar el H1 ni la propuesta | Página **de producto**, no de captación: es la puerta de entrada de pago que cualifica al cliente. Que no tenga volumen es irrelevante — su tráfico llega del menú, del CTA y de los posts |
| **`/consultoria/mentoria/`** | "Mentoría gastronómica para chefs" | Mantener. Puede sumar "brigada de cocina" (2.900, competencia 0,00) en el cuerpo | Página de producto. Coherente con su perfil, y ahora con una keyword transversal que sí tiene demanda |
| **`/sobre-mi/`** | H1: "Alta cocina de calle" | Mantener el lema, **añadir la categoría** en title y entradilla | Es la página que valida la referencia cuando buscan su nombre (§6, capa 3) |

**No cambiar las URLs existentes.** El SEO acumulado vive en ellas y el sitio lleva meses indexado; el ajuste va en `title`, H1 y entradilla, que es donde está el problema.

### Páginas que faltan

Hoy el sitio tiene 4 servicios: diagnóstico, apertura, desarrollo de carta y mentoría. Comparado con el modelo de referencia y con la nomenclatura de arriba, falta:

| Pieza | Por qué | Prioridad |
|---|---|---|
| **Consultoría de franquicias** (`/consultoria/franquicias/`) | Segmento de mayor ticket, 90 marcas locales activas, sin competencia — y **nomenclatura con 380 de volumen acumulado** entre "consultor" y "asesor de franquicias" | **Alta** |
| **Consultoría hotelera / F&B** (`/consultoria/hotelera/`) | Punta Cana es el dinero grande del país. 140 de volumen con **el CPC más alto de la tabla ($1,45)** | Media |
| **Casos de éxito con cifras** | Es lo que convierte. Hoy no existe ninguno | **Alta** |
| **Navegación "por problema"** | El eje que hace funcionar a ChefBusiness. La gente busca su problema | **Alta** |
| **Páginas por ciudad** (Santo Domingo, Santiago, Punta Cana) | Cubre el eje donde opera y el 84% del parque de franquicias | Media |
| **Atribución de leads en los CTA** | Se mide con Search Console (decisión tomada: no se usa GA4 ni Clarity). GSC cubre la adquisición, pero **no dice qué página genera contactos**. Ver nota abajo | **Alta** |
| Producto digital (plantilla de escandallo, calculadora de food cost) | Captura de leads + ingreso pasivo. Encaja con el volumen de "food cost" | Media |

---

## 8. Plan de 90 días

**Mes 1 — cimientos y medición**
- **Medición**: la propiedad **ya está verificada en Search Console por DNS** (registro TXT en el apex, que cubre apex y www), y el sitemap está declarado en `robots.txt` y accesible. No hace falta la meta de verificación ni `PUBLIC_GSC_VERIFICATION`. **No se usa GA4 ni Clarity: es una decisión deliberada**, todo el seguimiento técnico se hace en GSC.
- **Cubrir el punto ciego de GSC**: Search Console dice quién llega y por qué consulta, pero no qué página genera el contacto. Como todos los CTA apuntan al mismo `wa.me` sin texto prellenado, hoy es imposible atribuir un lead a una página. Solución sin analítica ni cookies: **un `?text=` distinto por página** ("Hola Andrés, te escribo desde la página de franquicias"), de modo que la atribución llegue escrita en el propio mensaje.
- **Sumar nomenclatura a las páginas existentes** (§7): H1 de la home y del hub, "carta de restaurante" en desarrollo-carta, y entradilla de diagnóstico. Es lo más barato y rentable de todo el plan: **títulos y entradillas, sin tocar una sola URL, sin renombrar ningún servicio y sin eliminar nada de lo publicado.**
- Optimizar los dos activos existentes: variante "menu engineering" en el post de ingeniería de menú; revisión del post de food cost.
- Crear la página de **consultoría de franquicias**.
- Preparar 2 casos de éxito con números (empezando por sus propios negocios).
- Consolidar el schema `Person` con `sameAs` y cerrar el enlazado entre sus tres negocios y su web personal.

**Mes 2 — contenido donde está la demanda y ventana de PR**
- Arrancar el **nivel 3** (§7) con "cómo montar una hamburguesería" (260, competencia 0,02): mejor ratio volumen/competencia del estudio y el único que solo él puede firmar.
- Pilar de **escandallo** (6.600, competencia 0,05) enlazado al de food cost — el mayor activo transversal sin explotar.
- Primer contenido del clúster de **franquicias**, atacando *estandarización de recetas* y *fichas técnicas de cocina* (competencia 0,00–0,01).
- **Septiembre es el Mes de la Gastronomía Dominicana**: preparar en agosto el contenido y el acercamiento a ADERES y a prensa para publicar en fecha.
- Activar LinkedIn con cadencia semanal.

**Mes 3 — autoridad y escala**
- Clúster de **formación / manipulación de alimentos** (el mayor volumen del mapa).
- Páginas por ciudad: Santo Domingo y Santiago.
- Primer producto digital (plantilla de escandallo o calculadora de food cost).
- Buscar la primera aparición en prensa dominicana con datos propios.

---

## 9. Cómo se mide

Todo con Search Console (más el conteo manual de contactos), a los 90 días:

- **Leads cualificados por mes** (el único KPI que importa) y su origen — atribuible por el `?text=` de cada CTA.
- Posiciones e impresiones para: food cost, menu engineering, escandallo, carta de restaurante, consultoría gastronómica, franquicias.
- Clics y CTR **filtrando por país = República Dominicana** en GSC, que es el dato que de verdad importa (el tráfico hispano global infla las cifras sin traer clientes).
- Consultas por las que aparece sin buscarlas: son las que indican qué demanda real existe en su mercado.
- Menciones de marca y citaciones en prensa.
- Conversión de post → página de servicio → contacto.

**Expectativa honesta:** el SEO en este nicho no dará un caudal de leads, porque la demanda de búsqueda de la categoría no existe. Dará **credibilidad** (el prospecto que oyó su nombre lo busca y encuentra un profesional serio) y **captación lateral** por los contenidos operativos. Los primeros clientes de consultoría seguirán viniendo de referencias, red y prensa. La web es lo que hace que esa referencia cierre en vez de enfriarse.

---

## 10. Riesgos

1. **Confundir tráfico con negocio.** "Curso de manipulación de alimentos" tiene mucho volumen y casi ninguna intención de contratar consultoría. Sirve para captar audiencia e infoproducto, no para vender proyectos.
2. **Solapamiento de ángulo con otras webs del sector en español.** andresvalerio.com compite en las mismas keywords genéricas que cualquier web hispana de consultoría gastronómica, incluida ChefBusiness. No es un problema mientras cada contenido se ancle a lo que solo él puede escribir: **RD$, ITBIS, suplidores dominicanos, permisos locales y sus propios negocios**. Ese anclaje es a la vez la diferenciación SEO y la propuesta de valor. Ya se aplicó al publicar el post de ingeniería de menú.
3. **Depender del canal equivocado.** Apostarlo todo al SEO en un mercado sin demanda de categoría es el error más caro posible aquí.
4. **Falta de casos propios.** Sin resultados cuantificados de clientes, la venta de consultoría de alto ticket se atasca. Es el activo más urgente del plan.
5. **Dispersión.** Cuatro segmentos a la vez no se pueden atacar. El orden es: restaurantes (base) → franquicias (dinero) → hotelería (medio plazo), con street food como credencial transversal.

---

## Fuentes

- Banco Central de RD vía [Acento](https://acento.com.do/turismo/hoteles-bares-y-restaurantes-crece-5-9-impulsados-por-auge-del-turismo-en-rd-9688482.html) y [Resumen Turismo](https://resumenturismo.com/sector-hoteles-bares-y-restaurantes-crecio-un-6-2-en-mayo-2026banco-central-de-la-republica-dominicana-bcrd/)
- ADERES, prioridades 2026–2027: [Diario Libre](https://www.diariolibre.com/revista/sociales/2026/07/25/aderes-define-prioridades-estrategicas-del-periodo-2026-2027/3610497) · [Arecoa](https://www.arecoa.com/destinos/2026/07/23/aderes-define-prioridades-estrategicas-para-el-periodo-2026-2027/)
- Franquicias y ADOFRA: [Acento](https://acento.com.do/el-financiero/en-el-pais-existen-90-marcas-dominicanas-que-son-franquicias-8967322.html) · [Acento (opinión)](https://acento.com.do/opinion/franquicias-en-republica-dominicana-un-modelo-de-negocio-en-expansion-9508750.html)
- Turismo gastronómico: [Acento](https://acento.com.do/turismo/gastronomia-dominicana-un-motor-turistico-que-gana-protagonismo-9637629.html) · [El Dinero](https://eldinero.com.do/338870/la-cocina-dominicana-un-factor-diferenciador-en-la-oferta-turistica/)
- Street food y su evolución: [The Foodie Studies](https://thefoodiestudies.com/comida-en-la-calle-i-del-triciclo-al-foodtruck-en-santo-domingo-republica-dominicana/) · [Listín Diario](https://listindiario.com/la-vida/2016/03/18/412091/la-cocina-callejera-evoluciona.html)
- Competencia: [Masterestaurant Santo Domingo](https://masterestaurant.com/conferencista-internacional-restaurantes/conferencista-internacional-experto-restaurantes-santo-domingo-republica-dominicana.html)
- Modelo de referencia: [ChefBusiness.co](https://chefbusiness.co/)
- Volúmenes: Keywords Everywhere (Google Keyword Planner), con la salvedad metodológica de §2.
