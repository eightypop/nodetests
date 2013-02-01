
// file server

var node_static = require('node-static');

var file = new (node_static.Server)('./public');

var http = require('http');

http.createServer(function (request, response) {
	request.addListener('end', function() {
		file.serve(request, response, function (err, res){
			if(err){
				console.error('Error serving ' + request.url +'-'+err.message);
				response.writeHead(err.status, err.headers);
				response.end();
			} else {
				console.log(request.url + ' - '+res.message);
			}
		});
	});
}).listen(1897);

console.log('node-static is listening on http://127.0.0.1:1897'); 
