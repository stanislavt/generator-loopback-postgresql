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
  db.createTable('role', {
    id: {type: 'int', notNull: true, primaryKey: true, autoIncrement: true},
    name: {type: 'string', notNull: true},
    description: 'text',
    created: 'timestamp with time zone',
    modified: 'timestamp with time zone'
  }, cb);
};

exports.down = function(db, cb) {
  db.dropTable('role', cb);
};
