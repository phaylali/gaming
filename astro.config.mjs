import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import react from '@astrojs/react';
import icon from 'astro-icon';
import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  site: 'https://gaming.omniversify.com',
  integrations: [tailwind(), compress(), react(), icon(), db()],
  vite: {
    plugins: []
  }
});