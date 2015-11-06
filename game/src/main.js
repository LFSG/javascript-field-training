$(document).ready(function(e) {
  var token = new Token($('#container'));
  $('#container').on('keydown', function(e) {
    if(e.keyCode === 37) {
      token.direction = 'left';
    }
    if (e.keyCode === 39) {
      token.direction = 'right';
    }
  });

  var asteroid = new AddAsteroid($('#container'));
});
