const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "d1a58g",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
