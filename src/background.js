const random = require('./random');

const backgrounds = {
  'PHB': [
    'Acolyte',
    'Charlatan',
    'Criminal / Spy',
    'Entertainer',
    'Folk Hero',
    'Gladiator',
    'Guild Artisan / Merchant',
    'Hermit',
    'Knight',
    'Noble',
    'Outlander',
    'Pirate',
    'Sage',
    'Sailor',
    'Soldier',
    'Urchin',
  ],
  'TOA': [
    'Anthropologist',
    'Archaeologist',
  ],
  'SCG': [
    'City Watch / Investigator',
    'Clan Crafter',
    'Cloistered Scholar',
    'Courtier',
    'Faction Agent',
    'Far Traveler',
    'Inheritor',
    'Knight of the Order',
    'Mercenary Veteran',
    'Urban Bounty Hunter',
    'Uthgardt Tribe Member',
    'Waterdhavian Noble'
  ],
  'COS': [
    'Haunted One',  
  ]  
};

module.exports = function (sources = 'ALL') {
  return random.sourcedElement(backgrounds, sources);
}