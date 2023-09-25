const { defineConfig } = require('cypress')

module.exports = defineConfig({
  retries: {
    runMode: 1,
    openMode: 1,
  },
  env: {
    password: '',
  },
  defaultCommandTimeout: 50000,
  pageLoadTimeout: 50000,
  viewportHeight: 800,
  viewportWidth: 1500,
  chromeWebSecurity: false,
  video: false,
  experimentalNetworkStubbing: true,
  watchForFileChanges: true,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      // return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://slas.omniswift.com/',
  },
})
