const Generator = require('./generator');
const Formatter = require('./formatter');

function generateCharacter(e) {
  const character = Generator();
  document.getElementById('character').innerHTML = Formatter(character);
  if (e) { e.preventDefault(); }
  return false;
}

document.getElementById('generate').addEventListener('click', generateCharacter);
generateCharacter();