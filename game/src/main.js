$(document).ready(function(e) {
  var ship = new Ship($('#container'));
  $('#container').on('keydown', function(e) {
    if(e.keyCode === 37) {
      ship.direction = 'left';
    }
    if (e.keyCode === 39) {
      ship.direction = 'right';
    }
  });

  var asteroid = new AddAsteroid($('#container'));
});
