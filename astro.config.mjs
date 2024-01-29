import { defineConfig } from 'astro/config';
import metaTags from "astro-meta-tags";
import sitemap from '@astrojs/sitemap';
import icon from "astro-icon";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.example.com',
  integrations: [metaTags(), icon(), sitemap(), tailwind()]
});