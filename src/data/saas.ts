/**
 * Representación oficial de Miselup y Timlup en República Dominicana.
 *
 * Andrés es representante, distribuidor oficial e implementador de los dos SaaS
 * del grupo. El cliente CONTRATA DIRECTAMENTE en la web oficial de cada producto
 * (Stripe, en euros): aquí los precios son ORIENTATIVOS, para que sepa a qué se
 * enfrenta antes de la llamada. Nunca hay checkout en andresvalerio.com.
 *
 * Los importes en € son la fuente de verdad y salen de `web/src/lib/billing-plans.ts`
 * de cada repo. US$ y RD$ se DERIVAN aquí con `TASAS`, así que actualizar el
 * cambio es tocar una sola constante y no doce cifras repartidas por las páginas.
 */

/** Cambio del 2026-08-24 (open.er-api.com). Es la única pieza que caduca. */
export const TASAS = {
  usd: 1.168,
  dop: 68.49,
  /** Fecha legible para la nota al pie de las tablas de precios. */
  fecha: 'agosto de 2026',
} as const;

/** €19 → "22". Redondeo al entero: son cifras de referencia, no facturables. */
export function aUSD(eur: number): string {
  if (eur === 0) return '0';
  return Math.round(eur * TASAS.usd).toLocaleString('es-DO');
}

/** €19 → "1,300". Redondeo a la decena para que no aparente falsa precisión. */
export function aDOP(eur: number): string {
  if (eur === 0) return '0';
  return (Math.round((eur * TASAS.dop) / 10) * 10).toLocaleString('es-DO');
}

export interface Captura {
  title: string;
  caption: string;
  /** Ruta en /public. Sin ella se pinta un esqueleto etiquetado, nunca una imagen rota. */
  src?: string;
  alt?: string;
}

export interface Plan {
  nombre: string;
  /** € al mes, sin impuestos. null = a medida.
   *  Aquí NO se publican planes gratuitos ni de entrada: ver la nota de
   *  `PLANES_MINIMOS` más abajo. */
  eur: number | null;
  /** Qué se paga: por organización o por local. Cambia el sentido del precio. */
  unidad: string;
  resumen: string;
  incluye: string[];
  destacado?: boolean;
}

/**
 * Una banda del baremo de implementación. Importes en US$ porque es lo que se
 * factura en el mercado dominicano — a diferencia de la suscripción, que la
 * cobra la plataforma en euros.
 */
export interface BandaImplantacion {
  banda: string;
  /** A qué perfil de negocio le toca esta banda. Es el criterio, no un adorno. */
  perfil: string;
  incluye: string;
  /** US$. Fee MENSUAL en Miselup; pago ÚNICO en Timlup. Ver `colImporte`. */
  importe: number;
  meses: number;
  /** US$ que suma el servicio entero (`importe` × `meses`). */
  total: number;
  /** Seguimiento opcional del mes siguiente, en US$. null = esta banda no lleva. */
  seguimiento?: number | null;
}

/** El baremo público de implementación de un producto. */
export interface Implantacion {
  intro: string;
  /** Cabecera de la columna del importe: cambia si se factura por mes o de una vez. */
  colImporte: string;
  bandas: BandaImplantacion[];
  /** Reglas al pie de la tabla (multi-local, seguimiento, suscripción aparte). */
  notas: string[];
}

export interface Saas {
  slug: string;
  nombre: string;
  url: string;
  /** Color de marca del producto, para el acento co-branded. */
  brand: string;
  brandInk: string;
  brandSoft: string;
  tagline: string;
  /** Frase corta para banners y tarjetas del hub. */
  gancho: string;
  planes: Plan[];
  /** Nota al pie de la tabla de precios. */
  notaPrecios: string;
  /** Baremo de implementación en RD. Es lo que factura Andrés, no la plataforma. */
  implantacion: Implantacion;
}

/** Anual = mensual × 10 en ambos productos (dos meses libres). */
export const MESES_ANUAL = 10;

/**
 * SUELO DE SUSCRIPCIÓN. Los dos productos tienen planes gratuitos y de entrada
 * en su web oficial, pero AQUÍ NO SE PUBLICAN NI SE IMPLEMENTAN: por debajo de
 * estos importes el SaaS no da la capacidad que el montaje necesita (recetas
 * ilimitadas e inventario en Miselup, multi-local y listas ilimitadas en
 * Timlup), y una implementación sobre un plan corto se queda a medias.
 *
 * Decisión de negocio de John (2026-09-01). Si algún día se reabre, se toca
 * aquí y se vuelven a añadir los planes a `planes[]` — no al revés.
 */
export const PLANES_MINIMOS = { miselup: 49, timlup: 29 } as const;

/** 1950 → "1,950". Mismo formato de miles que el resto de cifras de la página. */
export function usd(n: number): string {
  return n.toLocaleString('es-DO');
}

/** Multiplicador multi-local del baremo: cada local adicional suma un +50 %. */
export const MULTI_LOCAL =
  'Cada local adicional suma un +50 % sobre el baremo: 2 locales ×1,5 · 3 locales ×2,0 · 4 locales ×2,5.';

export const MISELUP: Saas = {
  slug: 'miselup',
  nombre: 'Miselup',
  url: 'https://miselup.pro/',
  brand: '#0f9e8c',
  brandInk: '#07604f',
  brandSoft: '#e3f4f1',
  tagline: 'Costeo de recetas, fichas técnicas y food cost',
  gancho: 'Sabe lo que te cuesta cada plato, con las mermas adentro.',
  planes: [
    {
      nombre: 'Pro',
      eur: 49,
      unidad: 'por negocio / mes',
      resumen: 'El que uso yo, y el mínimo que pido para implementar.',
      incluye: [
        'Recetas y fichas técnicas ilimitadas',
        'Costeo de recetas con mermas y costo por ración',
        'Catálogo de más de 1.200 ingredientes',
        'IA de cocina para fichas y costeos',
        'Inventario, producción y compras',
        'P&L diario y rentabilidad por plato',
        'Registro de temperaturas HACCP',
        'Exportación a PDF y CSV',
      ],
      destacado: true,
    },
    {
      nombre: 'Cumplimiento',
      eur: 79,
      unidad: 'por negocio / mes',
      resumen: 'Para quien recibe inspección y necesita el libro al día.',
      incluye: [
        'Todo lo del plan Pro',
        'Suite HACCP completa',
        'Caducidades, lotes y trazabilidad',
        'Etiquetas de alérgenos',
        'Informe de inspección',
      ],
    },
  ],
  notaPrecios:
    'Precio por negocio, no por usuario: puedes meter a toda tu brigada sin que suba la factura.',
  implantacion: {
    intro:
      'Levantamiento y estandarización de recetas, costeos, proveedores, costos, formas de cocción y alérgenos. La implementación completa lleva 3 meses: de 1 a 1,5 meses de trabajo offline más de 1 a 1,5 meses online. Se factura como fee mensual, con independencia de las horas invertidas.',
    colImporte: 'Fee mensual',
    bandas: [
      {
        banda: 'Micro',
        perfil:
          'Local muy pequeño de un solo emprendedor: hasta 3 personas en cocina, carta corta y recetas ya usables (no hay que rehacerlas desde cero).',
        incluye:
          'Solo el montaje: levantamiento, carga en la plataforma y formación básica para arrancar. Sin los 3 meses de acompañamiento.',
        importe: 600,
        meses: 1,
        total: 600,
      },
      {
        banda: 'Baja',
        perfil:
          'Hasta 50 pax de aforo · 3 personas en cocina · carta pequeña · un solo emprendedor · un solo local.',
        incluye:
          'Implementación completa con acompañamiento: hay que estandarizar las recetas desde cero.',
        importe: 650,
        meses: 3,
        total: 1950,
      },
      {
        banda: 'Media',
        perfil:
          '60–80 pax de aforo · 5–6 empleados en cocina · 1–2 socios emprendedores · un solo local.',
        incluye: 'Implementación completa con acompañamiento.',
        importe: 750,
        meses: 3,
        total: 2250,
      },
      {
        banda: 'Alta',
        perfil:
          'Por encima de la banda media: más aforo, más personal que formar, carta más amplia o más volumen de datos que cargar.',
        incluye: 'Implementación completa con acompañamiento.',
        importe: 950,
        meses: 3,
        total: 2850,
      },
    ],
    notas: [MULTI_LOCAL],
  },
};

export const TIMLUP: Saas = {
  slug: 'timlup',
  nombre: 'Timlup',
  url: 'https://timlup.pro/',
  brand: '#2f6bff',
  brandInk: '#1338a8',
  brandSoft: '#eaf0ff',
  tagline: 'Checklists de tareas recurrentes',
  gancho: 'Sabe qué se hizo cada día, quién lo firmó y a qué hora.',
  planes: [
    {
      nombre: 'Pro',
      eur: 29,
      unidad: 'por local / mes',
      resumen: 'El mínimo que pido para implementar, y el que sirve con dos locales.',
      incluye: [
        'Multi-local, gestores y empleados ilimitados',
        'Listas ilimitadas',
        'Empleados que fichan con PIN desde su celular',
        'Firma digital y semáforo de cumplimiento',
        'Recurrencia diaria, semanal, mensual y anual',
        'Plantillas replicables entre locales',
        'Métricas comparadas por local y área',
        'Historial de un año e informes por email',
      ],
      destacado: true,
    },
    {
      nombre: 'Avanzado',
      eur: 49,
      unidad: 'por local / mes',
      resumen: 'Para operaciones exigentes que quieren arranque acompañado.',
      incluye: ['Todo lo del plan Pro', 'Onboarding uno a uno prioritario'],
    },
    {
      nombre: 'Enterprise',
      eur: null,
      unidad: 'a medida',
      resumen: 'Para cadenas y franquicias con muchos locales.',
      incluye: [
        'Descuento por volumen desde 7 locales',
        'Onboarding y soporte dedicado',
      ],
    },
  ],
  notaPrecios:
    'Aquí el precio es por local: si abres una sucursal, se suma. Desde siete locales entra el descuento por volumen.',
  implantacion: {
    intro:
      'Levantamiento de las listas de tareas por área de trabajo y por franja horaria, y montaje en la plataforma. No hay recetas, costos, proveedores, cálculos, formas de cocción ni alérgenos: por eso cuesta un 30 % menos que Miselup y se resuelve en un solo mes, en un pago único.',
    colImporte: 'Pago único',
    bandas: [
      {
        banda: 'Micro',
        perfil:
          'Local muy pequeño de un solo emprendedor: pocas áreas de trabajo y pocas franjas horarias. Las listas de tareas son sencillas de levantar.',
        incluye:
          'Tarifa cerrada de la banda Micro. Se combina con Miselup Micro en el paquete de 800 US$.',
        importe: 200,
        meses: 1,
        total: 200,
        seguimiento: null,
      },
      {
        banda: 'Baja',
        perfil:
          'Hasta 50 pax de aforo · 3 personas en cocina · un solo emprendedor · un solo local.',
        incluye: 'El baremo de Miselup Baja (650 US$) menos un 30 %.',
        importe: 455,
        meses: 1,
        total: 455,
        seguimiento: 137,
      },
      {
        banda: 'Media',
        perfil:
          '60–80 pax de aforo · 5–6 empleados en cocina · 1–2 socios emprendedores.',
        incluye: 'El baremo de Miselup Media (750 US$) menos un 30 %.',
        importe: 525,
        meses: 1,
        total: 525,
        seguimiento: 158,
      },
      {
        banda: 'Alta',
        perfil:
          'Por encima de la banda media: más áreas de trabajo, más personal y más franjas horarias que cubrir.',
        incluye: 'El baremo de Miselup Alta (950 US$) menos un 30 %.',
        importe: 665,
        meses: 1,
        total: 665,
        seguimiento: 200,
      },
    ],
    notas: [
      'Seguimiento opcional el mes siguiente al de la implementación: un 30 % del importe cobrado, para pulir y ajustar las listas ya creadas. La banda Micro no lleva seguimiento, es un servicio de un solo mes.',
      MULTI_LOCAL,
    ],
  },
};

/**
 * El único precio cerrado que combina las dos plataformas. Es la puerta de
 * entrada del emprendedor pequeño: un mes por herramienta, sin seguimiento.
 * Los importes SALEN de las bandas Micro de arriba (600 + 200); si una cambia,
 * este total deja de cuadrar y hay que revisarlo.
 */
export const PAQUETE_MICRO = {
  total: 800,
  alcance: 'Un mes para cada herramienta, sin seguimiento.',
  lineas: [
    {
      saas: 'Miselup',
      concepto: 'Implementación Micro',
      alcance: 'Montaje de recetas, costeos y costos',
      importe: 600,
    },
    {
      saas: 'Timlup',
      concepto: 'Implementación Micro',
      alcance: 'Montaje de las listas de tareas',
      importe: 200,
    },
  ],
} as const;

/**
 * Filas de precio para el Schema.org Offer de una landing. Mezcla las dos
 * tablas A PROPÓSITO: la suscripción (US$ derivados del €, orientativos) y el
 * baremo de implementación (US$ cerrados, lo que se factura de verdad en RD).
 * Los buscadores —y los de IA— leen ofertas, no tablas HTML, y el servicio de
 * implementación es justo lo que Andrés quiere que encuentren.
 */
export function filasOferta(s: Saas) {
  return [
    ...s.planes
      .filter((p) => p.eur !== null)
      .map((p) => ({
        modalidad: `${s.nombre} ${p.nombre} · suscripción`,
        alcance: p.resumen,
        rd: aDOP(p.eur!),
        us: aUSD(p.eur!),
      })),
    ...s.implantacion.bandas.map((b) => ({
      modalidad: `Implementación de ${s.nombre} · banda ${b.banda}`,
      alcance: b.incluye,
      rd: '',
      us: usd(b.total),
    })),
  ];
}

export const SAAS = [MISELUP, TIMLUP];

/** Ruta base de la sección. Un solo sitio que tocar si algún día se mueve. */
export const HUB = '/consultoria/software-gestion/';
export const rutaSaas = (slug: string) => `${HUB}${slug}/`;
