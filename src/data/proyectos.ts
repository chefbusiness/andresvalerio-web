// Negocios/proyectos abiertos de Andrés Valerio.
// ESTRUCTURA-PRIMERO: textos provisionales — el contenido final se genera con
// bridge.py (DeepSeek) + imágenes con la skill generate-images (ver memoria
// project-proyectos-section). No usar stock de IA mediterráneo; estética
// fast-good / producto local / parrilla, fotos reales de Valerio.

export interface Proyecto {
  slug: string;
  nombre: string;
  categoria: string;      // eyebrow corto
  tagline: string;        // frase de marca
  resumen: string;        // tarjeta + lead del hero (provisional)
  estado: string;         // etiqueta de estado
  externo?: string;       // URL externa (Valerio Burger Club tiene web propia)
  imagen?: string;        // foto real (opcional); si no, bloque de marca
  highlights: string[];   // puntos provisionales
}

export const proyectos: Proyecto[] = [
  {
    slug: 'valerio-burger-club',
    nombre: 'Valerio Burger Club',
    categoria: 'Restaurante · Chef-propietario',
    tagline: 'Pasión · técnica · fuego',
    resumen:
      'El restaurante de Andrés: hamburguesa de autor y cocina de producto donde la teoría se cocina cada día. Producto, costos, equipo y pase, vividos en primera persona.',
    estado: 'Abierto',
    externo: 'https://valerioburgerclub.com',
    imagen: '/images/hero/andres-burger.jpg',
    highlights: [
      'Hamburguesa de autor y cocina de producto',
      'Concepto, carta y operación propios',
      'La cocina donde se prueba todo lo que asesoro',
    ],
  },
  {
    slug: 'burger-master-academy',
    nombre: 'Burger Master Academy',
    categoria: 'Formación',
    tagline: 'Aprende el oficio, no solo la receta',
    resumen:
      'Cursos de Valerio sobre hamburguesas, panes, carnes y aderezos: el conocimiento de la cocina de producto, llevado a cocineros, emprendedores y aficionados.',
    estado: 'Activo',
    highlights: [
      'Cursos de hamburguesas, panes, carnes y aderezos',
      'Método práctico, de la técnica al pase',
      'Para cocineros, emprendedores y aficionados',
    ],
  },
  {
    slug: 'catering-fast-good',
    nombre: 'Catering Fast Good',
    categoria: 'Catering · Eventos',
    tagline: 'Cocina de producto, fuera de la cocina',
    resumen:
      'Servicio de catering y chef at home: la propuesta fast-good de Valerio llevada a eventos, celebraciones y experiencias privadas.',
    estado: 'Activo',
    highlights: [
      'Catering para eventos y celebraciones',
      'Experiencias de chef at home',
      'Producto y ejecución de Valerio',
    ],
  },
  {
    slug: 'bbq-parrilla-events',
    nombre: 'BBQ Parrilla Events by Valerio',
    categoria: 'Parrilla · Eventos',
    tagline: 'Fuego, humo y producto',
    resumen:
      'Servicio independiente de parrilla y BBQ para eventos: paquetes, montaje y ejecución con el sello de producto y fuego de Valerio.',
    estado: 'Activo',
    highlights: [
      'Parrilla y BBQ para eventos (B2C y B2B)',
      'Paquetes y montaje a medida',
      'Marca propia (dominio propio próximamente)',
    ],
  },
];
