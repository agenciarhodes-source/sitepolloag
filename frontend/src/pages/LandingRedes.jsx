import { Link } from 'react-router-dom';
import SectionReveal, { StaggerContainer, StaggerItem } from '@/components/SectionReveal';
import {
  TrendingUp, FileText, Video, Layout, Award, Search,
  CheckCircle, ArrowRight, Star, MessageCircle
} from 'lucide-react';

/* ─── WhatsApp base ─── */
const WA = (msg) =>
  `https://wa.me/5511999999999?text=${encodeURIComponent(msg)}`;

/* ─── SERVIÇOS ─── */
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
    waMsg: 'Olá! Tenho interesse na Gestão Estratégica Completa (Social Media). Pode me contar mais sobre o serviço?',
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
      'Quadro no Trello com copies para o mês e sugestões',
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
      'Estruturação e planejamento de roteiros e conteúdos',
      'Orientação de enquadramento, cenário e estética',
      'Definição de formatos (Reels, Stories etc.)',
      'Gravação no local, edição e envio em alta qualidade',
      'Se já tiver social media, o conteúdo é planejado e postado',
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
      'Aplicação de identidade visual (cores, tipografia e consistência)',
      'Adaptação para diferentes formatos quando necessário',
      'Formatos: feed, Stories, apresentações, capas, e-book',
      'Entrega via Drive — postagem e legenda feitas pelo cliente',
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
      'Organização dos dados para apresentação profissional e clara',
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
      'Análise completa do perfil (posicionamento, comunicação e clareza)',
      'Identificação de pontos de melhoria em conteúdo, estética e estrutura',
      'Avaliação da bio, destaques e organização geral do perfil',
      'Leitura do conteúdo atual (o que funciona e por quê)',
      'Sugestões práticas via PDF + meeting de 1 hora',
    ],
    waMsg: 'Olá! Tenho interesse na Análise Estratégica de Perfil. Como funciona?',
    cta: 'Quero saber mais',
  },
];

/* ─── CARD ─── */
function ServicoCard({ s }) {
  const Icon = s.icon;
  return (
    <div className={`relative flex flex-col h-full rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 ${
      s.featured
        ? 'bg-[#24110E] border-2 border-[#A34E1B] shadow-[0_0_40px_rgba(163,78,27,0.18)]'
        : 'bg-[#1E0D0A] border border-[#3A231D] hover:border-[#A34E1B]/40'
    }`}>

      {/* Badge featured */}
      {s.featured && (
        <div className="absolute -top-3.5 left-5">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
            style={{ background: 'linear-gradient(135deg,#8C3A11 0%,#A34E1B 45%,#CA6E23 100%)', color: '#FAF7F4' }}>
            <Star size={10} fill="currentColor" /> {s.badge}
          </span>
        </div>
      )}

      {/* Header */}
      <div className="flex items-start gap-4 mb-5" style={{ marginTop: s.featured ? '8px' : '0' }}>
        <div className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: '#612D16' }}>
          <Icon size={20} style={{ color: '#CA6E23' }} strokeWidth={1.8} />
        </div>
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: '#B9ABA4' }}>
            {s.tag}
          </span>
          <h3 className="font-sora font-bold text-lg leading-tight mt-0.5" style={{ color: '#FAF7F4' }}>
            {s.name}
          </h3>
        </div>
      </div>

      {/* Entregáveis */}
      <ul className="space-y-2 flex-1 mb-6">
        {s.items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm" style={{ color: '#E7DED7' }}>
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#A34E1B' }} />
            {item}
          </li>
        ))}
      </ul>

      {/* Preço */}
      <div className="border-t pt-4 mb-5" style={{ borderColor: '#3A231D' }}>
        <div className="flex items-baseline gap-1">
          <span className="font-sora font-bold text-2xl" style={{ color: '#CA6E23' }}>
            {s.price}
          </span>
          {s.period && (
            <span className="text-xs font-medium" style={{ color: '#B9ABA4' }}>{s.period}</span>
          )}
        </div>
        {s.priceNote && (
          <p className="text-xs italic mt-1" style={{ color: '#B9ABA4' }}>{s.priceNote}</p>
        )}
      </div>

      {/* CTA */}
      <a
        href={WA(s.waMsg)}
        target="_blank"
        rel="noopener noreferrer"
        data-testid={`cta-redes-${s.id}`}
        className={`inline-flex items-center justify-center gap-2 font-semibold text-sm py-3.5 px-6 rounded-full transition-all duration-300 hover:brightness-110 ${
          s.featured
            ? 'text-[#160907] hover:opacity-90'
            : 'border hover:bg-[#CA6E23]/10 hover:border-[#CA6E23]/60'
        }`}
        style={s.featured
          ? { background: 'linear-gradient(135deg,#8C3A11 0%,#A34E1B 45%,#CA6E23 100%)', color: '#FAF7F4' }
          : { borderColor: '#3A231D', color: '#E7DED7' }
        }
      >
        <MessageCircle size={15} />
        {s.cta}
      </a>
    </div>
  );
}

/* ─── HERO ─── */
function HeroSection() {
  return (
    <section className="pt-28 pb-16" style={{ background: '#160907' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <SectionReveal>
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest border px-3 py-1.5 rounded-full mb-6"
            style={{ color: '#CA6E23', borderColor: 'rgba(202,110,35,0.3)', background: 'rgba(202,110,35,0.08)' }}>
            Soluções
          </div>
          <h1 className="font-sora font-bold text-4xl md:text-5xl lg:text-6xl leading-tight max-w-4xl mx-auto"
            style={{ color: '#FAF7F4' }}>
            Tudo que seu negócio precisa para{' '}
            <span style={{ backgroundImage: 'linear-gradient(135deg,#8C3A11 0%,#A34E1B 45%,#CA6E23 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              crescer nas redes
            </span>
          </h1>
          <p className="text-base md:text-lg mt-6 max-w-2xl mx-auto leading-relaxed" style={{ color: '#E7DED7' }}>
            Da estratégia à execução. Escolha o serviço ideal para o momento do seu negócio e comece a transformar presença digital em resultado.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}

/* ─── GRID DE SERVIÇOS ─── */
function ServicosSection() {
  return (
    <section className="py-16 pb-28" style={{ background: '#160907' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {SERVICOS.map((s) => (
            <StaggerItem key={s.id} className="h-full">
              <ServicoCard s={s} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Nota de rodapé */}
        <SectionReveal className="mt-12 text-center">
          <p className="text-sm" style={{ color: '#B9ABA4' }}>
            Não sabe qual serviço é ideal para o seu momento?{' '}
            <a
              href={WA('Olá! Gostaria de entender qual serviço da pollo.ag faz mais sentido para mim agora.')}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity"
              style={{ color: '#CA6E23' }}
            >
              Fale com um especialista
            </a>
            {' '}e descubra o caminho certo.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}

/* ─── CTA FINAL ─── */
function FinalCTASection() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: '#1E0D0A' }}>
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(135deg,#8C3A11 0%,#A34E1B 45%,#CA6E23 100%)', opacity: 0.6 }} />
      <div className="relative max-w-3xl mx-auto px-6 md:px-12 text-center">
        <SectionReveal>
          <h2 className="font-sora font-bold text-3xl md:text-4xl leading-tight mb-4" style={{ color: '#FAF7F4' }}>
            Pronto para transformar sua presença digital?
          </h2>
          <p className="text-base mb-10 leading-relaxed" style={{ color: '#E7DED7' }}>
            Cada serviço é adaptado ao momento e objetivo do seu negócio. Sem contrato longo — começamos pelo que faz mais sentido agora.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA('Olá! Quero entender melhor os serviços da pollo.ag e qual faz sentido para mim.')}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="final-cta-redes-primary"
              className="inline-flex items-center justify-center gap-2 font-bold px-10 py-5 rounded-full hover:brightness-110 transition-all duration-300 text-base"
              style={{ background: 'linear-gradient(135deg,#8C3A11 0%,#A34E1B 45%,#CA6E23 100%)', color: '#FAF7F4', boxShadow: '0 0 40px rgba(202,110,35,0.3)' }}
            >
              <MessageCircle size={18} /> Falar com especialista
            </a>
            <Link
              to="/diagnostico"
              data-testid="final-cta-redes-secondary"
              className="inline-flex items-center justify-center gap-2 font-medium px-10 py-5 rounded-full border transition-all duration-300 text-base hover:bg-[#3A231D]/40"
              style={{ borderColor: '#3A231D', color: '#E7DED7' }}
            >
              Agendar diagnóstico <ArrowRight size={16} />
            </Link>
          </div>
          <p className="text-xs mt-5" style={{ color: '#B9ABA4' }}>
            Sem spam. Seus dados ficam protegidos (LGPD).
          </p>
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
      <ServicosSection />
      <FinalCTASection />
    </div>
  );
}
