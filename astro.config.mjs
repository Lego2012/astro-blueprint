// IMPORTS
import { defineConfig } from 'astro/config';
import metaTags from "astro-meta-tags";
import sitemap from '@astrojs/sitemap';
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
   site: 'https://www.example.com',
   vite: {
      plugins: [tailwindcss()],
   },
   // Markdown-Plugin konfigurieren
   markdown: {
      shikiConfig: {
         theme: "one-dark-pro",
         wrap: true,
      },
   },
   // Aszro Plugins konfigurieren
   integrations: [
      metaTags(), icon(), sitemap(), mdx()]
});
