const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 880,
  viewportWidth: 1280,

  e2e: {
    supportFile: 'cypress/support/e2e.js',
  },
})