console.log('This Is Your Life!');

const Class = require('./class');
const Race = require('./race');
const Background = require('./background');
const Family = require('./family');
const Birth = require('./birth');
const Life = require('./life');

const sources = ['PHB'];

const cClass = Class(sources);
const cRace = Race(sources);
const cBackground = Background(sources);

console.log('');
console.log('Background:', cBackground);
console.log('Race:', cRace);
console.log('Class:', cClass);

console.log('');
console.log('You were born', Birth.place() + '.');


if (!Family.knewParents()) {
  console.log('You didn\'t know who your parents were.')
}

const parents = Family.parents(cRace);
if (parents.mother === parents.father) {
  console.log(`Your mother and father were both ${parents.mother}s.`);
} else {
  console.log(`Your mother was a ${parents.mother}, but your father was a ${parents.father}.`);
  // TODO: Elaborate on parents.
}

const siblings = Family.siblings(cRace);
if (siblings === 0) {
  console.log('You were an only child.');
} else {
  console.log(`You had ${siblings} siblings.`);
  // TODO: Info about siblings.
}

const raisedBy = Family.raisedBy();
const lifestyle = Family.lifestyle();
const home = Family.home(lifestyle[1]);
console.log(`You were raised by ${raisedBy} and had a ${lifestyle[0].toLowerCase()} lifestyle, living ${home}.`);
console.log(Life.childhood());

// TODO: Reason for background.

// TODO: Reason for class training.

// TODO: Life Events.