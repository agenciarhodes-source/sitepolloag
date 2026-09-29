import { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionReveal, { StaggerContainer, StaggerItem } from '@/components/SectionReveal';
import CountUp from '@/components/CountUp';
import {
  ArrowRight, CheckCircle, ChevronDown, Zap, Database, Bot, BarChart2,
  Shield, Users, Cpu, Activity, Star, AlertCircle, Clock, RefreshCw,
  MessageSquare, FileText, GitBranch, Layers, Target, TrendingUp, Lock
} from 'lucide-react';

/* ─── DADOS ─── */

const SIGNALS = [
  { text: 'Seu time passa horas em tarefas repetitivas que poderiam ser automatizadas' },
  { text: 'Dados de clientes espalhados em planilhas, CRMs e WhatsApp sem integração' },
  { text: 'Follow-up comercial inconsistente — oportunidades caindo pelo caminho' },
  { text: 'Base de leads parada sem nutrição ou ativação automatizada' },
  { text: 'Decisões sendo tomadas sem visibilidade de dados em tempo real' },
  { text: 'Baixa previsibilidade de receita porque os processos são manuais e inconsistentes' },
];

const DELIVERABLES = [
  {
    icon: Zap,
    name: 'Automação de Processos',
    what: 'Eliminar gargalos operacionais em Ops, Comercial e Atendimento com IA no loop.',
    items: [
      'Mapeamento e automação de fluxos repetitivos',
      'Agentes IA com supervisão humana (human-in-the-loop)',
      'Automação de follow-up e qualificação comercial',
      'Atendimento inteligente com escalonamento para humano',
      'Documentação e SOP dos novos fluxos',
    ],
    impact: 'Até 60% de redução no tempo gasto em atividades operacionais recorrentes.',
  },
  {
    icon: Bot,
    name: 'Assistentes Internos (Copilots)',
    what: 'Copilots personalizados e base de conhecimento (RAG) para o time produzir mais.',
    items: [
      'Assistente treinado na base de conhecimento da empresa',
      'RAG (Retrieval-Augmented Generation) sobre documentos internos',
      'Respostas padronizadas para FAQ comercial e suporte',
      'Integração com Slack, WhatsApp Business ou plataforma interna',
      'Governança de acesso e logs de uso',
    ],
    impact: 'Time responde 3x mais rápido com menos erros e sem depender de uma pessoa só.',
  },
  {
    icon: Database,
    name: 'Integrações e Dados',
    what: 'Conectar CRM, WhatsApp, e-mail, planilhas e BI numa camada unificada com governança.',
    items: [
      'Diagnóstico e mapeamento da stack atual',
      'Integração CRM + WhatsApp + e-mail + planilhas',
      'Pipeline de dados limpos para decisão',
      'Dashboard BI com KPIs operacionais e comerciais',
      'Política de dados e conformidade LGPD',
    ],
    impact: 'Visão unificada do negócio — sem dados perdidos entre ferramentas.',
  },
  {
    icon: BarChart2,
    name: 'Monitoramento e Rotina',
    what: 'KPIs, alertas automáticos e ciclo de melhoria contínua para a operação não parar.',
    items: [
      'Definição de KPIs por área (Ops, Comercial, Marketing)',
      'Alertas automáticos por thresholds críticos',
      'Revisão mensal de performance dos agentes IA',
      'Playbooks de resposta para falhas e exceções',
      'Handoff documentado para o time interno',
    ],
    impact: 'A operação evolui sem depender da agência para cada ajuste.',
  },
];

const METHOD_STEPS = [
  {
    num: '01',
    name: 'Diagnóstico e Baseline',
    time: '1–2 semanas',
    desc: 'Mapeamos processos, dados, ferramentas e gargalos. Definimos o problema-raiz antes de qualquer solução.',
    deliverables: ['Mapa de processos atual', 'Relatório de oportunidades de IA', 'Baseline de KPIs'],
  },
  {
    num: '02',
    name: 'Desenho do Fluxo',
    time: '1–2 semanas',
    desc: 'Arquitetamos a solução: fluxo de dados, pontos de integração, políticas de governança e requisitos técnicos.',
    deliverables: ['Blueprint da solução', 'Requisitos técnicos', 'Política de dados e LGPD'],
  },
  {
    num: '03',
    name: 'MVP / Piloto',
    time: '2–4 semanas',
    desc: 'Construímos o piloto funcional no processo de maior impacto para validar a lógica antes de escalar.',
    deliverables: ['Agente ou automação funcional', 'Ambiente de testes', 'Checklist de validação'],
  },
  {
    num: '04',
    name: 'Implantação e Treinamento',
    time: '1–3 semanas',
    desc: 'Levamos para produção com o time. Treinamos as pessoas que vão operar e supervisionam a solução.',
    deliverables: ['Deploy em produção', 'Treinamento do time', 'Documentação operacional'],
  },
  {
    num: '05',
    name: 'Otimização e Handoff',
    time: 'Contínuo',
    desc: 'Monitoramos, ajustamos e entregamos playbooks. O time fica autônomo para evoluir a operação.',
    deliverables: ['Dashboard de KPIs', 'Playbooks de operação', 'Ciclo de melhoria mensal'],
  },
];

const USE_CASES = [
  { icon: MessageSquare, area: 'Comercial', title: 'Qualificação automática de leads', desc: 'Agente IA classifica leads por fit, pergunta dados de qualificação e agenda reunião — sem SDR manual.' },
  { icon: RefreshCw, area: 'Atendimento', title: 'Atendimento 24h com escalonamento humano', desc: 'Resolve dúvidas frequentes e transfere para humano apenas quando necessário, com contexto completo.' },
  { icon: FileText, area: 'Ops', title: 'Geração de propostas e contratos', desc: 'Preenche propostas e minutas com dados do CRM. Reduz de 2h para 5 minutos por proposta.' },
  { icon: Database, area: 'Marketing', title: 'Nutrição inteligente de base', desc: 'Segmenta a base por comportamento e dispara sequências personalizadas via e-mail e WhatsApp.' },
  { icon: Bot, area: 'Interno', title: 'Copilot de onboarding', desc: 'Novo colaborador consulta o assistente para dúvidas de processo, evitando interrupções no time.' },
  { icon: BarChart2, area: 'Gestão', title: 'Dashboard de previsibilidade', desc: 'Consolida pipeline, métricas de atendimento e Ops num painel atualizado em tempo real.' },
  { icon: AlertCircle, area: 'Ops', title: 'Alertas de exceção e SLA', desc: 'Monitora SLAs e dispara alertas automáticos quando há risco de perda ou atraso crítico.' },
  { icon: GitBranch, area: 'Comercial', title: 'Follow-up automático pós-reunião', desc: 'Após reunião, envia resumo, próximos passos e proposta sem ação manual do vendedor.' },
  { icon: Layers, area: 'Clínicas', title: 'Confirmação e reativação de pacientes', desc: 'Confirma consultas, reduz no-shows e reativa pacientes inativos via WhatsApp com contexto.' },
  { icon: Lock, area: 'Dados', title: 'Governança e conformidade LGPD', desc: 'Auditoria de dados, mapeamento de fluxos e implementação de políticas de privacidade e acesso.' },
];

const PACKAGES = [
  {
    id: 'piloto',
    tag: 'Ponto de partida',
    name: 'Projeto Piloto',
    desc: 'Para empresas que querem validar IA aplicada num processo real antes de escalar. Resultado tangível em semanas.',
    forWhom: 'Empresas que ainda não implementaram IA e querem ver resultado antes de comprometer investimento maior.',
    items: [
      'Diagnóstico e mapeamento de 1 processo prioritário',
      'Arquitetura e blueprint da solução',
      'Construção do MVP funcional',
      'Implantação + treinamento do time',
      'Documentação e SOP do processo',
      'Relatório de baseline vs. resultado',
      '30 dias de suporte pós-implantação',
    ],
    requires: ['Acesso ao processo e ferramentas atuais', 'Responsável interno para o projeto', 'Definição de sucesso mensuráve'],
    cta: 'Quero começar com o piloto',
    highlight: false,
  },
  {
    id: 'escala',
    tag: 'Transformação completa',
    name: 'Implantação + Escala',
    badge: 'Recomendado',
    desc: 'Para empresas prontas para transformar múltiplos processos com IA, governança completa e rotina de evolução.',
    forWhom: 'Empresas B2B e clínicas que precisam de operação consistente, dados integrados e autonomia para evoluir.',
    items: [
      'Diagnóstico completo de processos e stack',
      'Blueprints de múltiplos processos',
      'Construção e implantação de N automações/agentes',
      'Integração de dados (CRM, WhatsApp, e-mail, BI)',
      'Dashboard de KPIs e alertas automáticos',
      'Política de dados e conformidade LGPD',
      'Treinamento do time + playbooks',
      'Gestor de conta dedicado',
      'Ciclo mensal de otimização',
    ],
    requires: ['Stack atual documentada ou disponível para auditoria', 'Patrocinador executivo no projeto', 'Time interno disponível para treinamento'],
    cta: 'Quero escalar com IA',
    highlight: true,
  },
];

const FAQ_ITEMS = [
  { q: 'Quanto custa uma implementação de IA?', a: 'O investimento depende do escopo, número de processos e complexidade das integrações. Um projeto piloto costuma ser orçado após o diagnóstico — que é gratuito. Na média do mercado B2B, projetos de automação variam entre R$ 8.000 e R$ 60.000 dependendo da abrangência. Faça o diagnóstico e receba um orçamento personalizado.' },
  { q: 'Quanto tempo leva para ver resultado?', a: 'Um MVP funcional pode ser entregue em 4 a 8 semanas. O retorno operacional (redução de retrabalho, aumento de resposta) costuma aparecer no primeiro mês após implantação. Projetos de maior escopo têm cronograma de 2 a 4 meses.' },
  { q: 'Vocês executam ou só consultam?', a: 'Executamos. Entregamos a solução funcional em produção — não apenas um relatório. O cliente recebe fluxo implantado, time treinado, documentação e suporte. Somos responsáveis pelo resultado, não só pela recomendação.' },
  { q: 'Quais ferramentas e stacks vocês usam?', a: 'Trabalhamos com as principais plataformas de IA (OpenAI, Anthropic, Google), automação (n8n, Make, Zapier), CRMs (HubSpot, RD Station, Pipedrive), WhatsApp Business API e ferramentas de BI. Adaptamos à stack existente do cliente sempre que possível.' },
  { q: 'E a LGPD? Como tratam dados dos nossos clientes?', a: 'Todo projeto inclui mapeamento de fluxo de dados e política de privacidade compatível com a LGPD. Não armazenamos dados de clientes fora do ambiente do próprio cliente. A solução é auditável e documentada com responsável de dados definido.' },
  { q: 'A IA vai substituir pessoas do meu time?', a: 'Não é o objetivo. Nossa abordagem é human-in-the-loop: a IA executa tarefas repetitivas e gera dados, mas as decisões críticas ficam com o time. O resultado é que pessoas trabalham com mais contexto, menos retrabalho e foco em atividades de maior valor.' },
  { q: 'Preciso ter CRM ou ferramentas específicas antes?', a: 'Não obrigatoriamente. Fazemos o diagnóstico da stack atual e recomendamos o que faz sentido. Em muitos casos trabalhamos com o que o cliente já tem. Se houver necessidade de nova ferramenta, indicamos opções com custo-benefício adequado ao porte.' },
  { q: 'Após a implantação, ficamos dependentes de vocês?', a: 'Não. O handoff é parte central do método: entregamos documentação, playbooks e treinamento para o time interno operar e evoluir. Oferecemos suporte opcional no pós-implantação, mas o objetivo é autonomia para o cliente.' },
  { q: 'Como é feita a manutenção das automações?', a: 'Incluímos rotina de monitoramento e alertas. Para projetos de escala, temos ciclo mensal de revisão. Para projetos piloto, 30 dias de suporte estão inclusos. Contratos de retainer para manutenção contínua são negociados separadamente.' },
  { q: 'A IA pode errar? Como controlamos isso?', a: 'Sim, toda IA comete erros. Por isso implementamos supervisão humana nos pontos críticos, logs de todas as ações, thresholds de confiança e plano de exceção documentado. Governança não é opcional — é parte do entregável.' },
  { q: 'Vocês atendem clínicas e saúde?', a: 'Sim. Temos experiência com automação de confirmação de consultas, reativação de pacientes, qualificação de leads para procedimentos e gestão de agenda. Sempre com atenção a compliance de dados de saúde.' },
  { q: 'Como começa o processo?', a: 'Com um diagnóstico gratuito de 30 minutos. Entendemos seus processos, identificamos as maiores oportunidades e apresentamos uma proposta personalizada sem compromisso.' },
];

const STATS = [
  { value: 67, suffix: '%', label: 'das empresas B2B que adotaram IA reportam ganho de eficiência operacional', source: 'McKinsey Global Survey 2024' },
  { value: 3.5, suffix: 'x', label: 'mais rápido: tempo médio de resposta com atendimento automatizado', source: 'HubSpot State of AI 2024', decimals: 1 },
  { value: 40, suffix: '%', label: 'de redução média em retrabalho operacional após automação de processos', source: 'Forrester Research 2024' },
  { value: 8, suffix: 'sem', label: 'prazo típico do diagnóstico ao MVP funcional em produção', source: 'pollo.ag — média de projetos' },
];

/* ─── SEÇÕES ─── */

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[#160907]" />
      <div className="absolute inset-0 opacity-20"
        style={{ backgroundImage: 'radial-gradient(ellipse 65% 50% at 65% 30%, #A34E1B 0%, transparent 65%)' }} />
      <div className="absolute top-0 left-0 right-0 h-px gradient-bg opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionReveal instant>
            <h1 className="font-sora text-4xl md:text-5xl lg:text-6xl font-bold text-brand-text leading-tight">
              IA que{' '}
              <span className="gradient-text">resolve processo</span>{' '}
              e gera resultado real.
            </h1>
            <p className="text-brand-muted text-lg mt-6 leading-relaxed max-w-xl">
              Criamos e implantamos soluções de IA aplicadas ao seu negócio — com método, governança e entrega. Do diagnóstico ao MVP funcional em semanas.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                'Diagnóstico gratuito do processo e oportunidades',
                'Implantação real — não só relatório ou consultoria',
                'Human-in-the-loop: a IA executa, o time decide',
              ].map((b, i) => (
                <li key={i} className="flex items-center gap-3 text-brand-muted text-sm">
                  <CheckCircle size={16} className="text-brand-cta flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link to="/diagnostico"
                data-testid="hero-cta-ia-primary"
                className="inline-flex items-center justify-center gap-2 bg-brand-cta text-white font-semibold px-8 py-4 rounded-full hover:brightness-125 transition-all duration-300 shadow-[0_0_30px_rgba(202,110,35,0.35)] text-base">
                Quero otimizar meus processos <ArrowRight size={18} />
              </Link>
              <a href="#como-funciona"
                data-testid="hero-cta-ia-secondary"
                className="inline-flex items-center justify-center gap-2 border border-[#3A231D] text-brand-muted hover:bg-[#3A231D]/30 hover:text-brand-text font-medium px-8 py-4 rounded-full transition-all duration-300 text-base">
                Ver o método
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {['Diagnóstico', 'Arquitetura', 'MVP', 'Implantação', 'Otimização'].map((step, i) => (
                <span key={i} className="text-xs font-medium text-brand-subtle bg-[#1E0D0A] border border-[#3A231D] px-3 py-1.5 rounded-full">
                  {i + 1}. {step}
                </span>
              ))}
            </div>
            <p className="text-brand-subtle text-xs mt-4">Diagnóstico gratuito. Sem compromisso. Seus dados ficam protegidos (LGPD).</p>
          </SectionReveal>
        </div>

        <SectionReveal delay={0.2} direction="right" className="hidden lg:block">
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-[#CA6E23]/15 to-transparent blur-2xl" />
            <div className="relative bg-[#1E0D0A] border border-[#3A231D] rounded-2xl p-6 space-y-4">
              <p className="text-xs font-semibold text-brand-subtle uppercase tracking-widest mb-2">Referências de mercado 2024–2025</p>
              {[
                { label: 'Empresas B2B com ganho de eficiência após IA', value: '67%', src: 'McKinsey 2024' },
                { label: 'Redução de retrabalho com automação de processos', value: '–40%', src: 'Forrester 2024' },
                { label: 'Aumento de velocidade no atendimento', value: '3,5x', src: 'HubSpot 2024' },
                { label: 'Prazo típico do diagnóstico ao MVP funcional', value: '8 sem', src: 'pollo.ag média' },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between gap-4 border-b border-[#3A231D] pb-4 last:border-0 last:pb-0">
                  <div>
                    <p className="text-brand-text text-sm font-medium">{item.label}</p>
                    <p className="text-brand-subtle text-xs">{item.src}</p>
                  </div>
                  <span className="font-sora font-bold text-xl gradient-text flex-shrink-0">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="py-20 bg-brand-surface1">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {STATS.map((stat, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <div className="bg-[#160907] border border-[#3A231D] rounded-2xl p-6 text-center hover:border-[#CA6E23]/40 transition-colors duration-300">
                <div className="font-sora text-4xl font-bold gradient-text">
                  <CountUp start={0} end={stat.value} suffix={stat.suffix} decimals={stat.decimals || 0}
                    enableScrollSpy scrollSpyOnce duration={2} />
                </div>
                <p className="text-brand-muted text-xs mt-3 leading-snug">{stat.label}</p>
                <p className="text-brand-subtle text-xs mt-1 italic">{stat.source}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SignalsSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionReveal className="text-center mb-14">
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-brand-text max-w-3xl mx-auto leading-tight">
            Sua empresa tem algum desses sinais?
          </h2>
          <p className="text-brand-muted text-base mt-4 max-w-2xl mx-auto">
            Se você reconhece dois ou mais desses cenários, há oportunidades claras de IA aplicada — e a pollo.ag pode mapear exatamente quais e como.
          </p>
        </SectionReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {SIGNALS.map((signal, i) => (
            <StaggerItem key={i}>
              <div className="flex items-start gap-4 bg-[#1E0D0A] border border-[#3A231D] rounded-xl p-5 hover:border-[#CA6E23]/30 transition-all duration-300 hover:-translate-y-0.5 h-full">
                <div className="w-8 h-8 rounded-lg bg-[#CA6E23]/10 border border-[#CA6E23]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <AlertCircle size={15} className="text-brand-cta" />
                </div>
                <p className="text-brand-muted text-sm leading-relaxed">{signal.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <SectionReveal className="text-center">
          <div className="inline-block bg-[#1E0D0A] border border-[#CA6E23]/30 rounded-2xl px-8 py-6 max-w-2xl">
            <p className="text-brand-text font-medium text-base leading-relaxed">
              Esses sinais têm solução — e ela não exige trocar toda a operação.{' '}
              <span className="gradient-text font-semibold">Começa com diagnóstico, evolui com método.</span>
            </p>
            <Link to="/diagnostico"
              className="mt-5 inline-flex items-center gap-2 bg-brand-cta text-white font-semibold px-7 py-3.5 rounded-full hover:brightness-125 transition-all duration-300 text-sm">
              Agendar diagnóstico gratuito <ArrowRight size={16} />
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

function DeliverablesSection() {
  return (
    <section className="py-24 bg-brand-surface1">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionReveal className="text-center mb-14">
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-brand-text max-w-3xl mx-auto leading-tight">
            Quatro frentes de{' '}
            <span className="gradient-text">IA aplicada</span>{' '}
            ao negócio
          </h2>
          <p className="text-brand-muted text-base mt-4 max-w-2xl mx-auto">
            Não vendemos ferramenta nem relatório. Entregamos solução funcional em produção — com time treinado, documentação e rotina de evolução.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DELIVERABLES.map((d, i) => {
            const Icon = d.icon;
            return (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="bg-[#160907] border border-[#3A231D] rounded-2xl p-8 h-full flex flex-col hover:border-[#CA6E23]/40 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                      <Icon size={22} className="text-[#160907]" />
                    </div>
                    <div>
                      <h3 className="font-sora font-semibold text-brand-text text-lg">{d.name}</h3>
                      <p className="text-brand-subtle text-sm mt-1">{d.what}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 flex-1 mb-6">
                    {d.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle size={14} className="text-brand-cta flex-shrink-0 mt-0.5" />
                        <span className="text-brand-muted text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-[#3A231D] pt-4">
                    <p className="text-brand-cta text-xs font-semibold uppercase tracking-wider mb-1">Impacto esperado</p>
                    <p className="text-brand-muted text-sm">{d.impact}</p>
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MethodSection() {
  return (
    <section id="como-funciona" className="py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionReveal className="text-center mb-14">
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-brand-text max-w-3xl mx-auto leading-tight">
            IA-first com Governança{' '}
            <span className="gradient-text">— método pollo.ag</span>
          </h2>
          <p className="text-brand-muted text-base mt-4 max-w-2xl mx-auto">
            Do diagnóstico ao piloto funcional em produção. Cada etapa tem entregáveis claros — sem surpresas e sem escopo aberto.
          </p>
        </SectionReveal>

        <div className="relative">
          <div className="hidden lg:block absolute left-[2.35rem] top-8 bottom-8 w-px bg-gradient-to-b from-[#CA6E23]/60 via-[#CA6E23]/30 to-transparent" />
          <div className="space-y-6">
            {METHOD_STEPS.map((step, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="relative flex gap-6 lg:gap-10 items-start">
                  <div className="flex-shrink-0 w-[4.7rem] flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center z-10">
                      <span className="font-sora font-bold text-[#160907] text-sm">{step.num}</span>
                    </div>
                  </div>
                  <div className="flex-1 bg-[#1E0D0A] border border-[#3A231D] rounded-2xl p-6 hover:border-[#CA6E23]/30 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <h3 className="font-sora font-semibold text-brand-text text-lg">{step.name}</h3>
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-cta bg-[#CA6E23]/10 border border-[#CA6E23]/20 px-3 py-1 rounded-full flex-shrink-0">
                        <Clock size={11} /> {step.time}
                      </span>
                    </div>
                    <p className="text-brand-muted text-sm mb-4 leading-relaxed">{step.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {step.deliverables.map((d) => (
                        <span key={d} className="text-xs text-brand-subtle bg-[#160907] border border-[#3A231D] px-3 py-1 rounded-full">
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>

        <SectionReveal className="mt-12">
          <div className="bg-[#1E0D0A] border border-[#CA6E23]/20 rounded-2xl p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                'Solução funcional em produção',
                'Time treinado para operar',
                'Documentação técnica e SOPs',
                'Dashboard de KPIs configurado',
                'Playbooks de exceção e resposta',
                'Handoff completo com autonomia',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-[#160907] border border-[#3A231D] rounded-xl px-4 py-3">
                  <CheckCircle size={15} className="text-brand-cta flex-shrink-0" />
                  <span className="text-brand-muted text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

function UseCasesSection() {
  return (
    <section className="py-24 bg-brand-surface1">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionReveal className="text-center mb-14">
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-brand-text max-w-3xl mx-auto leading-tight">
            O que IA aplicada{' '}
            <span className="gradient-text">resolve na prática</span>
          </h2>
          <p className="text-brand-muted text-base mt-4 max-w-2xl mx-auto">
            Use cases reais por área — sem prometer mágica. Cada um tem processo, dados e escopo definido.
          </p>
        </SectionReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {USE_CASES.map((uc, i) => {
            const Icon = uc.icon;
            return (
              <StaggerItem key={i}>
                <div className="bg-[#160907] border border-[#3A231D] rounded-2xl p-6 h-full flex flex-col hover:border-[#CA6E23]/40 transition-all duration-300 hover:-translate-y-1 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-[#160907]" />
                    </div>
                    <span className="text-xs font-semibold text-brand-cta uppercase tracking-widest">{uc.area}</span>
                  </div>
                  <h3 className="font-sora font-semibold text-brand-text mb-2 text-base">{uc.title}</h3>
                  <p className="text-brand-subtle text-sm leading-relaxed flex-1">{uc.desc}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

function PackagesSection() {
  return (
    <section id="pacotes" className="py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionReveal className="text-center mb-14">
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-brand-text max-w-2xl mx-auto leading-tight">
            Escolha o modelo certo para o seu momento
          </h2>
          <p className="text-brand-subtle text-sm mt-4 max-w-xl mx-auto">
            O investimento é definido após o diagnóstico gratuito — com escopo e entregáveis validados com você antes de qualquer compromisso.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PACKAGES.map((pkg, i) => (
            <SectionReveal key={pkg.id} delay={i * 0.15} className="h-full">
              <div className={`relative rounded-2xl p-8 flex flex-col h-full ${
                pkg.highlight
                  ? 'bg-gradient-to-b from-[#CA6E23]/15 to-[#1E0D0A] border-2 border-[#CA6E23]/60 shadow-[0_0_50px_rgba(202,110,35,0.2)]'
                  : 'bg-[#1E0D0A] border border-[#3A231D]'
              }`}>
                {pkg.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="gradient-bg text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-lg inline-flex items-center gap-1.5">
                      <Star size={11} /> {pkg.badge}
                    </span>
                  </div>
                )}
                <div className="mb-5">
                  <span className="text-xs font-semibold text-brand-subtle uppercase tracking-widest">{pkg.tag}</span>
                  <h3 className="font-sora text-2xl font-bold text-brand-text mt-1">{pkg.name}</h3>
                  <p className="text-brand-subtle text-sm mt-2 leading-relaxed">{pkg.desc}</p>
                </div>
                <div className={`mb-5 pb-5 border-b ${pkg.highlight ? 'border-[#CA6E23]/30' : 'border-[#3A231D]'}`}>
                  <p className="text-brand-muted text-sm leading-relaxed">{pkg.forWhom}</p>
                </div>
                <ul className="space-y-2.5 flex-1 mb-6">
                  {pkg.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle size={14} className="text-brand-cta flex-shrink-0 mt-0.5" />
                      <span className="text-brand-muted text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className={`mb-6 pb-6 border-b ${pkg.highlight ? 'border-[#CA6E23]/30' : 'border-[#3A231D]'}`}>
                  <p className="text-xs font-semibold text-brand-subtle uppercase tracking-widest mb-2">Você nos fornece</p>
                  {pkg.requires.map((r) => (
                    <p key={r} className="text-brand-subtle text-xs mt-1 flex items-start gap-1.5">
                      <span className="text-brand-cta mt-0.5">›</span> {r}
                    </p>
                  ))}
                </div>
                <Link to="/diagnostico"
                  data-testid={`pkg-cta-ia-${pkg.id}`}
                  className={`w-full text-center font-semibold py-4 rounded-full hover:brightness-125 transition-all duration-300 text-sm ${
                    pkg.highlight
                      ? 'bg-brand-cta text-white shadow-[0_0_20px_rgba(202,110,35,0.3)]'
                      : 'border border-[#3A231D] text-brand-muted hover:text-brand-text hover:bg-[#3A231D]/30'
                  }`}>
                  {pkg.cta}
                </Link>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal className="mt-8 text-center">
          <div className="inline-flex items-start gap-3 bg-[#1E0D0A] border border-[#3A231D] rounded-xl px-6 py-4 max-w-3xl text-left">
            <Shield size={18} className="text-brand-cta flex-shrink-0 mt-0.5" />
            <p className="text-brand-subtle text-xs leading-relaxed">
              <span className="text-brand-muted font-medium">Transparência: </span>
              O investimento é orçado após o diagnóstico gratuito, com escopo, entregáveis e prazo validados com você. Sem proposta genérica, sem surpresa de escopo.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState(null);
  return (
    <section className="py-24 bg-brand-surface1">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <SectionReveal className="text-center mb-12">
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-brand-text leading-tight">
            Perguntas que valem a resposta
          </h2>
        </SectionReveal>
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <SectionReveal key={i} delay={i * 0.04}>
              <div className="bg-[#160907] border border-[#3A231D] rounded-xl overflow-hidden">
                <button
                  data-testid={`faq-item-ia-${i}`}
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-[#1E0D0A]/50 transition-colors"
                >
                  <span className="font-sora font-medium text-brand-text text-sm leading-snug">{item.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-brand-cta flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {open === i && (
                  <div className="px-6 pb-5 border-t border-[#3A231D]">
                    <p className="text-brand-muted text-sm leading-relaxed pt-4">{item.a}</p>
                  </div>
                )}
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-10" />
      <div className="absolute top-0 left-0 right-0 h-px gradient-bg opacity-80" />
      <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center">
        <SectionReveal>
          <h2 className="font-sora text-3xl md:text-5xl font-bold text-brand-text leading-tight mb-6">
            Diagnóstico gratuito.{' '}
            <span className="gradient-text">Resultado em semanas.</span>
          </h2>
          <p className="text-brand-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-4">
            30 minutos para entender sua operação, identificar as maiores oportunidades de IA e receber uma proposta com escopo e prazo definidos — sem compromisso.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link to="/diagnostico"
              data-testid="final-cta-ia-primary"
              className="inline-flex items-center justify-center gap-2 bg-brand-cta text-white font-bold px-10 py-5 rounded-full hover:brightness-125 transition-all duration-300 shadow-[0_0_40px_rgba(202,110,35,0.4)] text-base">
              Quero otimizar meus processos <ArrowRight size={20} />
            </Link>
            <a href="https://wa.me/5586994849285" target="_blank" rel="noopener noreferrer"
              data-testid="final-cta-ia-whatsapp"
              className="inline-flex items-center justify-center gap-2 border border-[#3A231D] text-brand-muted hover:bg-[#3A231D]/30 hover:text-brand-text font-medium px-10 py-5 rounded-full transition-all duration-300 text-base">
              Falar com especialista
            </a>
          </div>
          <p className="text-brand-subtle text-xs mt-5">
            Sem spam. Sem proposta genérica. Seus dados ficam protegidos (LGPD).
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}

/* ─── PÁGINA PRINCIPAL ─── */

export default function LandingIA() {
  return (
    <div data-testid="landing-ia-aplicada" className="bg-[#160907]">
      <HeroSection />
      <StatsSection />
      <SignalsSection />
      <DeliverablesSection />
      <MethodSection />
      <UseCasesSection />
      <PackagesSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
}
