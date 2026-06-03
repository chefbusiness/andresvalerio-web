// Contenido enriquecido de las landings de Proyectos.
// Generado con bridge.py (DeepSeek v4-pro) a partir de fuente del grupo, adaptado a RD.
// No editar a mano contenido largo: regenerar con bridge.py.

export interface ProyectoContenido {
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroLead: string;
  intro: string[];
  paraQuien: { titulo: string; desc: string }[];
  formatos: { nombre: string; desc: string }[];
  queIncluye: string[];
  faq: { q: string; a: string }[];
  secLabels?: {
    paraQuien?: { eyebrow: string; titulo: string };
    formatos?: { eyebrow: string; titulo: string };
    incluye?: { eyebrow: string; titulo: string };
  };
}

export const proyectosContenido: Record<string, ProyectoContenido> = {
  "bbq-parrilla-events": {
    "secLabels": {
      "paraQuien": { "eyebrow": "Para quién", "titulo": "Pensado para tu evento" },
      "formatos": { "eyebrow": "Experiencias", "titulo": "Formatos de parrilla a elegir" },
      "incluye": { "eyebrow": "Qué incluye", "titulo": "Servicio completo, llave en mano" }
    },
    "metaTitle": "BBQ Parrilla Events by Valerio | Parrilla para eventos en RD",
    "metaDescription": "Llevamos la parrilla y el fuego a tu evento en Santo Domingo y todo RD. Cortes premium, show en vivo, servicio completo. Pide tu presupuesto a medida.",
    "heroTitle": "Fuego, cortes y sabor: evento a la parrilla",
    "heroLead": "BBQ Parrilla Events by Valerio lleva el asador a donde estés. Montamos la parrilla, encendemos el fuego y servimos una experiencia de carne y brasas que tus invitados no olvidarán.",
    "intro": [
      "En BBQ Parrilla Events by Valerio transformamos tu celebración en un espectáculo de fuego y sabor. Somos un servicio de parrilla itinerante premium: llevamos nuestros equipos, nuestros cortes seleccionados y nuestro equipo de parrilleros profesionales a cualquier rincón de República Dominicana. Bodas, cumpleaños, eventos corporativos o reuniones privadas: nosotros ponemos la parrilla, el humo y la sazón.",
      "Detrás de cada brasa está el chef Andrés Valerio, creador de Valerio Burger Club y apasionado del fuego como técnica y como show. No hacemos alta cocina; hacemos cocina de producto, honesta y directa, donde la calidad de la carne y el punto exacto de cocción son los protagonistas. Cada evento es una experiencia en vivo: el chisporroteo, el aroma, el corte en el momento. Puro fast-good dominicano con estándar de chef."
    ],
    "paraQuien": [
      {
        "titulo": "Bodas y celebraciones privadas",
        "desc": "Para parejas que quieren una recepción diferente, con estación de parrilla en vivo y menú personalizado. Desde el coctel hasta el plato principal, el fuego marca el ritmo de la fiesta."
      },
      {
        "titulo": "Eventos corporativos y de marca",
        "desc": "Activaciones, lanzamientos, cenas de empresa o team building. La parrilla como punto de encuentro y diferenciación para sorprender a clientes y colaboradores."
      },
      {
        "titulo": "Wedding planners y agencias",
        "desc": "Aliado estratégico para planners y agencias que buscan un servicio de catering de parrilla confiable, con montaje impecable y sabor consistente. Gestionamos todo para que ustedes brillen."
      },
      {
        "titulo": "Fincas y eventos al aire libre",
        "desc": "Celebraciones en fincas, jardines o terrazas. El asador a la cruz o la parrilla uruguaya se integran al paisaje dominicano para una experiencia rústica y elegante."
      }
    ],
    "formatos": [
      {
        "nombre": "Asado argentino",
        "desc": "Cortes tradicionales al estilo gaucho, cocción lenta a las brasas con chimichurri casero."
      },
      {
        "nombre": "Asador a la cruz",
        "desc": "Cordero o cochino entero ensartado y cocido al calor del fuego, girando lentamente durante horas."
      },
      {
        "nombre": "Parrilla uruguaya",
        "desc": "Carnes maduradas al fuego directo sobre parrilla inclinada, jugosidad y sello perfecto."
      },
      {
        "nombre": "BBQ texano",
        "desc": "Brisket ahumado por horas, ribs glaseadas y pulled pork al estilo sureño de Texas."
      },
      {
        "nombre": "Rodizio brasileño",
        "desc": "Cortes ensartados servidos al estilo churrasquería, con espadas que van y vienen directo a la mesa."
      },
      {
        "nombre": "Asador criollo dominicano",
        "desc": "Nuestra tradición: pollo, cerdo y res al carbón, con longaniza y guineítos al rescoldo."
      },
      {
        "nombre": "Parrillada llanera",
        "desc": "Cortes de res y cerdo a la parrilla con toques de la sabana, yuca, plátano y ajíes."
      },
      {
        "nombre": "Show de fuego en vivo",
        "desc": "El parrillero como protagonista: flames, cortes a la vista y emplatado en directo frente a los invitados."
      },
      {
        "nombre": "Brunch parrillero corporativo",
        "desc": "Estación de parrilla con huevos, carnes frías, vegetales asados y panes para un desayuno-almuerzo diferente."
      }
    ],
    "queIncluye": [
      "Montaje completo de estación de parrilla en el lugar del evento.",
      "Parrilleros profesionales liderados por el chef Andrés Valerio.",
      "Selección de cortes premium según el formato elegido (res, cerdo, cordero, pollo, etc.).",
      "Guarniciones artesanales: papas asadas, vegetales de temporada, ensaladas frescas.",
      "Salsas caseras: chimichurri tradicional, criolla, BBQ dominicana y más.",
      "Vajilla, utensilios y atención de principio a fin durante el servicio.",
      "Opción de barra de fuego (show cooking) con interacción en vivo.",
      "Adaptación a locaciones sin infraestructura: trabajamos con nuestra propia energía y agua."
    ],
    "faq": [
      {
        "q": "¿En qué zonas de República Dominicana ofrecen el servicio?",
        "a": "Vamos a cualquier punto del país. Nuestra base está en Santo Domingo, pero nos desplazamos con equipo propio a fincas, hoteles y locaciones en todo el territorio dominicano, ajustando la logística según la distancia."
      },
      {
        "q": "¿Cuánto tiempo necesitan para el montaje?",
        "a": "Dependiendo del formato y el número de invitados, llegamos entre 3 y 5 horas antes del evento para tener todo listo. En formatos como el asador a la cruz, el encendido inicia incluso antes para garantizar la cocción perfecta."
      },
      {
        "q": "¿Tienen opciones para invitados con dietas especiales?",
        "a": "Sí, adaptamos las guarniciones y podemos incluir opciones vegetarianas o sin gluten. Aunque el protagonista es la parrilla, siempre hay alternativas para todos los gustos."
      },
      {
        "q": "¿Cómo se calcula el presupuesto?",
        "a": "Cada evento es único. Preparamos un presupuesto a medida según el número de invitados, el formato de experiencia que elijas y los detalles del montaje. Contáctanos y te armamos una propuesta sin compromiso."
      },
      {
        "q": "¿Puedo personalizar el menú?",
        "a": "Claro, esa es la ventaja de trabajar con un chef. Podemos mezclar formatos, incluir cortes específicos o crear un menú completamente a tu gusto. Cuéntanos tu idea y la llevamos al fuego."
      },
      {
        "q": "¿Qué pasa si llueve el día del evento?",
        "a": "Trabajamos con carpas y estructuras cubiertas para proteger la parrilla y el área de servicio. Siempre tenemos un plan B para que la lluvia no apague el fuego ni la fiesta."
      }
    ]
  }
};
