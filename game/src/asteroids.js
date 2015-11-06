function AddAsteroid($el) {
	this.node = $('<img class="asteroid" id="asteroid1" src="./pictures/asteroid.png"></img>');
	this.speed = 100;
	$el.append(this.node);

}

AddAsteroid.prototype.move = function () {
	var position = this.node.position();
	position.top -= 50;
}

