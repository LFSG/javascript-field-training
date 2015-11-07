var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  if(req.method === 'GET'){
    fs.readFile('./index.html', function(err, body) {
      if (err) {
			     res.writeHead(500);
			        res.end('error');
		  }
    res.writeHead(200, {
      'Content-Type': 'text/html'
    })
    res.end(body);
    })
  }

  if(req.method === 'POST') {
    console.log('serverrrrr');
    req.on('data', function(chunk){
      var body;
      body = chunk;

      
    });
    req.on('end', function() {
      res.writeHead(200);
      // res.write();
      res.end('Hello, world!\n');
      // console.log(res);
    });
  }

}).listen(8000);
