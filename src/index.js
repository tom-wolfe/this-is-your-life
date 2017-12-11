console.log('This Is Your Life!');

const Class = require('./class');
const Race = require('./race');
const Background = require('./background');

const sources = ['PHB'];

const cClass = Class(sources);
const cRace = Race(sources);
const cBackground = Background(sources);

console.log('Background:', cBackground);
console.log('Race:', cRace);
console.log('Class:', cClass);