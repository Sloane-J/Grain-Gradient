// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { modifiedTime, readingTime } from "./src/lib/utils/remarks.mjs";
import { SITE } from "./src/lib/config";
import keystatic from "@keystatic/astro";
import react from "@astrojs/react";
import { loadEnv } from "vite";
import pagefind from "astro-pagefind";

import vercel from "@astrojs/vercel";

const { RUN_KEYSTATIC } = loadEnv(import.meta.env.MODE, process.cwd(), "");

const integrations = [mdx(), sitemap({
  changefreq: 'weekly',
  priority: 0.7,
  lastmod: new Date('2025-06-12'),
}), pagefind()];

if (RUN_KEYSTATIC === "true") {
  integrations.push(react());
  integrations.push(keystatic());
}

// https://astro.build/config
export default defineConfig({
  site: 'http://grainandgradient.vercel.app/',
  base: SITE.basePath,

  markdown: {
    remarkPlugins: [readingTime, modifiedTime],
  },

  experimental: {
    responsiveImages: true,
  },

  image: {},
  integrations,

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel()
});