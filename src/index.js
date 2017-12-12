const config = Object.assign({}, ...process.argv.slice(2).map(a => a.split('=').map(a => a.trim())).map(a => ({ [a[0]]: a[1] })));

const Class = require('./class');
const Race = require('./race');
const Background = require('./background');
const Family = require('./family');
const Birth = require('./birth');
const Life = require('./life');
const Item = require('./item');

if (config.sources) {
  config.sources = config.sources.split(',').map(s => s.trim());
} else {
  config.sources = ['PHB', 'VGM', 'XGE'];
}

config.age = Number(config.age) || Life.age();

if (config.race) { config.race = Race.byName(config.race); }
if (!config.race) { config.race = Race.random(config.sources); }

if (config.background) { config.background = Background.byName(config.background); }
if (!config.background) { config.background = Background.random(config.sources); }

if (config.class) { config.class = Class.byName(config.class); }
if (!config.class) { config.class = Class.random(config.sources); }

if (!config.alignment) { config.alignment = Life.alignment(); }

console.log('This Is Your Life!');

console.log('\n:: Overview ::');
console.log(`You are a ${config.age} year old ${config.alignment} ${config.race.name} ${config.background.name} adventuring as a ${config.class.name}.`);

const bgReason = Background.reason(config.background);
if (bgReason) {
  console.log(`You became a ${config.background.name} because ${bgReason}`);
}
const cReason = Class.reason(config.class);
console.log(`You became a ${config.class.name} because ${cReason}`);

const raceOther = Race.other(config.race);
if (raceOther.length > 0) {
  console.log('\n:: Racial ::');
  raceOther.forEach(o => console.log(o[0] + ':', o[1]));
}
console.log('\n:: Background ::');
console.log('Trait:', Background.trait(config.background));
console.log('Ideal:', Background.ideal(config.background));
console.log('Bond:', Background.bond(config.background));
console.log('Flaw:', Background.flaw(config.background));
Background.other(config.background).forEach(o => console.log(o[0] + ':', o[1]));

const classOther = Class.other(config.class);
if (classOther.length > 0) {
  console.log('\n:: Class ::');
  classOther.forEach(o => console.log(o[0] + ':', o[1]));
}

console.log('\n:: Family ::');
console.log('You were born', Birth.place() + '.');

config.knewParents = Family.knewParents();
if (!config.knewParents) {
  console.log('You don\'t know who your parents are.')
} else {
  const parents = Family.parents(config.race);
  if (parents.mother === parents.father) {
    console.log(`Your mother and father are both ${parents.mother}s. Your mother ${Life.occupation()}, while your father ${Life.occupation()}.`);
  } else {
    console.log(`Your mother is ${parents.mother} and ${Life.occupation()}, but your father is ${parents.father} and ${Life.occupation()}.`);
  }
}

console.log('\n:: Childhood ::');
config.raisedBy = Family.raisedBy(config.knewParents);
const lifestyle = Family.lifestyle();
const home = Family.home(lifestyle[1]);
console.log(`You were raised by ${config.raisedBy.name} and had a ${lifestyle[0].toLowerCase()} lifestyle, living ${home}.`);
if (config.raisedBy.absent.includes('mother')) {
  console.log('Your mother', Family.absentParent());
}
if (config.raisedBy.absent.includes('father')) {
  console.log('Your father', Family.absentParent());
}
console.log(Life.childhood());

const siblings = Family.siblings(config.race);
if (siblings === 0) {
  console.log('');
  console.log('You were an only child.');
} else if (config.knewParents) {
  console.log('');
  console.log(`You had ${siblings} sibling${siblings === 1 ? '' : 's'}.`);
  for (n = 1; n <= siblings; n++) {
    console.log(` - a ${Life.relativeAge()} ${Family.siblingSex()} who ${Life.occupation()}. They are ${Life.status()} ${Life.relationship()}`)
  }
}

console.log('\n:: Events ::');
const lifeEvents = Life.eventCount(config.age);
console.log(`You have had ${lifeEvents} major event${lifeEvents === 1 ? '' : 's'} in your life:`);
events = [];
for (n = 1; n <= lifeEvents; n++) {
  console.log(`${n}) ${Life.event(events)}`);
}

console.log('')
console.log(`Currently in your possession you have ${Item.trinket()}`);
