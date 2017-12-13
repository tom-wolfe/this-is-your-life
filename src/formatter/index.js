const Handlebars = require('handlebars');

Handlebars.registerHelper('lower', require('./helpers/lower'));
Handlebars.registerHelper('compare', require('./helpers/compare'));

const Template = Handlebars.compile(require('./template.handlebars'));

module.exports = function (character) {
  return Template(character);
};