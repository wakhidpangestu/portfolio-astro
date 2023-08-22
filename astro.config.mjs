import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://wakhidpangestu.vercel.app",
  integrations: [
    tailwind(),
    mdx({
      shikiConfig: {
        theme: "github-dark",
      },
    }),
    react(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    sitemap({
      filter: (page) => page !== "https://wakhidpangestu.vercel.app/belajar/" && page !== "https://wakhidpangestu.vercel.app/_image/",
    }),
  ],
  output: "server",
  adapter: vercel(),
});
