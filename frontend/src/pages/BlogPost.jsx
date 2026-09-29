import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Seo from '@/seo/Seo';
import NotFound from '@/pages/NotFound';
import { ArrowLeft, Calendar, Tag, User } from 'lucide-react';

const BACKEND = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND}/api`;

function formatDate(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
}

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!BACKEND) { setError(true); setLoading(false); return; }
    axios.get(`${API}/blog/posts/${slug}`)
      .then((r) => (r.data && typeof r.data === 'object' && r.data.title ? setPost(r.data) : setError(true)))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [slug]);


  if (loading) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-brand-cta border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (error || !post) return <NotFound />;

  return (
    <div data-testid="blog-post-page" className="pt-20">
      <Seo
        path={`/conteudos/${post.slug || slug}`}
        title={post.seo_title || `${post.title} | pollo.ag`}
        description={post.seo_description || post.excerpt || ''}
        image={post.cover_image && post.cover_image.startsWith('/') ? post.cover_image : undefined}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          description: post.seo_description || post.excerpt || '',
          datePublished: post.created_at,
          dateModified: post.updated_at || post.created_at,
          author: { '@type': 'Organization', name: post.author || 'pollo.ag' },
          publisher: { '@id': 'https://agenciapollo.com.br/#organization' },
          mainEntityOfPage: `https://agenciapollo.com.br/conteudos/${post.slug || slug}`,
          ...(post.cover_image ? { image: post.cover_image } : {}),
        }}
      />
      {post.cover_image && (
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img src={post.cover_image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#160907]" />
        </div>
      )}

      <div className="max-w-3xl mx-auto px-6 md:px-12 py-16">
        <Link to="/conteudos" className="inline-flex items-center gap-2 text-brand-subtle hover:text-brand-cta transition-colors text-sm mb-8">
          <ArrowLeft size={16} /> Voltar ao blog
        </Link>

        <div className="flex flex-wrap items-center gap-4 mb-6">
          {post.category && (
            <span className="flex items-center gap-1 text-xs text-brand-cta border border-[#CA6E23]/30 bg-[#CA6E23]/10 px-3 py-1 rounded-full">
              <Tag size={10} /> {post.category}
            </span>
          )}
          <span className="flex items-center gap-1 text-xs text-brand-subtle">
            <Calendar size={12} /> {formatDate(post.created_at)}
          </span>
          <span className="flex items-center gap-1 text-xs text-brand-subtle">
            <User size={12} /> {post.author || 'pollo.ag'}
          </span>
        </div>

        <h1 className="font-sora text-3xl md:text-4xl font-bold text-brand-text leading-tight mb-6">
          {post.title}
        </h1>

        <p className="text-brand-muted text-lg leading-relaxed mb-8 border-l-2 border-brand-cta pl-4 italic">
          {post.excerpt}
        </p>

        <div
          data-testid="blog-post-content"
          className="prose-brand space-y-4 text-brand-muted leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-12 pt-8 border-t border-[#3A231D]">
          <Link
            to="/diagnostico"
            className="inline-flex items-center gap-2 bg-brand-cta text-white font-semibold px-8 py-4 rounded-lg hover:brightness-125 transition-all duration-300"
          >
            Quero meu diagnóstico
          </Link>
        </div>
      </div>
    </div>
  );
}
