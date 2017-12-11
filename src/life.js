const random = require('./random');

module.exports = {
  gender: function () {
    return (random.percent() > 50) ? 'male' : 'female';
  },
  age: function () {
    const r = random.dice('2d6');
    switch (true) {
      case r < 3: return 'the same age as';
      case r < 8: return 'older than';
      case r < 13: return 'younger than';
    }
  },
  childhood: function () {
    const r = random.dice('3d6');
    switch (true) {
      case r < 4: return 'You are still haunted by your childhood, where you were treated badly by your peers.';
      case r < 6: return 'You spent most of your childhood alone, with no close friends.';
      case r < 9: return 'Others saw you as different or strange, and so you had few companions.';
      case r < 13: return 'You had a few close friends and lived an ordinary childhood.';
      case r < 16: return 'You had several friends, and your childhood was generally a happy one.';
      case r < 18: return 'You always found it easy to make friends and you loved being around people.';
      case r < 19: return 'Everyone knew who you were, and you had friends everywhere you went.';
    }
  }
}
