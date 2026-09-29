// Fonte única de SEO do site: dados da empresa, metadados por rota e rotas do sitemap.
// O script scripts/prerender.mjs e o sitemap.xml usam INDEXABLE_ROUTES.

export const SITE = {
  url: 'https://agenciapollo.com.br',
  name: 'pollo.ag',
  legalName: 'Agência Pollo',
  phone: '+55 86 99484-9285',
  phoneDisplay: '(86) 99484-9285',
  whatsapp: '5586994849285',
  email: 'contato@agenciapollo.com.br',
  city: 'Teresina',
  region: 'PI',
  ogImage: '/og-image.png',
  // Preencher quando os perfis oficiais estiverem definidos (aparecem no rodapé e no schema).
  sameAs: [],
};

export const whatsappLink = (text) =>
  `https://wa.me/${SITE.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

const T = (t) => `${t} | pollo.ag`;

export const ROUTE_META = {
  '/': {
    title: 'Agência de Marketing de Performance em Teresina | pollo.ag',
    description:
      'Agência de marketing de performance em Teresina: tráfego pago, CRM, automação com IA e redes sociais. Cases com ROAS de 20x. Peça seu diagnóstico gratuito.',
  },
  '/trafego-pago': {
    title: 'Agência de Tráfego Pago em Teresina — Meta e Google Ads',
    description:
      'Gestão de tráfego pago em Meta Ads e Google Ads para empresas de Teresina e de todo o Brasil. Estratégia, criativos e otimização com foco em vendas.',
  },
  '/redes-sociais': {
    title: 'Gestão de Redes Sociais em Teresina | pollo.ag',
    description:
      'Gestão de redes sociais com linha editorial, produção de conteúdo e captação para empresas de Teresina. Instagram e Facebook que geram resultado.',
  },
  '/whatsapp-ia': {
    title: 'Atendimento no WhatsApp com IA para Empresas | pollo.ag',
    description:
      'Automatize o atendimento e as vendas no WhatsApp com agentes de IA integrados ao seu CRM. Respostas 24h, qualificação de leads e follow-up automático.',
  },
  '/ia-aplicada': {
    title: 'IA Aplicada e Automação para Empresas | pollo.ag',
    description:
      'Automação de processos com inteligência artificial: copilots, fluxos em n8n e integrações que reduzem retrabalho e aumentam a produtividade do time.',
  },
  '/crm': {
    title: 'Implantação e Auditoria de CRM | pollo.ag',
    description:
      'CRM como motor de receita: auditoria em 10 dias, ativação, retenção e reativação da base de clientes integradas ao WhatsApp e ao tráfego pago.',
  },
  '/seo': {
    title: 'SEO e Conteúdo para Empresas | pollo.ag',
    description:
      'Diagnóstico de SEO e estratégia de conteúdo que gera demanda orgânica qualificada. Mais visitas do Google e mais leads, sem depender só de anúncios.',
  },
  '/solucoes': {
    title: 'Soluções de Marketing Digital | pollo.ag',
    description:
      'Tráfego pago, CRM, automação com IA, SEO e redes sociais integrados num só sistema de crescimento. Conheça as soluções da pollo.ag.',
  },
  '/metodo': {
    title: 'Nosso Método de Growth em 4 Etapas | pollo.ag',
    description:
      'Diagnóstico, arquitetura, execução e rotina: o método pollo.ag para transformar marketing digital em crescimento previsível.',
  },
  '/sobre': {
    title: 'Sobre a pollo.ag — Agência em Teresina, PI',
    description:
      'A pollo.ag é uma agência de marketing de performance de Teresina, PI, que une tráfego pago, CRM e IA com atendimento em todo o Brasil.',
  },
  '/diagnostico': {
    title: 'Diagnóstico de Marketing Digital Gratuito | pollo.ag',
    description:
      'Descubra em 7 a 10 dias onde está o gargalo do seu crescimento: aquisição, conversão ou retenção. Agende seu diagnóstico estratégico com a pollo.ag.',
  },
  '/contato': {
    title: `Contato — pollo.ag, Teresina ${SITE.phoneDisplay}`,
    description:
      'Fale com um especialista da pollo.ag pelo WhatsApp (86) 99484-9285 ou pelo e-mail contato@agenciapollo.com.br. Resposta em até 24h úteis.',
  },
  '/conteudos': {
    title: 'Blog de Tráfego Pago, CRM e IA | pollo.ag',
    description:
      'Artigos práticos sobre tráfego pago, CRM, automação com IA e crescimento para empresas.',
    // Sem posts publicados, a página não deve entrar no índice. Tirar quando houver artigos.
    noindex: true,
  },
};

export const NOT_FOUND_META = {
  title: T('Página não encontrada'),
  description: 'A página que você procurou não existe. Veja as soluções da pollo.ag ou fale com a gente.',
  noindex: true,
};

// Rotas que vão para o sitemap e são pré-renderizadas.
export const INDEXABLE_ROUTES = Object.keys(ROUTE_META).filter((p) => !ROUTE_META[p].noindex);
// Rotas pré-renderizadas (inclui as noindex, para servirem HTML correto).
export const PRERENDER_ROUTES = Object.keys(ROUTE_META);

export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE.url}/#organization`,
  name: SITE.name,
  alternateName: SITE.legalName,
  url: SITE.url,
  logo: `${SITE.url}/logo512.png`,
  image: `${SITE.url}${SITE.ogImage}`,
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: SITE.city,
    addressRegion: SITE.region,
    addressCountry: 'BR',
  },
  areaServed: [
    { '@type': 'City', name: 'Teresina' },
    { '@type': 'State', name: 'Piauí' },
    { '@type': 'Country', name: 'Brasil' },
  ],
  knowsAbout: [
    'Tráfego pago', 'Meta Ads', 'Google Ads', 'Gestão de redes sociais',
    'CRM', 'Automação com IA', 'Atendimento no WhatsApp', 'SEO',
  ],
  ...(SITE.sameAs.length ? { sameAs: SITE.sameAs } : {}),
};
