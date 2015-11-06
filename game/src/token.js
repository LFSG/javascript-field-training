function Token($el) {
  this.node = $('<img id="token" src="./pictures/ship.gif"></img>');
  this.direction = 'right';
  this.SPEED = 0.5;
  this.node.css({left: 8});
  $el.append(this.node);
  setTimeout(this.move.bind(this), this.SPEED);
}

Token.prototype.move = function(){
  console.log(this.direction);

  var direction = this.direction;
  var position = this.node.position();
  if (direction === 'right') {
    position.left += 1;
  }
  if (direction === 'left') {
    console.log('left');
    position.left -= 1;
  }

  if(position.left > 650){
    position.left = 650;
    this.direction = 'b';
  }

  if(position.left < 8){
    position.left = 8;
    this.direction = 'b';
  }
  this.node.offset(position);
  setTimeout(this.move.bind(this), this.SPEED);
};
