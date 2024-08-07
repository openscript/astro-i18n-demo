import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import { C } from './src/configuration';
import search from './src/integrations/search';
import preact from "@astrojs/preact";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  build: {
    format: 'file'
  },
  i18n: {
    defaultLocale: C.DEFAULT_LOCALE,
    locales: Object.keys(C.LOCALES)
  },
  integrations: [
    // Local integrations
    search(),
    // Official integrations
    mdx(),
    preact(),
    sitemap({ i18n: { defaultLocale: C.DEFAULT_LOCALE, locales: C.LOCALES } })
  ],
});
