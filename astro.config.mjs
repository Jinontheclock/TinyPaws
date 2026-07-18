import { defineConfig } from "astro/config";

// GitHub Pages project site: https://jinontheclock.github.io/TinyPaws-web/
export default defineConfig({
  site: "https://jinontheclock.github.io",
  base: "/TinyPaws-web",
  output: "static",
  trailingSlash: "always",
});
