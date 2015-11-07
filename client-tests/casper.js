describe('Spaceship', function(){
	describe('A space ship is created', function() {
		it('ship should exist', function () {
			var shipDiv = document.getElementById('ship');
			expect(shipDiv.constructor.name).to.be('HTMLImageElement', 'You should be using an image tag for this exericse.');
		});

		it('should be an image of a ship', function() {
			var shipDiv = document.getElementById('ship');
			expect(shipDiv.getAttribute('src')).to.equal('./pictures/ship.gif',
				'You need to link a source to your image tag');
		});
	});
	describe('Ths spaceship has a move property', function(){
		it('should have a move method', function(){
			var move = Ship.prototype.move.constructor;
			expect(move).to.be(Function, 'the move function must be on the constructor prototype.');
		});
	});
});

describe('Asteroid', function() {
	it('an asteroid should exist', function () {
		var asteroid = document.getElementsByClassName('asteroid');
		expect(asteroid[0].constructor.name).to.be('HTMLImageElement', 'You should be using an image tag for this exercise');
	});

	it('should be an image of an asteroid', function() {
		var asteroid = document.getElementsByClassName('asteroid');
		expect(asteroid[0].getAttribute('src')).to.equal('./pictures/asteroid.png',
			'You need your source to link to your asteroid image');
	});
	describe('Ths asteroid has a move property', function(){
		it('should have a move method', function(){
			var move = AddAsteroid.prototype.move.constructor;
			expect(move).to.be(Function, 'the move function must be on the constructor prototype to conserve memory');
		});
	});
});
