import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  site: "https://tustoz-portfolio.vercel.app",
  integrations: [tailwind(), sitemap({
    changefreq: "weekly",
    priority: 0.7,
    lastmod: new Date(),
    entryLimit: 10000
  }), robotsTxt(), compressor({
    gzip: true,
    brotli: true
  })]
});