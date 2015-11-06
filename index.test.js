var chai = require('chai');
var expect = chai.expect;
var should = chai.should()
// var homePage = require('./server');
var assert = require('assert');
var	http = require('http');
var sinon = require('sinon');
var chai = require('chai');
var request = require('superagent');
// var request = require('supertest')('http://localhost:8080');
var express = require('express');
var app = express();

var server = require('./server');

describe('the server', function () {
  it('should return 200', function (done) {
    http.get('http://localhost:8000', function (res) {
      assert.equal(200, res.statusCode);
      done();
    });
  });

  it('should make GET request to display button', function (done) {
    http.get('http://localhost:8000', function (res) {
      var data = '';
      res.on('data', function (chunk) {
        data += chunk;
      });
      res.on('end', function () {
        data.should.not.be.empty 
          done();
      });
    });
  });

  it('should post data on button click', function (done) {
    request.post('http://localhost:8000')
    .send({hey: 'hey'})
    .end(function(res){
      console.log('here!');
      expect(res).to.exist;
      expect(res.statusCode).to.equal(200);
      done();
   })
  });

});
