const Generator = require('./generator');
const Formatter = require('./formatter');

const Race = require('./generator/race');
const Background = require('./generator/background');
const Class = require('./generator/class');

function generateCharacter(e) {
  const config = {
    race: selectedValue('race'),
    class: selectedValue('class'),
    background: selectedValue('background'),
  }
  const character = Generator(config);
  document.getElementById('character').innerHTML = Formatter(character);
  if (e) { e.preventDefault(); }
  return false;
}

function fillDropdown(id, source) {
  const select = document.getElementById(id);
  source.forEach(c => {
    const o = document.createElement('option');
    o.text = o.value = c;
    select.add(o);
  });
}

function selectedValue(id) {
  const select = document.getElementById(id);
  return select.options[select.selectedIndex].value;
}

function populateDropdowns() {
  fillDropdown('race', Race.names());
  fillDropdown('class', Class.names());
  fillDropdown('background', Background.names());
}

document.getElementById('generate').addEventListener('click', generateCharacter);
generateCharacter();
populateDropdowns();