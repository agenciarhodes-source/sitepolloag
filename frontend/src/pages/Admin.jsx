import { useState, useEffect } from 'react';
import axios from 'axios';
import { Plus, Edit2, Trash2, Eye, EyeOff, LogOut, FileText, Users, ArrowRight } from 'lucide-react';

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const ADMIN_PASSWORD = 'polloag2024';

const CATEGORIES = ['IA-first', 'Performance', 'SEO', 'CRM', 'Operações'];

const EMPTY_FORM = {
  title: '', slug: '', excerpt: '', content: '', category: '',
  author: 'pollo.ag', cover_image: '', seo_title: '', seo_description: '', published: false,
};

function generateSlug(title) {
  return title.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .trim();
}

export default function Admin() {
  const [authed, setAuthed] = useState(() => localStorage.getItem('pollo_admin') === 'ok');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [view, setView] = useState('posts'); // posts | leads | new | edit
  const [posts, setPosts] = useState([]);
  const [leads, setLeads] = useState([]);
  const [editPost, setEditPost] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (authed && view === 'posts') fetchPosts();
    if (authed && view === 'leads') fetchLeads();
  }, [authed, view]);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const r = await axios.get(`${API}/blog/admin/posts`);
      setPosts(r.data);
    } catch {}
    setLoading(false);
  };

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const r = await axios.get(`${API}/leads`);
      setLeads(r.data);
    } catch {}
    setLoading(false);
  };

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 3000);
  };

  const handleAuth = () => {
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem('pollo_admin', 'ok');
      setAuthed(true);
    } else {
      setAuthError('Senha incorreta.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('pollo_admin');
    setAuthed(false);
  };

  const openNew = () => { setForm(EMPTY_FORM); setEditPost(null); setView('new'); };
  const openEdit = (post) => { setForm({ ...post }); setEditPost(post); setView('edit'); };

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
      ...(name === 'title' && !editPost ? { slug: generateSlug(value) } : {}),
    }));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      if (editPost) {
        await axios.put(`${API}/blog/posts/${editPost.id}`, form);
        showToast('Post atualizado!');
      } else {
        await axios.post(`${API}/blog/posts`, form);
        showToast('Post criado!');
      }
      setView('posts');
      fetchPosts();
    } catch (e) {
      showToast(e.response?.data?.detail || 'Erro ao salvar.');
    }
    setSaving(false);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Excluir este post?')) return;
    await axios.delete(`${API}/blog/posts/${id}`);
    showToast('Post excluído.');
    fetchPosts();
  };

  const togglePublish = async (post) => {
    await axios.put(`${API}/blog/posts/${post.id}`, { published: !post.published });
    fetchPosts();
    showToast(post.published ? 'Post despublicado.' : 'Post publicado!');
  };

  if (!authed) {
    return (
      <div className="min-h-screen bg-[#0F0504] flex items-center justify-center px-4">
        <div className="w-full max-w-sm bg-[#1E0D0A] border border-[#3A231D] rounded-2xl p-8">
          <span className="font-sora font-bold text-2xl"><span className="text-white">pollo</span><span className="gradient-text">.ag</span></span>
          <h2 className="font-sora text-xl font-semibold text-brand-text mt-4 mb-6">Admin</h2>
          <input
            data-testid="admin-password-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAuth()}
            placeholder="Senha"
            className="input-brand w-full mb-3"
          />
          {authError && <p className="text-[#A34E1B] text-xs mb-3">{authError}</p>}
          <button
            data-testid="admin-login-btn"
            onClick={handleAuth}
            className="w-full bg-brand-cta text-white font-semibold py-3 rounded-full hover:brightness-125 transition-all"
          >
            Entrar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F0504] text-brand-text flex">
      {toast && (
        <div data-testid="admin-toast" className="fixed top-4 right-4 z-50 bg-[#1E0D0A] border border-[#CA6E23]/50 text-brand-text text-sm px-4 py-3 rounded-xl shadow-xl">
          {toast}
        </div>
      )}

      {/* Sidebar */}
      <aside className="w-56 flex-shrink-0 bg-[#160907] border-r border-[#3A231D] flex flex-col">
        <div className="p-6 border-b border-[#3A231D]">
          <span className="font-sora font-bold text-lg gradient-text">pollo.ag</span>
          <p className="text-xs text-brand-subtle mt-1">Admin</p>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {[
            { id: 'posts', label: 'Posts', icon: FileText },
            { id: 'leads', label: 'Leads', icon: Users },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                data-testid={`admin-nav-${item.id}`}
                onClick={() => setView(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  view === item.id || (view === 'new' && item.id === 'posts') || (view === 'edit' && item.id === 'posts')
                    ? 'bg-[#CA6E23]/10 text-brand-cta'
                    : 'text-brand-subtle hover:text-brand-text hover:bg-[#1E0D0A]'
                }`}
              >
                <Icon size={16} /> {item.label}
              </button>
            );
          })}
        </nav>
        <div className="p-4 border-t border-[#3A231D]">
          <button
            data-testid="admin-logout-btn"
            onClick={handleLogout}
            className="w-full flex items-center gap-2 text-sm text-brand-subtle hover:text-brand-text transition-colors px-3 py-2"
          >
            <LogOut size={16} /> Sair
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Posts list */}
          {view === 'posts' && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <h1 className="font-sora text-2xl font-semibold">Posts</h1>
                <button
                  data-testid="new-post-btn"
                  onClick={openNew}
                  className="inline-flex items-center gap-2 bg-brand-cta text-white font-semibold px-4 py-2.5 rounded-full hover:brightness-125 transition-all text-sm"
                >
                  <Plus size={16} /> Novo post
                </button>
              </div>
              {loading ? (
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => <div key={i} className="h-16 bg-[#1E0D0A] rounded-xl animate-pulse" />)}
                </div>
              ) : posts.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-brand-subtle">Nenhum post criado ainda.</p>
                  <button onClick={openNew} className="mt-4 text-brand-cta hover:underline text-sm inline-flex items-center gap-1">
                    Criar primeiro post <ArrowRight size={14} />
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {posts.map((post) => (
                    <div
                      key={post.id}
                      data-testid={`post-row-${post.id}`}
                      className="flex items-center gap-4 bg-[#1E0D0A] border border-[#3A231D] rounded-xl px-5 py-4"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-brand-text text-sm truncate">{post.title}</p>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-xs text-brand-subtle">{post.category}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${post.published ? 'bg-green-900/30 text-green-400' : 'bg-[#3A231D] text-brand-subtle'}`}>
                            {post.published ? 'Publicado' : 'Rascunho'}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <button
                          data-testid={`toggle-publish-${post.id}`}
                          onClick={() => togglePublish(post)}
                          title={post.published ? 'Despublicar' : 'Publicar'}
                          className="p-2 rounded-lg text-brand-subtle hover:text-brand-cta hover:bg-[#24110E] transition-colors"
                        >
                          {post.published ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                        <button
                          data-testid={`edit-post-${post.id}`}
                          onClick={() => openEdit(post)}
                          className="p-2 rounded-lg text-brand-subtle hover:text-brand-cta hover:bg-[#24110E] transition-colors"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          data-testid={`delete-post-${post.id}`}
                          onClick={() => handleDelete(post.id)}
                          className="p-2 rounded-lg text-brand-subtle hover:text-[#A34E1B] hover:bg-[#24110E] transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Leads list */}
          {view === 'leads' && (
            <div>
              <h1 className="font-sora text-2xl font-semibold mb-8">Leads ({leads.length})</h1>
              {loading ? (
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => <div key={i} className="h-16 bg-[#1E0D0A] rounded-xl animate-pulse" />)}
                </div>
              ) : leads.length === 0 ? (
                <p className="text-brand-subtle text-center py-20">Nenhum lead capturado ainda.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[#3A231D]">
                        {['Nome', 'Empresa', 'Email', 'WhatsApp', 'Cargo', 'Origem', 'Data'].map((h) => (
                          <th key={h} className="text-left py-3 px-4 text-xs font-semibold text-brand-subtle uppercase tracking-wide">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {leads.map((lead) => (
                        <tr key={lead.id} data-testid={`lead-row-${lead.id}`} className="border-b border-[#3A231D]/50 hover:bg-[#1E0D0A] transition-colors">
                          <td className="py-3 px-4 text-brand-text">{lead.name}</td>
                          <td className="py-3 px-4 text-brand-subtle">{lead.company}</td>
                          <td className="py-3 px-4 text-brand-subtle">{lead.email}</td>
                          <td className="py-3 px-4 text-brand-subtle">{lead.whatsapp}</td>
                          <td className="py-3 px-4 text-brand-subtle">{lead.role}</td>
                          <td className="py-3 px-4">
                            <span className="text-xs px-2 py-1 rounded-full bg-[#CA6E23]/10 text-brand-cta">{lead.source}</span>
                          </td>
                          <td className="py-3 px-4 text-brand-subtle text-xs">
                            {lead.created_at ? new Date(lead.created_at).toLocaleDateString('pt-BR') : '—'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* New / Edit post form */}
          {(view === 'new' || view === 'edit') && (
            <div>
              <div className="flex items-center gap-4 mb-8">
                <button onClick={() => setView('posts')} className="text-brand-subtle hover:text-brand-text transition-colors text-sm">
                  ← Voltar
                </button>
                <h1 className="font-sora text-2xl font-semibold">
                  {view === 'new' ? 'Novo post' : 'Editar post'}
                </h1>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl">
                <div className="lg:col-span-2 space-y-4">
                  <input
                    data-testid="post-title-input"
                    name="title" value={form.title} onChange={handleFormChange}
                    placeholder="Título do post" className="input-brand w-full text-lg font-medium"
                  />
                  <input
                    data-testid="post-slug-input"
                    name="slug" value={form.slug} onChange={handleFormChange}
                    placeholder="slug-do-post" className="input-brand w-full text-sm"
                  />
                  <textarea
                    data-testid="post-excerpt-input"
                    name="excerpt" value={form.excerpt} onChange={handleFormChange}
                    placeholder="Resumo do post (1–2 frases)"
                    rows={3} className="input-brand w-full resize-none"
                  />
                  <textarea
                    data-testid="post-content-input"
                    name="content" value={form.content} onChange={handleFormChange}
                    placeholder="Conteúdo (HTML ou texto)"
                    rows={16} className="input-brand w-full resize-none font-mono text-xs"
                  />
                </div>
                <div className="space-y-4">
                  <div className="bg-[#1E0D0A] border border-[#3A231D] rounded-xl p-4 space-y-3">
                    <p className="text-xs font-semibold text-brand-subtle uppercase tracking-wide">Publicação</p>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        data-testid="post-published-checkbox"
                        type="checkbox" name="published" checked={form.published} onChange={handleFormChange}
                        className="w-4 h-4 accent-brand-cta"
                      />
                      <span className="text-sm text-brand-muted">Publicado</span>
                    </label>
                    <select
                      data-testid="post-category-select"
                      name="category" value={form.category} onChange={handleFormChange}
                      className="input-brand w-full"
                    >
                      <option value="">Categoria</option>
                      {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                    <input
                      name="author" value={form.author} onChange={handleFormChange}
                      placeholder="Autor" className="input-brand w-full"
                    />
                    <input
                      name="cover_image" value={form.cover_image} onChange={handleFormChange}
                      placeholder="URL da imagem de capa" className="input-brand w-full"
                    />
                  </div>
                  <div className="bg-[#1E0D0A] border border-[#3A231D] rounded-xl p-4 space-y-3">
                    <p className="text-xs font-semibold text-brand-subtle uppercase tracking-wide">SEO</p>
                    <input
                      name="seo_title" value={form.seo_title} onChange={handleFormChange}
                      placeholder="SEO Title" className="input-brand w-full text-sm"
                    />
                    <textarea
                      name="seo_description" value={form.seo_description} onChange={handleFormChange}
                      placeholder="Meta description" rows={3} className="input-brand w-full text-sm resize-none"
                    />
                  </div>
                  <button
                    data-testid="save-post-btn"
                    onClick={handleSave}
                    disabled={saving}
                    className="w-full bg-brand-cta text-white font-semibold py-3.5 rounded-full hover:brightness-125 transition-all disabled:opacity-60"
                  >
                    {saving ? 'Salvando…' : view === 'new' ? 'Criar post' : 'Salvar alterações'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
