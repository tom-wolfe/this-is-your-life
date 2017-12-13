const sources = require('./sources');

const Random = require('random-js');
const random = new Random(Random.engines.mt19937().autoSeed());

module.exports = {
  numberBetween: function (min, max) {
    return random.integer(min, max);
  },
  element: function(d) {
    return random.pick(d);
  },
  sourcedElement: function (d, s) {
    return random.pick(sources.flatData(d, s));
  },
  dice: function (roll) {
    const i = roll.toLowerCase().split('d').map(Number);
    return random.dice(i[1], i[0]).reduce((p, c) => p + c, 0);
  },
  percent: function () {
    return random.integer(1, 100);
  },
  bool: function (percent = 50) {
    return random.bool(percent);
  }
}