'use strict';

let generators = require('yeoman-generator');
let configs = {};

module.exports = generators.Base.extend({
  prompting: function() {
    return this.prompt([{
      type: 'list',
      name: 'version',
      message: 'What version of loopback do you prefer?',
      choices: ['2', '3']
    }]).then(function(answers) {
      configs = answers;
    }.bind(this));
  },
  writing: function() {
    // Copy main files
    this.directory('./loopback', './');
    this.fs.copyTpl(
      this.templatePath('./loopback/.env.example'),
      this.destinationPath('.env')
    );

    this.fs.copyTpl(
      this.templatePath('./winston/'),
      this.destinationPath('./server/boot/')
    );

    // Copy migrations
    this.fs.copyTpl(
      this.templatePath('./migrations/'),
      this.destinationPath('./migrations/')
    );
    this.fs.copyTpl(
      this.templatePath('./migrations/database.example.json'),
      this.destinationPath('./migrations/database.json')
    );
  },
  install: function() {
    this.npmInstall('loopback@'+configs.version, {'save': true});
    this.spawnCommandSync('npm', ['install']);
    this.spawnCommandSync('mkdir', ['runtime']);
  }
});
