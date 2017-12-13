const random = require('./random');
const backgrounds = require('./data/backgrounds.json');

module.exports = {
  byName: function (name) {
    return [].concat.apply([], Object.keys(backgrounds).map(r => backgrounds[r])).filter(r => r.name === name)[0];
  },
  reason: function (background) {
    return random.element(background.reasons);
  },
  trait: function (background) {
    return random.element(background.traits || []);
  },
  ideal: function (background, alignment) {
    const ideals = background.ideals.filter(i => i.alignments.length === 0 || i.alignments.includes(alignment.abbreviation));
    console.log(ideals);
    return random.element(ideals);
  },
  bond: function (background) {
    return random.element(background.bonds || []);
  },
  flaw: function (background) {
    return random.element(background.flaws || []);
  },
  other: function (background) {
    if (!background.other) return [];
    return Object.keys(background.other).map(o => ({ name: o, value: random.element(background.other[o]) }));
  },
  random: function (sources = 'ALL') {
    return random.sourcedElement(backgrounds, sources);
  }
}