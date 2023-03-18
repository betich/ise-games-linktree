import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import sanity from "astro-sanity";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sanity({
      projectId: "svg89wzf",
      dataset: "production",
      apiVersion: "2023-03-18",
      token: process.env.SANITY_TOKEN,
      useCdn: false,
    }),
  ],
});
