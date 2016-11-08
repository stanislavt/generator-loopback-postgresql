'use strict';

module.exports = function(server) {
  // Install a `/` route that returns server status
  /* eslint-disable */
  let router = server.loopback.Router();
  /* eslint-enable */
  router.get('/', server.loopback.status());
  server.use(router);
};
