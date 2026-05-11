import { Link } from 'react-router-dom';
import SectionReveal, { StaggerContainer, StaggerItem } from '@/components/SectionReveal';
import CountUp from 'react-countup';
import {
  TrendingUp, FileText, Video, Layout, Award, Search,
  CheckCircle, ArrowRight, Star, MessageCircle,
  Target, Calendar, BarChart2, Instagram
} from 'lucide-react';

/* ─── Helpers ─── */
const WA = (msg) =>
  `https://wa.me/5511999999999?text=${encodeURIComponent(msg)}`;

const GradientText = ({ children, className = '' }) => (
  <span
    className={className}
    style={{
      backgroundImage: 'linear-gradient(135deg,#8C3A11 0%,#A34E1B 45%,#CA6E23 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    }}
  >
    {children}
  </span>
);

/* ─── DADOS ─── */

const BENCHMARKS = [
  { label: 'Marcas com presença ativa nas redes', sub: 'Crescimento médio de receita', value: 'até 2.3x' },
  { label: 'Engajamento com conteúdo estratégico vs. genérico', sub: 'Sprout Social 2025', value: '+5.7x' },
  { label: 'Empresas que terceirizam social media', sub: 'Crescimento no Brasil em 2025', value: '+34%' },
  { label: 'Conteúdo em vídeo curto (Reels/Shorts)', sub: 'Maior ROI orgânico — HubSpot 2025', value: '#1' },
];

const KPIS = [
  { value: 4.9, suffix: ' bi', label: 'Usuários ativos em redes sociais no mundo em 2025', src: 'DataReportal 2025', decimals: 1 },
  { value: 20.4, suffix: '%', prefix: '+', label: 'Crescimento de investimento em social media no Brasil', src: 'IAB Brasil 2025', decimals: 1 },
  { value: 5.7, suffix: 'x', label: 'Mais engajamento com conteúdo estratégico vs. genérico', src: 'Sprout Social 2025', decimals: 1 },
  { value: 82, suffix: '%', label: 'Dos consumidores pesquisam marcas no Instagram antes de comprar', src: 'Opinion Box 2025', decimals: 0 },
];

const DIFERENCIAIS = [
  {
    icon: Target,
    title: 'Estratégia sob medida',
    desc: 'Nada de calendário genérico. Criamos uma estratégia personalizada baseada nos seus objetivos de negócio, público-alvo e posicionamento — cada post tem um propósito claro.',
  },
  {
    icon: TrendingUp,
    title: 'Conteúdo que converte',
    desc: 'Produção completa de conteúdo — copy, design, direção criativa e edição de vídeo. Cada peça é pensada para gerar engajamento, autoridade e conversão real.',
  },
  {
    icon: Calendar,
    title: 'Consistência e presença',
    desc: 'Planejamento mensal com calendário editorial, reuniões de alinhamento e otimização contínua. Seu perfil nunca fica parado ou sem direção.',
  },
  {
    icon: BarChart2,
    title: 'Dados e relatórios estratégicos',
    desc: 'Análise mensal de métricas com leitura estratégica dos resultados. Você sabe exatamente o que está funcionando e onde ajustar para crescer.',
  },
];

const ENTREGAVEIS = [
  'Estratégia completa do perfil',
  'Planejamento mensal com calendário editorial',
  'Produção de conteúdo (copy + design + vídeo)',
  'Definição de linha editorial',
  'Direção criativa e estética visual',
  'Edição de Reels e vídeos curtos',
  'Relatório mensal de performance',
  'Reunião de alinhamento semanal/quinzenal',
  'Otimização contínua (bio, destaques, estrutura)',
  'Suporte via WhatsApp dedicado',
];

const SERVICOS = [
  {
    id: 'gestao-estrategica',
    icon: TrendingUp,
    name: 'Gestão Estratégica Completa',
    tag: 'Social Media',
    price: 'a partir de R$ 2.700',
    period: '/mês',
    priceNote: 'Valor pode variar de acordo com complexidade',
    featured: true,
    badge: 'Mais completo',
    items: [
      'Construção da estratégia completa do perfil',
      'Planejamento mensal com calendário alinhado aos objetivos',
      'Definição de linha editorial funcional',
      'Produção completa: copy + direção criativa + design + edição de vídeos',
      'Reuniões de alinhamento semanais ou quinzenais',
      'Análise de métricas e relatório com leitura estratégica',
      'Otimização contínua do perfil (bio, destaques, estrutura)',
    ],
    waMsg: 'Olá! Tenho interesse na Gestão Estratégica Completa (Social Media). Pode me contar mais?',
    cta: 'Quero saber mais',
  },
  {
    id: 'linha-editorial',
    icon: FileText,
    name: 'Criação de Linha Editorial',
    tag: 'Conteúdo',
    price: 'a partir de R$ 1.500',
    period: '',
    priceNote: 'Valor pode variar de acordo com complexidade',
    featured: false,
    items: [
      'Pesquisa de mercado e concorrência',
      'Análise de público e comportamento',
      'Quadro no Trello com copies para o mês',
      'Sugestões de roteiro, cenários, formatos e legendas',
      'Entrega única — postagem feita pelo cliente',
    ],
    waMsg: 'Olá! Tenho interesse na Criação de Linha Editorial. Pode me dar mais detalhes?',
    cta: 'Quero saber mais',
  },
  {
    id: 'captacao',
    icon: Video,
    name: 'Captação de Conteúdo',
    tag: 'Produção',
    price: 'R$ 280',
    period: '/hora',
    priceNote: null,
    featured: false,
    items: [
      'Estruturação e planejamento de roteiros',
      'Orientação de enquadramento, cenário e estética',
      'Definição de formatos (Reels, Stories etc.)',
      'Gravação no local, edição e envio em alta qualidade',
      'Se já tiver social media, conteúdo é planejado e postado',
    ],
    waMsg: 'Olá! Tenho interesse no serviço de Captação de Conteúdo. Pode me dar mais detalhes?',
    cta: 'Quero saber mais',
  },
  {
    id: 'posts-avulsos',
    icon: Layout,
    name: 'Posts Avulsos',
    tag: 'Design',
    price: 'Sob consulta',
    period: '',
    priceNote: 'Valor por unidade',
    featured: false,
    items: [
      'Layouts estratégicos a partir da copy enviada',
      'Aplicação de identidade visual completa',
      'Adaptação para diferentes formatos',
      'Formatos: feed, Stories, apresentações, e-book',
      'Entrega via Drive — postagem feita pelo cliente',
    ],
    waMsg: 'Olá! Tenho interesse em Posts Avulsos. Pode me passar as opções e valores?',
    cta: 'Quero saber mais',
  },
  {
    id: 'midia-kit',
    icon: Award,
    name: 'Confecção de Mídia Kit',
    tag: 'Influenciadores',
    price: 'a partir de R$ 1.800',
    period: '',
    priceNote: 'Valor pode variar de acordo com complexidade',
    featured: false,
    items: [
      'Design alinhado à identidade visual do influenciador',
      'Estruturação estratégica das informações',
      'Posicionamento, público e proposta de valor',
      'Organização dos dados para apresentação profissional',
    ],
    waMsg: 'Olá! Tenho interesse na Confecção de Mídia Kit. Pode me dar mais detalhes?',
    cta: 'Quero saber mais',
  },
  {
    id: 'analise-perfil',
    icon: Search,
    name: 'Análise Estratégica de Perfil',
    tag: 'Diagnóstico',
    price: 'R$ 750',
    period: '',
    priceNote: null,
    featured: false,
    items: [
      'Análise completa do perfil (posicionamento e comunicação)',
      'Pontos de melhoria em conteúdo, estética e estrutura',
      'Avaliação da bio, destaques e organização do perfil',
      'Leitura do conteúdo atual (o que funciona e por quê)',
      'Sugestões práticas via PDF + meeting de 1 hora',
    ],
    waMsg: 'Olá! Tenho interesse na Análise Estratégica de Perfil. Como funciona?',
    cta: 'Quero saber mais',
  },
];

/* ─── SEÇÕES ─── */

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20" style={{ background: '#160907' }}>
      <div className="absolute inset-0 opacity-20"
        style={{ backgroundImage: 'radial-gradient(ellipse 65% 50% at 65% 30%, #A34E1B 0%, transparent 65%)' }} />
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(135deg,#8C3A11 0%,#A34E1B 45%,#CA6E23 100%)', opacity: 0.6 }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        {/* Esquerda */}
        <SectionReveal>
          <h1 className="font-sora font-bold text-4xl md:text-5xl lg:text-6xl leading-tight" style={{ color: '#FAF7F4' }}>
            Gestão de redes sociais que gera{' '}
            <GradientText>resultado real.</GradientText>
          </h1>
          <p className="text-base md:text-lg mt-6 leading-relaxed max-w-xl" style={{ color: '#E7DED7' }}>
            Estratégia, criação de conteúdo e gestão completa do seu Instagram e redes sociais com dados, inteligência criativa e foco em crescimento para o seu negócio se posicionar e vender.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a href="#servicos"
              data-testid="hero-cta-redes-primary"
              className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-full hover:brightness-125 transition-all duration-300 text-base"
              style={{ background: '#CA6E23', color: '#FAF7F4', boxShadow: '0 0 30px rgba(202,110,35,0.35)' }}>
              Ver Serviços <ArrowRight size={18} />
            </a>
            <a href={WA('Olá! Gostaria de falar com um especialista sobre gestão de redes sociais da pollo.ag.')}
              target="_blank" rel="noopener noreferrer"
              data-testid="hero-cta-redes-secondary"
              className="inline-flex items-center justify-center gap-2 font-medium px-8 py-4 rounded-full border transition-all duration-300 hover:bg-[#3A231D]/30"
              style={{ borderColor: '#3A231D', color: '#E7DED7' }}>
              <MessageCircle size={16} /> Falar com especialista
            </a>
          </div>
        </SectionReveal>

        {/* Direita — Benchmark card */}
        <SectionReveal delay={0.2} direction="right" className="hidden lg:block">
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl blur-2xl"
              style={{ background: 'radial-gradient(ellipse at center, rgba(163,78,27,0.15), transparent 70%)' }} />
            <div className="relative rounded-xl p-6 space-y-4" style={{ background: '#1E0D0A', border: '1px solid #3A231D' }}>
              <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#B9ABA4' }}>
                Benchmark de Mercado 2026
              </p>
              {BENCHMARKS.map((b) => (
                <div key={b.label} className="flex items-center justify-between gap-4 pb-4 last:pb-0"
                  style={{ borderBottom: '1px solid #3A231D' }}>
                  <div>
                    <p className="text-sm font-medium" style={{ color: '#FAF7F4' }}>{b.label}</p>
                    <p className="text-xs mt-0.5" style={{ color: '#B9ABA4' }}>{b.sub}</p>
                  </div>
                  <span className="font-sora font-bold text-xl flex-shrink-0"
                    style={{ backgroundImage: 'linear-gradient(135deg,#8C3A11 0%,#A34E1B 45%,#CA6E23 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {b.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

function KPISection() {
  return (
    <section className="py-20" style={{ background: '#24110E' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionReveal className="text-center mb-12">
          <h2 className="font-sora font-bold text-3xl md:text-4xl leading-tight" style={{ color: '#FAF7F4' }}>
            O mercado de social media não para de crescer.
          </h2>
          <p className="text-base mt-4 max-w-2xl mx-auto leading-relaxed" style={{ color: '#E7DED7' }}>
            Empresas que investem em gestão profissional de redes sociais crescem mais rápido e vendem mais.{' '}
            <strong style={{ color: '#FAF7F4' }}>Quem não investe em presença digital está ficando para trás.</strong>
          </p>
        </SectionReveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {KPIS.map((k, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <div className="rounded-xl p-6 text-center transition-all duration-300 hover:border-[#CA6E23]/40"
                style={{ background: '#1E0D0A', border: '1px solid #3A231D' }}>
                <div className="font-sora font-bold text-4xl" style={{ color: '#CA6E23' }}>
                  {k.prefix && <span>{k.prefix}</span>}
                  <CountUp start={0} end={k.value} suffix={k.suffix} decimals={k.decimals}
                    enableScrollSpy scrollSpyOnce duration={2} />
                </div>
                <p className="text-xs mt-3 leading-snug" style={{ color: '#E7DED7' }}>{k.label}</p>
                <p className="text-xs mt-1 italic" style={{ color: '#B9ABA4' }}>{k.src}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function DiferenciaisSection() {
  return (
    <section className="py-24" style={{ background: '#160907' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionReveal className="text-center mb-14">
          <h2 className="font-sora font-bold text-3xl md:text-4xl leading-tight max-w-3xl mx-auto" style={{ color: '#FAF7F4' }}>
            Gestão de redes sociais é o caminho mais rápido para{' '}
            <GradientText>construir autoridade e vender.</GradientText>
          </h2>
        </SectionReveal>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIFERENCIAIS.map((d, i) => {
            const Icon = d.icon;
            return (
              <StaggerItem key={i}>
                <div className="rounded-xl p-6 h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-[#CA6E23]/30"
                  style={{ background: '#1E0D0A', border: '1px solid #3A231D' }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
                    style={{ background: '#612D16' }}>
                    <Icon size={22} style={{ color: '#CA6E23' }} strokeWidth={1.8} />
                  </div>
                  <h3 className="font-sora font-bold text-lg mb-3" style={{ color: '#FAF7F4' }}>{d.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#E7DED7' }}>{d.desc}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

function EntregaveisSection() {
  return (
    <section className="py-24" style={{ background: '#1E0D0A' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Esquerda */}
        <SectionReveal>
          <h2 className="font-sora font-bold text-3xl md:text-4xl leading-tight" style={{ color: '#FAF7F4' }}>
            O que a{' '}
            <span style={{ color: '#CA6E23' }}>pollo.ag</span>{' '}
            entrega
          </h2>
          <p className="text-base mt-5 leading-relaxed" style={{ color: '#E7DED7' }}>
            Não vendemos apenas postagens bonitas. Entregamos uma operação completa de social media com foco em posicionamento, crescimento e vendas.
          </p>
          <a href="#servicos"
            className="mt-8 inline-flex items-center gap-2 font-bold px-8 py-4 rounded-full hover:brightness-125 transition-all duration-300"
            style={{ background: '#CA6E23', color: '#FAF7F4', boxShadow: '0 0 24px rgba(202,110,35,0.3)' }}>
            Ver serviços <ArrowRight size={16} />
          </a>
        </SectionReveal>

        {/* Direita — Grid entregáveis */}
        <SectionReveal delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {ENTREGAVEIS.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl px-4 py-3 transition-colors hover:border-[#CA6E23]/30"
                style={{ background: '#160907', border: '1px solid #3A231D' }}>
                <CheckCircle size={16} style={{ color: '#CA6E23', flexShrink: 0 }} />
                <span className="text-sm" style={{ color: '#FAF7F4' }}>{item}</span>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

function ServicoCard({ s }) {
  const Icon = s.icon;
  return (
    <div className={`relative flex flex-col h-full rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 ${
      s.featured ? '' : 'hover:border-[#A34E1B]/40'
    }`}
      style={{
        background: s.featured ? '#24110E' : '#1E0D0A',
        border: s.featured ? '2px solid #A34E1B' : '1px solid #3A231D',
        boxShadow: s.featured ? '0 0 40px rgba(163,78,27,0.18)' : 'none',
      }}>
      {s.featured && (
        <div className="absolute -top-3.5 left-5">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
            style={{ background: 'linear-gradient(135deg,#8C3A11 0%,#A34E1B 45%,#CA6E23 100%)', color: '#FAF7F4' }}>
            <Star size={10} fill="currentColor" /> {s.badge}
          </span>
        </div>
      )}

      <div className="flex items-start gap-4 mb-5" style={{ marginTop: s.featured ? '8px' : '0' }}>
        <div className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: '#612D16' }}>
          <Icon size={20} style={{ color: '#CA6E23' }} strokeWidth={1.8} />
        </div>
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: '#B9ABA4' }}>
            {s.tag}
          </span>
          <h3 className="font-sora font-bold text-lg leading-snug mt-0.5" style={{ color: '#FAF7F4' }}>
            {s.name}
          </h3>
        </div>
      </div>

      <ul className="space-y-2 flex-1 mb-6">
        {s.items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm" style={{ color: '#E7DED7' }}>
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#A34E1B' }} />
            {item}
          </li>
        ))}
      </ul>

      <div className="pt-4 mb-5" style={{ borderTop: '1px solid #3A231D' }}>
        <div className="flex items-baseline gap-1">
          <span className="font-sora font-bold text-2xl" style={{ color: '#CA6E23' }}>{s.price}</span>
          {s.period && <span className="text-xs font-medium" style={{ color: '#B9ABA4' }}>{s.period}</span>}
        </div>
        {s.priceNote && <p className="text-xs italic mt-1" style={{ color: '#B9ABA4' }}>{s.priceNote}</p>}
      </div>

      <a href={WA(s.waMsg)} target="_blank" rel="noopener noreferrer"
        data-testid={`cta-redes-${s.id}`}
        className="inline-flex items-center justify-center gap-2 font-semibold text-sm py-3.5 px-6 rounded-full transition-all duration-300"
        style={s.featured
          ? { background: 'linear-gradient(135deg,#8C3A11 0%,#A34E1B 45%,#CA6E23 100%)', color: '#FAF7F4' }
          : { border: '1px solid #3A231D', color: '#E7DED7', background: 'transparent' }
        }
        onMouseEnter={(e) => { if (!s.featured) e.currentTarget.style.borderColor = 'rgba(202,110,35,0.5)'; }}
        onMouseLeave={(e) => { if (!s.featured) e.currentTarget.style.borderColor = '#3A231D'; }}
      >
        <MessageCircle size={15} /> {s.cta}
      </a>
    </div>
  );
}

function ServicosSection() {
  return (
    <section id="servicos" className="py-24" style={{ background: '#160907' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionReveal className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest border px-3 py-1.5 rounded-full mb-6"
            style={{ color: '#CA6E23', borderColor: 'rgba(202,110,35,0.3)', background: 'rgba(202,110,35,0.08)' }}>
            Soluções
          </div>
          <h2 className="font-sora font-bold text-3xl md:text-4xl leading-tight max-w-3xl mx-auto" style={{ color: '#FAF7F4' }}>
            Tudo que seu negócio precisa para{' '}
            <GradientText>crescer nas redes</GradientText>
          </h2>
          <p className="text-base mt-4 max-w-2xl mx-auto leading-relaxed" style={{ color: '#E7DED7' }}>
            Da estratégia à execução. Escolha o serviço ideal para o momento do seu negócio e comece a transformar presença digital em resultado.
          </p>
        </SectionReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {SERVICOS.map((s) => (
            <StaggerItem key={s.id} className="h-full">
              <ServicoCard s={s} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <SectionReveal className="mt-10 text-center">
          <p className="text-sm" style={{ color: '#B9ABA4' }}>
            Não sabe qual serviço é ideal para você?{' '}
            <a href={WA('Olá! Gostaria de entender qual serviço da pollo.ag faz mais sentido para mim agora.')}
              target="_blank" rel="noopener noreferrer"
              className="font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity"
              style={{ color: '#CA6E23' }}>
              Fale com um especialista
            </a>
            {' '}e descubra o caminho certo.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: '#1E0D0A' }}>
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(135deg,#8C3A11 0%,#A34E1B 45%,#CA6E23 100%)', opacity: 0.7 }} />
      <div className="relative max-w-3xl mx-auto px-6 md:px-12">
        <SectionReveal>
          <div className="rounded-xl p-10 md:p-14 text-center"
            style={{ background: '#160907', border: '1px solid #3A231D', borderRadius: '12px' }}>
            <h2 className="font-sora font-bold text-3xl md:text-4xl leading-tight mb-5" style={{ color: '#FAF7F4' }}>
              Pronto para transformar suas redes sociais em um{' '}
              <GradientText>canal de vendas?</GradientText>
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: '#E7DED7' }}>
              Não sabe qual serviço é ideal para você? Vamos conversar e encontrar a melhor solução para o momento do seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WA('Olá! Quero entender melhor os serviços da pollo.ag e qual faz sentido para minha empresa.')}
                target="_blank" rel="noopener noreferrer"
                data-testid="final-cta-redes-primary"
                className="inline-flex items-center justify-center gap-2 font-bold px-10 py-5 rounded-full hover:brightness-110 transition-all duration-300 text-base"
                style={{ background: 'linear-gradient(135deg,#8C3A11 0%,#A34E1B 45%,#CA6E23 100%)', color: '#FAF7F4', boxShadow: '0 0 40px rgba(202,110,35,0.3)' }}>
                <MessageCircle size={18} /> Falar com a Pollo
              </a>
              <a href="#servicos"
                data-testid="final-cta-redes-secondary"
                className="inline-flex items-center justify-center gap-2 font-medium px-10 py-5 rounded-full border transition-all duration-300 text-base hover:bg-[#3A231D]/40"
                style={{ borderColor: '#3A231D', color: '#E7DED7' }}>
                Ver todos os serviços <ArrowRight size={16} />
              </a>
            </div>
            <p className="text-xs mt-5" style={{ color: '#B9ABA4' }}>
              Sem spam. Seus dados ficam protegidos (LGPD).
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

/* ─── EXPORT ─── */
export default function LandingRedes() {
  return (
    <div data-testid="landing-redes-sociais" style={{ background: '#160907' }}>
      <HeroSection />
      <KPISection />
      <DiferenciaisSection />
      <EntregaveisSection />
      <ServicosSection />
      <FinalCTASection />
    </div>
  );
}
