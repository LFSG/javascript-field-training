$(document).ready(function(e) {
  var ship = new Ship($('#container'));
  $('body').on('keydown', function(e) {
    ship.node.removeClass();
    if(e.keyCode === 37) {
      ship.direction = 'left';
      ship.node.addClass('rotateW');
    }
    if (e.keyCode === 39) {
      ship.direction = 'right';
      ship.node.addClass('rotateE');
    }
    if (e.keyCode === 38) {
      ship.direction = 'up';
      ship.node.addClass('rotateN');
    }
    if (e.keyCode === 40) {
      ship.direction = 'down';
      ship.node.addClass('rotateS');
    }
  });
  function generateRock() {
    var asteroid = new AddAsteroid($('#container'));
    return asteroid;
  }

  function generateBonus() {
    var bonusToken = new AddBonusToken($('#container'));
  }
  generateRock();
  setInterval(generateRock, Math.floor(Math.random() * 1000)+1000);

  generateBonus();
  setInterval(generateBonus, Math.floor(Math.random() * 1000)+4000);
});
