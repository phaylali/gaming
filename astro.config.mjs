import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import react from '@astrojs/react';
import icon from 'astro-icon';

export default defineConfig({
  
  
  site: 'https://gaming.omniversify.com',
  integrations: [tailwind(), compress(), react(), icon()],
  vite: {
    plugins: [
      
    ],
  },
});