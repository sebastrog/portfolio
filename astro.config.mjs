import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

const isProd = import.meta.env.PROD;

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://sebastrog.github.io",
  base: isProd ? "/portfolio" : "",
  output: "static",
  build: {
    assets: 'assets'
  }
});

