const random = require('./random');

const aasimarOther = {
  'Angelic Guide': ['Tadriel', 'Myllandra', 'Seraphina', 'Galladia', 'Mykiel', 'Valandras'],
  'Guide Nature': [
    'Bookish and lecturing',
    'Compassionate and hopeful',
    'Practical and lighthearted',
    'Fierce and vengeful',
    'Stern and judgmental',
    'Kind and parental',
  ]
};

const monsterOther = {
  'Origin': [
    'You are a spy sent to undermine your enemies from within.',
    'You are the victim of a curse or polymorph spell.',
    'You were raised by humans, elves, or dwarves and have adopted their culture.',
    'At a young age, you adopted a human religion and now serve it faithfully.',
    'You received divine insight that sent you on your path, and occasionally receive new visions that guide you.',
    'Your sworn enemy is an ally of your people, forcing you to leave your tribe to gain vengeance.',
    'An evil entity corrupted your people\'s society.',
    'An injury or strange event caused you to lose all memory of your past, but occasional flashes of it return to you.',
  ]
};

const races = {
  'EE': [
    { name: 'Aarakocra', },
    { name: 'Air Genasi', },
    { name: 'Fire Genasi', },
    { name: 'Water Genasi', },
    { name: 'Earth Genasi', },
    { name: 'Goliath', },
  ],
  'VGM': [
    { name: 'Scourge Aasimar', other: aasimarOther },
    { name: 'Protector Aasimar', other: aasimarOther },
    { name: 'Fallen Aasimar', other: aasimarOther, },
    { name: 'Bugbear', other: monsterOther },
    {
      name: 'Firbolg',
      other: {
        'Reason for Adventure': [
          'Outcast for murder',
          'Outcast for severely damaging home territory',
          'Clan slain, by, inv,ding. humanoids',
          'Clan slain by a dragon or demon',
          'Separated from the tribe and lost',
          'Homeland destroyed by natural disaster',
          'Personal quest ordained by omens',
          'Dispatched on a quest by tribe leaders',
        ]
      }
    },
    { name: 'Goblin', other: monsterOther },
    { name: 'Hobgoblin', other: monsterOther },
    { name: 'Kenku', },
    { name: 'Kobold', other: monsterOther },
    {
      name: 'Lizardfolk',
      other: {
        'Quirk': [
          'You hate waste and see no reason not to scavenge fallen enemies. Fingers are tasty and portable!',
          'You sleep best while mostly submerged in water.',
          'Money is meaningless to you',
          'You think there are only two species of humanoid: lizardfolk and meat.',
          'You have learned to laugh. You use this talent in response to all emotional situations, to better fit in with your comrades.',
          'You still don\'t understand how metaphors work. That doesn\'t stop you from using them at every opportunity.',
          'You appreciate the soft humanoids who realize they need chain mail and swords to match the gifts you were born with.',
          'You enjoy eating your food while it\'s still wriggling.',
        ]
      }
    },
    { name: 'Orc', other: monsterOther },
    {
      name: 'Tabaxi',
      other: {
        'Obsession': [
          'A god or planar entity',
          'A monster',
          'A lost civilization',
          'A wizard\'s secrets',
          'A mundane item',
          'A magic item',
          'A location',
          'A legend or tale',
        ],
        'Quirk': [
          'You miss your tropical home and complain endlessly about the freezing, weather, even in summer.',
          'You never wear the same outfit twice, unless you absolutely must.',
          'You have a minor phobia of water and hate getting wet.',
          'Your tail always betrays your inner thoughts.',
          'You purr loudly when you are hap.py.',
          'You keep a small ball of yarn in your hand, which you constantly fidget with.',
          'You are alway5 in debt, since you spend your gold on lavish parties and gifts for friends.',
          'When talking about something you\'re obsessed with, you speak quickly and never pause and others can\'t understand you .',
          'You are a .font of random trivia from the lore and stories you have discovered.',
          'You can\'t help but pocket interesting objects you come across.',
        ]
      }
    },
    {
      name: 'Triton',
      other: {
        'Quirk': [
          'You phrase requests as orders that you expect to be obeyed.',
          'You are quick to boast of the greatness of your civilization.',
          'You learned an antiquated version of Common and drop "thee" and "thou" into your speech.',
          'You assume that people are telling you the truth about local customs and expectations.',
          'The surface world is a wondrous place, and you catalog all its details in a journal.',
          'You mistakenly assume that surface folk know about and are impressed by your people\'s history.',
        ]
      }
    },
    { name: 'Yuan-ti Pureblood', other: monsterOther },
  ],
  'PHB': [
    { name: 'Dragonborn', },
    { name: 'Hill Dwarf', },
    { name: 'Mountain Dwarf', },
    { name: 'Duergar', },
    { name: 'Wood Elf', },
    { name: 'High Elf', },
    { name: 'Drow', },
    { name: 'Rock Gnome', },
    { name: 'Deep Gnome', },
    { name: 'Forest Gnome', },
    { name: 'Half-Elf', },
    { name: 'Stout Halfling', },
    { name: 'Light Halfling', },
    { name: 'Half-Orc', },
    { name: 'Human', },
    { name: 'Tiefling', },
  ],
  'DMG': [
    { name: 'Eladrin', },
  ],
  'SCG': [
    { name: 'Feral Tiefling', },
    { name: 'Ghostwise Halfling', },
  ],
  'TOA': [
    { name: 'Tortle', },
  ]
};

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