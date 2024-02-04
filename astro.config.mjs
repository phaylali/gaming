import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  experimental: {
    viewTransitions: true,
  },
  site: 'https://gaming.omniversify.com',
  //site:'http://localhost:3000/',
  integrations: [tailwind(), compress(), react(), mdx()],
});
