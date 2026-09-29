import { Link } from 'react-router-dom';
import SectionReveal, { StaggerContainer, StaggerItem } from '@/components/SectionReveal';
import { CheckCircle, ArrowRight } from 'lucide-react';
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from '@/components/ui/accordion';
import { CTA_URL } from '@/seo/config';

const CRM_FAILS = [
  'Base parada — nenhuma ação de reativação em meses',
  'Mensagens genéricas sem segmentação',
  'Nenhuma jornada estruturada pós-venda',
  'Churn acontece antes da equipe perceber',
  'LTV estagnado sem estratégia de upsell',
];

const DELIVERABLES = [
  'Blueprint de segmentação e jornadas',
  'Automações de ativação, onboarding e reativação',
  'Régua de comunicação personalizada por perfil',
  'Painel de LTV, churn e engajamento da base',
  'Playbooks de cadência para o time comercial',
  'Roadmap de implementação CRM em 60 dias',
];

const FAQ_ITEMS = [
  { q: 'Com quais CRMs vocês trabalham?', a: 'Trabalhamos com RD Station, HubSpot, Salesforce, Pipedrive e outros. Preferimos adaptar o que você já tem antes de sugerir migração.' },
  { q: 'Em quanto tempo vemos redução de churn?', a: 'As primeiras ações de reativação podem gerar retornos em 2–4 semanas. Redução consistente de churn: 60–90 dias com cadência de otimização.' },
  { q: 'Isso serve para e-mail marketing também?', a: 'Sim. CRM vai além do email: engloba segmentação, jornadas multicanal (email, WhatsApp, SMS), automações e dados unificados.' },
  { q: 'Vocês integram com outras ferramentas?', a: 'Sim. Integramos CRM com plataformas de automação, tráfego, ERP e atendimento via API ou ferramentas como Make/n8n.' },
];

export default function LandingCRM() {
  return (
    <div data-testid="landing-crm" className="pt-20">
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1755595505158-3dab9919e677?crop=entropy&cs=srgb&fm=jpg&q=85)' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#160907]/80 to-[#160907]" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <h1 className="font-sora text-4xl md:text-5xl lg:text-6xl font-bold text-brand-text leading-tight">
              CRM como{' '}
              <span className="gradient-text">motor de LTV:</span>{' '}
              ativação, retenção e reativação.
            </h1>
            <p className="text-brand-muted text-lg mt-6 leading-relaxed">
              Segmentação + jornadas + automação para reduzir churn e elevar ticket.
            </p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 bg-brand-cta text-white font-semibold px-8 py-4 rounded-full hover:brightness-125 transition-all duration-300 shadow-[0_0_30px_rgba(202,110,35,0.3)]">
              Auditar meu CRM <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-surface1">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionReveal>
            <h2 className="font-sora text-2xl md:text-3xl font-semibold text-brand-text mb-6">Por que o CRM falha?</h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CRM_FAILS.map((item) => (
              <SectionReveal key={item}>
                <div className="flex items-start gap-3 bg-[#160907] border border-[#3A231D] rounded-xl p-5">
                  <div className="w-2 h-2 rounded-full bg-[#A34E1B] mt-1.5 flex-shrink-0" />
                  <p className="text-brand-muted text-sm">{item}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionReveal>
            <h2 className="font-sora text-2xl md:text-3xl font-semibold text-brand-text mb-2">Auditoria de CRM — 10 dias.</h2>
            <p className="text-brand-subtle text-sm mb-8">O que implementamos:</p>
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

      <section id="auditoria-crm" className="py-20 bg-brand-surface1">
        <div className="max-w-2xl mx-auto px-6 md:px-12 text-center">
          <SectionReveal>
            <h2 className="font-sora text-2xl md:text-3xl font-semibold text-brand-text mb-4">Auditar meu CRM</h2>
            <p className="text-brand-subtle text-sm mb-8">Resposta em até 24h úteis.</p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" data-testid="cta-crm-form"
              className="inline-flex items-center justify-center gap-2 bg-brand-cta text-white font-semibold px-10 py-5 rounded-full hover:brightness-125 transition-all duration-300 shadow-[0_0_30px_rgba(202,110,35,0.35)] text-base">
              Auditar meu CRM <ArrowRight size={18} />
            </a>
            <p className="text-brand-subtle text-xs mt-4">Sem spam. Seus dados ficam protegidos (LGPD).</p>
          </SectionReveal>
        </div>
      </section>

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
