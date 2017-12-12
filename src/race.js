const random = require('./random');

const races = {
  'EE': [
    'Aarakocra',
    'Air Genasi',
    'Fire Genasi',
    'Water Genasi',
    'Earth Genasi',
    'Goliath'
  ],
  'VGM': [
    'Scourge Aasimar',
    'Protector Aasimar',
    'Fallen Aasimar',
    'Bugbear',
    'Firbolg',
    'Goblin',
    'Hobgoblin',
    'Kenku',
    'Kobold',
    'Lizardfolk',
    'Orc',
    'Tabaxi',
    'Triton',
    'Yuan-ti Pureblood'
  ],
  'PHB': [
    'Dragonborn',
    'Hill Dwarf',
    'Mountain Dwarf',
    'Duergar',
    'Wood Elf',
    'High Elf',
    'Drow',
    'Rock Gnome',
    'Deep Gnome',
    'Forest Gnome',
    'Half-Elf',
    'Stout Halfling',
    'Light Halfling',
    'Half-Orc',
    'Human',
    'Tiefling'
  ],
  'DMG': [
    'Eladrin',
  ],
  'SCG': [
    'Feral Tiefling',
    'Ghostwise Halfling',
  ],
  'TOA': [
    'Tortle'
  ]
};

module.exports = {
  byName: function (name) {
    return [].concat.apply([], Object.keys(races).map(r => races[r])).filter(r => r === name)[0];
  },
  random: function (sources = 'ALL') {
    return random.sourcedElement(races, sources);
  }
}