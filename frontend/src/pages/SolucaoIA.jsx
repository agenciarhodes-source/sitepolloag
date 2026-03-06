import SolucaoTemplate from '@/components/SolucaoTemplate';

export default function SolucaoIA() {
  return (
    <SolucaoTemplate
      tag="IA-first & Automações"
      title='Automatize o repetitivo. <span class="gradient-text">Deixe o humano no que importa.</span>'
      description="IA aplicada ao processo: menos tarefas operacionais, mais foco em decisão e qualidade. Com governança e human-in-the-loop em cada etapa."
      whatIs="IA-first não é 'chatbot por chatbot'. É repensar o fluxo de trabalho para identificar onde a automação reduz atrito e onde o humano precisa estar. Implementamos com regras, dados e supervisão em todas as integrações."
      benefits={[
        'Automação de tarefas repetitivas (triagem, roteamento, follow-up)',
        'Integração com stack atual via API ou Make/n8n',
        'Playbooks de IA com revisão humana em decisões críticas',
        'Governança: logs, acessos mínimos, políticas claras',
        'Redução de tempo de resposta sem perder qualidade',
        'Treinamento e handoff para o time operar autonomamente',
      ]}
      howItWorks={[
        { title: 'Mapeamento de processos', desc: 'Identificamos onde está o retrabalho, gargalos e tarefas que podem ser automatizadas com segurança.' },
        { title: 'Blueprint de automação', desc: 'Desenhamos os fluxos, triggers, regras e pontos de revisão humana antes de implementar.' },
        { title: 'Implementação e testes', desc: 'Configuramos as automações com piloto controlado, monitorando qualidade e ajustando.' },
        { title: 'Governança e logs', desc: 'Toda automação tem owner responsável, log de auditoria e processo de revisão periódica.' },
        { title: 'Handoff documentado', desc: 'Playbooks completos para o time operar e evoluir o sistema sem dependência.' },
      ]}
      ctaTo="/diagnostico"
      ctaLabel="Quero diagnóstico IA-first"
      image="https://images.unsplash.com/photo-1764258559965-6de87677a260?crop=entropy&cs=srgb&fm=jpg&q=85"
    />
  );
}
