import type { APIRoute } from 'astro';
import { HOME_PATH, translations, type Lang } from '../i18n/translations';

/**
 * Sitemap for the three language home pages, served at /sitemap.xml.
 *
 * Hand-rolled rather than via @astrojs/sitemap because that integration always
 * emits a `sitemap-index.xml` + numbered chunks, and for three URLs a plain
 * single sitemap is both simpler and the URL search engines already know.
 * It also lets us emit `x-default`, which the integration does not support.
 *
 * The legal pages are deliberately absent: LegalLayout sets `noindex, follow`,
 * and a noindex URL does not belong in a sitemap. See the SITEMAP_COVERAGE
 * check below, which fails the build if a new indexable page is ever added
 * without being represented here.
 */

const SITE = 'https://stratexim.com';

/** Path segment → ISO 639-1 code. `/cz/` is the URL we show Czech visitors; `cs` is the language. */
const HREFLANG: Record<Lang, string> = { en: 'en', cz: 'cs', de: 'de' };

const LANGS = Object.keys(translations) as Lang[];

const abs = (path: string) => `${SITE}${path}`;

/** Every page carries the full alternate set plus x-default → English. */
const alternates = () =>
  [
    ...LANGS.map((l) => `    <xhtml:link rel="alternate" hreflang="${HREFLANG[l]}" href="${abs(HOME_PATH[l])}"/>`),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(HOME_PATH.en)}"/>`,
  ].join('\n');

const urlEntry = (lang: Lang) =>
  `  <url>
    <loc>${abs(HOME_PATH[lang])}</loc>
${alternates()}
  </url>`;

/*
 * Guard against the failure mode this file replaced: a page existing on the site
 * but silently missing from a hand-maintained sitemap. Any .astro page under
 * src/pages that is neither a listed home page nor a known noindex legal page
 * fails the build with an explicit message.
 */
const NOINDEX_PAGES = /(privacy|ochrana-udaju|datenschutz)\.astro$/;

const routeOf = (file: string) =>
  '/' + file.replace(/^\.\//, '').replace(/\.astro$/, '').replace(/(^|\/)index$/, '$1');

const untracked = Object.keys(import.meta.glob('./**/*.astro'))
  .filter((f) => !NOINDEX_PAGES.test(f))
  .map(routeOf)
  .map((r) => (r.endsWith('/') ? r : `${r}/`))
  .filter((r) => !Object.values(HOME_PATH).includes(r as (typeof HOME_PATH)[Lang]));

if (untracked.length > 0) {
  throw new Error(
    `sitemap.xml is missing indexable page(s): ${untracked.join(', ')}. ` +
      `Add them to this endpoint, or mark them noindex and list them in NOINDEX_PAGES.`
  );
}

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${LANGS.map(urlEntry).join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
