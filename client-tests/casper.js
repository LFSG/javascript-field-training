// describe('A space ship is created', function() {
// // 	it('should be an image of a ship', function() {
// // 		var shipDiv = document.getElementById('ship');
// // 		expect(shipDiv).to.exist("make sure your <img> has an id = ship");
// // 	});
// });

describe('Ths spaceship can move left and right', function(){
	var div = document.createElement('div');
	var spaceship = new Ship(div);
	var spy = expect.spyOn(spaceship, 'move');

	it('should have a move property', function(){
		expect(spy)
	})
});

mocha.globals();
if (window.mochaPhantomJS) {
	console.log('running');
	mochaPhantomJS.run();
} else {
	console.log('not running');
}
