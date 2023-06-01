import { defineConfig } from "cypress";

export default defineConfig({
  fixturesFolder: '/tests/cypress/fixtures',
  videosFolder: '/tests/cypress/videos',
  screenshotsFolder: '/tests/cypress/screenshots',
  supportFolder: '/tests/cypress/support',
  downloadsFolder: '/tests/cypress/downloads',

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.kitchenaid.com.br',
    viewportHeight: 768,
    viewportWidth: 1366
  },
});
