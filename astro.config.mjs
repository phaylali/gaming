import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';

import decapCmsOauth from "astro-decap-cms-oauth";

export default defineConfig({
  output: 'hybrid',
  adapter: vercel({
     webAnalytics: { enabled: true }
   }),
  site: 'https://gaming.omniversify.com',
  integrations: [tailwind(), compress(), react(), decapCmsOauth()]
});