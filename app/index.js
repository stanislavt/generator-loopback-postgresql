'use strict';

let generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  writing: function () {
    this.directory('./', './');
  },
  install: function() {
    this.spawnCommand('npm', ['install']);
  }
});
