const SITE = 'https://www.andresvalerio.com';

interface Faq { q: string; a: string; }
interface PricingRow { modalidad: string; alcance: string; rd: string; us: string; feat?: boolean; }

interface ServiceLike {
  hero: { eyebrow: string; h1: string };
  meta_description: string;
  faq: Faq[];
}

/** Schema.org Service + Offer para una landing de consultoría. */
export function serviceSchema(
  data: ServiceLike,
  slug: string,
  pricingRows: PricingRow[],
): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.hero.h1.replace(/<\/?em>/g, ''),
    serviceType: data.hero.eyebrow,
    description: data.meta_description,
    url: `${SITE}/consultoria/${slug}/`,
    areaServed: { '@type': 'Country', name: 'República Dominicana' },
    provider: {
      '@type': 'Person',
      name: 'Andrés Valerio',
      jobTitle: 'Chef & Consultor Gastronómico',
      url: `${SITE}/sobre-mi/`,
    },
    offers: pricingRows.map((r) => {
      const price = r.us.replace(/[^0-9]/g, '');
      return {
        '@type': 'Offer',
        name: r.modalidad,
        description: r.alcance,
        ...(price ? { priceCurrency: 'USD', price } : {}),
      };
    }),
  };
  return JSON.stringify(schema);
}

/** Schema.org Person/Chef para la página Sobre mí. */
export function personSchema(): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Andrés Valerio',
    jobTitle: 'Chef & Consultor Gastronómico',
    description:
      'Chef-propietario de Valerio Burger Club y consultor gastronómico en Santo Domingo. Más de 10 años de oficio en "alta cocina de calle".',
    url: `${SITE}/sobre-mi/`,
    image: `${SITE}/images/chef/andres-retrato.jpg`,
    nationality: { '@type': 'Country', name: 'Venezuela' },
    alumniOf: { '@type': 'EducationalOrganization', name: 'Escuela culinaria Zi Teresa' },
    knowsAbout: [
      'Desarrollo de carta',
      'Escandallos y fichas técnicas',
      'Food cost',
      'Apertura de restaurantes',
      'Mentoría gastronómica',
      'Diagnóstico gastronómico',
    ],
    worksFor: { '@type': 'Organization', name: 'Valerio Burger Club' },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Santo Domingo',
      addressCountry: 'DO',
    },
    sameAs: ['https://instagram.com/vburgerclub'],
  };
  return JSON.stringify(schema);
}

interface RecipeLike {
  title: string;
  description: string;
  heroImage: string;
  category: string;
  cuisine?: string;
  prepMinutes: number;
  cookMinutes: number;
  servings: number;
  yieldText?: string;
  calories?: number;
  ingredients: string[];
  steps: string[];
  keywords?: string[];
  pubDate: Date;
}

const isoDuration = (min: number) => `PT${min}M`;

/** Schema.org Recipe para una receta (rich results en Google). */
export function recipeSchema(data: RecipeLike, slug: string): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: data.title,
    description: data.description,
    image: [`${SITE}${data.heroImage}`],
    url: `${SITE}/recetas/${slug}/`,
    author: {
      '@type': 'Person',
      name: 'Andrés Valerio',
      url: `${SITE}/sobre-mi/`,
    },
    datePublished: data.pubDate.toISOString().slice(0, 10),
    recipeCategory: data.category,
    ...(data.cuisine ? { recipeCuisine: data.cuisine } : {}),
    prepTime: isoDuration(data.prepMinutes),
    cookTime: isoDuration(data.cookMinutes),
    totalTime: isoDuration(data.prepMinutes + data.cookMinutes),
    recipeYield: data.yieldText || `${data.servings} raciones`,
    ...(data.keywords?.length ? { keywords: data.keywords.join(', ') } : {}),
    recipeIngredient: data.ingredients,
    recipeInstructions: data.steps.map((text, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      text,
    })),
    ...(data.calories
      ? {
          nutrition: {
            '@type': 'NutritionInformation',
            calories: `${data.calories} kcal`,
          },
        }
      : {}),
  };
  return JSON.stringify(schema);
}

interface ArticleLike {
  title: string;
  description: string;
  heroImage: string;
  author: string;
  pubDate: Date;
  updatedDate?: Date;
}

/** Schema.org BlogPosting para un artículo del blog. */
export function articleSchema(data: ArticleLike, slug: string): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: data.title,
    description: data.description,
    image: [`${SITE}${data.heroImage}`],
    url: `${SITE}/blog/${slug}/`,
    datePublished: data.pubDate.toISOString().slice(0, 10),
    dateModified: (data.updatedDate || data.pubDate).toISOString().slice(0, 10),
    author: {
      '@type': 'Person',
      name: data.author,
      url: `${SITE}/sobre-mi/`,
    },
    publisher: {
      '@type': 'Person',
      name: 'Andrés Valerio',
      url: SITE,
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE}/blog/${slug}/` },
  };
  return JSON.stringify(schema);
}

/** Schema.org BreadcrumbList genérico. */
export function breadcrumbSchema(items: { name: string; path: string }[]): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE}${it.path}`,
    })),
  };
  return JSON.stringify(schema);
}

/** Schema.org FAQPage a partir del bloque de preguntas frecuentes. */
export function faqSchema(faq: Faq[]): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
  return JSON.stringify(schema);
}
