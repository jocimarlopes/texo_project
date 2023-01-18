import { defineConfig } from "cypress";

export default defineConfig({
  viewportHeight: 768,
  viewportWidth: 1280,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
