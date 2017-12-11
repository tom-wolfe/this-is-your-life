console.log('This Is Your Life!');

const Class = require('./class');
const Race = require('./race');
const Background = require('./background');
const Family = require('./family');
const Birth = require('./birth');
const Life = require('./life');

const sources = ['PHB', 'VGM', 'XGE'];

const cClass = Class(sources);
const race = Race(sources);
const background = Background.random(sources);

console.log('');
console.log('Background:', background.name);
console.log('Race:', race);
console.log('Class:', cClass);

console.log('');
console.log('You were born', Birth.place() + '.');


if (!Family.knewParents()) {
  console.log('You didn\'t know who your parents were.')
}

const parents = Family.parents(race);
if (parents.mother === parents.father) {
  console.log(`Your mother and father were both ${parents.mother}s.`);
} else {
  console.log(`Your mother was a ${parents.mother}, but your father was a ${parents.father}.`);
  // TODO: Elaborate on parents.
}

const siblings = Family.siblings(race);
if (siblings === 0) {
  console.log('You were an only child.');
} else {
  console.log(`You had ${siblings} siblings.`);
  for (n = 1; n <= siblings; n++) {
    console.log(`Sibling ${n} is a ${Life.gender()} who is ${Life.relativeAge()} you.`)
    // TODO: More info about siblings.
  }
}

const raisedBy = Family.raisedBy();
const lifestyle = Family.lifestyle();
const home = Family.home(lifestyle[1]);
console.log(`You were raised by ${raisedBy} and had a ${lifestyle[0].toLowerCase()} lifestyle, living ${home}.`);
console.log(Life.childhood());

console.log('');
const bgReason = Background.reason(background);
if (bgReason) {
  console.log(`You became a ${background.name} because ${bgReason}`);
}

console.log('');
const age = Life.age();
console.log(`You are ${age} years old.`);

// TODO: Ideals, bonds and flaws.

// TODO: Reason for class training.

// TODO: Life Events.