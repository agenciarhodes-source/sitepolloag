import SectionReveal, { StaggerContainer, StaggerItem } from '@/components/SectionReveal';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function SolucaoTemplate({ title, tag, description, whatIs, benefits, howItWorks, ctaTo, ctaLabel, image }) {
  return (
    <div className="pt-20">
      <section className="relative py-28 overflow-hidden">
        {image && (
          <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${image})` }} />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-[#160907]/60 to-[#160907]" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <SectionReveal className="max-w-3xl">
            <p className="text-xs font-semibold text-brand-cta uppercase tracking-widest mb-4">{tag}</p>
            <h1 className="font-sora text-4xl md:text-5xl lg:text-6xl font-bold text-brand-text leading-tight"
              dangerouslySetInnerHTML={{ __html: title }} />
            <p className="text-brand-muted text-lg mt-6 leading-relaxed">{description}</p>
            <Link
              to={ctaTo}
              className="mt-8 inline-flex items-center gap-2 bg-brand-cta text-[#160907] font-semibold px-8 py-4 rounded-2xl hover:brightness-110 transition-all duration-300 shadow-[0_0_30px_rgba(202,110,35,0.3)]"
            >
              {ctaLabel} <ArrowRight size={18} />
            </Link>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20 bg-brand-surface1">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionReveal>
            <p className="text-xs font-semibold text-brand-cta uppercase tracking-widest mb-4">O que é</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-brand-muted text-base leading-relaxed">{whatIs}</p>
              </div>
              <div className="space-y-3">
                {benefits.map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-brand-cta flex-shrink-0 mt-0.5" />
                    <span className="text-brand-muted text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionReveal className="mb-12">
            <p className="text-xs font-semibold text-brand-cta uppercase tracking-widest mb-4">Como funciona</p>
            <h2 className="font-sora text-2xl md:text-3xl font-semibold text-brand-text">Processo e entregáveis.</h2>
          </SectionReveal>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {howItWorks.map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-brand-surface1 border border-[#3A231D] rounded-2xl p-6 h-full hover:border-[#CA6E23]/40 transition-colors duration-300">
                  <div className="text-3xl font-sora font-bold gradient-text mb-3">{String(i + 1).padStart(2, '0')}</div>
                  <h3 className="font-sora font-semibold text-brand-text mb-2">{item.title}</h3>
                  <p className="text-brand-subtle text-sm leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 bg-brand-surface1">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <SectionReveal>
            <h2 className="font-sora text-2xl md:text-3xl font-semibold text-brand-text mb-4">Quer implementar essa solução?</h2>
            <p className="text-brand-subtle text-sm mb-8">Começamos com um diagnóstico para entender seu contexto e desenhar o que faz sentido.</p>
            <Link to={ctaTo} className="inline-flex items-center gap-2 bg-brand-cta text-[#160907] font-semibold px-8 py-4 rounded-2xl hover:brightness-110 transition-all duration-300">
              {ctaLabel} <ArrowRight size={18} />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
