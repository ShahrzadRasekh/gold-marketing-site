export function GET() {
  const base = 'https://example.com'; // change after deploy
  const urls = [
    '', // home
    '/products',
    '/about',
    '/contact',
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (u) => `<url>
  <loc>${base}${u}</loc>
  <changefreq>weekly</changefreq>
  <priority>${u === '' ? '1.0' : '0.8'}</priority>
</url>`
    )
    .join('\n')}
</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
