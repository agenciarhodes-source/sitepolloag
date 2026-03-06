import SolucaoTemplate from '@/components/SolucaoTemplate';

export default function SolucaoGrowth() {
  return (
    <SolucaoTemplate
      tag="Growth & Performance"
      title='Aquisição eficiente com <span class="gradient-text">ROI que você consegue explicar.</span>'
      description="Performance vai além de gerenciar campanhas. É tracking limpo, funil otimizado e rotina semanal de melhoria contínua — com método e sem achismo."
      whatIs="Gerenciamos a operação de aquisição de ponta a ponta: da estrutura de campanhas ao CRO das páginas. Com tracking configurado desde o início, cada decisão tem dado por trás."
      benefits={[
        'Estrutura de campanhas Google Ads e Meta Ads',
        'Configuração e auditoria de tracking (GA4, pixels, eventos)',
        'CRO: testes em páginas de destino e formulários',
        'Relatório semanal com KPIs que importam',
        'Rotina de otimização com cadência definida',
        'Redução de CAC e melhoria de ROAS documentadas',
      ]}
      howItWorks={[
        { title: 'Auditoria de performance', desc: 'Analisamos o que está rodando, o que está faltando e onde estão as maiores perdas de investimento.' },
        { title: 'Estrutura e tracking', desc: 'Reconfiguramos campanhas e setup de tracking para garantir dados limpos e atribuição correta.' },
        { title: 'Otimização contínua', desc: 'Rotina semanal de análise, testes e ajustes. KPIs acompanhados com benchmark e meta definidos.' },
        { title: 'CRO nas páginas', desc: 'Testes em landing pages, formulários e fluxos para melhorar conversão sem aumentar investimento.' },
        { title: 'Relatório executivo', desc: 'Você recebe o que foi feito, por quê e qual impacto. Sem relatórios opacos ou métricas de vaidade.' },
      ]}
      ctaTo="/performance"
      ctaLabel="Pedir auditoria de performance"
      image="https://images.unsplash.com/photo-1764258559470-9bd6b7ad8f83?crop=entropy&cs=srgb&fm=jpg&q=85"
    />
  );
}
