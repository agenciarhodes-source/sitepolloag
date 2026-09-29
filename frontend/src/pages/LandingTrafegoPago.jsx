import { Link } from 'react-router-dom';
import SectionReveal, { StaggerContainer, StaggerItem } from '@/components/SectionReveal';
import CountUp from '@/components/CountUp';
import {
  TrendingUp, Target, Zap, BarChart2, CheckCircle, ArrowRight,
  Star, Shield, Cpu, Activity, ChevronRight, Users, Database, Layers
} from 'lucide-react';
import { CTA_URL } from '@/seo/config';

/* ─── DADOS ─── */

const STATS = [
  { value: 37.9, prefix: 'R$', suffix: ' bi', label: 'Investido em mídia digital no Brasil em 2024', source: 'IAB Brasil + Kantar 2025', decimals: 1 },
  { value: 9.1, prefix: '+', suffix: '%', label: 'Crescimento previsto para publicidade no Brasil em 2026', source: 'Dentsu Global Forecast', decimals: 1 },
  { value: 300, prefix: '', suffix: '%', label: 'ROI médio com tráfego estratégico bem gerenciado', source: 'Wordstream 2024', decimals: 0 },
  { value: 73, prefix: '', suffix: '%', label: 'Das empresas brasileiras aumentaram investimento em anúncios digitais', source: 'IAB Brasil 2024', decimals: 0 },
];

const WHY_INVEST = [
  { icon: Target, title: 'Segmentação precisa', desc: 'Alcançamos exatamente quem tem perfil de compra — por comportamento, intenção e dados proprietários — sem desperdiçar verba com audiências frias.' },
  { icon: Activity, title: 'Resultados rápidos e mensuráveis', desc: 'Campanhas otimizadas entram em ritmo de performance em semanas. Cada real investido é rastreado, medido e conectado a resultado real de negócio.' },
  { icon: TrendingUp, title: 'Escala controlada', desc: 'Crescemos o investimento em mídia conforme os indicadores justificam. Sem queimar verba, sem acelerar antes da hora certa.' },
  { icon: Cpu, title: 'IA + Dados a seu favor', desc: 'IA para lances, segmentação e otimização. Server-Side Tracking para garantir dados limpos mesmo com restrições de cookies e iOS.' },
];

const SCOPE = [
  'Estratégia de campanhas personalizada',
  'Setup e configuração de contas',
  'Criação de públicos e segmentação avançada',
  'Produção de criativos (imagem e copy)',
  'Testes A/B contínuos',
  'Otimização semanal de campanhas',
  'Relatório mensal de performance',
  'Integração CRM + WhatsApp',
  'Reunião mensal de alinhamento',
  'API de Conversões (CAPI / Server-Side)',
  'Remarketing e funis automatizados',
  'Suporte via WhatsApp dedicado',
];

const PACKAGES = [
  {
    id: 'starter',
    audience: 'Micro / MEI',
    name: 'Starter',
    price: 'R$ 997',
    priceNote: 'fee de gestão/mês',
    minMedia: '+ verba de mídia mínima: R$ 1.000/mês',
    desc: 'Para quem está começando a investir em anúncios e quer validar suas primeiras campanhas com profissionalismo.',
    items: [
      '1 plataforma (Google Ads ou Meta Ads)',
      'Até 2 campanhas ativas',
      'Setup completo da conta',
      'Criação de até 4 criativos/mês',
      'Otimização quinzenal',
      'Relatório mensal simplificado',
      'Suporte via WhatsApp',
    ],
    cta: 'Quero começar',
    highlight: false,
  },
  {
    id: 'growth',
    audience: 'PME',
    name: 'Growth',
    price: 'R$ 1.997',
    priceNote: 'fee de gestão/mês',
    minMedia: '+ verba de mídia mínima: R$ 3.000/mês',
    badge: 'Mais popular',
    desc: 'Para pequenas e médias empresas que já faturam e querem escalar com estratégia de dados e funis de conversão.',
    items: [
      '2 plataformas (Google + Meta Ads)',
      'Até 5 campanhas ativas',
      'Criação de até 8 criativos/mês',
      'Testes A/B contínuos',
      'Otimização semanal',
      'API de Conversões (CAPI)',
      'Relatório completo + reunião mensal',
      'Remarketing estratégico',
      'Integração CRM + WhatsApp',
    ],
    cta: 'Quero escalar',
    highlight: true,
  },
  {
    id: 'scale',
    audience: 'Média Empresa',
    name: 'Scale',
    price: 'R$ 3.497',
    priceNote: 'fee de gestão/mês',
    minMedia: '+ verba de mídia mínima: R$ 8.000/mês',
    desc: 'Para empresas em crescimento acelerado que precisam de operação completa com inteligência e automação.',
    items: [
      'Até 3 plataformas (Google + Meta + TikTok/LinkedIn)',
      'Campanhas ilimitadas',
      'Criativos ilimitados (imagem + vídeo)',
      'Testes A/B + testes de público',
      'Otimização diária',
      'Server-Side Tracking completo',
      'Dashboard BI personalizado',
      'Automação de funil (n8n + WhatsApp)',
      'Reunião quinzenal de estratégia',
    ],
    cta: 'Quero dominar',
    highlight: false,
  },
];

const COMPARE_ROWS = [
  { feature: 'Plataformas', starter: 'Google ou Meta', growth: 'Google + Meta', scale: 'Google + Meta + TikTok/LinkedIn' },
  { feature: 'Campanhas ativas', starter: 'Até 2', growth: 'Até 5', scale: 'Ilimitadas' },
  { feature: 'Criativos/mês', starter: '4 criativos', growth: '8 criativos', scale: 'Ilimitados' },
  { feature: 'Otimização', starter: 'Quinzenal', growth: 'Semanal', scale: 'Diária' },
  { feature: 'API de Conversões (CAPI)', starter: '—', growth: '✓', scale: '✓' },
  { feature: 'Server-Side Tracking', starter: '—', growth: '—', scale: '✓' },
  { feature: 'Remarketing', starter: '—', growth: '✓', scale: '✓' },
  { feature: 'Integração CRM + WhatsApp', starter: '—', growth: '✓', scale: '✓' },
  { feature: 'Dashboard BI', starter: '—', growth: '—', scale: '✓' },
  { feature: 'Automação de funil', starter: '—', growth: '—', scale: '✓' },
  { feature: 'Reunião de alinhamento', starter: '—', growth: 'Mensal', scale: 'Quinzenal' },
];

const RESULTS = [
  { value: 40, suffix: '%', label: 'Aumento médio em faturamento', note: 'Campanhas com remarketing dinâmico e segmentação avançada nos primeiros 3 meses.' },
  { value: 30, suffix: '%', label: 'Redução média no CPA', note: 'Otimização contínua com IA e API de Conversões vs. campanhas sem gestão profissional.' },
  { value: 5, suffix: 'x', label: 'ROAS médio alcançável', note: 'Com estratégia de funil completo, empresas alcançam retorno de 3x a 6x sobre o investimento.' },
];

/* ─── SEÇÕES ─── */

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[#160907]" />
      <div className="absolute inset-0 opacity-25"
        style={{ backgroundImage: 'radial-gradient(ellipse 70% 55% at 70% 35%, #A34E1B 0%, transparent 65%)' }} />
      <div className="absolute top-0 left-0 right-0 h-px gradient-bg opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionReveal>
            <h1 className="font-sora text-4xl md:text-5xl lg:text-6xl font-bold text-brand-text leading-tight">
              Tráfego Pago que gera{' '}
              <span className="gradient-text">resultado real.</span>
            </h1>
            <p className="text-brand-muted text-lg mt-6 leading-relaxed max-w-xl">
              Estratégia, gestão e otimização de campanhas em Google Ads e Meta Ads com dados, IA e foco em conversão para o seu negócio crescer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a href="#pacotes"
                data-testid="hero-cta-tp-primary"
                className="inline-flex items-center justify-center gap-2 bg-brand-cta text-white font-semibold px-8 py-4 rounded-full hover:brightness-125 transition-all duration-300 shadow-[0_0_30px_rgba(202,110,35,0.35)] text-base">
                Ver Pacotes <ArrowRight size={18} />
              </a>
              <a href={CTA_URL} target="_blank" rel="noopener noreferrer" data-testid="hero-cta-tp-secondary"
                className="inline-flex items-center justify-center gap-2 border border-[#3A231D] text-brand-muted hover:bg-[#3A231D]/30 hover:text-brand-text font-medium px-8 py-4 rounded-full transition-all duration-300 text-base">
                Falar com especialista
              </a>
            </div>
          </SectionReveal>
        </div>

        <SectionReveal delay={0.2} direction="right" className="hidden lg:block">
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-[#CA6E23]/15 to-transparent blur-2xl" />
            <div className="relative bg-[#1E0D0A] border border-[#3A231D] rounded-2xl p-6 space-y-5">
              <p className="text-xs font-semibold text-brand-subtle uppercase tracking-widest">Benchmark de mercado 2026</p>
              {[
                { label: 'Retorno médio com gestão profissional', value: 'até 3x', src: 'Wordstream 2024' },
                { label: 'Aumento de faturamento (3 meses)', value: '+40%', src: 'Campanhas com remarketing dinâmico' },
                { label: 'Redução no custo por aquisição', value: '-30%', src: 'IA + API de Conversões' },
                { label: 'Crescimento da publicidade digital BR', value: '+9,1%', src: 'Dentsu Global 2026' },
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

function MarketSection() {
  return (
    <section className="py-24 bg-brand-surface1">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionReveal className="text-center mb-14">
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-brand-text leading-tight max-w-3xl mx-auto">
            O mercado digital brasileiro não para de crescer.
          </h2>
          <p className="text-brand-muted text-base mt-4 max-w-2xl mx-auto">
            O Brasil é o mercado com maior crescimento em publicidade no mundo em 2026, segundo a Dentsu.{' '}
            <span className="text-brand-text font-medium">Quem não investe em tráfego pago está ficando para trás.</span>
          </p>
        </SectionReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {STATS.map((stat, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <div className="bg-[#160907] border border-[#3A231D] rounded-2xl p-6 text-center group hover:border-[#CA6E23]/40 transition-colors duration-300">
                <div className="font-sora text-4xl font-bold gradient-text">
                  <CountUp
                    start={0}
                    end={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                    enableScrollSpy
                    scrollSpyOnce
                    duration={2}
                  />
                </div>
                <p className="text-brand-muted text-sm mt-3 leading-snug">{stat.label}</p>
                <p className="text-brand-subtle text-xs mt-2 italic">{stat.source}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyInvestSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionReveal className="text-center mb-14">
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-brand-text max-w-3xl mx-auto leading-tight">
            Tráfego pago é o caminho mais rápido para{' '}
            <span className="gradient-text">escalar seu faturamento.</span>
          </h2>
        </SectionReveal>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_INVEST.map((item, i) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={i}>
                <div className="bg-[#1E0D0A] border border-[#3A231D] rounded-2xl p-6 h-full hover:border-[#CA6E23]/40 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-5">
                    <Icon size={22} className="text-[#160907]" />
                  </div>
                  <h3 className="font-sora font-semibold text-brand-text mb-2">{item.title}</h3>
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

function ScopeSection() {
  return (
    <section className="py-24 bg-brand-surface1">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SectionReveal>
            <h2 className="font-sora text-3xl md:text-4xl font-bold text-brand-text leading-tight mb-4">
              O que a <span className="gradient-text">pollo.ag</span> entrega
            </h2>
            <p className="text-brand-muted text-base leading-relaxed">
              Não vendemos apenas gestão de anúncios. Entregamos uma{' '}
              <span className="text-brand-text font-medium">operação completa de growth</span>{' '}
              com foco em vendas e inteligência de dados.
            </p>
            <a href="#pacotes" className="mt-8 inline-flex items-center gap-2 bg-brand-cta text-white font-semibold px-8 py-4 rounded-full hover:brightness-125 transition-all duration-300 shadow-[0_0_25px_rgba(202,110,35,0.3)]">
              Ver pacotes <ArrowRight size={18} />
            </a>
          </SectionReveal>
          <SectionReveal delay={0.2} direction="right">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SCOPE.map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-[#160907] border border-[#3A231D] rounded-xl px-4 py-3 hover:border-[#CA6E23]/30 transition-colors">
                  <CheckCircle size={16} className="text-brand-cta flex-shrink-0 mt-0.5" />
                  <span className="text-brand-muted text-sm leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
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
            Escolha o plano ideal para o seu momento
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {PACKAGES.map((pkg, i) => (
            <SectionReveal key={pkg.id} delay={i * 0.1} className="h-full">
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
                <div className="mb-6">
                  <span className="text-xs font-semibold text-brand-subtle uppercase tracking-widest">{pkg.audience}</span>
                  <h3 className="font-sora text-2xl font-bold text-brand-text mt-1">{pkg.name}</h3>
                  <p className="text-brand-subtle text-sm mt-2 leading-relaxed">{pkg.desc}</p>
                </div>
                <ul className="space-y-2.5 flex-1 mb-8">
                  {pkg.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle size={15} className="text-brand-cta flex-shrink-0 mt-0.5" />
                      <span className="text-brand-muted text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <a href={CTA_URL} target="_blank" rel="noopener noreferrer" data-testid={`pkg-cta-${pkg.id}`}
                  className={`w-full text-center font-semibold py-4 rounded-full hover:brightness-125 transition-all duration-300 text-sm ${
                    pkg.highlight
                      ? 'bg-brand-cta text-white shadow-[0_0_20px_rgba(202,110,35,0.3)]'
                      : 'border border-[#3A231D] text-brand-muted hover:text-brand-text hover:bg-[#3A231D]/30'
                  }`}>
                  {pkg.cta}
                </a>
              </div>
            </SectionReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

function CompareSection() {
  return (
    <section className="py-24 bg-brand-surface1">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionReveal className="text-center mb-12">
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-brand-text">Entenda cada plano em detalhe</h2>
        </SectionReveal>
        <SectionReveal>
          <div className="overflow-x-auto rounded-2xl border border-[#3A231D]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#3A231D] bg-[#160907]">
                  <th className="text-left py-4 px-6 text-brand-subtle font-semibold text-xs uppercase tracking-widest w-1/3">Recurso</th>
                  {PACKAGES.map((pkg) => (
                    <th key={pkg.id} className={`py-4 px-6 text-center font-sora font-semibold ${pkg.highlight ? 'text-brand-cta' : 'text-brand-text'}`}>
                      {pkg.name}
                      {pkg.highlight && <span className="block text-xs font-normal text-brand-subtle mt-0.5">{pkg.audience}</span>}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((row, i) => (
                  <tr key={i} className={`border-b border-[#3A231D]/60 ${i % 2 === 0 ? 'bg-[#1E0D0A]' : 'bg-[#160907]'}`}>
                    <td className="py-3.5 px-6 text-brand-muted">{row.feature}</td>
                    {[row.starter, row.growth, row.scale].map((val, j) => (
                      <td key={j} className={`py-3.5 px-6 text-center ${
                        val === '✓' ? 'text-brand-cta font-bold text-base' :
                        val === '—' ? 'text-[#3A231D] text-lg font-bold' :
                        PACKAGES[j].highlight ? 'text-brand-cta font-medium' : 'text-brand-muted'
                      }`}>
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

function ResultsSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionReveal className="text-center mb-14">
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-brand-text max-w-2xl mx-auto leading-tight">
            O que esperar com tráfego pago bem gerenciado
          </h2>
        </SectionReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RESULTS.map((item, i) => (
            <SectionReveal key={i} delay={i * 0.15}>
              <div className="bg-[#1E0D0A] border border-[#3A231D] rounded-2xl p-8 text-center hover:border-[#CA6E23]/40 transition-colors duration-300 group">
                <div className="font-sora text-5xl md:text-6xl font-bold gradient-text">
                  <CountUp
                    start={0}
                    end={item.value}
                    suffix={item.suffix}
                    enableScrollSpy
                    scrollSpyOnce
                    duration={2.5}
                  />
                </div>
                <p className="text-brand-text font-semibold mt-4">{item.label}</p>
                <p className="text-brand-subtle text-xs mt-2 leading-relaxed">{item.note}</p>
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
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <SectionReveal>
            <h2 className="font-sora text-3xl md:text-4xl font-bold text-brand-text leading-tight mb-4">
              Pronto para transformar seu investimento em{' '}
              <span className="gradient-text">crescimento real?</span>
            </h2>
            <p className="text-brand-muted text-base leading-relaxed mb-8">
              Agende um diagnóstico gratuito e receba um plano personalizado para escalar suas vendas com tráfego pago.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-[#1E0D0A] border border-[#3A231D] rounded-xl p-4">
                <CheckCircle size={18} className="text-brand-cta flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-brand-text text-sm font-medium">Diagnóstico sem compromisso</p>
                  <p className="text-brand-subtle text-xs mt-0.5">Call de 30 min para entender seu negócio e recomendar o plano certo.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-[#1E0D0A] border border-[#3A231D] rounded-xl p-4">
                <CheckCircle size={18} className="text-brand-cta flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-brand-text text-sm font-medium">Plano personalizado</p>
                  <p className="text-brand-subtle text-xs mt-0.5">Estratégia adaptada à sua realidade de investimento, setor e objetivos.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-[#1E0D0A] border border-[#3A231D] rounded-xl p-4">
                <CheckCircle size={18} className="text-brand-cta flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-brand-text text-sm font-medium">Resposta em até 24h úteis</p>
                  <p className="text-brand-subtle text-xs mt-0.5">Sem spam, sem proposta genérica automática.</p>
                </div>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="flex flex-col items-center lg:items-start gap-6">
              <a href={CTA_URL} target="_blank" rel="noopener noreferrer" data-testid="final-cta-tp-btn"
                className="inline-flex items-center justify-center gap-3 bg-brand-cta text-white font-bold px-10 py-5 rounded-full hover:brightness-125 transition-all duration-300 shadow-[0_0_40px_rgba(202,110,35,0.4)] text-lg w-full lg:w-auto">
                Agendar diagnóstico gratuito <ArrowRight size={20} />
              </a>
              <p className="text-brand-subtle text-xs text-center lg:text-left">
                Sem spam. Seus dados ficam protegidos (LGPD).
              </p>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

/* ─── PÁGINA PRINCIPAL ─── */

export default function LandingTrafegoPago() {
  return (
    <div data-testid="landing-trafego-pago" className="bg-[#160907]">
      <HeroSection />
      <MarketSection />
      <WhyInvestSection />
      <ScopeSection />
      <PackagesSection />
      <CompareSection />
      <ResultsSection />
      <FinalCTASection />
    </div>
  );
}
