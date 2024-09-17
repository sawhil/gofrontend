// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://sawhil.github.io",
  base: "gofrontend",
  integrations: [
    starlight({
      title: "Go FrontEnd",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "JavaScript Questions",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Arrow Functions", slug: "javascript/arrow" },
          ],
        },
      ],
    }),
  ],
});
