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
      ],
      traits: [
        'I idolize a particular hero of my faith, and constantly refer to that person\'s deeds and example.',
        'I can find common ground between the fiercest enemies, empathizing with them and always working toward peace.',
        'I see omens in every event and action. The gods try to speak to us, we just need to listen.',
        'Nothing can shake my optimistic attitude',
        'I quote (or misquote) sacred texts and proverbs in almost every situation.',
        'I am tolerant (or intolerant) of other faiths and respect (or condemn) the worship of other gods.',
        'I\'ve enjoyed fine food, drink, and high society among my temple\'s elite. Rough living grates on me.',
        'I\'ve spent so long in the temple that I have little practical experience dealing with people in the outside world.'
      ],
      ideals: [
        'Tradition. The ancient traditions of worship and sacrifice must be preserved and upheld.',
        'Charity. I always try to help those in need, no matter what the personal cost.',
        'Change. We must help bring about the changes the gods are constantly working in the world.',
        'Power. I hope to one day rise to the top of my faith\'s religious hierarchy.',
        'Faith. I trust that my deity will guide my actions. I have faith that if I work hard, things will go well.',
        'Aspiration. I seek to prove myself worthy of my god\'s favor by matching my actions against his or her teachings.'
      ],
      bonds: [
        'I would die to recover an ancient relic of my faith that was lost long ago.',
        'I will someday get revenge on the corrupt temple hierarchy who branded me a heretic.',
        'I owe my life to the priest who took me in when my parents died.',
        'Everything I do is for the common people.',
        'I will do anything to protect the temple where I served.',
        'I seek to preserve a sacred text that my enemies consider heretical and seek to destroy.'
      ],
      flaws: [
        'I judge others harshly, and myself even more severely.',
        'I put too much trust in those who wield power within my temple\'s hierarchy.',
        'My piety sometimes leads me to blindly trust those that profess faith in my god.',
        'I am inflexible in my thinking.',
        'I am suspicious of strangers and expect the worst of them.',
        'Once I pick a goal, I become obsessed with it to the detriment of everything else in my life.'
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
      ],
      traits: [
        'I fall in and out of love easily, and am always pursuing someone.',
        'I have a joke for every occasion, especially occasions where humor is inappropriate.',
        'Flattery is my preferred trick for getting what I want,',
        'I\'m a born gambler who can\'t resist taking a risk for a potential payoff.',
        'I lie about almost everything, even when there\'s no good reason to.',
        'Sarcasm and insults are my weapons of choice.',
        'I keep multiple holy symbols on me and invoke whatever deity might come in useful at any given moment.',
        'I pocket anything I see that might have some value.',
      ],
      ideals: [
        'Independence. I am a free spirit - no one tells me what to do. (Chaotic)',
        'Fairness. I never target people who can\'t afford to lose a few coins. (Lawful)',
        'Charity. I distribute the money I acquire to the people who really need it. (Good)',
        'Creativity. I never run the same con twice. (Chaotic)',
        'Friendship. Material goods come and go. Bonds of friendship last forever. (Good)',
        'Aspiration. I\'m determined to make something of myself. (Any)',
      ],
      bonds: [
        'I fleeced the wrong person and must work to ensure that this individual never crosses paths with me or those I care about.',
        'I owe everything to my mentor - a horrible person who\'s probably rotting in jail somewhere.',
        'Somewhere out there, I have a child who doesn\'t know me. I\'m making the world better for him or her.',
        'I come from a noble family, and one day I\'ll reclaim my lands and title from those who stole them from me.',
        'A powerful person killed someone I love. Some day soon, I\'ll have my revenge.',
        'I swindled and ruined a person who didn\'t deserve ill. I seek to atone for my misdeeds but might never be able to forgive myself.',
      ],
      flaws: [
        'I can\'t resist a pretty face.',
        'I\'m always in debt. I spend my ill-gotten gains on decadent luxuries faster than I bring them in.',
        'I\'m convinced that no one could ever fool me the way I fool others.',
        'I\'m too greedy for my own good. I can\'t resist taking a risk if there\'s money involved.',
        'I can\'t resist swindling people who are more powerful than me.',
        'I hate to admit it and will hate myself for it, but I\'ll run and preserve my own hide if the going gets tough.',
      ],
      other: {
        'Scam': [
          'I cheat at games of chance.',
          'I shave coins or forge documents.',
          'I insinuate myself into people\'s lives to prey on their weakness and secure their fortunes.',
          'I put on new identities like clothes.',
          'I run sleight-of.hand cons on street corners.',
          'I convince people that worthless junk is worth their hard.earned money.',
        ]
      }
    },
    {
      name: 'Criminal', reasons: [
        'you resented authority in my younger days and saw a life of crime as the best way to fight against tyranny and oppression.',
        'necessity forced you to take up the life, since it was the only way you could survive.',
        'you fell in with a gang of reprobates and ne\'er-do-wells, and you learned your specialty from them.',
        'a parent or relative taught you your criminal specialty to prepare you for the family business.',
        'you left home and found a place in a thieves\' guild or some other criminal organization.',
        'you were always bored, so you turned to crime to pass the time and discovered you were quite good at it.',
      ],
      other: {
        'Criminal Specialty': ['Blackmailer', 'Burglar', 'Enforcer', 'Fence', 'Highway robber', 'Hired killer', 'Pickpocket', 'Smuggler']
      },
      traits: [
        'I always have a plan for what to do when things go wrong.',
        'I am always calm, no matter what the situation. I never raise my voice or let my emotions control me.',
        'The first thing I do in a new place is note the locations of everything valuable—or where such things could be hidden.',
        'I would rather make a new friend than a new enemy.',
        'I am incredibly slow to trust. Those who seem the fairest often have the most to hide.',
        'I don\'t pay attention to the risks in a situation. Never tell me the odds.',
        'The best way to get me to do something is to tell me I can\'t do it.',
        'I blow up at the slightest insult.'
      ],
      ideals: [
        'Honor. I don\'t steal from others in the trade. (Lawful)',
        'Freedom. Chains are meant to be broken, as are those who would forge them. (Chaotic)',
        'Charity. I steal from the wealthy so that I can help people in need. (Good)',
        'Greed. I will do whatever it takes to become wealthy. (Evil)',
        'People. I\'m loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care. (Neutral)',
        'Redemption. There\'s a spark of good in everyone. (Good)'
      ],
      bonds: [
        'I\'m trying to pay off an old debt I owe to a generous benefactor.',
        'My ill-gotten gains go to support my family.',
        'Something important was taken from me, and I aim to steal it back.',
        'I will become the greatest thief that ever lived.',
        'I\'m guilty of a terrible crime. I hope I can redeem myself for it.',
        'Someone I loved died because of I mistake I made. That will never happen again.',
      ],
      flaws: [
        'When I see something valuable, I can\'t think about anything but how to steal it.',
        'When faced with a choice between money and my friends, I usually choose the money.',
        'If there\'s a plan, I\'ll forget it. If I don\'t forget it, I\'ll ignore it.',
        'I have a "tell" that reveals when I\'m lying.',
        'I turn tail and run when things look bad.',
        'An innocent person is in prison for a crime that I committed. I\'m okay with that.',
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
      ],
      traits: [
        'I know a story relevant to almost every situation.',
        'Whenever I come to a new place, I collect local rumors and spread gossip.',
        'I\'m a hopeless romantic, always searching for that &quot;special someone.&quot;',
        'Nobody stays angry at me or around me for long, since I can defuse any amount of tension.',
        'I love a good insult, even one directed at me.',
        'I get bitter if I\'m not the center of attention.',
        'I\'ll settle for nothing less than perfection.',
        'I change my mood or my mind as quickly as I change key in a song.',
      ],
      ideals: [
        'Beauty. When I perform, I make the world better than it was. (Good)',
        'Tradition. The stories, legends, and songs of the past must never be forgotten, for they teach us who we are. (Lawful)',
        'Creativity. The world is in need of new ideas and bold action. (Chaotic)',
        'Greed. I\'m only in it for the money and fame. (Evil)',
        'People. I like seeing the smiles on people\'s faces when I perform.that\'s all that matters. (Neutral)',
        'Honesty. Art should reflect the soul; it should come',
      ],
      bonds: [
        'My instrument is my most treasured possession, and it reminds me of someone I love.',
        'Someone stole my precious instrument, and someday I\'ll get it back.',
        'I want to be famous, whatever it takes.',
        'I idolize a hero of the old tales and measure my deeds against that person\'s.',
        'I will do anything to prove myself superior to my hated rival.',
        'I would do anything for the other members of my old troupe.',
      ],
      flaws: [
        'I\'ll do anything lo win fame and renown.',
        'I\'m a sucker for a pretty face.',
        'A scandal prevents me from ever going home again. That kind of trouble seems to follow me around.',
        'I once satirized a noble who still wants my head. It was a mistake that I will likely repeat.',
        'I have trouble keeping my true feelings hidden. My sharp tongue lands me in trouble.',
        'Despite my best efforts, I am unreliable to my friends.',
      ],
      other: {
        'Routine': ['Actor', 'Dancer', 'Fire-eater', 'Jester', 'Juggler', 'Instrumentalist', 'Poet', 'Singer', 'Storyteller', 'Tumbler']
      }
    },
    {
      name: 'Folk Hero', reasons: [
        'you learned what was right and wrong from your family.',
        'you were always enamored by tales of heroes and wished you could be something more than ordinary.',
        'you hated your mundane life, so when it was time for someone to step up and do the right thing, you took your chance.',
        'a parent or one of your relatives was an adventurer, and you were inspired by that person\'s courage.',
        'a mad old hermit spoke a prophecy when you were born, saying that you would accomplish great things.',
        'you have always stood up for those who are weaker than you are.',
      ],
      traits: [
        'I judge people by their actions, not their words.',
        'If someone is in trouble, I\'m always ready to lend help.',
        'When I set my mind to something, I follow through no matter what gets in my way.',
        'I have a strong sense of fair play and always try to find the most equitable solution to arguments.',
        'I\'m confident in my own abilities and do what I can to instill confidence in others.',
        'Thinking is for other people. I prefer action.',
        'I misuse long words in an attempt to sound smarter.',
        'I get bored easily. When am I going to get on with my destiny?',
      ],
      ideals: [
        'Respect. People deserve to be treated with dignity and respect. (Good)',
        'Fairness. No one should get preferential treatment before the law, and no one is above the law. (Lawful)',
        'Freedom. Tyrants must not be allowed to oppress the people. (Chaotic)',
        'Might. If I become strong, I can take what I want—what I deserve. (Evil)',
        'Sincerity. There\'s no good in pretending to be something I\'m not. (Neutral)',
        'Destiny. Nothing and no one can steer me away from my higher calling. (Any)',
      ],
      bonds: [
        'I have a family, but I have no idea where they are. One day, I hope to see them again.',
        'I worked the land, I love the land, and I will protect the land.',
        'A proud noble once gave me a horrible beating, and I will take my revenge on any bully I encounter.',
        'My tools are symbols of my past life, and I carry them so that I will never forget my roots.',
        'I protect those who cannot protect themselves.',
        'I wish my childhood sweetheart had come with me to pursue my destiny.',
      ],
      flaws: [
        'The tyrant who rules my land will stop at nothing to see me killed.',
        'I\'m convinced of the significance of my destiny, and blind to my shortcomings and the risk of failure.',
        'The people who knew me when I was young know my shameful secret, so I can never go home again.',
        'I have a weakness for the vices of the city, especially hard drink.',
        'Secretly, I believe that things would be better if I were a tyrant lording over the land.',
        'I have trouble trusting in my allies.',
      ],
      other: {
        'Defining Event': [
          'I stood up to a tyrant\'s agents.',
          'I saved people during a natural disaster.',
          'I stood alone against a terrible monster.',
          'I stole from a corrupt merchant to help the poor.',
          'I led a militia to fight off an invading army.',
          'I broke into a tyrant\'s castle and stole weapons to arm the people.',
          'I trained the peasantry to use farm implements as weapons against a tyrant\'s soldiers.',
          'A lord rescinded an unpopular decree after I led a symbolic act of protest against it.',
          'A celestial, fey, or similar creature gave me a blessing or revealed my secret origin.',
          'Recruited into a lord\'s army, I rose to leadership and was commended for my heroism.',
        ]
      }
    },
    {
      name: 'Guild Artisan / Merchant', reasons: [
        'you were apprenticed to a master who taught you the guild\'s business.',
        'you helped a guild artisan keep a secret or complete a task, and in return you were taken on as an apprentice.',
        'one of your family members who belonged to the guild made a place for you.',
        'you were always good with your hands, so you took the opportunity to learn a trade.',
        'you wanted to get away from your home situation and start a new life.',
        'you learned the essentials of your craft from a mentor but had to join the guild to finish your training.',
      ],
      traits: [
        'I believe that anything worth doing is worth doing right. I can\'t help it-I\'m a perfectionist.',
        'I\'m a snob who looks down on those who can\'t appreciate fine art.',
        'I always want to know how things work and what makes people tick.',
        'I\'m full of witty aphorisms and have a proverb for every occasion.',
        'I\'m rude to people who lack my commitment to hard work and fair play.',
        'I like to talk at length about my profession.',
        'I don\'t part with my money easily and will haggle tirelessly to get the best deal possible.',
        'I\'m well known for my work, and I want to make sure everyone appreciates it. I\'m always taken aback when people haven\'t heard of me.',
      ],
      ideals: [
        'Community. It is the duty of all civilized people to strengthen the bonds of community and the security of civilization. (Lawful)',
        'Generosity. My talents were given to me so that I could use them to benefit the world. (Good)',
        'Freedom. Everyone should be free to pursue his or her own livelihood. (Chaotic)',
        'Greed. I\'m only in it for the money. (Evil)',
        'People. I\'m committed to the people I care about, not to ideals. (Neutral)',
        'Aspiration. I work hard to be the best there is at my craft.',
      ],
      bonds: [
        'The workshop where I learned my trade is the most important place in the world to me.',
        'I created a great work for someone, and then found them unworthy to receive it. I\'m still looking for someone worthy.',
        'I owe my guild a great debt for forging me into the person I am today.',
        'I pursue wealth to secure someone\'s love.',
        'One day I will return to my guild and prove that I am the greatest artisan of them all.',
        'I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood.',
      ],
      flaws: [
        'I\'ll do anything to get my hands on something rare or priceless.',
        'I\'m quick to assume that someone Is trying to cheat me.',
        'No one must ever learn that I once stole money from guild coffers.',
        'I\'m never satisfied with what I have-I always want more.',
        'I would kill to acquire a noble title.',
        'I\'m horribly jealous of anyone who can outshine my handiwork. Everywhere I go, I\'m surrounded by rivals.',
      ],
      other: {
        'Business': [
          'Alchemists and apothecaries',
          'Armorers, locksmiths, and fine-smiths',
          'Brewers, distillers, and vintners',
          'Calligraphers, scribes, and scriveners',
          'Carpenters, roofers, and plasterers',
          'Cartographers, surveyors, and chart-makers',
          'Cobblers and shoemakers',
          'Cooks and bakers',
          'Glassblowers and glaziers',
          'Jewelers and gem-cutters',
          'Leather-workers, skinners, and tanners',
          'Masons and stone-cutters',
          'Painters, liners, and sign-makers',
          'Potters and tile-makers',
          'Shipwrights and sail-makers',
          'Smiths and metal-forgers',
          'Tinkers, pewterers, and casters',
          'Wagon-makers and wheelwrights',
          'Weavers and dyers',
          'Woodcarvers, coopers, and bowyers',
        ]
      }
    },
    {
      name: 'Hermit', reasons: [
        'your enemies ruined your reputation, and you fled to the wilds to avoid further disparagement.',
        'you are comfortable with being isolated, as you seek inner peace.',
        'you never liked the people you called your friends, so it was easy for you to strike out on your own.',
        'you felt compelled to forsake your past, but did so with great reluctance, and sometimes you regret making that decision.',
        'you lost everything - your home, your family, your friends. Going it alone was all you could do.',
        'society\'s decadence disgusted you, so you decided to leave it behind.',
      ],
      traits: [
        'I\'ve been isolated for so long that I rarely speak, preferring gestures and the occasional grunt.',
        'I am utterly serene, even in the face of disaster.',
        'The leader of my community had something wise to say on every topic, and I am eager to share that wisdom.',
        'I feel tremendous empathy for all who suffer.',
        'I\'m oblivious to etiquette and social expectations.',
        'I connect everything that happens to me to a grand, cosmic plan.',
        'I often get lost in my own thoughts and contemplation, becoming oblivious to my surroundings.',
        'I am working on a grand philosophical theory and love sharing my ideas.',
      ],
      ideals: [
        'Greater Good. My gifts are meant to be shared with all, not used for my own benefit. (Good)',
        'Logic. Emotions must not cloud our sense of what is right and true, or our logical thinking. (Lawful)',
        'Free Thinking. Inquiry and curiosity are the pillars of progress. (Chaotic)',
        'Power. Solitude and contemplation are paths toward mystical or magical power. (Evil)',
        'Live and Let Live. Meddling in the affairs of others only causes trouble. (Neutral)',
        'Self-Knowledge. If you know yourself, there\'s nothing left to know. (Any)',
      ],
      bonds: [
        'Nothing is more important than the other members of my hermitage, order, or association.',
        'I entered seclusion to hide from the ones who might still be hunting me. I must someday confront them.',
        'I\'m still seeking the enlightenment I pursued in my seclusion, and it still eludes me.',
        'I entered seclusion because I loved someone I could not have.',
        'Should my discovery come to light, it could bring ruin to the world.',
        'My isolation gave me great insight into a great evil that only I can destroy.',
      ],
      flaws: [
        'Now that I\'ve returned to the world, I enjoy its delights a little too much.',
        'I harbor dark, bloodthirsty thoughts that my isolation and meditation failed to quell.',
        'I am dogmatic in my thoughts and philosophy.',
        'I let my need to win arguments overshadow friendships and harmony.',
        'I\'d risk too much to uncover a lost bit of knowledge.',
        'I like keeping secrets and won\'t share them with anyone.',
      ],
      other: {
        'Life of Seclusion': [
          'I was searching for spiritual enlightenment.',
          'I was partaking of communal living in accordance with the dictates of a religious order.',
          'I was exiled for a crime I didn\'t commit.',
          'I retreated from society after a life-altering event.',
          'I needed a quiet place to work on my art, literature, music, or manifesto.',
          'I needed to commune with nature, far from civilization.',
          'I was the caretaker of an ancient ruin or relic.',
          'I was a pilgrim in search of a person, place, or relic of spiritual significance.',
        ]
      }
    },
    {
      name: 'Noble', reasons: [
        'you come from an old and storied family, and it fell to you to preserve the family name.',
        'your family has been disgraced, and you intend to clear their name.',
        'your family recently came by its title, and that elevation thrust you into a new and strange world.',
        'your family has a title, but none of your ancestors have distinguished themselves since they gained it.',
        'your family is filled with remarkable people. You hope to live up to their example.',
        'you hope to increase your family\'s power and influence.',
      ],
      traits: [
        'My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world.',
        'The common folk love me for my kindness and generosity.',
        'No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses.',
        'I take great pains to always look my best and follow the latest fashions.',
        'I don\'t like to get my hands dirty, and I won\'t be caught dead in unsuitable accommodations.',
        'Despite my noble birth, I do not place myself above other folk. We all have the same blood.',
        'My favor, once lost, is lost forever.',
        'If you do me an injury, I will crush you, ruin your name, and salt your fields.',
      ],
      ideals: [
        'Respect. Respect is due to me because of my position, but all people regardless of station deserve to be treated with dignity. (Good)',
        'Responsibility. It is my duty to respect the authority of those above me, just as those below me must respect mine. (Lawful)',
        'Independence. I must prove that I can handle myself without the coddling of my family. (Chaotic)',
        'Power. If I can attain more power, no one will tell me what to do. (Evil)',
        'Family. Blood runs thicker than water. (Any)',
        'Noble Obligation. It is my duty to protect and care for the people beneath me. (Good)',
      ],
      bonds: [
        'I will face any challenge to win the approval of my family.',
        'My house\'s alliance with another noble family must be sustained at all costs.',
        'Nothing is more important than the other members of my family.',
        'I am in love with the heir of a family that my family despises.',
        'My loyalty to my sovereign is unwavering.',
        'The common folk must see me as a hero of the people.',
      ],
      flaws: [
        'I secretly believe that everyone is beneath me.',
        'I hide a truly scandalous secret that could ruin my family forever.',
        'I too often hear veiled insults and threats in every word addressed to me, and I\'m quick to anger.',
        'I have an insatiable desire for carnal pleasures.',
        'In fact, the world does revolve around me.',
        'By my words and actions, I often bring shame to my family.',
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
      ],
      traits: [
        'I\'m driven by a wanderlust that led me away from home.',
        'I watch over my friends as if they were a litter of newborn pups.',
        'I once ran twenty-five miles without stopping to warn to my e1an of an approaching ore horde. I\'d do it again if I had to.',
        'I have a lesson for every situation, drawn from observing nature.',
        'I place no stock in wealthy or well-mannered folk. Money and manners won\'t save you from a hungry owlbear.',
        'I\'m always picking things up, absently fiddling with them, and sometimes accidentally breaking them.',
        'I feel far more comfortable around animals than people.',
        'I was, in fact, raised by wolves.',
      ],
      ideals: [
        'Change. Life is like the seasons, in constant change, and we must change with it. (Chaotic)',
        'Greater Good. It is each person\'s responsibility to make the most happiness for the whole tribe. (Good)',
        'Honor. If I dishonor myself, I dishonor my whole clan. (Lawful)',
        'Might. The strongest are meant to rule. (Evil)',
        'Nature. The natural world is more important than ali the constructs of civilization. (Neutral)',
        'Glory. I must earn glory in battle, for myself and my clan. (Any)',
      ],
      bonds: [
        'My family, clan, or tribe is the most important thing in my life, even when they are far from me.',
        'An injury to the unspoiled wilderness of my home is an injury to me.',
        'I will bring terrible wrath down on the evildoers who destroyed my homeland.',
        'I am the last of my tribe, and it is up to me to ensure their names enter legend.',
        'I suffer awful visions of a coming disaster and will do anything to prevent it.',
        'It is my duty to provide children to sustain my tribe.',
      ],
      flaws: [
        'I am too enamored of ale, wine, and other intoxicants.',
        'there\'s no room for caution in a life lived to the fullest.',
        'I remember every insult I\'ve received and nurse a silent resentment toward anyone who\'s ever wronged me.',
        'Iam slow to trust members of other races, tribes, and societies.',
        'Violence is my answer to almost any challenge.',
        'don\'t expect me to save those who can\'t save themselves. It is nature\'s way that the strong thrive and the weak perish.',
      ],
      other: {
        'Origin': ['Forester ', 'Trapper', 'Homesteader', 'Guide', 'Exile or outcast', 'Bounty hunter', 'Pilgrim', 'Tribal nomad', 'Hunter-gatherer', 'Tribal marauder']
      }
    },
    {
      name: 'Sage', reasons: [
        'you were naturally curious, so you packed up and went to a university to learn more about the world.',
        'your mentor\'s teachings opened your mind to new possibilities in that field of study.',
        'you were always an avid reader, and you learned much I about your favorite topic on your own.',
        'you discovered an old library and pored over the texts you found there. That experience awakened a hunger for more knowledge.',
        'you impressed a wizard who said you were squandering your talents and should seek out an education to take advantage of your gifts.',
        'one of your parents or a relative gave you a basic education that whetted your appetite, and you left home to build on what you had learned.',
      ],
      traits: [
        'I use polysyllabic words that convey the impression of great erudition.',
        'I\'ve read every book in the world\'s greatest libraries—or I like to boast that I have.',
        'I\'m used to helping out those who aren\'t as smart as I am, and I patiently explain anything and everything to others.',
        'There\'s nothing I like more than a good mystery.',
        'I\'m willing to listen to every side of an argument before I make my own judgment.',
        'I … speak … slowly … when talking … to idiots, … which … almost … everyone … is … compared … to me.',
        'I am horribly, horribly awkward in social situations.',
        'I\'m convinced that people are always trying to steal my secrets.',
      ],
      ideals: [
        'Knowledge. The path to power and self-improvement is through knowledge. (Neutral)',
        'Beauty. What is beautiful points us beyond itself toward what is true. (Good)',
        'Logic. Emotions must not cloud our logical thinking. (Lawful)',
        'No Limits. Nothing should fetter the infinite possibility inherent in all existence. (Chaotic)',
        'Power. Knowledge is the path to power and domination. (Evil)',
        'Self-Improvement. The goal of a life of study is the betterment of oneself. (Any)',
      ],
      bonds: [
        'It is my duty to protect my students.',
        'I have an ancient text that holds terrible secrets that must not fall into the wrong hands.',
        'I work to preserve a library, university, scriptorium, or monastery.',
        'My life\'s work is a series of tomes related to a specific field of lore.',
        'I\'ve been searching my whole life for the answer to a certain question.',
        'I sold my soul for knowledge. I hope to do great deeds and win it back.',
      ],
      flaws: [
        'I am easily distracted by the promise of information.',
        'Most people scream and run when they see a demon. I stop and take notes on its anatomy.',
        'Unlocking an ancient mystery is worth the price of a civilization.',
        'I overlook obvious solutions in favor of complicated ones.',
        'I speak without really thinking through my words, invariably insulting others.',
        'I can\'t keep a secret to save my life, or anyone else\'s.',
      ], other: {
        'Specialty': ['Alchemist', 'Astronomer', 'Discredited academic', 'Librarian', 'Professor', 'Researcher', 'Wizard\'s apprentice', 'Scribe']
      }
    },
    {
      name: 'Sailor', reasons: [
        'you were press-ganged by pirates and forced to serve on their ship until you finally escaped.',
        'you wanted to see the world, so you signed on as a deckhand for a merchant ship.',
        'one of your relatives was a sailor who took you to sea.',
        'you needed to escape your community quickly, so you stowed away on a ship. When the crew found you, you were forced to work for your passage.',
        'reavers attacked your community, so you found refuge on a ship until you could seek vengeance.',
        'you had few prospects where you were living, so you left to find your fortune elsewhere.'
      ],
      traits: [
        'My friends know they can rely on me, no matter what.',
        'I work hard so that I can play hard when the work is done.',
        'I enjoy sailing into new ports and making new friends over a flagon of ale.',
        'I stretch the truth for lhe sake of a good story.',
        'To me, a tavern brawl is a nice way to get to know a new city.',
        'I never pass up a friendly wager.',
        'My language is as foul as an otyugh nest.',
        'I like a job well done, especially if I can convince someone else to do it.',
      ],
      ideals: [
        'Respect. The thing that keeps a ship together is mutual respect between captain and crew. (Good)',
        'Fairness. We all do the work, so we ali share in the rewards. (Lawful)',
        'Freedom. The sea is freedom-the freedom to go anywhere and do anything. (Chaotic)',
        'Mastery. I\'m a predator, and the other ships on the sea are my prey. (Evil)',
        'People. I\'m committed to my crewmates, not to ideals. (Neutral)',
        'Aspiration. Someday I\'ll own my own ship and chart my own destiny. (Any)',
      ],
      bonds: [
        'I\'m loyal to my captain first, everything else second.',
        'The ship is most important-crewmates and captains come and go.',
        'I\'ll always remember my first ship.',
        'In a harbor town, I have a paramour whose eyes nearly stole me from the sea.',
        'I was cheated out of my fair share of lhe profits, and I want to get my due.',
        'Ruthless pirates murdered my captain and crewmates, plundered our ship, and left me to die. Vengeance will be mine.',
      ],
      flaws: [
        'I follow orders, even if I think they\'re wrong.',
        'I\'ll say anything lo avoid having to do extra work.',
        'Once someone questions my courage, I never back down no matter how dangerous the situation.',
        'Once I start drinking, It\'s hard for me to stop.',
        'I can\'t help but pocket loose coins and other trinkets I come across.',
        'My pride will probably lead to my destruction.',
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
      ],
      traits: [
        'I\'m always polite and respectful.',
        'I\'m haunted by memories of war. I can\'t get the images of violence out of my mind.',
        'I\'ve lost too many friends, and I\'m slow to make new ones.',
        'I\'m full of inspiring and cautionary tales from my military experience relevant to almost every combat situation.',
        'I can stare down a hell hound without flinching.',
        'I enjoy being strong and like breaking things.',
        'I have a crude sense of humor.',
        'I face problems head-on. A simple, direct solution is the best path to success.',
      ],
      ideals: [
        'Greater Good. Our lot is to lay down our lives in defense of others. (Good)',
        'Responsibility. I do what I must and obey just authority. (Lawful)',
        'Independence. When people follow orders blindly, they embrace a kind of tyranny. (Chaotic)',
        'Might. In life as in war, the stronger force wins. (Evil)',
        'Live and Let Live. Ideals aren\'t worth killing over or going to war for. (Neutral)',
        'Nation. My city, nation, or people are all that matter. (Any)',
      ],
      bonds: [
        'I would still lay down my life for the people I served with.',
        'Someone saved my life on the battlefield. To this day, I will never leave a friend behind.',
        'My honor is my life.',
        'I\'ll never forget the crushing defeat my company suffered or the enemies who dealt it.',
        'Those who fight beside me are those worth dying for.',
        'I fight for those who cannot fight for themselves.',
      ],
      flaws: [
        'The monstrous enemy we faced in battle still leaves me quivering with fear.',
        'I have little respect for anyone who is not a proven warrior.',
        'I made a terrible mistake in battle that cost many lives—and I would do anything to keep that mistake secret.',
        'My hatred of my enemies is blind and unreasoning.',
        'I obey the law, even if the law causes misery.',
        'I\'d rather eat my armor than admit when I\'m wrong.',
      ],
      other: {
        'Other': ['Officer', 'Scout', 'Infantry', 'Cavalry', 'Healer', 'Quartermaster', 'Standard bearer', 'Support staff (cook, blacksmith, or the like)']
      }
    },
    {
      name: 'Urchin', reasons: [
        'wanderlust caused you to leave your family to see the world. You look after yourself.',
        'you ran away from a bad situation at home and made your own way in the world.',
        'monsters wiped out your village, and you were the sole survivor. You had to find a way to survive.',
        'a notorious thief looked after you and other orphans, and you spied and stole to earn your keep.',
        'one day you woke up on the streets, alone and hungry, with no memory of your early childhood.',
        'your parents died, leaving no one to look after you. You raised yourself.'
      ],
      traits: [
        'I hide scraps of food and trinkets away in my pockets.',
        'I ask a lot of questions.',
        'I like to squeeze into small places where no one else can help me.',
        'I sleep with my back to a wall or tree, with everything I own wrapped in a bundle in my arms.',
        'I eat like a pig and have bad manners.',
        'I think anyone who\'s nice to me is hiding evil intent.',
        'I don\'t like to bathe.',
        'I bluntly say what other people are hinting at or hiding.',
      ],
      ideals: [
        'Respect. Ali people, rich ar poor, deserve respect. (Good)',
        'Community. We have to take care of each other, because no one else is going to do it. (Lawful)',
        'Change. The low are lifted up, and the high and mighty are brought down. Change is the nature of things. (Chaotic)',
        'Retribution. The rich need to be shown what life and death are like in the gutters. (Evil)',
        'People. I help the people who help me-that\'s what keeps us alive. (Neutral)',
        'Aspiration. I\'m going to prove that I\'m worthy of a better life.',
      ],
      bonds: [
        'My town or city is my home, and I\'ll fight to defend it.',
        'I sponsor an orphanage to keep others from enduring what I was forced to endure.',
        'I owe my survival to another urchin who taught me to live on the streets.',
        'I owe a debt I can never repay to the person who took pity on me.',
        'I escaped my life of poverty by robbing an important person, and I\'m wanted for it.',
        'No one else should have to endure the hardships I\'ve been through.',
      ],
      flaws: [
        'If I\'m outnumbered, I will run away from a fight.',
        'Gold seems like a lot of money to me, and I\'ll do just about anything for more of it.',
        'I will never fully trust anyone other than myself.',
        'I\'d rather kill someone in their sleep then fight fair.',
        'It\'s not stealing if I need It more than someone else.',
        'People who can\'t take care of themselves get what they deserve.',
      ]
    },
  ],
  // 'TOA': [
  //   { name: 'Anthropologist', reasons: [] },
  //   { name: 'Archaeologist', reasons: [] },
  // ],
  // 'SCG': [
  //   { name: 'City Watch / Investigator', reasons: [] },
  //   { name: 'Clan Crafter', reasons: [] },
  //   { name: 'Cloistered Scholar', reasons: [] },
  //   { name: 'Courtier', reasons: [] },
  //   { name: 'Faction Agent', reasons: [] },
  //   { name: 'Far Traveler', reasons: [] },
  //   { name: 'Inheritor', reasons: [] },
  //   { name: 'Knight of the Order', reasons: [] },
  //   { name: 'Mercenary Veteran', reasons: [] },
  //   { name: 'Urban Bounty Hunter', reasons: [] },
  //   { name: 'Uthgardt Tribe Member', reasons: [] },
  //   { name: 'Waterdhavian Noble', reasons: [] },
  // ],
  // 'COS': [
  //   { name: 'Haunted One', reasons: [] }
  // ]
};

module.exports = {
  byName: function (name) {
    return [].concat.apply([], Object.keys(backgrounds).map(r => backgrounds[r])).filter(r => r.name === name)[0];
  },
  reason: function (background) {
    return random.element(background.reasons);
  },
  trait: function (background) {
    return random.element(background.traits || []);
  },
  ideal: function (background) {
    return random.element(background.ideals || []);
  },
  bond: function (background) {
    return random.element(background.bonds || []);
  },
  flaw: function (background) {
    return random.element(background.flaws || []);
  },
  other: function (background) {
    if (!background.other) return [];
    return Object.keys(background.other).map(o => [o, random.element(background.other[o])]);
  },
  random: function (sources = 'ALL') {
    return random.sourcedElement(backgrounds, sources);
  }
}