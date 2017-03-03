'use strict';
const Generators = require('yeoman-generator');
const extend = require('deep-extend');

class AppGenerator extends Generators.Base {

  constructor(args, options) {
    super(args, options);
  }

  prompting() {
    return this.prompt([{
      type: 'input',
      name: 'appName',
      message: 'Your project name?',
      default: this.appname,
    }]).then((answers) => {
      this.appName = answers.name;
    });
  }

  writing() {
    this.log('copy files', this.sourceRoot());
    this.fs.copy(this.templatePath('**/*'), this.destinationRoot());
    this.fs.copy(this.templatePath('.*'), this.destinationRoot());

    this._modifyJSON('package.json', {
      name: this.appName
    });
  }

  _modifyJSON(filePath, extendJSON) {
    const json = this.fs.readJSON(this.destinationPath(filePath), {});
    extend(json, extendJSON);
    this.fs.writeJSON(this.destinationPath(filePath), json);
  }

  end() {
    this.log('copy 完成，建议使用 tnpm ii 快速安装依赖包');
  }
}

module.exports = AppGenerator;
