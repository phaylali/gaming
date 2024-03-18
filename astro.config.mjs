import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import react from '@astrojs/react';
//import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  
 // output: 'static',
 // adapter: vercel({
 //   webAnalytics: { enabled: true }
 // }),
  site: 'https://gaming.omniversify.com',
  
  integrations: [tailwind(), compress(), react(),],
  
  
  
});
