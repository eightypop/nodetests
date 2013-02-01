var http = require('http');
var fs = require('fs');
var path = require('path');
var server = http.createServer(function (request, response) {

	console.log ('request starting...');
	
	var filePath = '.' + request.url;
	if (filePath == './') filePath = './index.html';
	
	var extension = path.extname(filePath);
	var contentType = 'text/html';
	switch (extension) {
		case '.js':
			contentType = 'text/javascript'; break;
		case '.css':
			contentType = 'text/css'; break;
	}

	fs.exists(filePath, function(exists){
		if(exists) {
			fs.readFile(filePath, function (error, content){
				if(error) {
					response.writehead(500);
					response.end();
				}	
				else {
					response.writeHead(200, {'Content-Type': contentType});
					response.end(content, 'utf-8');
				}
			});
		}
		else {
			response.writeHead(404);
			response.end();
		}
	});
	
});

server.listen(80);

console.log('Server running at http://127.0.0.1:80/');
