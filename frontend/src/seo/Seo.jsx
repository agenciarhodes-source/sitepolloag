import { SITE } from '@/seo/config';

// React 19 move <title>, <meta> e <link> para o <head> automaticamente.
// data-seo marca as tags para que o index.js remova as cópias vindas do HTML pré-renderizado.
export default function Seo({ path, title, description, noindex = false, schema, image }) {
  const url = `${SITE.url}${path === '/' ? '/' : path}`;
  const img = `${SITE.url}${image || SITE.ogImage}`;
  const schemas = Array.isArray(schema) ? schema : schema ? [schema] : [];

  return (
    <>
      <title data-seo="">{title}</title>
      <meta data-seo="" name="description" content={description} />
      <meta data-seo="" name="robots" content={noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'} />
      {!noindex && <link data-seo="" rel="canonical" href={url} />}
      <meta data-seo="" property="og:type" content="website" />
      <meta data-seo="" property="og:locale" content="pt_BR" />
      <meta data-seo="" property="og:site_name" content={SITE.name} />
      <meta data-seo="" property="og:title" content={title} />
      <meta data-seo="" property="og:description" content={description} />
      <meta data-seo="" property="og:url" content={url} />
      <meta data-seo="" property="og:image" content={img} />
      <meta data-seo="" property="og:image:width" content="1200" />
      <meta data-seo="" property="og:image:height" content="630" />
      <meta data-seo="" name="twitter:card" content="summary_large_image" />
      <meta data-seo="" name="twitter:title" content={title} />
      <meta data-seo="" name="twitter:description" content={description} />
      <meta data-seo="" name="twitter:image" content={img} />
      {schemas.map((s, i) => (
        <script
          key={i}
          data-seo=""
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  );
}
