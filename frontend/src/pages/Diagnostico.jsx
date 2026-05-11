import { Link } from 'react-router-dom';
import SectionReveal, { StaggerContainer, StaggerItem } from '@/components/SectionReveal';
import { CheckCircle, ArrowRight } from 'lucide-react';
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from '@/components/ui/accordion';

const WHAT_WE_EVALUATE = [
  'Tracking e eventos — o que está sendo medido (e o que não está)',
  'Funil completo — do anúncio ao pós-venda',
  'Operação — gargalos, retrabalho e SLAs',
  'CRM — segmentação, jornadas e automações',
];

const DELIVERABLES = [
  'Mapa completo do funil com gargalos identificados',
  'Blueprint de automação e arquitetura de processos',
  'Lista de quick wins com prioridade de impacto',
  'Roadmap estratégico 30/60/90 dias',
  'Proposta de implementação com escopo e KPIs',
];

const FAQ_ITEMS = [
  { q: 'Qual a diferença entre diagnóstico e auditoria?', a: 'O diagnóstico é mais amplo: cobre funil, operação, tracking e CRM. As auditorias (Performance, SEO, CRM) são especializadas em uma área. O diagnóstico é o ponto de partida recomendado.' },
  { q: 'Preciso fornecer acesso a sistemas?', a: 'Precisamos de acesso de leitura às plataformas relevantes (CRM, anúncios, analytics). Orientamos exatamente quais acessos e como conceder de forma segura.' },
  { q: 'O diagnóstico gera proposta de implementação?', a: 'Sim. O resultado do diagnóstico inclui uma proposta clara de implementação, com escopo, entregas e investimento.' },
  { q: 'Quanto tempo dura o diagnóstico?', a: '7 a 10 dias úteis. Começa com uma call de 30 min de alinhamento.' },
];

export default function Diagnostico() {
  return (
    <div data-testid="diagnostico-page" className="pt-20">
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-10" />
        <div className="absolute top-0 left-0 right-0 h-px gradient-bg opacity-60" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h1 className="font-sora text-4xl md:text-5xl lg:text-6xl font-bold text-brand-text leading-tight">
                Descubra onde está o{' '}
                <span className="gradient-text">gargalo</span>{' '}
                do seu crescimento — em 7–10 dias.
              </h1>
              <p className="text-brand-muted text-lg mt-6 leading-relaxed">
                Uma análise completa da sua operação de marketing, vendas e processos. Com entregáveis concretos, não um relatório de 80 páginas.
              </p>
              <div className="mt-8 space-y-3">
                <p className="text-brand-subtle text-xs font-semibold uppercase tracking-widest">O que avaliamos:</p>
                {WHAT_WE_EVALUATE.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-cta mt-2 flex-shrink-0" />
                    <p className="text-brand-muted text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-surface1 border border-[#3A231D] rounded-2xl p-8 flex flex-col items-center text-center">
              <h2 className="font-sora text-xl font-semibold text-brand-text mb-4">Agendar diagnóstico estratégico</h2>
              <p className="text-brand-subtle text-sm mb-8">Resposta em até 24h úteis.</p>
              <Link to="/contato"
                data-testid="cta-diagnostico-form"
                className="inline-flex items-center justify-center gap-2 bg-brand-cta text-white font-semibold px-10 py-5 rounded-full hover:brightness-125 transition-all duration-300 shadow-[0_0_30px_rgba(202,110,35,0.35)] text-base w-full">
                Quero meu diagnóstico <ArrowRight size={18} />
              </Link>
              <p className="text-brand-subtle text-xs mt-4">Sem spam. Seus dados ficam protegidos (LGPD).</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-surface1">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionReveal>
            <h2 className="font-sora text-2xl md:text-3xl font-semibold text-brand-text mb-8">O que você recebe:</h2>
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
          <SectionReveal className="text-center mb-12">
            <h2 className="font-sora text-2xl md:text-3xl font-semibold text-brand-text">Como começa</h2>
          </SectionReveal>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'Call de alinhamento', desc: '30 minutos para entender seu negócio, metas e contexto atual.' },
              { step: '02', title: 'Coleta e análise', desc: '7–10 dias de diagnóstico com acesso às plataformas relevantes.' },
              { step: '03', title: 'Apresentação dos resultados', desc: 'Relatório + blueprint + proposta de implementação com KPIs.' },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <div className="bg-brand-surface1 border border-[#3A231D] rounded-2xl p-8 h-full">
                  <div className="text-4xl font-sora font-bold gradient-text mb-4">{item.step}</div>
                  <h3 className="font-sora text-lg font-semibold text-brand-text mb-2">{item.title}</h3>
                  <p className="text-brand-subtle text-sm leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 bg-brand-surface1">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <SectionReveal className="text-center mb-10">
            <h2 className="font-sora text-2xl md:text-3xl font-semibold text-brand-text">Dúvidas frequentes</h2>
          </SectionReveal>
          <Accordion type="single" collapsible className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-[#160907] border border-[#3A231D] rounded-xl px-6 py-1">
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
