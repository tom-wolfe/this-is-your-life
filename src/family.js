const random = require('./random');

const halfRaces = {
  'Half-Elf': halfElf,
  'Half-Orc': halfOrc,
  'Tiefling': tiefling,
  'Air Genasi': () => ['Human', 'Djinn'],
  'Fire Genasi': () => ['Human', 'Efreet'],
  'Water Genasi': () => ['Human', 'Marid'],
  'Earth Genasi': () => ['Human', 'Dao'],
}

function halfElf() {
  const r = random.dice('1d8');
  switch (true) {
    case r < 6: return ['Elf', 'Human'];
    case r === 6: return ['Elf', 'Half-Elf'];
    case r === 7: options = ['Human', 'Half-Elf']
    case r === 8: return ['Half-Elf', 'Half-Elf']
  }
}

function halfOrc() {
  const r = random.dice('1d8');
  switch (true) {
    case r < 4: return ['Orc', 'Human'];
    case r < 6: return ['Orc', 'Half-Orc'];
    case r < 8: return ['Human', 'Half-Orc'];
    case r === 8: return ['Half-Orc', 'Half-Orc']
  }
}

function tiefling() {
  const r = random.dice('1d8');
  switch (true) {
    case r < 5: return ['Human', 'Human'];
    case r < 7: return ['Tiefling', 'Human'];
    case r < 8: return ['Tiefling', 'Devil'];
    case r === 8: return ['Human', 'Devil']
  }
}

module.exports = {
  knewParents: function () {
    return random.percent() <= 95;
  },
  parents: function (race) {
    let options = [race, race];
    if (Object.keys(halfRaces).includes(race)) {
      output = halfRaces[race]();
    }

    // 50/50 chance to switch races.
    if (random.percent() > 50) { options.reverse(); }
    return {
      mother: options[0],
      father: options[1],
    }
  }
}