// helps with next.js not always updating automatically in the browser

// Section 215. Seems like we shouldn't be doing this
module.exports = {
  webpackDevMiddleware: config => {
    config.watchOptions.poll = 300;  // every 300 ms
    return config;
  }
};
