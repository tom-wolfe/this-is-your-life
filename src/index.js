const Generator = require('./generator');
const Formatter = require('./formatter');

function generateCharacter() {
  const character = Generator();
  document.getElementById('character').innerHTML = Formatter(character);
}

document.getElementById('generate').addEventListener('click', generateCharacter);
generateCharacter();