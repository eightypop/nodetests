var http = require('http');
var server = http.createServer(function (request, response) {
	console.log ('request starting...');
	if(request.method == 'POST'){
		var msg='';
		request.on('data', function(chunk){
			msg += chunk.toString();
			console.log(msg + ' recieved');
		});
		request.on('end', function(){
			console.log('responding to request'); 
			var contentType = 'text/html';
			response.writeHead(200, {'Content-Type': contentType});
			response.write("Hello Phone! Did you say '" + msg + "'?");
			response.end();
		});
	}
});

server.listen(8005);

console.log('Server running at http://127.0.0.1:8005/');
