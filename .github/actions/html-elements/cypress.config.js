module.exports = {
    e2e: {
      baseUrl: "http://localhost:8080",
      specPattern: "cypress/integration/**/*.test.js",
      video: true,
      screenshotsFolder: "cypress/screenshots",
      videosFolder: "cypress/videos",
      viewportWidth: 1280,
      viewportHeight: 720,
      supportFile: false,
      reporter: 'junit',
    }
  }