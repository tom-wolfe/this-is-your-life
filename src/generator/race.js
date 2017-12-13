const random = require('./random');

const races = require('./data/races.json');

module.exports = {
  byName: function (name) {
    return [].concat.apply([], Object.keys(races).map(r => races[r])).filter(r => r.name === name)[0];
  },
  random: function (sources = 'ALL') {
    return random.sourcedElement(races, sources);
  },
  other: function (race) {
    if (!race.other) return [];
    return Object.keys(race.other).map(o => ({ name: o, value: random.element(race.other[o]) }));
  },
}