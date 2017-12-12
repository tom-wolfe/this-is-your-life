module.exports = function (character) {
  let output = '';

  output += '\n<h3>Overview</h3>\n\n';

  output += `<p>You are a ${character.age} year old ${character.alignment.toLowerCase()} ${character.race.name.toLowerCase()} ${character.background.name.toLowerCase()} adventuring as a ${character.class.name.toLowerCase()}.</p>\n`;

  output += '<p>';
  if (character.backgroundReason) {
    output += `You became a ${character.background.name.toLowerCase()} because ${character.backgroundReason}<br>\n`;
  }
  output += `You became a ${character.class.name.toLowerCase()} because ${character.classReason}`;
  output += '</p>\n\n';

  if (character.raceOther.length > 0) {
    output += `<h3>Racial (${character.race.name})</h3>\n\n`;
    output += '<p>' + character.raceOther.map(o => `<strong>${o.name}:</strong> ${o.value}`).join('<br>\n') + '</p>\n\n';
  }

  output += `<h3>Background (${character.background.name})</h3>\n\n`;
  output += '<p>';
  output += `<strong>Trait:</strong> ${character.backgroundTrait}<br>\n`;
  output += `<strong>Ideal:</strong> ${character.backgroundIdeal}<br>\n`;
  output += `<strong>Bond:</strong> ${character.backgroundBond}<br>\n`;
  output += `<strong>Flaw:</strong> ${character.backgroundFlaw}<br>\n`;
  output += character.backgroundOther.map(o => `<strong>${o.name}:</strong> ${o.value}`).join('<br>\n') + '</p>\n\n';
  output += '</p>\n\n';

  if (character.classOther.length > 0) {
    output += `<h3>Class (${character.class.name})</h3>\n\n`;
    output += '<p>' + character.classOther.map(o => `<strong>${o.name}:</strong> ${o.value}`).join('<br>\n') + '</p>\n\n';
  }  

  output += '<h3>Family</h3>\n\n';

  const { mother, father } = character.parents;
  if (!character.knewParents) {
    output += '<p>You don\'t know who your parents are.</p>';
  } else {
    if (mother.race === father.race) {
      output += `<p>Your mother and father are both ${mother.race.toLowerCase()}s. Your mother ${mother.occupation}, while your father ${father.occupation}.<p>`;
    } else {
      output += `<p>Your mother is ${mother.race.toLowerCase()} and ${mother.occupation}, but your father is ${father.race.toLowerCase()} and ${father.occupation}.</p>`;
    }
  }

  const sibCount = character.siblings.length;
  if (sibCount === 0) {
    output += '<p>You were an only child.</p>\n';
  } else if (character.knewParents) {
    output += `<p>You had ${sibCount} sibling${sibCount === 1 ? '' : 's'}.</p>\n`;
    output += '<ul>';
    character.siblings.forEach(s => {
      output += `<li>a ${s.relativeAge} ${s.relationship} who ${s.occupation}. They are ${s.status} ${s.attitude}</li>\n`
    })
    output += '</ul>';
  } else {
    output += '<p>You don\'t know if you have any siblings.</p>\n';
  }

  output += '<h3>Upbringing</h3>\n\n';

  output += `<p>You were born ${character.birthplace}.</p>\n`;
  output += `<p>You were raised by ${character.raisedBy.name} and had a ${character.lifestyle.name.toLowerCase()} lifestyle, living ${character.home}.</p>\n`;

  if (mother.absent) { output += `<p>Your mother ${mother.absent}</p>\n`; }
  if (father.absent) { output += `<p>Your father ${father.absent}</p>\n`; }

  output += `<h3>Life Events (${character.events.length})</h3>\n\n<ul>`;
  character.events.forEach(e => {
    output += `<li>${e}</li>\n`;
  });
  output += '</ul>\n\n';

  output += '<h3>Trinket</h3>\n\n';
  output += `<p>Currently in your possession you have ${character.trinket}</p>`

  return output;
};