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
  formatos: { nombre: string; desc: string; precioRD?: string; precioUS?: string; imagen?: string }[];
  carnes?: {
    eyebrow: string;
    titulo: string;
    intro: string[];
    cortes: { nombre: string; origen: string; desc: string; imagen?: string }[];
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
        "imagen": "/images/proyectos/bbq/formatos/asado-argentino.jpg",
        "desc": "El clásico ritual gaucho con cortes al asador, cocción lenta y sabores intensos.",
        "precioRD": "3,500",
        "precioUS": "58"
      },
      {
        "nombre": "Asador a la cruz",
        "imagen": "/images/proyectos/bbq/formatos/asador-cruz.jpg",
        "desc": "Técnica tradicional con el animal ensartado, cocinado lentamente frente a las brasas.",
        "precioRD": "3,200",
        "precioUS": "53"
      },
      {
        "nombre": "Parrilla uruguaya",
        "imagen": "/images/proyectos/bbq/formatos/parrilla-uruguaya.jpg",
        "desc": "La parrilla montevideana: cortes gruesos, fuego a la leña y el punto justo.",
        "precioRD": "3,500",
        "precioUS": "58"
      },
      {
        "nombre": "BBQ texano",
        "imagen": "/images/proyectos/bbq/formatos/bbq-texano.jpg",
        "desc": "Brisket ahumado por horas, costillas glaseadas y el auténtico sabor del sur de EE.UU.",
        "precioRD": "3,800",
        "precioUS": "63"
      },
      {
        "nombre": "Rodizio brasileño",
        "imagen": "/images/proyectos/bbq/formatos/rodizio.jpg",
        "desc": "El churrasco gaúcho servido en espeto, con cortes continuos y guarniciones tropicales.",
        "precioRD": "3,800",
        "precioUS": "63"
      },
      {
        "nombre": "Asador criollo dominicano",
        "imagen": "/images/proyectos/bbq/formatos/asador-criollo.jpg",
        "desc": "Nuestro asado al carbón con los cortes y sazones que nos saben a hogar dominicano.",
        "precioRD": "2,200",
        "precioUS": "37"
      },
      {
        "nombre": "Parrillada llanera",
        "imagen": "/images/proyectos/bbq/formatos/parrillada-llanera.jpg",
        "desc": "La tradición de los llanos: carnes a la brasa con yuca, plátano y ají.",
        "precioRD": "2,800",
        "precioUS": "47"
      },
      {
        "nombre": "Show de fuego en vivo",
        "imagen": "/images/proyectos/bbq/formatos/show-fuego.jpg",
        "desc": "Una experiencia teatral donde el chef manipula el fuego y los cortes ante tus invitados.",
        "precioRD": "4,500",
        "precioUS": "75"
      },
      {
        "nombre": "Brunch parrillero corporativo",
        "imagen": "/images/proyectos/bbq/formatos/brunch-parrillero.jpg",
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
          "imagen": "/images/proyectos/bbq/cortes/tibon.jpg",
          "origen": "EE.UU. · USDA",
          "desc": "El corte rey: un lado de solomillo y otro de chatas, jugoso y de sabor profundo."
        },
        {
          "nombre": "Ribeye (Chuletón)",
          "imagen": "/images/proyectos/bbq/cortes/ribeye.jpg",
          "origen": "EE.UU. · Angus",
          "desc": "Marmoleo excepcional, veteado y tierno, ideal para fuego alto."
        },
        {
          "nombre": "Solomillo / Lomo fino",
          "imagen": "/images/proyectos/bbq/cortes/solomillo.jpg",
          "origen": "EE.UU. · USDA",
          "desc": "La pieza más tierna, magra y delicada, perfecta para paladares exigentes."
        },
        {
          "nombre": "Picaña / Tapilla",
          "imagen": "/images/proyectos/bbq/cortes/picana.jpg",
          "origen": "EE.UU. / Latinoamérica",
          "desc": "Corte con capa de grasa que al fuego se convierte en sabor y jugosidad."
        },
        {
          "nombre": "Brisket",
          "imagen": "/images/proyectos/bbq/cortes/brisket.jpg",
          "origen": "EE.UU. · BBQ texano",
          "desc": "Pecho ahumado por horas, desmenuzable y con corteza de especias."
        },
        {
          "nombre": "Short rib / Costilla",
          "imagen": "/images/proyectos/bbq/cortes/costilla.jpg",
          "origen": "EE.UU.",
          "desc": "Costillar de res de cocción lenta, carne que se despega del hueso."
        },
        {
          "nombre": "Pollo",
          "imagen": "/images/proyectos/bbq/cortes/pollo.jpg",
          "origen": "Local dominicano",
          "desc": "Pechugas, muslos y alitas frescas, marinadas y asadas al punto."
        },
        {
          "nombre": "Cerdo",
          "imagen": "/images/proyectos/bbq/cortes/cerdo.jpg",
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
  },
  "burger-master-academy": {
    "secLabels": {
      "paraQuien": {
        "eyebrow": "Para quién",
        "titulo": "Para quién es la academia"
      },
      "formatos": {
        "eyebrow": "Cursos",
        "titulo": "Nuestros cursos"
      },
      "incluye": {
        "eyebrow": "Metodología",
        "titulo": "Cómo aprendes con nosotros"
      }
    },
    "metaTitle": "Burger Master Academy – Cursos de hamburguesas gourmet en RD",
    "metaDescription": "Domina el arte de la hamburguesa gourmet con el chef Andrés Valerio. Cursos presenciales y online en RD. Plazas limitadas. ¡Reserva ahora!",
    "heroTitle": "Domina el arte de la hamburguesa gourmet",
    "heroLead": "Aprende con el chef Andrés Valerio, referente del street food en RD. Metodología práctica, grupos de solo 10 alumnos.",
    "intro": [
      "Burger Master Academy es la escuela culinaria del chef Andrés Valerio, donde convertirás tu pasión por la hamburguesa en un oficio rentable. Te enseñamos desde la selección de la carne hasta las técnicas más innovadoras para crear hamburguesas gourmet, hot dogs artesanales y mucho más.",
      "Aprender de la mano de Andrés Valerio es acceder a más de una década de experiencia en el mundo del street food premium. Con plazas limitadas a solo 10 alumnos por curso, garantizas atención personalizada y práctica real en cada sesión. Ya sea que quieras emprender o perfeccionar tu técnica, aquí encuentras el camino."
    ],
    "paraQuien": [
      {
        "titulo": "Cocineros y profesionales",
        "desc": "Si ya trabajas en cocina y quieres especializarte en hamburguesería de alto nivel, este es tu programa. Perfecciona técnicas y domina cada detalle del producto."
      },
      {
        "titulo": "Emprendedores del street food",
        "desc": "Aprende a montar tu propio negocio con recetas probadas y rentables. Te damos las herramientas para destacar en el mercado de comida rápida gourmet."
      },
      {
        "titulo": "Aficionados apasionados",
        "desc": "Convierte tu hobby en arte. Aprende secretos profesionales para sorprender en cada reunión y elevar tus parrilladas al siguiente nivel."
      },
      {
        "titulo": "Equipos de restaurante",
        "desc": "Capacita a tu brigada con un entrenamiento intensivo que unifica estándares y optimiza la oferta de hamburguesas de tu local."
      }
    ],
    "formatos": [
      {
        "nombre": "La Perfecta Hamburguesa I",
        "imagen": "/images/proyectos/bma/cursos/ph1.jpg",
        "desc": "Desde la elección del corte de carne hasta panes artesanales y salsas caseras. Un recorrido completo por los fundamentos de la hamburguesa gourmet. (Disponible)"
      },
      {
        "nombre": "La Perfecta Hamburguesa II",
        "imagen": "/images/proyectos/bma/cursos/ph2.jpg",
        "desc": "Nivel avanzado para quienes ya tienen las bases. Crea hamburguesas únicas con técnicas de alta cocina y combinaciones sorprendentes. (Disponible)"
      },
      {
        "nombre": "Maestría de Carnes Premium y Maduradas",
        "imagen": "/images/proyectos/bma/cursos/carnes.jpg",
        "desc": "Sumérgete en el mundo de la carne de res premium: cortes en tendencia, maduración, cocción perfecta y maridajes. (Disponible)"
      },
      {
        "nombre": "Hot Dogs Gourmet",
        "imagen": "/images/proyectos/bma/cursos/hotdogs.jpg",
        "desc": "Descubre cómo elevar el clásico perro caliente con panes artesanales, salchichas premium y aderezos únicos. (Muy pronto)"
      },
      {
        "nombre": "Pastrami Perfection",
        "imagen": "/images/proyectos/bma/cursos/pastrami.jpg",
        "desc": "Aprende el arte del pastrami artesanal: selección del corte, salmuera, especias, ahumado y cocción al punto exacto. (Muy pronto)"
      }
    ],
    "queIncluye": [
      "Grupos reducidos: máximo 10 alumnos por curso para garantizar atención personalizada.",
      "Aprendizaje práctico: trabajas directamente con fuego, plancha y todos los equipos necesarios.",
      "Recetas y fichas técnicas: te llevas a casa todos los materiales para replicar cada preparación.",
      "Insumos premium: carnes maduradas, panes artesanales y productos frescos incluidos.",
      "Certificación: al finalizar recibes un certificado que avala tu formación.",
      "Soporte post-curso: acceso directo para consultas y acompañamiento en tu proyecto.",
      "Networking: conecta con otros apasionados y profesionales del sector.",
      "Estaciones individuales: cada alumno cuenta con su espacio de trabajo para cocinar al ritmo de todos."
    ],
    "faq": [
      {
        "q": "¿Cómo puedo reservar una plaza y qué garantía tengo?",
        "a": "Las plazas se reservan a través de un proceso sencillo: seleccionas el curso, completas el formulario y realizas el pago. Con plazas limitadas a solo 10 alumnos por grupo, te aseguramos atención exclusiva y la mejor experiencia de aprendizaje."
      },
      {
        "q": "¿Necesito experiencia previa en cocina para tomar los cursos?",
        "a": "No es necesario tener experiencia previa; nuestros cursos están diseñados para todos los niveles. Si eres principiante, arrancamos desde los fundamentos; si ya tienes base, avanzamos con técnicas más sofisticadas."
      },
      {
        "q": "¿Los cursos son presenciales o virtuales?",
        "a": "Ofrecemos ambas modalidades: cursos presenciales en nuestras instalaciones en Santo Domingo y versiones online para que aprendas desde cualquier lugar."
      },
      {
        "q": "¿Qué incluye el precio del curso?",
        "a": "El precio incluye todos los ingredientes, herramientas, recetario, certificado y una sesión de seguimiento posterior. Solo necesitas venir con muchas ganas de aprender."
      },
      {
        "q": "¿Puedo tomar varios cursos al mismo tiempo?",
        "a": "Sí, puedes inscribirte en varios cursos. Recomendamos seguir el orden sugerido para potenciar tu aprendizaje, pero puedes elegir libremente según tus intereses."
      },
      {
        "q": "¿Qué diferencia a Burger Master Academy de otros cursos?",
        "a": "El respaldo del chef Andrés Valerio, dueño de Valerio Burger Club, y una metodología 100% práctica con grupos reducidos te garantizan que realmente dominarás cada técnica."
      }
    ]
  },
  "valerio-burger-club": {
    "secLabels": {
      "paraQuien": {
        "eyebrow": "La experiencia",
        "titulo": "Lo que vas a vivir"
      },
      "formatos": {
        "eyebrow": "La carta",
        "titulo": "Hamburguesas y más"
      },
      "incluye": {
        "eyebrow": "Por qué VBC",
        "titulo": "Lo que nos hace distintos"
      }
    },
    "metaTitle": "Valerio Burger Club | Hamburguesa de autor en Santo Domingo",
    "metaDescription": "Valerio Burger Club: hamburguesas de autor en Santo Domingo. Producto local, fuego y salsas caseras. Vive el sabor del chef Andrés Valerio. ¡Reserva ya!",
    "heroTitle": "Hamburguesas con carácter de chef y fuego",
    "heroLead": "En Valerio Burger Club, cada mordida cuenta una historia de producto local, técnica y brasas. Bienvenido al templo de la hamburguesa premium en Santo Domingo.",
    "intro": [
      "Valerio Burger Club es el proyecto personal del chef Andrés Valerio: un restaurante donde la hamburguesa se eleva a la categoría de plato de autor. Aquí no hay atajos: trabajamos con producto fresco, carne seleccionada y técnicas que solo un chef obsesionado puede aportar. Cada hamburguesa es una creación única, pensada desde el pan hasta el último aderezo.",
      "El ambiente es el reflejo de nuestra cocina: oscuro, cálido, con ladrillo visto y madera que arropan el sonido del fuego. El chef está al frente, cuidando cada detalle, porque para Andrés esto no es solo un negocio: es su casa y su forma de compartir lo que más le apasiona. Ven a vivir la experiencia de un fast‑good que desafía lo convencional."
    ],
    "paraQuien": [
      {
        "titulo": "Amantes de la buena hamburguesa",
        "desc": "Para los que buscan mucho más que comida rápida: una hamburguesa jugosa, con identidad y sabor que se recuerda."
      },
      {
        "titulo": "Quien busca producto y técnica",
        "desc": "Si valoras el origen de lo que comes y el oficio detrás de cada plato, aquí encuentras tu sitio."
      },
      {
        "titulo": "Planes con amigos y familia",
        "desc": "Un espacio para compartir, con mesas largas, música y un ambiente que invita a quedarse."
      },
      {
        "titulo": "Foodies y curiosos del street food",
        "desc": "Para los que persiguen la próxima experiencia gastronómica y entienden que la calle también sabe a premium."
      }
    ],
    "formatos": [
      {
        "nombre": "Hamburguesas de autor",
        "desc": "Recetas originales firmadas por Andrés Valerio, con combinaciones inesperadas que respetan el producto."
      },
      {
        "nombre": "Smash burgers",
        "desc": "La técnica que arrasa: carne aplastada sobre la plancha para lograr una corteza caramelizada y un interior súper jugoso."
      },
      {
        "nombre": "Acompañamientos y sides",
        "desc": "Papas rústicas, aros de cebolla y otras guarniciones pensadas para ser el complemento perfecto."
      },
      {
        "nombre": "Salsas y aderezos de la casa",
        "desc": "El alma de cada bocado: salsas elaboradas diariamente con ingredientes frescos y mucho balance."
      }
    ],
    "queIncluye": [
      "Producto de proximidad: carne de res 100% dominicana, fresca y de calidad.",
      "Pan brioche artesanal: elaborado en casa cada día, esponjoso y ligeramente tostado.",
      "Carne sellada al punto: cocinada al fuego fuerte para sellar los jugos y potenciar el sabor.",
      "Salsas caseras: desde la clásica VBC hasta mezclas ahumadas y picantes, todas hechas aquí.",
      "Ambiente con personalidad: ladrillo, madera, luces tenues y la energía del restaurante que siempre está vivo.",
      "El chef al frente: Andrés supervisa cada turno, asegurando que cada hamburguesa salga con su sello."
    ],
    "faq": [
      {
        "q": "¿Dónde está ubicado Valerio Burger Club?",
        "a": "Estamos en el corazón de Santo Domingo, en una ubicación céntrica y de fácil acceso. Para la dirección exacta y cómo llegar, visita nuestra web valerioburgerclub.com."
      },
      {
        "q": "¿Es necesario reservar o aceptan walk-ins?",
        "a": "Recibimos a todos sin reserva, pero si vienes en grupo te recomendamos reservar para asegurar mesa. Consulta disponibilidad en nuestro sitio web."
      },
      {
        "q": "¿Tienen servicio de entrega a domicilio?",
        "a": "Sí, trabajamos con las principales plataformas de delivery en Santo Domingo. Puedes pedir desde nuestra web para ver las opciones disponibles y armar tu pedido."
      },
      {
        "q": "¿Ofrecen opciones para niños o menú infantil?",
        "a": "Nuestra carta está pensada para todos, pero no tenemos un menú infantil específico. Sin embargo, hay opciones que encantan a los más pequeños. Pregunta a nuestro equipo o revisa la carta en valerioburgerclub.com."
      },
      {
        "q": "¿Se puede organizar un evento privado o grupo grande?",
        "a": "¡Claro! Nos encanta recibir celebraciones. Escríbenos a través de la web con los detalles de tu evento y te ayudaremos a organizar una experiencia a medida."
      }
    ]
  },
  "catering-fast-good": {
    "secLabels": {
      "paraQuien": {
        "eyebrow": "Para quién",
        "titulo": "Pensado para tu ocasión"
      },
      "formatos": {
        "eyebrow": "Servicios",
        "titulo": "Formas de disfrutarlo"
      },
      "incluye": {
        "eyebrow": "Qué incluye",
        "titulo": "Servicio completo"
      }
    },
    "metaTitle": "Catering Fast Good | Catering y chef at home en RD",
    "metaDescription": "Lleva la cocina fast-good de Andrés Valerio a tu evento: chef at home, estaciones en vivo y catering corporativo en RD. Menús de producto y fuego. Cotiza ya.",
    "heroTitle": "Fuego, producto y actitud en tu evento.",
    "heroLead": "Del mercado a tu evento: la cocina de Andrés Valerio celebra el producto dominicano con fuego y técnica. Estaciones en vivo, chef at home y menús que cierran con broche de oro.",
    "intro": [
      "Catering Fast Good es la propuesta de cocina de producto y fuego de Andrés Valerio llevada a cualquier espacio. No es un servicio de catering tradicional: es una experiencia culinaria donde el chef y su equipo cocinan en vivo con ingredientes impecables, montan estaciones interactivas y convierten tu evento en una celebración de sabor directo.",
      "Andrés Valerio es un chef que opera desde el respeto al producto local, la técnica precisa y una obsesión por el punto justo. Con Fast Good, traslada esa filosofía a tu casa, oficina o fiesta: menús que no necesitan adornos porque habla el ingrediente, el fuego y la actitud. Cada servicio se piensa a medida para que la comida sea la gran protagonista."
    ],
    "paraQuien": [
      {
        "titulo": "Celebraciones privadas en casa",
        "desc": "Aniversarios, cenas especiales o encuentros íntimos donde quieres sorprender. Montamos una experiencia chef at home completa, desde la compra del producto hasta el último plato."
      },
      {
        "titulo": "Eventos corporativos",
        "desc": "Lleva la cocina fast‑good a tu empresa: comidas de fin de año, lanzamientos, agasajos a clientes o almuerzos de equipo. Estaciones que generan conversación y un servicio impecable que cierra negocios."
      },
      {
        "titulo": "Cumpleaños y reuniones",
        "desc": "Para esos momentos donde la comida debe estar a la altura de la celebración. Estaciones de street food premium, parrilla en vivo o un menú cerrado que todos recordarán."
      },
      {
        "titulo": "Experiencias chef at home",
        "desc": "Una noche con un chef privado en tu cocina. Andrés Valerio va a tu casa, cocina para ti y tus invitados, y se encarga de todo para que solo te preocupes de disfrutar."
      }
    ],
    "formatos": [
      {
        "nombre": "Chef at home",
        "desc": "El chef se instala en tu cocina o espacio y cocina un menú diseñado a medida. Compra, mise en place, servicio y limpieza incluidos. Una experiencia íntima y sin preocupaciones.",
        "imagen": "/images/proyectos/catering/formatos/chef-home.jpg"
      },
      {
        "nombre": "Estaciones de comida en vivo",
        "desc": "Montamos estaciones de cocina en directo: parrilla, plancha, wok, horno de fuego. Tus invitados ven el proceso y reciben platos recién hechos con ese punto perfecto.",
        "imagen": "/images/proyectos/catering/formatos/estaciones.jpg"
      },
      {
        "nombre": "Catering corporativo",
        "desc": "Para oficinas y empresas, con opciones que van desde coffee breaks premium hasta almuerzos ejecutivos. Menús prácticos pero con la firma fast‑good: producto de calidad, ejecución cuidada.",
        "imagen": "/images/proyectos/catering/formatos/corporativo.jpg"
      },
      {
        "nombre": "Menús fast‑good para eventos",
        "imagen": "/images/proyectos/catering/formatos/menus.jpg",
        "desc": "Paquetes cerrados de street food elevado: hamburguesas de autor, costillas glaseadas, tacos de producto, pescados enteros al fuego. Sabores intensos que todos quieren repetir."
      }
    ],
    "queIncluye": [
      "Planificación del menú junto al chef, adaptado a la ocasión, número de invitados y preferencias.",
      "Selección y compra de la mejor materia prima: producto fresco de temporada, proveedores de confianza.",
      "Montaje del espacio de cocina y estaciones con toda la infraestructura necesaria.",
      "Equipo profesional de cocina y sala, con uniforme dark y actitud impecable.",
      "Servicio de alimentos y bebidas durante el evento, ritmo controlado por el chef.",
      "Desmontaje y limpieza total del área, sin que tengas que mover un dedo."
    ],
    "faq": [
      {
        "q": "¿En qué zonas ofrecen el servicio de catering y chef at home?",
        "a": "Principalmente en Santo Domingo y zonas aledañas como La Romana, Casa de Campo, Punta Cana y Juan Dolio. Para otras ubicaciones, evaluamos la viabilidad logística. Escríbenos sin compromiso y coordinamos."
      },
      {
        "q": "¿Cuál es el mínimo de personas para contratar un servicio?",
        "a": "Trabajamos desde cenas íntimas de 2 personas (chef at home privado) hasta eventos de más de 100. La experiencia se adapta al tamaño del grupo sin perder calidad."
      },
      {
        "q": "¿Cómo se cotiza un evento? ¿Hay paquetes cerrados?",
        "a": "Cada propuesta es a medida. El precio depende del número de invitados, el tipo de servicio (estaciones, menú cerrado, etc.), la complejidad logística y la selección del menú. Pide una cotización sin costo y te armamos una propuesta personalizada."
      },
      {
        "q": "¿Ustedes ponen todo el menaje, mobiliario y personal?",
        "a": "Sí, nos encargamos de absolutamente todo: vajilla, cristalería, cubertería, parrillas, estaciones de cocina, mesas de servicio y el equipo necesario. Solo necesitamos un espacio con acceso a electricidad y agua, y en ciertos casos gestionamos mobiliario extra para invitados si lo requieres."
      },
      {
        "q": "¿Qué tipo de cocina es Fast Good? ¿Tienen opciones para dietas especiales?",
        "a": "Fast Good es cocina de producto, directa y sin pretensiones pero con técnica precisa. El respeto al ingrediente manda. Podemos adaptar cualquier menú a requerimientos vegetarianos, sin gluten, alergias, etc. Todo se habla en la planificación."
      }
    ]
  }
};
