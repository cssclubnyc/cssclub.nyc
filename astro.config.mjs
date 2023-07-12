import { defineConfig } from "astro/config";

const site =
  process.env.DEPLOY_PRIME_URL !== undefined
    ? process.env.DEPLOY_PRIME_URL
    : "https://cssclub.nyc";

// https://astro.build/config
export default defineConfig({
  inlineStylesheets: "auto",
  // NOTE: This will be the default in 3.x
  // See https://github.com/withastro/astro/releases/tag/astro%402.4.0
  scopedStyleStrategy: "class",
  site,
});
