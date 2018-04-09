const Generator = require('./generator');
const Formatter = require('./formatter');

const Alignment = require('./generator/alignment');
const Background = require('./generator/background');
const Class = require('./generator/class');
const Race = require('./generator/race');

function generateCharacter(e) {
  const config = {
    race: selectedValue('race'),
    class: selectedValue('class'),
    background: selectedValue('background'),
    alignment: selectedValue('alignment')
  }
  const character = Generator(config);
  document.getElementById('character').innerHTML = Formatter(character);
  if (e) { e.preventDefault(); }
  return false;
}

function fillDropdown(id, source, val, text) {
  const select = document.getElementById(id);
  source.forEach(c => {
    const o = document.createElement('option');
    o.text = text ? text(c) : c;
    o.value = val ? val(c) : c;
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
  fillDropdown('alignment', Alignment.all(), a => a.abbreviation, a => a.name);
  fillDropdown('background', Background.names());
}

document.getElementById('generate').addEventListener('click', generateCharacter);
generateCharacter();
populateDropdowns();