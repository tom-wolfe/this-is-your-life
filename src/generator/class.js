const random = require('./random');
const classes = require('./data/classes.json');

module.exports = {
  byName: function (name) {
    return [].concat.apply([], Object.keys(classes).map(r => classes[r])).filter(r => r.name === name)[0];
  },
  random: function (sources = 'ALL') {
    return random.sourcedElement(classes, sources);
  },
  reason: function (cClass) {
    return random.element(cClass.reasons);
  },
  other: function (cClass) {
    if (!cClass.other) return [];
    return Object.keys(cClass.other).map(o => ({ name: o, value: random.element(cClass.other[o]) }));
  },
}