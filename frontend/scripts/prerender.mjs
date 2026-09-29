// Pré-renderiza cada rota pública em HTML estático e gera robots.txt, sitemap.xml e .htaccess.
// Uso: npm run build:static   (ou: npm run build && npm run prerender)
// Requer um Chromium: usa o do Playwright ou o caminho em CHROME_PATH.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { chromium } from 'playwright-core';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const BUILD = path.join(ROOT, 'build');
const PORT = 5077;

// Lê a configuração de SEO do app (src/seo/config.js) sem precisar do webpack.
const tmp = path.join(os.tmpdir(), `seo-config-${process.pid}.mjs`);
fs.copyFileSync(path.join(ROOT, 'src/seo/config.js'), tmp);
const { SITE, PRERENDER_ROUTES, INDEXABLE_ROUTES } = await import(pathToFileURL(tmp).href);
fs.unlinkSync(tmp);

const shell = fs.readFileSync(path.join(BUILD, 'index.html'));
if (shell.includes('data-seo')) {
  console.error('build/index.html já foi pré-renderizado. Rode "npm run build" antes (ou use "npm run build:static").');
  process.exit(1);
}
const MIME = { '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.ico': 'image/x-icon',
  '.json': 'application/json', '.woff2': 'font/woff2', '.woff': 'font/woff', '.svg': 'image/svg+xml' };

const server = http.createServer((req, res) => {
  const url = decodeURIComponent(req.url.split('?')[0]);
  const file = path.join(BUILD, url);
  if (url !== '/' && fs.existsSync(file) && fs.statSync(file).isFile()) {
    res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream' });
    return fs.createReadStream(file).pipe(res);
  }
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(shell); // sempre o shell original, nunca uma página já pré-renderizada
});
await new Promise((r) => server.listen(PORT, '127.0.0.1', r));

const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH || undefined });
const context = await browser.newContext({ userAgent: 'Mozilla/5.0 pollo-prerender', viewport: { width: 1366, height: 900 } });
// Nada de rede externa durante o pré-render (analytics, APIs).
await context.route('**/*', (r) => (r.request().url().startsWith(`http://127.0.0.1:${PORT}`) ? r.continue() : r.abort()));

const MEDIA = path.join(BUILD, 'static/media');
const FONT_PRELOADS = fs.existsSync(MEDIA)
  ? fs.readdirSync(MEDIA).filter((f) => /^(sora-latin-700|inter-latin-400)-normal\..*\.woff2$/.test(f)).map((f) => `/static/media/${f}`)
  : [];

const outFile = (route) => (route === '/' ? 'index.html' : route === '/404' ? '404.html' : `${route.slice(1)}.html`);

let failed = 0;
for (const route of [...PRERENDER_ROUTES, '/404']) {
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  await page.goto(`http://127.0.0.1:${PORT}${route === '/404' ? '/pagina-inexistente-404' : route}`, { waitUntil: 'networkidle' });
  // Rola a página inteira para disparar as animações de entrada: o texto fica visível no HTML salvo.
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 400) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 120)); }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(3000); // contadores animados (CountUp) terminam em 2,5 s
  const html = await page.evaluate((preloads) => {
    // Pré-carrega as fontes do título e do texto: evita que o LCP espere o CSS para descobrir a fonte.
    for (const href of preloads) {
      const l = document.createElement('link');
      Object.assign(l, { rel: 'preload', as: 'font', type: 'font/woff2', href, crossOrigin: 'anonymous' });
      document.head.prepend(l);
    }
    document.querySelectorAll('script[type="application/ld+json"]:not([data-seo])').forEach((s) => s.remove());
    // Elementos ainda escondidos pela animação de entrada ficam visíveis no HTML estático.
    document.querySelectorAll('main [style*="opacity: 0"]').forEach((el) => { el.style.opacity = ''; el.style.transform = ''; });
    return '<!doctype html>\n' + document.documentElement.outerHTML;
  }, FONT_PRELOADS);
  const title = await page.title();
  const words = await page.evaluate(() => (document.querySelector('main')?.innerText || '').split(/\s+/).filter(Boolean).length);
  if (errors.length || words < 20) { failed++; console.error(`✗ ${route}: ${errors.join(' | ') || 'conteúdo vazio'}`); }
  fs.mkdirSync(path.dirname(path.join(BUILD, outFile(route))), { recursive: true });
  fs.writeFileSync(path.join(BUILD, outFile(route)), html);
  console.log(`✓ ${route.padEnd(16)} → ${outFile(route).padEnd(20)} ${String(words).padStart(5)} palavras  ${title}`);
  await page.close();
}
await browser.close();
server.close();

// robots.txt e sitemap.xml
const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(path.join(BUILD, 'robots.txt'),
  `User-agent: *\nAllow: /\nDisallow: /admin\n\nSitemap: ${SITE.url}/sitemap.xml\n`);
const priority = (r) => (r === '/' ? '1.0' : ['/trafego-pago', '/redes-sociais', '/whatsapp-ia', '/ia-aplicada', '/crm', '/seo'].includes(r) ? '0.9' : '0.6');
fs.writeFileSync(path.join(BUILD, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  INDEXABLE_ROUTES.map((r) => `  <url><loc>${SITE.url}${r}</loc><lastmod>${today}</lastmod><priority>${priority(r)}</priority></url>`).join('\n') +
  `\n</urlset>\n`);
fs.copyFileSync(path.join(ROOT, 'deploy/.htaccess'), path.join(BUILD, '.htaccess'));

console.log(`\nrobots.txt, sitemap.xml (${INDEXABLE_ROUTES.length} URLs) e .htaccess gerados em build/`);
if (failed) { console.error(`${failed} rota(s) com erro`); process.exit(1); }
