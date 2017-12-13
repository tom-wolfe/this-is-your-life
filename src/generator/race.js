const random = require('./random');

const races = require('./data/races.json');

module.exports = {
  byName: function (name) {
    return [].concat.apply([], Object.keys(races).map(r => races[r])).filter(r => r.name === name)[0];
  },
  random: function (sources = 'ALL') {
    return random.sourcedElement(races, sources);
  },
  randomSubrace: function (race) {
    return random.element(race.subraces);
  },
  other: function (race, subrace) {
    const r = [];
    if (race.other) {
      r.push(...Object.keys(race.other).map(o => ({ name: o, value: random.element(race.other[o]) })));
    }
    if (subrace && subrace.other) {
      r.push(...Object.keys(subrace.other).map(o => ({ name: o, value: random.element(subrace.other[o]) })));
    }
    return r;
  },
}