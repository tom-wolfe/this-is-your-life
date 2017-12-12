const Class = require('./class');
const Item = require('./item');

const random = require('./random');

function adventure() {
  const r = random.percent();
  switch (true) {
    case r < 11: return `You nearly died. You have nasty scars on your body, and you are missing an ear, ${random.dice('1d3')} fingers, or ${random.dice('1d4')} toes.`;
    case r < 21: return 'You suffered a grievous injury. Although the wound healed, it still pains you from time to time.';
    case r < 31: return 'You were wounded, but in time you fully recovered.';
    case r < 41: return 'You contracted a disease while exploring a filthy warren. You recovered from the disease, but you have a persistent cough, pockmarks on your skin, or prematurely gray hair.';
    case r < 51: return 'You were poisoned by a trap or a monster. You recovered, but the next time you must make a saving throw against poison, you make the saving throw with disadvantage.';
    case r < 61: return 'You lost something of sentimental value to you during your adventure. Remove one trinket from your possessions.';
    case r < 71: return 'You were terribly frightened by something you encountered and ran away, abandoning your companions to their fate.';
    case r < 81: return 'You learned a great deal during your adventure. The next time you make an ability check or a saving throw, you have advantage on the roll.';
    case r < 91: return `You found some treasure on your adventure. You have ${random.dice('2d6')} gp left from your share of it.`;
    case r < 100: return `You found a considerable amount of treasure on your adventure. You have ${random.dice('1d20') + 50} gp left from your share of it.`;
    default: return 'You came across a common magic item';
  }
}

function arcane() {
  switch (random.dice('1d10')) {
    case 1: return 'You were charmed or frightened by a spell.';
    case 2: return 'You were injured by the effect of a spell.';
    case 3: return 'You witnessed a powerful spell being cast by a cleric, a druid, a sorcerer, a warlock, or a wizard.';
    case 4: return 'You drank a potion';
    case 5: return 'You found a spell scroll and succeeded in casting the Spell it contained.';
    case 6: return 'You were affected by teleportation magic.';
    case 7: return 'You turned invisible for a time.';
    case 8: return 'You identified an illusion for what it was.';
    case 9: return 'You saw a creature being conjured by magic.';
    case 10: return `Your fortune was read by a diviner. They told you: \n1. ${event([])} \n2. ${event([])}`;
  }
}

function boon() {
  switch (random.dice('1d10')) {
    case 1: return 'A friendly wizard gave you a spell scroll containing one cantrip';
    case 2: return 'You saved the life of a commoner, who now owes you a life debt. This individual accompanies you on your travels and performs mundane tasks for you, but will leave if neglected, abused, or imperiled.';
    case 3: return 'You found a riding horse.';
    case 4: return `You found some money. You have ${random.dice('1d20')} gp in addition to your regular starting funds.`;
    case 5: return 'A relative bequeathed you a simple weapon of your choice.';
    case 6: return 'You found ' + Item.trinket();
    case 7: return 'You once performed a service for a local temple. The next time you visit the temple, you can receive healing up to your hit point maximum.';
    case 8: return 'A friendly alchemist gifted you with a potion of healing or a flask of acid, as you choose.';
    case 9: return 'You found a treasure map.';
    case 10: return `A distant relative left you a stipend that enables you to live at the comfortable lifestyle for ${random.dice('1d20')} years. If you choose to live at a higher lifestyle, you reduce the price of the lifestyle by 2 gp during that time period.`;
  }
}

function crime() {
  switch (random.dice('1d8')) {
    case 1: return 'murder';
    case 2: return 'theft';
    case 3: return 'burglary';
    case 4: return `assault`;
    case 5: return 'smuggling';
    case 6: return 'kidnapping';
    case 7: return 'extortion';
    case 8: return 'counterfeiting.';
  }
}

function posessedCreature() {
  switch (random.dice('1d6')) {
    case 1: return 'celestial';
    case 2: return 'devil';
    case 3: return 'demon';
    case 4: return 'fey';
    case 5: return 'elemental';
    case 6: return 'undead';
  }
}

function punishment() {
  const r = random.dice('1d12')
  switch (true) {
    case r < 4: return 'You did not commit the crime and were exonerated after being accused.';
    case r < 7: return 'You committed the crime or helped do so, but nonetheless the authorities found you not guilty.';
    case r < 9: return 'You were nearly caught in the act. You had to flee and are wanted in the community where the crime occurred.';
    case r < 13: return `You were caught and convicted. You spent time in jail, chained to an oar, or performing hard labor. You served a sentence of ${random.dice('1d4')} years or succeeded in escaping after that much time.`;
  }
}

function supernatural() {
  const r = random.percent();
  switch (true) {
    case r < 6: return `You were ensorcelled by a fey and enslaved for ${random.dice('1d6')} years before you escaped.`;
    case r < 11: return 'You saw a demon and ran away before it could do anything to you.';
    case r < 16: return `A devil tempted you. Make a DC 10 Wisdom saving throw. On a failed save, your alignment shifts one step toward evil (if it\'s not evil already), and you start the game with an additional ${random.dice('1d20') + 50} gp.`;
    case r < 21: return 'You woke up one morning miles from your home, with no idea how you got there.';
    case r < 31: return 'You visited a holy site and felt the presence of the divine there.';
    case r < 41: return 'You witnessed a falling red star, a face appearing in the frost, or some other bizarre happening. You are certain that it was an omen of some sort.';
    case r < 51: return 'You escaped certain death and believe it was the intervention of a god that saved you.';
    case r < 61: return 'You witnessed a minor miracle.';
    case r < 71: return 'You explored an empty house and found it to be haunted.'
    case r < 76: return `You were briefly possessed by a ${posessedCreature()}.`
    case r < 81: return 'You saw a ghost.';
    case r < 86: return 'You saw a ghoul feeding on a corpse.';
    case r < 91: return 'A celestial or a fiend visited you in your dreams to give a warning of dangers to come.';
    case r < 96: return 'You briefly visited the Feywild or the Shadowfell.';
    case r < 101: return 'You saw a portal that you believe leads to another plane of existence.';
  }
}

function tragedy() {
  switch (random.dice('1d12')) {
    case 1:
    case 2: return `A family member or a close friend died. Cause of death: ${causeOfDeath()}.`;
    case 3: return 'A friendship ended bitterly, and the other person is now hostile to you. The cause might have been a misunderstanding or something you or the former friend did.';
    case 4: return 'You lost all your possessions in a disaster, and you had to rebuild your life.';
    case 5: return `You were imprisoned for a crime you didn't commit and spent ${random.dice('1d6')} years at hard labor, in jail, or shackled to an oar in a slave galley.`;
    case 6: return 'War ravaged your home community, reducing everything to rubble and ruin. in the aftermath, you either helped your town rebuild or moved somewhere else.';
    case 7: return 'A lover disappeared without a trace. You have been looking for that person ever since.';
    case 8: return 'A terrible blight in your home community caused crops to fail, and many starved. You lost a sibling or some other family member.';
    case 9: return 'You did something that brought terrible shame to you in the eyes of your family. You might have been involved in a scandal, dabbled in dark magic, or offended someone important. The attitude of your family members toward you becomes indifferent at best, though they might eventually forgive you.';
    case 10: return 'For a reason you were never told, you were exiled from your community. You then either wandered in the wilderness for a time or promptly found a new place to live.';
    case 11: return 'A romantic relationship ended. ' + ((random.dice('1d6') % 2 === 0) ? 'with bad feelings.' : 'but it was amicable.');
    case 12: return `A current or prospective romantic partner of yours died. Cause of death: ${causeOfDeath()}.` + (random.dice('1d12') === 1 ? ' It was your fault.' : '');
  }
}

function causeOfDeath() {
  switch (random.dice('1d12')) {
    case 1: return 'Unknown';
    case 2: return 'Murdered';
    case 3: return 'Killed in battle';
    case 4: return 'Accident related to class or occupation';
    case 5: return 'Accident unrelated to class or occupation';
    case 6:
    case 7: return 'Natural causes, such as disease or old age';
    case 8: return 'Apparent suicide';
    case 9: return 'Torn apart by an animal or a natural disaster';
    case 10: return 'Consumed by a monster';
    case 11: return 'Executed for a crime or tortured to death';
    case 12: return 'Bizarre event, such as being hit by a meteorite, struck down by an angry god, or killed by a hatching slaad egg';
  }
}

function metallic() {
  switch (random.dice('1d8')) {
    case 1: return 'brass';
    case 2: return 'bronze';
    case 3: return 'copper';
    case 4: return 'gold';
    case 5: return 'iron';
    case 6: return 'platinum';
    case 7: return 'silver';
    case 8: return 'steel';
  }
}

function war() {
  switch (random.dice('1d12')) {
    case 1: return 'You were knocked out and left for dead. You woke up hours later with no recollection of the battle.';
    case 2:
    case 3: return 'You were badly injured in the fight, and you still bear the awful scars of those wounds.';
    case 4: return 'You ran away from the battle to save your life, but you still feel shame for your cowardice.';
    case 5:
    case 6:
    case 7: return 'You suffered only minor injuries, and the wounds all healed without leaving scars.';
    case 8:
    case 9: return 'You survived the battle, but you suffer from terrible nightmares in which you relive the experience.';
    case 10:
    case 11: return 'You escaped the battle unscathed, though many of your friends were injured or lost.';
    case 12: return 'You acquitted yourself well in battle and are remembered as a hero. You might have received a medal for your bravery';
  }
}

function weirdStuff() {
  switch (random.dice('1d12')) {
    case 1: return `You were turned into a toad and remained in that form for ${random.dice('1d4')} weeks.`;
    case 2: return 'You were petrified and remained a stone statue for a time until someone freed you.';
    case 3: return `You were enslaved by a hag, a satyr, or some other being and lived in that creature\'s thrall for ${random.dice('1d6')} years.`;
    case 4: return `A dragon held you as a prisoner for ${random.dice('1d12')} months until adventurers killed it.`;
    case 5: return 'You were taken captive by a race of evil humanoids such as drow, kuo-toa, or quaggoths. You lived as a slave in the Underdark until you escaped.';
    case 6: return 'You served a powerful adventurer as a hireling. You have only recently left that service.';
    case 7: return `You went insane for ${random.dice('1d6')} years and recently regained your sanity. A tic or some other bit of odd behavior might linger.`;
    case 8: return `A lover of yours was secretly a ${metallic()} dragon.`;
    case 9: return 'You were captured by a cult and nearly sacrificed on an altar to the foul being the cultists served. You escaped, but you fear they will find you.';
    case 10: return 'You met a demigod, an archdevil, an archfey, a demon lord, or a titan, and you lived to tell the tale.';
    case 11: return 'You were swallowed by a giant fish and spent a month in its gullet before you escaped.';
    case 12: return 'A powerful being granted you a wish, but you squandered it on something frivolous.';
  }
}

function event(previous) {
  const r = random.percent();
  previous.push(r);
  switch (true) {
    case r < 11: return tragedy();
    case r < 21: return boon();
    case r < 31: return (previous.filter(n => n < 31 && n >= 21).length > 1) ? 'You had a child.' : 'You fell in love or got married.';
    case r < 41: return `You made an enemy of an adventuring ${Class.random().name} ` + ((random.dice('1d6') % 2 === 0) ? 'but it wasn\'t your fault.' : 'and it was your fault.');
    case r < 51: return `You made a friend of an adventuring ${Class.random().name}.`;
    case r < 71: return `You spent time working in a job related to your background. Start the game with an extra ${random.dice('2d6')} gp.`;
    case r < 76: return 'You met someone important.';
    case r < 81: return 'You went on an adventure. ' + adventure();
    case r < 86: return supernatural();
    case r < 91: return 'You fought in a battle. ' + war();
    case r < 96: return `You were accused of ${crime()}. ${punishment()}`;
    case r < 100: return arcane();
    default: return weirdStuff();
  }
}

function occupation() {
  const r = random.percent();
  switch (true) {
    case r < 6: return 'works as an academic';
    case r < 11: return 'works as an adventuring ' + Class.random().name;
    case r < 12: return 'is an aristocrat';
    case r < 27: return 'works as an artisan or guild member';
    case r < 32: return 'is a criminal';
    case r < 37: return 'works as an entertainer';
    case r < 39: return 'is an exile, hermit or refugee'
    case r < 44: return 'is an explorer or wanderer';
    case r < 56: return 'works as a farmer or herder';
    case r < 61: return 'works as a hunter or trapper';
    case r < 76: return 'works as a laborer';
    case r < 81: return 'works as a merchant';
    case r < 86: return 'works as a politician or bureaucrat';
    case r < 91: return 'works as a priest';
    case r < 96: return 'works as a sailor';
    case r < 101: return 'serves as a soldier';
    default: return weirdStuff();
  }
}

function alignment() {
  const r = random.dice('3d6');
  switch (true) {
    case r < 4: return (random.percent() > 50) ? 'Chaotic Evil' : 'Chaotic Neutral';
    case r < 6: return 'Lawful Evil';
    case r < 9: return 'Neutral Evil';
    case r < 13: return 'Neutral';
    case r < 16: return 'Neutral Good';
    case r < 18: return (random.percent() > 50) ? 'Lawful Good' : 'Lawful Neutral';
    case r < 19: return (random.percent() > 50) ? 'Chaotic Good' : 'Chaotic Neutral';
  }
}

function relationship() {
  const r = random.dice('3d4');
  switch (true) {
    case r < 5: return 'You are hostile towards each other.';
    case r < 11: return 'You get on with each other.';
    case r < 13: return 'You are indifferent to each other.';
  }
}

function status() {
  const r = random.dice('3d6');
  switch (true) {
    case r < 4: return 'dead. ' + causeOfDeath() + '.';
    case r < 6: return 'missing or unknown.';
    case r < 9: return 'alive, but doing poorly due to injury, financial trouble, or relationship difficulties.';
    case r < 13: return 'alive and well.';
    case r < 16: return 'alive and quite successful.';
    case r < 18: return 'alive and infamous.';
    case r < 19: return 'alive and famous.';
  }
}

module.exports = {
  alignment,
  causeOfDeath,
  status,
  relationship,
  age: function () {
    const r = random.percent();
    switch (true) {
      case r < 21: return random.numberBetween(16, 20);
      case r < 60: return random.numberBetween(21, 30);
      case r < 70: return random.numberBetween(31, 40);
      case r < 90: return random.numberBetween(41, 50);
      case r < 100: return random.numberBetween(51, 60);
      default: return random.numberBetween(61, 100);
    }
  },
  relativeAge: function () {
    const r = random.dice('2d6');
    switch (true) {
      case r < 3: return 'twin';
      case r < 8: return 'older';
      case r < 13: return 'younger';
    }
  },
  childhood: function (charismaModifier) {
    const r = random.dice('3d6') + charismaModifier;
    switch (true) {
      case r < 4: return 'You are still haunted by your childhood, where you were treated badly by your peers.';
      case r < 6: return 'You spent most of your childhood alone, with no close friends.';
      case r < 9: return 'Others saw you as different or strange, and so you had few companions.';
      case r < 13: return 'You had a few close friends and lived an ordinary childhood.';
      case r < 16: return 'You had several friends, and your childhood was generally a happy one.';
      case r < 18: return 'You always found it easy to make friends and you loved being around people.';
      default: return 'Everyone knew who you were, and you had friends everywhere you went.';
    }
  },
  eventCount: function (age) {
    switch (true) {
      case age < 21: return 1;
      case age < 60: return random.dice('1d4');
      case age < 70: return random.dice('1d6');
      case age < 90: return random.dice('1d8');
      case age < 100: return random.dice('1d10');
      default: return random.dice('1d12');
    }
  },
  adventure,
  arcane,
  boon,
  crime,
  punishment,
  supernatural,
  tragedy,
  war,
  weirdStuff,
  event,
  occupation,
}
