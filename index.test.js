var expect = require('chai').expect;
var should = require('chai').should()
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
        res.body.should.be.a('string');
        done();
      });
    });
  });

  it('should get data w code 200', function (done) {
  	chai.request(server)
        .get('/index.html') 
        .end(function (err, res){
          res.should.have.status(500);
         
        })
  		
  		done();
  
  });

  it('should post data', function (done) {
  	http.get('http://localhost:80', function (res) {
  		done();
  	})
  });

});
