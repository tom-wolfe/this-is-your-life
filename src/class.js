const random = require('./random');

const classes = {
  'PHB': [
    'Barbarian',
    'Bard',
    'Cleric',
    'Druid',
    'Fighter',
    'Monk',
    'Paladin',
    'Ranger',
    'Rogue',
    'Sorcerer',
    'Warlock',
    'Wizard'
  ]
};

module.exports = function (sources = 'ALL') {
  return random.sourcedElement(classes, sources);
}