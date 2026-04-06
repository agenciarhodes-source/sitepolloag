import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Solucoes from "@/pages/Solucoes";
import SolucaoIA from "@/pages/SolucaoIA";
import SolucaoGrowth from "@/pages/SolucaoGrowth";
import SolucaoSEOPage from "@/pages/SolucaoSEOPage";
import SolucaoCRM from "@/pages/SolucaoCRM";
import LandingPerformance from "@/pages/LandingPerformance";
import LandingSEO from "@/pages/LandingSEO";
import LandingCRM from "@/pages/LandingCRM";
import Metodo from "@/pages/Metodo";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Sobre from "@/pages/Sobre";
import Contato from "@/pages/Contato";
import Diagnostico from "@/pages/Diagnostico";
import LandingTrafegoPago from "@/pages/LandingTrafegoPago";
import LandingWhatsApp from "@/pages/LandingWhatsApp";
import Admin from "@/pages/Admin";

function Layout({ children }) {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');
  return (
    <>
      {!isAdmin && <Navbar />}
      <main>{children}</main>
      {!isAdmin && <Footer />}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solucoes" element={<Solucoes />} />
            <Route path="/solucoes/ia-first" element={<SolucaoIA />} />
            <Route path="/solucoes/growth-performance" element={<SolucaoGrowth />} />
            <Route path="/solucoes/seo-conteudo" element={<SolucaoSEOPage />} />
            <Route path="/solucoes/crm-base" element={<SolucaoCRM />} />
            <Route path="/performance" element={<LandingPerformance />} />
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
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
