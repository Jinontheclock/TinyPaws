import { defineConfig } from "astro/config";

// GitHub Pages project site: https://jinontheclock.github.io/TinyPaws/
export default defineConfig({
  site: "https://jinontheclock.github.io",
  // TINYPAWS_BASE overrides for the portfolio-embedded build (/Portfolio/tinypaws)
  base: process.env.TINYPAWS_BASE || "/TinyPaws",
  output: "static",
  trailingSlash: "always",
});
