const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    /*
    By default, Cypress looks for files with .cy.js, .cy.ts, .spec.js, or .spec.ts extensions.
    We can customize this pattern to include other file types or files without extensions.
    */
    specPattern: 'cypress/e2e/**/*',
  },
});
