const random = require('./random');

const classes = {
  'PHB': [
    {
      name: 'Barbarian', reasons: [
        'your devotion to your people lifted you in battle, making you powerful and dangerous.',
        'the spirits of your ancestors called on you to carry out a great task.',
        'you lost control in battle one day, and it was as if something else was manipulating your body, forcing it to kill every foe you could reach.',
        'you went on a spiritual journey to find yourself and instead found a spirit animal to guide, protect, and inspire you.',
        'you were struck by lightning and lived. Afterward, you found a new strength within you that let you push beyond your limitations.',
        'your anger needed to be channeled into battle, or you risked becoming an indiscriminate killer.',
      ]
    },
    {
      name: 'Bard', reasons: [
        'you awakened your latent bardic abilities through trial and error.',
        'you were a gifted performer and attracted the attention of a master bard who schooled you in the old techniques.',
        'you joined a loose society of scholars and orators to learn new techniques of performance and magic.',
        'you felt a calling to recount the deeds of champions and heroes, to bring them alive in song and story.',
        'you joined one of the great colleges to learn old lore, the secrets of magic, and the art of performance.',
        'you picked up a musical instrument one day and instantly discovered that you could play it.',
      ]
    },
    {
      name: 'Cleric', reasons: [
        'a supernatural being in service to the gods called you to become a divine agent in the world.',
        'you saw the injustice and horror in the world and felt moved to take a stand against them.',
        'your god gave you an unmistakable sign. You dropped everything to serve the divine.',
        'although you were always devout, it wasn\'t until you completed a pilgrimage that you knew your true calling.',
        'you used to serve in your religion\'s bureaucracy but found you needed to work in the world, to bring the message of your faith to the darkest corners of the land.',
        'you realize that your god works through you, and you do as commanded, even though you don’t know why you were chosen to serve.',
      ]
    },
    {
      name: 'Druid', reasons: [
        'you saw too much devastation in the wild places, too much of nature’s splendor ruined by the despoilers. You joined a circle of druids to fight back against the enemies of nature.',
        'you found a place among a group of druids after you fled a catastrophe.',
        'you have always had an affinity for animals, so you explored your talent to see how you could best use it.',
        'you befriended a druid and was moved by druidic teachings. You decided to follow your friend\'s guidance and give something back to the world.',
        'while you were growing up, you saw spirits all around you — entities no one else could perceive. You sought out the druids to help you understand the visions and communicate with these beings.',
        'you have always felt disgust for creatures of unnatural origin. For this reason, you immersed yourself the study of the druidic mysteries and became a champion of the natural order.',
      ]
    },
    {
      name: 'Fighter', reasons: [
        'you wanted to hone your combat skills, and so you joined a war college.',
        'you squired for a knight who taught you how to fight, care for a steed, and conduct yourself with honor. You decided to take up that path for yourself.',
        'horrible monsters descended on your community, killing someone you loved. You took up arms to destroy those creatures and others of a similar nature.',
        'you joined the army and learned how to fight as part of a group.',
        'you grew up fighting, and you refined your talents by defending yourself against people who crossed you.',
        'you could always pick up just about any weapon and know how to use it effectively.',
      ]
    },
    {
      name: 'Monk', reasons: [
        'you were chosen to study at a secluded monastery. There, you were taught the fundamental techniques required to eventually master a tradition.',
        'you sought instruction to gain a deeper understanding of existence and your place in the world.',
        'you stumbled into a portal to the Shadowfell and took refuge in a strange monastery, where you learned how to defend yourself against the forces of darkness.',
        'you were overwhelmed with grief after losing someone close to you, and you sought the advice of philosophers to help you cope with your loss.',
        'you could feel that a special sort of power lay within you, so you sought out those who could help you call it forth and master it.',
        'you were wild and undisciplined as a youngster, but then you realized the error of your ways. You applied to a monastery and became a monk as a way to live a life of discipline',
      ]
    },
    {
      name: 'Paladin', reasons: [
        'a fantastical being appeared before you and called on you to undertake a holy quest.',
        'one of your ancestors left a holy quest unfulfilled, so you intend to finish that work.',
        'the world is a dark and terrible place. You decided to serve as a beacon of light shining out against the gathering shadows.',
        'you served as a paladin\'s squire, learning all you needed to swear your own sacred oath.',
        'evil must be opposed on all fronts. You feel compelled to seek out wickedness and purge it from the world.',
        'becoming a paladin was a natural consequence of your unwavering faith. In taking your vows, you became the holy sword of your religion.',
      ]
    },
    {
      name: 'Ranger', reasons: [

        'you found purpose while you honed your hunting skills by bringing down dangerous animals at the edge of civilization.',
        'you always had a way with animals, able to calm them with a soothing word and a touch.',
        'you suffer from terrible wanderlust, so being a ranger gave you a reason not to remain in one place for too long.',
        'you have seen what happens when the monsters come out from the dark. You took it upon yourself to become the first line of defense against the evils that lie beyond civilization\'s borders.',
        'you met a grizzled ranger who taught you woodcraft and the secrets of the wild lands.',
        'you served in an army, learning the precepts of your profession while blazing trails and scouting enemy encampments.',
      ]
    },
    {
      name: 'Rogue', reasons: [
        'you\'ve always been nimble and quick of wit, so you decided to use those talents to help you make your way in the world.',
        'an assassin or a thief wronged you, so you focused your training on mastering the skills of your enemy to better combat foes of that sort.',
        'an experienced rogue saw something in you and taught you several useful tricks.',
        'you decided to turn your natural lucky streak into the basis of a career, though you still realize that improving your skills is essential.',
        'you took up with a group of ruffians who showed you how to get what you want through sneakiness rather than direct confrontation.',
        'you\'re a sucker for a shiny bauble or a sack of coins, as long as you can get your hands on it without risking life and limb.',
      ]
    },
    {
      name: 'Sorcerer', reasons: [
        'When you were born, all the water in the house froze solid, the milk spoiled, or all the iron turned to copper. Your family was convinced that this event was a harbinger of stranger things to come for you.',
        'you suffered a terrible emotional or physical strain, which brought forth your latent magical power. You have fought to control it ever since.',
        'your immediate family never spoke of your ancestors, and when you asked, they would change the subject. It wasn\'t until you started displaying strange talents that the full truth of your heritage came out.',
        'when a monster threatened one of your friends, you became filled with anxiety. You lashed out instinctively and blasted the wretched thing with a force that came from within.',
        'sensing something special in you, a stranger taught you how to control your gift.',
        'after you escaped from a magical conflagration, you realized that though you were unharmed, you was not unchanged. You began to exhibit unusual abilities that you are just beginning to understand.',
      ]
    },
    {
      name: 'Warlock', reasons: [
        'while wandering around in a forbidden place, you encountered an otherworldly being that offered to enter into a pact with you.',
        'you were examining a strange tome you found in an abandoned library when the entity that would become your patron suddenly appeared before you.',
        'you stumbled into the clutches of your patron after you accidentally stepped through a magical doorway.',
        'when you were faced with a terrible crisis, you prayed to any being who would listen, and the creature that answered became your patron.',
        'your future patron visited you in your dreams and offered great power in exchange for your service.',
        'one of your ancestors had a pact with your patron, so that entity was determined to bind you to the same agreement.',
      ]
    },
    {
      name: 'Wizard', reasons: [
        'an old wizard chose you from among several candidates to serve an apprenticeship.',
        'when you became lost in a forest, a hedge wizard found you, took you in, and taught you the rudiments of magic.',
        'you grew up listening to tales of great wizards and knew you wanted to follow their path. You strove to be accepted at an academy of magic and succeeded.',
        'one of your relatives was an accomplished wizard who decided you were smart enough to learn the craft.',
        'while exploring an old tomb, library, or temple, you found a spellbook. You was immediately driven to learn all you could about becoming a wizard.',
        'you were a prodigy who demonstrated mastery of the arcane arts at an early age. When you became old enough to set out on your own, you did so to learn more magic and expand your power.',
      ]
    },
  ]
};

module.exports = {
  byName: function (name) {
    return [].concat.apply([], Object.keys(classes).map(r => classes[r])).filter(r => r.name === name)[0];
  },
  random: function (sources = 'ALL') {
    return random.sourcedElement(classes, sources);
  },
  reason: function (cClass) {
    return random.element(cClass.reasons);
  },
}