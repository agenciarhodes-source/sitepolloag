import "@/App.css";
import { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, MemoryRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

// Build de prévia (REACT_APP_PREVIEW=true): navegação em memória, para funcionar como um único arquivo HTML.
export const PREVIEW = process.env.REACT_APP_PREVIEW === "true";
const Router = PREVIEW ? MemoryRouter : BrowserRouter;
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/seo/Seo";
import { ROUTE_META, SITE, ORGANIZATION_SCHEMA } from "@/seo/config";

// Cada página vira um pacote separado: o visitante só baixa o JavaScript da página aberta.
// lazyPage guarda o módulo carregado: com preload() antes do primeiro render (index.js),
// a página aparece direto, sem piscar o fallback por cima do HTML pré-renderizado.
function lazyPage(loader) {
  let Loaded = null;
  const load = () => loader().then((m) => { Loaded = m.default; return m; });
  const Lazy = lazy(load);
  const Page = (props) => (Loaded ? <Loaded {...props} /> : <Lazy {...props} />);
  Page.preload = load;
  return Page;
}

const Home = lazyPage(() => import("@/pages/Home"));
const Solucoes = lazyPage(() => import("@/pages/Solucoes"));
const LandingSEO = lazyPage(() => import("@/pages/LandingSEO"));
const LandingCRM = lazyPage(() => import("@/pages/LandingCRM"));
const Metodo = lazyPage(() => import("@/pages/Metodo"));
const Blog = lazyPage(() => import("@/pages/Blog"));
const BlogPost = lazyPage(() => import("@/pages/BlogPost"));
const Sobre = lazyPage(() => import("@/pages/Sobre"));
const Contato = lazyPage(() => import("@/pages/Contato"));
const Diagnostico = lazyPage(() => import("@/pages/Diagnostico"));
const LandingTrafegoPago = lazyPage(() => import("@/pages/LandingTrafegoPago"));
const LandingWhatsApp = lazyPage(() => import("@/pages/LandingWhatsApp"));
const LandingIA = lazyPage(() => import("@/pages/LandingIA"));
const LandingRedes = lazyPage(() => import("@/pages/LandingRedes"));
const NotFound = lazyPage(() => import("@/pages/NotFound"));

// Páginas antigas que disputavam o mesmo termo: redirecionadas para a página principal do serviço.
// O .htaccess faz o mesmo com 301 no servidor.
export const REDIRECTS = {
  "/performance": "/trafego-pago",
  "/solucoes/growth-performance": "/trafego-pago",
  "/solucoes/ia-first": "/ia-aplicada",
  "/solucoes/crm-base": "/crm",
  "/solucoes/seo-conteudo": "/seo",
};

// Página a pré-carregar para cada rota (usado no index.js antes do primeiro render).
const ROUTE_PAGES = {
  "/": Home, "/solucoes": Solucoes, "/seo": LandingSEO, "/crm": LandingCRM, "/metodo": Metodo,
  "/conteudos": Blog, "/sobre": Sobre, "/contato": Contato, "/diagnostico": Diagnostico,
  "/trafego-pago": LandingTrafegoPago, "/whatsapp-ia": LandingWhatsApp, "/ia-aplicada": LandingIA,
  "/redes-sociais": LandingRedes,
};

export function preloadRoute(pathname) {
  if (PREVIEW) pathname = "/";
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : "/";
  if (REDIRECTS[path]) return Promise.resolve();
  const page = ROUTE_PAGES[path] || (path.startsWith("/conteudos/") ? BlogPost : NotFound);
  return page.preload().catch(() => {});
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  // Na prévia, links âncora (#pacotes, #servicos…) rolam até a seção dentro da própria página.
  useEffect(() => {
    if (!PREVIEW) return undefined;
    const onClick = (e) => {
      const a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a || a.getAttribute("href").startsWith("#/")) return;
      const el = document.getElementById(a.getAttribute("href").slice(1));
      if (el) { e.preventDefault(); el.scrollIntoView({ behavior: "smooth" }); }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}

function RouteSeo() {
  const { pathname } = useLocation();
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : "/";
  const meta = ROUTE_META[path];
  if (!meta) return null; // 404 e posts do blog definem o próprio SEO

  const schema = [ORGANIZATION_SCHEMA];
  if (path !== "/") {
    schema.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: `${SITE.url}/` },
        { "@type": "ListItem", position: 2, name: meta.title.split(" | ")[0].split(" — ")[0], item: `${SITE.url}${path}` },
      ],
    });
  }
  return <Seo path={path} {...meta} schema={schema} />;
}

function Layout({ children }) {
  return (
    <>
      <RouteSeo />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Layout>
          <Suspense fallback={<div className="min-h-screen" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/solucoes" element={<Solucoes />} />
              <Route path="/seo" element={<LandingSEO />} />
              <Route path="/crm" element={<LandingCRM />} />
              <Route path="/metodo" element={<Metodo />} />
              <Route path="/conteudos" element={<Blog />} />
              <Route path="/conteudos/:slug" element={<BlogPost />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/diagnostico" element={<Diagnostico />} />
              <Route path="/trafego-pago" element={<LandingTrafegoPago />} />
              <Route path="/whatsapp-ia" element={<LandingWhatsApp />} />
              <Route path="/ia-aplicada" element={<LandingIA />} />
              <Route path="/redes-sociais" element={<LandingRedes />} />
              {Object.entries(REDIRECTS).map(([from, to]) => (
                <Route key={from} path={from} element={<Navigate to={to} replace />} />
              ))}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
