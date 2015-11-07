function Ship($el) {
  this.node = $('<img id="ship" src="./pictures/ship.gif"></img>');
  this.currentDirection = 'right';
  this.SPEED = 200;
  $el.append(this.node);
}

Ship.prototype.move = function(direction){
  var direction = this.currentDirection;
  var position = this.node.position();
  if (direction === 'right') {
    position.left += 25;
  }
  if (direction === 'left') {
    position.left -= 25;
  }
}
