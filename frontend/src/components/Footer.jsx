import { Link } from 'react-router-dom';
import { Linkedin, Instagram, ArrowRight } from 'lucide-react';

const LINKS = {
  solucoes: [
    { label: 'IA-first & Automações', to: '/solucoes/ia-first' },
    { label: 'Growth & Performance', to: '/solucoes/growth-performance' },
    { label: 'SEO & Conteúdo', to: '/solucoes/seo-conteudo' },
    { label: 'CRM & Base', to: '/solucoes/crm-base' },
  ],
  empresa: [
    { label: 'Método', to: '/metodo' },
    { label: 'Blog', to: '/conteudos' },
    { label: 'Sobre', to: '/sobre' },
    { label: 'Contato', to: '/contato' },
  ],
  landings: [
    { label: 'Mídia de Performance', to: '/performance' },
    { label: 'SEO', to: '/seo' },
    { label: 'CRM', to: '/crm' },
    { label: 'Diagnóstico IA-first', to: '/diagnostico' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0F0504] border-t border-[#3A231D]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <span className="font-sora font-bold text-2xl"><span className="text-white">pollo</span><span className="gradient-text">.ag</span></span>
            <p className="text-brand-subtle text-sm mt-4 leading-relaxed max-w-xs">
              Transformamos crescimento em previsibilidade com um motor IA-first que une aquisição, conversão e retenção.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-lg border border-[#3A231D] flex items-center justify-center text-brand-subtle hover:text-brand-cta hover:border-brand-cta transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-lg border border-[#3A231D] flex items-center justify-center text-brand-subtle hover:text-brand-cta hover:border-brand-cta transition-colors">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-brand-subtle uppercase tracking-widest mb-4">Soluções</p>
            <ul className="space-y-3">
              {LINKS.solucoes.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-brand-muted hover:text-brand-cta transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold text-brand-subtle uppercase tracking-widest mb-4">Empresa</p>
            <ul className="space-y-3">
              {LINKS.empresa.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-brand-muted hover:text-brand-cta transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold text-brand-subtle uppercase tracking-widest mb-4">Landings</p>
            <ul className="space-y-3">
              {LINKS.landings.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-brand-muted hover:text-brand-cta transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#3A231D] mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <p className="text-xs text-brand-subtle">© {new Date().getFullYear()} pollo.ag. Todos os direitos reservados.</p>
              <Link to="/diagnostico" className="inline-flex items-center gap-2 text-brand-cta text-sm font-medium hover:underline">
                Quero meu diagnóstico <ArrowRight size={14} />
              </Link>
            </div>
            <p className="text-xs text-brand-subtle text-center md:text-right">
              Sem spam. Seus dados ficam protegidos (LGPD).
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
