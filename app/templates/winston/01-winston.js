'use strict';

let winston = require('winston');

module.exports = (app) => {
  winston.remove(winston.transports.Console);
  winston.add(winston.transports.Console, {
    colorize: true
  });
  winston.add(winston.transports.File, {
    filename: './runtime/logs.dat',
    maxsize: 10240000,
    tailable: true
  });

  if (process.env.DEBUG)
    winston.level = 'debug';

  winston.info('The Winston is launched.');
  winston.debug('The Winston debug mode is switched on.');
};
