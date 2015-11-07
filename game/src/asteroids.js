function AddAsteroid($el) {
	this.node = $('<img class="asteroid" id="asteroid1" src="./pictures/asteroid.png"></img>');
	this.SPEED = Math.floor(Math.random()*50);
	this.node.css({top: 0, left: Math.floor(Math.random() * 650) + 8});
	$el.append(this.node);
	setTimeout(this.move.bind(this), this.SPEED);
}

AddAsteroid.prototype.move = function () {
	var ship = $('#ship');
	var position = this.node.position();
	position.top += 1;
	this.node.offset(position);
  setTimeout(this.move.bind(this), this.SPEED);

	if(position.top > 550) {
		this.node.remove();
		// var score = $('#score').text();
		// score++;
		// $('#score').text(score);
	}

	if(ship.position().left - position.left < 45 && ship.position().left - position.left > -45 && ship.position().top - position.top < 45 && ship.position().top - position.top > -45){
    alert('game over');
		location.reload();
  }
};


function AddBonusToken($el) {
	this.node = $('<img class="bonusToken" src="./pictures/cs.png"></img>')
	this.SPEED = Math.floor(Math.random()*40);
	this.node.css({top: Math.floor(Math.random() * 250) + 8, left: Math.floor(Math.random() * 650) + 8});
	$el.append(this.node);
	setTimeout(this.move.bind(this), this.SPEED);
}

AddBonusToken.prototype.move = function () {
	var ship = $('#ship');
	var position = this.node.position();
	position.top += 1;
	this.node.offset(position);
	setTimeout(this.move.bind(this), this.SPEED);

	if(ship.position().left - position.left < 50 && ship.position().left - position.left > -50 && ship.position().top - position.top < 50 && ship.position().top - position.top > -50){
    	var score = +$('#score').text();
		score ++;
		$('#score').text(score);
		this.node.remove();
    }

  	if(position.top > 550) {
  		var score = $('#score').text();
		score --;
		$('#score').text(score);
		this.node.remove();
	}

}