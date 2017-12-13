const Class = require('./class');
const random = require('./random');
const Trinkets = require('./data/trinkets.json');

module.exports = {
  trinket: function () {
    return random.element(Trinkets);
  },
}
