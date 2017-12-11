const random = require('./random');

module.exports = {
  place: function () {
    const r = random.percent();
    switch (true) {
      case r < 51: return 'at home';
      case r < 56: return 'at the home of a family friend';
      case r < 64: return 'at the home of a healer or midwife';
      case r < 66: return 'in a carriage, cart or wagon';
      case r < 69: return 'in a barn, shed or other building';
      case r < 71: return 'in a cave';
      case r < 73: return 'in a field';
      case r < 75: return 'in a forest';
      case r < 78: return 'in a temple';
      case r < 79: return 'on a battlefield';
      case r < 81: return 'in an alleyway or street';
      case r < 83: return 'in a brothel, tavern or inn';
      case r < 85: return 'in a castle, keep, tower or palace';
      case r < 86: return 'in a sewer or rubbish heap';
      case r < 89: return 'among people of a different race';
      case r < 92: return 'on board a boat or ship';
      case r < 94: return 'in a prison or in the headquarters of a secret organisation';
      case r < 96: return 'in a sage\'s laboratory';
      case r < 97: return 'in the Feywild';
      case r < 98: return 'in the Shadowfell';
      case r < 99: return 'on the Astral Plane or the Ethereal Plane';
      case r < 100: return 'on an inner plane of your choice'; // TODO: Check planes
      case r < 101: return 'on an outer plane of your choice'; // TODO: Check planes
    }
  }
  // TODO: Strange event.
}
