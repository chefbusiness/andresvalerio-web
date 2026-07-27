/**
 * Datos de contacto centralizados + atribución de origen del lead.
 *
 * No se usa GA4 ni Clarity: la medición es Search Console, que cubre la
 * adquisición pero no dice qué página genera el contacto. Para cerrar ese
 * hueco, cada CTA lleva un mensaje prellenado distinto, de modo que la
 * atribución le llega a Andrés escrita en el propio WhatsApp o correo.
 */

export const WHATSAPP = '18098847605';
export const EMAIL = 'hola@andresvalerio.com';

/** Etiqueta legible por ruta, para el mensaje prellenado. */
const ORIGENES: Record<string, string> = {
  '/': 'la página principal',
  '/consultoria/': 'la página de consultoría',
  '/consultoria/diagnostico/': 'la página del diagnóstico gastronómico',
  '/consultoria/apertura/': 'la página de apertura y concepto',
  '/consultoria/desarrollo-carta/': 'la página de desarrollo de carta',
  '/consultoria/mentoria/': 'la página de mentoría',
  '/consultoria/franquicias/': 'la página de franquicias y expansión',
  '/sobre-mi/': 'la página sobre ti',
  '/blog/': 'el blog',
  '/recetas/': 'las recetas',
  '/proyectos/': 'la página de proyectos',
  '/contacto/': 'la página de contacto',
};

/** Devuelve la etiqueta de una ruta; para blog y proyectos, cae al listado. */
export function etiquetaOrigen(pathname: string): string | null {
  if (ORIGENES[pathname]) return ORIGENES[pathname];
  if (pathname.startsWith('/blog/')) return 'un artículo del blog';
  if (pathname.startsWith('/recetas/')) return 'una receta';
  if (pathname.startsWith('/proyectos/')) return 'una página de proyectos';
  return null;
}

/** Mensaje prellenado. Sin origen conocido, uno neutro que sigue siendo útil. */
export function mensaje(origen?: string | null): string {
  return origen
    ? `Hola Andrés, te escribo desde ${origen} de tu web.`
    : 'Hola Andrés, te escribo desde tu web.';
}

/** URL de WhatsApp con el mensaje prellenado. */
export function whatsappUrl(origen?: string | null): string {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje(origen))}`;
}

/** mailto con asunto atribuido. */
export function emailUrl(origen?: string | null): string {
  const asunto = origen ? `Consulta desde ${origen}` : 'Consulta desde la web';
  return `mailto:${EMAIL}?subject=${encodeURIComponent(asunto)}`;
}
