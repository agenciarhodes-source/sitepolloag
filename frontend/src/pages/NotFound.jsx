import { Link } from 'react-router-dom';
import Seo from '@/seo/Seo';
import { NOT_FOUND_META } from '@/seo/config';

export default function NotFound() {
  return (
    <div data-testid="not-found-page" className="pt-20">
      <Seo path="/404" {...NOT_FOUND_META} />
      <section className="py-32">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <p className="text-brand-cta font-semibold tracking-widest text-sm">ERRO 404</p>
          <h1 className="font-sora text-4xl md:text-5xl font-bold text-brand-text mt-4">
            Esta página não existe.
          </h1>
          <p className="text-brand-muted text-lg mt-6">
            O endereço pode ter mudado. Veja nossos serviços ou fale direto com a equipe.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link to="/" className="bg-brand-cta text-white font-semibold px-8 py-3.5 rounded-full hover:brightness-125 transition-all">
              Ir para a home
            </Link>
            <Link to="/solucoes" className="border border-[#3A231D] text-brand-text font-semibold px-8 py-3.5 rounded-full hover:border-brand-cta transition-all">
              Ver soluções
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
