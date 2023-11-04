const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'tu2rbb',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
