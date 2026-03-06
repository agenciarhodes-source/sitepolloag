import { useState } from 'react';
import { CheckCircle, Loader } from 'lucide-react';
import axios from 'axios';

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const META_OPTIONS = [
  'Aumentar conversão',
  'Reduzir churn',
  'Aumentar LTV',
  'Organizar funil',
  'Estruturar CRM',
  'Melhorar ROI',
  'Outros',
];

const TICKET_OPTIONS = [
  'Até R$1k',
  'R$1k – R$5k',
  'R$5k – R$20k',
  'R$20k – R$100k',
  'Acima de R$100k',
];

export default function LeadForm({ type = 'short', source = 'site', ctaLabel = 'Quero meu diagnóstico' }) {
  const [form, setForm] = useState({
    name: '', company: '', email: '', whatsapp: '', role: '',
    meta_90: '', commercial_team: '', current_stack: '', avg_ticket: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email.includes('@')) { setError('Verifique o formato do email.'); return; }
    setLoading(true);
    try {
      await axios.post(`${API}/leads`, { ...form, source });
      setSuccess(true);
    } catch {
      setError('Erro ao enviar. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div data-testid="lead-form-success" className="flex flex-col items-center gap-4 py-10 text-center">
        <CheckCircle className="text-brand-cta" size={48} />
        <h3 className="font-sora text-xl font-semibold text-brand-text">Recebido. Próximo passo: alinhamento rápido.</h3>
        <p className="text-brand-subtle text-sm max-w-sm">Em até 24h úteis, enviamos um horário para uma call de 30 min.</p>
      </div>
    );
  }

  return (
    <form data-testid="lead-form" onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          data-testid="input-name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Seu nome"
          required
          className="input-brand"
        />
        <input
          data-testid="input-company"
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="Nome da empresa"
          required
          className="input-brand"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          data-testid="input-email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Seu email corporativo"
          required
          className="input-brand"
        />
        <input
          data-testid="input-whatsapp"
          name="whatsapp"
          value={form.whatsapp}
          onChange={handleChange}
          placeholder="WhatsApp (com DDD)"
          required
          className="input-brand"
        />
      </div>
      <input
        data-testid="input-role"
        name="role"
        value={form.role}
        onChange={handleChange}
        placeholder="Seu cargo"
        required
        className="input-brand"
      />

      {type === 'qualified' && (
        <>
          <select
            data-testid="select-meta"
            name="meta_90"
            value={form.meta_90}
            onChange={handleChange}
            className="input-brand"
          >
            <option value="">Meta nos próximos 90 dias</option>
            {META_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
          <select
            data-testid="select-commercial"
            name="commercial_team"
            value={form.commercial_team}
            onChange={handleChange}
            className="input-brand"
          >
            <option value="">Time comercial ativo? (Sim/Não)</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>
          <textarea
            data-testid="input-stack"
            name="current_stack"
            value={form.current_stack}
            onChange={handleChange}
            placeholder="Stack atual (CRM, ferramentas de tráfego, etc.)"
            rows={2}
            className="input-brand resize-none"
          />
          <select
            data-testid="select-ticket"
            name="avg_ticket"
            value={form.avg_ticket}
            onChange={handleChange}
            className="input-brand"
          >
            <option value="">Ticket médio aproximado</option>
            {TICKET_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </>
      )}

      {error && <p data-testid="form-error" className="text-[#A34E1B] text-sm">{error}</p>}

      <button
        data-testid="lead-form-submit"
        type="submit"
        disabled={loading}
        className="w-full bg-brand-cta text-[#160907] font-semibold py-3.5 rounded-[22px] hover:brightness-110 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60"
      >
        {loading ? <><Loader size={18} className="animate-spin" /> Analisando informações…</> : ctaLabel}
      </button>

      <p className="text-xs text-brand-subtle text-center">
        Sem spam. Seus dados ficam protegidos (LGPD).
      </p>
    </form>
  );
}
