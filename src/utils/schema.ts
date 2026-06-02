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
