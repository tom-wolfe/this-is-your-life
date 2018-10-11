import { Generator } from 'tiyl';
import { Alignments } from 'tiyl/generator/alignment';
import { Backgrounds } from 'tiyl/generator/background';
import { Classes } from 'tiyl/generator/class';
import { Races } from 'tiyl/generator/race';
import Formatter from './formatter';

function generateCharacter(e) {
  const config = {
    race: selectedValue('race'),
    subrace: selectedValue('subrace'),
    class: selectedValue('class'),
    background: selectedValue('background'),
    alignment: selectedValue('alignment'),
    age: document.getElementById('age').value
  }
  const character = new Generator(config).generate();
  document.getElementById('character').innerHTML = Formatter(character);
  if (e) { e.preventDefault(); }
  return false;
}

function filterSubraces() {
  const race = selectedValue('race');
  const subraces = Races.subraceNames(race);
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
  fillDropdown('race', Races.names());
  fillDropdown('class', Classes.names());
  fillDropdown('alignment', Alignments.all(), a => a.abbreviation, a => a.name);
  fillDropdown('background', Backgrounds.names());
}

document.getElementById('generate').addEventListener('click', generateCharacter);
document.getElementById('race').addEventListener('change', filterSubraces);

generateCharacter();
populateDropdowns();