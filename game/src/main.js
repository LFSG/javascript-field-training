$(document).ready(function(e) {
  var ship = new Ship($('#container'));
  $('body').on('keydown', function(e) {
    if(e.keyCode === 37) {
      ship.direction = 'left';
    }
    if (e.keyCode === 39) {
      ship.direction = 'right';
    }
  });
  function generateRock() {
    var asteroid = new AddAsteroid($('#container'));
    return asteroid;
  }
  generateRock();
  setInterval(generateRock, Math.floor(Math.random() * 1000)+1000);
});
