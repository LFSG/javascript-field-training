var expect = require('chai').expect;
// var homePage = require('./server');
var assert = require('assert');
var	http = require('http');
var sinon = require('sinon');

var server = require('./server');

describe('the server', function () {
  it('should return 200', function (done) {
    http.get('http://localhost:80', function (res) {
      assert.equal(200, res.statusCode);
      done();
    });
  });

  it('should say "Hello, world!"', function (done) {
    http.get('http://localhost:80', function (res) {
      var data = '';
 
      res.on('data', function (chunk) {
        data += chunk;
      });

      res.on('end', function () {
        assert.equal('Hello, world!\n', data);
        done();
      });
    });
  });

  it('should get data', function (done) {
  	http.get('http://localhost:80', function (res) {
  		var data;
  		done();
  	})

  });

  it('should post data', function (done) {
  	http.get('http://localhost:80', function (res) {
  		done();
  	})

  });

});

// describe('the client', function() {
// 	it('testArray', function() {
// 		expect(homePage.testArray).to.be.Array;

// 		function isArray(array) {
// 			return array.every(function(item) {
// 				return typeof item === Array;
// 			})
// 		}
// 	});
// 	it('one', function() {
// 		expect(homePage.one).to.be.String;

// 	});

// });