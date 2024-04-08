import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import react from '@astrojs/react';
import Icons from 'unplugin-icons/vite'

export default defineConfig({
  
  
  site: 'https://gaming.omniversify.com',
  integrations: [tailwind(), compress(), react()],
  vite: {
    plugins: [
      Icons({
        compiler: 'astro',
      }),
    ],
  },
});