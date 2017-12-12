const random = require('./random');

const backgrounds = {
  'PHB': [
    {
      name: 'Acolyte', reasons: [
        'you ran away from home at an early age and found refuge in a temple.',
        'your family gave you to a temple, since they were unable or unwilling to care for you.',
        'you grew up in a household with strong religious convictions. Entering the service of one or more gods seemed natural.',
        'an impassioned sermon struck a chord deep in your soul and moved you to serve the faith.',
        'you followed a childhood friend, a respected acquaintance, or someone you loved into religious service.',
        'after encountering a true servant of the gods, you were so inspired that you immediately entered the service of a religious group.'
      ]
    },
    {
      name: 'Charlatan', reasons: [
        'you were left to your own devices, and your knack for manipulating others helped you survive.',
        'you learned early on that people are gullible and easy to exploit.',
        'you often got in trouble, but you managed to talk your way out of it every time.',
        'you took up with a confidence artist, from whom you learned your craft.',
        'after a charlatan fleeced your family, you decided to learn the trade so you would never be fooled by such deception again.',
        'you were poor or you feared becoming poor, so you learned the tricks you needed to keep yourself out of poverty.',
      ]
    },
    {
      name: 'Criminal / Spy', reasons: [
        'you resented authority in my younger days and saw a life of crime as the best way to fight against tyranny and oppression.',
        'necessity forced you to take up the life, since it was the only way you could survive.',
        'you fell in with a gang of reprobates and ne\'er-do-wells, and you learned your specialty from them.',
        'a parent or relative taught you your criminal specialty to prepare you for the family business.',
        'you left home and found a place in a thieves\' guild or some other criminal organization.',
        'you were always bored, so you turned to crime to pass the time and discovered you were quite good at it.',
      ]
    },
    {
      name: 'Entertainer', reasons: [
        'members of your family made ends meet by performing, so it was fitting for you to follow their example.',
        'you always had a keen insight into other people, enough so that you could make them laugh or cry with your stories or songs.',
        'you ran away from home to follow a minstrel troupe.',
        'you saw a bard perform once, and you knew from that moment on what you were born to do.',
        'you earned coin by performing on street corners and eventually made a name for yourself.',
        'a traveling entertainer took you in and taught you the trade.',
      ]
    },
    {
      name: 'Folk Hero', reasons: [
        'you learned what was right and wrong from your family.',
        'you were always enamored by tales of heroes and wished you could be something more than ordinary.',
        'you hated your mundane life, so when it was time for someone to step up and do the right thing, you took your chance.',
        'a parent or one of your relatives was an adventurer, and you were inspired by that person\'s courage.',
        'a mad old hermit spoke a prophecy when you were born, saying that you would accomplish great things.',
        'you have always stood up for those who are weaker than you are.',
      ]
    },
    { name: 'Gladiator', reasons: [] },
    {
      name: 'Guild Artisan / Merchant', reasons: [
        'you were apprenticed to a master who taught you the guild\'s business.',
        'you helped a guild artisan keep a secret or complete a task, and in return you were taken on as an apprentice.',
        'one of your family members who belonged to the guild made a place for you.',
        'you were always good with your hands, so you took the opportunity to learn a trade.',
        'you wanted to get away from your home situation and start a new life.',
        'you learned the essentials of your craft from a mentor but had to join the guild to finish your training.',
      ]
    },
    {
      name: 'Hermit', reasons: [
        'your enemies ruined your reputation, and you fled to the wilds to avoid further disparagement.',
        'you are comfortable with being isolated, as you seek inner peace.',
        'you never liked the people you called your friends, so it was easy for you to strike out on your own.',
        'you felt compelled to forsake your past, but did so with great reluctance, and sometimes you regret making that decision.',
        'you lost everything - your home, your family, your friends. Going it alone was all you could do.',
        'society\'s decadence disgusted you, so you decided to leave it behind.',
      ]
    },
    { name: 'Knight', reasons: [] },
    {
      name: 'Noble', reasons: [
        'you come from an old and storied family, and it fell to you to preserve the family name.',
        'your family has been disgraced, and you intend to clear their name.',
        'your family recently came by its title, and that elevation thrust you into a new and strange world.',
        'your family has a title, but none of your ancestors have distinguished themselves since they gained it.',
        'your family is filled with remarkable people. You hope to live up to their example.',
        'you hope to increase your family\'s power and influence.',
      ]
    },
    {
      name: 'Outlander', reasons: [
        'you spent a lot of time in the wilderness as a youngster, and you came to love that way of life.',
        'from a young age, you couldn\'t abide the stink of the cities and preferred to spend your time in nature.',
        'you came to understand the darkness that lurks in the wilds, and you vowed to combat it.',
        'your people lived on the edges of civilization, and you learned the methods of survival from your family.',
        'after a tragedy, you retreated to the wilderness, leaving your old life behind.',
        'your family moved away from civilization, and you learned to adapt to your new environment.',
      ]
    },
    { name: 'Pirate', reasons: [] },
    {
      name: 'Sage', reasons: [
        'you were naturally curious, so you packed up and went to a university to learn more about the world.',
        'your mentor\'s teachings opened your mind to new possibilities in that field of study.',
        'you were always an avid reader, and you learned much I about your favorite topic on your own.',
        'you discovered an old library and pored over the texts you found there. That experience awakened a hunger for more knowledge.',
        'you impressed a wizard who said you were squandering your talents and should seek out an education to take advantage of your gifts.',
        'one of your parents or a relative gave you a basic education that whetted your appetite, and you left home to build on what you had learned.',
      ]
    },
    {
      name: 'Sailor', reasons: [
        'you were press-ganged by pirates and forced to serve on their ship until you finally escaped.',
        'you wanted to see the world, so you signed on as a deckhand for a merchant ship.',
        'one of your relatives was a sailor who took you to sea.',
        'you needed to escape your community quickly, so you stowed away on a ship. When the crew found you, you were forced to work for your passage.',
        'reavers attacked your community, so you found refuge on a ship until you could seek vengeance.',
        'you had few prospects where you were living, so you left to find your fortune elsewhere.'
      ]
    },
    {
      name: 'Soldier', reasons: [
        'you joined the militia to help protect your community from monsters.',
        'a relative of yours was a soldier, and you wanted to carry on the family tradition.',
        'the local lord forced you to enlist in the army.',
        'war ravaged your homeland while you were growing up. Fighting was the only life you ever knew.',
        'you wanted fame and fortune, so you joined a mercenary company, selling your sword to the highest bidder.',
        'invaders attacked your homeland. It was your duty to take up arms in defense of your people.'
      ]
    },
    {
      name: 'Urchin', reasons: [
        'wanderlust caused you to leave your family to see the world. You look after yourself.',
        'you ran away from a bad situation at home and made your own way in the world.',
        'monsters wiped out your village, and you were the sole survivor. You had to find a way to survive.',
        'a notorious thief looked after you and other orphans, and you spied and stole to earn your keep.',
        'one day you woke up on the streets, alone and hungry, with no memory of your early childhood.',
        'your parents died, leaving no one to look after you. You raised yourself.'
      ]
    },
  ],
  'TOA': [
    { name: 'Anthropologist', reasons: [] },
    { name: 'Archaeologist', reasons: [] },
  ],
  'SCG': [
    { name: 'City Watch / Investigator', reasons: [] },
    { name: 'Clan Crafter', reasons: [] },
    { name: 'Cloistered Scholar', reasons: [] },
    { name: 'Courtier', reasons: [] },
    { name: 'Faction Agent', reasons: [] },
    { name: 'Far Traveler', reasons: [] },
    { name: 'Inheritor', reasons: [] },
    { name: 'Knight of the Order', reasons: [] },
    { name: 'Mercenary Veteran', reasons: [] },
    { name: 'Urban Bounty Hunter', reasons: [] },
    { name: 'Uthgardt Tribe Member', reasons: [] },
    { name: 'Waterdhavian Noble', reasons: [] },
  ],
  'COS': [
    { name: 'Haunted One', reasons: [] }
  ]
};

module.exports = {
  byName: function (name) {
    return [].concat.apply([], Object.keys(backgrounds).map(r => backgrounds[r])).filter(r => r.name === name)[0];
  },
  reason: function (background) {
    return random.element(background.reasons);
  },
  random: function (sources = 'ALL') {
    return random.sourcedElement(backgrounds, sources);
  }
}