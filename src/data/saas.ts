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
  /** € al mes, sin impuestos. 0 = gratis, null = a medida. */
  eur: number | null;
  /** Qué se paga: por organización o por local. Cambia el sentido del precio. */
  unidad: string;
  resumen: string;
  incluye: string[];
  destacado?: boolean;
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
}

/** Anual = mensual × 10 en ambos productos ("dos meses gratis"). */
export const MESES_ANUAL = 10;

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
      nombre: 'Gratis',
      eur: 0,
      unidad: 'para siempre',
      resumen: 'Para probar el flujo completo con tu carta real.',
      incluye: [
        'Hasta 50 recetas propias',
        'Costeo de recetas con mermas y costo por ración',
        'Fichas técnicas y alérgenos',
        'Catálogo de más de 1.200 ingredientes',
        'Sin tarjeta',
      ],
    },
    {
      nombre: 'Esencial',
      eur: 19,
      unidad: 'por negocio / mes',
      resumen: 'Para una carta que ya rueda y crece.',
      incluye: [
        'Hasta 250 recetas propias',
        'Todo lo del plan Gratis',
        'Exportación a PDF y CSV',
        'Oferta de cartas y menús',
      ],
    },
    {
      nombre: 'Pro',
      eur: 49,
      unidad: 'por negocio / mes',
      resumen: 'El que uso yo. Recetas sin límite y los números del día.',
      incluye: [
        'Recetas ilimitadas',
        'IA de cocina para fichas y costeos',
        'Inventario, producción y compras',
        'P&L diario y rentabilidad por plato',
        'Registro de temperaturas HACCP',
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
      nombre: 'Gratis',
      eur: 0,
      unidad: 'para siempre',
      resumen: 'Para digitalizar la apertura y el cierre de un local.',
      incluye: [
        '1 local',
        'Hasta 5 listas activas',
        'Hasta 2 empleados con PIN',
        'Firma digital y semáforo de cumplimiento',
        'Sin tarjeta',
      ],
    },
    {
      nombre: 'Esencial',
      eur: 19,
      unidad: 'por local / mes',
      resumen: 'Para un local con equipo y rutina de verdad.',
      incluye: [
        'Hasta 50 listas activas',
        'Hasta 15 empleados con PIN',
        'Recurrencia diaria, semanal, mensual y anual',
        'Listas estacionales',
        'Historial de un año',
      ],
    },
    {
      nombre: 'Pro',
      eur: 29,
      unidad: 'por local / mes',
      resumen: 'Para quien tiene más de un local y no puede estar en los dos.',
      incluye: [
        'Multi-local, gestores y empleados ilimitados',
        'Listas ilimitadas',
        'Plantillas replicables entre locales',
        'Métricas comparadas por local y área',
        'Informes por email',
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
};

export const SAAS = [MISELUP, TIMLUP];

/** Ruta base de la sección. Un solo sitio que tocar si algún día se mueve. */
export const HUB = '/consultoria/software-gestion/';
export const rutaSaas = (slug: string) => `${HUB}${slug}/`;
