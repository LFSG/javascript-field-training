function Token($el) {
  this.node = $('<img id="token" src="./ship.gif"></img>');
  this.currentDirection = 'right';
  this.SPEED = 200;
  $el.append(this.node);
}
