import { Link } from 'react-router-dom';
import SectionReveal, { StaggerContainer, StaggerItem } from '@/components/SectionReveal';
import { ArrowRight, ChevronRight, Zap, TrendingUp, Database, Search } from 'lucide-react';

const SOLUCOES = [
  {
    icon: Zap,
    title: 'IA-first & Automações',
    desc: 'Reduza retrabalho e tempo de resposta com automação inteligente. Human-in-the-loop com governança e qualidade.',
    tags: ['Automação de processos', 'IA aplicada', 'Integração de sistemas'],
    to: '/solucoes/ia-first',
    color: '#CA6E23',
  },
  {
    icon: TrendingUp,
    title: 'Growth & Performance',
    desc: 'Aquisição eficiente + CRO com rotina semanal de testes. ROI explicável, não campanhas no escuro.',
    tags: ['Mídia paga', 'CRO', 'Tracking'],
    to: '/solucoes/growth-performance',
    color: '#A34E1B',
  },
  {
    icon: Search,
    title: 'SEO & Conteúdo',
    desc: 'Demanda orgânica com método: arquitetura, clusters e páginas money para alimentar o pipeline.',
    tags: ['SEO técnico', 'Conteúdo estratégico', 'Cluster editorial'],
    to: '/solucoes/seo-conteudo',
    color: '#8C3A11',
  },
  {
    icon: Database,
    title: 'CRM & Base (LTV/Churn)',
    desc: 'Ativação, retenção e reativação para elevar LTV e reduzir churn. CRM como motor de receita recorrente.',
    tags: ['Segmentação', 'Jornadas', 'Retenção'],
    to: '/solucoes/crm-base',
    color: '#CA6E23',
  },
];

export default function Solucoes() {
  return (
    <div data-testid="solucoes-page" className="pt-20">
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1759956445608-32eef0f19208?crop=entropy&cs=srgb&fm=jpg&q=85)' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#160907]/60 to-[#160907]" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center">
          <SectionReveal>
            <p className="text-xs font-semibold text-brand-cta uppercase tracking-widest mb-4">Ecossistema de Soluções</p>
            <h1 className="font-sora text-4xl md:text-5xl lg:text-6xl font-bold text-brand-text leading-tight">
              Um ecossistema para transformar{' '}
              <span className="gradient-text">crescimento em sistema.</span>
            </h1>
            <p className="text-brand-muted text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
              Não vendemos canais isolados. Construímos um motor integrado de aquisição, conversão e retenção.
            </p>
            <Link
              to="/diagnostico"
              data-testid="solucoes-cta"
              className="mt-8 inline-flex items-center gap-2 bg-brand-cta text-[#160907] font-semibold px-8 py-4 rounded-[22px] hover:brightness-110 transition-all duration-300 shadow-[0_0_30px_rgba(202,110,35,0.3)]"
            >
              Quero diagnóstico <ArrowRight size={18} />
            </Link>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SOLUCOES.map((sol, i) => {
              const Icon = sol.icon;
              return (
                <SectionReveal key={sol.title} delay={i * 0.1}>
                  <Link
                    to={sol.to}
                    data-testid={`solucao-card-${i}`}
                    className="group block bg-[#1E0D0A] border border-[#3A231D] rounded-2xl p-8 hover:border-[#CA6E23]/50 transition-all duration-300 hover:-translate-y-1 h-full"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${sol.color}20`, border: `1px solid ${sol.color}40` }}>
                        <Icon size={22} style={{ color: sol.color }} />
                      </div>
                      <div>
                        <h2 className="font-sora text-xl font-semibold text-brand-text">{sol.title}</h2>
                      </div>
                    </div>
                    <p className="text-brand-subtle text-sm leading-relaxed mb-6">{sol.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {sol.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2.5 py-1 rounded-full border border-[#3A231D] text-brand-subtle">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-brand-cta text-sm font-medium group-hover:gap-3 transition-all">
                      Conhecer solução <ChevronRight size={14} />
                    </div>
                  </Link>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-surface1">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <SectionReveal>
            <h2 className="font-sora text-2xl md:text-3xl font-semibold text-brand-text">
              Não sabe por onde começar?
            </h2>
            <p className="text-brand-subtle text-base mt-3 mb-8 max-w-lg mx-auto">
              O diagnóstico mapeia toda a operação e indica quais soluções fazem mais sentido para o seu momento.
            </p>
            <Link
              to="/diagnostico"
              className="inline-flex items-center gap-2 bg-brand-cta text-[#160907] font-semibold px-8 py-4 rounded-[22px] hover:brightness-110 transition-all duration-300"
            >
              Quero meu diagnóstico <ArrowRight size={18} />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
