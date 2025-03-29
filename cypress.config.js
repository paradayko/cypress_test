
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,
  screenshotsFolder: (__filename, "cypress", "screenshots"),
  videosFolder: (__filename, "cypress", "videos"),
  screenshotOnRunFailure: true,
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners hereі
    },
    baseUrl: 'https://qauto.forstudy.space'
  },
});
