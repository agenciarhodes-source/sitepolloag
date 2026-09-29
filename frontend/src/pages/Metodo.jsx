import SectionReveal, { StaggerContainer, StaggerItem } from '@/components/SectionReveal';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const METHOD_STEPS = [
  {
    num: '01',
    title: 'Diagnóstico',
    duration: '7–10 dias',
    desc: 'Mapeamos tracking, baseline e gargalos do funil. Entendemos o que está sendo medido, o que falta e onde está o maior atrito.',
    deliverables: ['Auditoria de tracking', 'Baseline de KPIs', 'Mapa de gargalos', 'Inventário de stack'],
  },
  {
    num: '02',
    title: 'Arquitetura',
    duration: '1–2 semanas',
    desc: 'Desenhamos os fluxos, estrutura de dados, jornadas de clientes e governança IA. Blueprint completo antes de começar a executar.',
    deliverables: ['Blueprint de automação', 'Estrutura de jornadas', 'Definição de KPIs', 'Roadmap 30/60/90'],
  },
  {
    num: '03',
    title: 'Implementação',
    duration: '4–8 semanas',
    desc: 'Colocamos em prática: pilotos, automações, configuração de CRM, páginas de conversão. Quick wins em 2–4 semanas.',
    deliverables: ['Pilotos de automação', 'Setup de CRM', 'Páginas otimizadas', 'Tracking configurado'],
  },
  {
    num: '04',
    title: 'Otimização',
    duration: 'Contínuo',
    desc: 'Cadência semanal de análise, ajustes e expansão. KPIs acompanhados, playbooks atualizados. Previsibilidade cresce com o tempo.',
    deliverables: ['Relatório semanal', 'Reunião de cadência', 'Playbooks atualizados', 'Expansão incremental'],
  },
];

const RITUALS = [
  { day: 'Segunda', activity: 'Review de KPIs da semana anterior' },
  { day: 'Terça–Quinta', activity: 'Execução, testes e otimizações' },
  { day: 'Sexta', activity: 'Relatório semanal e alinhamento' },
  { day: 'Quinzenal', activity: 'Reunião de cadência estratégica' },
];

const PRINCIPLES = [
  { title: 'IA como ferramenta, humano como decisor', desc: 'IA reduz o repetitivo e acelera a análise. Mas aprovações, estratégias e ajustes de contexto ficam com pessoas.' },
  { title: 'Governança antes da automação', desc: 'Nenhuma automação roda sem regras definidas, owner responsável e logs de auditoria.' },
  { title: 'Dados mínimos, qualidade máxima', desc: 'Coletamos apenas o necessário, com propósito claro. Dados limpos valem mais que volume.' },
];

export default function Metodo() {
  return (
    <div data-testid="metodo-page" className="pt-20">
      <section className="py-28 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px gradient-bg opacity-60" />
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionReveal instant className="max-w-3xl">
            <h1 className="font-sora text-4xl md:text-5xl lg:text-6xl font-bold text-brand-text leading-tight">
              Método pollo.ag:{' '}
              <span className="gradient-text">diagnóstico, arquitetura e rotina.</span>
            </h1>
            <p className="text-brand-muted text-lg mt-6 leading-relaxed">
              Não prometemos mágica. Entregamos processo, cadência e otimização contínua. O objetivo é simples: previsibilidade.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20 bg-brand-surface1">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionReveal className="mb-16">
            <h2 className="font-sora text-2xl md:text-3xl font-semibold text-brand-text">As 4 etapas.</h2>
          </SectionReveal>
          <div className="space-y-6">
            {METHOD_STEPS.map((step, i) => (
              <SectionReveal key={step.num} delay={i * 0.1}>
                <div className="bg-[#160907] border border-[#3A231D] rounded-2xl p-8 grid grid-cols-1 lg:grid-cols-3 gap-8 hover:border-[#CA6E23]/30 transition-colors duration-300">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-sora text-4xl font-bold gradient-text">{step.num}</span>
                      <div>
                        <h3 className="font-sora text-xl font-semibold text-brand-text">{step.title}</h3>
                        <span className="text-xs text-brand-cta">{step.duration}</span>
                      </div>
                    </div>
                    <p className="text-brand-muted text-sm leading-relaxed">{step.desc}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-brand-subtle uppercase tracking-widest mb-3">Entregáveis</p>
                    <ul className="space-y-2">
                      {step.deliverables.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-brand-subtle text-sm">
                          <div className="w-1 h-1 rounded-full bg-brand-cta flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <SectionReveal>
              <h2 className="font-sora text-2xl md:text-3xl font-semibold text-brand-text mb-6">Rituais que criam previsibilidade.</h2>
              <div className="space-y-3">
                {RITUALS.map((r) => (
                  <div key={r.day} className="flex items-start gap-4 bg-[#1E0D0A] border border-[#3A231D] rounded-xl p-4">
                    <div className="w-24 text-xs font-semibold text-brand-cta flex-shrink-0 pt-0.5">{r.day}</div>
                    <p className="text-brand-muted text-sm">{r.activity}</p>
                  </div>
                ))}
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <h2 className="font-sora text-2xl md:text-3xl font-semibold text-brand-text mb-6">Human-in-the-loop.</h2>
              <div className="space-y-4">
                {PRINCIPLES.map((p) => (
                  <div key={p.title} className="bg-[#1E0D0A] border border-[#3A231D] rounded-xl p-5">
                    <h3 className="font-sora font-medium text-brand-text text-sm mb-1.5">{p.title}</h3>
                    <p className="text-brand-subtle text-xs leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-surface1">
        <div className="max-w-2xl mx-auto px-6 md:px-12 text-center">
          <SectionReveal>
            <h2 className="font-sora text-2xl md:text-3xl font-semibold text-brand-text mb-4">Pronto para começar?</h2>
            <p className="text-brand-subtle text-sm mb-8">O método começa com um diagnóstico. Call de 30 min, sem compromisso.</p>
            <Link to="/diagnostico" className="inline-flex items-center gap-2 bg-brand-cta text-white font-semibold px-8 py-4 rounded-full hover:brightness-125 transition-all duration-300">
              Quero meu diagnóstico <ArrowRight size={18} />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
