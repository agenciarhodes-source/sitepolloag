import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const SOLUCOES_MAIN = [
  { label: 'Hub de Soluções', path: '/solucoes', desc: 'Visão completa do ecossistema' },
  { label: 'IA-first & Automações', path: '/solucoes/ia-first', desc: 'Reduza retrabalho com IA' },
  { label: 'Growth & Performance', path: '/solucoes/growth-performance', desc: 'Aquisição + CRO com rotina' },
  { label: 'SEO & Conteúdo', path: '/solucoes/seo-conteudo', desc: 'Demanda orgânica com método' },
  { label: 'CRM & Base', path: '/solucoes/crm-base', desc: 'LTV, churn e reativação' },
];

const SOLUCOES_LANDINGS = [
  { label: 'Mídia de Performance', path: '/performance', desc: 'Auditoria de performance' },
  { label: 'SEO', path: '/seo', desc: 'Diagnóstico SEO' },
  { label: 'CRM', path: '/crm', desc: 'Auditoria de CRM' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solucoesOpen, setSolucoesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSolucoesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setSolucoesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#160907]/95 backdrop-blur-xl border-b border-[#3A231D]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" data-testid="nav-logo" className="flex items-center">
            <span className="font-sora font-bold text-2xl"><span className="text-white">pollo</span><span className="gradient-text">.ag</span></span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/">Home</NavLink>
            <div className="relative" ref={dropdownRef}>
              <button
                data-testid="nav-solucoes-btn"
                onClick={() => setSolucoesOpen(!solucoesOpen)}
                className="flex items-center gap-1 text-brand-muted hover:text-brand-cta transition-colors font-medium text-sm"
              >
                Soluções
                <ChevronDown size={14} className={`transition-transform duration-200 ${solucoesOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {solucoesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-[#1E0D0A] border border-[#3A231D] rounded-xl shadow-2xl overflow-hidden"
                  >
                    <div className="p-2">
                      <p className="text-xs font-semibold text-brand-subtle uppercase tracking-widest px-3 py-2">Soluções</p>
                      {SOLUCOES_MAIN.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="flex flex-col px-3 py-2.5 rounded-lg hover:bg-[#24110E] transition-colors"
                          onClick={() => setSolucoesOpen(false)}
                        >
                          <span className="text-sm font-medium text-brand-text">{item.label}</span>
                          <span className="text-xs text-brand-subtle mt-0.5">{item.desc}</span>
                        </Link>
                      ))}
                      <div className="border-t border-[#3A231D] my-2" />
                      <p className="text-xs font-semibold text-brand-subtle uppercase tracking-widest px-3 py-2">Landings</p>
                      {SOLUCOES_LANDINGS.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="flex flex-col px-3 py-2.5 rounded-lg hover:bg-[#24110E] transition-colors"
                          onClick={() => setSolucoesOpen(false)}
                        >
                          <span className="text-sm font-medium text-brand-cta">{item.label}</span>
                          <span className="text-xs text-brand-subtle mt-0.5">{item.desc}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <NavLink to="/metodo">Método</NavLink>
            <NavLink to="/conteudos">Blog</NavLink>
            <NavLink to="/sobre">Sobre</NavLink>
            <NavLink to="/contato">Contato</NavLink>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/diagnostico"
              data-testid="nav-cta-btn"
              className="hidden md:inline-flex items-center bg-brand-cta text-white font-semibold text-sm px-5 py-2.5 rounded-full hover:brightness-125 transition-all duration-300 shadow-[0_0_20px_rgba(202,110,35,0.25)]"
            >
              Diagnóstico
            </Link>
            <button
              data-testid="mobile-menu-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-brand-text p-2"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1E0D0A] border-t border-[#3A231D] overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {[
                { to: '/', label: 'Home' },
                { to: '/solucoes', label: 'Soluções' },
                { to: '/performance', label: 'Mídia de Performance' },
                { to: '/seo', label: 'SEO' },
                { to: '/crm', label: 'CRM' },
                { to: '/metodo', label: 'Método' },
                { to: '/conteudos', label: 'Blog' },
                { to: '/sobre', label: 'Sobre' },
                { to: '/contato', label: 'Contato' },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="py-3 text-brand-muted hover:text-brand-cta transition-colors border-b border-[#3A231D] text-sm font-medium"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/diagnostico"
                data-testid="mobile-cta-btn"
                className="mt-4 w-full text-center bg-brand-cta text-white font-semibold py-3.5 rounded-full hover:brightness-125 transition-all"
              >
                Quero meu diagnóstico
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function NavLink({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link
      to={to}
      className={`text-sm font-medium transition-colors ${
        isActive ? 'text-brand-cta' : 'text-brand-muted hover:text-brand-cta'
      }`}
    >
      {children}
    </Link>
  );
}
