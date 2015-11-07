function Token($el) {
  this.node = $('<img id="token" src="./pictures/ship.gif"></img>');
  this.currentDirection = 'right';
  this.SPEED = 200;
  $el.append(this.node);
}

Token.prototype.move = function(direction){
  var direction = this.currentDirection;
  var position = this.node.position();
  if (direction === 'right') {
    position.left += 25;
  }
  if (direction === 'left') {
    position.left -= 25;
  }
}
