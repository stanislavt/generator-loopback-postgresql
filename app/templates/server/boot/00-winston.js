'use strict';

let winston = require('winston');
let winstonPostgreSQLTransport = require("winston-postgresql").PostgreSQL;

module.exports = app => {
  winston.remove(winston.transports.Console);
  winston.add(winston.transports.Console, {
    colorize: true
  });
  winston.add(winston.transports.File, {
    filename: './logger.log',
    maxsize: 10240000,
    tailable: true
  });
  winston.add(winston.transports.PostgreSQL, {
    "connString": `${process.env.RDS_USERNAME}:${process.env.RDS_PASSWORD}@${process.env.RDS_HOSTNAME}:${process.env.RDS_PORT}/${process.env.RDS_DBNAME}`,
    "tableName": "logs"
  });

  if (process.env.DEBUG)
    winston.level = 'debug';

  winston.info(`The Winston is launched.`);
  winston.debug(`The Winston debug mode is switched on.`);
};
