const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,
  screenshotsFolder: path.join(__dirname, "cypress", "screenshots"),
  videosFolder: path.join(__dirname, "cypress", "videos"),
  screenshotOnRunFailure: true,
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners hereі
    },
  },
});
