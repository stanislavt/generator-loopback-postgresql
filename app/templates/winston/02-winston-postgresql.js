'use strict';

let winston = require('winston');
require('winston-postgresql').PostgreSQL;

module.exports = (app) => {
  winston.add(winston.transports.PostgreSQL, {
    'connString': `${process.env.RDS_USERNAME}:${process.env.RDS_PASSWORD}@${process.env.RDS_HOSTNAME}:${process.env.RDS_PORT}/${process.env.RDS_DBNAME}`,
    'tableName': 'logs'
  });

  winston.info('All log types are being duplicated into DB.');
};
