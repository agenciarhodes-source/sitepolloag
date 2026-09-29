// GA4 opcional: definir REACT_APP_GA_ID (ex.: G-XXXXXXX) no build para ativar.
const GA_ID = process.env.REACT_APP_GA_ID;

export function initAnalytics() {
  if (!GA_ID || typeof window === 'undefined' || window.gtag || navigator.userAgent.includes('pollo-prerender')) return;
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID);
  // Cliques em WhatsApp e nos botões de CTA (chat FlipForm) em qualquer página
  document.addEventListener('click', (e) => {
    const a = e.target.closest && e.target.closest('a[href*="wa.me"], a[href*="app.flipform.com.br"]');
    if (!a) return;
    const name = a.href.includes('wa.me') ? 'click_whatsapp' : 'click_cta';
    trackEvent(name, { link_url: a.href, link_text: (a.innerText || '').trim().slice(0, 60), page_path: window.location.pathname });
  });
}

export function trackEvent(name, params = {}) {
  if (typeof window !== 'undefined' && window.gtag) window.gtag('event', name, params);
}
