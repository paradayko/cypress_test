
const { defineConfig } = require('cypress');
const path = require('path');
const fs = require('fs');

const getConfigFile = (env) => {
  const configFilePath = path.join('cypress', 'fixtures', 'Env_Configs', `cypress.${env || 'stage'}.config.json`)
  return (fs.readFileSync(configFilePath)).toString()
}

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
  reportDir: 'cypress/reports',
  overwrite: false,
  html: true,
  json: true
  },
  viewportWidth: 1280,
  viewportHeight: 720,
  screenshotsFolder: "cypress/screenshots",
  videosFolder: "cypress/videos",
  screenshotOnRunFailure: true,
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners hereі
      const configOverrides = getConfigFile(config.env.TEST_ENVIRONMENT)
      config = {...config, ...JSON.parse(configOverrides)}
      return config;
      }
    },
  });
