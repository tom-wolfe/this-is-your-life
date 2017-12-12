const sources = require('./sources');

function numberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function element(array) {
  return array[numberBetween(0, array.length - 1)];
}

module.exports = {
  numberBetween,
  element,
  sourcedElement: function (d, s) {
    return element(sources.flatData(d, s));
  },
  dice: function (roll) {
    const i = roll.toLowerCase().split('d').map(Number);
    return [...new Array(i[0]).keys()].reduce((p, c) => p + numberBetween(1, i[1]), 0);
  },
  percent: function () {
    return numberBetween(1, 100);
  }
}