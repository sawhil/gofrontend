import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://sawhil.github.io",
  base: "/gofrontend",
  integrations: [
    react(),
    tailwind(),
    starlight({
      title: "Go FrontEnd",
      sidebar: [
        // {
        //   label: "Browser Internals",
        //   items: [
        //     // Each item here is one entry in the navigation menu.
        //     { label: "Introduction", slug: "browser-internals/introduction" },
        //     {
        //       label: "What is a browser ?",
        //       slug: "browser-internals/what-is-a-browser",
        //     },
        //   ],
        // },
        // {
        //   label: "JavaScript Questions",
        //   items: [
        //     // Each item here is one entry in the navigation menu.
        //     { label: "Introduction", slug: "javascript/introduction" },
        //     { label: "Arrow Functions", slug: "javascript/arrow" },
        //   ],
        // },
        {
          label: "Machine Coding",
          items: [
            // Each item here is one entry in the navigation menu.
            // { label: "Introduction", slug: "machine-coding/introduction" },
            {
              label: "Like Button",
              slug: "machine-coding/like-button",
            },
          ],
        },
        // {
        //   label: "System Design",
        //   items: [
        //     // Each item here is one entry in the navigation menu.
        //     { label: "Introduction", slug: "system-design/introduction" },
        //     {
        //       label: "Functional Requirements",
        //       slug: "system-design/functional",
        //     },
        //   ],
        // },
      ],
    }),
  ],
});
