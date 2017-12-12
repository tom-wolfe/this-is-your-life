const random = require('./random');

const halfRaces = {
  'Half-Elf': halfElf,
  'Half-Orc': halfOrc,
  'Tiefling': tiefling,
  'Air Genasi': () => ['Human', 'Djinn'],
  'Fire Genasi': () => ['Human', 'Efreet'],
  'Water Genasi': () => ['Human', 'Marid'],
  'Earth Genasi': () => ['Human', 'Dao'],
  'Fallen Aasimar': aasimar,
  'Scourge Aasimar': aasimar,
  'Protector Aasimar': aasimar,
}

function aasimar() {
  const r = random.dice('1d8');
  switch (true) {
    case r < 5: return ['Human', 'Human'];
    case r < 6: return ['Aasimar', 'Human'];
    case r < 7: return ['Aasimar', 'Aasimar'];
    case r < 8: return ['Celestial', 'Human'];
    case r === 8: return ['Aasimar', 'Celestial']
  }
}

function halfElf() {
  const r = random.dice('1d8');
  switch (true) {
    case r < 6: return ['Elf', 'Human'];
    case r === 6: return ['Elf', 'Half-Elf'];
    case r === 7: return ['Human', 'Half-Elf']
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
      options = halfRaces[race]();
    }

    // 50/50 chance to switch races.
    if (random.percent() > 50) { options.reverse(); }
    return { mother: options[0], father: options[1] };
  },
  siblings: function (race) {
    const r = random.dice('1d10');
    const mod = (race.includes('dwarf') || race.includes('elf')) ? -2 : 0;
    switch (true) {
      case r < 3: return 0;
      case r < 5: return Math.max(0, random.dice('1d3') + mod);
      case r < 7: return Math.max(0, random.dice('1d4') + 1 + mod);
      case r < 9: return Math.max(0, random.dice('1d6') + 2 + mod);
      case r < 11: return Math.max(0, random.dice('1d8') + 3 + mod);
    }
  },
  lifestyle: function () {
    const r = random.dice('3d6');
    switch (true) {
      case r < 4: return ['Wretched', -40];
      case r < 6: return ['Squalid', -20];
      case r < 9: return ['Poor', -10];
      case r < 13: return ['Modest', 0];
      case r < 16: return ['Comfortable', +10];
      case r < 18: return ['Wealthy', +20];
      case r < 19: return ['Aristocratic', +40];
    }
  },
  raisedBy: function () {
    const r = random.percent();
    switch (true) {
      case r < 2: return 'nobody';
      case r < 3: return 'an institution, such as an asylum';
      case r < 4: return 'a temple';
      case r < 6: return 'an ophanage';
      case r < 8: return 'a guardian';
      case r < 16: return 'your paternal or maternal aunt, uncle, or both; or extended family such as a tribe or clan';
      case r < 26: return 'your paternal or maternal grandparent(s)';
      case r < 36: return 'your adoptive family (same or different race)';
      case r < 56: return 'your single father or step father';
      case r < 76: return 'your single mother or step mother';
      case r < 101: return 'your mother and father';
    }
  },
  home: function (mod) {
    const r = random.percent() + mod;
    switch (true) {
      case r < 1: return 'on the streets';
      case r < 21: return 'in a rundown shack';
      case r < 31: return 'in lots of places, never staying still for long';
      case r < 41: return 'in an encampment or village in the wilderness';
      case r < 51: return 'in an apartment in a rundown neighbourhood';
      case r < 71: return 'in a small house';
      case r < 91: return 'in a large house';
      case r < 111: return 'in a mansion';
      default: return 'in a palace or castle';
    }
  }
}