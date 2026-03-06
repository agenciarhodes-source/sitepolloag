import SolucaoTemplate from '@/components/SolucaoTemplate';

export default function SolucaoCRM() {
  return (
    <SolucaoTemplate
      tag="CRM & Base (LTV/Churn)"
      title='CRM como motor de <span class="gradient-text">receita recorrente.</span>'
      description="Segmentação, jornadas e automação para ativar, reter e reativar clientes. Churn como KPI de verdade — não só CAC."
      whatIs="CRM não é ferramenta — é estratégia. Implementamos a arquitetura de dados, segmentação e jornadas que fazem sua base trabalhar para você: mais upsell, menos churn, mais LTV sem precisar adquirir mais."
      benefits={[
        'Segmentação de base por comportamento e perfil',
        'Jornadas de onboarding, ativação e pós-venda',
        'Automações de reativação e retenção',
        'Integração CRM + plataformas de comunicação',
        'Painel de LTV, churn e engajamento da base',
        'Playbooks de cadência para o time comercial',
      ]}
      howItWorks={[
        { title: 'Auditoria de CRM', desc: 'Analisamos o estado atual: segmentação, jornadas, automações e gaps. O que está funcionando e o que não está.' },
        { title: 'Arquitetura de dados', desc: 'Estruturamos os segmentos, propriedades e eventos necessários para personalização efetiva.' },
        { title: 'Jornadas e automações', desc: 'Configuramos onboarding, ativação, retenção e reativação com triggers e mensagens personalizadas.' },
        { title: 'Integração e stack', desc: 'Conectamos CRM com ferramentas de comunicação, ads e atendimento para uma visão unificada do cliente.' },
        { title: 'Cadência e playbooks', desc: 'Time comercial com rotina definida: follow-up, pipeline review e ações de retenção documentadas.' },
      ]}
      ctaTo="/crm"
      ctaLabel="Auditar meu CRM"
      image="https://images.unsplash.com/photo-1755595505158-3dab9919e677?crop=entropy&cs=srgb&fm=jpg&q=85"
    />
  );
}
