const config = Object.assign({}, ...process.argv.slice(2).map(a => a.split('=').map(a => a.trim())).map(a => ({[a[0]]: a[1]})));

const Class = require('./class');
const Race = require('./race');
const Background = require('./background');
const Family = require('./family');
const Birth = require('./birth');
const Life = require('./life');

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
console.log('');
console.log(`You are a ${config.age} year old ${config.alignment} ${config.race} ${config.background.name} adventuring as a ${config.class.name}.`);

console.log('');
const bgReason = Background.reason(config.background);
if (bgReason) {
  console.log(`You became a ${config.background.name} because ${bgReason}`);
}
const cReason = Class.reason(config.class);
console.log(`You became a ${config.class.name} because ${cReason}`);

// TODO: Other class lists.

console.log('');
console.log('You were born', Birth.place() + '.');

if (!Family.knewParents()) {
  console.log('You didn\'t know who your parents were.')
} else {
  const parents = Family.parents(config.race);
  if (parents.mother === parents.father) {
    console.log(`Your mother and father were both ${parents.mother}s.`);
  } else {
    console.log(`Your mother was a ${parents.mother}, but your father was a ${parents.father}.`);
  }
  
  console.log(`Your mother ${Life.occupation()}.`);
  console.log(`Your father ${Life.occupation()}.`);
}

console.log('');
const siblings = Family.siblings(config.race);
if (siblings === 0) {
  console.log('You were an only child.');
} else {
  console.log(`You had ${siblings} siblings.`);
  for (n = 1; n <= siblings; n++) {
    console.log(`Sibling ${n} is a ${Life.gender()} who is ${Life.relativeAge()} you and ${Life.occupation()}. They are ${Life.status()} ${Life.relationship()}`)
  }
}

const raisedBy = Family.raisedBy();
const lifestyle = Family.lifestyle();
const home = Family.home(lifestyle[1]);
console.log(`You were raised by ${raisedBy} and had a ${lifestyle[0].toLowerCase()} lifestyle, living ${home}.`);
console.log(Life.childhood());

// TODO: Ideals, bonds and flaws.

console.log('');
const lifeEvents = Life.eventCount(config.age);
console.log(`You have had ${lifeEvents} major events in your life:`);
events = [];
for(n = 0; n < lifeEvents; n++) {
  const event = Life.event(events);
  console.log(event);
}