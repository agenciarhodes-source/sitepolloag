import { Link } from 'react-router-dom';
import { ArrowRight, Mail, MessageSquare, MapPin } from 'lucide-react';
import { SITE, whatsappLink, CTA_URL } from '@/seo/config';

const LINKS = {
  solucoes: [
    { label: 'Tráfego Pago', to: '/trafego-pago' },
    { label: 'Redes Sociais', to: '/redes-sociais' },
    { label: 'WhatsApp com IA', to: '/whatsapp-ia' },
    { label: 'IA Aplicada', to: '/ia-aplicada' },
    { label: 'CRM', to: '/crm' },
    { label: 'SEO', to: '/seo' },
  ],
  empresa: [
    { label: 'Soluções', to: '/solucoes' },
    { label: 'Método', to: '/metodo' },
    { label: 'Sobre', to: '/sobre' },
    { label: 'Blog', to: '/conteudos' },
    { label: 'Diagnóstico', to: '/diagnostico' },
    { label: 'Contato', to: '/contato' },
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
              Agência de marketing de performance em Teresina – PI. Tráfego pago, CRM, redes sociais e automação com IA para empresas de todo o Brasil.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-brand-subtle uppercase tracking-widest mb-4">Serviços</p>
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
            <p className="text-xs font-semibold text-brand-subtle uppercase tracking-widest mb-4">Contato</p>
            <ul className="space-y-3 text-sm text-brand-muted">
              <li>
                <a href={whatsappLink('Olá! Vim pelo site da pollo.ag.')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-brand-cta transition-colors">
                  <MessageSquare size={14} className="text-brand-cta" /> {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 hover:text-brand-cta transition-colors text-[13px]">
                  <Mail size={14} className="text-brand-cta shrink-0" /> <span>{SITE.email.split('@')[0]}@<wbr />{SITE.email.split('@')[1]}</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-brand-cta mt-1 shrink-0" />
                <address className="not-italic leading-relaxed">
                  {SITE.street}<br />Caixa Postal {SITE.poBox}<br />{SITE.city} – {SITE.region}
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#3A231D] mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <p className="text-xs text-brand-subtle">© {new Date().getFullYear()} pollo.ag. Todos os direitos reservados.</p>
              <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-brand-cta text-sm font-medium hover:underline">
                Quero meu diagnóstico <ArrowRight size={14} />
              </a>
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
