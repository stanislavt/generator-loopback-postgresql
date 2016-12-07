'use strict';

if (process.env.NODE_ENV != 'production')
  require('dotenv-safe').load();

let loopback = require('loopback');
let boot = require('loopback-boot');
let winston = require('winston');
let app = module.exports = loopback();

app.start = function() {
  return app.listen(function() {
    app.emit('started');
    let baseUrl = app.get('url').replace(/\/$/, '');
    winston.info('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      let explorerPath = app.get('loopback-component-explorer').mountPath;
      winston.info('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

boot(app, __dirname, function(err) {
  if (err) throw err;

  if (require.main === module)
    app.start();
});
