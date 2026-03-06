import { Link } from 'react-router-dom';
import SectionReveal, { StaggerContainer, StaggerItem } from '@/components/SectionReveal';
import LeadForm from '@/components/LeadForm';
import { CheckCircle, ArrowRight } from 'lucide-react';
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from '@/components/ui/accordion';

const DELIVERABLES = [
  'Auditoria técnica: Core Web Vitals, indexação, estrutura',
  'Mapa de palavras-chave com intenção comercial',
  'Análise de concorrentes e gaps de conteúdo',
  'Cluster editorial por etapa do funil (top/middle/bottom)',
  'Pauta de conteúdo para 90 dias',
  'Estrutura de páginas money com template otimizado',
];

const FAQ_ITEMS = [
  { q: 'Em quanto tempo o SEO começa a funcionar?', a: 'Otimizações técnicas têm impacto em semanas. Conteúdo começa a rankear em 60–90 dias. Resultados consistentes: 6 meses+. Por isso trabalhamos com roadmap estruturado.' },
  { q: 'Vocês produzem o conteúdo também?', a: 'Sim. Entregamos pautas, briefings e podemos produzir os textos com revisão humana. O conteúdo é orientado por intenção comercial, não por volume.' },
  { q: 'Como medem os resultados?', a: 'Impressões, cliques, posição média, tráfego orgânico e, principalmente, leads e conversões vindas do orgânico. Vanity metrics não entram no relatório.' },
  { q: 'Trabalham com SEO técnico?', a: 'Sim. Auditamos e corrigimos velocidade, estrutura de URLs, sitemap, schema markup, erros de indexação e Core Web Vitals.' },
];

export default function LandingSEO() {
  return (
    <div data-testid="landing-seo" className="pt-20">
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1759956445608-32eef0f19208?crop=entropy&cs=srgb&fm=jpg&q=85)' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#160907]/80 to-[#160907]" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold text-brand-cta uppercase tracking-widest mb-4">SEO & Conteúdo</p>
            <h1 className="font-sora text-4xl md:text-5xl lg:text-6xl font-bold text-brand-text leading-tight">
              SEO que alimenta{' '}
              <span className="gradient-text">pipeline:</span>{' '}
              demanda orgânica com método.
            </h1>
            <p className="text-brand-muted text-lg mt-6 leading-relaxed">
              Arquitetura, conteúdo e intenção comercial — sem "conteúdo por conteúdo".
            </p>
            <div className="flex gap-4 mt-8">
              <a href="#diagnostico-seo" className="inline-flex items-center gap-2 bg-brand-cta text-[#160907] font-semibold px-8 py-4 rounded-2xl hover:brightness-110 transition-all duration-300 shadow-[0_0_30px_rgba(202,110,35,0.3)]">
                Quero diagnóstico SEO <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-surface1">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionReveal>
            <h2 className="font-sora text-2xl md:text-3xl font-semibold text-brand-text mb-2">Diagnóstico SEO & Conteúdo</h2>
            <p className="text-brand-subtle text-sm mb-8">O que está incluído:</p>
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

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Top of Funnel', desc: 'Conteúdo de awareness para capturar demanda latente. Artigos, guias e comparativos.' },
              { title: 'Middle of Funnel', desc: 'Conteúdo de consideração para educar e qualificar. Cases, how-tos e benchmarks.' },
              { title: 'Bottom of Funnel', desc: 'Páginas money com intenção de compra. Termos transacionais e de serviço.' },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="bg-[#1E0D0A] border border-[#3A231D] rounded-2xl p-6">
                  <h3 className="font-sora font-semibold text-brand-cta mb-2">{item.title}</h3>
                  <p className="text-brand-subtle text-sm leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section id="diagnostico-seo" className="py-20 bg-brand-surface1">
        <div className="max-w-2xl mx-auto px-6 md:px-12">
          <SectionReveal className="text-center mb-8">
            <h2 className="font-sora text-2xl md:text-3xl font-semibold text-brand-text">Quero diagnóstico SEO</h2>
            <p className="text-brand-subtle text-sm mt-2">Resposta em até 24h úteis.</p>
          </SectionReveal>
          <div className="bg-[#160907] border border-[#3A231D] rounded-2xl p-8">
            <LeadForm type="qualified" source="landing_seo" ctaLabel="Quero diagnóstico SEO" />
          </div>
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
