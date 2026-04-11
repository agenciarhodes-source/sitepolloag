# pollo.ag — PRD (Product Requirements Document)

## Projeto
**Nome:** pollo.ag  
**Categoria:** Soluções empresariais B2B para Marketing, Vendas e Processos  
**Stack:** React + FastAPI + MongoDB  
**URL:** https://pollo-ia.preview.emergentagent.com

---

## Proposta Central
Ajudar empresas a transformarem seu fluxo de trabalho orientado por IA e growth, repensando o modelo de negócio para aplicar o modelo IA-first, com vendas digitais automatizadas e processos focados em resultado.

**One-liner:** pollo.ag transforma crescimento em previsibilidade com um motor IA-first (human-in-the-loop) que une aquisição, conversão e retenção.

---

## Arquitetura

### Backend (FastAPI)
- `POST /api/leads` — Capturar lead
- `GET /api/leads` — Listar leads (admin)
- `GET/POST/PUT/DELETE /api/blog/posts` — CRUD de posts
- `GET /api/blog/admin/posts` — Todos os posts (admin)
- `GET /api/blog/categories` — Categorias de posts

### Frontend (React)
Rotas implementadas:
| Rota | Página |
|------|--------|
| `/` | Home (one-page com todas as seções) |
| `/solucoes` | Hub de Soluções |
| `/solucoes/ia-first` | Solução IA-first |
| `/solucoes/growth-performance` | Solução Growth |
| `/solucoes/seo-conteudo` | Solução SEO |
| `/solucoes/crm-base` | Solução CRM |
| `/ia-aplicada` | Landing IA Aplicada ao Negócio |
| `/performance` | Landing Mídia de Performance |
| `/seo` | Landing SEO |
| `/crm` | Landing CRM |
| `/metodo` | Método pollo.ag |
| `/conteudos` | Blog (listagem) |
| `/conteudos/:slug` | Post individual |
| `/sobre` | Sobre |
| `/contato` | Contato |
| `/diagnostico` | Landing Diagnóstico (conversão) |
| `/admin` | Painel Admin (blog + leads) |

---

## Design System Implementado
- **Background:** #160907
- **CTA:** #CA6E23 (texto #160907)
- **Gradiente:** linear-gradient(135deg, #8C3A11 0%, #A34E1B 45%, #CA6E23 100%)
- **Fontes:** Sora (títulos) + Inter (corpo)
- **Animações:** Framer Motion (scroll reveal, parallax, count-up)
- **Grid:** 12 colunas desktop / 8 tablet / 4 mobile, sistema 8pt

---

## O que foi implementado (v2 — data: Abr/2026)

### Frontend
- [x] Navbar fixa com dropdown Soluções e CTA
- [x] Home completa: Hero parallax, Problema, Pilares, Método, KPIs count-up, Oferta, FAQ, CTA banner
- [x] Página de Soluções (hub)
- [x] 4 páginas de solução (IA-first, Growth, SEO, CRM) via template compartilhado
- [x] 3 landing pages de conversão (Performance, SEO, CRM)
- [x] Página Método com 4 etapas + rituais + governança IA
- [x] Blog com listagem, filtro por categoria e post individual
- [x] Página Sobre com princípios e "para quem é"
- [x] Página Contato com formulário
- [x] Landing Diagnóstico (principal conversão)
- [x] Painel Admin (blog CRUD + visualização de leads)
- [x] Formulário de leads (curto + qualificado) em todas as páginas
- [x] Animações de scroll reveal (Framer Motion)
- [x] Parallax no Hero
- [x] KPIs com count-up
- [x] Footer completo com links organizados

- [x] Landing page **IA Aplicada ao Negócio** (`/ia-aplicada`) — 9 seções completas: Hero, Stats, Sinais, Entregáveis, Método 5 etapas, Use Cases, Pacotes, FAQ accordion (12 perguntas), CTA final
- [x] Landing page **WhatsApp AI** (`/whatsapp-ai`) criada com copy fornecido
- [x] Cards da seção de Pacotes com altura igual (`items-stretch` + `h-full` no wrapper)
- [x] Preços corretos nos pacotes: Starter R$997 · Growth R$1.997 · Scale R$3.497/mês
- [x] Verba de mídia mínima exibida em cada pacote (R$1k / R$3k / R$8k)
- [x] Descrições dos pacotes atualizadas conforme referência do cliente
- [x] Botões 100% arredondados (`rounded-full`) em toda a aplicação
- [x] Texto branco (`text-white`) em botões primários + `hover:brightness-125`
- [x] Correções de deploy: senha admin via `.env`, paginação no backend

### Backend
- [x] Endpoint de leads (POST + GET)
- [x] Blog CRUD completo (create, read, update, delete)
- [x] Suporte a posts publicados/rascunho
- [x] Endpoint de categorias
- [x] Paginação nos endpoints

---

## Backlog Priorizado

### P0 (Crítico — próximas iterações)
- [ ] Autenticação real para o painel admin (JWT ou OAuth)
- [ ] Paginação nos endpoints de blog e leads
- [ ] Proteção CSRF nos formulários

### P1 (Importante)
- [ ] Rastreamento de parâmetros UTM nos formulários de lead
- [ ] Upload de imagens para posts (atualmente só URL)
- [ ] Busca no blog
- [ ] Notificação por email quando um lead é capturado
- [ ] Seção de Cases/Provas (quando o cliente tiver conteúdo real)
- [ ] Página 404 customizada

### P2 (Melhoria)
- [ ] Schema.org markup (Organization + FAQ + Article)
- [ ] Sitemap.xml e robots.txt
- [ ] Google Analytics / GTM
- [ ] Widget WhatsApp flutuante
- [ ] Chatbot IA para qualificação de leads
- [ ] Substituir cases/depoimentos fictícios por dados reais do cliente

---

## Notas Técnicas
- Admin sem autenticação real (senha: polloag2024 hardcoded) — deve ser substituído por JWT em produção
- Blog content suporta HTML (renderizado com dangerouslySetInnerHTML)
- KPIs na Home são placeholders — substituir por dados reais quando disponíveis
- Cases foram removidos do escopo desta versão (a pedido do cliente)
