import { Link } from 'react-router-dom';
import SectionReveal, { StaggerContainer, StaggerItem } from '@/components/SectionReveal';
import LeadForm from '@/components/LeadForm';
import {
  MessageSquare, Zap, Target, Users, Database, TrendingUp, Eye, Settings,
  Calendar, BarChart2, Shield, Cpu, Layers, ArrowRight, CheckCircle,
  Activity, GitBranch, Bot, Filter, Star, ChevronRight
} from 'lucide-react';

/* ─── DADOS ─── */

const PAIN_CARDS = [
  { icon: Target, title: 'Leads entram, mas não são qualificados corretamente' },
  { icon: Database, title: 'O CRM fica incompleto ou desatualizado' },
  { icon: Users, title: 'O time comercial recebe contatos sem contexto' },
  { icon: TrendingUp, title: 'A Meta não recebe o sinal certo de conversão' },
  { icon: Eye, title: 'Não existe visão clara sobre qualidade dos leads' },
  { icon: Settings, title: 'A operação depende demais de esforço manual' },
];

const SOLUTION_ITEMS = [
  { icon: MessageSquare, text: 'Captação e atendimento via WhatsApp (canais de atendimento)' },
  { icon: Filter, text: 'Qualificação em etapas com score de lead' },
  { icon: GitBranch, text: 'Roteamento inteligente por perfil e maturidade' },
  { icon: Database, text: 'Integração com CRM e fluxos internos' },
  { icon: TrendingUp, text: 'Eventos enviados para a Meta via API de Conversão' },
  { icon: BarChart2, text: 'Painel com visão clara da operação, da qualidade dos leads e dos gargalos' },
];

const HOW_STEPS = [
  {
    num: '01', title: 'O lead entra pelo canal principal',
    desc: 'WhatsApp e Instagram Direct se tornam a porta de entrada da operação.',
  },
  {
    num: '02', title: 'A IA conduz a triagem e a qualificação',
    desc: 'A conversa identifica intenção, coleta dados, classifica o perfil e calcula o score do lead.',
  },
  {
    num: '03', title: 'O sistema decide o próximo passo',
    desc: 'Distribuição comercial, agendamento de visita, follow-up, handoff para humano ou automação operacional.',
  },
  {
    num: '04', title: 'Tudo é integrado e mensurado',
    desc: 'CRM, eventos da Meta, processos internos e indicadores da operação ficam conectados em uma estrutura única.',
  },
];

const DIFFERENTIALS = [
  {
    label: 'Não é',
    title: 'um fluxo engessado que apenas responde perguntas.',
    but: 'É uma operação multiagente que entende contexto, estágio do lead, regras do negócio e ações necessárias em cada etapa.',
  },
  {
    label: 'Não é',
    title: 'só conversa.',
    but: 'É processo comercial. Cada interação alimenta CRM, score, distribuição, atribuição e análise de performance.',
  },
  {
    label: 'Não é',
    title: 'só IA.',
    but: 'É governança operacional. Você ganha rastreabilidade, controle, observabilidade e visão clara do que está funcionando ou travando a conversão.',
  },
];

const AGENTS = [
  { icon: MessageSquare, name: 'Agente de entrada', desc: 'Recebe o lead, entende a intenção inicial e abre a sessão correta.' },
  { icon: Filter, name: 'Agente de qualificação', desc: 'Faz perguntas estratégicas, coleta informações e pontua o lead conforme perfil e aderência.' },
  { icon: Calendar, name: 'Agente de agendamento', desc: 'Oferece visita, agenda horário e confirma os próximos passos.' },
  { icon: Users, name: 'Agente de handoff', desc: 'Entrega o lead ao humano com contexto, resumo e score.' },
  { icon: Cpu, name: 'Agente operacional', desc: 'Aciona CRM, Meta, notificações e rotinas internas do negócio.' },
  { icon: BarChart2, name: 'Agente de análise', desc: 'Mostra gargalos, perda de oportunidade e pontos de melhoria no atendimento.' },
];

const INTEGRATIONS = [
  { icon: Database, name: 'CRM', desc: 'Criamos ou atualizamos leads com dados, score, estágio e histórico.' },
  { icon: TrendingUp, name: 'Meta Conversions API', desc: 'Enviamos eventos mais ricos para melhorar atribuição, mensuração e qualidade do tráfego.' },
  { icon: Calendar, name: 'Agenda e visitas', desc: 'Organizamos agendamentos, confirmações, lembretes e follow-ups.' },
  { icon: GitBranch, name: 'Fluxos internos', desc: 'Notificações, tarefas, alertas e automações operacionais conectadas ao dia a dia da empresa.' },
];

const DASHBOARD_BLOCKS = [
  { icon: Star, name: 'Qualidade dos leads', desc: 'Veja quais canais e campanhas trazem contatos com maior potencial real de conversão.' },
  { icon: Activity, name: 'Performance do atendimento', desc: 'Entenda onde o processo responde bem, onde perde força e onde precisa melhorar.' },
  { icon: BarChart2, name: 'Funil real', desc: 'Acompanhe entrada, qualificação, handoff, agendamento, visita e conversão.' },
  { icon: Target, name: 'Gargalos e melhoria contínua', desc: 'Descubra por que leads se perdem e onde sua equipe ou automação podem evoluir.' },
];

const AUTHORITY = [
  { icon: Shield, title: 'Estrutura segura', desc: 'Arquitetura pensada para operar com organização, isolamento, governança e menor dependência de improviso.' },
  { icon: Cpu, title: 'Operação econômica', desc: 'Automatizamos o que é repetitivo e concentramos inteligência onde ela realmente gera impacto.' },
  { icon: TrendingUp, title: 'Evolução contínua', desc: 'A operação aprende com os dados, com o funil e com o comportamento real dos leads.' },
];

const OFFERS = [
  {
    tier: 'Funil Conversacional',
    badge: 'Entrada',
    desc: 'Para empresas que querem estruturar captação, triagem, score e CRM nos canais principais.',
    items: ['Captação via WhatsApp', 'Qualificação com score', 'Integração CRM', 'Painel básico'],
    cta: 'Quero este plano',
  },
  {
    tier: 'Revenue Ops AI',
    badge: 'Mais escolhido',
    desc: 'Para operações que precisam integrar qualificação, handoff, Meta, agendamento e visão de funil.',
    items: ['Tudo do Funil Conversacional', 'Meta Conversions API', 'Agendamento e handoff', 'Painel de funil completo'],
    cta: 'Quero este plano',
    highlight: true,
  },
  {
    tier: 'Plataforma Operacional Completa',
    badge: 'Enterprise',
    desc: 'Para empresas que querem multiagentes, painéis, governança e automação operacional em escala.',
    items: ['Tudo do Revenue Ops AI', 'Multiagentes customizados', 'Governança e observabilidade', 'Automação em escala'],
    cta: 'Quero este plano',
  },
];

/* ─── SEÇÕES ─── */

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[#160907]" />
      <div className="absolute inset-0 opacity-30"
        style={{ backgroundImage: 'radial-gradient(ellipse 80% 60% at 60% 40%, #CA6E23 0%, transparent 60%)' }} />
      <div className="absolute top-0 left-0 right-0 h-px gradient-bg opacity-60" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionReveal>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-brand-cta uppercase tracking-widest border border-[#CA6E23]/30 bg-[#CA6E23]/10 px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cta animate-pulse" />
              WhatsApp · IA · Operação Comercial
            </div>
            <h1 className="font-sora text-4xl md:text-5xl lg:text-6xl font-bold text-brand-text leading-tight">
              Transforme seu WhatsApp em uma{' '}
              <span className="gradient-text">máquina de vendas</span>{' '}
              com IA.
            </h1>
            <p className="text-brand-muted text-lg mt-6 leading-relaxed">
              Implementamos uma estrutura completa para captar, qualificar, pontuar, distribuir e acompanhar leads em tempo real.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a href="#oferta"
                data-testid="hero-cta-primary-wa"
                className="inline-flex items-center justify-center gap-2 bg-brand-cta text-white font-semibold px-8 py-4 rounded-full hover:brightness-125 transition-all duration-300 shadow-[0_0_30px_rgba(202,110,35,0.35)] text-base">
                Quero estruturar minha operação <ArrowRight size={18} />
              </a>
              <Link to="/diagnostico"
                data-testid="hero-cta-secondary-wa"
                className="inline-flex items-center justify-center gap-2 border border-[#3A231D] text-brand-muted hover:bg-[#3A231D]/30 hover:text-brand-text font-medium px-8 py-4 rounded-full transition-all duration-300 text-base">
                Agendar diagnóstico
              </Link>
            </div>
          </SectionReveal>
        </div>

        <SectionReveal delay={0.2} direction="right" className="hidden lg:block">
          <div className="relative">
            <div className="absolute -inset-8 rounded-3xl bg-gradient-to-br from-[#CA6E23]/15 to-transparent blur-2xl" />
            <div className="relative bg-[#1E0D0A] border border-[#3A231D] rounded-2xl p-6 space-y-4">
              <p className="text-xs font-semibold text-brand-subtle uppercase tracking-widest mb-4">Operação em tempo real</p>
              {[
                { label: 'Lead qualificado via IA', status: 'Score: 87', dot: 'bg-green-400' },
                { label: 'Handoff para vendedor', status: 'Com contexto completo', dot: 'bg-brand-cta' },
                { label: 'Evento enviado à Meta', status: 'Conversão registrada', dot: 'bg-green-400' },
                { label: 'CRM atualizado', status: 'Etapa: Proposta', dot: 'bg-brand-cta' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 bg-[#160907] border border-[#3A231D] rounded-xl px-4 py-3">
                  <div className={`w-2 h-2 rounded-full ${item.dot} flex-shrink-0`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-brand-text text-sm font-medium">{item.label}</p>
                    <p className="text-brand-subtle text-xs">{item.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

function MarketSection() {
  return (
    <section className="py-24 bg-brand-surface1">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <SectionReveal>
          <p className="text-xs font-semibold text-brand-cta uppercase tracking-widest mb-6">O mercado mudou</p>
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-brand-text leading-tight mb-8">
            Ter IA no atendimento já não é diferencial.{' '}
            <span className="gradient-text">Ter uma operação integrada e mensurável é.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mt-12">
            <div className="bg-[#160907] border border-[#3A231D] rounded-2xl p-6">
              <p className="text-brand-muted text-sm leading-relaxed">
                A maioria das empresas já responde mensagens com algum nível de automação. O problema real está em <span className="text-brand-text font-medium">perder lead, qualificar mal, alimentar mal o CRM</span> e não enxergar onde o atendimento falha.
              </p>
            </div>
            <div className="bg-[#160907] border border-[#CA6E23]/30 rounded-2xl p-6">
              <p className="text-brand-muted text-sm leading-relaxed">
                Nós estruturamos o processo inteiro: do primeiro contato até a <span className="text-brand-cta font-medium">distribuição comercial, atribuição na Meta e melhoria contínua da operação</span>.
              </p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

function PainSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionReveal className="text-center mb-14">
          <p className="text-xs font-semibold text-brand-cta uppercase tracking-widest mb-4">Diagnóstico</p>
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-brand-text leading-tight max-w-3xl mx-auto">
            Sua empresa recebe mensagens. Mas a operação está preparada para transformar esse volume em receita?
          </h2>
        </SectionReveal>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PAIN_CARDS.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title}>
                <div className="group bg-[#1E0D0A] border border-[#3A231D] rounded-2xl p-6 hover:border-[#CA6E23]/40 transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="w-10 h-10 rounded-xl bg-[#CA6E23]/10 border border-[#CA6E23]/20 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-brand-cta" />
                  </div>
                  <p className="font-sora font-medium text-brand-text text-sm leading-relaxed">{item.title}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
        <SectionReveal className="mt-10 text-center">
          <div className="inline-block bg-[#1E0D0A] border border-[#CA6E23]/30 rounded-2xl px-8 py-5 max-w-2xl">
            <p className="text-brand-muted text-sm leading-relaxed italic">
              "Quando o processo não é estruturado, a empresa{' '}
              <span className="text-brand-text font-medium not-italic">responde muito, mas converte menos do que poderia.</span>"
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

function SolutionSection() {
  return (
    <section className="py-24 bg-brand-surface1">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SectionReveal>
            <p className="text-xs font-semibold text-brand-cta uppercase tracking-widest mb-4">A Solução</p>
            <h2 className="font-sora text-3xl md:text-4xl font-bold text-brand-text leading-tight mb-4">
              Uma camada completa de atendimento, qualificação e{' '}
              <span className="gradient-text">operação comercial com IA.</span>
            </h2>
            <p className="text-brand-muted text-base leading-relaxed">
              Mais do que responder mensagens, nossa solução organiza toda a jornada do lead nos canais mais importantes do seu negócio.
            </p>
            <a href="#oferta" className="mt-8 inline-flex items-center gap-2 bg-brand-cta text-white font-semibold px-8 py-4 rounded-full hover:brightness-125 transition-all duration-300 shadow-[0_0_25px_rgba(202,110,35,0.3)]">
              Quero estruturar minha operação <ArrowRight size={18} />
            </a>
          </SectionReveal>
          <SectionReveal delay={0.2} direction="right">
            <div className="space-y-3">
              {SOLUTION_ITEMS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-4 bg-[#160907] border border-[#3A231D] rounded-xl px-5 py-4 hover:border-[#CA6E23]/40 transition-colors duration-300">
                    <div className="w-8 h-8 rounded-lg bg-[#CA6E23]/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-brand-cta" />
                    </div>
                    <p className="text-brand-muted text-sm leading-relaxed">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionReveal className="text-center mb-14">
          <p className="text-xs font-semibold text-brand-cta uppercase tracking-widest mb-4">Na Prática</p>
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-brand-text">Como funciona na prática</h2>
        </SectionReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOW_STEPS.map((step, i) => (
            <SectionReveal key={step.num} delay={i * 0.1}>
              <div className="relative bg-[#1E0D0A] border border-[#3A231D] rounded-2xl p-6 h-full hover:border-[#CA6E23]/40 transition-colors duration-300">
                <div className="font-sora text-4xl font-bold gradient-text mb-4">{step.num}</div>
                <h3 className="font-sora text-base font-semibold text-brand-text mb-2 leading-snug">{step.title}</h3>
                <p className="text-brand-subtle text-xs leading-relaxed">{step.desc}</p>
                {i < HOW_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-3 z-10">
                    <ChevronRight size={20} className="text-[#3A231D]" />
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

function DifferentialSection() {
  return (
    <section className="py-24 bg-brand-surface1">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionReveal className="text-center mb-14">
          <p className="text-xs font-semibold text-brand-cta uppercase tracking-widest mb-4">Diferencial</p>
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-brand-text max-w-3xl mx-auto leading-tight">
            Por que nossa estrutura converte mais do que um "bot de atendimento" comum
          </h2>
        </SectionReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DIFFERENTIALS.map((item, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <div className="bg-[#160907] border border-[#3A231D] rounded-2xl p-7 h-full group hover:border-[#CA6E23]/40 transition-colors duration-300">
                <div className="inline-flex items-center gap-2 text-xs text-[#A34E1B] border border-[#A34E1B]/30 bg-[#A34E1B]/10 px-3 py-1 rounded-full mb-4">
                  {item.label}
                </div>
                <h3 className="font-sora font-semibold text-brand-text text-base mb-3 line-through decoration-[#A34E1B] decoration-2 opacity-60">
                  {item.title}
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed">
                  <span className="text-brand-cta font-medium">É</span> {item.but.replace(/^É /, '')}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AgentsSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionReveal className="text-center mb-14">
          <p className="text-xs font-semibold text-brand-cta uppercase tracking-widest mb-4">Multiagentes</p>
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-brand-text max-w-3xl mx-auto leading-tight">
            Uma estrutura de multiagentes para cada etapa da operação
          </h2>
        </SectionReveal>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {AGENTS.map((agent, i) => {
            const Icon = agent.icon;
            return (
              <StaggerItem key={i}>
                <div className="bg-[#1E0D0A] border border-[#3A231D] rounded-2xl p-6 h-full hover:border-[#CA6E23]/40 transition-all duration-300 hover:-translate-y-1 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-[#160907]" />
                    </div>
                    <h3 className="font-sora font-semibold text-brand-text text-sm">{agent.name}</h3>
                  </div>
                  <p className="text-brand-subtle text-xs leading-relaxed">{agent.desc}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

function IntegrationsSection() {
  return (
    <section className="py-24 bg-brand-surface1">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionReveal className="text-center mb-14">
          <p className="text-xs font-semibold text-brand-cta uppercase tracking-widest mb-4">Integrações</p>
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-brand-text max-w-3xl mx-auto leading-tight">
            Integrado ao que sua operação precisa para funcionar de verdade
          </h2>
        </SectionReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {INTEGRATIONS.map((item, i) => {
            const Icon = item.icon;
            return (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="bg-[#160907] border border-[#3A231D] rounded-2xl p-6 h-full hover:border-[#CA6E23]/40 transition-colors duration-300 text-center">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-4">
                    <Icon size={20} className="text-[#160907]" />
                  </div>
                  <h3 className="font-sora font-semibold text-brand-text mb-2">{item.name}</h3>
                  <p className="text-brand-subtle text-xs leading-relaxed">{item.desc}</p>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DashboardSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionReveal className="text-center mb-14">
          <p className="text-xs font-semibold text-brand-cta uppercase tracking-widest mb-4">Visibilidade</p>
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-brand-text max-w-3xl mx-auto leading-tight">
            Um painel claro para enxergar o que realmente está acontecendo na operação
          </h2>
        </SectionReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {DASHBOARD_BLOCKS.map((item, i) => {
            const Icon = item.icon;
            return (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="flex gap-5 bg-[#1E0D0A] border border-[#3A231D] rounded-2xl p-6 hover:border-[#CA6E23]/40 transition-colors duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#CA6E23]/10 border border-[#CA6E23]/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-brand-cta" />
                  </div>
                  <div>
                    <h3 className="font-sora font-semibold text-brand-text mb-1.5">{item.name}</h3>
                    <p className="text-brand-subtle text-sm leading-relaxed">{item.desc}</p>
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

function AuthoritySection() {
  return (
    <section className="py-24 bg-brand-surface1">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionReveal className="text-center mb-14">
          <p className="text-xs font-semibold text-brand-cta uppercase tracking-widest mb-4">Para quem é</p>
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-brand-text max-w-3xl mx-auto leading-tight">
            Projetado para empresas que precisam{' '}
            <span className="gradient-text">escalar com controle, eficiência e previsibilidade</span>
          </h2>
        </SectionReveal>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {AUTHORITY.map((item, i) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={i}>
                <div className="bg-[#160907] border border-[#3A231D] rounded-2xl p-8 h-full hover:border-[#CA6E23]/40 transition-colors duration-300 text-center">
                  <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-5">
                    <Icon size={24} className="text-[#160907]" />
                  </div>
                  <h3 className="font-sora font-semibold text-brand-text text-lg mb-3">{item.title}</h3>
                  <p className="text-brand-subtle text-sm leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

function OfferSection() {
  return (
    <section id="oferta" className="py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionReveal className="text-center mb-14">
          <p className="text-xs font-semibold text-brand-cta uppercase tracking-widest mb-4">Planos</p>
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-brand-text max-w-3xl mx-auto leading-tight">
            Implementamos de acordo com a maturidade e a operação da sua empresa
          </h2>
        </SectionReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {OFFERS.map((offer, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <div className={`relative rounded-2xl p-8 h-full flex flex-col ${
                offer.highlight
                  ? 'bg-gradient-to-b from-[#CA6E23]/20 to-[#1E0D0A] border-2 border-[#CA6E23]/60 shadow-[0_0_40px_rgba(202,110,35,0.2)]'
                  : 'bg-[#1E0D0A] border border-[#3A231D]'
              }`}>
                {offer.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-brand-cta text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                      {offer.badge}
                    </span>
                  </div>
                )}
                {!offer.highlight && (
                  <span className="text-xs font-semibold text-brand-subtle uppercase tracking-widest mb-2 block">{offer.badge}</span>
                )}
                <h3 className="font-sora text-xl font-bold text-brand-text mb-3">{offer.tier}</h3>
                <p className="text-brand-subtle text-sm leading-relaxed mb-6">{offer.desc}</p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {offer.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle size={16} className="text-brand-cta flex-shrink-0 mt-0.5" />
                      <span className="text-brand-muted text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/diagnostico"
                  className={`w-full text-center font-semibold py-3.5 rounded-full hover:brightness-125 transition-all duration-300 text-sm ${
                    offer.highlight
                      ? 'bg-brand-cta text-white shadow-[0_0_20px_rgba(202,110,35,0.3)]'
                      : 'border border-[#3A231D] text-brand-muted hover:text-brand-text hover:bg-[#3A231D]/30'
                  }`}>
                  {offer.cta}
                </Link>
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
      <div className="absolute bottom-0 left-0 right-0 h-px gradient-bg opacity-40" />
      <div className="relative max-w-3xl mx-auto px-6 md:px-12 text-center">
        <SectionReveal>
          <p className="text-xs font-semibold text-brand-cta uppercase tracking-widest mb-6">Próximo passo</p>
          <h2 className="font-sora text-3xl md:text-5xl font-bold text-brand-text leading-tight mb-4">
            Se a sua empresa recebe volume, ela precisa de{' '}
            <span className="gradient-text">processo</span>{' '}
            — não apenas de respostas automáticas.
          </h2>
          <p className="text-brand-muted text-base md:text-lg mt-4 max-w-xl mx-auto leading-relaxed">
            Vamos estruturar sua operação de atendimento, qualificação e receita com IA de forma segura, integrada e orientada à conversão.
          </p>
          <div className="mt-10">
            <Link to="/diagnostico"
              data-testid="final-cta-wa"
              className="inline-flex items-center gap-2 bg-brand-cta text-white font-semibold px-10 py-5 rounded-full hover:brightness-125 transition-all duration-300 shadow-[0_0_40px_rgba(202,110,35,0.4)] text-base">
              Agendar diagnóstico estratégico <ArrowRight size={18} />
            </Link>
            <p className="text-brand-subtle text-xs mt-4">
              Entenda onde sua operação perde leads e como transformar atendimento em crescimento com previsibilidade.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

/* ─── PÁGINA PRINCIPAL ─── */

export default function LandingWhatsApp() {
  return (
    <div data-testid="landing-whatsapp" className="bg-[#160907]">
      <HeroSection />
      <MarketSection />
      <PainSection />
      <SolutionSection />
      <HowItWorksSection />
      <DifferentialSection />
      <AgentsSection />
      <IntegrationsSection />
      <DashboardSection />
      <AuthoritySection />
      <OfferSection />
      <FinalCTASection />
    </div>
  );
}
