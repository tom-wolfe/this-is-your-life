const Class = require('./class');
const Item = require('./item');

const alignments = require('./data/alignments.json');

const random = require('./random');

function randomAlignment() {
  const r = random.dice('3d6');
  let a = alignments.LG;
  switch (true) {
    case r < 4: a = (random.bool()) ? alignments.CE : alignments.CN; break;
    case r < 6: a = alignments.LE; break;
    case r < 9: a = alignments.NE; break;
    case r < 13: a = alignments.TN; break;
    case r < 16: a = alignments.NG; break;
    case r < 18: a = (random.bool()) ? alignments.LG : alignments.LN; break;
    case r < 19: a = (random.bool()) ? alignments.CG : alignments.CN; break;
  }
  return a.abbreviation;
}

function byAbbreviation(abbreviation) {
  return alignments[abbreviation];
}

module.exports = {
  all: function (sources = 'ALL') {
    return Object.keys(alignments).map(k => alignments[k]);
  },
  random: randomAlignment,
  byAbbreviation
}
