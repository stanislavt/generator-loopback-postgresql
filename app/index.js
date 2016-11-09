'use strict';

let generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  writing: function () {
    this.directory('./', './');
    this.fs.copyTpl(
      this.templatePath('.env.example'),
      this.destinationPath('.env')
    );
  },
  install: function() {
    this.spawnCommand('npm', ['install']);
  }
});
