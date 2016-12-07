'use strict';

let winston = require('winston');
require('winston-postgresql').PostgreSQL;

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

  winston.add(winston.transports.PostgreSQL, {
    'connString': `${process.env.RDS_USERNAME}:${process.env.RDS_PASSWORD}@${process.env.RDS_HOSTNAME}:${process.env.RDS_PORT}/${process.env.RDS_DBNAME}`,
    'tableName': 'logs'
  });

  winston.info('All log types are being duplicated into DB.');

  if (process.env.DEBUG)
    winston.level = 'debug';

  winston.info('The Winston is launched.');
  winston.debug('The Winston debug mode is switched on.');
};
