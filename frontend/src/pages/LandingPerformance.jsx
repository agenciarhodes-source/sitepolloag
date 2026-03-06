import { Link } from 'react-router-dom';
import SectionReveal, { StaggerContainer, StaggerItem } from '@/components/SectionReveal';
import LeadForm from '@/components/LeadForm';
import { CheckCircle, ArrowRight } from 'lucide-react';
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from '@/components/ui/accordion';

const SYMPTOMS = [
  'CAC subindo sem explicação clara',
  'Leads chegando, mas conversão oscila',
  'Time de tráfego sobrecarregado e sem rotina',
  'Campanhas rodando sem tracking configurado',
  'ROI impossível de explicar no board',
];

const DELIVERABLES = [
  'Setup e auditoria completa de tracking',
  'Estrutura de campanhas com segmentação revisada',
  'Análise de landing pages e CRO inicial',
  'Rotina semanal de otimização com KPIs',
  'Relatório de quick wins com prioridade de impacto',
  'Roadmap de 30/60/90 dias',
];

const FAQ_ITEMS = [
  { q: 'Vocês gerenciam Google Ads e Meta Ads?', a: 'Sim. Estruturamos, configuramos e gerenciamos campanhas em Google Ads, Meta Ads e outras plataformas relevantes para o seu negócio.' },
  { q: 'Precisamos ter landing pages prontas?', a: 'Não. Auditamos as que existem e, se necessário, desenvolvemos novas páginas otimizadas para conversão como parte do escopo.' },
  { q: 'Como medimos o ROI?', a: 'Configuramos tracking desde o início: eventos, conversões e atribuição. Com dados limpos, o ROI é calculável e apresentável no board.' },
  { q: 'Quanto tempo dura a auditoria?', a: 'A auditoria de performance leva 14 dias. Ao final, você recebe o relatório completo com recomendações priorizadas.' },
  { q: 'Trabalham com que investimento mínimo em mídia?', a: 'Trabalhamos a partir de R$5k de investimento mensal em mídia. Abaixo disso, o retorno pode não justificar a gestão profissional.' },
];

export default function LandingPerformance() {
  return (
    <div data-testid="landing-performance" className="pt-20">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1764258559470-9bd6b7ad8f83?crop=entropy&cs=srgb&fm=jpg&q=85)' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#160907]/80 to-[#160907]" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold text-brand-cta uppercase tracking-widest mb-4">Mídia de Performance</p>
              <h1 className="font-sora text-4xl md:text-5xl lg:text-6xl font-bold text-brand-text leading-tight">
                Performance com{' '}
                <span className="gradient-text">ROI explicável:</span>{' '}
                aquisição eficiente + conversão.
              </h1>
              <p className="text-brand-muted text-lg mt-6 leading-relaxed">
                Campanhas, páginas e testes com cadência semanal — sem tráfego "no escuro".
              </p>
              <div className="flex gap-4 mt-8">
                <a href="#auditoria" className="inline-flex items-center gap-2 bg-brand-cta text-[#160907] font-semibold px-8 py-4 rounded-[22px] hover:brightness-110 transition-all duration-300 shadow-[0_0_30px_rgba(202,110,35,0.3)]">
                  Pedir auditoria de performance <ArrowRight size={18} />
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl gradient-bg opacity-20 blur-xl" />
                <div className="relative bg-[#1E0D0A] border border-[#3A231D] rounded-2xl p-8 space-y-4">
                  {[
                    { label: 'Redução de CAC', value: '-28%', color: 'text-brand-cta' },
                    { label: 'Aumento de ROAS', value: '+3.4x', color: 'text-brand-cta' },
                    { label: 'Conversão na página', value: '+41%', color: 'text-brand-cta' },
                  ].map((stat) => (
                    <div key={stat.label} className="flex justify-between items-center py-3 border-b border-[#3A231D] last:border-0">
                      <span className="text-brand-subtle text-sm">{stat.label}</span>
                      <span className={`font-sora font-bold text-lg ${stat.color}`}>{stat.value} <span className="text-xs font-normal text-brand-subtle">(placeholder)</span></span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sintomas */}
      <section className="py-20 bg-brand-surface1">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionReveal>
            <p className="text-xs font-semibold text-brand-cta uppercase tracking-widest mb-4">Reconhece algum?</p>
            <h2 className="font-sora text-2xl md:text-3xl font-semibold text-brand-text mb-8">Sintomas de performance sem método.</h2>
          </SectionReveal>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SYMPTOMS.map((s) => (
              <StaggerItem key={s}>
                <div className="flex items-start gap-3 bg-[#160907] border border-[#3A231D] rounded-xl p-5">
                  <div className="w-2 h-2 rounded-full bg-[#A34E1B] mt-1.5 flex-shrink-0" />
                  <p className="text-brand-muted text-sm">{s}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Entregáveis */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionReveal>
            <p className="text-xs font-semibold text-brand-cta uppercase tracking-widest mb-4">O que fazemos</p>
            <h2 className="font-sora text-2xl md:text-3xl font-semibold text-brand-text mb-2">Auditoria de Performance — 14 dias.</h2>
            <p className="text-brand-subtle text-sm mb-8">O que você recebe:</p>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {DELIVERABLES.map((d) => (
              <SectionReveal key={d}>
                <div className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-brand-cta flex-shrink-0 mt-0.5" />
                  <span className="text-brand-muted text-sm">{d}</span>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário */}
      <section id="auditoria" className="py-20 bg-brand-surface1">
        <div className="max-w-2xl mx-auto px-6 md:px-12">
          <SectionReveal className="text-center mb-8">
            <h2 className="font-sora text-2xl md:text-3xl font-semibold text-brand-text">Pedir auditoria de performance</h2>
            <p className="text-brand-subtle text-sm mt-2">Resposta em até 24h úteis.</p>
          </SectionReveal>
          <div className="bg-[#160907] border border-[#3A231D] rounded-2xl p-8">
            <LeadForm type="qualified" source="landing_performance" ctaLabel="Pedir auditoria de performance" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <SectionReveal className="text-center mb-10">
            <h2 className="font-sora text-2xl md:text-3xl font-semibold text-brand-text">Dúvidas frequentes</h2>
          </SectionReveal>
          <Accordion type="single" collapsible className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-[#1E0D0A] border border-[#3A231D] rounded-xl px-6 py-1">
                <AccordionTrigger className="font-sora font-medium text-brand-text text-left hover:no-underline py-4">{item.q}</AccordionTrigger>
                <AccordionContent className="text-brand-subtle text-sm leading-relaxed pb-4">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
