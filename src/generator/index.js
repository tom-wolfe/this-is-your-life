const Class = require('./class');
const Race = require('./race');
const Background = require('./background');
const Family = require('./family');
const Birth = require('./birth');
const Life = require('./life');
const Item = require('./item');

function sources(character) {
  if (character.sources) {
    character.sources = character.sources.split(',').map(s => s.trim());
  } else {
    character.sources = ['PHB', 'VGM', 'XGE'];
  }
}

function race(character) {
  if (character.race) { character.race = Race.byName(character.race); }
  if (!character.race) { character.race = Race.random(character.sources); }

  if (character.race.subraces.length > 0) { character.subrace = Race.randomSubrace(character.race); }

  character.raceOther = Race.other(character.race, character.subrace);
}

function alignment(character) {
  if (!character.alignment) { character.alignment = Life.alignment(); }
}

function age(character) {
  character.age = Number(character.age) || Life.age();
}

function background(character) {
  if (character.background) { character.background = Background.byName(character.background); }
  if (!character.background) { character.background = Background.random(character.sources); }
  character.backgroundReason = Background.reason(character.background);
  character.backgroundTraits = Background.traits(character.background);
  character.backgroundIdeal = Background.ideal(character.background, character.alignment);
  character.backgroundBond = Background.bond(character.background);
  character.backgroundFlaw = Background.flaw(character.background);
  character.backgroundOther = Background.other(character.background);
}

function adventuringClass(character) {
  if (character.class) { character.class = Class.byName(character.class); }
  if (!character.class) { character.class = Class.random(character.sources); }
  character.classReason = Class.reason(character.class);
  character.classOther = Class.other(character.class);
}

function parents(character) {
  character.knewParents = Family.knewParents();
  character.parents = Family.parents(character.race);
  character.parents.mother.occupation = Life.occupation();
  character.parents.father.occupation = Life.occupation();
}

function upbringing(character) {
  character.birthplace = Birth.place();
  character.raisedBy = Family.raisedBy(character.knewParents);
  character.lifestyle = Family.lifestyle();
  character.home = Family.home(character.lifestyle);
  character.childhood = Life.childhood(character.charismaModifier || 0);

  if (character.raisedBy.absent.includes('mother')) {
    character.parents.mother.absent = Family.absentParent();
  }
  if (character.raisedBy.absent.includes('father')) {
    character.parents.father.absent = Family.absentParent();
  }
}

function siblings(character) {
  character.siblings = [];
  for (n = 0; n < Family.siblings(character.race); n++) {
    character.siblings.push({
      relativeAge: Life.relativeAge(),
      relationship: Family.siblingSex(),
      occupation: Life.occupation(),
      status: Life.status(),
      attitude: Life.relationship()
    });
  }
}

function events(character) {
  character.events = [];
  const eventRolls = [];
  for (n = 0; n < Life.eventCount(character.age); n++) {
    character.events.push(Life.event(eventRolls));
  }
}

function trinket(character) {
  character.trinket = Item.trinket();
}

module.exports = function (config = {}) {
  const character = Object.assign({}, config);

  sources(character);
  race(character);
  alignment(character);
  age(character);
  background(character);
  adventuringClass(character);
  parents(character);
  siblings(character);
  upbringing(character);
  events(character);
  trinket(character);

  return character;
}