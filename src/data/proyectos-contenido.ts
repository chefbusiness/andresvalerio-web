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
  formatos: { nombre: string; desc: string; precioRD?: string; precioUS?: string }[];
  carnes?: {
    eyebrow: string;
    titulo: string;
    intro: string[];
    cortes: { nombre: string; origen: string; desc: string }[];
  };
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
      "paraQuien": {
        "eyebrow": "Para quién",
        "titulo": "Pensado para tu evento"
      },
      "formatos": {
        "eyebrow": "Experiencias",
        "titulo": "Formatos de parrilla a elegir"
      },
      "incluye": {
        "eyebrow": "Qué incluye",
        "titulo": "Servicio completo, llave en mano"
      }
    },
    "metaTitle": "BBQ Parrilla Events by Valerio | Eventos y Parrilla en RD",
    "metaDescription": "Chef Andrés Valerio lleva la parrilla a tu evento en Santo Domingo. Asado argentino, BBQ texano, show de fuego. Carnes premium, servicio llave en mano. ¡Cotiza!",
    "heroTitle": "Parrilla Valerio: fuego, sabor y show en vivo",
    "heroLead": "Chef Andrés Valerio transforma tu evento en una experiencia inolvidable con parrilla en vivo, carnes premium y el show del fuego. Perfecto para bodas, eventos corporativos y celebraciones en Santo Domingo.",
    "intro": [
      "BBQ Parrilla Events by Valerio es el servicio itinerante de parrilla y asador del chef Andrés Valerio, diseñado para llevar una experiencia gastronómica de altura a tu evento en Santo Domingo y toda República Dominicana. Desde una íntima boda campestre hasta un gran evento corporativo, encendemos el fuego para crear momentos que se saborean.",
      "Como chef propietario de Valerio Burger Club, Andrés Valerio conoce el lenguaje del fuego y la carne. Cada parrillada es un espectáculo donde el chisporroteo, el aroma y la técnica se unen para ofrecer cortes perfectos, jugosos y llenos de sabor. Más que un servicio, es un show que enciende los sentidos y convierte tu celebración en un recuerdo imborrable."
    ],
    "paraQuien": [
      {
        "titulo": "Bodas y celebraciones privadas",
        "desc": "Haz de tu boda, aniversario o cumpleaños una experiencia sensorial con una parrilla en vivo que deleitará a tus invitados. Cada corte se sirve en su punto exacto, con el fuego como testigo."
      },
      {
        "titulo": "Eventos corporativos y de marca",
        "desc": "Impresiona a tus clientes, empleados o socios con un show de parrilla en vivo que habla de excelencia. Ideal para lanzamientos, cierres de año o activaciones de marca."
      },
      {
        "titulo": "Wedding planners y agencias",
        "desc": "Ofrece a tus novios un servicio de parrilla premium que eleva cualquier boda. Nos coordinamos contigo para que la experiencia gastronómica sea impecable y sin estrés."
      },
      {
        "titulo": "Fincas y eventos al aire libre",
        "desc": "Llevamos el fuego a tu finca o espacio al aire libre en cualquier rincón del país. Una experiencia rústica y elegante que conecta con la naturaleza y el buen comer."
      }
    ],
    "formatos": [
      {
        "nombre": "Asado argentino",
        "desc": "El clásico ritual gaucho con cortes al asador, cocción lenta y sabores intensos.",
        "precioRD": "3,500",
        "precioUS": "58"
      },
      {
        "nombre": "Asador a la cruz",
        "desc": "Técnica tradicional con el animal ensartado, cocinado lentamente frente a las brasas.",
        "precioRD": "3,200",
        "precioUS": "53"
      },
      {
        "nombre": "Parrilla uruguaya",
        "desc": "La parrilla montevideana: cortes gruesos, fuego a la leña y el punto justo.",
        "precioRD": "3,500",
        "precioUS": "58"
      },
      {
        "nombre": "BBQ texano",
        "desc": "Brisket ahumado por horas, costillas glaseadas y el auténtico sabor del sur de EE.UU.",
        "precioRD": "3,800",
        "precioUS": "63"
      },
      {
        "nombre": "Rodizio brasileño",
        "desc": "El churrasco gaúcho servido en espeto, con cortes continuos y guarniciones tropicales.",
        "precioRD": "3,800",
        "precioUS": "63"
      },
      {
        "nombre": "Asador criollo dominicano",
        "desc": "Nuestro asado al carbón con los cortes y sazones que nos saben a hogar dominicano.",
        "precioRD": "2,200",
        "precioUS": "37"
      },
      {
        "nombre": "Parrillada llanera",
        "desc": "La tradición de los llanos: carnes a la brasa con yuca, plátano y ají.",
        "precioRD": "2,800",
        "precioUS": "47"
      },
      {
        "nombre": "Show de fuego en vivo",
        "desc": "Una experiencia teatral donde el chef manipula el fuego y los cortes ante tus invitados.",
        "precioRD": "4,500",
        "precioUS": "75"
      },
      {
        "nombre": "Brunch parrillero corporativo",
        "desc": "Desayuno-almuerzo ejecutivo con parrilla, estaciones de jugos y café, ideal para equipos.",
        "precioRD": "2,500",
        "precioUS": "42"
      }
    ],
    "carnes": {
      "eyebrow": "Nuestra carne",
      "titulo": "El origen importa: del corte al fuego",
      "intro": [
        "En Valerio, cada corte cuenta una historia de origen y calidad. Seleccionamos carnes rojas de res importadas de Estados Unidos (USDA/Angus) porque su marmoleo garantiza terneza y sabor inigualables. El T-bone, ribeye, solomillo y brisket llegan con la consistencia que exigen los fuegos largos y las brasas intensas. Para el pollo y otros cortes, privilegiamos lo local: frescura dominicana que apoya al productor y honra nuestra tierra. El cerdo viaja desde EE.UU. o desde fincas locales, según la receta. Respetamos cada pieza, cada fuego y cada punto para que en tu evento solo haya perfección."
      ],
      "cortes": [
        {
          "nombre": "T-bone (Tibón)",
          "origen": "EE.UU. · USDA",
          "desc": "El corte rey: un lado de solomillo y otro de chatas, jugoso y de sabor profundo."
        },
        {
          "nombre": "Ribeye (Chuletón)",
          "origen": "EE.UU. · Angus",
          "desc": "Marmoleo excepcional, veteado y tierno, ideal para fuego alto."
        },
        {
          "nombre": "Solomillo / Lomo fino",
          "origen": "EE.UU. · USDA",
          "desc": "La pieza más tierna, magra y delicada, perfecta para paladares exigentes."
        },
        {
          "nombre": "Picaña / Tapilla",
          "origen": "EE.UU. / Latinoamérica",
          "desc": "Corte con capa de grasa que al fuego se convierte en sabor y jugosidad."
        },
        {
          "nombre": "Brisket",
          "origen": "EE.UU. · BBQ texano",
          "desc": "Pecho ahumado por horas, desmenuzable y con corteza de especias."
        },
        {
          "nombre": "Short rib / Costilla",
          "origen": "EE.UU.",
          "desc": "Costillar de res de cocción lenta, carne que se despega del hueso."
        },
        {
          "nombre": "Pollo",
          "origen": "Local dominicano",
          "desc": "Pechugas, muslos y alitas frescas, marinadas y asadas al punto."
        },
        {
          "nombre": "Cerdo",
          "origen": "Local / EE.UU.",
          "desc": "Costillas, secreto o presa, con el balance justo de grasa y magro."
        }
      ]
    },
    "queIncluye": [
      "Montaje de estación de parrilla y asador en el lugar del evento.",
      "Chef parrillero y asistente durante todo el servicio.",
      "Selección de cortes premium según el formato elegido.",
      "Guarniciones y salsas artesanales (opciones tradicionales y creativas).",
      "Vajilla, cubiertos y servilletas ecológicas.",
      "Degustación previa para eventos corporativos y bodas (opcional).",
      "Limpieza completa post-evento.",
      "Coordinación con wedding planners y agencias."
    ],
    "faq": [
      {
        "q": "¿Qué tipo de carne usan y de dónde proviene?",
        "a": "Nuestras carnes rojas de res son importadas de EE.UU. (USDA/Angus) por su calidad superior y marmoleo. El pollo es fresco local dominicano, y el cerdo puede ser local o americano. Cada corte se selecciona para garantizar el mejor sabor en cada formato."
      },
      {
        "q": "¿Cómo se calcula el precio final de mi evento?",
        "a": "Los precios desde son orientativos por persona. El presupuesto final se ajusta a la cantidad de invitados, el formato elegido, las guarniciones y la distancia. Te hacemos una cotización a medida sin compromiso."
      },
      {
        "q": "¿Cuánto tiempo antes debo reservar?",
        "a": "Recomendamos reservar con al menos 2-3 semanas de anticipación para eventos estándar, y 1-2 meses para bodas o grandes corporativos. Siempre puedes consultarnos disponibilidad de última hora."
      },
      {
        "q": "¿Se desplazan a cualquier lugar de República Dominicana?",
        "a": "Sí, somos un servicio itinerante. Vamos a Santo Domingo, Punta Cana, La Romana, Santiago y cualquier rincón del país. Aplican costos de desplazamiento según distancia."
      },
      {
        "q": "¿Qué incluye exactamente el servicio?",
        "a": "Incluye montaje, chef parrillero, asistente, carnes, guarniciones, salsas, vajilla, cubiertos y limpieza. Todo llave en mano para que solo te preocupes de disfrutar."
      },
      {
        "q": "¿Hacen degustaciones previas?",
        "a": "Sí, ofrecemos degustación para bodas y eventos corporativos (con costo adicional). Así puedes elegir los cortes y guarniciones que mejor se adapten a tu evento."
      }
    ]
  }
};
