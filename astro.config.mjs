// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://sebastrog.github.io",
  base: "/portfolio",
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "IBM Plex Mono",
        cssVariable: "--font-ibm",
        weights: [200, 300, 400, 500, 600, 700],
      },
    ],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
