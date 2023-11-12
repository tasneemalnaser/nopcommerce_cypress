const { defineConfig } = require("cypress");
module.exports = defineConfig({
  viewportWidth: 1500,
  viewportHeight: 860,
})

module.exports = defineConfig({
  pageLoadTimeout: 20000,

  chromeWebSecurity: false,
 
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});



