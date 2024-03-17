import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  experimental: {
    viewTransitions: true,
  },
  output: 'static',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  site: 'https://gaming.omniversify.com',
  
  integrations: [tailwind(), compress(), react(),],
  async rewrites(){
    return [
      {
        source:"/admin",
        destination:"/admin/index.html"
      }
    ]
  },
  redirects: {
    "/admin/index.html":"/admin"
  }
});
