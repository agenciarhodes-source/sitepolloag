import SectionReveal from '@/components/SectionReveal';
import LeadForm from '@/components/LeadForm';
import { Mail, MessageSquare } from 'lucide-react';

export default function Contato() {
  return (
    <div data-testid="contato-page" className="pt-20">
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <SectionReveal>
              <h1 className="font-sora text-4xl md:text-5xl font-bold text-brand-text leading-tight">
                Fale com{' '}
                <span className="gradient-text">um especialista.</span>
              </h1>
              <p className="text-brand-muted text-lg mt-6 leading-relaxed">
                Resposta em até 24h úteis. Sem spam, sem proposta automática genérica.
              </p>

              <div className="space-y-4 mt-10">
                <div className="flex items-center gap-3 text-brand-muted text-sm">
                  <Mail size={18} className="text-brand-cta" />
                  <span>contato@pollo.ag</span>
                </div>
                <div className="flex items-center gap-3 text-brand-muted text-sm">
                  <MessageSquare size={18} className="text-brand-cta" />
                  <span>WhatsApp disponível após primeiro contato</span>
                </div>
              </div>

              <div className="mt-10 bg-brand-surface1 border border-[#3A231D] rounded-2xl p-6">
                <p className="font-sora font-semibold text-brand-text mb-3">Antes de entrar em contato, vale saber:</p>
                <ul className="space-y-2">
                  {[
                    'Respondemos dentro de 24h úteis',
                    'A primeira conversa é uma call de 30 min',
                    'Não enviamos proposta sem entender seu contexto',
                    'Se não formos a solução certa, indicamos quem é',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-brand-subtle text-sm">
                      <span className="text-brand-cta mt-0.5">—</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="bg-brand-surface1 border border-[#3A231D] rounded-2xl p-8">
                <h2 className="font-sora text-xl font-semibold text-brand-text mb-6">Enviar mensagem</h2>
                <LeadForm type="short" source="contato" ctaLabel="Enviar mensagem" />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
