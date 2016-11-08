'use strict';

let dbm;
let type;
let seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, cb) {
  db.createTable('user', {
    id: {type: 'int', notNull: true, primaryKey: true, autoIncrement: true},
    realm: 'string',
    username: 'string',
    password: {type: 'string', notNull: true},
    credentials: 'text',
    challenges: 'text',
    email: {type: 'string', notNull: true},
    emailverified: 'boolean',
    verificationtoken: 'string',
    status: 'string',
    created: 'timestamp with time zone',
    lastupdated: 'timestamp with time zone'
  }, cb);
};

exports.down = function(db, cb) {
  return db.dropTable('user', cb);
};
