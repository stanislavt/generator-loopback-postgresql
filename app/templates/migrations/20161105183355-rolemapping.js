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
  db.createTable('rolemapping', {
    id: {type: 'int', notNull: true, primaryKey: true, autoIncrement: true},
    principaltype: 'string',
    principalid: 'int',
    roleid: 'int'
  })
  .then(result => {
      return db.addIndex('rolemapping', 'rolemapping_principalid_idx', 'principalid', cb);
    })
  .catch(err => cb(err));
};

exports.down = function(db, cb) {
  db.dropTable('rolemapping', cb);
};