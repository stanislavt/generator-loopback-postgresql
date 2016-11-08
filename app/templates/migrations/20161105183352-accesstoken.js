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
  db.createTable('accesstoken', {
    id: {type: 'string', primaryKey: true, notNull: true},
    userid: 'int',
    ttl: {type: 'int', defaultValue: 1209600},
    created: 'timestamp with time zone'
  }, cb)
};

exports.down = function(db, cb) {
  db.dropTable('accesstoken', cb);
};
