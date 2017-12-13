const Random = require('./random');
const Sources = require('./sources');
const Classes = require('./data/classes.json');

module.exports = {
  names: function (sources = 'ALL') {
    return Sources.flatData(Classes, sources).map(c => c.name);
  },
  byName: function (name) {
    return [].concat.apply([], Object.keys(Classes).map(r => Classes[r])).filter(r => r.name === name)[0];
  },
  random: function (sources = 'ALL') {
    return Random.sourcedElement(Classes, sources);
  },
  reason: function (cClass) {
    return Random.element(cClass.reasons);
  },
  other: function (cClass) {
    if (!cClass.other) return [];
    return Object.keys(cClass.other).map(o => ({ name: o, value: Random.element(cClass.other[o]) }));
  },
}