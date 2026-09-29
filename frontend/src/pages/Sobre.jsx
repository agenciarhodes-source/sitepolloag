import SectionReveal, { StaggerContainer, StaggerItem } from '@/components/SectionReveal';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CTA_URL } from '@/seo/config';

const PRINCIPLES = [
  { title: 'Clareza executiva', desc: 'O que foi feito, por quê, e qual impacto esperado. Sem relatórios opacos.' },
  { title: 'Governança IA', desc: 'Automação com regras, dados e revisão humana onde importa. Sem "IA milagrosa".' },
  { title: 'Resultado sobre volume', desc: 'Métricas que aparecem no board: LTV, churn, conversão. Não vaidade.' },
  { title: 'Processo sustentável', desc: 'Entregamos playbooks e handoff estruturado. O sistema roda sem depender de nós.' },
];

const HOW_WE_WORK = [
  { step: '01', title: 'Diagnóstico', desc: 'Entendemos o seu negócio, stack e metas antes de propor qualquer coisa.' },
  { step: '02', title: 'Alinhamento', desc: 'Blueprint aprovado com você antes da execução. Sem surpresas.' },
  { step: '03', title: 'Execução', desc: 'Implementamos com cadência semanal, KPIs acompanhados e relatório regular.' },
  { step: '04', title: 'Handoff', desc: 'Ao final, você tem playbooks, processos documentados e time capacitado.' },
];

export default function Sobre() {
  return (
    <div data-testid="sobre-page" className="pt-20">
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1573166364839-1bfe9196c23e?crop=entropy&cs=srgb&fm=jpg&q=85)' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#160907]/60 to-[#160907]" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionReveal>
              <h1 className="font-sora text-4xl md:text-5xl lg:text-6xl font-bold text-brand-text leading-tight">
                IA-first com{' '}
                <span className="gradient-text">humano no centro.</span>
              </h1>
              <p className="text-brand-muted text-lg mt-6 leading-relaxed">
                A pollo.ag existe para transformar marketing, vendas e operação em um fluxo orientado por dados e IA — com método, governança e o humano no centro.
              </p>
              <p className="text-brand-muted text-base mt-4 leading-relaxed">
                Crescer não é fazer mais barulho. É criar um sistema. Nós reduzimos atrito, automatizamos o repetitivo e colocamos rotina de performance no lugar de achismos.
              </p>
            </SectionReveal>
            <SectionReveal delay={0.2} direction="right">
              <div className="bg-brand-surface1 border border-[#3A231D] rounded-2xl p-8">
                <blockquote className="font-sora text-lg font-medium text-brand-text leading-relaxed italic mb-4">
                  "Menos ruído, mais resultado. Menos esforço disperso, mais clareza sobre o que funciona."
                </blockquote>
                <p className="text-brand-subtle text-sm">— Diego Martins</p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-surface1">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionReveal className="mb-12">
            <h2 className="font-sora text-2xl md:text-3xl font-semibold text-brand-text">O que guia nosso trabalho.</h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRINCIPLES.map((p, i) => (
              <SectionReveal key={p.title} delay={i * 0.1}>
                <div className="bg-[#160907] border border-[#3A231D] rounded-2xl p-6 h-full">
                  <h3 className="font-sora text-lg font-semibold text-brand-text mb-2">{p.title}</h3>
                  <p className="text-brand-subtle text-sm leading-relaxed">{p.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionReveal className="mb-12">
            <h2 className="font-sora text-2xl md:text-3xl font-semibold text-brand-text">Do diagnóstico ao handoff.</h2>
          </SectionReveal>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_WE_WORK.map((item) => (
              <StaggerItem key={item.step}>
                <div className="bg-brand-surface1 border border-[#3A231D] rounded-2xl p-6">
                  <div className="text-3xl font-sora font-bold gradient-text mb-3">{item.step}</div>
                  <h3 className="font-sora font-semibold text-brand-text mb-2">{item.title}</h3>
                  <p className="text-brand-subtle text-sm leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 bg-brand-surface1">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <SectionReveal>
            <h2 className="font-sora text-2xl md:text-3xl font-semibold text-brand-text mb-4">
              Para quem é a pollo.ag?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 text-left">
              <div className="bg-[#160907] border border-[#CA6E23]/30 rounded-2xl p-6">
                <ul className="space-y-2">
                  {['Empresas B2B com time comercial ou atendimento', 'Negócios que querem previsibilidade de crescimento', 'Quem já tem operação e quer escalar com controle', 'Times que precisam de método e não só de execução'].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-brand-muted text-sm">
                      <span className="text-brand-cta mt-1">+</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#160907] border border-[#3A231D] rounded-2xl p-6">
                <p className="text-xs font-semibold text-brand-subtle uppercase tracking-widest mb-3">Não é para quem</p>
                <ul className="space-y-2">
                  {['Busca "hack milagroso" de crescimento rápido', 'Não mede nada e não quer começar a medir', 'Não consegue sustentar rotina semanal', 'Espera resultados sem processo ou investimento'].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-brand-subtle text-sm">
                      <span className="text-[#A34E1B] mt-1">–</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 bg-brand-cta text-white font-semibold px-8 py-4 rounded-full hover:brightness-125 transition-all duration-300">
              Quero meu diagnóstico <ArrowRight size={18} />
            </a>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
