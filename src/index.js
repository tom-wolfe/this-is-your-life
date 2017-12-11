console.log('This Is Your Life!');

const Class = require('./class');
const Race = require('./race');
const Background = require('./background');
const Family = require('./family');
const Birth = require('./birth');

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
}
