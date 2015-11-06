var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  if(req.method === 'GET'){
    fs.readFile('./index.html', function(err, body) {
      if (err) {
			     res.writeHead(500);
			        res.end();
		  }
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.end(body);
    });
  }
}).listen('3000');
