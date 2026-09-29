import React from "react";
import ReactDOM from "react-dom/client";
// Fontes hospedadas no próprio site (sem bloquear a renderização com o Google Fonts)
import "@fontsource/inter/latin-300.css";
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-600.css";
import "@fontsource/inter/latin-700.css";
import "@fontsource/sora/latin-400.css";
import "@fontsource/sora/latin-500.css";
import "@fontsource/sora/latin-600.css";
import "@fontsource/sora/latin-700.css";
import "@fontsource/sora/latin-800.css";
import "@/index.css";
import App, { preloadRoute } from "@/App";
import { initAnalytics } from "@/lib/analytics";

// O HTML pré-renderizado já traz title/meta/schema para os buscadores.
// O React vai recriá-los ao montar; removemos as cópias estáticas para não duplicar.
initAnalytics();

// Carrega o JavaScript da página atual antes de montar, para trocar o HTML estático sem piscar.
preloadRoute(window.location.pathname).then(() => {
  document.querySelectorAll("[data-seo]").forEach((el) => el.remove());
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
});
