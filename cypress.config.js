const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,
  screenshotsFolder: "E://cypress_test/cypress/screenshots",
  videosFolder: "E://cypress_test/cypress/videos",
  screenshotOnRunFailure: true,
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
