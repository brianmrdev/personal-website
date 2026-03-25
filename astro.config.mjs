// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://brianmartinez.dev',
  integrations: [
    sitemap(),
  ],
  vite: {
    // @ts-ignore — type mismatch between @tailwindcss/vite (Vite 8) and Astro's bundled Vite version
    plugins: [tailwindcss()],
  },
});
