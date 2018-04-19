const Generator = require('./generator');
const Formatter = require('./formatter');

const Alignment = require('./generator/alignment');
const Background = require('./generator/background');
const Class = require('./generator/class');
const Race = require('./generator/race');

function generateCharacter(e) {
  const config = {
    race: selectedValue('race'),
    subrace: selectedValue('subrace'),
    class: selectedValue('class'),
    background: selectedValue('background'),
    alignment: selectedValue('alignment'),
    age: document.getElementById('age').value
  }
  const character = Generator(config);
  document.getElementById('character').innerHTML = Formatter(character);
  if (e) { e.preventDefault(); }
  return false;
}

function filterSubraces() {
  const race = selectedValue('race');
  const subraces = Race.subraceNames(race);
  fillDropdown('subrace', subraces);
}

function fillDropdown(id, source, val, text) {
  const select = document.getElementById(id);
  select.querySelectorAll('option').forEach(o => {
    if (o.value) { o.remove(); }
  });
  source.forEach(c => {
    const o = document.createElement('option');
    o.text = text ? text(c) : c;
    o.value = val ? val(c) : c;
    select.add(o);
  });
  select.value = '';
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
document.getElementById('race').addEventListener('change', filterSubraces);

generateCharacter();
populateDropdowns();