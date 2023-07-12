import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  inlineStylesheets: "auto",
  // NOTE: This will be the default in 3.x
  // See https://github.com/withastro/astro/releases/tag/astro%402.4.0
  scopedStyleStrategy: "class",
  site: "https://cssclub.nyc",
});
