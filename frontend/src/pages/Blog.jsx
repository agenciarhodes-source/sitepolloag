import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SectionReveal, { StaggerContainer, StaggerItem } from '@/components/SectionReveal';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

const BACKEND = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND}/api`;

const CATEGORIES = ['Todos', 'IA-first', 'Performance', 'SEO', 'CRM', 'Operações'];

function formatDate(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });
}

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!BACKEND) { setLoading(false); return; }
    axios.get(`${API}/blog/posts?published_only=true`)
      .then((r) => {
        const list = Array.isArray(r.data) ? r.data : [];
        setPosts(list); setFiltered(list);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const handleCategory = (cat) => {
    setActiveCategory(cat);
    setFiltered(cat === 'Todos' ? posts : posts.filter((p) => p.category === cat));
  };

  return (
    <div data-testid="blog-page" className="pt-20">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionReveal instant className="mb-12">
            <h1 className="font-sora text-4xl md:text-5xl font-bold text-brand-text">
              Insights práticos sobre{' '}
              <span className="gradient-text">IA, growth e CRM.</span>
            </h1>
            <p className="text-brand-subtle text-base mt-3 max-w-xl">
              Conteúdo orientado a quem executa, não a quem contempla.
            </p>
          </SectionReveal>

          <div className="flex flex-wrap gap-2 mb-12" role="tablist">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                data-testid={`category-filter-${cat}`}
                onClick={() => handleCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                  activeCategory === cat
                    ? 'bg-brand-cta text-white border-brand-cta'
                    : 'border-[#3A231D] text-brand-subtle hover:border-brand-cta hover:text-brand-cta'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-[#1E0D0A] border border-[#3A231D] rounded-2xl h-64 animate-pulse" />
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-brand-subtle text-lg">Nenhum post publicado ainda.</p>
              <p className="text-brand-subtle text-sm mt-2">Volte em breve para conteúdos sobre IA, growth e CRM.</p>
            </div>
          ) : (
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post) => (
                <StaggerItem key={post.id}>
                  <Link
                    to={`/conteudos/${post.slug}`}
                    data-testid={`blog-post-card-${post.id}`}
                    className="group block bg-[#1E0D0A] border border-[#3A231D] rounded-2xl overflow-hidden hover:border-[#CA6E23]/50 transition-all duration-300 hover:-translate-y-1 h-full"
                  >
                    {post.cover_image && (
                      <div className="h-48 overflow-hidden">
                        <img src={post.cover_image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        {post.category && (
                          <span className="flex items-center gap-1 text-xs text-brand-cta border border-[#CA6E23]/30 bg-[#CA6E23]/10 px-2.5 py-1 rounded-full">
                            <Tag size={10} /> {post.category}
                          </span>
                        )}
                        <span className="flex items-center gap-1 text-xs text-brand-subtle">
                          <Calendar size={10} /> {formatDate(post.created_at)}
                        </span>
                      </div>
                      <h2 className="font-sora text-lg font-semibold text-brand-text mb-2 line-clamp-2 group-hover:text-brand-cta transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-brand-subtle text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center gap-2 mt-4 text-brand-cta text-sm font-medium group-hover:gap-3 transition-all">
                        Ler artigo <ArrowRight size={14} />
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </div>
      </section>
    </div>
  );
}
