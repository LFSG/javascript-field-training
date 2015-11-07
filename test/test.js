var describe = require('mocha');
var expect = chai.expect;

describe('hello', function() {
	it('should say hello and anyone\'s name', function(){
		expect(hello('Will')).to.equal('Hello Will!');
		// this function should have a return statement. This way, the browser should have acess to it.
	});

	it('should say world if provided no parameters', function(){
		expect(hello()).to.equal('Hello World!');
	});
});