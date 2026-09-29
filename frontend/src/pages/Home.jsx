import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import CountUp from '@/components/CountUp';
import SectionReveal, { StaggerContainer, StaggerItem } from '@/components/SectionReveal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ArrowRight, Zap, TrendingUp, Database, CheckCircle, ChevronRight, MessageSquare } from 'lucide-react';
import { CTA_URL } from '@/seo/config';

const PILLARS = [
  {
    icon: Zap,
    title: 'IA-first & Automações',
    desc: 'Reduza retrabalho e tempo de resposta com automação inteligente e governança humana no centro.',
    to: '/ia-aplicada',
  },
  {
    icon: TrendingUp,
    title: 'Growth & Performance',
    desc: 'Aquisição + CRO com rotina de teste semanal. Tráfego com ROI explicável, não campanhas no escuro.',
    to: '/trafego-pago',
  },
  {
    icon: Database,
    title: 'CRM & Base',
    desc: 'Ativação, retenção e reativação para elevar LTV e reduzir churn. CRM como motor de receita.',
    to: '/crm',
  },
];

const METHOD_STEPS = [
  { num: '01', title: 'Diagnóstico', desc: 'Tracking, baseline e mapeamento de gargalos. Onde está o atrito do seu funil?' },
  { num: '02', title: 'Arquitetura', desc: 'Fluxos, dados, jornadas e governança. Blueprint completo da operação.' },
  { num: '03', title: 'Implementação', desc: 'Pilotos, automações, páginas, CRM. Quick wins em 2–4 semanas.' },
  { num: '04', title: 'Otimização', desc: 'Cadência semanal + KPIs + playbooks. Previsibilidade em 60–90 dias.' },
];

const KPIS = [
  { value: 32, suffix: '%', label: 'Aumento de conversão', sublabel: '' },
  { value: 18, suffix: '%', label: 'Redução de churn', sublabel: '' },
  { value: 22, suffix: '%', label: 'Crescimento de LTV', sublabel: '' },
];

const DELIVERABLES = [
  'Mapa completo do funil com gargalos identificados',
  'Blueprint de automação e arquitetura de processos',
  'Quick wins com prioridade de impacto',
  'Roadmap 30/60/90 dias',
  'Proposta de implementação com escopo e KPIs',
];

const FAQ_ITEMS = [
  { q: 'Quanto custa?', a: 'O diagnóstico inicial tem um valor fixo. A partir dos resultados, desenhamos uma proposta de implementação com escopo e investimento alinhados à sua realidade. Fale com a gente para receber os detalhes.' },
  { q: 'Em quanto tempo vejo resultado?', a: 'Quick wins chegam em 2–4 semanas. Previsibilidade consistente com KPIs estáveis: em 60–90 dias. Cada etapa tem entregáveis claros para que você acompanhe o progresso.' },
  { q: 'Vocês executam ou só consultam?', a: 'Os dois. Diagnóstico + execução com rotina + handoff estruturado. Não deixamos um relatório na sua mesa: implementamos, medimos e otimizamos ao longo do projeto.' },
  { q: 'Preciso trocar de ferramentas?', a: 'Em geral, não. Integramos e ajustamos o stack atual. Se houver necessidade de migração, isso aparece no diagnóstico com justificativa e custo-benefício claro.' },
  { q: 'Como medimos os resultados?', a: 'Com tracking configurado desde o início. KPIs acordados antes de começar. Relatório semanal e reunião de cadência para ajustes. Métricas que importam: conversão, LTV, churn, CAC.' },
  { q: 'Como garantem LGPD?', a: 'Governança desde o início: acessos mínimos, logs de auditoria, políticas claras de uso de dados. Só acessamos o que é necessário para o projeto.' },
  { q: 'E meu time, como fica?', a: 'IA reduz o repetitivo. O time ganha foco e qualidade. Trabalhamos em conjunto com seu time, transferindo conhecimento e criando playbooks para operação continuada.' },
  { q: 'Como começamos?', a: 'Call de 30 min para alinhamento. Em seguida, diagnóstico de 7–10 dias. Depois, blueprint e proposta de implementação. Sem burocracia, sem compromisso imediato.' },
];

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1764258559965-6de87677a260?crop=entropy&cs=srgb&fm=jpg&q=85)`,
          y: bgY,
          scale: 1.1,
        }}
      />
      <div className="absolute inset-0 bg-[#160907]/85" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#160907]" />
      <div className="absolute top-0 left-0 right-0 h-px gradient-bg opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32 pt-40">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <h1 className="font-sora text-5xl md:text-6xl lg:text-7xl font-bold text-brand-text leading-[1.1] tracking-tight">
            Crescimento com{' '}
            <span className="gradient-text">previsibilidade</span>{' '}
            usando IA-first e método.
          </h1>

          <p className="text-brand-muted text-lg md:text-xl mt-6 leading-relaxed max-w-2xl">
            Diagnóstico → blueprint → implementação → otimização contínua, com humano no centro.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mt-10"
          >
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" data-testid="hero-cta-primary"
              className="inline-flex items-center justify-center gap-2 bg-brand-cta text-white font-semibold px-8 py-4 rounded-full hover:brightness-125 transition-all duration-300 shadow-[0_0_30px_rgba(202,110,35,0.3)] text-base">
              Quero meu diagnóstico <ArrowRight size={18} />
            </a>
            <Link
              to="/metodo"
              data-testid="hero-cta-secondary"
              className="inline-flex items-center justify-center gap-2 border border-[#3A231D] text-brand-muted hover:bg-[#3A231D]/30 hover:text-brand-text font-medium px-8 py-4 rounded-full transition-all duration-300 text-base"
            >
              Ver método
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-brand-subtle">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-brand-cta to-transparent" />
      </motion.div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="py-24 bg-brand-surface1">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SectionReveal>
            <h2 className="font-sora text-3xl md:text-4xl font-semibold text-brand-text leading-tight">
              Crescer sem processo custa caro.
            </h2>
            <p className="text-brand-muted text-base mt-4 leading-relaxed">
              CAC sobe, conversão oscila, base fica parada e churn vira normal. Times sobrecarregados sem clareza sobre o que funciona.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.2} direction="right">
            <div className="bg-[#160907] border border-[#3A231D] rounded-2xl p-8">
              <p className="text-brand-muted text-lg leading-relaxed italic">
                "A pergunta certa não é <em className="text-brand-cta not-italic">como crescer mais rápido</em> — é <em className="text-brand-text not-italic font-medium">onde está o atrito do seu funil e da sua operação?</em>"
              </p>
              <div className="mt-6 pt-6 border-t border-[#3A231D] grid grid-cols-2 gap-4">
                {[
                  { label: 'CAC subindo', icon: '↑' },
                  { label: 'Conversão oscilando', icon: '~' },
                  { label: 'Base parada', icon: '■' },
                  { label: 'Churn sem controle', icon: '↓' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <span className="text-[#A34E1B] font-bold">{item.icon}</span>
                    <span className="text-brand-subtle text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

function PilarsSection() {
  return (
    <section id="solucoes" className="py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionReveal className="text-center mb-16">
          <h2 className="font-sora text-3xl md:text-4xl font-semibold text-brand-text">Três pilares, um sistema.</h2>
          <p className="text-brand-subtle text-base mt-3 max-w-xl mx-auto">
            Aquisição, conversão e retenção integradas — não canais isolados.
          </p>
        </SectionReveal>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <StaggerItem key={pillar.title}>
                <Link
                  to={pillar.to}
                  data-testid={`pillar-${pillar.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group block bg-[#1E0D0A] border border-[#3A231D] rounded-2xl p-8 hover:border-[#CA6E23]/50 transition-all duration-300 hover:-translate-y-1 h-full"
                >
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-6">
                    <Icon size={22} className="text-[#160907]" />
                  </div>
                  <h3 className="font-sora text-xl font-semibold text-brand-text mb-3">{pillar.title}</h3>
                  <p className="text-brand-subtle text-sm leading-relaxed">{pillar.desc}</p>
                  <div className="flex items-center gap-2 mt-6 text-brand-cta text-sm font-medium group-hover:gap-3 transition-all">
                    Ver solução <ChevronRight size={14} />
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
        {/* Destaque WhatsApp IA */}
        <SectionReveal className="mt-6">
          <Link
            to="/whatsapp-ia"
            data-testid="pillar-whatsapp-ia"
            className="group flex flex-col md:flex-row items-center gap-6 bg-gradient-to-r from-[#1E0D0A] to-[#24110E] border border-[#CA6E23]/40 rounded-2xl p-8 hover:border-[#CA6E23]/80 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
              <MessageSquare size={22} className="text-[#160907]" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-brand-cta uppercase tracking-widest mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cta animate-pulse" /> Novo
              </div>
              <h3 className="font-sora text-xl font-semibold text-brand-text">WhatsApp + IA: máquina de vendas</h3>
              <p className="text-brand-subtle text-sm mt-1">Captação, qualificação, score, CRM e Meta — tudo integrado em uma operação comercial com multiagentes.</p>
            </div>
            <div className="flex items-center gap-2 text-brand-cta text-sm font-medium group-hover:gap-3 transition-all flex-shrink-0">
              Conhecer <ChevronRight size={14} />
            </div>
          </Link>
        </SectionReveal>
      </div>
    </section>
  );
}

function MethodSection() {
  return (
    <section id="metodo" className="py-24 bg-brand-surface1">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionReveal className="mb-16">
          <h2 className="font-sora text-3xl md:text-4xl font-semibold text-brand-text">
            Método em 4 etapas.
          </h2>
          <p className="text-brand-subtle text-base mt-3 max-w-xl">
            Não prometemos mágica. Entregamos diagnóstico, arquitetura, execução com cadência e otimização contínua.
          </p>
        </SectionReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {METHOD_STEPS.map((step, i) => (
            <SectionReveal key={step.num} delay={i * 0.1}>
              <div className="relative bg-[#160907] border border-[#3A231D] rounded-2xl p-6 h-full group hover:border-[#CA6E23]/40 transition-colors duration-300">
                <div className="text-4xl font-sora font-bold gradient-text mb-4">{step.num}</div>
                <h3 className="font-sora text-lg font-semibold text-brand-text mb-2">{step.title}</h3>
                <p className="text-brand-subtle text-sm leading-relaxed">{step.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
        <SectionReveal className="mt-8 text-center">
          <Link to="/metodo" className="inline-flex items-center gap-2 text-brand-cta font-medium text-sm hover:underline">
            Ver método completo <ArrowRight size={14} />
          </Link>
        </SectionReveal>
      </div>
    </section>
  );
}

function KPIsSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionReveal className="text-center mb-12">
          <h2 className="font-sora text-3xl md:text-4xl font-semibold text-brand-text">Números que aparecem no board.</h2>
        </SectionReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {KPIS.map((kpi, i) => (
            <SectionReveal key={kpi.label} delay={i * 0.15}>
              <div className="bg-[#1E0D0A] border border-[#3A231D] rounded-2xl p-8 text-center group hover:border-[#CA6E23]/40 transition-colors duration-300">
                <div className="font-sora text-5xl md:text-6xl font-bold gradient-text">
                  <CountUp
                    start={0}
                    end={kpi.value}
                    suffix={kpi.suffix}
                    enableScrollSpy
                    scrollSpyOnce
                    duration={2.5}
                  />
                </div>
                <p className="text-brand-muted font-medium mt-3">{kpi.label}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function OfertaSection() {
  return (
    <section className="py-24 bg-brand-surface1">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <SectionReveal>
            <h2 className="font-sora text-3xl md:text-4xl font-semibold text-brand-text leading-tight">
              Diagnóstico IA-first<br />
              <span className="gradient-text">em 7–10 dias.</span>
            </h2>
            <p className="text-brand-muted text-base mt-4 leading-relaxed">
              Uma análise completa da sua operação: funil, tracking, automações e CRM. O que você recebe:
            </p>
            <ul className="space-y-3 mt-6">
              {DELIVERABLES.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-brand-cta mt-0.5 flex-shrink-0" />
                  <span className="text-brand-muted text-sm">{d}</span>
                </li>
              ))}
            </ul>

          </SectionReveal>
          <SectionReveal delay={0.2}>
            <div className="bg-[#160907] border border-[#3A231D] rounded-2xl p-8 flex flex-col items-center text-center">
              <h3 className="font-sora text-xl font-semibold text-brand-text mb-6">Agendar diagnóstico estratégico</h3>
              <a href={CTA_URL} target="_blank" rel="noopener noreferrer" data-testid="cta-home-oferta"
                className="inline-flex items-center justify-center gap-2 bg-brand-cta text-white font-semibold px-10 py-5 rounded-full hover:brightness-125 transition-all duration-300 shadow-[0_0_30px_rgba(202,110,35,0.35)] text-base w-full">
                Quero meu diagnóstico <ArrowRight size={18} />
              </a>
              <p className="text-brand-subtle text-xs mt-4">Sem spam. Seus dados ficam protegidos (LGPD).</p>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <SectionReveal className="text-center mb-12">
          <h2 className="font-sora text-3xl md:text-4xl font-semibold text-brand-text">Perguntas frequentes.</h2>
        </SectionReveal>
        <Accordion type="single" collapsible className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              data-testid={`faq-item-${i}`}
              className="bg-[#1E0D0A] border border-[#3A231D] rounded-xl px-6 py-1 hover:border-[#CA6E23]/40 transition-colors"
            >
              <AccordionTrigger className="font-sora font-medium text-brand-text text-left hover:no-underline py-4">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-brand-subtle text-sm leading-relaxed pb-4">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-10" />
      <div className="absolute top-0 left-0 right-0 h-px gradient-bg opacity-60" />
      <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center">
        <SectionReveal>
          <h2 className="font-sora text-3xl md:text-5xl font-bold text-brand-text leading-tight">
            Previsibilidade começa com um diagnóstico.
          </h2>
          <p className="text-brand-subtle text-base md:text-lg mt-4 max-w-xl mx-auto">
            Em 7–10 dias, você sabe onde está o gargalo e o que fazer a seguir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" data-testid="cta-banner-primary"
              className="inline-flex items-center justify-center gap-2 bg-brand-cta text-white font-semibold px-10 py-4 rounded-full hover:brightness-125 transition-all duration-300 shadow-[0_0_30px_rgba(202,110,35,0.3)] text-base">
              Quero meu diagnóstico <ArrowRight size={18} />
            </a>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-[#3A231D] text-brand-muted hover:bg-[#3A231D]/30 font-medium px-8 py-4 rounded-full transition-all duration-300 text-base">
              Falar com especialista
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div data-testid="home-page">
      <Hero />
      <ProblemSection />
      <PilarsSection />
      <MethodSection />
      <KPIsSection />
      <OfertaSection />
      <FAQSection />
      <CTABanner />
    </div>
  );
}
