var expect = chai.expect;
var should = chai.should()
var assert = require('assert');
var sinon = require('sinon');

var server;

before(function () {
  server = sinon.fakeServer.create();
});

after(function () {
  server.restore();
});

it('should create a server that can listen for requests', function() {
  var callback = sinon.spy();
  getTodos(42, callback);

  server.requests[0].respond( 200,
    JSON.stringify([{ id: 1, test: "Provides examples", done: true}])
  );

  assert(callback.calledOnce);
});







// describe('the server', function () {
//   it('should return 200', function (done) {
//     http.get('http://localhost:80', function (res) {
//       assert.equal(200, res.statusCode);
//       done();
//     });
//   });

//   it('should say "Hello, world!"', function (done) {
//     http.get('http://localhost:80', function (res) {
//       var data = '';
//       res.on('data', function (chunk) {
//         data += chunk;
//       });
//       res.on('end', function () {
//         res.body.should.be.a('string');
//         done();
//       });
//     });
//   });

//   it('should get data w code 200', function (done) {
//   	chai.request(server)
//         .get('/index.html') 
//         .end(function (err, res){
//           res.should.have.status(500);
         
//         })
  		
//   		done();
  
//   });

//   it('should post data', function (done) {
//   	http.get('http://localhost:80', function (res) {
//   		done();
//   	})
//   });

// });
