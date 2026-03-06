import SolucaoTemplate from '@/components/SolucaoTemplate';

export default function SolucaoSEOPage() {
  return (
    <SolucaoTemplate
      tag="SEO & Conteúdo"
      title='SEO que alimenta <span class="gradient-text">pipeline, não vaidade.</span>'
      description="Arquitetura de conteúdo orientada por intenção comercial. Cada página e artigo tem um propósito no funil — não é conteúdo por conteúdo."
      whatIs="SEO estratégico começa com diagnóstico técnico, análise de intenção e mapa de concorrência. A partir daí, construímos uma arquitetura de conteúdo que captura demanda real do seu ICP em cada etapa do funil."
      benefits={[
        'Diagnóstico técnico completo (Core Web Vitals, indexação, erros)',
        'Mapa de palavras-chave com intenção comercial por etapa',
        'Cluster editorial estruturado (top/middle/bottom of funnel)',
        'Produção de conteúdo com briefing e revisão',
        'Páginas money otimizadas para conversão',
        'Análise de concorrentes e gap de palavras-chave',
      ]}
      howItWorks={[
        { title: 'Diagnóstico SEO', desc: 'Auditoria técnica, análise de palavras-chave e mapeamento de concorrentes. Entendemos onde você está e onde pode chegar.' },
        { title: 'Arquitetura e clusters', desc: 'Estruturamos os tópicos por intenção de busca: awareness, consideração e decisão, com interlinking planejado.' },
        { title: 'Conteúdo com propósito', desc: 'Produzimos ou supervisionamos conteúdo orientado a rankear e converter — não a gerar volume.' },
        { title: 'Páginas money', desc: 'Otimizamos e criamos páginas de alta intenção comercial com SEO on-page e CRO integrados.' },
        { title: 'Monitoramento e ajuste', desc: 'Acompanhamos posições, cliques e conversões orgânicas. Ajustamos pauta e otimizações mensalmente.' },
      ]}
      ctaTo="/seo"
      ctaLabel="Quero diagnóstico SEO"
      image="https://images.unsplash.com/photo-1759956445608-32eef0f19208?crop=entropy&cs=srgb&fm=jpg&q=85"
    />
  );
}
