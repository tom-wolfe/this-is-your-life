const Random = require('./random');
const Sources = require('./sources');
const Backgrounds = require('./data/backgrounds.json');

module.exports = {
  names: function (sources = 'ALL') {
    return Sources.flatData(Backgrounds, sources).map(b => b.name);
  },
  byName: function (name) {
    return [].concat.apply([], Object.keys(Backgrounds).map(r => Backgrounds[r])).filter(r => r.name === name)[0];
  },
  reason: function (background) {
    return Random.element(background.reasons);
  },
  trait: function (background) {
    return Random.element(background.traits || []);
  },
  ideal: function (background, alignment) {
    const ideals = background.ideals.filter(i => i.alignments.length === 0 || i.alignments.includes(alignment.abbreviation));
    return Random.element(ideals);
  },
  bond: function (background) {
    return Random.element(background.bonds || []);
  },
  flaw: function (background) {
    return Random.element(background.flaws || []);
  },
  other: function (background) {
    if (!background.other) return [];
    return Object.keys(background.other).map(o => ({ name: o, value: Random.element(background.other[o]) }));
  },
  random: function (sources = 'ALL') {
    return Random.sourcedElement(Backgrounds, sources);
  }
}