import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://stratexim.com',
  integrations: [
    sitemap({
      // The legal pages are `noindex` (see LegalLayout.astro) — keep them out of the sitemap.
      filter: (page) => !/\/(privacy|ochrana-udaju|datenschutz)\/?$/.test(page),
      // Path segment → hreflang code. `cz` is the URL segment we show Czech
      // visitors; `cs` is the correct ISO 639-1 language code for hreflang.
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', cz: 'cs', de: 'de' },
      },
    }),
  ],
});
