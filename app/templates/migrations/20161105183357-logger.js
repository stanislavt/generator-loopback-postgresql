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
  db.createTable('logs', {
    id: {type: 'int', notNull: true, primaryKey: true, autoIncrement: true},
    level: 'string',
    msg: 'string',
    meta: 'json',
    ts: {type: 'timestamp with time zone', defaultValue: 'now'}
  }, cb)
};

exports.down = function(db, cb) {
  db.dropTable('logs', cb);
};
