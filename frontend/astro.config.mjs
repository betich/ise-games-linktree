import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { astroImageTools } from "astro-imagetools";

import sanity from "astro-sanity";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    astroImageTools,
    sanity({
      projectId: "svg89wzf",
      dataset: "production",
      apiVersion: "2023-03-18",
    }),
  ],
});
