function AddAsteroid($el) {
	this.node = $('<img class="asteroid" id="asteroid1" src="./pictures/asteroid.png"></img>');
	this.SPEED = Math.floor(Math.random()*50);
	this.node.css({top: 0, left: Math.floor(Math.random() * 14) * 50 + 8});
	$el.append(this.node);
	setTimeout(this.move.bind(this), this.SPEED);
}

AddAsteroid.prototype.move = function () {
	var position = this.node.position();
	position.top += 1;
	this.node.offset(position);
  setTimeout(this.move.bind(this), this.SPEED);

	if(position.top > 550) {
		this.node.remove();
		var score = $('#score').text();
		score++;
		$('#score').text(score);
	}

	if($('#ship').position().left - position.left < 50 && $('#ship').position().left - position.left > -50 && position.top  > 510){
    alert('game over');
		location.reload();
  }
};
